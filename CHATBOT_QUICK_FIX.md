# Chatbot Quick Fix Guide

## The Problem
The chatbot isn't working because the OpenAI API key is not set in Vercel.

## The Solution (2 minutes)

### Step 1: Get Your OpenAI API Key
1. Go to https://platform.openai.com/api-keys
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key (starts with `sk-`)

### Step 2: Add to Vercel
1. Go to https://vercel.com/dashboard
2. Select your project (rockurbody)
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Enter:
   - **Key:** `OPENAI_API_KEY` (exactly like this, NO `VITE_` prefix)
   - **Value:** Paste your OpenAI API key
   - **Environments:** Check all three boxes (Production, Preview, Development)
6. Click **Save**

### Step 3: Redeploy
1. Go to **Deployments** tab
2. Click the three dots (⋯) on the latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete (about 1-2 minutes)

### Step 4: Test
1. Visit your site
2. Try the chatbot
3. If it still doesn't work, check:
   - Browser console (F12) for errors
   - Visit: `https://yourdomain.com/api/health` - should show `"hasOpenAIKey": true`

## Why This Happens
Vercel serverless functions (like `/api/chat`) run on the server and need environment variables set in Vercel. They don't have access to variables from your local `.env.local` file.

## Still Not Working?

### Check 1: Verify API Key is Set
Visit: `https://yourdomain.com/api/health`

You should see:
```json
{
  "status": "ok",
  "hasOpenAIKey": true
}
```

If `hasOpenAIKey` is `false`, the key isn't set correctly.

### Check 2: Browser Console
1. Open your site
2. Press F12
3. Go to Console tab
4. Try sending a message in the chatbot
5. Look for errors starting with `[CHAT]`

### Check 3: Vercel Function Logs
1. Go to Vercel dashboard
2. Click **Functions** tab
3. Click **View logs** for `/api/chat`
4. Look for error messages

### Common Errors:

**"Missing OPENAI_API_KEY"**
→ The environment variable isn't set in Vercel

**"Failed to fetch"**
→ Network/CORS issue - check browser console

**"Rate limit exceeded"**
→ Too many requests - wait a minute

**"Invalid API key"**
→ The key is wrong or expired - get a new one from OpenAI

## Need Help?
- Check Vercel logs: Dashboard → Functions → View logs
- Check browser console: F12 → Console tab
- Test health endpoint: `https://yourdomain.com/api/health`

