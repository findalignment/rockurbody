/**
 * Enhanced Input Validation and Sanitization
 * Comprehensive validation for all user inputs
 */

import DOMPurify from 'dompurify';

// Input validation schemas
export const validationSchemas = {
  email: {
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    maxLength: 254,
    message: 'Please enter a valid email address'
  },
  password: {
    minLength: 8,
    maxLength: 128,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    message: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character'
  },
  name: {
    pattern: /^[a-zA-Z\s'-]{2,50}$/,
    maxLength: 50,
    message: 'Name must be 2-50 characters, letters, spaces, hyphens, and apostrophes only'
  },
  phone: {
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    maxLength: 20,
    message: 'Please enter a valid phone number'
  },
  message: {
    minLength: 1,
    maxLength: 1000,
    message: 'Message must be 1-1000 characters'
  }
};

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {object} - Validation result
 */
export function validateEmail(email) {
  const schema = validationSchemas.email;
  
  if (!email || typeof email !== 'string') {
    return { isValid: false, error: 'Email is required' };
  }
  
  const trimmed = email.trim().toLowerCase();
  
  if (trimmed.length === 0) {
    return { isValid: false, error: 'Email is required' };
  }
  
  if (trimmed.length > schema.maxLength) {
    return { isValid: false, error: `Email must be less than ${schema.maxLength} characters` };
  }
  
  if (!schema.pattern.test(trimmed)) {
    return { isValid: false, error: schema.message };
  }
  
  // Check for suspicious patterns
  if (containsSuspiciousPatterns(trimmed)) {
    return { isValid: false, error: 'Invalid email format' };
  }
  
  return { isValid: true, value: trimmed, error: null };
}

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {object} - Validation result
 */
export function validatePassword(password) {
  const schema = validationSchemas.password;
  
  if (!password || typeof password !== 'string') {
    return { isValid: false, error: 'Password is required' };
  }
  
  if (password.length < schema.minLength) {
    return { isValid: false, error: `Password must be at least ${schema.minLength} characters` };
  }
  
  if (password.length > schema.maxLength) {
    return { isValid: false, error: `Password must be less than ${schema.maxLength} characters` };
  }
  
  if (!schema.pattern.test(password)) {
    return { isValid: false, error: schema.message };
  }
  
  // Check for common weak passwords
  if (isWeakPassword(password)) {
    return { isValid: false, error: 'Password is too weak. Please choose a stronger password.' };
  }
  
  return { isValid: true, value: password, error: null };
}

/**
 * Validate name field
 * @param {string} name - Name to validate
 * @returns {object} - Validation result
 */
export function validateName(name) {
  const schema = validationSchemas.name;
  
  if (!name || typeof name !== 'string') {
    return { isValid: false, error: 'Name is required' };
  }
  
  const trimmed = name.trim();
  
  if (trimmed.length === 0) {
    return { isValid: false, error: 'Name is required' };
  }
  
  if (trimmed.length > schema.maxLength) {
    return { isValid: false, error: `Name must be less than ${schema.maxLength} characters` };
  }
  
  if (!schema.pattern.test(trimmed)) {
    return { isValid: false, error: schema.message };
  }
  
  return { isValid: true, value: trimmed, error: null };
}

/**
 * Validate phone number
 * @param {string} phone - Phone to validate
 * @returns {object} - Validation result
 */
export function validatePhone(phone) {
  const schema = validationSchemas.phone;
  
  if (!phone || typeof phone !== 'string') {
    return { isValid: false, error: 'Phone number is required' };
  }
  
  // Remove all non-digit characters except +
  const cleaned = phone.replace(/[^\d+]/g, '');
  
  if (cleaned.length === 0) {
    return { isValid: false, error: 'Phone number is required' };
  }
  
  if (cleaned.length > schema.maxLength) {
    return { isValid: false, error: `Phone number must be less than ${schema.maxLength} digits` };
  }
  
  if (!schema.pattern.test(cleaned)) {
    return { isValid: false, error: schema.message };
  }
  
  return { isValid: true, value: cleaned, error: null };
}

/**
 * Validate and sanitize message content
 * @param {string} message - Message to validate
 * @returns {object} - Validation result
 */
export function validateMessage(message) {
  const schema = validationSchemas.message;
  
  if (!message || typeof message !== 'string') {
    return { isValid: false, error: 'Message is required' };
  }
  
  const trimmed = message.trim();
  
  if (trimmed.length === 0) {
    return { isValid: false, error: 'Message is required' };
  }
  
  if (trimmed.length < schema.minLength) {
    return { isValid: false, error: `Message must be at least ${schema.minLength} character` };
  }
  
  if (trimmed.length > schema.maxLength) {
    return { isValid: false, error: `Message must be less than ${schema.maxLength} characters` };
  }
  
  // Sanitize HTML content
  const sanitized = sanitizeHtml(trimmed);
  
  // Check for suspicious patterns
  if (containsSuspiciousPatterns(sanitized)) {
    return { isValid: false, error: 'Message contains invalid content' };
  }
  
  return { isValid: true, value: sanitized, error: null };
}

/**
 * Sanitize HTML content using DOMPurify
 * @param {string} html - HTML content to sanitize
 * @returns {string} - Sanitized HTML
 */
export function sanitizeHtml(html) {
  if (typeof window !== 'undefined' && window.DOMPurify) {
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br'],
      ALLOWED_ATTR: []
    });
  }
  
  // Fallback sanitization if DOMPurify not available
  return html
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .replace(/<[^>]*>/g, '');
}

