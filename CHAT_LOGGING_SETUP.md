# Chat Logging Setup Guide

This guide explains how to set up chat logging for your Rock Your Body chatbot.

## Overview

The chatbot now logs all user questions to help you:
- Improve chatbot responses
- Identify common questions for FAQ or website content
- Understand what information visitors are seeking
- Enhance services based on actual visitor needs

## Privacy & Compliance

✅ **Privacy Policy Updated**: The privacy policy has been updated to disclose chat logging practices
✅ **Anonymous Logging**: By default, logs are anonymous (session ID only, no personal identification)
✅ **Transparent**: Users are informed about data collection in the privacy policy
✅ **Secure**: Logs are transmitted securely and stored with trusted providers

## Setup Options

### Option 1: Formspree (Recommended - Free Tier)

Formspree is a simple form backend service with a generous free tier (50 submissions/month).

1. **Sign up for Formspree**: https://formspree.io/
2. **Create a new form** called "Chat Logs"
3. **Copy your form endpoint**: It will look like `https://formspree.io/f/YOUR_FORM_ID`
4. **Add to your `.env` file**:
   ```
   VITE_LOG_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
5. **Deploy**: Redeploy your site with the new environment variable

### Option 2: Google Sheets (via Google Apps Script)

Free and unlimited logging to a Google Sheet.

1. **Create a Google Sheet** for chat logs
2. **Add headers**: `Timestamp`, `Question`, `SessionID`, `DetectedIntent`, `QuestionNumber`, `UserAgent`, `Page`
3. **Create a Google Apps Script**:
   - Extensions → Apps Script
   - Paste this code:
   ```javascript
   function doPost(e) {
     try {
       const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       const data = JSON.parse(e.postData.contents);
       const logData = JSON.parse(data.message.replace('Question: ' + data.question + '\n\nMetadata: ', ''));
       
       sheet.appendRow([
         logData.timestamp,
         logData.question,
         logData.sessionId,
         logData.detectedIntent,
         logData.questionNumber,
         logData.userAgent,
         logData.page
       ]);
       
       return ContentService.createTextOutput(JSON.stringify({success: true}))
         .setMimeType(ContentService.MimeType.JSON);
     } catch(error) {
       return ContentService.createTextOutput(JSON.stringify({success: false, error: error.message}))
         .setMimeType(ContentService.MimeType.JSON);
     }
   }
   ```
4. **Deploy as Web App**:
   - Deploy → New deployment
   - Execute as: Me
   - Who has access: Anyone
   - Copy the web app URL
5. **Add to your `.env` file**:
   ```
   VITE_LOG_ENDPOINT=YOUR_GOOGLE_APPS_SCRIPT_URL
   ```

### Option 3: Airtable

Airtable offers a nice interface for viewing and analyzing logs.

1. **Create an Airtable base** called "Chat Logs"
2. **Add fields**: `Timestamp`, `Question`, `SessionID`, `DetectedIntent`, `QuestionNumber`, `UserAgent`, `Page`
3. **Get your API key**: Account → API → Generate API key
4. **Create a webhook or use their API** to receive logs
5. **Add to your `.env` file**:
   ```
   VITE_LOG_ENDPOINT=YOUR_AIRTABLE_WEBHOOK_URL
   ```

### Option 4: Custom Backend

If you have your own backend, update `src/utils/chatLogger.js` to use your API endpoint.

## Environment Variables

Add these to your `.env` file (and Vercel environment variables):

```bash
# Required: Your logging endpoint
VITE_LOG_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Optional: Enable logging in development (default: false)
VITE_ENABLE_LOGGING=true
```

## Vercel Deployment

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add `VITE_LOG_ENDPOINT` with your endpoint URL
5. Redeploy your site

## Testing

1. **In Development**: Set `VITE_ENABLE_LOGGING=true` in your `.env` to test logging locally
2. **Check Console**: You should see `[Chat Question Logged]: <question>` messages
3. **Verify Endpoint**: Check your Formspree/Google Sheet/Airtable to confirm logs are arriving

## What Gets Logged

For each chat question, we log:
- **timestamp**: When the question was asked (ISO format)
- **question**: The actual question text
- **sessionId**: Anonymous session identifier
- **userId**: Anonymous user identifier (generated per session)
- **detectedIntent**: What page/topic was detected (e.g., "/pricing", "/services")
- **questionNumber**: Which question in the session (1-20)
- **userAgent**: Browser and device info
- **referrer**: How they arrived at your site
- **page**: What page they were on when asking

## Data Analysis Tips

### Common Questions
Look for frequently asked questions to:
- Create FAQ entries
- Add missing content to your website
- Update chatbot responses

### Popular Topics
Track which pages/topics get the most questions:
- Pricing questions → Consider making pricing more visible
- "What is SI?" → Add more educational content
- Booking questions → Simplify booking flow

### User Journey
Analyze referrer and page data to understand:
- Where visitors are coming from
- Which pages prompt the most questions
- Drop-off points in the booking process

### Question Quality
Monitor detected intent accuracy:
- Are questions being routed to the right pages?
- Update `detectIntent()` function in `openai.js` as needed

## Privacy Compliance

✅ **Disclosed in Privacy Policy**: Chat logging is fully documented
✅ **Anonymous by default**: No personal identification unless user volunteers it
✅ **Secure transmission**: HTTPS only
✅ **Purpose-limited**: Used only for chatbot improvement and content creation
✅ **Retention**: Delete old logs periodically (recommend 90-180 days)

## Recommended Workflow

1. **Weekly**: Review new questions, identify patterns
2. **Monthly**: Update FAQ and website content based on common questions
3. **Quarterly**: Update chatbot knowledge base and refine intent detection
4. **As needed**: Add new dad jokes based on visitor engagement 😄

## Troubleshooting

**Logs not appearing?**
- Check console for error messages
- Verify `VITE_LOG_ENDPOINT` is set correctly
- Test endpoint with curl or Postman
- Check Formspree/Google Sheet permissions

**Too many logs?**
- This is a good problem! Upgrade Formspree or switch to Google Sheets
- Consider implementing sampling (log every Nth question)

**Want to disable logging temporarily?**
- Remove or comment out the `logChatQuestion()` call in `LandingPage.jsx`
- Or set `VITE_LOG_ENDPOINT` to an empty string

## Next Steps

1. Choose your logging option (Formspree recommended)
2. Set up the endpoint and get your URL
3. Add `VITE_LOG_ENDPOINT` to your environment variables
4. Deploy and test
5. Start analyzing questions to improve your site!

