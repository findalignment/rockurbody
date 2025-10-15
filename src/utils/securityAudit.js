/**
 * Security Audit Utility
 * Comprehensive security checks for the application
 */

import { validateEnvironmentVariables } from './apiSecurity.js';
import { securityCheck } from './chatSecurity.js';

/**
 * Security audit results
 */
export class SecurityAudit {
  constructor() {
    this.results = {
      critical: [],
      high: [],
      medium: [],
      low: [],
      info: []
    };
    this.score = 100;
  }

  addIssue(severity, category, issue, recommendation) {
    this.results[severity].push({
      category,
      issue,
      recommendation,
      timestamp: new Date().toISOString()
    });
    
    // Deduct points based on severity
    const deductions = {
      critical: 25,
      high: 15,
      medium: 10,
      low: 5,
      info: 0
    };
    
    this.score = Math.max(0, this.score - deductions[severity]);
  }

  getReport() {
    return {
      score: this.score,
      grade: this.getGrade(),
      summary: this.getSummary(),
      results: this.results,
      recommendations: this.getRecommendations()
    };
  }

  getGrade() {
    if (this.score >= 90) return 'A';
    if (this.score >= 80) return 'B';
    if (this.score >= 70) return 'C';
    if (this.score >= 60) return 'D';
    return 'F';
  }

  getSummary() {
    const total = Object.values(this.results).flat().length;
    return {
      total,
      critical: this.results.critical.length,
      high: this.results.high.length,
      medium: this.results.medium.length,
      low: this.results.low.length,
      info: this.results.info.length
    };
  }

  getRecommendations() {
    const recommendations = [];
    
    if (this.results.critical.length > 0) {
      recommendations.push('🚨 CRITICAL: Address all critical security issues immediately');
    }
    
    if (this.results.high.length > 0) {
      recommendations.push('⚠️ HIGH: Fix high-priority security issues within 24 hours');
    }
    
    if (this.results.medium.length > 0) {
      recommendations.push('🔶 MEDIUM: Address medium-priority issues within a week');
    }
    
    if (this.results.low.length > 0) {
      recommendations.push('🔵 LOW: Consider addressing low-priority issues in next update');
    }
    
    return recommendations;
  }
}

/**
 * Run comprehensive security audit
 * @returns {Promise<object>} - Audit results
 */
export async function runSecurityAudit() {
  const audit = new SecurityAudit();
  
  // 1. Environment Variables Check
  await checkEnvironmentVariables(audit);
  
  // 2. API Security Check
  await checkApiSecurity(audit);
  
  // 3. Input Validation Check
  await checkInputValidation(audit);
  
  // 4. Authentication Security Check
  await checkAuthenticationSecurity(audit);
  
  // 5. Data Protection Check
  await checkDataProtection(audit);
  
  // 6. Client-Side Security Check
  await checkClientSideSecurity(audit);
  
  // 7. Dependencies Security Check
  await checkDependenciesSecurity(audit);
  
  return audit.getReport();
}

/**
 * Check environment variables security
 * @param {SecurityAudit} audit - Audit instance
 */
async function checkEnvironmentVariables(audit) {
  const envValidation = validateEnvironmentVariables();
  
  if (!envValidation.isValid) {
    audit.addIssue(
      'critical',
      'Environment Variables',
      `Missing required environment variables: ${envValidation.missingVars.join(', ')}`,
      'Set all required environment variables in your deployment environment'
    );
  }
  
  // Check for exposed secrets in client-side code
  const exposedSecrets = checkForExposedSecrets();
  if (exposedSecrets.length > 0) {
    audit.addIssue(
      'critical',
      'Environment Variables',
      `Potential secret exposure: ${exposedSecrets.join(', ')}`,
      'Ensure all secrets are properly secured and not exposed in client-side code'
    );
  }
  
  // Check for development keys in production
  if (import.meta.env.PROD) {
    const devKeys = checkForDevelopmentKeys();
    if (devKeys.length > 0) {
      audit.addIssue(
        'high',
        'Environment Variables',
        `Development keys in production: ${devKeys.join(', ')}`,
        'Replace development keys with production keys'
      );
    }
  }
}

/**
 * Check API security
 * @param {SecurityAudit} audit - Audit instance
 */
async function checkApiSecurity(audit) {
  // Check OpenAI API security
  const openaiKey = import.meta.env.VITE_OPENAI_API_KEY;
  if (openaiKey) {
    if (openaiKey.startsWith('sk-test')) {
      audit.addIssue(
        'high',
        'API Security',
        'Using OpenAI test key in production',
        'Use production OpenAI API key'
      );
    }
    
    if (openaiKey.length < 20) {
      audit.addIssue(
        'critical',
        'API Security',
        'OpenAI API key appears to be invalid',
        'Verify OpenAI API key is correct and has proper permissions'
      );
    }
  }
  
  // Check Firebase configuration
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID
  };
  
  if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId) {
    audit.addIssue(
      'critical',
      'API Security',
      'Incomplete Firebase configuration',
      'Ensure all Firebase environment variables are set'
    );
  }
  
  // Check for insecure API endpoints
  const insecureEndpoints = checkInsecureEndpoints();
  if (insecureEndpoints.length > 0) {
    audit.addIssue(
      'medium',
      'API Security',
      `Insecure API endpoints: ${insecureEndpoints.join(', ')}`,
      'Use HTTPS for all API communications'
    );
  }
}

/**
 * Check input validation security
 * @param {SecurityAudit} audit - Audit instance
 */
