/**
 * Security Middleware for Development Server
 * Adds security headers and protections during development
 */

import { securityHeaders } from './securityHeaders.js';
import logger from './logger';

/**
 * Security middleware for Vite dev server
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @param {function} next - Next middleware function
 */
export function securityMiddleware(req, res, next) {
  // Apply security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  // Add additional development-specific headers
  res.setHeader('X-Development-Mode', 'true');
  res.setHeader('X-Security-Enabled', 'true');

  // Log security events
  if (req.url.includes('..') || req.url.includes('%2e%2e')) {
    logger.warn('🚨 Security Alert: Potential directory traversal attempt:', req.url);
    res.status(403).send('Forbidden: Directory traversal detected');
    return;
  }

  // Check for suspicious query parameters
  const suspiciousParams = ['script', 'javascript', 'vbscript', 'data:', 'expression'];
  const hasSuspiciousParams = Object.keys(req.query).some(param => 
    suspiciousParams.some(suspicious => param.toLowerCase().includes(suspicious))
  );

  if (hasSuspiciousParams) {
    logger.warn('🚨 Security Alert: Suspicious query parameters detected:', req.query);
    res.status(400).send('Bad Request: Suspicious parameters detected');
    return;
  }

  next();
}

/**
 * Rate limiting middleware
 * @param {object} options - Rate limiting options
 * @returns {function} - Middleware function
 */
export function rateLimitMiddleware(options = {}) {
  const {
    windowMs = 60000, // 1 minute
    maxRequests = 100, // 100 requests per minute
    message = 'Too many requests, please try again later.'
  } = options;

  const requests = new Map();

  return (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;
    const now = Date.now();
    const windowStart = now - windowMs;

    // Clean up old requests
    if (requests.has(ip)) {
      const userRequests = requests.get(ip).filter(timestamp => timestamp > windowStart);
      requests.set(ip, userRequests);
    } else {
      requests.set(ip, []);
    }

    const userRequests = requests.get(ip);

    if (userRequests.length >= maxRequests) {
      res.status(429).json({ error: message });
      return;
    }

    userRequests.push(now);
    requests.set(ip, userRequests);

    next();
  };
}

/**
 * CORS security middleware
 * @param {object} options - CORS options
 * @returns {function} - Middleware function
 */
export function corsSecurityMiddleware(options = {}) {
  const {
    origin = ['http://localhost:3000', 'http://localhost:5173'],
    credentials = true,
    methods = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders = ['Content-Type', 'Authorization', 'X-Requested-With']
  } = options;

  return (req, res, next) => {
    const requestOrigin = req.headers.origin;

    // Check if origin is allowed
    if (origin.includes(requestOrigin) || origin.includes('*')) {
      res.setHeader('Access-Control-Allow-Origin', requestOrigin);
    } else {
      res.status(403).json({ error: 'CORS: Origin not allowed' });
      return;
    }

    res.setHeader('Access-Control-Allow-Credentials', credentials);
    res.setHeader('Access-Control-Allow-Methods', methods.join(', '));
    res.setHeader('Access-Control-Allow-Headers', allowedHeaders.join(', '));

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }

    next();
  };
}

/**
 * Request logging middleware
 * @param {object} options - Logging options
 * @returns {function} - Middleware function
 */
export function requestLoggingMiddleware(options = {}) {
  const {
    logLevel = 'info',
    logSensitive = false
  } = options;

  return (req, res, next) => {
    const startTime = Date.now();
    const ip = req.ip || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'];

    // Log request
    logger.log(`📝 ${req.method} ${req.url} - ${ip} - ${userAgent}`);

    // Log response
    res.on('finish', () => {
      const duration = Date.now() - startTime;
      const status = res.statusCode;
      
      if (status >= 400) {
        logger.warn(`⚠️ ${req.method} ${req.url} - ${status} - ${duration}ms`);
      } else {
        logger.log(`✅ ${req.method} ${req.url} - ${status} - ${duration}ms`);
      }
    });

    next();
  };
}

/**
 * Error handling middleware
 * @param {object} options - Error handling options
 * @returns {function} - Middleware function
 */
export function errorHandlingMiddleware(options = {}) {
  const {
    logErrors = true,
    exposeErrors = false
  } = options;

  return (err, req, res, next) => {
    if (logErrors) {
      logger.error('🚨 Error:', err);
    }

    // Don't expose internal errors in production
    const message = exposeErrors ? err.message : 'Internal Server Error';
    const status = err.status || 500;

    res.status(status).json({
      error: message,
      timestamp: new Date().toISOString(),
      path: req.url
    });
  };
}

export default {
  securityMiddleware,
  rateLimitMiddleware,
  corsSecurityMiddleware,
  requestLoggingMiddleware,
  errorHandlingMiddleware
};
