/**
 * Chat Security Module
 * Validates user input, prevents injection attacks, moderates offensive content,
 * and protects sensitive information
 */

// ============================================
// INPUT VALIDATION
// ============================================

/**
 * Validate and sanitize user input
 * @param {string} input - User message
 * @returns {object} { isValid: boolean, sanitized: string, error: string }
 */
export function validateInput(input) {
  // Check if input exists
  if (!input || typeof input !== 'string') {
    return {
      isValid: false,
      sanitized: '',
      error: 'Please enter a message'
    };
  }

  // Trim whitespace
  const trimmed = input.trim();

  // Check minimum length
  if (trimmed.length === 0) {
    return {
      isValid: false,
      sanitized: '',
      error: 'Please enter a message'
    };
  }

  // Check maximum length (prevent abuse)
  const MAX_LENGTH = 500;
  if (trimmed.length > MAX_LENGTH) {
    return {
      isValid: false,
      sanitized: '',
      error: `Message too long (max ${MAX_LENGTH} characters)`
    };
  }

  // Check for excessive repetition (spam detection)
  if (hasExcessiveRepetition(trimmed)) {
    return {
      isValid: false,
      sanitized: '',
      error: 'Please enter a meaningful message'
    };
  }

  // Sanitize input (remove potential injection attempts)
  const sanitized = sanitizeInput(trimmed);

  return {
    isValid: true,
    sanitized,
    error: null
  };
}

/**
 * Detect excessive character or word repetition
 * @param {string} text
 * @returns {boolean}
 */
