// Simple chat logging utility for analytics and improvement
// Logs questions to help refine chatbot and identify common questions for website

import logger from './logger';

const LOG_ENDPOINT = import.meta.env.VITE_LOG_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID';

export async function logChatQuestion(question, metadata = {}) {
  try {
    // Don't log in development unless explicitly enabled
    if (import.meta.env.DEV && !import.meta.env.VITE_ENABLE_LOGGING) {
      logger.log('[Chat Log]:', question, metadata);
      return;
    }

    const logData = {
      timestamp: new Date().toISOString(),
      question: question,
      sessionId: metadata.sessionId || 'unknown',
      userId: metadata.userId || 'anonymous',
      detectedIntent: metadata.detectedIntent || null,
      questionNumber: metadata.questionNumber || null,
      userAgent: navigator.userAgent,
      referrer: document.referrer || 'direct',
      page: window.location.pathname,
    };

    // Log to Formspree (free tier allows 50 submissions/month)
    // You can replace this with your preferred logging service
    // Only log if endpoint is configured (not the default placeholder)
    if (LOG_ENDPOINT && !LOG_ENDPOINT.includes('YOUR_FORM_ID')) {
      // Use fetch with catch to prevent errors from blocking the app
      fetch(LOG_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'Chat Question Log',
          message: `Question: ${question}\n\nMetadata: ${JSON.stringify(logData, null, 2)}`
        }),
      }).catch(err => {
        // Silently fail - logging is optional
        logger.error('[Chat Logging Failed]:', err);
      });
    }

    // Also log to console in production for debugging
    logger.log('[Chat Question Logged]:', question);
  } catch (error) {
    // Silently fail - don't disrupt user experience if logging fails
    logger.error('[Chat Logging Error]:', error);
  }
}

export async function logChatEvent(eventType, eventData = {}) {
  try {
    if (import.meta.env.DEV && !import.meta.env.VITE_ENABLE_LOGGING) {
      logger.log('[Chat Event]:', eventType, eventData);
      return;
    }

    const logData = {
      timestamp: new Date().toISOString(),
      eventType: eventType,
      ...eventData,
      userAgent: navigator.userAgent,
      page: window.location.pathname,
    };

    // Only log if endpoint is configured (not the default placeholder)
    if (LOG_ENDPOINT && !LOG_ENDPOINT.includes('YOUR_FORM_ID')) {
      // Use fetch with catch to prevent errors from blocking the app
      fetch(LOG_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: `Chat Event: ${eventType}`,
          message: JSON.stringify(logData, null, 2)
        }),
      }).catch(err => {
        // Silently fail - logging is optional
        logger.error('[Chat Event Logging Failed]:', err);
      });
    }

    logger.log('[Chat Event Logged]:', eventType);
  } catch (error) {
    logger.error('[Chat Event Logging Error]:', error);
  }
}

