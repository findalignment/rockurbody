const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

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
            content: `You are a helpful assistant for RockUrBody, a movement education and structural integration practice. Answer questions about movement, body work, and wellness. Keep responses concise and friendly.`
          },
          {
            role: 'user',
            content: userMessage
          }
        ],
        max_tokens: 150
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return "I'm having trouble connecting right now. Please try again.";
  }
}
