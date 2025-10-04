// Simple Firebase test
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

console.log('Environment variables:', {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ? 'Set' : 'Missing',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ? 'Set' : 'Missing',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ? 'Set' : 'Missing'
});

try {
  const app = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully:', app);
} catch (error) {
  console.error('Firebase initialization failed:', error);
}
