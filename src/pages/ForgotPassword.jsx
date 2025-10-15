import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { useAuth } from '../contexts/AuthContext';
import { runFirebaseDiagnostics } from '../utils/firebaseConfigChecker';

function ForgotPassword() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [diagnostics, setDiagnostics] = useState(null);

  // Run Firebase diagnostics on component mount
  useEffect(() => {
    const runDiagnostics = async () => {
      try {
        const results = await runFirebaseDiagnostics();
        setDiagnostics(results);
      } catch (error) {
        console.error('Failed to run Firebase diagnostics:', error);
      }
    };
    
    runDiagnostics();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address.');
      }

      console.log('🔄 Attempting to send password reset email to:', email);
      console.log('🌐 Current domain:', window.location.origin);
      
      await resetPassword(email);
      setSuccess(true);
      setEmail('');
      console.log('✅ Password reset email sent successfully to:', email);
    } catch (error) {
      console.error('❌ Password reset error:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      console.error('Full error object:', error);
      
      // Enhanced error handling
      if (error.code === 'auth/user-not-found') {
        setError('No account found with this email address. Please check your email or create a new account.');
      } else if (error.code === 'auth/invalid-email') {
        setError('Invalid email address. Please check your email format.');
      } else if (error.code === 'auth/missing-email') {
        setError('Please enter an email address.');
      } else if (error.code === 'auth/invalid-action-code') {
        setError('The password reset link has expired or is invalid.');
      } else if (error.code === 'auth/unauthorized-continue-uri') {
        setError('Domain not configured. Please contact rock@rockurbody.com for assistance.');
      } else if (error.code === 'auth/invalid-api-key') {
        setError('Configuration error. Please contact rock@rockurbody.com for assistance.');
      } else if (error.code === 'auth/project-not-found') {
        setError('Project configuration error. Please contact rock@rockurbody.com for assistance.');
      } else if (error.message && error.message.includes('Domain not allowlisted')) {
        setError('Domain configuration issue. Please contact rock@rockurbody.com for assistance.');
      } else {
        setError(`Failed to send password reset email: ${error.message || 'Unknown error'}. Please contact rock@rockurbody.com for assistance.`);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageLayout>
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-heading font-bold text-neutralDark mb-2">
                Reset Password
              </h1>
              <p className="text-neutralDark/70">
                Enter your email and we'll send you a link to reset your password
              </p>
            </div>

            {/* Success Message */}
            {success && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">Check your email!</p>
                    <p className="text-sm">
                      We've sent password reset instructions to your email address.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutralDark mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-neutralDark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>

            {/* Back to Login */}
            <div className="mt-6 text-center">
              <Link
                to="/auth/login"
                className="text-secondary hover:text-secondary/80 font-semibold text-sm flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Login
              </Link>
            </div>

            {/* Firebase Diagnostics */}
            {diagnostics && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm font-semibold text-blue-800 mb-2">
                  🔍 Firebase Status Check
                </p>
                <div className="text-xs text-blue-700 space-y-1">
                  <div className="flex items-center gap-2">
                    <span>Config:</span>
                    <span className={diagnostics.config.isValid ? 'text-green-600' : 'text-red-600'}>
                      {diagnostics.config.isValid ? '✅ Valid' : '❌ Invalid'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Connection:</span>
                    <span className={diagnostics.connection.success ? 'text-green-600' : 'text-red-600'}>
                      {diagnostics.connection.success ? '✅ Connected' : '❌ Failed'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Domain:</span>
                    <span className={diagnostics.domain.isAuthorized ? 'text-green-600' : 'text-yellow-600'}>
                      {diagnostics.domain.isAuthorized ? '✅ Authorized' : '⚠️ Check Required'}
                    </span>
                  </div>
                </div>
                {!diagnostics.config.isValid && (
                  <p className="text-xs text-red-600 mt-2">
                    Configuration issue detected. Check environment variables.
                  </p>
                )}
                {!diagnostics.domain.isAuthorized && (
                  <p className="text-xs text-yellow-600 mt-2">
                    Domain may need to be added to Firebase authorized domains.
                  </p>
                )}
              </div>
            )}

            {/* Info Notice */}
            <div className="mt-8 p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
              <p className="text-sm font-semibold text-neutralDark mb-2">
                Didn't receive the email?
              </p>
              <ul className="text-xs text-neutralDark/70 space-y-1 list-disc list-inside">
                <li>Check your spam/junk folder (look for emails from Firebase)</li>
                <li>Make sure you entered the correct email address</li>
                <li>Wait a few minutes - emails can take up to 5 minutes to arrive</li>
                <li>Check that the email is registered with an account</li>
                <li>The reset link expires in 1 hour</li>
                <li>Check browser console (F12) for detailed error messages</li>
                <li>Verify your domain is authorized in Firebase Console</li>
              </ul>
              <p className="text-xs text-neutralDark/70 mt-3">
                <strong>Still having issues?</strong> Email rock@rockurbody.com with your email address and any error messages from the browser console.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default ForgotPassword;
