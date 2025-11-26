/**
 * Simple test endpoint to verify Vercel serverless functions are working
 */

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  console.log('[API/TEST] Test endpoint called');
  
  return res.status(200).json({
    status: 'ok',
    message: 'API endpoint is working',
    timestamp: new Date().toISOString(),
    method: req.method,
    hasBody: !!req.body,
    env: {
      hasOpenAIKey: !!(process.env.OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY),
      nodeEnv: process.env.NODE_ENV
    }
  });
}

