# Chatbot Debugging Guide

## Quick Diagnostic Steps

### 1. Check Browser Console
1. Open your site
2. Press **F12** to open Developer Tools
3. Go to **Console** tab
4. Try sending a message in the chatbot
5. Look for errors starting with `[CHAT]` or `[API/CHAT]`

### 2. Check Network Tab
1. Open Developer Tools (F12)
2. Go to **Network** tab
3. Try sending a message
4. Look for a request to `/api/chat`
5. Click on it to see:
   - **Status code** (should be 200)
   - **Response** (should be JSON with a `message` field)
   - **Request payload** (should have `message` and `history`)

### 3. Test API Endpoint Directly
Visit: `https://yourdomain.com/api/health`

You should see:
```json
{
  "status": "ok",
  "hasOpenAIKey": true
}
```

If `hasOpenAIKey` is `false`, the API key isn't set correctly.

### 4. Test Chat API with curl
```bash
curl -X POST https://yourdomain.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello", "history": []}'
```

This will show you the exact error from the API.

### 5. Check Vercel Function Logs
1. Go to Vercel dashboard
2. Click **Functions** tab
3. Click **View logs** for `/api/chat`
4. Try sending a message
5. Look for error messages in the logs

## Common Issues and Fixes

### Issue: "Failed to fetch" or Network Error
**Possible causes:**
- API route not found (404)
- CORS issue
- Network connectivity

**Fix:**
- Check if `/api/chat` route exists in Vercel
- Verify CORS headers are set correctly
- Check browser console for CORS errors

### Issue: "500 Internal Server Error"
**Possible causes:**
- OpenAI API key issue
- OpenAI API error
- Code error in API handler

**Fix:**
- Check Vercel function logs for detailed error
- Verify API key is set correctly
- Check OpenAI API status

### Issue: "Invalid response format"
**Possible causes:**
- API returning wrong format
- Response parsing error

**Fix:**
- Check Network tab to see actual response
- Verify API returns `{ message: "..." }` format

### Issue: Chatbot shows fallback responses
**Possible causes:**
- API calls failing repeatedly
- Health check marking chatbot as unhealthy

**Fix:**
- Check browser console for errors
- Clear browser cache and try again
- Check if API endpoint is accessible

## What to Check

1. **API Key**: Verify `OPENAI_API_KEY` is set in Vercel (not `VITE_OPENAI_API_KEY`)
2. **API Route**: Verify `/api/chat` exists and is accessible
3. **Response Format**: API should return `{ message: "...", updatedHistory: [...] }`
4. **CORS**: Check browser console for CORS errors
5. **Network**: Check Network tab to see if request is being sent

## Still Not Working?

1. **Check Vercel Logs**: Most important - the logs will show the exact error
2. **Check Browser Console**: Look for JavaScript errors
3. **Check Network Tab**: See if the API request is being made and what response you get
4. **Test Health Endpoint**: Verify API routes are working at all

