import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import { useAuth } from '../contexts/AuthContext';

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [packages, setPackages] = useState([]);
  const [packagesLoading, setPackagesLoading] = useState(true);
  const [packagesError, setPackagesError] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [sessionsLoading, setSessionsLoading] = useState(true);
  const [sessionsError, setSessionsError] = useState(null);
  const [sessionFilter, setSessionFilter] = useState('all'); // all, movement, si
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!currentUser) {
      navigate('/auth/login', { state: { from: '/dashboard' } });
    }
  }, [currentUser, navigate]);

  // Fetch user's packages
  useEffect(() => {
    async function fetchPackages() {
      if (!currentUser) return;
      
      try {
        setPackagesLoading(true);
        setPackagesError(null);
        
        const response = await fetch(`http://localhost:3001/api/user-packages/${currentUser.uid}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch packages');
        }
        
        const data = await response.json();
        setPackages(data.packages);
      } catch (error) {
        console.error('Error fetching packages:', error);
        setPackagesError('Unable to load your packages. Please try again later.');
      } finally {
        setPackagesLoading(false);
      }
    }
    
    fetchPackages();
  }, [currentUser]);

  // Fetch user's session history
  useEffect(() => {
    async function fetchSessions() {
      if (!currentUser) return;
      
      try {
        setSessionsLoading(true);
        setSessionsError(null);
        
        const response = await fetch(`http://localhost:3001/api/user-sessions/${currentUser.uid}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch sessions');
        }
        
        const data = await response.json();
        setSessions(data.sessions);
      } catch (error) {
        console.error('Error fetching sessions:', error);
        setSessionsError('Unable to load your session history. Please try again later.');
      } finally {
        setSessionsLoading(false);
      }
    }
    
    fetchSessions();
  }, [currentUser]);

  async function handleLogout() {
    try {
      setLoading(true);
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
    setLoading(false);
  }

  return (
    <PageLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-heading text-primary mb-8 text-center">
            My Account
          </h1>

          <div className="space-y-8">
            {/* Welcome Message */}
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <h2 className="text-2xl font-heading text-neutralDark mb-4">
                Welcome, {currentUser?.displayName || currentUser?.email || 'Client'}!
              </h2>
              <p className="text-neutralDark/80 mb-4">
                Your account is active. You can now purchase session packages and book appointments.
              </p>
              <button
                onClick={handleLogout}
                disabled={loading}
                className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition disabled:opacity-50"
              >
                {loading ? 'Signing Out...' : 'Sign Out'}
              </button>
            </div>

            {/* Session Packages */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-heading text-neutralDark mb-6">
                Your Session Packages
              </h2>
              
              {packagesLoading ? (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
                  <p className="text-neutralDark/60 mt-4">Loading your packages...</p>
                </div>
              ) : packagesError ? (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {packagesError}
                </div>
              ) : packages.length === 0 ? (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 text-neutralDark/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <h3 className="text-lg font-semibold text-neutralDark mb-2">No packages yet</h3>
                  <p className="text-neutralDark/70 mb-4">Purchase a session package to get started</p>
                  <Link
                    to="/packages"
                    className="inline-block px-6 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
                  >
                    View Packages
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {packages.map((pkg) => (
                    <div key={pkg.id} className="border border-neutralDark/10 rounded-lg p-6 hover:border-accent/30 transition">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-neutralDark mb-1">
                            {pkg.packageName}
                          </h3>
                          <p className="text-sm text-neutralDark/60">
                            Purchased {new Date(pkg.purchaseDate).toLocaleDateString()}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          pkg.status === 'Active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {pkg.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center p-3 bg-accent/5 rounded-lg">
                          <p className="text-2xl font-bold text-accent">{pkg.totalSessions}</p>
                          <p className="text-xs text-neutralDark/60">Total Sessions</p>
                        </div>
                        <div className="text-center p-3 bg-secondary/5 rounded-lg">
                          <p className="text-2xl font-bold text-secondary">{pkg.sessionsUsed}</p>
                          <p className="text-xs text-neutralDark/60">Sessions Used</p>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <p className="text-2xl font-bold text-green-600">{pkg.sessionsRemaining}</p>
                          <p className="text-xs text-neutralDark/60">Remaining</p>
                        </div>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div 
                          className="bg-accent h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(pkg.sessionsUsed / pkg.totalSessions) * 100}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-neutralDark/60">
                          ${(pkg.amount / 100).toFixed(2)} total
                        </span>
                        {pkg.sessionsRemaining > 0 && (
                          <Link
                            to="/book"
                            className="text-accent hover:text-accent/80 font-semibold"
                          >
                            Book a Session →
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Session History */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-heading text-neutralDark">
                  Session History
                </h2>
                {sessions.length > 0 && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSessionFilter('all')}
                      className={`px-3 py-1 rounded-lg text-sm font-semibold transition ${
                        sessionFilter === 'all'
                          ? 'bg-accent text-white'
                          : 'bg-neutralDark/5 text-neutralDark/70 hover:bg-neutralDark/10'
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setSessionFilter('movement')}
                      className={`px-3 py-1 rounded-lg text-sm font-semibold transition ${
                        sessionFilter === 'movement'
                          ? 'bg-accent text-white'
                          : 'bg-neutralDark/5 text-neutralDark/70 hover:bg-neutralDark/10'
                      }`}
                    >
                      Movement
                    </button>
                    <button
                      onClick={() => setSessionFilter('si')}
                      className={`px-3 py-1 rounded-lg text-sm font-semibold transition ${
                        sessionFilter === 'si'
                          ? 'bg-accent text-white'
                          : 'bg-neutralDark/5 text-neutralDark/70 hover:bg-neutralDark/10'
                      }`}
                    >
                      SI
                    </button>
                  </div>
                )}
              </div>
              
              {sessionsLoading ? (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
                  <p className="text-neutralDark/60 mt-4">Loading your sessions...</p>
                </div>
              ) : sessionsError ? (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {sessionsError}
                </div>
              ) : sessions.length === 0 ? (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 text-neutralDark/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-neutralDark mb-2">No sessions yet</h3>
                  <p className="text-neutralDark/70 mb-4">Book your first session to get started</p>
                  <Link
                    to="/book"
                    className="inline-block px-6 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
                  >
                    Book a Session
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {sessions
                    .filter(session => {
                      if (sessionFilter === 'all') return true;
                      if (sessionFilter === 'movement') return session.sessionType?.toLowerCase().includes('movement');
                      if (sessionFilter === 'si') return session.sessionType?.toLowerCase().includes('si') || session.sessionType?.toLowerCase().includes('structural');
                      return true;
                    })
                    .map((session, index) => (
                      <div key={session.id} className="border border-neutralDark/10 rounded-lg p-6 hover:border-accent/30 transition">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                session.sessionType?.toLowerCase().includes('movement')
                                  ? 'bg-accent/10 text-accent'
                                  : 'bg-secondary/10 text-secondary'
                              }`}>
                                {session.sessionType?.toLowerCase().includes('movement') ? (
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                ) : (
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                  </svg>
                                )}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-neutralDark mb-1">
                                {session.duration}min {session.sessionType}
                              </h3>
                              <p className="text-sm text-neutralDark/60">
                                {new Date(session.sessionDate).toLocaleDateString('en-US', {
                                  weekday: 'long',
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </p>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            session.status === 'Completed'
                              ? 'bg-green-100 text-green-700'
                              : session.status === 'Scheduled'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {session.status}
                          </span>
                        </div>
                        
                        {session.notes && (
                          <div className="mt-3 p-3 bg-neutralDark/5 rounded-lg">
                            <p className="text-sm font-semibold text-neutralDark mb-1">Session Notes:</p>
                            <p className="text-sm text-neutralDark/70">{session.notes}</p>
                          </div>
                        )}
                        
                        {index < sessions.length - 1 && (
                          <div className="absolute left-8 top-20 bottom-0 w-px bg-neutralDark/10"></div>
                        )}
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Other Account Features */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-heading text-neutralDark mb-6">
                Coming Soon
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-neutralDark/5 rounded-lg opacity-60">
                  <svg className="w-6 h-6 text-neutralDark/40 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-neutralDark mb-1">Manage Upcoming Appointments</h3>
                    <p className="text-sm text-neutralDark/70">View, reschedule, or cancel your upcoming sessions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-neutralDark/5 rounded-lg opacity-60">
                  <svg className="w-6 h-6 text-neutralDark/40 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-neutralDark mb-1">Access Payment History</h3>
                    <p className="text-sm text-neutralDark/70">View all your transactions and download receipts</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-neutralDark/5 rounded-lg opacity-60">
                  <svg className="w-6 h-6 text-neutralDark/40 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-neutralDark mb-1">Update Your Profile Information</h3>
                    <p className="text-sm text-neutralDark/70">Keep your contact details and preferences up to date</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Security Notice */}
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <div>
                  <h2 className="text-2xl font-heading text-neutralDark mb-3">
                    How Your Account is Protected
                  </h2>
                  <p className="text-neutralDark/80 mb-4">
                    Your account uses industry-standard security:
                  </p>
                  <ul className="space-y-3 text-neutralDark/80">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <strong>Firebase Authentication</strong> - Google's authentication service with automatic password hashing and secure token management
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <strong>HTTPS Encryption</strong> - All data transmitted between your browser and our servers is encrypted
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <strong>Stripe Payment Processing</strong> - PCI DSS Level 1 certified payment handling (we never store your card details)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <strong>Secure Session Management</strong> - Your login session is protected and automatically expires when you close your browser
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Dashboard;