/**
 * Vercel Serverless Function for Chatbot API
 * 
 * This endpoint handles chatbot conversations with Cal.com booking integration
 * Uses the OpenAI SDK with function calling via runConversation
 * 
 * Environment variables required:
 * - OPENAI_API_KEY: Your OpenAI API key (set in Vercel, not VITE_OPENAI_API_KEY)
 */

import { runConversation } from '../src/lib/chatbot.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const result = await runConversation(message, history);

    return res.status(200).json(result);

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

