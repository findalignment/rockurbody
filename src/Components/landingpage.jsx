import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import HeroContent from './HeroContent';
import { sendMessageToAI, detectIntent } from '../utils/openai';

function LandingPage() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [suggestedPage, setSuggestedPage] = useState(null);
  const navigate = useNavigate();

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setIsLoading(true);
    setResponse('');
    setSuggestedPage(null);

    // Check if this question suggests a specific page
    const detectedPage = detectIntent(userMessage);
    
    // Get AI response
    const aiResponse = await sendMessageToAI(userMessage);
    setResponse(aiResponse);
    
    // If we detected a relevant page, show navigation option
    if (detectedPage) {
      setSuggestedPage(detectedPage);
    }
    
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const handleNavigateToPage = () => {
    if (suggestedPage) {
      navigate(suggestedPage);
    }
  };

  const getPageName = (path) => {
    const names = {
      '/about': 'About',
      '/services': 'Services',
      '/pricing': 'Pricing',
      '/contact': 'Contact & Booking'
    };
    return names[path] || 'More Info';
  };

  return (
    <Hero>
      <div className="w-full flex flex-col items-center justify-end space-y-4 pb-4">
        <HeroContent />
        
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-4 animate-fadeIn">
            <form onSubmit={handleSendMessage} className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="What is structural integration? • How much do sessions cost? • How do I book?"
                disabled={isLoading}
                className="flex-1 px-5 py-4 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-neutralDark placeholder:text-neutralDark/50 disabled:bg-neutralLight disabled:cursor-not-allowed text-sm md:text-base"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-6 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 whitespace-nowrap"
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </form>
            
            {/* Response */}
            {response && (
              <div className="mt-4 space-y-3">
                <div className="p-4 bg-white rounded-xl animate-fadeIn">
                  <p className="text-sm font-semibold text-neutralDark/60 mb-1">RockUrBody</p>
                  <p className="text-neutralDark">{response}</p>
                </div>
                
                {/* Navigation suggestion */}
                {suggestedPage && (
                  <button
                    onClick={handleNavigateToPage}
                    className="w-full p-4 bg-accent/90 hover:bg-accent text-white rounded-xl font-semibold transition-all duration-200 flex items-center justify-between animate-fadeIn"
                  >
                    <span>View {getPageName(suggestedPage)} page</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            )}
            
            {/* Loading state */}
            {isLoading && (
              <div className="mt-4 p-4 bg-white rounded-xl animate-fadeIn">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-neutralDark/40 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-neutralDark/40 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-neutralDark/40 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Hero>
  );
}

export default LandingPage;