import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '../config/firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign up function
  async function signup(email, password, displayName) {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName });
      return user;
    } catch (error) {
      throw error;
    }
  }

  // Sign in function
  async function login(email, password) {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error) {
      throw error;
    }
  }

  // Sign out function
  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  }

  // Update user profile (display name, photo URL)
  async function updateUserProfile(updates) {
    try {
      await updateProfile(currentUser, updates);
      // Refresh the current user to reflect changes
      setCurrentUser({ ...currentUser, ...updates });
    } catch (error) {
      throw error;
    }
  }

  // Update user email
  async function updateUserEmail(newEmail, currentPassword) {
    try {
      // Re-authenticate user before email change (Firebase security requirement)
      const credential = EmailAuthProvider.credential(
        currentUser.email,
        currentPassword
      );
      await reauthenticateWithCredential(currentUser, credential);
      
      // Update email
      await updateEmail(currentUser, newEmail);
    } catch (error) {
      throw error;
    }
  }

  // Update user password
  async function updateUserPassword(currentPassword, newPassword) {
    try {
      // Re-authenticate user before password change (Firebase security requirement)
      const credential = EmailAuthProvider.credential(
        currentUser.email,
        currentPassword
      );
      await reauthenticateWithCredential(currentUser, credential);
      
      // Update password
      await updatePassword(currentUser, newPassword);
    } catch (error) {
      throw error;
    }
  }

  // Send password reset email
  async function resetPassword(email) {
    try {
      // Configure action code settings for password reset
      const actionCodeSettings = {
        url: `${window.location.origin}/auth/login`,
        handleCodeInApp: false,
      };
      
      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      console.log('Password reset email sent successfully to:', email);
    } catch (error) {
      console.error('Password reset error:', error);
      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    updateUserProfile,
    updateUserEmail,
    updateUserPassword,
    resetPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
