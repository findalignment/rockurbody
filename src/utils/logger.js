/**
 * Production-Safe Logger
 * 
 * Logs messages only in development mode.
 * In production, logs are suppressed to avoid console clutter and potential security issues.
 */

const isDev = import.meta.env.DEV;
const isProd = import.meta.env.PROD;

class Logger {
  constructor() {
    this.enabled = isDev;
  }

  log(...args) {
    if (this.enabled) {
      console.log(...args);
    }
  }

  info(...args) {
    if (this.enabled) {
      console.info(...args);
    }
  }

  warn(...args) {
    if (this.enabled) {
      console.warn(...args);
    }
  }

  error(...args) {
    // Always log errors, even in production (but they'll be stripped by Vite)
    // In production, these should be sent to error tracking service (e.g., Sentry)
    console.error(...args);
    
    // TODO: Send to error tracking service in production
    if (isProd) {
      // Example: Send to Sentry, LogRocket, etc.
      // Sentry.captureException(args[0]);
    }
  }

  debug(...args) {
    if (this.enabled) {
      console.debug(...args);
    }
  }

  group(label) {
    if (this.enabled && console.group) {
      console.group(label);
    }
  }

  groupEnd() {
    if (this.enabled && console.groupEnd) {
      console.groupEnd();
    }
  }

  table(data) {
    if (this.enabled && console.table) {
      console.table(data);
    }
  }

  time(label) {
    if (this.enabled && console.time) {
      console.time(label);
    }
  }

  timeEnd(label) {
    if (this.enabled && console.timeEnd) {
      console.timeEnd(label);
    }
  }
}

// Export singleton instance
export const logger = new Logger();

// Also export as default
export default logger;

