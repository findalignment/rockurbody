function HeroContent() {
  return (
    <div className="absolute top-24 md:top-20 lg:top-28 right-8 md:right-16 lg:right-24 text-right animate-slideDown">
      {/* Main Headline */}
      <h2 className="text-white text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4 font-bold">
        Move Better. Laugh A Little. Live Better.
      </h2>
      
      {/* Subheadline */}
      <p className="text-white/90 text-base md:text-lg lg:text-xl font-semibold leading-relaxed">
        Hi, I'm Rock Hudson (yes, that's my real name). Movement geek, structural integration nerd, and your go-to guy for getting your body back in business.
      </p>
      
      {/* Mobile Service Badge */}
      <div className="mt-4 inline-flex items-center gap-2 bg-accent/90 backdrop-blur-sm px-4 py-2 rounded-full">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-white text-sm md:text-base font-bold">Mobile Training Available • Santa Cruz to SF</span>
      </div>
      
      {/* Call to Action */}
      <button 
        onClick={() => {
          const chatbot = document.getElementById('chatbot-section');
          if (chatbot) {
            chatbot.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }}
        className="text-white/80 text-sm md:text-base lg:text-lg font-semibold mt-3 md:mt-4 italic hover:text-white transition-colors cursor-pointer bg-transparent border-none"
      >
        Ask me anything
      </button>
    </div>
  );
}

export default HeroContent;
