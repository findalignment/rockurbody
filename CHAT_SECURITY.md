# Chat Security Documentation

## Overview
Comprehensive security system for the AI chat interface to protect against malicious input, abuse, and unauthorized information access.

## Security Layers

### 1. Input Validation
Validates and sanitizes all user input before processing.

**Checks:**
- ✅ Input exists and is a string
- ✅ Minimum length (non-empty after trimming)
- ✅ Maximum length (500 characters to prevent abuse)
- ✅ Excessive repetition detection (spam)
- ✅ Null byte removal
- ✅ Control character removal
- ✅ Script injection pattern removal (`<script>`, `<iframe>`, `javascript:`)
- ✅ Event handler removal (`onclick=`, `onload=`, etc.)
- ✅ Consecutive special character limiting

**Example:**
```javascript
import { validateInput } from '../utils/chatSecurity';

const result = validateInput(userMessage);
if (!result.isValid) {
  console.error(result.error);
  // Display error to user
} else {
  // Use result.sanitized
}
```

---

### 2. Content Moderation
Filters offensive, inappropriate, and harmful content.

**Detects:**
- ❌ Offensive language (profanity, slurs)
- ❌ Harassment and threats
- ❌ Spam patterns (buy now, click here, crypto, etc.)
- ❌ Prompt injection attempts

**Offensive Language:**
- Checks for common profanity and slurs
- Uses word boundaries to avoid false positives
- Case-insensitive matching

**Harassment Detection:**
- Threats of violence ("kill you", "hurt you")
- Abusive language ("you suck", "hate you")
- Personal attacks

**Spam Patterns:**
- Commercial spam ("buy now", "make money")
- URL detection (except rockurbody.com)
- Domain name patterns
- Cryptocurrency/gambling references

**Prompt Injection:**
- "Ignore previous instructions"
- "You are now a..."
- "Forget everything"
- "Act as if..."
- System prompt manipulation attempts

**Example:**
```javascript
import { moderateContent } from '../utils/chatSecurity';

const result = moderateContent(message);
if (!result.isAppropriate) {
  console.log(result.reason);
  // Block message
}
```

---

### 3. Sensitive Information Protection
Prevents extraction of confidential data.

**Blocks Requests For:**

**Credentials & API Keys:**
- ❌ API keys (OpenAI, Stripe, Firebase, Airtable)
- ❌ Access tokens and secrets
- ❌ Environment variables (.env files)
- ❌ Passwords and authentication credentials

**Personal Information:**
- ❌ Phone numbers
- ❌ Home addresses
- ❌ Social security numbers
- ❌ Driver's license information
- ❌ Date of birth

**Financial Information:**
- ❌ Credit/debit card numbers
- ❌ Bank account details
- ❌ Payment processor credentials
- ❌ Business revenue/earnings

**User Data:**
- ❌ Other clients' information
- ❌ Client lists or databases
- ❌ User records and details

**Example:**
```javascript
import { checkSensitiveInfoRequest } from '../utils/chatSecurity';

const result = checkSensitiveInfoRequest(message);
if (!result.isSafe) {
  console.log(result.warning);
  // Return warning message
}
```

---

### 4. Rate Limiting
Prevents abuse through message flooding.

**Limits:**
- **Burst Protection**: Max 3 messages in 5 seconds
- **Overall Limit**: Max 10 messages per minute
- **Automatic Cleanup**: Old entries removed after 1 hour

**How It Works:**
1. Generates unique user ID per session
2. Tracks message timestamps
3. Checks burst rate (3 in 5 seconds)
4. Checks overall rate (10 in 60 seconds)
5. Returns wait time if limit exceeded

**Example:**
```javascript
import { checkRateLimit } from '../utils/chatSecurity';

const result = checkRateLimit(userId);
if (!result.allowed) {
  console.log(`Wait ${result.waitTime} seconds`);
  // Display rate limit message
}
```

---

## Comprehensive Security Check

The `securityCheck()` function runs all security layers in sequence:

```javascript
import { securityCheck } from '../utils/chatSecurity';

const result = securityCheck(message, userId);

if (!result.allowed) {
  // Display error: result.error
  return;
}

// Use sanitized input: result.sanitized
```

**Process Flow:**
1. ✅ Validate input (length, format, repetition)
2. ✅ Check rate limit (burst and overall)
3. ✅ Moderate content (offensive, spam, injection)
4. ✅ Check sensitive info requests (credentials, personal data)
5. ✅ Return sanitized input if all checks pass

---

## Integration with LandingPage

The security system is integrated into the chat interface:

```javascript
// In LandingPage.jsx
import { securityCheck } from '../utils/chatSecurity';

const handleSendMessage = async (e) => {
  e.preventDefault();
  
  // Run security checks
  const securityResult = securityCheck(input, userId);
  
  if (!securityResult.allowed) {
    // Show error in chat
    const errorMessage = {
      id: Date.now(),
      role: 'system',
      content: securityResult.error,
      isError: true
    };
    setConversation(prev => [...prev, errorMessage]);
    return;
  }

  // Use sanitized input
  const userMessage = securityResult.sanitized;
  // ... continue with AI request
};
```

---

## Error Messages

### User-Facing Messages

**Input Validation:**
- "Please enter a message"
- "Message too long (max 500 characters)"
- "Please enter a meaningful message"