function hasExcessiveRepetition(text) {
  // Check for same character repeated more than 10 times
  if (/(.)\1{10,}/.test(text)) {
    return true;
  }

  // Check for same word repeated more than 5 times
  const words = text.toLowerCase().split(/\s+/);
  const wordCounts = {};
  for (const word of words) {
    if (word.length > 2) { // Only count words longer than 2 chars
      wordCounts[word] = (wordCounts[word] || 0) + 1;
      if (wordCounts[word] > 5) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Sanitize input to prevent injection attacks
 * @param {string} input
 * @returns {string}
 */
function sanitizeInput(input) {
  let sanitized = input;

  // Remove null bytes
  sanitized = sanitized.replace(/\0/g, '');

  // Remove control characters (except newlines and tabs)
  sanitized = sanitized.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');

  // Remove potential script injection patterns
  sanitized = sanitized.replace(/<script[^>]*>.*?<\/script>/gi, '');
  sanitized = sanitized.replace(/<iframe[^>]*>.*?<\/iframe>/gi, '');
  sanitized = sanitized.replace(/javascript:/gi, '');
  sanitized = sanitized.replace(/on\w+\s*=/gi, ''); // Remove event handlers

  // Limit consecutive special characters
  sanitized = sanitized.replace(/[!@#$%^&*()]{5,}/g, (match) => match.substring(0, 4));

  return sanitized.trim();
}

// ============================================
// CONTENT MODERATION
// ============================================

/**
 * Check if message contains offensive or inappropriate content
 * @param {string} message
 * @returns {object} { isAppropriate: boolean, reason: string }
 */
export function moderateContent(message) {
  const lowerMessage = message.toLowerCase();

  // Check for offensive language
  if (containsOffensiveLanguage(lowerMessage)) {
    return {
      isAppropriate: false,
      reason: 'Please keep the conversation professional and respectful'
    };
  }

  // Check for harassment or threats
  if (containsHarassment(lowerMessage)) {
    return {
      isAppropriate: false,
      reason: 'This type of message is not appropriate'
    };
  }

  // Check for spam patterns
  if (containsSpamPatterns(lowerMessage)) {
    return {
      isAppropriate: false,
      reason: 'This message appears to be spam'
    };
  }

  // Check for attempts to manipulate the AI
  if (containsPromptInjection(lowerMessage)) {
    return {
      isAppropriate: false,
      reason: 'Please ask genuine questions about our services'
    };
  }

  return {
    isAppropriate: true,
    reason: null
  };
}

/**
 * Check for offensive language
 * @param {string} text
 * @returns {boolean}
 */
function containsOffensiveLanguage(text) {
  // Common offensive words (abbreviated for production)
  const offensiveWords = [
    'fuck', 'shit', 'bitch', 'asshole', 'damn', 'crap',
    'bastard', 'piss', 'dick', 'cock', 'pussy', 'cunt',
    'slut', 'whore', 'fag', 'retard', 'nigger', 'chink'
  ];

  // Check for offensive words (with word boundaries)
  for (const word of offensiveWords) {
    const regex = new RegExp(`\\b${word}\\b`, 'i');
    if (regex.test(text)) {
      return true;
    }
  }

  return false;
}

/**
 * Check for harassment or threatening language
 * @param {string} text
 * @returns {boolean}
 */
function containsHarassment(text) {
  const harassmentPatterns = [
    /\b(kill|hurt|harm|attack|destroy)\s+(you|yourself|rock)\b/i,
    /\b(i will|gonna|going to)\s+(kill|hurt|harm|attack)\b/i,
    /\b(die|death|dead)\b.*\b(you|rock)\b/i,
    /\byou\s+(suck|are\s+terrible|are\s+awful|are\s+stupid)\b/i,
    /\b(hate|despise|loathe)\s+you\b/i
  ];

  return harassmentPatterns.some(pattern => pattern.test(text));
}

/**
 * Check for spam patterns
 * @param {string} text
 * @returns {boolean}
 */
function containsSpamPatterns(text) {
  const spamPatterns = [
    /\b(buy|purchase|order)\s+(now|today|here)\b/i,
    /\b(click|visit|check\s+out)\s+(here|this|link)\b/i,
    /\b(make\s+money|earn\s+cash|work\s+from\s+home)\b/i,
    /\b(viagra|cialis|pharmacy|pills)\b/i,
    /\b(casino|poker|gambling|lottery)\b/i,
    /\b(crypto|bitcoin|investment|trading)\b/i,
    /\b(free\s+money|get\s+rich|guaranteed)\b/i,
    /https?:\/\//gi, // URLs (unless it's rockurbody.com)
    /\b\w+\.(com|net|org|io)\b/i // Domain names
  ];

  // Allow rockurbody.com links
  const cleanedText = text.replace(/rockurbody\.com/gi, '');

  return spamPatterns.some(pattern => pattern.test(cleanedText));
}

/**
 * Check for prompt injection attempts
 * @param {string} text
 * @returns {boolean}
 */
function containsPromptInjection(text) {
  const injectionPatterns = [
    /ignore\s+(previous|all|above|prior)\s+(instructions|prompts|commands)/i,
    /forget\s+(everything|all|what|previous)/i,
    /you\s+are\s+(now|a|an)\s+/i,
    /pretend\s+(you|to\s+be)/i,
    /act\s+as\s+(if|a|an)/i,
    /your\s+(role|task|job)\s+is/i,
    /new\s+(instructions|prompt|role)/i,
    /system\s+(prompt|message|instruction)/i,
    /\[system\]/i,
    /\<system\>/i,
    /disregard\s+(all|previous|prior)/i,
    /override\s+(instructions|settings|rules)/i
  ];

  return injectionPatterns.some(pattern => pattern.test(text));
}

// ============================================
// SENSITIVE INFORMATION PROTECTION
// ============================================

/**
 * Check if user is trying to extract sensitive information
 * @param {string} message
 * @returns {object} { isSafe: boolean, warning: string }
 */
export function checkSensitiveInfoRequest(message) {
  const lowerMessage = message.toLowerCase();

  // Check for attempts to get API keys or credentials
  if (containsCredentialRequest(lowerMessage)) {
    return {
      isSafe: false,
      warning: 'I cannot share API keys or credentials. Please contact Rock directly for business inquiries.'
    };
  }

  // Check for attempts to get personal information
  if (containsPersonalInfoRequest(lowerMessage)) {
    return {
      isSafe: false,
      warning: 'For privacy reasons, I cannot share personal contact details. Please use the contact form or email rock@rockurbody.com.'
    };
  }

  // Check for attempts to get financial information
  if (containsFinancialInfoRequest(lowerMessage)) {
    return {
      isSafe: false,
      warning: 'I cannot share financial or payment information. All payments are processed securely through our booking system.'
    };
  }

  // Check for attempts to get other users' information
  if (containsUserDataRequest(lowerMessage)) {
    return {
      isSafe: false,
      warning: 'I cannot share information about other clients. All client information is confidential.'
    };
  }

  return {
    isSafe: true,
    warning: null
  };
}

/**
 * Check for credential/API key requests
 * @param {string} text
 * @returns {boolean}
 */
function containsCredentialRequest(text) {
  const credentialPatterns = [
    /\b(api\s+key|apikey|api_key|access\s+key)\b/i,
    /\b(secret|token|password|credential)\b/i,
    /\b(openai|stripe|firebase|airtable)\s+(key|token|secret)\b/i,
    /\benv\s+(file|variable|var)\b/i,
    /\b\.env\b/i,
    /\bVITE_\w+/i
  ];

  return credentialPatterns.some(pattern => pattern.test(text));
}

/**
 * Check for personal information requests
 * @param {string} text
 * @returns {boolean}
 */
function containsPersonalInfoRequest(text) {
  const personalInfoPatterns = [
    /\b(phone\s+number|cell\s+phone|mobile\s+number)\b/i,
    /\b(home\s+address|street\s+address|residential\s+address)\b/i,
    /\b(social\s+security|ssn|driver\s+license)\b/i,
    /\b(date\s+of\s+birth|birthday|age)\b.*\b(rock|hudson)\b/i,
    /\bpersonal\s+(email|phone|address)\b/i
  ];

  return personalInfoPatterns.some(pattern => pattern.test(text));
}

/**
 * Check for financial information requests
 * @param {string} text
 * @returns {boolean}
 */
function containsFinancialInfoRequest(text) {
  const financialPatterns = [
    /\b(credit\s+card|debit\s+card|card\s+number)\b/i,
    /\b(bank\s+account|routing\s+number|account\s+number)\b/i,
    /\b(stripe\s+account|payment\s+processor)\b/i,
    /\b(revenue|earnings|income)\b.*\b(rock|business)\b/i,
    /\bhow\s+much\s+(do\s+you\s+make|money|revenue)\b/i
  ];

  return financialPatterns.some(pattern => pattern.test(text));
}

/**
 * Check for other users' data requests
 * @param {string} text
 * @returns {boolean}
 */
function containsUserDataRequest(text) {
  const userDataPatterns = [
    /\b(other\s+clients|client\s+list|customer\s+list)\b/i,
    /\b(who\s+else|other\s+people|other\s+users)\b/i,
    /\buser\s+(data|information|details)\b/i,
    /\bclient\s+(names|emails|information)\b/i,
    /\b(database|user\s+records)\b/i
  ];

  return userDataPatterns.some(pattern => pattern.test(text));
}

// ============================================
// RATE LIMITING
// ============================================

const messageHistory = new Map(); // userId -> array of timestamps

/**
 * Check if user is sending too many messages
 * @param {string} userId - User identifier (IP or session ID)
 * @returns {object} { allowed: boolean, waitTime: number }
 */
export function checkRateLimit(userId) {
  const now = Date.now();
  const RATE_LIMIT_WINDOW = 60000; // 1 minute
  const MAX_MESSAGES = 10; // Max 10 messages per minute
  const BURST_WINDOW = 5000; // 5 seconds
  const MAX_BURST = 3; // Max 3 messages in 5 seconds

  // Get user's message history
  if (!messageHistory.has(userId)) {
    messageHistory.set(userId, []);
  }

  const userMessages = messageHistory.get(userId);

  // Remove old messages outside the window
  const recentMessages = userMessages.filter(
    timestamp => now - timestamp < RATE_LIMIT_WINDOW
  );

  // Check burst rate (3 messages in 5 seconds)
  const burstMessages = recentMessages.filter(
    timestamp => now - timestamp < BURST_WINDOW
  );

  if (burstMessages.length >= MAX_BURST) {
    const oldestBurst = Math.min(...burstMessages);
    const waitTime = Math.ceil((BURST_WINDOW - (now - oldestBurst)) / 1000);
    return {
      allowed: false,
      waitTime,
      reason: `Please slow down. Wait ${waitTime} seconds before sending another message.`
    };
  }

  // Check overall rate (10 messages per minute)
  if (recentMessages.length >= MAX_MESSAGES) {
    const oldestMessage = Math.min(...recentMessages);
    const waitTime = Math.ceil((RATE_LIMIT_WINDOW - (now - oldestMessage)) / 1000);
    return {
      allowed: false,
      waitTime,
      reason: `You've reached the message limit. Please wait ${waitTime} seconds.`
    };
  }

  // Add current message timestamp
  recentMessages.push(now);
  messageHistory.set(userId, recentMessages);

  // Clean up old entries periodically
  if (messageHistory.size > 1000) {
    cleanupRateLimitHistory();
  }

  return {
    allowed: true,
    waitTime: 0,
    reason: null
  };
}

/**
 * Clean up old rate limit history
 */
function cleanupRateLimitHistory() {
  const now = Date.now();
  const CLEANUP_THRESHOLD = 3600000; // 1 hour

  for (const [userId, timestamps] of messageHistory.entries()) {
    const recentTimestamps = timestamps.filter(
      timestamp => now - timestamp < CLEANUP_THRESHOLD
    );

    if (recentTimestamps.length === 0) {
      messageHistory.delete(userId);
    } else {
      messageHistory.set(userId, recentTimestamps);
    }
  }
}

// ============================================
// COMPREHENSIVE SECURITY CHECK
// ============================================

/**
 * Run all security checks on user input
 * @param {string} message - User message
 * @param {string} userId - User identifier
 * @returns {object} { allowed: boolean, sanitized: string, error: string }
 */
export function securityCheck(message, userId = 'anonymous') {
  // 1. Validate input
  const validation = validateInput(message);
  if (!validation.isValid) {
    return {
      allowed: false,
      sanitized: '',
      error: validation.error
    };
  }

  // 2. Check rate limit
  const rateLimit = checkRateLimit(userId);
  if (!rateLimit.allowed) {
    return {
      allowed: false,
      sanitized: '',
      error: rateLimit.reason
    };
  }

  // 3. Moderate content
  const moderation = moderateContent(validation.sanitized);
  if (!moderation.isAppropriate) {
    return {
      allowed: false,
      sanitized: '',
      error: moderation.reason
    };
  }

  // 4. Check for sensitive information requests
  const sensitiveCheck = checkSensitiveInfoRequest(validation.sanitized);
  if (!sensitiveCheck.isSafe) {
    return {
      allowed: false,
      sanitized: '',
      error: sensitiveCheck.warning
    };
  }

  // All checks passed
  return {
    allowed: true,
    sanitized: validation.sanitized,
    error: null
  };
}

export default {
  validateInput,
  moderateContent,
  checkSensitiveInfoRequest,
  checkRateLimit,
  securityCheck
};
