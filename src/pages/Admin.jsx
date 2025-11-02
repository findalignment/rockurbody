import { useState, useEffect } from 'react';
// import { useAuth } from '../contexts/AuthContext';
import PageLayout from '../components/PageLayout';
// import { SessionService } from '../services/sessionService';
import logger from '../utils/logger';

function Admin() {
  // const { currentUser } = useAuth();
  const currentUser = null; // Temporarily disable auth
  const [sessionPackages, setSessionPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [sessionDate, setSessionDate] = useState('');
  const [sessionType, setSessionType] = useState('');

  // Load all session packages
  useEffect(() => {
    const loadPackages = async () => {
      try {
        // This would need to be updated to get all packages, not just current user's
        // For now, we'll show a message that this is for admin use
        setLoading(false);
      } catch (error) {
        logger.error('Error loading packages:', error);
        setLoading(false);
      }
    };

    loadPackages();
  }, []);

  const handleMarkSessionUsed = async () => {
    if (!selectedPackage || !sessionDate || !sessionType) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await SessionService.useSession(selectedPackage, sessionDate, sessionType);
      alert('Session marked as used successfully');
      setSessionDate('');
      setSessionType('');
      setSelectedPackage(null);
    } catch (error) {
      logger.error('Error marking session as used:', error);
      alert('Error marking session as used');
    }
  };

  // Simple admin check (in production, you'd want proper admin authentication)
  if (currentUser?.email !== 'rock@rockurbody.com') {
    return (
      <PageLayout>
        <div className="pt-24 pb-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-heading text-primary mb-4">Admin Access Required</h1>
            <p className="text-neutralDark/80">This page is for administrators only.</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-heading text-primary mb-8">Admin Panel</h1>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-heading text-neutralDark mb-6">
              Mark Session as Completed
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutralDark mb-2">
                  Session Date
                </label>
                <input
                  type="date"
                  value={sessionDate}
                  onChange={(e) => setSessionDate(e.target.value)}
                  className="w-full px-4 py-3 border border-neutralLight rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutralDark mb-2">
                  Session Type
                </label>
                <select
                  value={sessionType}
                  onChange={(e) => setSessionType(e.target.value)}
                  className="w-full px-4 py-3 border border-neutralLight rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select session type</option>
                  <option value="SI 60min">SI 60min</option>
                  <option value="SI 90min">SI 90min</option>
                  <option value="Movement 60min">Movement 60min</option>
                  <option value="Movement 90min">Movement 90min</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutralDark mb-2">
                  Package ID (from Airtable)
                </label>
                <input
                  type="text"
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  placeholder="Enter Airtable package ID"
                  className="w-full px-4 py-3 border border-neutralLight rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              
              <button
                onClick={handleMarkSessionUsed}
                className="w-full px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
              >
                Mark Session as Used
              </button>
            </div>
          </div>
          
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Admin Instructions</h3>
            <ul className="text-yellow-700 space-y-1 text-sm">
              <li>• Get the Package ID from Airtable (Session Packages table)</li>
              <li>• Enter the date when the session was completed</li>
              <li>• Select the correct session type and length</li>
              <li>• Click "Mark Session as Used" to update the package</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Admin;
