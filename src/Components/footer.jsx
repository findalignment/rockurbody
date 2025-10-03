import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-neutralDark text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              Rock Your Body
            </h3>
            <p className="text-white/70">
              Movement education and structural integration in Monterey, CA
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/about" className="block text-white/70 hover:text-white transition">
                About
              </Link>
              <Link to="/services" className="block text-white/70 hover:text-white transition">
                Services
              </Link>
              <Link to="/pricing" className="block text-white/70 hover:text-white transition">
                Pricing
              </Link>
              <Link to="/contact" className="block text-white/70 hover:text-white transition">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <p className="text-white/70 mb-2">
              Monterey, California
            </p>
            <p className="text-white/70 mb-4">
              By appointment only
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
            >
              Book a Session
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Rock Your Body. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;