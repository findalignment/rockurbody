import { useState } from 'react';
// import { useAuth } from '../contexts/AuthContext';
import stripePromise from '../config/stripe';
// import { SessionService } from '../services/sessionService';

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
  // const { currentUser } = useAuth();
  const currentUser = null; // Temporarily disable auth

  const handlePayment = async () => {
    if (!currentUser) {
      alert('Please sign in to purchase sessions');
      return;
    }

    setLoading(true);
    
    try {
      const stripe = await stripePromise;
      
      // Create checkout session on your backend
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount, // Amount in cents
          description: description,
          userId: currentUser.uid,
          packageType: packageType,
          totalSessions: totalSessions,
          successUrl: successUrl || `${window.location.origin}/payment-success`,
          cancelUrl: cancelUrl || `${window.location.origin}/payment-cancelled`,
        }),
      });

      const session = await response.json();

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error('Stripe error:', result.error);
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
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
