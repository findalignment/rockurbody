import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import PageLayout from '../components/PageLayout';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      setError('Failed to log in. Please check your credentials.');
      console.error('Login error:', error);
    }

    setLoading(false);
  }

  return (
    <PageLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h1 className="text-3xl font-heading text-primary mb-8 text-center">
              Sign In
            </h1>
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutralDark mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-neutralLight rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-neutralDark mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-neutralLight rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 transition disabled:opacity-50"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-neutralDark/80">
                Don't have an account?{' '}
                <Link to="/auth/signup" className="text-accent hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Login;
