import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import PageLayout from '../components/PageLayout';

function Signup() {
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(formData.email, formData.password, formData.displayName);
      navigate('/dashboard');
    } catch (error) {
      setError('Failed to create an account. Please try again.');
      console.error('Signup error:', error);
    }

    setLoading(false);
  }

  return (
    <PageLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h1 className="text-3xl font-heading text-primary mb-8 text-center">
              Create Account
            </h1>
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="displayName" className="block text-sm font-medium text-neutralDark mb-2">
                  Full Name
                </label>
                <input
                  id="displayName"
                  name="displayName"
                  type="text"
                  value={formData.displayName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutralLight rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutralDark mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className="w-full px-4 py-3 border border-neutralLight rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutralDark mb-2">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutralLight rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 transition disabled:opacity-50"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-neutralDark/80">
                Already have an account?{' '}
                <Link to="/auth/login" className="text-accent hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Signup;
