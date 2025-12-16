/**
 * Vercel Serverless Function for Chatbot API
 * 
 * This endpoint handles chatbot conversations with Cal.com booking integration
 * Uses the OpenAI SDK with function calling
 * 
 * Environment variables required:
 * - OPENAI_API_KEY: Your OpenAI API key (set in Vercel)
 * - CAL_API_KEY: Your Cal.com API key
 */

import OpenAI from 'openai';
import { rateLimitMiddleware } from './rate-limit.js';

// Booking function definitions for OpenAI
// These are optional - chat will work without them if Cal.com integration fails
const bookingFunctions = [
  {
    name: "check_availability",
    description: "Check if time slots are available in the fitness trainer's calendar. Use this when a user asks about availability or wants to see open times.",
    parameters: {
      type: "object",
      properties: {
        start_time: {
          type: "string",
          description: "Start of the date range to check in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). Example: 2025-11-20T14:00:00Z"
        },
        end_time: {
          type: "string",
          description: "End of the date range to check in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). Should be same day or a few days after start. Example: 2025-11-20T18:00:00Z"
        }
      },
      required: ["start_time", "end_time"]
    }
  },
  {
    name: "book_appointment",
    description: "Book a fitness training session. Only use this after confirming the client's name, email, and desired time slot.",
    parameters: {
      type: "object",
      properties: {
        name: {
          type: "string",
          description: "Client's full name"
        },
        email: {
          type: "string",
          description: "Client's email address"
        },
        start_time: {
          type: "string",
          description: "Appointment start time in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)"
        }
      },
      required: ["name", "email", "start_time"]
    }
  }
];

// Check if booking module can be loaded (for graceful degradation)
let bookingModuleAvailable = null;
async function checkBookingModuleAvailability() {
  if (bookingModuleAvailable === null) {
    try {
      await import('./booking.js');
      bookingModuleAvailable = true;
    } catch (e) {
      console.warn('[API/CHAT] Booking module not available, chat will work without booking functions');
      bookingModuleAvailable = false;
    }
  }
  return bookingModuleAvailable;
}

// Initialize OpenAI client inside handler to ensure environment variables are loaded
// Note: Vercel serverless functions don't expose VITE_ prefixed vars at runtime
// Use OPENAI_API_KEY (without VITE_ prefix) in Vercel environment variables
let apiKey = null;
let openai = null;

