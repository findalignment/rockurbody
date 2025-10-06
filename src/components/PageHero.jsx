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
    <ParallaxSection
      backgroundImage={imageSrc}
      speed={0.3}
      className="relative min-h-[150vh] flex items-end pb-16 md:pb-24 -mt-20"
    >
      {/* Dark overlay for text readability */}
      <div 
        className="absolute inset-0 bg-primary z-0"
        style={{ opacity: overlayOpacity / 100 }}
      />
      
      {/* Content - sleek modern box positioned lower over the image */}
      <div className="relative z-10 px-4 max-w-5xl mx-auto w-full">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-black shadow-2xl py-16 md:py-20 lg:py-24 px-8 md:px-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 md:mb-10 text-center">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto text-center leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </ParallaxSection>
  );
}

export default PageHero;
