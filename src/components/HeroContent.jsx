import Button from './Button';

function HeroContent() {
  return (
    <div className="absolute top-24 md:top-20 lg:top-28 right-8 md:right-16 lg:right-24 text-right animate-slideDown max-w-2xl">
      {/* Value Proposition - Bold and Clear - H1 for SEO */}
      <h1 className="text-white text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 font-bold leading-tight drop-shadow-lg">
        We restore alignment, strength and balance through structural integration and functional fitness in Santa Cruz.
      </h1>
      
      {/* Subheadline */}
      <p className="text-white/95 text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-6 md:mb-8 drop-shadow-md">
        Hi, I'm Rock Hudson. Movement geek, structural integration nerd, and your go-to guy for getting your body back in business.
      </p>
      
      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-end items-end">
        <Button
          to="/book"
          variant="accent"
          size="lg"
          className="font-bold shadow-lg hover:shadow-xl transition-all"
        >
          Book a Free 15-minute Call
        </Button>
        <Button
          to="/smart-starts"
          variant="outline"
          size="lg"
          className="font-bold border-white text-white hover:bg-white hover:text-primary transition-all"
        >
          Start Here
        </Button>
      </div>
    </div>
  );
}

export default HeroContent;
