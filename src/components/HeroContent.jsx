function HeroContent() {
  return (
    <div className="absolute top-24 right-4 md:right-8 lg:right-12 text-right animate-slideDown">
      {/* Main Headline */}
      <h2 className="text-white text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4 font-bold">
        Hi! I'm Rock Hudson
      </h2>
      
      {/* Subheadline */}
      <p className="text-white/90 text-base md:text-lg lg:text-xl font-light max-w-xs md:max-w-sm leading-relaxed">
        Movement and Alignment Specialist
      </p>
      
      {/* Call to Action */}
      <p className="text-white/80 text-sm md:text-base lg:text-lg font-normal mt-3 md:mt-4 italic">
        Ask me anything
      </p>
    </div>
  );
}

export default HeroContent;
