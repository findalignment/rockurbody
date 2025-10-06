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
      className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-end pb-16 md:pb-20"
    >
      {/* Dark overlay for text readability */}
      <div 
        className="absolute inset-0 bg-primary z-0"
        style={{ opacity: overlayOpacity / 100 }}
      />
      
      {/* Content - positioned lower over the image */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </ParallaxSection>
  );
}

export default PageHero;
