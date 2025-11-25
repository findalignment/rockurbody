/**
 * Google Analytics 4 (GA4) Integration
 * Measurement ID: G-LJ35KZ8B5Q
 */

const GA_MEASUREMENT_ID = 'G-LJ35KZ8B5Q';

/**
 * Initialize Google Analytics
 * Note: The gtag script is loaded in index.html, this just ensures gtag is available
 */
export function initGA() {
  if (typeof window === 'undefined') return;
  
  // Ensure gtag function exists (script is loaded in index.html)
  if (!window.gtag && window.dataLayer) {
    window.gtag = function(...args) {
      window.dataLayer.push(args);
    };
  }
  
  // Track initial page view if gtag is available
  if (window.gtag) {
    console.log('[Analytics] Google Analytics ready');
  }
}

/**
 * Track a page view
 * @param {string} path - The page path
 * @param {string} title - Optional page title
 */
export function trackPageView(path, title) {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title || document.title
  });
  
  console.log('[Analytics] Page view tracked:', path);
}

/**
 * Track a custom event
 * @param {string} eventName - Name of the event
 * @param {object} eventParams - Additional event parameters
 */
export function trackEvent(eventName, eventParams = {}) {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', eventName, eventParams);
  console.log('[Analytics] Event tracked:', eventName, eventParams);
}

/**
 * Track button clicks
 * @param {string} buttonName - Name/identifier of the button
 * @param {string} location - Where the button is located
 */
export function trackButtonClick(buttonName, location = 'unknown') {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: location
  });
}

/**
 * Track form submissions
 * @param {string} formName - Name/identifier of the form
 */
export function trackFormSubmit(formName) {
  trackEvent('form_submit', {
    form_name: formName
  });
}

/**
 * Track chat interactions
 * @param {string} action - Action type (e.g., 'open', 'close', 'message_sent')
 */
export function trackChat(action) {
  trackEvent('chat_interaction', {
    chat_action: action
  });
}

