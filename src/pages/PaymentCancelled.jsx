import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

function PaymentCancelled() {
  return (
    <PageLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 mb-8">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-3xl font-heading text-yellow-800 mb-4">
              Payment Cancelled
            </h1>
            <p className="text-yellow-700 text-lg">
              Your payment was cancelled. No charges have been made.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              to="/packages"
              className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
            >
              Try Again
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

export default PaymentCancelled;
