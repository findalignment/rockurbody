/**
 * IP-Based Rate Limiting
 * Track requests by IP address to prevent abuse
 * Note: In production, this should be done server-side
 */

const IP_STORAGE_KEY = 'ip_rate_limits';
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10;

/**
 * Get simulated IP address (client-side fingerprint)
 * In production, get real IP from server
 * @returns {string} - Fingerprint ID
 */
export async function getClientFingerprint() {
  // Create a simple fingerprint based on browser characteristics
  const fingerprint = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screenResolution: `${screen.width}x${screen.height}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    hardwareConcurrency: navigator.hardwareConcurrency,
  };
  
  // Create hash from fingerprint
  const fingerprintString = JSON.stringify(fingerprint);
  const hash = await simpleHash(fingerprintString);
  
  return hash;
}

/**
 * Simple hash function
 * @param {string} str - String to hash
 * @returns {string} - Hash value
 */
async function simpleHash(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 16);
}

/**
 * Get rate limit data for fingerprint
 * @param {string} fingerprint - Client fingerprint
 * @returns {object} - Rate limit data
 */
function getRateLimitData(fingerprint) {
  try {
    const stored = sessionStorage.getItem(IP_STORAGE_KEY);
    const allLimits = stored ? JSON.parse(stored) : {};
    
    return allLimits[fingerprint] || {
      requests: [],
      firstRequest: null,
      totalRequests: 0,
    };
  } catch (error) {
    console.error('Error reading rate limits:', error);
    return {
      requests: [],
      firstRequest: null,
      totalRequests: 0,
    };
  }
}

/**
 * Update rate limit data
 * @param {string} fingerprint - Client fingerprint
 * @param {object} data - Rate limit data
 */
function updateRateLimitData(fingerprint, data) {
  try {
    const stored = sessionStorage.getItem(IP_STORAGE_KEY);
    const allLimits = stored ? JSON.parse(stored) : {};
    
    allLimits[fingerprint] = data;
    
    sessionStorage.setItem(IP_STORAGE_KEY, JSON.stringify(allLimits));
  } catch (error) {
    console.error('Error updating rate limits:', error);
  }
}

/**
 * Check if request is allowed under rate limit
 * @returns {object} - Rate limit decision
 */
export async function checkRateLimit() {
  const fingerprint = await getClientFingerprint();
  const now = Date.now();
  const data = getRateLimitData(fingerprint);
  
  // Filter out old requests outside the window
  const recentRequests = data.requests.filter(
    timestamp => now - timestamp < RATE_LIMIT_WINDOW
  );
  
  // Check if limit exceeded
  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    const oldestRequest = Math.min(...recentRequests);
    const waitTime = Math.ceil((RATE_LIMIT_WINDOW - (now - oldestRequest)) / 1000);
    
    return {
      allowed: false,
      reason: `Rate limit exceeded. Please wait ${waitTime} seconds before trying again.`,
      requestsRemaining: 0,
      resetIn: waitTime,
    };
  }
  
  // Add current request
  recentRequests.push(now);
  
  // Update storage
  updateRateLimitData(fingerprint, {
    requests: recentRequests,
    firstRequest: data.firstRequest || now,
    totalRequests: data.totalRequests + 1,
  });
  
  return {
    allowed: true,
    requestsRemaining: MAX_REQUESTS_PER_WINDOW - recentRequests.length,
    resetIn: Math.ceil(RATE_LIMIT_WINDOW / 1000),
  };
}

/**
 * Get rate limit status
 * @returns {object} - Current status
 */
export async function getRateLimitStatus() {
  const fingerprint = await getClientFingerprint();
  const data = getRateLimitData(fingerprint);
  const now = Date.now();
  
  const recentRequests = data.requests.filter(
    timestamp => now - timestamp < RATE_LIMIT_WINDOW
  );
  
  return {
    requestsUsed: recentRequests.length,
    requestsLimit: MAX_REQUESTS_PER_WINDOW,
    requestsRemaining: MAX_REQUESTS_PER_WINDOW - recentRequests.length,
    totalRequests: data.totalRequests,
  };
}

