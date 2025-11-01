/**
 * Power Statement Component
 * 
 * Apple-style large typography for impactful statements
 * Creates visual anchors and breaks up content rhythm
 */

export const PowerStatement = ({ 
  children, 
  className = "",
  variant = "default" // default, gradient, outlined
}) => {
  const variants = {
    default: "text-gray-900",
    gradient: "bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent",
    outlined: "text-transparent stroke-text",
  };

  return (
    <div className={`py-20 md:py-32 ${className}`}>
      <h2 
        className={`
          text-4xl md:text-6xl lg:text-7xl xl:text-8xl
          font-bold
          text-center
          leading-tight
          tracking-tight
          max-w-5xl
          mx-auto
          px-6
          ${variants[variant]}
        `}
      >
        {children}
      </h2>
    </div>
  );
};

export const SplitStatement = ({ line1, line2, className = "" }) => (
  <div className={`py-20 md:py-32 ${className}`}>
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
        <span className="block text-gray-900">{line1}</span>
        <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mt-2">
          {line2}
        </span>
      </h2>
    </div>
  </div>
);

export const QuoteStatement = ({ quote, author, className = "" }) => (
  <div className={`py-16 md:py-24 ${className}`}>
    <blockquote className="max-w-4xl mx-auto px-6">
      <p className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-800 text-center mb-8">
        "{quote}"
      </p>
      {author && (
        <cite className="block text-xl md:text-2xl text-gray-600 text-center not-italic font-medium">
          - {author}
        </cite>
      )}
    </blockquote>
  </div>
);

export default PowerStatement;
