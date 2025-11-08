import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';

function Contact() {
  return (
    <PageLayout>
      <PageHero 
        imageSrc="/contact-hero.jpg"
        title="Get in Touch"
        subtitle="Located in Santa Cruz, CA"
      />
      <div className="pt-16 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Location
                </h3>
                <p className="text-neutralDark/80">
                  <strong>Studio Location:</strong><br />
                  Mavericks Fitness<br />
                  311 Soquel Ave<br />
                  Santa Cruz, CA 95062
                </p>
                <div className="mt-4 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <p className="text-neutralDark/90 font-semibold mb-2">
                    🚗 Mobile Training Available
                  </p>
                  <p className="text-neutralDark/80 text-sm">
                    I come to you! Serving clients throughout Santa Cruz County, Monterey County, Santa Clara County, and the greater San Francisco Bay Area (up to 1.5 hours from Santa Cruz). Travel time billed at session rate.
                  </p>
                </div>
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
                  Email
                </h3>
                <a 
                  href="mailto:rock@rockurbody.com"
                  className="text-accent hover:text-accent/80 transition"
                >
                  rock@rockurbody.com
                </a>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Ready to Do This?
                </h3>
                <p className="text-neutralDark/80 mb-4">
                  Let's get your body back in business. Book a free consultation or dive straight into a session. Your call.
                </p>
                <Button 
                  to="/book"
                  variant="accent"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Contact;