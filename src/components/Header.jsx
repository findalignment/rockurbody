import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { currentUser } = useAuth();
  
  const isHomePage = location.pathname === '/';
  
  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
  ];
  
  // Show different menu items based on auth state
  const authLinks = currentUser 
    ? [{ name: 'My Account', path: '/dashboard' }]
    : [{ name: 'Sign In', path: '/auth/login' }];
  
  return (
    <header className={`w-full ${isHomePage ? 'absolute top-0 left-0 right-0 z-50' : 'bg-white shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className={`text-2xl font-heading font-bold ${isHomePage ? 'text-white' : 'text-primary'}`}>
            Rock Your Body
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold transition-colors ${
                  isHomePage 
                    ? 'text-white hover:text-white/80' 
                    : 'text-neutralDark hover:text-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {authLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold transition-colors ${
                  isHomePage 
                    ? 'text-white hover:text-white/80' 
                    : 'text-neutralDark hover:text-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book"
              className="px-6 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
            >
              Book Now
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden ${isHomePage ? 'text-white' : 'text-neutralDark'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-semibold ${
                  isHomePage ? 'text-white' : 'text-neutralDark'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {authLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-semibold ${
                  isHomePage ? 'text-white' : 'text-neutralDark'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-2 bg-accent text-white rounded-lg font-semibold"
            >
              Book Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
