import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

function PaymentSuccess() {
  return (
    <PageLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-heading text-green-800 mb-4">
              Payment Successful!
            </h1>
            <p className="text-green-700 text-lg">
              Thank you for your payment. You will receive a confirmation email shortly.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              to="/dashboard"
              className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
            >
              Go to Dashboard
            </Link>
            <div>
              <Link
                to="/"
                className="text-neutralDark/70 hover:text-accent transition"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default PaymentSuccess;
