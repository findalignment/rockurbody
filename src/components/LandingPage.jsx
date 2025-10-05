import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import HeroContent from './HeroContent';
import { sendMessageToAI, detectIntent } from '../utils/openai';
import { securityCheck } from '../utils/chatSecurity';

function LandingPage() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  const [error, setError] = useState('');
  const [userId, setUserId] = useState('');
  const [questionCount, setQuestionCount] = useState(0);
  const navigate = useNavigate();

  const MAX_QUESTIONS = 5;

  // Quick suggestion buttons
  const suggestionButtons = [
    { text: "What services do you offer?", icon: "💪" },
    { text: "Tell me about your packages", icon: "📦" },
    { text: "Who are you?", icon: "👤" },
    { text: "What's your approach?", icon: "🎯" },
    { text: "How does structural integration work?", icon: "🔧" },
    { text: "Book a consultation", icon: "📅" },
  ];

  // Generate a unique user ID for rate limiting
  useEffect(() => {
    let storedUserId = sessionStorage.getItem('chatUserId');
    if (!storedUserId) {
      storedUserId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('chatUserId', storedUserId);
    }
    setUserId(storedUserId);

    // Load question count from session storage
    const savedCount = sessionStorage.getItem('chatQuestionCount');
    if (savedCount) {
      setQuestionCount(parseInt(savedCount, 10));
    }
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;

    // Check if user has reached question limit
    if (questionCount >= MAX_QUESTIONS) {
      const limitMessage = {
        id: Date.now(),
        role: 'system',
        content: `You've reached the ${MAX_QUESTIONS}-question limit. I'd love to continue helping you! Please either:\n\n• Schedule a free consultation to discuss your needs in detail\n• Email me directly at rock@rockurbody.com\n\nI look forward to working with you!`,
        isError: false,
        isLimit: true,
        showConsultationButton: true
      };
      setConversation(prev => [...prev, limitMessage]);
      setInput('');
      return;
    }

    // Clear any previous errors
    setError('');

    // Run security checks
    const securityResult = securityCheck(input, userId);
    
    if (!securityResult.allowed) {
      // Show error message
      setError(securityResult.error);
      
      // Add error message to conversation
      const errorMessage = {
        id: Date.now(),
        role: 'system',
        content: securityResult.error,
        isError: true
      };
      setConversation(prev => [...prev, errorMessage]);
      
      // Clear input
      setInput('');
      
      // Clear error after 5 seconds
      setTimeout(() => setError(''), 5000);
      return;
    }

    // Increment question count
    const newCount = questionCount + 1;
    setQuestionCount(newCount);
    sessionStorage.setItem('chatQuestionCount', newCount.toString());

    // Use sanitized input
    const userMessage = securityResult.sanitized;
    
    const newUserMessage = {
      id: Date.now(),
      role: 'user',
      content: userMessage
    };
    setConversation(prev => [...prev, newUserMessage]);
    
    setInput('');
    setIsLoading(true);

    try {
      const detectedPage = detectIntent(userMessage);
      const aiResponse = await sendMessageToAI(userMessage, conversation, detectedPage);
      
      // Add question count reminder after 3rd and 4th questions
      let responseContent = aiResponse;
      if (newCount === 3) {
        responseContent += '\n\n(You have 2 questions remaining. After that, I\'ll invite you to schedule a free consultation or email me directly.)';
      } else if (newCount === 4) {
        responseContent += '\n\n(You have 1 question remaining. After that, I\'ll invite you to schedule a free consultation or email me directly.)';
      }
      
      const newAIMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: responseContent,
        suggestedPage: detectedPage
      };
      setConversation(prev => [...prev, newAIMessage]);

      // If this was the 5th question, add consultation prompt
      if (newCount === MAX_QUESTIONS) {
        setTimeout(() => {
          const consultationPrompt = {
            id: Date.now() + 2,
            role: 'system',
            content: `That's ${MAX_QUESTIONS} questions! I hope I've been helpful. To continue our conversation:\n\n• Schedule a free consultation to discuss your specific needs\n• Email me at rock@rockurbody.com\n\nI'd love to help you achieve your movement and alignment goals!`,
            isLimit: true,
            showConsultationButton: true
          };
          setConversation(prev => [...prev, consultationPrompt]);
        }, 1000);
      }
    } catch (err) {
      console.error('AI Error:', err);
      const errorMessage = {
        id: Date.now() + 1,
        role: 'system',
        content: 'Sorry, I\'m having trouble responding right now. Please try again or use the navigation menu above.',
        isError: true
      };
      setConversation(prev => [...prev, errorMessage]);
    }
    
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const handleSuggestionClick = (suggestionText) => {
    if (questionCount >= MAX_QUESTIONS) return;
    setInput(suggestionText);
    // Automatically submit after a brief delay
    setTimeout(() => {
      const form = document.querySelector('form');
      if (form) {
        form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      }
    }, 100);
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
                        : message.isError
                        ? 'bg-red-500/90 text-white mr-8 border-2 border-red-600'
                        : message.isLimit
                        ? 'bg-sage/90 text-white mr-8 border-2 border-sage'
                        : 'bg-white text-neutralDark mr-8'
                    }`}>
                      <p className="text-sm font-semibold mb-1 opacity-70">
                        {message.role === 'user' 
                          ? 'You' 
                          : message.isError 
                          ? 'Security Notice' 
                          : message.isLimit
                          ? 'Next Steps'
                          : 'RockUrBody'}
                      </p>
                      <p className="whitespace-pre-line">{message.content}</p>
                    </div>
                    
                    {message.showConsultationButton && (
                      <div className="mt-2 ml-2 flex flex-col sm:flex-row gap-2">
                        <a
                          href="https://cal.com/rockyourbody/consultation"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-primary text-white text-sm rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>Schedule Free Consultation</span>
                        </a>
                        <a
                          href="mailto:rock@rockurbody.com"
                          className="px-4 py-2 bg-secondary text-white text-sm rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-200 flex items-center justify-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span>Email Rock</span>
                        </a>
                      </div>
                    )}
                    
                    {message.role === 'assistant' && message.suggestedPage && !message.isLimit && (
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

                    {/* Quick Suggestions after AI responses */}
                    {message.role === 'assistant' && !message.isLimit && questionCount < MAX_QUESTIONS && (
                      <div className="mt-3 ml-2 mr-8">
                        <p className="text-xs text-white/60 mb-2">Quick questions:</p>
                        <div className="flex flex-wrap gap-2">
                          {suggestionButtons.slice(0, 3).map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion.text)}
                              className="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white text-xs rounded-lg transition-all duration-200 flex items-center gap-1.5 backdrop-blur-sm border border-white/20"
                            >
                              <span>{suggestion.icon}</span>
                              <span>{suggestion.text}</span>
                            </button>
                          ))}
                        </div>
                      </div>
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
            
            {/* Initial Suggestion Buttons (shown when no conversation) */}
            {conversation.length === 0 && (
              <div className="p-4 border-b border-white/20">
                <p className="text-xs text-white/70 mb-3 text-center">Popular questions:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {suggestionButtons.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion.text)}
                      className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white text-xs rounded-lg transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm border border-white/20"
                    >
                      <span className="text-base">{suggestion.icon}</span>
                      <span className="text-left flex-1">{suggestion.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <form onSubmit={handleSendMessage} className="p-4">
              {questionCount < MAX_QUESTIONS && (
                <div className="mb-2 text-xs text-white/70 text-center">
                  {questionCount === 0 
                    ? `You can ask up to ${MAX_QUESTIONS} questions`
                    : `${MAX_QUESTIONS - questionCount} question${MAX_QUESTIONS - questionCount !== 1 ? 's' : ''} remaining`
                  }
                </div>
              )}
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={questionCount >= MAX_QUESTIONS ? "Question limit reached" : "How can I help you?"}
                  disabled={isLoading || questionCount >= MAX_QUESTIONS}
                  className="flex-1 px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-neutralDark placeholder:text-neutralDark/50 disabled:bg-neutralLight disabled:cursor-not-allowed text-sm md:text-base"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !input.trim() || questionCount >= MAX_QUESTIONS}
                  className="px-5 py-3 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 whitespace-nowrap text-sm md:text-base"
                >
                  {isLoading ? '...' : 'Send'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Hero>
  );
}

export default LandingPage;
