/**
 * Simple Rate Limiting for Vercel Serverless Functions
 * 
 * Uses in-memory store (resets on cold start)
 * For production, consider using Vercel Edge Config or Upstash Redis
 */

// In-memory rate limit store (resets on function cold start)
const rateLimitStore = new Map();

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

/**
 * Check if request should be rate limited
 * @param {string} identifier - Unique identifier (IP address, user ID, etc.)
 * @param {number} maxRequests - Maximum requests allowed
 * @param {number} windowMs - Time window in milliseconds
 * @returns {object} { allowed: boolean, remaining: number, resetTime: number }
 */
export function checkRateLimit(identifier, maxRequests = 10, windowMs = 60000) {
  const now = Date.now();
  const key = identifier;
  
  // Get or create rate limit entry
  let entry = rateLimitStore.get(key);
  
  if (!entry || now > entry.resetTime) {
    // Create new entry or reset expired one
    entry = {
      count: 0,
      resetTime: now + windowMs
    };
  }
  
  // Check if limit exceeded
  if (entry.count >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime,
      retryAfter: Math.ceil((entry.resetTime - now) / 1000)
    };
  }
  
  // Increment count
  entry.count++;
  rateLimitStore.set(key, entry);
  
  return {
    allowed: true,
    remaining: maxRequests - entry.count,
    resetTime: entry.resetTime
  };
}

/**
 * Get client identifier from request
 * @param {object} req - Request object
 * @returns {string} Client identifier
 */
export function getClientIdentifier(req) {
  // Try to get IP from various headers (Vercel, Cloudflare, etc.)
  // In Vercel serverless functions, headers are accessed via req.headers.get() or req.headers object
  const headers = req.headers || {};
  const getHeader = (name) => {
    if (typeof headers.get === 'function') {
      return headers.get(name);
    }
    return headers[name] || headers[name.toLowerCase()];
  };
  
  const ip = 
    getHeader('x-forwarded-for')?.split(',')[0]?.trim() ||
    getHeader('x-real-ip') ||
    getHeader('cf-connecting-ip') ||
    getHeader('x-vercel-forwarded-for') ||
    req.connection?.remoteAddress ||
    'unknown';
  
  return ip;
}

/**
 * Rate limit middleware for Vercel serverless functions
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @param {function} next - Next function
 * @param {object} options - Rate limit options
 * @returns {object|null} Error response if rate limited, null otherwise
 */
export function rateLimitMiddleware(req, res, options = {}) {
  try {
    const {
      maxRequests = 10,
      windowMs = 60000, // 1 minute
      message = 'Too many requests. Please try again later.'
    } = options;
    
    // Safely get client identifier
    let identifier;
    try {
      identifier = getClientIdentifier(req);
    } catch (idError) {
      console.warn('[RATE-LIMIT] Failed to get client identifier, using default:', idError);
      identifier = 'unknown';
    }
    
    const result = checkRateLimit(identifier, maxRequests, windowMs);
    
    if (!result.allowed) {
      try {
        res.setHeader('X-RateLimit-Limit', String(maxRequests));
        res.setHeader('X-RateLimit-Remaining', String(result.remaining || 0));
        res.setHeader('X-RateLimit-Reset', new Date(result.resetTime || Date.now()).toISOString());
        if (result.retryAfter) {
          res.setHeader('Retry-After', String(result.retryAfter));
        }
        
        return res.status(429).json({
          error: 'Rate limit exceeded',
          message: message,
          retryAfter: result.retryAfter
        });
      } catch (headerError) {
        console.error('[RATE-LIMIT] Failed to set headers:', headerError);
        // If we can't set headers, just return the response
        return res.status(429).json({
          error: 'Rate limit exceeded',
          message: message
        });
      }
    }
    
    // Set rate limit headers for allowed requests
    try {
      res.setHeader('X-RateLimit-Limit', String(maxRequests));
      res.setHeader('X-RateLimit-Remaining', String(result.remaining || 0));
      res.setHeader('X-RateLimit-Reset', new Date(result.resetTime || Date.now()).toISOString());
    } catch (headerError) {
      // If headers fail, continue anyway - rate limiting is not critical
      console.warn('[RATE-LIMIT] Failed to set rate limit headers:', headerError);
    }
    
    return null; // Continue processing
  } catch (error) {
    // If rate limiting completely fails, log and allow the request to proceed
    console.error('[RATE-LIMIT] Rate limiting error, allowing request:', error);
    return null; // Don't block the request if rate limiting fails
  }
}

export default {
  checkRateLimit,
  getClientIdentifier,
  rateLimitMiddleware
};

