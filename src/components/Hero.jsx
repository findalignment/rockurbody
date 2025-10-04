import Header from './Header';
import Footer from './Footer';

function Hero({ children, backgroundImage = '/hero-raccoons.jpg' }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      {/* Background Image Section */}
      <div className="relative flex-1 flex flex-col min-h-screen">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: backgroundImage 
              ? `url(${backgroundImage})` 
              : 'linear-gradient(135deg, #1e3a8a 0%, #312e81 50%, #1e293b 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 5%', 
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-neutralDark/40"></div>
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 flex-1 flex items-end justify-center px-4 pb-4">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hero;
