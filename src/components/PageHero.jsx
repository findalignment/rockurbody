import ParallaxSection from './ParallaxSection';

/**
 * PageHero Component
 * Adds a parallax hero image to the top of any page
 * 
 * @param {string} imageSrc - Path to hero image (e.g., "/about-hero.jpg")
 * @param {string} title - Page title to display over image
 * @param {string} subtitle - Optional subtitle
 * @param {string} overlayOpacity - Opacity of dark overlay (0-100, default 40)
 */
function PageHero({ 
  imageSrc, 
  title, 
  subtitle,
  overlayOpacity = 40 
}) {
  return (
    <div className="relative -mt-24 pt-24">
      <ParallaxSection
        backgroundImage={imageSrc}
        speed={0.3}
        className="relative min-h-[150vh] flex items-end pb-16 md:pb-24"
      >
        {/* Modern gradient overlay - dark at bottom, transparent at top */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.3) 40%, rgba(15, 23, 42, 0.7) 80%, rgba(15, 23, 42, 0.85) 100%)'
          }}
        />
        
        {/* Content - modern minimal card */}
        <div className="relative z-10 px-4 max-w-3xl mx-auto w-full">
          <div className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl border-2 border-white/30 py-10 md:py-12 lg:py-14 px-6 md:px-10" style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)' }}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-5 md:mb-6 text-center drop-shadow-lg">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base md:text-lg lg:text-xl text-white/95 max-w-2xl mx-auto text-center leading-relaxed drop-shadow-md">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
}

export default PageHero;
