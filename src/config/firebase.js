import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import logger from '../utils/logger';

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ''
};

// Debug: Log config to console
logger.log('Firebase config loaded:', {
  apiKey: firebaseConfig.apiKey ? `${firebaseConfig.apiKey.substring(0, 10)}...` : 'Missing',
  authDomain: firebaseConfig.authDomain || 'Missing',
  projectId: firebaseConfig.projectId || 'Missing'
});

// Check if all required config is present
const hasValidConfig = firebaseConfig.apiKey && 
                       firebaseConfig.authDomain && 
                       firebaseConfig.projectId;

if (!hasValidConfig) {
  logger.warn('Firebase config incomplete - authentication will be disabled');
}

// Initialize Firebase
let app;
let auth;
let db;

if (hasValidConfig) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    logger.log('Firebase initialized successfully');
  } catch (error) {
    logger.error('Firebase initialization error:', error);
    // Don't throw - allow app to load without Firebase
    logger.warn('App will continue without Firebase authentication');
  }
} else {
  logger.warn('Skipping Firebase initialization - config missing');
}

export { auth, db };
export default app;
