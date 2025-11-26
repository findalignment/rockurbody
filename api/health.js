/**
 * Simple health check endpoint for debugging
 */

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  console.log('[API/HEALTH] Health check called');
  
  return res.status(200).json({ 
    status: 'ok',
    timestamp: new Date().toISOString(),
    hasOpenAIKey: !!process.env.OPENAI_API_KEY,
    hasViteOpenAIKey: !!process.env.VITE_OPENAI_API_KEY,
    hasCalKey: !!process.env.CAL_API_KEY,
    nodeEnv: process.env.NODE_ENV
  });
}

