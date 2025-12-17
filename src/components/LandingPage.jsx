import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import HeroContent from './HeroContent';
import ServicesOverview from './ServicesOverview';
import Footer from './Footer';
import MarkdownText from './MarkdownText';
import ChatbotStatus from './ChatbotStatus';
import SEO from './SEO';
import QuickStartQuiz from './QuickStartQuiz';
import { detectIntent } from '../utils/openai';
import { securityCheck } from '../utils/chatSecurity';
import { logChatQuestion, logChatEvent } from '../utils/chatLogger';
import { handleChatbotRequest, retryChatbotRequest, startHealthMonitoring } from '../utils/chatbotReliability';
import logger from '../utils/logger';
import { getLocalBusinessSchema } from '../utils/structuredData';

function LandingPage() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  const [error, setError] = useState('');
  const [userId, setUserId] = useState('');
  const [questionCount, setQuestionCount] = useState(0);
  const [chatFailed, setChatFailed] = useState(false);
  const [failureCount, setFailureCount] = useState(0);
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  const MAX_QUESTIONS = 20;
  const MAX_FAILURES = 2; // Show fallback after 2 consecutive failures

  // Quick suggestion buttons
  const suggestionButtons = [
    { text: "Where should I start?", icon: "🚀" },
    { text: "What's your approach?", icon: "🎯" },
    { text: "Tell me about your packages", icon: "📦" },
    { text: "Book a consultation", icon: "📅" },
  ];

  // Auto-scroll within the messages container only (not the whole page)
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      // Scroll the container to the bottom without affecting page scroll
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  // Scroll when conversation updates
  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

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

    // Start chatbot health monitoring
    startHealthMonitoring();
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
      
      // Log the question for analytics and improvement
      logChatQuestion(userMessage, {
        sessionId: sessionStorage.getItem('chatUserId'),
        userId: userId,
        detectedIntent: detectedPage,
        questionNumber: newCount,
      });
      
      // Use reliability system for AI request via API endpoint
      const result = await retryChatbotRequest(
        async (message, history) => {
          try {
            console.log('[CHAT] Sending request to /api/chat', { message, historyLength: history.length });
            
            // Always use relative URL - Vercel handles routing
            const response = await fetch('/api/chat', {
              method: 'POST',
              headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify({
                message: message,
                history: history.map(msg => ({
                  role: msg.role,
                  content: msg.content
                }))
              })
            });
            
            console.log('[CHAT] Response received:', {
              ok: response.ok,
              status: response.status,
              statusText: response.statusText,
              headers: Object.fromEntries(response.headers.entries())
            });
            
            // Log response for debugging
            if (!response.ok) {
              console.error('[CHAT] API Error - Status:', response.status);
            }

            if (!response.ok) {
              let errorData;
              // Read body as text first (can only be read once)
              const responseText = await response.text().catch(() => 'Unknown error');
              
              // Try to parse as JSON, but don't fail if it's not JSON
              try {
                errorData = JSON.parse(responseText);
              } catch (e) {
                // Not JSON, use the raw text as the error message
                errorData = { 
                  error: `HTTP ${response.status}: ${response.statusText}`,
                  message: responseText.substring(0, 200) || 'Unknown error occurred'
                };
              }
              
              logger.error('Chat API error response:', response.status, errorData);
              
              // Provide helpful error messages based on status code
              let errorMessage = errorData.error || errorData.message || `API error: ${response.status}`;
              
              if (response.status === 500 && errorData.message?.includes('OPENAI_API_KEY')) {
                errorMessage = 'Server configuration error: The OpenAI API key is not set. Please configure OPENAI_API_KEY in Vercel environment variables.';
              } else if (response.status === 500) {
                errorMessage = errorData.message || 'Server error: The chatbot service encountered an error. Please try again later.';
              } else if (response.status === 429) {
                errorMessage = 'Rate limit exceeded: Please wait a moment before sending another message.';
              }
              
              throw new Error(errorMessage);
            }

            let data;
            try {
              data = await response.json();
            } catch (jsonError) {
              logger.error('Failed to parse JSON response:', jsonError);
              const text = await response.text().catch(() => 'Unknown error');
              throw new Error(`Invalid response format: ${text.substring(0, 100)}`);
            }
            
            logger.info('Chat API success:', data);
            
            // Validate response structure
            if (!data || typeof data !== 'object') {
              throw new Error('Invalid response format from API');
            }
            
            return data.message || "I'm having trouble processing that. Could you try rephrasing?";
          } catch (error) {
            logger.error('Chat API error:', error);
            console.error('Chat API error details:', error);
            
            // Provide user-friendly error messages
            if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
              throw new Error('Network error: Unable to connect to the chatbot service. This might be a CORS issue or the API endpoint is not accessible. Please check your browser console for more details.');
            }
            
            // If error message already contains helpful info, use it
            if (error.message && error.message.length > 20) {
              throw error;
            }
            
            // Generic fallback
            throw new Error(`Chatbot error: ${error.message || 'Unknown error occurred. Please try again.'}`);
          }
        },
        userMessage,
        conversation
      );
      
      if (result.success) {
        // Reset failure count on success
        setFailureCount(0);
        setChatFailed(false);
        
        const newAIMessage = {
          id: Date.now() + 1,
          role: 'assistant',
          content: result.response,
          suggestedPage: detectedPage,
          isFallback: result.isFallback
        };
        setConversation(prev => [...prev, newAIMessage]);

        // If question limit reached, add consultation prompt
        if (newCount === MAX_QUESTIONS) {
          setTimeout(() => {
            const consultationPrompt = {
              id: Date.now() + 2,
              role: 'system',
              content: `I hope I've been helpful! If you have more questions, I'd love to continue our conversation:\n\n• Schedule a free consultation to discuss your specific needs\n• Email me at rock@rockyourbody.com\n• Visit the contact page to get in touch\n\nLooking forward to helping you achieve your movement and alignment goals!`,
              isLimit: true,
              showConsultationButton: true
            };
            setConversation(prev => [...prev, consultationPrompt]);
          }, 1000);
        }
      } else {
        // Handle failure
        const newFailureCount = failureCount + 1;
        setFailureCount(newFailureCount);
        
        if (result.isFallback) {
          // Use fallback response
          setChatFailed(true);
          const fallbackMessage = {
            id: Date.now() + 1,
            role: 'assistant',
            content: result.response,
            isError: false,
            isFallback: true
          };
          setConversation(prev => [...prev, fallbackMessage]);
        } else {
          // Show error message for retryable failures with more detail
          const errorMessage = {
            id: Date.now() + 1,
            role: 'system',
            content: `Sorry, I'm having trouble responding right now. Error: ${result.error || 'Unknown error'}. Please check the browser console (F12) for more details or try again.`,
            isError: true
          };
          setConversation(prev => [...prev, errorMessage]);
          console.error('[CHAT] Chatbot request failed:', result.error);
        }
      }
    } catch (err) {
      logger.error('Unexpected error:', err);
      
      // Fallback for unexpected errors
      const fallbackMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: `I'm experiencing technical difficulties right now. Please email me directly at rock@rockurbody.com or visit our Contact page for alternative ways to reach me.`,
        isError: false,
        isFallback: true
      };
      setConversation(prev => [...prev, fallbackMessage]);
      setChatFailed(true);
    }
    
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    // Treat all suggestions as chat questions
    const suggestionText = typeof suggestion === 'string' ? suggestion : suggestion.text;
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
      '/consult': 'Book Free Consultation',
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
    <>
    <SEO
      title="Movement Education & Structural Integration in Santa Cruz, CA"
      description="Expert movement education and structural integration in Santa Cruz, CA. Specializing in pain relief, posture correction, and performance enhancement through hands-on fascia work and personalized movement coaching."
      keywords="structural integration Santa Cruz, Rolfing Santa Cruz, functional fitness Santa Cruz, movement education, fascia therapy, bodywork Santa Cruz, mobile personal training, posture correction, pain relief Santa Cruz, movement specialist Bay Area, structural integrator, functional movement coach"
      structuredData={getLocalBusinessSchema()}
      url="/"
    />
    <Hero backgroundImage="/home-hero.jpg" altText="Rock Your Body - Structural integration and movement education in Santa Cruz, California">
      <div className="w-full flex flex-col items-center justify-center min-h-[70vh] md:min-h-[75vh] py-16">
        <div className="mt-36">
          <HeroContent />
        </div>
        
        {/* CHATBOT TEMPORARILY DISABLED - Will be re-enabled once fixed */}
      </div>
    </Hero>
    
    {/* Quick Start Quiz Section */}
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-lg text-neutralDark/80 max-w-2xl mx-auto">
            Answer 3 quick questions and we'll guide you to the perfect starting point for your needs.
          </p>
        </div>
        <QuickStartQuiz />
      </div>
    </section>
    
    {/* Services Overview Section - After Chat */}
    <div className="relative bg-white">
      <ServicesOverview />
    </div>
    
    {/* Footer */}
    <Footer />
    </>
  );
}

export default LandingPage;
