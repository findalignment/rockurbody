import { useState } from 'react';
import SpeechBubble from './SpeechBubble';

function FloatingChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I can help you learn about structural integration, book a session, or answer questions about movement education.",
      sender: 'ai'
    }
  ]);

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      {/* Chat Messages Container */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20">
<div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20 animate-fadeIn"></div>
        <div className="space-y-2 max-h-[400px] overflow-y-auto">
          {messages.map((msg) => (
            <SpeechBubble 
              key={msg.id}
              message={msg.text}
              sender={msg.sender}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FloatingChat;