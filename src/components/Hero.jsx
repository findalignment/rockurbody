import Header from './Header';
import Footer from './Footer';

function Hero({ children, backgroundImage = '/hero-astronaut.jpg', altText = 'Structural integration and movement education services in Santa Cruz, California - Rock Your Body' }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      {/* Background Image Section - Extended for more visibility */}
      <div className="relative flex-1 flex flex-col" style={{ minHeight: '150vh' }}>
        {/* Background Image with Overlay - Using img for proper alt text and SEO */}
        <picture className="absolute inset-0 z-0">
          <source srcSet={backgroundImage.replace('.jpg', '.webp')} type="image/webp" />
          <img 
            src={backgroundImage}
            alt={altText}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ 
              objectPosition: 'center 50%' // On mobile, center vertically to avoid face overlap
            }}
            loading="eager"
            fetchpriority="high"
          />
        </picture>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-neutralDark/40 z-[1]"></div>

        {/* Main Content Area */}
        <div className="relative z-10 flex-1 flex items-end justify-center px-4 pb-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Hero;
