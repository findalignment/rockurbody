/**
 * Chatbot Reliability System
 * Handles chatbot failures, provides fallbacks, and monitors health
 */

import logger from './logger';

// Chatbot health status
let chatbotHealth = {
  isHealthy: true,
  lastError: null,
  errorCount: 0,
  lastSuccess: Date.now(),
  consecutiveFailures: 0,
  totalRequests: 0,
  successfulRequests: 0
};

// Fallback responses for when chatbot is down
const fallbackResponses = {
  greeting: "Hi! I'm temporarily unavailable, but I'd love to help you. Please feel free to email me directly at rock@rockurbody.com or schedule a free consultation to discuss your needs.",
  
  services: "I'm currently experiencing technical difficulties, but I can tell you about my services: Movement Education, Structural Integration, and Personal Training. For detailed information, please visit the Services page or email me at rock@rockurbody.com.",
  
  booking: "I'm having trouble processing your request right now. You can book sessions directly through our booking system or email me at rock@rockurbody.com to schedule a consultation.",
  
  pricing: "I'm temporarily unable to provide pricing information. Please check our Packages page for current rates, or email me at rock@rockurbody.com for personalized pricing.",
  
  contact: "I'm currently offline, but you can reach me at rock@rockurbody.com or schedule a free consultation. I typically respond within 24 hours.",
  
  default: "I'm experiencing technical difficulties right now. Please email me directly at rock@rockurbody.com or visit our Contact page for alternative ways to reach me. I'll be back online soon!"
};

// Common questions and their fallback responses
const commonQuestions = {
  'what services': fallbackResponses.services,
  'how much': fallbackResponses.pricing,
  'book': fallbackResponses.booking,
  'schedule': fallbackResponses.booking,
  'contact': fallbackResponses.contact,
  'email': fallbackResponses.contact,
  'hello': fallbackResponses.greeting,
  'hi': fallbackResponses.greeting,
  'help': fallbackResponses.default
};

/**
 * Update chatbot health status
 * @param {boolean} success - Whether the request was successful
 * @param {Error} error - Error object if request failed
 */
export function updateChatbotHealth(success, error = null) {
  chatbotHealth.totalRequests++;
  
  if (success) {
    chatbotHealth.successfulRequests++;
    chatbotHealth.consecutiveFailures = 0;
    chatbotHealth.lastSuccess = Date.now();
    chatbotHealth.isHealthy = true;
    chatbotHealth.lastError = null;
  } else {
    chatbotHealth.consecutiveFailures++;
    chatbotHealth.errorCount++;
    chatbotHealth.lastError = error;
    chatbotHealth.isHealthy = false;
    
    // Mark as unhealthy after 3 consecutive failures
    if (chatbotHealth.consecutiveFailures >= 3) {
      chatbotHealth.isHealthy = false;
    }
  }
  
  // Log health status
  logger.log('Chatbot Health:', {
    isHealthy: chatbotHealth.isHealthy,
    consecutiveFailures: chatbotHealth.consecutiveFailures,
    successRate: `${Math.round((chatbotHealth.successfulRequests / chatbotHealth.totalRequests) * 100)}%`,
    lastError: error?.message
  });
}

/**
 * Get chatbot health status
 * @returns {object} - Health status object
 */
export function getChatbotHealth() {
  return {
    ...chatbotHealth,
    successRate: chatbotHealth.totalRequests > 0 
      ? Math.round((chatbotHealth.successfulRequests / chatbotHealth.totalRequests) * 100)
      : 100,
    uptime: Date.now() - chatbotHealth.lastSuccess
  };
}

/**
 * Generate fallback response based on user message
 * @param {string} message - User message
 * @returns {string} - Fallback response
 */
export function generateFallbackResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  // Check for common question patterns
  for (const [pattern, response] of Object.entries(commonQuestions)) {
    if (lowerMessage.includes(pattern)) {
      return response;
    }
  }
  
  // Check for specific keywords
  if (lowerMessage.includes('service') || lowerMessage.includes('movement') || lowerMessage.includes('structural')) {
    return fallbackResponses.services;
  }
  
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate')) {
    return fallbackResponses.pricing;
  }
  
  if (lowerMessage.includes('book') || lowerMessage.includes('schedule') || lowerMessage.includes('appointment')) {
    return fallbackResponses.booking;
  }
  
  if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
    return fallbackResponses.contact;
  }
  
  // Default fallback
  return fallbackResponses.default;
}

/**
 * Enhanced error handling for chatbot requests
 * @param {Function} apiCall - The API call function
 * @param {string} userMessage - User's message
 * @param {Array} conversationHistory - Conversation history
 * @returns {Promise<object>} - Response object
 */
