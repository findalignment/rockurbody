import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from './Button';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  
  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' },
  ];
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage 
          ? scrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-md py-4' 
            : 'bg-transparent backdrop-blur-md py-6'
          : 'bg-white shadow-sm py-4'
      }`}
      style={isHomePage && !scrolled ? { backdropFilter: 'blur(12px)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link 
            to="/" 
            className={`text-2xl font-heading font-bold transition-all duration-300 ${
              isHomePage 
                ? scrolled 
                  ? 'text-primary' 
                  : 'text-white' 
                : 'text-primary'
            }`}
          >
            Rock Your Body
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-semibold transition-colors group ${
                  isHomePage 
                    ? scrolled
                      ? 'text-neutralDark hover:text-accent'
                      : 'text-white hover:text-white/90' 
                    : 'text-neutralDark hover:text-accent'
                }`}
              >
                {link.name}
                <span className={`absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full ${
                  isHomePage && !scrolled ? 'bg-white' : 'bg-accent'
                }`}></span>
              </Link>
            ))}
            <Button
              to="/book"
              variant="accent"
              className="border-transparent"
            >
              Book Now
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isHomePage 
                ? scrolled 
                  ? 'text-neutralDark' 
                  : 'text-white' 
                : 'text-neutralDark'
            }`}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 bg-white/95 backdrop-blur-lg rounded-lg p-4 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-semibold text-neutralDark hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button
              to="/book"
              onClick={() => setMobileMenuOpen(false)}
              variant="accent"
              fullWidth
              className="border-transparent"
            >
              Book Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
