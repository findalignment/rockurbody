import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import HeroContent from './HeroContent';
import { sendMessageToAI, detectIntent } from '../utils/openai';

function LandingPage() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  const navigate = useNavigate();

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    
    const newUserMessage = {
      id: Date.now(),
      role: 'user',
      content: userMessage
    };
    setConversation(prev => [...prev, newUserMessage]);
    
    setInput('');
    setIsLoading(true);

    const detectedPage = detectIntent(userMessage);
    const aiResponse = await sendMessageToAI(userMessage, conversation, detectedPage);
    
    const newAIMessage = {
      id: Date.now() + 1,
      role: 'assistant',
      content: aiResponse,
      suggestedPage: detectedPage
    };
    setConversation(prev => [...prev, newAIMessage]);
    
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const handleNavigateToPage = (path) => {
    navigate(path);
  };

  const getPageName = (path) => {
  const names = {
    '/about': 'About',
    '/services': 'Services',
    '/pricing': 'Pricing',
    '/contact': 'Contact',
    '/book': 'Choose a Session Type',
    '/book/consult': 'Book Free Consultation',
    '/book/move30': 'Book 30min Movement',
    '/book/move60': 'Book 60min Movement',
    '/book/move90': 'Book 90min Movement',
    '/book/move120': 'Book 2hr Movement',
    '/book/si60': 'Book 60min Structural Integration',
    '/book/si90': 'Book 90min Structural Integration',
    '/book/si120': 'Book 2hr Structural Integration'
  };
  return names[path] || 'More Info';
};

  return (
    <Hero>
      <div className="w-full flex flex-col items-center justify-end space-y-4 pb-4">
        <HeroContent />
        
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 animate-fadeIn">
            {conversation.length > 0 && (
              <div className="p-4 max-h-[400px] overflow-y-auto space-y-3 border-b border-white/20">
                {conversation.map((message) => (
                  <div key={message.id} className="animate-fadeIn">
                    <div className={`p-4 rounded-xl ${
                      message.role === 'user' 
                        ? 'bg-accent/90 text-white ml-8' 
                        : 'bg-white text-neutralDark mr-8'
                    }`}>
                      <p className="text-sm font-semibold mb-1 opacity-70">
                        {message.role === 'user' ? 'You' : 'RockUrBody'}
                      </p>
                      <p>{message.content}</p>
                    </div>
                    
                    {message.role === 'assistant' && message.suggestedPage && (
                      <button
                        onClick={() => handleNavigateToPage(message.suggestedPage)}
                        className="mt-2 ml-2 px-4 py-2 bg-accent/90 hover:bg-accent text-white text-sm rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
                      >
                        <span>View {getPageName(message.suggestedPage)}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
                
                {isLoading && (
                  <div className="p-4 bg-white rounded-xl mr-8 animate-fadeIn">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-neutralDark/40 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-neutralDark/40 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-neutralDark/40 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            <form onSubmit={handleSendMessage} className="p-4 flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Hi, I'm Rock. What question can I answer for you today?"
                disabled={isLoading}
                className="flex-1 px-5 py-4 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-neutralDark placeholder:text-neutralDark/50 disabled:bg-neutralLight disabled:cursor-not-allowed text-sm md:text-base"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-6 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 whitespace-nowrap"
              >
                {isLoading ? '...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Hero>
  );
}

export default LandingPage;
