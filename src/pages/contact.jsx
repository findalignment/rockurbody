import PageLayout from '../components/PageLayout';

function Contact() {
  return (
    <PageLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-heading text-primary mb-8">
            Contact & Location
          </h1>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Location
                </h3>
                <p className="text-neutralDark/80">
                  Santa Cruz, California
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Hours
                </h3>
                <p className="text-neutralDark/80">
                  By appointment only<br />
                  Monday - Friday: 6am - 8pm<br />
                  Saturday & Sunday: 8am - 5pm
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Book a Session
                </h3>
                <p className="text-neutralDark/80 mb-4">
                  Ready to transform how you move?
                </p>
                <button className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition">
                  Schedule Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Contact;