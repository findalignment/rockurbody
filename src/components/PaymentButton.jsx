import { useState } from 'react';
import stripePromise from '../config/stripe';

function PaymentButton({ 
  amount, 
  description, 
  successUrl, 
  cancelUrl,
  packageType,
  totalSessions,
  className = "",
  children 
}) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    
    try {
      const stripe = await stripePromise;
      
      if (!stripe) {
        alert('Payment system is not configured. Please contact rock@rockurbody.com to complete your purchase.');
        setLoading(false);
        return;
      }
      
      // Create checkout session on your backend
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount, // Amount in cents
          description: description,
          packageType: packageType,
          totalSessions: totalSessions,
          successUrl: successUrl || `${window.location.origin}/payment-success`,
          cancelUrl: cancelUrl || `${window.location.origin}/payment-cancelled`,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Backend error:', errorText);
        alert('Payment system is temporarily unavailable. Please email rock@rockurbody.com to complete your purchase.');
        setLoading(false);
        return;
      }

      const session = await response.json();

      if (!session.id) {
        console.error('No session ID returned');
        alert('Payment system error. Please contact rock@rockurbody.com to complete your purchase.');
        setLoading(false);
        return;
      }

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error('Stripe error:', result.error);
        alert(`Payment failed: ${result.error.message}. Please contact rock@rockurbody.com for assistance.`);
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment system is temporarily unavailable. Please email rock@rockurbody.com to complete your purchase.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className={`${className} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {loading ? 'Processing...' : children}
    </button>
  );
}

export default PaymentButton;
