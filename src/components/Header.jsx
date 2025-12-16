import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Button from './Button';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'about', 'services', or null
  const location = useLocation();
  const aboutDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  
  const isHomePage = location.pathname === '/';
  
  const navLinks = [
    { 
      name: 'About', 
      path: '/about',
      dropdown: [
        { name: 'About', path: '/about' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Packages', path: '/packages' },
        { name: 'Training Lineage', path: '/training-lineage' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Credentials', path: '/credentials' },
      ],
      dropdownId: 'about'
    },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Body Systems Check', path: '/body-systems-check' },
        { name: 'Software Upgrade Plan', path: '/software-upgrade-plan' },
        { name: 'Performance & Longevity', path: '/performance-longevity-coaching' },
        { name: 'Structural Integration', path: '/what-is-structural-integration' },
        { name: 'Movement Education', path: '/movement-coaching-santa-cruz' },
        { name: 'Climbers', path: '/climbers' },
        { name: 'Posture Correction', path: '/posture-correction' },
        { name: 'Alignment-Based Strength', path: '/alignment-based-strength-training' },
      ],
      dropdownId: 'services'
    },
    { name: 'Start Here', path: '/smart-starts' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target) &&
          servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openDropdown]);
  
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
      className={`w-full sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage 
          ? scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-md py-4' 
            : 'bg-transparent backdrop-blur-md py-6'
          : 'bg-white/95 backdrop-blur-xl shadow-sm py-4'
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
              link.dropdown ? (
                <div
                  key={link.path}
                  ref={link.dropdownId === 'about' ? aboutDropdownRef : servicesDropdownRef}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.dropdownId)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === link.dropdownId ? null : link.dropdownId)}
                    className={`relative font-semibold transition-colors group flex items-center gap-1 ${
                      isHomePage 
                        ? scrolled
                          ? 'text-neutralDark hover:text-accent'
                          : 'text-white hover:text-white/90' 
                        : 'text-neutralDark hover:text-accent'
                    }`}
                  >
                    {link.name}
                    <svg 
                      className={`w-4 h-4 transition-transform ${openDropdown === link.dropdownId ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className={`absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full ${
                      isHomePage && !scrolled ? 'bg-white' : 'bg-accent'
                    }`}></span>
                  </button>
                  {openDropdown === link.dropdownId && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border-2 border-neutralLight overflow-hidden z-[100] animate-fadeIn">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-3 text-neutralDark hover:bg-accent/10 hover:text-accent transition-colors font-semibold"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
            ))}
            <Button
              to="/book"
              variant="accent"
              size="lg"
              className="border-transparent font-bold"
            >
              Book
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
          <nav className="md:hidden mt-4 pb-4 space-y-2 bg-white/95 backdrop-blur-lg rounded-lg p-4 shadow-lg">
            {navLinks.map((link) => (
              <div key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-semibold text-lg text-neutralDark hover:text-accent transition-colors py-3 px-2 min-h-[44px] flex items-center"
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="ml-4 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-base text-neutralDark/80 hover:text-accent transition-colors py-2 px-2"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              to="/book"
              onClick={() => setMobileMenuOpen(false)}
              variant="accent"
              size="lg"
              fullWidth
              className="border-transparent font-bold mt-2"
            >
              Book
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
