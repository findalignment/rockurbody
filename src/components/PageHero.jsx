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
    <div className="relative -mt-24 -mx-[100vw] left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
      {/* Parallax Image Only - Full Width */}
      <ParallaxSection
        backgroundImage={imageSrc}
        speed={0.3}
        className="relative h-[60vh] md:h-[180vh]"
      >
        {/* Optional subtle vignette */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(15, 23, 42, 0.2) 100%)'
          }}
        />
      </ParallaxSection>
      
      {/* Hero Text Below Parallax */}
      <div className="bg-white py-6 md:py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-neutralDark max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageHero;
