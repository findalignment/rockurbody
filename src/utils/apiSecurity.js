/**
 * API Security Utilities
 * Enhanced security for API calls and data handling
 */

// Rate limiting store
const rateLimitStore = new Map();
const MAX_REQUESTS_PER_MINUTE = 60;
const MAX_REQUESTS_PER_HOUR = 1000;
const CLEANUP_INTERVAL = 60000; // 1 minute

/**
 * Rate limiting implementation
 * @param {string} identifier - User identifier (IP, user ID, etc.)
 * @param {number} windowMs - Time window in milliseconds
 * @param {number} maxRequests - Maximum requests in window
 * @returns {object} - Rate limit result
 */
export function checkRateLimit(identifier, windowMs = 60000, maxRequests = MAX_REQUESTS_PER_MINUTE) {
  const now = Date.now();
  const key = `${identifier}_${windowMs}`;
  
  if (!rateLimitStore.has(key)) {
    rateLimitStore.set(key, []);
  }
  
  const requests = rateLimitStore.get(key);
  
  // Remove old requests outside the window
  const validRequests = requests.filter(timestamp => now - timestamp < windowMs);
  
  if (validRequests.length >= maxRequests) {
    const oldestRequest = Math.min(...validRequests);
    const resetTime = oldestRequest + windowMs;
    const waitTime = Math.ceil((resetTime - now) / 1000);
    
    return {
      allowed: false,
      waitTime,
      resetTime,
      remaining: 0,
      limit: maxRequests
    };
  }
  
  // Add current request
  validRequests.push(now);
  rateLimitStore.set(key, validRequests);
  
  return {
    allowed: true,
    waitTime: 0,
    resetTime: now + windowMs,
    remaining: maxRequests - validRequests.length,
    limit: maxRequests
  };
}

/**
 * Clean up old rate limit entries
 */
function cleanupRateLimitStore() {
  const now = Date.now();
  const maxAge = 3600000; // 1 hour
  
  for (const [key, requests] of rateLimitStore.entries()) {
    const validRequests = requests.filter(timestamp => now - timestamp < maxAge);
    
    if (validRequests.length === 0) {
      rateLimitStore.delete(key);
    } else {
      rateLimitStore.set(key, validRequests);
    }
  }
}

// Start cleanup interval
setInterval(cleanupRateLimitStore, CLEANUP_INTERVAL);

/**
 * Validate API request headers
 * @param {object} headers - Request headers
 * @returns {object} - Validation result
 */
export function validateApiHeaders(headers) {
  const requiredHeaders = ['content-type'];
  const missingHeaders = [];
  
  for (const header of requiredHeaders) {
    if (!headers[header] && !headers[header.toLowerCase()]) {
      missingHeaders.push(header);
    }
  }
  
  // Check for suspicious headers
  const suspiciousHeaders = [
    'x-forwarded-for',
    'x-real-ip',
    'x-cluster-client-ip',
    'x-forwarded',
    'forwarded-for',
    'forwarded'
  ];
  
  const foundSuspicious = suspiciousHeaders.filter(header => 
    headers[header] || headers[header.toLowerCase()]
  );
  
  return {
    isValid: missingHeaders.length === 0,
    missingHeaders,
    suspiciousHeaders: foundSuspicious,
    warnings: foundSuspicious.length > 0 ? ['Suspicious headers detected'] : []
  };
}

/**
 * Sanitize API response data
 * @param {any} data - Data to sanitize
 * @returns {any} - Sanitized data
 */
export function sanitizeApiResponse(data) {
  if (typeof data === 'string') {
    return sanitizeString(data);
  }
  
  if (Array.isArray(data)) {
    return data.map(item => sanitizeApiResponse(item));
  }
  
  if (data && typeof data === 'object') {
    const sanitized = {};
    for (const [key, value] of Object.entries(data)) {
      // Remove sensitive fields
      if (isSensitiveField(key)) {
        continue;
      }
      sanitized[key] = sanitizeApiResponse(value);
    }
    return sanitized;
  }
  
  return data;
}

/**
 * Sanitize string data
 * @param {string} str - String to sanitize
 * @returns {string} - Sanitized string
 */
