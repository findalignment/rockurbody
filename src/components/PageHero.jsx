/**
 * PageHero Component
 * Adds a hero image to the top of any page
 * 
 * @param {string} imageSrc - Path to hero image (e.g., "/about-hero.jpg")
 * @param {string} title - Page title to display over image
 * @param {string} subtitle - Optional subtitle
 * @param {string} overlayOpacity - Opacity of dark overlay (0-100, default 40)
 * 
 * Note: Automatically uses WebP format with JPG fallback for optimal performance
 */
function PageHero({ 
  imageSrc, 
  title, 
  subtitle,
  overlayOpacity = 40 
}) {
  // Convert image path to WebP (e.g., "/about-hero.jpg" -> "/about-hero.webp")
  const webpSrc = imageSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  return (
    <div className="relative pt-20 -mx-[100vw] left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
      {/* Hero Image - Full Width */}
      <div className="relative h-screen overflow-hidden">
        {/* Use picture element for WebP with fallback */}
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={imageSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover object-top"
            loading="lazy"
          />
        </picture>
        {/* Optional subtle vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(15, 23, 42, 0.2) 100%)'
          }}
        />
      </div>
      
      {/* Hero Text Below Image */}
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
