/**
 * Simple test endpoint to verify Vercel serverless functions are working
 */

export default async function handler(req, res) {
  console.log('[API/TEST] Test endpoint called');
  
  return res.status(200).json({
    status: 'ok',
    message: 'API endpoint is working',
    timestamp: new Date().toISOString(),
    method: req.method,
    hasBody: !!req.body
  });
}

