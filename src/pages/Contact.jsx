import { Link } from 'react-router-dom';
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
        alt="Contact Rock Your Body structural integration and movement education studio in Santa Cruz, California"
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

          {/* Related Topics */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/book" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Book a Session
              </Link>
              <Link to="/consult" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Free Consultation
              </Link>
              <Link to="/services" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Services
              </Link>
              <Link to="/about" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                About
              </Link>
              <Link to="/faq" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                FAQ
              </Link>
              <Link to="/packages" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Programs & Packages
              </Link>
              <Link to="/pricing" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Pricing
              </Link>
              <Link to="/smart-starts" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Smart Starts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Contact;