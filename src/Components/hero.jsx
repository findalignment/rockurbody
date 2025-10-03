function Hero({ title, subtitle }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
      <div className="text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default Hero;

