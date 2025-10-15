import { useState } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  placeholder = 'blur',
  sizes = '100vw',
  priority = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Generate responsive srcset for WebP and fallback
  const generateSrcSet = (baseSrc) => {
    const baseName = baseSrc.replace(/\.[^/.]+$/, '');
    const extension = baseSrc.split('.').pop();
    
    return {
      webp: `${baseName}.webp`,
      fallback: baseSrc
    };
  };

  const { webp, fallback } = generateSrcSet(src);

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blur placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      )}
      
      {/* WebP image with fallback */}
      <picture>
        <source 
          srcSet={webp} 
          type="image/webp"
          sizes={sizes}
        />
        <img
          src={fallback}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          loading={priority ? 'eager' : loading}
          onLoad={handleLoad}
          onError={handleError}
          sizes={sizes}
          {...props}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
