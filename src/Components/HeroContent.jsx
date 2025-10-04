function HeroContent() {
  return (
    <div className="w-full max-w-4xl mx-auto text-center mb-4 animate-slideDown">
      {/* Main Headline */}
      <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading mb-3 md:mb-4 leading-tight px-4">
        Rock Your Body
      </h2>
      
      {/* Subheadline */}
      <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-body mb-4 md:mb-6 max-w-2xl mx-auto px-4">
        Fascial release and movement patterns that transform how you feel
      </p>
    </div>
  );
}

export default HeroContent;
