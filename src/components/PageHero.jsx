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
        {/* Solid vignette overlay - dark edges, clear center */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 20%, rgba(15, 23, 42, 0.4) 70%, rgba(15, 23, 42, 0.8) 100%)'
          }}
        />
        
        {/* Content - solid card with shadow */}
        <div className="relative z-10 px-4 max-w-3xl mx-auto w-full">
          <div className="bg-white rounded-2xl shadow-lg py-10 md:py-12 lg:py-14 px-6 md:px-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-5 md:mb-6 text-center">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base md:text-lg lg:text-xl text-neutralDark max-w-2xl mx-auto text-center leading-relaxed">
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
