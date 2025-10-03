function Hero({ children, showInputBelow = false, inputComponent = null }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image Section */}
      <div className="relative flex-1 flex flex-col min-h-[70vh] md:min-h-screen">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/hero-background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-neutralDark/40"></div>
        </div>

        {/* Header */}
        <header className="relative z-10 p-4 md:p-6">
          <h1 className="text-white text-2xl md:text-3xl font-bold">
            Rock Your Body
          </h1>
        </header>

        {/* Main Content Area */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-4 pb-8 md:pb-12">
          {children}
        </div>
      </div>

      {/* Input Bar Below Image */}
      {showInputBelow && inputComponent && (
        <div className="relative z-10">
          {inputComponent}
        </div>
      )}
    </div>
  );
}

export default Hero;