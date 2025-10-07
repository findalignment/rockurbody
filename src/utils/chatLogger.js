// Simple chat logging utility for analytics and improvement
// Logs questions to help refine chatbot and identify common questions for website

const LOG_ENDPOINT = import.meta.env.VITE_LOG_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID';

export async function logChatQuestion(question, metadata = {}) {
  try {
    // Don't log in development unless explicitly enabled
    if (import.meta.env.DEV && !import.meta.env.VITE_ENABLE_LOGGING) {
      console.log('[Chat Log]:', question, metadata);
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
    await fetch(LOG_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: 'Chat Question Log',
        message: `Question: ${question}\n\nMetadata: ${JSON.stringify(logData, null, 2)}`
      }),
    });

    // Also log to console in production for debugging
    console.log('[Chat Question Logged]:', question);
  } catch (error) {
    // Silently fail - don't disrupt user experience if logging fails
    console.error('[Chat Logging Error]:', error);
  }
}

export async function logChatEvent(eventType, eventData = {}) {
  try {
    if (import.meta.env.DEV && !import.meta.env.VITE_ENABLE_LOGGING) {
      console.log('[Chat Event]:', eventType, eventData);
      return;
    }

    const logData = {
      timestamp: new Date().toISOString(),
      eventType: eventType,
      ...eventData,
      userAgent: navigator.userAgent,
      page: window.location.pathname,
    };

    await fetch(LOG_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: `Chat Event: ${eventType}`,
        message: JSON.stringify(logData, null, 2)
      }),
    });

    console.log('[Chat Event Logged]:', eventType);
  } catch (error) {
    console.error('[Chat Event Logging Error]:', error);
  }
}

