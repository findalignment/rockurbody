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
            <p className="text-white/80 font-semibold mb-3">
              Rock Hudson
            </p>
            <div className="text-white/70 text-sm space-y-1">
              <Link to="/certifications/anatomy-trains-structural-integration" className="block hover:text-white transition">
                Anatomy Trains Structural Integration
              </Link>
              <Link to="/certifications/anatomy-trains-teacher" className="block hover:text-white transition">
                Anatomy Trains Teacher in Training
              </Link>
              <Link to="/certifications/nasm-personal-trainer" className="block hover:text-white transition">
                NASM Certified Personal Trainer
              </Link>
              <Link to="/certifications/nasm-corrective-exercise" className="block hover:text-white transition">
                NASM Corrective Exercise Specialist
              </Link>
              <Link to="/certifications/ace-health-coach" className="block hover:text-white transition">
                ACE Health Coach
              </Link>
              <Link to="/certifications/ace-corrective-exercise" className="block hover:text-white transition">
                ACE Corrective Exercise Specialist
              </Link>
              <Link to="/certifications/medfit-parkinsons" className="block hover:text-white transition">
                MedFit Parkinson's Disease Fitness Specialist
              </Link>
              <Link to="/certifications/medfit-recovery" className="block hover:text-white transition">
                MedFit Drug & Alcohol Recovery Fitness Specialist
              </Link>
              <Link to="/certifications/precision-nutrition" className="block hover:text-white transition">
                Precision Nutrition Coach Level 2
              </Link>
              <Link to="/certifications/movnat" className="block hover:text-white transition">
                MovNat Level 2
              </Link>
            </div>
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
              <Link to="/training-lineage" className="block text-white/70 hover:text-white transition">
                Training & Lineage
              </Link>
              <Link to="/packages" className="block text-white/70 hover:text-white transition">
                Packages
              </Link>
              <Link to="/faq" className="block text-white/70 hover:text-white transition">
                FAQ
              </Link>
              <Link to="/blog" className="block text-white/70 hover:text-white transition">
                Blog
              </Link>
              <Link to="/contact" className="block text-white/70 hover:text-white transition">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Ready to Do This?</h4>
            <p className="text-white/70 mb-2">
              Santa Cruz, California
            </p>
            <p className="text-white/70 mb-4 leading-relaxed">
              Book a free 15-minute "get-to-know-your-body" chat with me. No fluff, no pushy sales, just us figuring out what your body wants to do.
            </p>
            <p className="text-white/60 text-sm italic mb-4">
              (I promise I only do one bad pun per session.)
            </p>
            <Link
              to="/consult"
              className="inline-block px-6 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
            >
              Let's Talk
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Rock Your Body. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="text-white/50 hover:text-white transition">
              Privacy Policy
            </Link>
            <span className="text-white/30">•</span>
            <Link to="/refund-policy" className="text-white/50 hover:text-white transition">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
