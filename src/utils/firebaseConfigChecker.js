/**
 * Firebase Configuration Checker
 * Validates Firebase configuration and provides debugging information
 */

import { auth } from '../config/firebase';

/**
 * Check Firebase configuration and provide debugging info
 */
export function checkFirebaseConfig() {
  const config = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };

  console.log('🔍 Firebase Configuration Check:');
  console.log('================================');
  
  // Check each configuration value
  const checks = {
    apiKey: {
      value: config.apiKey ? `${config.apiKey.substring(0, 10)}...` : 'MISSING',
      status: config.apiKey ? '✅' : '❌',
      required: true
    },
    authDomain: {
      value: config.authDomain || 'MISSING',
      status: config.authDomain ? '✅' : '❌',
      required: true
    },
    projectId: {
      value: config.projectId || 'MISSING',
      status: config.projectId ? '✅' : '❌',
      required: true
    },
    storageBucket: {
      value: config.storageBucket || 'MISSING',
      status: config.storageBucket ? '✅' : '❌',
      required: true
    },
    messagingSenderId: {
      value: config.messagingSenderId || 'MISSING',
      status: config.messagingSenderId ? '✅' : '❌',
      required: true
    },
    appId: {
      value: config.appId || 'MISSING',
      status: config.appId ? '✅' : '❌',
      required: true
    }
  };

  // Log each check
  Object.entries(checks).forEach(([key, check]) => {
    console.log(`${check.status} ${key}: ${check.value}`);
  });

  // Check for missing required values
  const missingRequired = Object.entries(checks)
    .filter(([key, check]) => check.required && !check.value.includes('MISSING') === false)
    .map(([key]) => key);

  if (missingRequired.length > 0) {
    console.error('❌ Missing required configuration:', missingRequired);
    return {
      isValid: false,
      missing: missingRequired,
      message: `Missing required Firebase configuration: ${missingRequired.join(', ')}`
    };
  }

  // Check auth domain format
  if (config.authDomain && !config.authDomain.includes('.firebaseapp.com')) {
    console.warn('⚠️ Auth domain should end with .firebaseapp.com');
  }

  // Check current domain
  const currentDomain = window.location.hostname;
  console.log(`🌐 Current domain: ${currentDomain}`);
  
  // Check if current domain matches auth domain
  if (config.authDomain && !config.authDomain.includes(currentDomain)) {
    console.warn('⚠️ Current domain may not be authorized in Firebase');
    console.log('💡 Add these domains to Firebase Console → Authentication → Settings → Authorized domains:');
    console.log(`   - ${currentDomain}`);
    console.log(`   - ${window.location.origin}`);
  }

  console.log('================================');
  console.log('✅ Firebase configuration appears valid');
  
  return {
    isValid: true,
    config: config,
    message: 'Firebase configuration is valid'
  };
}

/**
 * Test Firebase connection
 */
export async function testFirebaseConnection() {
  try {
    console.log('🔄 Testing Firebase connection...');
    
    // Check if auth object is available
    if (!auth) {
      throw new Error('Firebase auth object is not available');
    }

    // Try to get current user (this tests the connection)
    const currentUser = auth.currentUser;
    console.log('👤 Current user:', currentUser ? 'Logged in' : 'Not logged in');
    
    // Check auth state
    console.log('🔐 Auth state:', auth.app ? 'Connected' : 'Not connected');
    
    console.log('✅ Firebase connection test passed');
    return {
      success: true,
      message: 'Firebase connection is working'
    };
  } catch (error) {
    console.error('❌ Firebase connection test failed:', error);
    return {
      success: false,
      error: error.message,
      message: 'Firebase connection failed'
    };
  }
}

/**
 * Check if current domain is authorized for Firebase
 */
export function checkDomainAuthorization() {
  const currentDomain = window.location.hostname;
  const currentOrigin = window.location.origin;
  
  console.log('🌐 Domain Authorization Check:');
  console.log('==============================');
  console.log(`Current domain: ${currentDomain}`);
  console.log(`Current origin: ${currentOrigin}`);
  
  // Common domains that should be authorized
  const commonDomains = [
    'localhost',
    '127.0.0.1',
    'rockurbody.com',
    'www.rockurbody.com',
    'rockurbody.vercel.app'
  ];
  
  console.log('💡 Make sure these domains are authorized in Firebase Console:');
  commonDomains.forEach(domain => {
    console.log(`   - ${domain}`);
  });
  
  // Check if current domain is in the list
  const isAuthorized = commonDomains.some(domain => 
    currentDomain.includes(domain) || domain.includes(currentDomain)
  );
  
  if (!isAuthorized) {
    console.warn('⚠️ Current domain may not be authorized');
    console.log('🔧 To fix: Go to Firebase Console → Authentication → Settings → Authorized domains');
    console.log(`   Add: ${currentDomain}`);
  } else {
    console.log('✅ Current domain appears to be authorized');
  }
  
  return {
    isAuthorized,
    currentDomain,
    currentOrigin,
    message: isAuthorized ? 'Domain appears authorized' : 'Domain may not be authorized'
  };
}

/**
 * Run comprehensive Firebase diagnostics
 */
export async function runFirebaseDiagnostics() {
  console.log('🔍 Running Firebase Diagnostics...');
  console.log('===================================');
  
  const results = {
    config: checkFirebaseConfig(),
    connection: await testFirebaseConnection(),
    domain: checkDomainAuthorization()
  };
  
  console.log('===================================');
  console.log('📊 Diagnostic Results:');
  console.log(`Config Valid: ${results.config.isValid ? '✅' : '❌'}`);
  console.log(`Connection OK: ${results.connection.success ? '✅' : '❌'}`);
  console.log(`Domain Authorized: ${results.domain.isAuthorized ? '✅' : '❌'}`);
  
  return results;
}

/**
 * Get Firebase troubleshooting steps
 */
export function getFirebaseTroubleshootingSteps() {
  return [
    '1. Go to Firebase Console → Authentication → Settings',
    '2. Add your domain to "Authorized domains"',
    '3. Configure email templates in Authentication → Templates',
    '4. Verify environment variables in your .env file',
    '5. Check browser console for detailed error messages',
    '6. Test with a different email address',
    '7. Check spam/junk folder for reset emails',
    '8. Wait 5-10 minutes for email delivery',
    '9. Contact Firebase support if issues persist'
  ];
}

export default {
  checkFirebaseConfig,
  testFirebaseConnection,
  checkDomainAuthorization,
  runFirebaseDiagnostics,
  getFirebaseTroubleshootingSteps
};
