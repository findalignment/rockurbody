require('dotenv').config();
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

// Get user's session packages
app.get('/api/user-packages/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const records = await airtable('Session Packages')
      .select({
        filterByFormula: `{User ID} = '${userId}'`,
        sort: [{ field: 'Purchase Date', direction: 'desc' }]
      })
      .all();
    
    const packages = records.map(record => ({
      id: record.id,
      packageName: record.get('Package Name'),
      totalSessions: record.get('Total Sessions'),
      sessionsUsed: record.get('Sessions Used') || 0,
      sessionsRemaining: record.get('Sessions Remaining'),
      purchaseDate: record.get('Purchase Date'),
      status: record.get('Status'),
      amount: record.get('Amount')
    }));
    
    res.json({ packages });
  } catch (error) {
    console.error('Error fetching user packages:', error);
    res.status(500).json({ error: 'Failed to fetch packages' });
  }
});

// Get user's session history
app.get('/api/user-sessions/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { type } = req.query; // 'upcoming', 'past', or 'all'
    
    const records = await airtable('Individual Sessions')
      .select({
        filterByFormula: `{User ID} = '${userId}'`,
        sort: [{ field: 'Session Date', direction: 'desc' }]
      })
      .all();
    
    const allSessions = records.map(record => ({
      id: record.id,
      sessionDate: record.get('Session Date'),
      sessionType: record.get('Session Type'), // Movement or SI
      duration: record.get('Duration'), // 30, 60, 90, 120
      packageId: record.get('Package ID'),
      notes: record.get('Notes'),
      status: record.get('Status'), // Completed, Scheduled, Cancelled
      calComBookingId: record.get('Cal.com Booking ID'),
      calComRescheduleUrl: record.get('Cal.com Reschedule URL'),
      calComCancelUrl: record.get('Cal.com Cancel URL')
    }));
    
    // Filter based on type
    let sessions = allSessions;
    const now = new Date();
    
    if (type === 'upcoming') {
      sessions = allSessions.filter(s => {
        const sessionDate = new Date(s.sessionDate);
        return sessionDate >= now && s.status === 'Scheduled';
      });
      // Sort upcoming sessions ascending (soonest first)
      sessions.sort((a, b) => new Date(a.sessionDate) - new Date(b.sessionDate));
    } else if (type === 'past') {
      sessions = allSessions.filter(s => {
        const sessionDate = new Date(s.sessionDate);
        return sessionDate < now || s.status === 'Completed' || s.status === 'Cancelled';
      });
    }
    
    res.json({ sessions });
  } catch (error) {
    console.error('Error fetching user sessions:', error);
    res.status(500).json({ error: 'Failed to fetch sessions' });
  }
});

// Get user's payment history
app.get('/api/user-payments/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Fetch packages from Airtable (which contain Stripe session IDs)
    const records = await airtable('Session Packages')
      .select({
        filterByFormula: `{User ID} = '${userId}'`,
        sort: [{ field: 'Purchase Date', direction: 'desc' }]
      })
      .all();
    
    const payments = [];
    
    // For each package, fetch Stripe payment details
    for (const record of records) {
      const stripeSessionId = record.get('Stripe Session ID');
      const amount = record.get('Amount');
      const purchaseDate = record.get('Purchase Date');
      const packageName = record.get('Package Name');
      
      let paymentDetails = {
        id: record.id,
        packageName: packageName,
        amount: amount,
        date: purchaseDate,
        status: 'Paid',
        paymentMethod: 'Card',
        receiptUrl: null
      };
      
      // If we have a Stripe session ID, fetch additional details
      if (stripeSessionId) {
        try {
          const session = await stripe.checkout.sessions.retrieve(stripeSessionId);
          
          // Get payment intent for receipt
          if (session.payment_intent) {
            const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent);
            
            if (paymentIntent.charges && paymentIntent.charges.data.length > 0) {
              const charge = paymentIntent.charges.data[0];
              paymentDetails.receiptUrl = charge.receipt_url;
              paymentDetails.paymentMethod = charge.payment_method_details?.card?.brand 
                ? `${charge.payment_method_details.card.brand.toUpperCase()} •••• ${charge.payment_method_details.card.last4}`
                : 'Card';
            }
          }
        } catch (stripeError) {
          console.error('Error fetching Stripe details:', stripeError);
          // Continue with basic details from Airtable
        }
      }
      
      payments.push(paymentDetails);
    }
    
    res.json({ payments });
  } catch (error) {
    console.error('Error fetching user payments:', error);
    res.status(500).json({ error: 'Failed to fetch payment history' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Stripe webhook endpoint: http://localhost:${PORT}/api/stripe-webhook`);
  console.log(`Cal.com webhook endpoint: http://localhost:${PORT}/api/calcom-webhook`);
});
