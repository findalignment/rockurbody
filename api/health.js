/**
 * Simple health check endpoint for debugging
 */

export default async function handler(req, res) {
  return res.status(200).json({ 
    status: 'ok',
    timestamp: new Date().toISOString(),
    hasOpenAIKey: !!process.env.OPENAI_API_KEY,
    hasViteOpenAIKey: !!process.env.VITE_OPENAI_API_KEY,
    hasCalKey: !!process.env.CAL_API_KEY
  });
}

