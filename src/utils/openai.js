const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

// Define intents and their corresponding pages
const intentMap = {
  about: '/about',
  services: '/services',
  pricing: '/pricing',
  contact: '/contact',
  booking: '/contact',
};

export async function sendMessageToAI(userMessage) {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are a helpful assistant for Rock Your Body, a movement education and structural integration practice in Monterey, California.

ABOUT THE PRACTICE:
- Rock Hudson helps people move better through structural integration (fascial release) and movement education
- Focus on whole-system approach, not just treating symptoms
- Works with chronic pain, athletes, and anyone wanting to move better
- Sessions are 90 minutes, by appointment only

SERVICES:
1. Structural Integration: Hands-on fascial release to reorganize body structure
2. Movement Education: One-on-one training focused on movement patterns

PRICING:
- Single session: $150 (90 minutes)
- Package of 5: $650 (save $100)

LOCATION & HOURS:
- Monterey, California
- By appointment only
- Monday-Friday: 9am-6pm, Saturday: 10am-2pm

YOUR TASK:
Answer questions clearly and conversationally. Keep responses under 100 words. If relevant, mention that there's more detailed information on the website pages (About, Services, Pricing, or Contact).

For booking requests, direct them to the Contact page or mention they can schedule by reaching out directly.

Be professional but warm. Use natural language, not corporate speak.`
          },
          {
            role: 'user',
            content: userMessage
          }
        ],
        max_tokens: 200,
        temperature: 0.7
      })
    });

    const data = await response.json();
    
    if (data.error) {
      console.error('OpenAI Error:', data.error);
      return "I'm having trouble connecting right now. Please try the navigation menu above or refresh the page.";
    }
    
    return data.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return "I'm having trouble connecting right now. Please try the navigation menu above or refresh the page.";
  }
}

// Helper function to detect if user wants to navigate to a page
export function detectIntent(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Check for booking/contact intent
  if (message.includes('book') || message.includes('schedule') || message.includes('appointment')) {
    return '/contact';
  }
  
  // Check for pricing intent
  if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
    return '/pricing';
  }
  
  // Check for services intent
  if (message.includes('service') || message.includes('what do you do') || message.includes('structural integration')) {
    return '/services';
  }
  
  // Check for about intent
  if (message.includes('about') || message.includes('who are you') || message.includes('background')) {
    return '/about';
  }
  
  return null;
}