async function checkInputValidation(audit) {
  // Test chat security
  const testInputs = [
    '<script>alert("xss")</script>',
    'javascript:alert("xss")',
    'SELECT * FROM users',
    '../../../etc/passwd',
    '${7*7}',
    '{{7*7}}'
  ];
  
  for (const testInput of testInputs) {
    const result = securityCheck(testInput, 'test-user');
    if (result.allowed) {
      audit.addIssue(
        'high',
        'Input Validation',
        `Input validation failed for: ${testInput}`,
        'Enhance input validation to block malicious inputs'
      );
    }
  }
  
  // Check for missing CSRF protection
  audit.addIssue(
    'medium',
    'Input Validation',
    'CSRF protection not implemented',
    'Implement CSRF tokens for state-changing operations'
  );
}

/**
 * Check authentication security
 * @param {SecurityAudit} audit - Audit instance
 */
async function checkAuthenticationSecurity(audit) {
  // Check Firebase auth configuration
  const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
  if (authDomain && !authDomain.includes('firebaseapp.com')) {
    audit.addIssue(
      'high',
      'Authentication',
      'Non-standard Firebase auth domain',
      'Verify Firebase auth domain configuration'
    );
  }
  
  // Check for weak password policies
  audit.addIssue(
    'medium',
    'Authentication',
    'Password policy not enforced client-side',
      'Implement client-side password strength validation'
  );
  
  // Check for session security
  audit.addIssue(
    'medium',
    'Authentication',
    'Session management relies on Firebase only',
    'Consider additional session security measures'
  );
}

/**
 * Check data protection
 * @param {SecurityAudit} audit - Audit instance
 */
async function checkDataProtection(audit) {
  // Check for data encryption
  audit.addIssue(
    'medium',
    'Data Protection',
    'Client-side data not encrypted',
    'Consider encrypting sensitive data before storage'
  );
  
  // Check for PII handling
  audit.addIssue(
    'high',
    'Data Protection',
    'PII handling not explicitly documented',
    'Document and implement PII handling policies'
  );
  
  // Check for data retention
  audit.addIssue(
    'medium',
    'Data Protection',
    'Data retention policy not implemented',
    'Implement automatic data cleanup for old records'
  );
}

/**
 * Check client-side security
 * @param {SecurityAudit} audit - Audit instance
 */
async function checkClientSideSecurity(audit) {
  // Check for XSS protection
  if (typeof window !== 'undefined') {
    const hasCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (!hasCSP) {
      audit.addIssue(
        'high',
        'Client-Side Security',
        'Content Security Policy not implemented',
        'Implement CSP headers to prevent XSS attacks'
      );
    }
  }
  
  // Check for insecure dependencies
  const insecureDeps = checkInsecureDependencies();
  if (insecureDeps.length > 0) {
    audit.addIssue(
      'high',
      'Client-Side Security',
      `Insecure dependencies: ${insecureDeps.join(', ')}`,
      'Update dependencies to secure versions'
    );
  }
  
  // Check for console logging
  audit.addIssue(
    'low',
    'Client-Side Security',
    'Console logging may expose sensitive information',
    'Remove or secure console.log statements in production'
  );
}

/**
 * Check dependencies security
 * @param {SecurityAudit} audit - Audit instance
 */
async function checkDependenciesSecurity(audit) {
  // This would typically use a tool like npm audit
  // For now, we'll check for known vulnerable packages
  const vulnerablePackages = [
    // Add known vulnerable packages here
  ];
  
  if (vulnerablePackages.length > 0) {
    audit.addIssue(
      'high',
      'Dependencies',
      `Vulnerable packages detected: ${vulnerablePackages.join(', ')}`,
      'Update vulnerable packages to secure versions'
    );
  }
  
  // Check for outdated packages
  audit.addIssue(
    'medium',
    'Dependencies',
    'Some packages may be outdated',
    'Regularly update dependencies to latest secure versions'
  );
}

/**
 * Check for exposed secrets in client-side code
 * @returns {string[]} - List of exposed secrets
 */
function checkForExposedSecrets() {
  const exposedSecrets = [];
  
  // Check for hardcoded API keys
  const apiKeyPatterns = [
    /sk-[a-zA-Z0-9]{48}/g,
    /pk_[a-zA-Z0-9]{24}/g,
    /AIza[0-9A-Za-z\\-_]{35}/g
  ];
  
  // This would need to scan the actual code
  // For now, return empty array
  return exposedSecrets;
}

/**
 * Check for development keys in production
 * @returns {string[]} - List of development keys
 */
function checkForDevelopmentKeys() {
  const devKeys = [];
  
  if (import.meta.env.PROD) {
    const openaiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (openaiKey && openaiKey.includes('test')) {
      devKeys.push('OpenAI test key');
    }
  }
  
  return devKeys;
}

/**
 * Check for insecure API endpoints
 * @returns {string[]} - List of insecure endpoints
 */
function checkInsecureEndpoints() {
  const insecureEndpoints = [];
  
  // Check for HTTP endpoints
  const endpoints = [
    import.meta.env.VITE_LOG_ENDPOINT,
    // Add other endpoints to check
  ];
  
  endpoints.forEach(endpoint => {
    if (endpoint && endpoint.startsWith('http://')) {
      insecureEndpoints.push(endpoint);
    }
  });
  
  return insecureEndpoints;
}

/**
 * Check for insecure dependencies
 * @returns {string[]} - List of insecure dependencies
 */
function checkInsecureDependencies() {
  // This would typically use npm audit or similar
  // For now, return empty array
  return [];
}

export default {
  SecurityAudit,
  runSecurityAudit
};
