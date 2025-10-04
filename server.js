const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');
const path = require('path');
const Airtable = require('airtable');

// Initialize Airtable
const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Create checkout session endpoint
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { amount, description, successUrl, cancelUrl, userId, packageType, totalSessions } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: description,
            },
            unit_amount: amount, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        userId: userId,
        packageType: packageType,
        totalSessions: totalSessions
      }
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// Stripe webhook to handle successful payments
app.post('/api/stripe-webhook', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle successful payment
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const { userId, packageType, totalSessions } = session.metadata;

    try {
      // Create session package in Airtable
      await airtable('Session Packages').create([
        {
          fields: {
            'User ID': userId,
            'Package Type': packageType,
            'Total Sessions': parseInt(totalSessions),
            'Sessions Used': 0,
            'Sessions Remaining': parseInt(totalSessions),
            'Amount Paid': session.amount_total / 100, // Convert from cents
            'Purchase Date': new Date().toISOString(),
            'Status': 'Active',
            'Stripe Session ID': session.id
          }
        }
      ]);

      console.log(`Session package created for user ${userId}: ${packageType}`);
    } catch (error) {
      console.error('Error creating session package in Airtable:', error);
    }
  }

  res.json({received: true});
});

// Cal.com webhook to handle completed bookings
app.post('/api/cal-webhook', express.json(), async (req, res) => {
  try {
    const { event_type, payload } = req.body;
    
    if (event_type === 'BOOKING_CREATED' || event_type === 'BOOKING_CONFIRMED') {
      const { uid, title, start_time, end_time, attendees } = payload;
      
      // Extract session type and length from title
      const sessionMatch = title.match(/(SI|Movement)\s*(\d+)min/i);
      if (sessionMatch) {
        const sessionType = sessionMatch[1];
        const sessionLength = parseInt(sessionMatch[2]);
        
        // Find the user's active package that matches this session type
        const packages = await airtable('Session Packages')
          .select({
            filterByFormula: `{Status} = 'Active'`,
            sort: [{ field: 'Purchase Date', direction: 'desc' }]
          })
          .all();
        
        // For now, we'll need to manually match users to packages
        // In a production system, you'd want to store the user's email in the booking
        console.log(`Session booked: ${sessionType} ${sessionLength}min for ${attendees[0]?.email}`);
        
        // You can add logic here to automatically decrement session counts
        // when sessions are completed
      }
    }
    
    res.json({ received: true });
  } catch (error) {
    console.error('Cal.com webhook error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
