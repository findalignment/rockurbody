import Button from './Button';

function HeroContent() {
  return (
    <div className="absolute bottom-24 md:top-28 lg:top-36 left-4 right-4 md:right-16 lg:right-24 text-center md:text-right animate-slideDown max-w-2xl md:ml-auto">
      {/* Software Upgrade Hook - H1 for SEO */}
      <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 md:mb-6 lg:mb-8 font-bold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
        Upgrade Your Body's Software
      </h1>
      
      {/* Pivot to Practical Clarity */}
      <p className="text-white/95 text-base md:text-lg lg:text-xl xl:text-2xl font-bold leading-relaxed mb-4 md:mb-6 lg:mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
        Your body runs on patterns: alignment, strength, movement longevity. We identify what's not working and rebuild it from the ground up through structural integration and intelligent movement coaching.
      </p>
      
      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end items-center md:items-end">
        <Button
          to="/body-systems-check"
          variant="accent"
          size="lg"
          className="font-bold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
        >
          Book a Systems Check
        </Button>
        <Button
          to="/how-it-works"
          variant="outline"
          size="lg"
          className="font-bold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
        >
          See How It Works
        </Button>
      </div>
    </div>
  );
}

export default HeroContent;