// Main handler function
export default async function handler(req, res) {
  // Log immediately at the very start - this should appear in Vercel logs if function is called
  console.log('[API/CHAT] ===== FUNCTION INVOKED =====');
  console.log('[API/CHAT] Timestamp:', new Date().toISOString());
  console.log('[API/CHAT] Method:', req.method);
  console.log('[API/CHAT] URL:', req.url);
  console.log('[API/CHAT] Headers:', JSON.stringify(req.headers || {}));
  
  // Wrap everything in try-catch to catch any initialization errors
  try {
    
    // Initialize OpenAI client inside handler to ensure environment variables are loaded
    if (!apiKey || !openai) {
      apiKey = process.env.OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY;
      
      if (!apiKey) {
        console.error('[API/CHAT] No OpenAI API key found in environment variables');
        const allEnvKeys = Object.keys(process.env);
        console.error('[API/CHAT] Total env vars:', allEnvKeys.length);
        console.error('[API/CHAT] Available env vars with OPENAI:', allEnvKeys.filter(k => k.toUpperCase().includes('OPENAI')));
        return res.status(500).json({ 
          error: 'Server configuration error: Missing OPENAI_API_KEY',
          message: "I'm sorry, the chatbot service is not properly configured. The OpenAI API key is missing. Please set OPENAI_API_KEY (without VITE_ prefix) in Vercel environment variables.",
          hint: 'Vercel serverless functions do not expose VITE_ prefixed variables at runtime. Use OPENAI_API_KEY instead.'
        });
      }
      
      try {
        console.log('[API/CHAT] Initializing OpenAI client...');
        openai = new OpenAI({ apiKey });
        console.log('[API/CHAT] OpenAI client initialized successfully');
      } catch (openaiInitError) {
        console.error('[API/CHAT] Failed to initialize OpenAI client:', openaiInitError);
        console.error('[API/CHAT] OpenAI init error details:', {
          message: openaiInitError?.message,
          stack: openaiInitError?.stack,
          name: openaiInitError?.name
        });
        return res.status(500).json({ 
          error: 'Failed to initialize OpenAI client',
          message: "I'm sorry, the chatbot service encountered an initialization error. Please try again later."
        });
      }
    }

    console.log('[API/CHAT] Request received:', {
      method: req.method,
      url: req.url,
      hasBody: !!req.body,
      timestamp: new Date().toISOString(),
      hasOpenAI: !!openai,
      hasApiKey: !!apiKey
    });

    // Set CORS headers (must be set before any response)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Max-Age', '86400'); // 24 hours

    if (req.method === 'OPTIONS') {
      console.log('[API/CHAT] OPTIONS request, returning 200');
      return res.status(200).end();
    }

    if (req.method !== 'POST') {
      console.log('[API/CHAT] Invalid method:', req.method);
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // Rate limiting: 20 requests per minute per IP
    // Wrap in try-catch to ensure it never breaks the request
    try {
      const rateLimitResult = rateLimitMiddleware(req, res, {
        maxRequests: 20,
        windowMs: 60000, // 1 minute
        message: "You're sending messages too quickly. Please slow down and try again in a moment."
      });
      
      // If rate limit middleware returned a response, it means rate limit was exceeded
      // Check if headers were sent to determine if response was sent
      if (rateLimitResult && rateLimitResult.error) {
        // Rate limit exceeded, response already sent by middleware
        if (res.headersSent) {
          return;
        }
        // If middleware didn't send response, send it now
        return res.status(429).json(rateLimitResult);
      }
    } catch (rateLimitError) {
      // If rate limiting fails completely, log but continue (don't block requests)
      console.error('[API/CHAT] Rate limit check failed, continuing:', rateLimitError);
      // Continue processing the request
    }

    // Parse request body if it's a string (Vercel sometimes sends string bodies)
    let body = req.body;
    
    // Handle case where body might be undefined or null
    if (!body) {
      console.error('[API/CHAT] Request body is missing');
      return res.status(400).json({ 
        error: 'Request body is required',
        message: 'Please include a message in your request.'
      });
    }
    
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        console.error('[API/CHAT] Failed to parse request body:', e);
        return res.status(400).json({ 
          error: 'Invalid request body format',
          message: 'The request body must be valid JSON.'
        });
      }
    }

    // Ensure body is an object
    if (typeof body !== 'object' || body === null) {
      console.error('[API/CHAT] Invalid body type:', typeof body);
      return res.status(400).json({ 
        error: 'Invalid request body',
        message: 'The request body must be a JSON object.'
      });
    }

    const { message, history = [] } = body;

    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Check if booking is available for system message
    const bookingAvailable = await checkBookingModuleAvailability();
    
    // Build messages array with history
    const systemMessage = bookingAvailable 
      ? `You are a helpful assistant for Rock Your Body, a movement education and structural integration practice in Santa Cruz, California run by Rock Hudson.

BOOKING FUNCTIONALITY:
You have access to two functions that allow you to check availability and book appointments:
1. check_availability - Use this when users ask about available times or want to see open slots. You'll need start_time and end_time in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). Use Pacific Time (America/Los_Angeles).
2. book_appointment - Use this ONLY after you have confirmed the user's name, email, and desired time slot. Never book without explicit confirmation.

When users ask about booking or availability:
- First, ask clarifying questions if needed (what type of session, preferred dates/times)
- If they mention a date/time, convert it to ISO 8601 format in Pacific Time before calling check_availability
- Use check_availability to show them available slots
- Only use book_appointment after they've confirmed their details and chosen a time slot
- Always confirm the booking details before executing the function

Be helpful, direct, and conversational. Help people understand if this work is right for them.`
      : `You are a helpful assistant for Rock Your Body, a movement education and structural integration practice in Santa Cruz, California run by Rock Hudson.

BOOKING:
When users ask about booking or scheduling, direct them to visit https://rockurbody.com/book to schedule directly, or they can contact rock@rockurbody.com for assistance.

Be helpful, direct, and conversational. Help people understand if this work is right for them.`;

    const messages = [
      {
        role: "system",
        content: systemMessage
      },
      ...history,
      {
        role: "user",
        content: message
      }
    ];

    // Initial call to OpenAI with function definitions (only if booking is available)
    // Using functions format (more widely supported than tools)
    let response;
    try {
      const requestOptions = {
        model: "gpt-4o-mini",
        messages: messages,
        max_tokens: 250,
        temperature: 0.7
      };
      
      // Only include functions if booking module is available
      if (bookingAvailable) {
        requestOptions.functions = bookingFunctions;
        requestOptions.function_call = "auto";
      }
      
      response = await openai.chat.completions.create(requestOptions);
    } catch (openaiError) {
      console.error('OpenAI API call failed:', openaiError);
      console.error('Error details:', {
        message: openaiError.message,
        status: openaiError.status,
        code: openaiError.code,
        type: openaiError.type,
        stack: openaiError.stack
      });
      
      return res.status(500).json({ 
        error: openaiError.message || 'Failed to communicate with OpenAI',
        message: "I'm sorry, I'm having trouble connecting to the AI service. Please try again.",
        details: process.env.NODE_ENV === 'development' ? {
          message: openaiError.message,
          status: openaiError.status,
          code: openaiError.code
        } : undefined
      });
    }

    // Validate response structure
    if (!response || !response.choices || !response.choices[0] || !response.choices[0].message) {
      console.error('Invalid OpenAI response structure:', response);
      return res.status(500).json({ 
        error: 'Invalid response from OpenAI API',
        message: "I'm sorry, I received an unexpected response. Please try again."
      });
    }

    const responseMessage = response.choices[0].message;

    // Check if OpenAI wants to call a function
    if (responseMessage.function_call) {
      const functionName = responseMessage.function_call.name;
      let functionArgs;
      
      try {
        functionArgs = JSON.parse(responseMessage.function_call.arguments);
      } catch (parseError) {
        console.error('Failed to parse function arguments:', parseError);
        return res.status(400).json({ 
          error: 'Invalid function arguments',
          message: "I'm having trouble processing that request. Could you try rephrasing?"
        });
      }

      console.log(`Calling function: ${functionName}`, functionArgs);

      let functionResponse;

      // Execute the requested function with error handling
      try {
        // Dynamically import booking functions to avoid module load failures
        let bookingModule;
        try {
          bookingModule = await import('./booking.js');
        } catch (importError) {
          console.error('[API/CHAT] Failed to import booking module:', importError);
          // If booking module fails to load, provide fallback response
          functionResponse = {
            error: "Booking functionality is temporarily unavailable. Please visit https://rockurbody.com/book to schedule directly, or contact rock@rockurbody.com for assistance.",
            bookingLink: "https://rockurbody.com/book"
          };
        }

        if (bookingModule) {
          const { checkAvailability, bookAppointment } = bookingModule;

          if (functionName === "check_availability") {
            functionResponse = await checkAvailability(
              functionArgs.start_time,
              functionArgs.end_time
            );
          } else if (functionName === "book_appointment") {
            functionResponse = await bookAppointment(
              functionArgs.name,
              functionArgs.email,
              functionArgs.start_time
            );
          } else {
            functionResponse = {
              error: `Unknown function: ${functionName}`
            };
          }
        }
      } catch (functionError) {
        console.error(`[API/CHAT] Error executing function ${functionName}:`, functionError);
        console.error('[API/CHAT] Function error details:', {
          message: functionError.message,
          stack: functionError.stack,
          name: functionError.name
        });
        // Provide graceful fallback instead of breaking the chat
        functionResponse = {
          error: `I'm having trouble with the booking system right now. Please visit https://rockurbody.com/book to schedule directly, or contact rock@rockurbody.com for assistance.`,
          bookingLink: "https://rockurbody.com/book",
          success: false
        };
      }

      // Add function call and response to messages
      messages.push(responseMessage);
      messages.push({
        role: "function",
        name: functionName,
        content: JSON.stringify(functionResponse)
      });

      // Get final response from OpenAI with function results
      let secondResponse;
      try {
        secondResponse = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: messages,
          max_tokens: 250,
          temperature: 0.7
        });
      } catch (openaiError) {
        console.error('OpenAI second API call failed:', openaiError);
        return res.status(500).json({ 
          error: openaiError.message || 'Failed to communicate with OpenAI',
          message: "I'm sorry, I'm having trouble processing the response. Please try again."
        });
      }

      // Validate second response structure
      if (!secondResponse || !secondResponse.choices || !secondResponse.choices[0] || !secondResponse.choices[0].message) {
        console.error('Invalid OpenAI second response structure:', secondResponse);
        return res.status(500).json({ 
          error: 'Invalid response from OpenAI API',
          message: "I'm sorry, I received an unexpected response. Please try again."
        });
      }

      return res.status(200).json({
        message: secondResponse.choices[0].message.content,
        updatedHistory: messages,
        functionCalled: functionName
      });
    }

    // No function call needed, return direct response
    return res.status(200).json({
      message: responseMessage.content,
      updatedHistory: messages,
      functionCalled: null
    });

  } catch (error) {
    // Log everything we can about the error
    console.error('[API/CHAT] ===== ERROR CAUGHT =====');
    console.error('[API/CHAT] Error type:', typeof error);
    console.error('[API/CHAT] Error name:', error?.name);
    console.error('[API/CHAT] Error message:', error?.message);
    console.error('[API/CHAT] Error stack:', error?.stack);
    console.error('[API/CHAT] Full error object:', JSON.stringify(error, Object.getOwnPropertyNames(error)));
    
    // Ensure we always return a response
    try {
      return res.status(500).json({ 
        error: error?.message || 'An error occurred while processing your message',
        message: "I'm sorry, I encountered an error. Please try again.",
        details: process.env.NODE_ENV === 'development' ? {
          stack: error?.stack,
          name: error?.name,
          message: error?.message
        } : undefined
      });
    } catch (responseError) {
      // If we can't even send a response, log it
      console.error('[API/CHAT] Failed to send error response:', responseError);
      // Try to send a basic response
      if (!res.headersSent) {
        res.status(500).end('Internal server error');
      }
    }
  }
}