function sanitizeString(str) {
  return str
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/vbscript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .replace(/data:/gi, '')
    .replace(/expression\s*\(/gi, '')
    .replace(/url\s*\(/gi, '')
    .trim();
}

/**
 * Check if field contains sensitive data
 * @param {string} fieldName - Field name to check
 * @returns {boolean} - True if sensitive
 */
function isSensitiveField(fieldName) {
  const sensitiveFields = [
    'password', 'passwd', 'pwd', 'secret', 'token', 'key', 'api_key',
    'apikey', 'access_token', 'refresh_token', 'auth_token', 'session',
    'ssn', 'social_security', 'credit_card', 'card_number', 'cvv',
    'bank_account', 'routing_number', 'private_key', 'privatekey'
  ];
  
  const lowerField = fieldName.toLowerCase();
  return sensitiveFields.some(field => lowerField.includes(field));
}

/**
 * Validate API endpoint
 * @param {string} endpoint - API endpoint
 * @returns {object} - Validation result
 */
export function validateApiEndpoint(endpoint) {
  if (!endpoint || typeof endpoint !== 'string') {
    return { isValid: false, error: 'Invalid endpoint' };
  }
  
  // Check for suspicious patterns
  const suspiciousPatterns = [
    /\.\./, // Directory traversal
    /%2e%2e/i, // URL encoded directory traversal
    /<script/i, // Script injection
    /javascript:/i, // JavaScript protocol
    /data:/i, // Data protocol
    /vbscript:/i, // VBScript protocol
    /on\w+\s*=/i, // Event handlers
    /expression\s*\(/i, // CSS expressions
    /url\s*\(/i, // CSS URLs
    /@import/i, // CSS imports
    /eval\s*\(/i, // Eval function
    /setTimeout\s*\(/i, // Timeout functions
    /setInterval\s*\(/i, // Interval functions
    /document\./i, // Document object
    /window\./i, // Window object
    /\.innerHTML/i, // InnerHTML
    /\.outerHTML/i, // OuterHTML
    /\.write\s*\(/i, // Document write
    /\.writeln\s*\(/i // Document writeln
  ];
  
  const foundSuspicious = suspiciousPatterns.filter(pattern => pattern.test(endpoint));
  
  if (foundSuspicious.length > 0) {
    return {
      isValid: false,
      error: 'Suspicious patterns detected in endpoint',
      suspiciousPatterns: foundSuspicious.length
    };
  }
  
  // Check for valid URL format
  try {
    new URL(endpoint);
    return { isValid: true, error: null };
  } catch (error) {
    return { isValid: false, error: 'Invalid URL format' };
  }
}

/**
 * Secure API request wrapper
 * @param {string} url - API URL
 * @param {object} options - Request options
 * @param {string} identifier - Rate limit identifier
 * @returns {Promise<Response>} - API response
 */
export async function secureApiRequest(url, options = {}, identifier = 'anonymous') {
  // Validate endpoint
  const endpointValidation = validateApiEndpoint(url);
  if (!endpointValidation.isValid) {
    throw new Error(`Invalid endpoint: ${endpointValidation.error}`);
  }
  
  // Check rate limit
  const rateLimit = checkRateLimit(identifier);
  if (!rateLimit.allowed) {
    throw new Error(`Rate limit exceeded. Try again in ${rateLimit.waitTime} seconds.`);
  }
  
  // Validate headers
  const headerValidation = validateApiHeaders(options.headers || {});
  if (!headerValidation.isValid) {
    console.warn('Missing required headers:', headerValidation.missingHeaders);
  }
  
  // Add security headers
  const secureOptions = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      ...options.headers
    }
  };
  
  try {
    const response = await fetch(url, secureOptions);
    
    // Check for suspicious response headers
    const suspiciousResponseHeaders = [
      'x-powered-by',
      'server',
      'x-aspnet-version',
      'x-aspnetmvc-version'
    ];
    
    const foundSuspicious = suspiciousResponseHeaders.filter(header => 
      response.headers.get(header)
    );
    
    if (foundSuspicious.length > 0) {
      console.warn('Suspicious response headers detected:', foundSuspicious);
    }
    
    return response;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

/**
 * Validate environment variables
 * @returns {object} - Validation result
 */
export function validateEnvironmentVariables() {
  const requiredVars = [
    'VITE_OPENAI_API_KEY',
    'VITE_FIREBASE_API_KEY',
    'VITE_FIREBASE_AUTH_DOMAIN',
    'VITE_FIREBASE_PROJECT_ID'
  ];
  
  const missingVars = [];
  const presentVars = [];
  
  for (const varName of requiredVars) {
    const value = import.meta.env[varName];
    if (!value || value.trim() === '') {
      missingVars.push(varName);
    } else {
      presentVars.push(varName);
    }
  }
  
  return {
    isValid: missingVars.length === 0,
    missingVars,
    presentVars,
    warnings: missingVars.length > 0 ? ['Missing required environment variables'] : []
  };
}

export default {
  checkRateLimit,
  validateApiHeaders,
  sanitizeApiResponse,
  validateApiEndpoint,
  secureApiRequest,
  validateEnvironmentVariables
};
