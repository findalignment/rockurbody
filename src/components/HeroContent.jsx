function HeroContent() {
  return (
    <div className="absolute top-24 right-4 md:right-8 lg:right-12 text-right animate-slideDown">
      {/* Main Headline */}
      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-heading mb-2 md:mb-3 leading-tight">
        Hi! I'm Rock Hudson
      </h2>
      
      {/* Subheadline */}
      <p className="text-white/90 text-sm md:text-base lg:text-lg font-body max-w-xs md:max-w-sm">
        Movement and Alignment Specialist
      </p>
    </div>
  );
}

export default HeroContent;
