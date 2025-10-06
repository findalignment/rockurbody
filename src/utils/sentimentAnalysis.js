/**
 * Sentiment Analysis Utility
 * Detects negative/hostile intent in user messages
 */

// Negative sentiment keywords and phrases
const negativeKeywords = {
  hostile: ['stupid', 'idiot', 'moron', 'dumb', 'useless', 'terrible', 'awful', 'garbage', 'trash', 'worst'],
  aggressive: ['hate', 'angry', 'furious', 'pissed', 'mad', 'annoyed', 'irritated'],
  demanding: ['now', 'immediately', 'asap', 'hurry', 'urgent', 'must'],
  profanity: ['damn', 'hell', 'crap', 'wtf', 'omg'],
  spam: ['click here', 'buy now', 'limited time', 'act now', 'free money', 'guaranteed'],
};

// Positive sentiment indicators
const positiveKeywords = ['thank', 'thanks', 'appreciate', 'helpful', 'great', 'good', 'excellent', 'amazing', 'love', 'please', 'could you'];

/**
 * Analyze sentiment of a message
 * @param {string} message - User message to analyze
 * @returns {object} - Sentiment analysis results
 */
export function analyzeSentiment(message) {
  const lowerMessage = message.toLowerCase();
  const words = lowerMessage.split(/\s+/);
  
  let negativeScore = 0;
  let positiveScore = 0;
  let flags = [];

  // Check for negative keywords
  Object.entries(negativeKeywords).forEach(([category, keywords]) => {
    keywords.forEach(keyword => {
      if (lowerMessage.includes(keyword)) {
        negativeScore += 1;
        flags.push({ category, keyword, severity: 'medium' });
      }
    });
  });

  // Check for positive keywords
  positiveKeywords.forEach(keyword => {
    if (lowerMessage.includes(keyword)) {
      positiveScore += 1;
    }
  });

  // Check for ALL CAPS (aggressive)
  const capsWords = words.filter(word => word.length > 3 && word === word.toUpperCase());
  if (capsWords.length > 2) {
    negativeScore += 2;
    flags.push({ category: 'aggressive', keyword: 'excessive caps', severity: 'medium' });
  }

  // Check for excessive punctuation (!!!, ???)
  const excessivePunctuation = message.match(/[!?]{3,}/g);
  if (excessivePunctuation) {
    negativeScore += 1;
    flags.push({ category: 'aggressive', keyword: 'excessive punctuation', severity: 'low' });
  }

  // Calculate sentiment score (-1 to 1)
  const totalScore = negativeScore + positiveScore;
  const sentiment = totalScore === 0 ? 0 : (positiveScore - negativeScore) / totalScore;

  // Determine if message should be flagged
  const isHostile = negativeScore > 2 || sentiment < -0.5;
  const isSpam = flags.some(f => f.category === 'spam');

  return {
    sentiment, // -1 (very negative) to 1 (very positive)
    negativeScore,
    positiveScore,
    isHostile,
    isSpam,
    flags,
    allowed: !isHostile && !isSpam,
    warning: isHostile 
      ? 'Your message appears hostile. Please communicate respectfully.'
      : isSpam
      ? 'Your message appears to be spam.'
      : null,
  };
}

/**
 * Get detailed sentiment report
 * @param {string} message - User message
 * @returns {object} - Detailed report
 */
export function getSentimentReport(message) {
  const analysis = analyzeSentiment(message);
  
  return {
    ...analysis,
    timestamp: new Date().toISOString(),
    messageLength: message.length,
    wordCount: message.split(/\s+/).length,
  };
}

