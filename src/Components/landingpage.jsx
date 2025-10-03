import { useState, useRef, useEffect } from 'react';
import Hero from './Hero';
import HeroContent from './HeroContent';
import ChatInputBar from './ChatInputBar';
import SpeechBubble from './SpeechBubble';
import QuickStartButtons from './QuickStartButtons';
import { sendMessageToAI } from '../utils/openai';

function LandingPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I can help you learn about structural integration, book a session, or answer questions about movement education.",
      sender: 'ai'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (userMessage) => {
    const userMsg = {
      id: Date.now(),
      text: userMessage,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    const aiResponse = await sendMessageToAI(userMessage);
    
    const aiMsg = {
      id: Date.now() + 1,
      text: aiResponse,
      sender: 'ai'
    };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <Hero 
      showInputBelow={true}
      inputComponent={
        <ChatInputBar 
          onSend={handleSendMessage} 
          isLoading={isLoading}
        />
      }
    >
      <div className="w-full flex flex-col items-center justify-center space-y-12">
        <HeroContent />
        
        <div className="w-full max-w-3xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20">
            <div className="space-y-2 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              {messages.map((msg) => (
                <SpeechBubble 
                  key={msg.id}
                  message={msg.text}
                  sender={msg.sender}
                />
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl px-6 py-4 shadow-lg">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-neutralDark/40 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-neutralDark/40 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-neutralDark/40 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Invisible element for scrolling */}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
      </div>
    </Hero>
  );
  
}

export default LandingPage;