export async function handleChatbotRequest(apiCall, userMessage, conversationHistory = []) {
  try {
    // Check if chatbot is healthy
    if (!chatbotHealth.isHealthy && chatbotHealth.consecutiveFailures >= 3) {
      logger.warn('Chatbot marked as unhealthy, using fallback response');
      return {
        success: false,
        isFallback: true,
        response: generateFallbackResponse(userMessage),
        error: 'Chatbot temporarily unavailable'
      };
    }
    
    // Make the API call
    const response = await apiCall(userMessage, conversationHistory);
    
    // Update health on success
    updateChatbotHealth(true);
    
    return {
      success: true,
      isFallback: false,
      response: response,
      error: null
    };
    
  } catch (error) {
    logger.error('Chatbot request failed:', error);
    
    // Update health on failure
    updateChatbotHealth(false, error);
    
    // Determine if we should use fallback or retry
    if (chatbotHealth.consecutiveFailures >= 3) {
      return {
        success: false,
        isFallback: true,
        response: generateFallbackResponse(userMessage),
        error: error.message
      };
    }
    
    // For first few failures, return error to allow retry
    return {
      success: false,
      isFallback: false,
      response: null,
      error: error.message
    };
  }
}

/**
 * Retry mechanism for failed requests
 * @param {Function} apiCall - The API call function
 * @param {string} userMessage - User's message
 * @param {Array} conversationHistory - Conversation history
 * @param {number} maxRetries - Maximum number of retries
 * @returns {Promise<object>} - Response object
 */
export async function retryChatbotRequest(apiCall, userMessage, conversationHistory = [], maxRetries = 2) {
  let lastError = null;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const result = await handleChatbotRequest(apiCall, userMessage, conversationHistory);
      
      if (result.success) {
        return result;
      }
      
      lastError = result.error;
      
      // Wait before retry (exponential backoff)
      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000; // 1s, 2s, 4s
        await new Promise(resolve => setTimeout(resolve, delay));
      }
      
    } catch (error) {
      lastError = error.message;
      
      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  // All retries failed, return fallback
  return {
    success: false,
    isFallback: true,
    response: generateFallbackResponse(userMessage),
    error: lastError
  };
}

/**
 * Monitor chatbot health and attempt recovery
 */
export function startHealthMonitoring() {
  // Check health every 5 minutes
  setInterval(() => {
    const health = getChatbotHealth();
    
    // If chatbot has been down for more than 10 minutes, try to recover
    if (!health.isHealthy && health.uptime > 600000) { // 10 minutes
      logger.log('Attempting chatbot recovery...');
      chatbotHealth.consecutiveFailures = 0;
      chatbotHealth.isHealthy = true;
    }
    
    // Log health status
    if (!health.isHealthy) {
      logger.warn('Chatbot Health Alert:', {
        status: 'Unhealthy',
        consecutiveFailures: health.consecutiveFailures,
        lastError: health.lastError,
        uptime: Math.round(health.uptime / 1000) + 's'
      });
    }
  }, 300000); // 5 minutes
}

/**
 * Get chatbot status for UI display
 * @returns {object} - Status information
 */
export function getChatbotStatus() {
  const health = getChatbotHealth();
  
  if (health.isHealthy) {
    return {
      status: 'online',
      message: 'Chatbot is online and ready to help',
      color: 'green'
    };
  } else if (health.consecutiveFailures < 3) {
    return {
      status: 'degraded',
      message: 'Chatbot is experiencing issues but still working',
      color: 'yellow'
    };
  } else {
    return {
      status: 'offline',
      message: 'Chatbot is temporarily offline. Please email rock@rockurbody.com',
      color: 'red'
    };
  }
}

/**
 * Common reasons why chatbots go down and how to prevent them
 */
export const chatbotFailureReasons = {
  'API Rate Limits': {
    description: 'OpenAI API rate limits exceeded',
    prevention: 'Implement proper rate limiting and request queuing',
    solution: 'Wait for rate limit reset or upgrade API plan'
  },
  'Network Issues': {
    description: 'Network connectivity problems',
    prevention: 'Implement retry logic and fallback responses',
    solution: 'Check network connection and retry'
  },
  'API Key Issues': {
    description: 'Invalid or expired API key',
    prevention: 'Monitor API key status and implement key rotation',
    solution: 'Update API key in environment variables'
  },
  'Server Overload': {
    description: 'Server is overwhelmed with requests',
    prevention: 'Implement request queuing and load balancing',
    solution: 'Reduce request frequency or scale infrastructure'
  },
  'OpenAI Service Outage': {
    description: 'OpenAI service is temporarily down',
    prevention: 'Implement fallback responses and service monitoring',
    solution: 'Wait for service restoration or use fallback responses'
  }
};

export default {
  updateChatbotHealth,
  getChatbotHealth,
  generateFallbackResponse,
  handleChatbotRequest,
  retryChatbotRequest,
  startHealthMonitoring,
  getChatbotStatus,
  chatbotFailureReasons
};
