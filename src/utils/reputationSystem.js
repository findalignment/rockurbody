/**
 * Reputation System
 * Tracks user behavior over time and implements automated moderation
 */

import logger from './logger';

const STORAGE_KEY = 'user_reputation';
const BAN_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Get user reputation from storage
 * @param {string} userId - User identifier
 * @returns {object} - Reputation data
 */
export function getUserReputation(userId) {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const allReputations = stored ? JSON.parse(stored) : {};
    
    return allReputations[userId] || {
      score: 100, // Start with 100 points
      violations: [],
      bannedUntil: null,
      totalMessages: 0,
      flaggedMessages: 0,
      createdAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Error reading reputation:', error);
    return {
      score: 100,
      violations: [],
      bannedUntil: null,
      totalMessages: 0,
      flaggedMessages: 0,
      createdAt: new Date().toISOString(),
    };
  }
}

/**
 * Update user reputation
 * @param {string} userId - User identifier
 * @param {object} update - Reputation updates
 */
export function updateReputation(userId, update) {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const allReputations = stored ? JSON.parse(stored) : {};
    const current = getUserReputation(userId);
    
    allReputations[userId] = {
      ...current,
      ...update,
      lastUpdated: new Date().toISOString(),
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allReputations));
  } catch (error) {
    console.error('Error updating reputation:', error);
  }
}

/**
 * Record a message and update reputation
 * @param {string} userId - User identifier
 * @param {object} sentimentAnalysis - Sentiment analysis results
 * @returns {object} - Updated reputation and moderation decision
 */
export function recordMessage(userId, sentimentAnalysis) {
  const reputation = getUserReputation(userId);
  
  // Check if user is currently banned
  if (reputation.bannedUntil) {
    const now = new Date().getTime();
    const banExpiry = new Date(reputation.bannedUntil).getTime();
    
    if (now < banExpiry) {
      const hoursRemaining = Math.ceil((banExpiry - now) / (60 * 60 * 1000));
      return {
        allowed: false,
        banned: true,
        reason: `You have been temporarily banned for ${hoursRemaining} hours due to repeated violations.`,
        reputation,
      };
    } else {
      // Ban expired, clear it
      reputation.bannedUntil = null;
    }
  }
  
  // Update message counts
  reputation.totalMessages += 1;
  
  // Calculate score adjustment
  let scoreAdjustment = 0;
  let violation = null;
  
  if (sentimentAnalysis.isHostile) {
    scoreAdjustment = -10;
    reputation.flaggedMessages += 1;
    violation = {
      type: 'hostile',
      timestamp: new Date().toISOString(),
      severity: 'high',
      flags: sentimentAnalysis.flags,
    };
  } else if (sentimentAnalysis.isSpam) {
    scoreAdjustment = -15;
    reputation.flaggedMessages += 1;
    violation = {
      type: 'spam',
      timestamp: new Date().toISOString(),
      severity: 'high',
    };
  } else if (sentimentAnalysis.sentiment < -0.3) {
    scoreAdjustment = -3;
    violation = {
      type: 'negative',
      timestamp: new Date().toISOString(),
      severity: 'low',
    };
  } else if (sentimentAnalysis.sentiment > 0.3) {
    scoreAdjustment = +1; // Reward positive interactions
  }
  
  // Update score
  reputation.score = Math.max(0, Math.min(100, reputation.score + scoreAdjustment));
  
  // Record violation if any
  if (violation) {
    reputation.violations.push(violation);
    
    // Keep only last 10 violations
    if (reputation.violations.length > 10) {
      reputation.violations = reputation.violations.slice(-10);
    }
  }
  
  // Check for automatic ban conditions
  const recentViolations = reputation.violations.filter(v => {
    const age = Date.now() - new Date(v.timestamp).getTime();
    return age < 60 * 60 * 1000; // Last hour
  });
  
  let shouldBan = false;
  let banReason = '';
  
  if (reputation.score < 50) {
    shouldBan = true;
    banReason = 'Reputation score too low';
  } else if (recentViolations.filter(v => v.severity === 'high').length >= 3) {
    shouldBan = true;
    banReason = 'Multiple serious violations in short period';
  } else if (reputation.flaggedMessages > reputation.totalMessages * 0.5 && reputation.totalMessages > 5) {
    shouldBan = true;
    banReason = 'More than 50% of messages flagged';
  }
  
  if (shouldBan) {
    reputation.bannedUntil = new Date(Date.now() + BAN_DURATION).toISOString();
  }
  
  // Save updated reputation
  updateReputation(userId, reputation);
  
  return {
    allowed: !shouldBan && sentimentAnalysis.allowed,
    banned: shouldBan,
    reason: shouldBan ? banReason : sentimentAnalysis.warning,
    reputation,
    scoreAdjustment,
  };
}

/**
 * Check if user is in good standing
 * @param {string} userId - User identifier
 * @returns {boolean}
 */
export function isUserInGoodStanding(userId) {
  const reputation = getUserReputation(userId);
  
  if (reputation.bannedUntil) {
    const now = new Date().getTime();
    const banExpiry = new Date(reputation.bannedUntil).getTime();
    if (now < banExpiry) return false;
  }
  
  return reputation.score >= 30;
}

/**
 * Get user's trust level
 * @param {string} userId - User identifier
 * @returns {string} - 'trusted', 'normal', 'suspicious', 'banned'
 */
export function getUserTrustLevel(userId) {
  const reputation = getUserReputation(userId);
  
  if (reputation.bannedUntil && new Date(reputation.bannedUntil) > new Date()) {
    return 'banned';
  }
  
  if (reputation.score >= 80) return 'trusted';
  if (reputation.score >= 50) return 'normal';
  return 'suspicious';
}

