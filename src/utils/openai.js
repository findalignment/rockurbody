const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export async function sendMessageToAI(userMessage, conversationHistory = []) {
  try {
    const messages = [
      {
  role: 'system',
  content: `You are a helpful assistant for Rock Your Body, a movement education and structural integration practice in Santa Cruz, California run by Rock Hudson.

ABOUT ROCK:
Hello there!
 
I'm Rock and I'm delighted to welcome you to my corner of the web. I'm on a mission to empower individuals like you to make lasting positive changes in their lives. As a firm believer in holistic health and wellness, I provide personalized guidance and support to help you achieve your goals.
 
Unlike flashy quick fixes, my approach is rooted in a comprehensive understanding of your unique needs and challenges. My website may not grab attention with glitz, but that's intentional. I'm seeking individuals committed to genuine transformation—those ready to put in the effort and follow my tailored guidance for sustainable results.
 
When you choose to work with me, you benefit from my extensive training and experience in bodywork, movement, and nutrition. I've honed my skills under the mentorship of world-class teachers and practitioners, continuously expanding my knowledge to offer you the best.
 
What sets me apart is my personal investment in each client. I take the time to know you, comprehend your aspirations and obstacles, and provide unwavering support throughout your journey. Whether it's answering questions, addressing concerns, or cheering you on, I'm dedicated to your success.
 
If you're prepared to embark on a transformative journey and are seeking a trusted partner to guide you towards your health and wellness goals, I invite you to schedule a consultation with me today. Together, we can craft a personalized plan that will have you looking and feeling your best for years to come. Let's make your health journey a remarkable success!

SERVICES OFFERED:

**Consultation (Free)**
- Free consultation to discuss goals and determine best approach

**Movement Coaching:**
- 30min: Quick check-ins, form corrections
- 60min: Standard coaching session
- 90min: Extended movement work
- 120min: Initial assessments, complex issues

**Structural Integration:**
- 60min: Targeted work on specific areas
- 90min: Standard SI session (most common)
- 120min: Deep intensive work

PRICING:
- Consultation: Free
- 30min Movement: $100
- 60min Movement: $180
- 90min Movement: $270
- 120min Movement: $360
- 60min SI: $180
- 90min SI: $270
- 120min SI: $360
(You can say "pricing varies by session length - check the pricing page for details")

Discounts offers:
- 5 sessions: 10% off
- 10 sessions: 15% off
- 20 sessions: 20% off
- 12-Series: Complete Anatomy Trains Structural Integration protocol, 12 sessions $3000
- Hip Series: 4-session focused hip work $720

SPECIALIZED OFFERINGS:

**The 12-Series (Anatomy Trains Structural Integration):**
A comprehensive 12-session protocol that systematically reorganizes the entire fascial system.
- Sessions 1-4: Superficial layer (front, back, lateral line, spiral line)
- Sessions 5-8: Deep core (legs, pelvis, spine, deep front line, head and neck)
- Sessions 9-12: Integration (upper body, functional lines, whole-body coordination)
Best for: Chronic pain, structural issues, complete body reorganization
See /12-series for full details

**Hip Series:**
4-session protocol specifically for hip dysfunction and pain
It’s a great intro to the 12-series
Best for: Hip pain, limited mobility, groin issues, hip-related back pain
See /hip-series for full details

PHILOSOPHY & APPROACH:
- The body is a system - pain in one area often comes from somewhere else
- Structure influences function - reorganize structure for better movement
- Movement is a skill that can be learned
- Fascia holds patterns and restrictions
- Integration through movement makes changes last
- Find what works for your body and build on that
- Create a solid foundation by stripping away compensation patterns and building strength from a stronger, more aligned space
See /approach for full philosophy

WHEN TO RECOMMEND:
- "12-series" or "complete transformation" → /12-series page
- Hip pain, hip mobility, groin issues → /hip-series page  
- Package pricing, save money → /packages page
- Philosophy, approach, how you work → /approach page
- Credentials, experience, training → /credentials page
- General chronic pain → SI 90min or 120min
- Learning movement → Movement 60min
- Not sure → Free consultation

YOUR TASK:
Help people understand their options and find the right session or package.
Be conversational and helpful. Keep responses under 100 words unless explaining options. If they ask a question that does not pertain to structural integration, movement, exercise, or fitness, instruct them to email Rock @ rock@rockurbody.com for more information. No NSFW content.
Don't overwhelm - suggest 1-2 options max.
Reference specific pages when relevant.
Keep responses under 150 words unless explaining complex topics.`
      }

    ];

    // Add conversation history
    const recentHistory = conversationHistory.slice(-6);
    messages.push(...recentHistory.map(msg => ({
      role: msg.role,
      content: msg.content
    })));

    messages.push({
      role: 'user',
      content: userMessage
    });

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        max_tokens: 250,
        temperature: 0.7
      })
    });

    const data = await response.json();
    
    if (data.error) {
      console.error('OpenAI Error:', data.error);
      return "I'm having trouble connecting right now. Please try the navigation menu above.";
    }
    
    return data.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return "I'm having trouble connecting right now. Please try the navigation menu above.";
  }
}

