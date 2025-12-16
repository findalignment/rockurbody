# Vercel Cache Issue - FIXED

## The Problem

The `vercel.json` configuration was caching ALL JavaScript and CSS files for 1 year (31536000 seconds) with the `immutable` flag. This meant:

1. Browsers cached the old JS files
2. CDN cached the old JS files
3. Even after deploying new code, users got old cached files
4. No amount of browser cache clearing would help if CDN was serving cached version

## The Fix

Changed the cache rule from:
```json
{
  "source": "/:path*\\.(js|css)",
  "headers": [
    {
      "key": "Cache-Control",
      "value": "public, max-age=31536000, immutable"
    }
  ]
}
```

To:
```json
{
  "source": "/assets/:path*\\.(js|css)",
  "headers": [
    {
      "key": "Cache-Control",
      "value": "public, max-age=31536000, immutable"
    }
  ]
}
```

This means:
- Only files in `/assets/` folder are cached long-term
- Root-level JS/CSS files will use default caching (3600 seconds = 1 hour)
- New deployments will be picked up faster

## After This Fix

1. **Wait for Vercel to deploy** (2-3 minutes)
2. **Clear browser cache** completely
3. **Wait 1 hour** for CDN cache to expire (or use `?v=2` URL parameter)

## Immediate Solution

To bypass ALL cache right now, add a query parameter:
```
https://rockyourbody.com/?v=2
```

This forces the browser and CDN to fetch fresh files.

## For Next Deployment

After this fix deploys, future updates will be reflected within 1 hour instead of 1 year.

## Chatbot API Key

The chatbot issue is separate - you need to set `OPENAI_API_KEY` in Vercel environment variables:
1. Go to Vercel Dashboard
2. Project Settings → Environment Variables
3. Add `OPENAI_API_KEY` with your OpenAI key
4. Redeploy

Do NOT use `VITE_OPENAI_API_KEY` for the API endpoint - it needs `OPENAI_API_KEY` (without VITE_ prefix).

