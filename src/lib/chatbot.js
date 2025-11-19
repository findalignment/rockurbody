/**
 * Main chatbot conversation handler with Cal.com booking
 * Uses OpenAI SDK for function calling
 */

import OpenAI from 'openai';
import { bookingFunctions } from './openai-functions.js';
import { checkAvailability, bookAppointment } from '../../api/booking.js';

// Use process.env for server-side (Vercel), fallback to import.meta.env for client-side
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY || import.meta.env?.VITE_OPENAI_API_KEY
});

/**
 * Main chatbot conversation handler with Cal.com booking
 * @param {string} userMessage - User's message
 * @param {Array} conversationHistory - Previous conversation messages (format: [{role: 'user'|'assistant', content: string}])
 * @param {string} customSystemPrompt - Optional custom system prompt to override default
 * @returns {Promise<object>} - Response object with message and updated history
 */
export async function runConversation(userMessage, conversationHistory = [], customSystemPrompt = null) {
  // Default system prompt focused on booking
  const defaultSystemPrompt = `You are a helpful scheduling assistant for a fitness trainer specializing in movement and anatomy. 

Your role:
- Help clients book fitness training sessions
- Check availability in the calendar
- Collect necessary information (name, email, preferred time)
- Be friendly and professional
- Always confirm booking details before finalizing

Available session types:
- Consultation (30 min)
- Movement Assessment (60 min) 
- Training Session (90 min)

When booking:
1. First check availability
2. Confirm client details (name, email)
3. Confirm the exact time slot
4. Then book the appointment

Current timezone: America/Los_Angeles (PST/PDT)`;

  // Build messages array with history
  const messages = [
    {
      role: "system",
      content: customSystemPrompt || defaultSystemPrompt
    },
    ...conversationHistory,
    {
      role: "user",
      content: userMessage
    }
  ];

  try {
    // Initial call to OpenAI with function definitions
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Using gpt-4o-mini for cost efficiency, can change to "gpt-4o" if needed
      messages: messages,
      functions: bookingFunctions,
      function_call: "auto"
    });

    const responseMessage = response.choices[0].message;

    // Check if OpenAI wants to call a function
    if (responseMessage.function_call) {
      const functionName = responseMessage.function_call.name;
      let functionArgs;
      
      try {
        functionArgs = JSON.parse(responseMessage.function_call.arguments);
      } catch (parseError) {
        console.error('Failed to parse function arguments:', parseError);
        return {
          message: "I'm having trouble processing that request. Could you try rephrasing?",
          functionCalled: null,
          updatedHistory: messages,
          error: parseError.message
        };
      }

      console.log(`Calling function: ${functionName}`, functionArgs);

      let functionResponse;

      // Execute the requested function
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

      // Add function call and response to messages
      messages.push(responseMessage);
      messages.push({
        role: "function",
        name: functionName,
        content: JSON.stringify(functionResponse)
      });

      // Get final response from OpenAI with function results
      const secondResponse = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: messages,
        max_tokens: 250,
        temperature: 0.7
      });

      return {
        message: secondResponse.choices[0].message.content,
        functionCalled: functionName,
        updatedHistory: messages
      };
    }

    // No function call needed, return direct response
    return {
      message: responseMessage.content,
      functionCalled: null,
      updatedHistory: messages
    };

  } catch (error) {
    console.error('Error in conversation:', error);
    return {
      message: "I'm sorry, I encountered an error. Please try again.",
      error: error.message,
      updatedHistory: messages
    };
  }
}