export function detectIntent(userMessage) {
  const message = userMessage.toLowerCase();
  
  // ===== SPECIFIC SESSION REQUESTS =====
  
  // Consultation
  if (message.includes('consult') || message.includes('free session') || 
      (message.includes('not sure') && message.includes('book'))) {
    return '/book/consult';
  }
  
  // Movement Sessions - Specific Durations
  if ((message.includes('30 min') || message.includes('30min') || message.includes('thirty min')) && 
      (message.includes('movement') || message.includes('coaching'))) {
    return '/book/move30';
  }
  
  if ((message.includes('60 min') || message.includes('60min') || message.includes('one hour') || message.includes('1 hour')) && 
      (message.includes('movement') || message.includes('coaching'))) {
    return '/book/move60';
  }
  
  if ((message.includes('90 min') || message.includes('90min') || message.includes('hour and a half')) && 
      (message.includes('movement') || message.includes('coaching'))) {
    return '/book/move90';
  }
  
  if ((message.includes('120 min') || message.includes('120min') || message.includes('2 hour') || message.includes('two hour')) && 
      (message.includes('movement') || message.includes('coaching'))) {
    return '/book/move120';
  }
  
  // Structural Integration - Specific Durations
  if ((message.includes('60 min') || message.includes('60min') || message.includes('one hour') || message.includes('1 hour')) && 
      (message.includes('structural') || message.includes('si') || message.includes('fascial') || message.includes('bodywork'))) {
    return '/book/si60';
  }
  
  if ((message.includes('90 min') || message.includes('90min') || message.includes('hour and a half')) && 
      (message.includes('structural') || message.includes('si') || message.includes('fascial') || message.includes('bodywork'))) {
    return '/book/si90';
  }
  
  if ((message.includes('120 min') || message.includes('120min') || message.includes('2 hour') || message.includes('two hour')) && 
      (message.includes('structural') || message.includes('si') || message.includes('fascial') || message.includes('bodywork'))) {
    return '/book/si120';
  }
  
  // ===== GENERAL TYPE REQUESTS (no specific duration) =====
  
  // Structural Integration without duration - suggest most common (90min) or show options
  if (message.includes('structural integration') || message.includes('fascial release') || 
      message.includes('bodywork') || message.includes('rolfing')) {
    // If they mention chronic pain or serious issues, suggest 120min
    if (message.includes('chronic') || message.includes('years') || message.includes('severe') || 
        message.includes('really bad') || message.includes('multiple areas')) {
      return '/book/si120';
    }
    // Default to most common SI session
    return '/book/si90';
  }
  
  // Movement without duration - suggest standard (60min)
  if (message.includes('movement coaching') || message.includes('movement education') || 
      message.includes('movement session')) {
    return '/book/move60';
  }
  
  // ===== PAIN/PROBLEM-BASED ROUTING =====
  
  // Chronic pain, restrictions, tightness → SI
  if (message.includes('chronic pain') || message.includes('tight') || message.includes('stuck') || 
      message.includes('restricted') || message.includes('limited range') || message.includes('stiff')) {
    // Severe cases get 2hr
    if (message.includes('severe') || message.includes('really bad') || message.includes('years') || 
        message.includes('everywhere') || message.includes('whole body')) {
      return '/book/si120';
    }
    // Default chronic issues to 90min SI
    return '/book/si90';
  }
  
  // Learning, technique, strength → Movement
  if (message.includes('learn') || message.includes('technique') || message.includes('form') || 
      message.includes('get stronger') || message.includes('build strength') || message.includes('movement patterns')) {
    return '/book/move60';
  }
  
  // Quick questions, follow-ups → 30min movement
  if ((message.includes('quick') || message.includes('follow up') || message.includes('check in')) && 
      (message.includes('session') || message.includes('book'))) {
    return '/book/move30';
  }
  
  // ===== GENERAL BOOKING (no specific type) =====
  
  // Generic booking request - send to chooser page
  if (message.includes('book a session') || message.includes('schedule a session') || 
      message.includes('make an appointment') || message.includes('book session') ||
      (message.includes('book') && !message.includes('specific'))) {
    // Only send to chooser if they're truly vague
    if (!message.includes('movement') && !message.includes('structural') && 
        !message.includes('pain') && !message.includes('coaching')) {
      return '/book';
    }
  }
  
  // ===== OTHER PAGE ROUTING =====
  
  // Pricing
  if (message.includes('price') || message.includes('cost') || message.includes('how much') || 
      message.includes('charge') || message.includes('fee')) {
    return '/pricing';
  }
  
  // Services
  if (message.includes('what do you do') || message.includes('services') || message.includes('what do you offer')) {
    return '/services';
  }
  
  // About
  if (message.includes('about') || message.includes('who are you') || message.includes('background') || 
      message.includes('experience') || message.includes('credentials')) {
    return '/about';
  }
  
  // Contact
  if (message.includes('contact') || message.includes('location') || message.includes('where are you') || 
      message.includes('hours') || message.includes('when are you open')) {
    return '/contact';
  }

  // Packages
if (message.includes('package') || message.includes('save money') || message.includes('discount')) {
  return '/packages';
}

// 12-Series
if (message.includes('12 series') || message.includes('12-series') || message.includes('twelve series') ||
    message.includes('anatomy trains') || message.includes('complete series')) {
  return '/12-series';
}

// Hip Series
if (message.includes('hip series') || message.includes('hip pain') || message.includes('hip work') ||
    (message.includes('hip') && (message.includes('series') || message.includes('program')))) {
  return '/hip-series';
}

// Approach
if (message.includes('approach') || message.includes('philosophy') || message.includes('how do you work')) {
  return '/approach';
}

// Credentials
if (message.includes('credential') || message.includes('certification') || message.includes('training') ||
    message.includes('qualified') || message.includes('education')) {
  return '/credentials';
}
  
  // No clear intent detected
  return null;
}