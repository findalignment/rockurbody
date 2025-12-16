# Chatbot Setup Guide

## Quick Fix: Set OpenAI API Key in Vercel

The chatbot requires an OpenAI API key to be set in Vercel's environment variables.

### Steps to Fix:

1. **Get your OpenAI API Key:**
   - Go to https://platform.openai.com/api-keys
   - Create a new API key if you don't have one
   - Copy the key (starts with `sk-`)

2. **Set it in Vercel:**
   - Go to your Vercel project dashboard
   - Navigate to **Settings** → **Environment Variables**
   - Add a new variable:
     - **Name:** `OPENAI_API_KEY` (important: NO `VITE_` prefix)
     - **Value:** Your OpenAI API key
     - **Environments:** Check all (Production, Preview, Development)
   - Click **Save**

3. **Redeploy:**
   - After adding the variable, go to **Deployments**
   - Click the three dots on the latest deployment
   - Click **Redeploy** (or push a new commit)

4. **Test:**
   - Visit your site
   - Try the chatbot
   - Check browser console (F12) for any errors
   - Check Vercel function logs: **Functions** → **View logs**

## Verify It's Working

### Test the API endpoint directly:
Visit: `https://yourdomain.com/api/health`

You should see:
```json
{
  "status": "ok",
  "hasOpenAIKey": true,
  ...
}
```

If `hasOpenAIKey` is `false`, the API key is not set correctly.

### Test the chat endpoint:
You can test the chat API with curl:
```bash
curl -X POST https://yourdomain.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello", "history": []}'
```

## Common Issues

### Issue: "Server configuration error: Missing OPENAI_API_KEY"
**Solution:** The API key is not set in Vercel. Follow steps above.

### Issue: "Network error: Unable to connect"
**Solution:** 
- Check if the API endpoint is accessible
- Check Vercel function logs for errors
- Verify CORS headers are set correctly

### Issue: "Rate limit exceeded"
**Solution:** You've sent too many messages. Wait a minute and try again.

### Issue: Chatbot shows fallback responses
**Solution:** The chatbot is working but OpenAI API calls are failing. Check:
- API key is valid and has credits
- OpenAI service status
- Vercel function logs

## Debugging

### Check Vercel Function Logs:
1. Go to Vercel dashboard
2. Click **Functions** tab
3. Click **View logs** for `/api/chat`
4. Look for error messages

### Check Browser Console:
1. Open your site
2. Press F12 to open developer tools
3. Go to **Console** tab
4. Try sending a message
5. Look for error messages starting with `[CHAT]`

### Common Error Messages:

- `"Missing OPENAI_API_KEY"` → Set the environment variable
- `"Failed to fetch"` → Network/CORS issue
- `"Invalid response format"` → API returned unexpected data
- `"Rate limit exceeded"` → Too many requests

## Environment Variables Needed

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | ✅ Yes | Your OpenAI API key (starts with `sk-`) |
| `CAL_API_KEY` | ❌ No | Only needed for booking functionality |

**Important:** Vercel serverless functions do NOT expose `VITE_` prefixed variables. Use `OPENAI_API_KEY` (without `VITE_`).

## Still Not Working?

1. Check Vercel function logs for detailed error messages
2. Verify the API key is correct and has credits
3. Test the `/api/health` endpoint to verify environment variables
4. Check browser console for client-side errors
5. Try redeploying after setting environment variables

