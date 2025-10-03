function QuickStartButtons({ onQuickStart, isLoading }) {
  const questions = [
    "What is structural integration?",
    "How much do sessions cost?",
    "What should I expect in my first session?",
    "How do I book an appointment?"
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-4 mt-6">
      <p className="text-white/80 text-sm text-center mb-3">
        Quick start:
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuickStart(question)}
            disabled={isLoading}
            className="px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm rounded-full border border-white/30 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickStartButtons;