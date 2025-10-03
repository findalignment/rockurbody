function SpeechBubble({ message, sender }) {
  const isAI = sender === 'ai';
  
  return (
    <div className={`flex ${isAI ? 'justify-start' : 'justify-end'} mb-4 animate-fadeIn`}>
      <div 
        className={`
          max-w-[80%] md:max-w-[60%] px-6 py-4 rounded-2xl shadow-lg
          ${isAI 
            ? 'bg-white text-neutralDark rounded-tl-sm' 
            : 'bg-accent text-white rounded-tr-sm'
          }
        `}
      >
        {/* Sender Label */}
        <p className={`text-xs font-semibold mb-1 ${isAI ? 'text-neutralDark/60' : 'text-white/80'}`}>
          {isAI ? 'RockUrBody' : 'You'}
        </p>
        
        {/* Message Text */}
        <p className="text-base leading-relaxed">
          {message}
        </p>
      </div>
    </div>
  );
}

export default SpeechBubble;