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
        {/* Dark overlay for text readability */}
        <div 
          className="absolute inset-0 bg-primary z-0"
          style={{ opacity: overlayOpacity / 100 }}
        />
        
        {/* Content - sleek modern box positioned lower over the image (50% smaller) */}
        <div className="relative z-10 px-4 max-w-3xl mx-auto w-full">
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-black py-10 md:py-12 lg:py-14 px-6 md:px-10" style={{ boxShadow: 'none' }}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-5 md:mb-6 text-center">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto text-center leading-relaxed">
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
