import PageLayout from '../components/PageLayout';

function Dashboard() {
  return (
    <PageLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-heading text-primary mb-8 text-center">
            Your Dashboard
          </h1>

          <div className="space-y-8">
            {/* User Information */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-heading text-neutralDark mb-6">
                Welcome, Client!
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutralDark/80">
                <div>
                  <p className="font-semibold">Email:</p>
                  <p>Not signed in</p>
                </div>
                <div>
                  <p className="font-semibold">Member Since:</p>
                  <p>N/A</p>
                </div>
              </div>
            </div>

            {/* Session Packages */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-heading text-neutralDark mb-6">
                Your Session Packages
              </h2>
              <div className="text-center py-8">
                <p className="text-neutralDark/60 mb-4">
                  No session packages purchased yet
                </p>
                <a
                  href="/packages"
                  className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
                >
                  View Packages
                </a>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-heading text-neutralDark mb-6">
                Payment Information
              </h2>
              <p className="text-neutralDark/80">
                (Coming soon: Manage your payment methods and view past transactions here.)
              </p>
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-heading text-neutralDark mb-6">
                Upcoming Sessions
              </h2>
              <p className="text-neutralDark/80">No upcoming sessions.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Dashboard;