/**
 * Check for suspicious patterns in input
 * @param {string} input - Input to check
 * @returns {boolean} - True if suspicious patterns found
 */
function containsSuspiciousPatterns(input) {
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /vbscript:/i,
    /onload=/i,
    /onerror=/i,
    /onclick=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /<link/i,
    /<meta/i,
    /expression\s*\(/i,
    /url\s*\(/i,
    /@import/i,
    /eval\s*\(/i,
    /setTimeout\s*\(/i,
    /setInterval\s*\(/i,
    /document\./i,
    /window\./i,
    /\.innerHTML/i,
    /\.outerHTML/i
  ];
  
  return suspiciousPatterns.some(pattern => pattern.test(input));
}

/**
 * Check if password is weak
 * @param {string} password - Password to check
 * @returns {boolean} - True if password is weak
 */
function isWeakPassword(password) {
  const weakPasswords = [
    'password', '123456', '123456789', 'qwerty', 'abc123',
    'password123', 'admin', 'letmein', 'welcome', 'monkey',
    '1234567890', 'password1', 'qwerty123', 'dragon', 'master'
  ];
  
  const lowerPassword = password.toLowerCase();
  
  // Check against common weak passwords
  if (weakPasswords.includes(lowerPassword)) {
    return true;
  }
  
  // Check for sequential patterns
  if (/(.)\1{3,}/.test(password)) {
    return true;
  }
  
  // Check for keyboard patterns
  const keyboardPatterns = [
    'qwerty', 'asdfgh', 'zxcvbn', '123456', 'abcdef'
  ];
  
  return keyboardPatterns.some(pattern => 
    lowerPassword.includes(pattern) || 
    lowerPassword.includes(pattern.split('').reverse().join(''))
  );
}

/**
 * Comprehensive input validation
 * @param {object} data - Data object to validate
 * @param {object} schema - Validation schema
 * @returns {object} - Validation result
 */
export function validateFormData(data, schema) {
  const errors = {};
  const sanitizedData = {};
  
  for (const [field, rules] of Object.entries(schema)) {
    const value = data[field];
    let validation;
    
    switch (rules.type) {
      case 'email':
        validation = validateEmail(value);
        break;
      case 'password':
        validation = validatePassword(value);
        break;
      case 'name':
        validation = validateName(value);
        break;
      case 'phone':
        validation = validatePhone(value);
        break;
      case 'message':
        validation = validateMessage(value);
        break;
      default:
        validation = { isValid: true, value: value, error: null };
    }
    
    if (!validation.isValid) {
      errors[field] = validation.error;
    } else {
      sanitizedData[field] = validation.value;
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    data: sanitizedData
  };
}

export default {
  validateEmail,
  validatePassword,
  validateName,
  validatePhone,
  validateMessage,
  validateFormData,
  sanitizeHtml
};