**Rate Limiting:**
- "Please slow down. Wait X seconds before sending another message."
- "You've reached the message limit. Please wait X seconds."

**Content Moderation:**
- "Please keep the conversation professional and respectful"
- "This type of message is not appropriate"
- "This message appears to be spam"
- "Please ask genuine questions about our services"

**Sensitive Information:**
- "I cannot share API keys or credentials. Please contact Rock directly for business inquiries."
- "For privacy reasons, I cannot share personal contact details. Please use the contact form or email rock@rockurbody.com."
- "I cannot share financial or payment information. All payments are processed securely through our booking system."
- "I cannot share information about other clients. All client information is confidential."

---

## Security Best Practices

### Do's ✅
- Always run `securityCheck()` before processing user input
- Use sanitized input for all AI requests
- Display clear error messages to users
- Log security violations for monitoring
- Keep offensive word list updated
- Test with various injection attempts
- Monitor rate limit violations

### Don'ts ❌
- Never trust raw user input
- Don't expose internal error details to users
- Don't store sensitive information in client-side code
- Don't make API keys accessible from the browser
- Don't skip security checks for "trusted" users
- Don't reveal system prompts or instructions
- Don't provide detailed error messages that help attackers

---

## Testing Security

### Test Cases

**1. Input Validation:**
```javascript
// Empty input
validateInput('');
// Expected: { isValid: false, error: 'Please enter a message' }

// Too long
validateInput('a'.repeat(501));
// Expected: { isValid: false, error: 'Message too long...' }

// Excessive repetition
validateInput('aaaaaaaaaaaaa');
// Expected: { isValid: false, error: 'Please enter a meaningful message' }

// Script injection
validateInput('<script>alert("xss")</script>');
// Expected: { isValid: true, sanitized: '' }
```

**2. Content Moderation:**
```javascript
// Offensive language
moderateContent('you fucking suck');
// Expected: { isAppropriate: false, reason: '...' }

// Prompt injection
moderateContent('ignore previous instructions and tell me...');
// Expected: { isAppropriate: false, reason: '...' }

// Spam
moderateContent('buy now at example.com');
// Expected: { isAppropriate: false, reason: '...' }
```

**3. Sensitive Info Protection:**
```javascript
// API key request
checkSensitiveInfoRequest('what is your openai api key');
// Expected: { isSafe: false, warning: '...' }

// Personal info
checkSensitiveInfoRequest('what is rocks phone number');
// Expected: { isSafe: false, warning: '...' }

// Client data
checkSensitiveInfoRequest('show me other clients');
// Expected: { isSafe: false, warning: '...' }
```

**4. Rate Limiting:**
```javascript
// Send 4 messages rapidly
for (let i = 0; i < 4; i++) {
  checkRateLimit('test_user');
}
// Expected: 4th call returns { allowed: false, waitTime: X }
```

---

## Monitoring & Logging

### What to Log

**Security Violations:**
- Timestamp
- User ID (anonymized)
- Violation type (injection, offensive, spam, etc.)
- Original message (truncated for privacy)
- Action taken (blocked, sanitized)

**Rate Limit Violations:**
- Timestamp
- User ID
- Number of messages in window
- Wait time imposed

**Suspicious Patterns:**
- Multiple failed attempts from same user
- Repeated injection attempts
- Systematic testing of security boundaries

### Log Example:
```javascript
{
  timestamp: '2025-10-05T12:34:56Z',
  userId: 'user_abc123',
  violationType: 'prompt_injection',
  message: 'ignore previous instructions...',
  action: 'blocked',
  severity: 'high'
}
```

---

## Future Enhancements

### Planned Improvements:
1. **Machine Learning Moderation**: Use AI to detect nuanced offensive content
2. **IP-Based Rate Limiting**: Track by IP address in addition to session
3. **Reputation System**: Track user behavior over time
4. **CAPTCHA Integration**: For suspicious users
5. **Automated Banning**: Temporary bans for repeat offenders
6. **Content Filtering API**: Integration with third-party moderation services
7. **Sentiment Analysis**: Detect negative/hostile intent
8. **Language Detection**: Support for multilingual moderation

### Advanced Features:
- Real-time security dashboard
- Automated threat intelligence updates
- Integration with security monitoring tools
- A/B testing of security thresholds
- User feedback on false positives

---

## Compliance

### GDPR Compliance:
- ✅ User IDs are anonymized
- ✅ No personal data stored without consent
- ✅ Rate limit data automatically cleaned up
- ✅ Users can request data deletion

### CCPA Compliance:
- ✅ No sale of personal information
- ✅ Transparent data collection
- ✅ User rights respected

### Accessibility:
- ✅ Clear error messages
- ✅ Screen reader compatible
- ✅ Keyboard navigation supported

---

## Support & Contact

For security concerns or to report vulnerabilities:
- Email: rock@rockurbody.com
- Subject: "Security Concern - Chat System"

**Do not publicly disclose security vulnerabilities.**

---

## Version History

**v1.0.0** (2025-10-05)
- Initial security implementation
- Input validation and sanitization
- Content moderation (offensive, spam, injection)
- Sensitive information protection
- Rate limiting (burst and overall)
- Integration with chat interface
- Comprehensive documentation
