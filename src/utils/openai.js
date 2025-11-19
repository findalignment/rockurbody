import logger from './logger';
import { bookingFunctions, executeFunction } from '../lib/openai-functions.js';
import { runConversation } from '../lib/chatbot.js';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export async function sendMessageToAI(userMessage, conversationHistory = [], suggestedPage = null) {
  try {
    // Build the system prompt with suggested page context
    let systemPrompt = `You are a helpful assistant for Rock Your Body, a movement education and structural integration practice in Santa Cruz, California run by Rock Hudson.`;
    
    // Add suggested page context if available
    if (suggestedPage) {
      systemPrompt += `\n\nIMPORTANT: Based on the user's message, the ${suggestedPage} page is likely relevant. However, ask clarifying questions first to understand their specific needs before recommending this page. Only suggest the page after you understand their situation better.`;
    }
    
    systemPrompt += `

BOOKING FUNCTIONALITY:
You have access to two functions that allow you to check availability and book appointments:
1. check_availability - Use this when users ask about available times or want to see open slots. You'll need start_time and end_time in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). Use Pacific Time (America/Los_Angeles) - convert user's requested times accordingly.
2. book_appointment - Use this ONLY after you have confirmed the user's name, email, and desired time slot. Never book without explicit confirmation.

When users ask about booking or availability:
- First, ask clarifying questions if needed (what type of session, preferred dates/times)
- If they mention a date/time, convert it to ISO 8601 format in Pacific Time before calling check_availability
- Use check_availability to show them available slots
- Only use book_appointment after they've confirmed their details and chosen a time slot
- Always confirm the booking details before executing the function
- When showing available slots, present them in a clear, readable format

ABOUT ROCK:
Hello there!
 
I'm Rock and I'm delighted to welcome you to my corner of the web. I'm on a mission to empower individuals like you to make lasting positive changes in their lives. As a firm believer in holistic health and wellness, I provide personalized guidance and support to help you achieve your goals.
 
Unlike flashy quick fixes, my approach is rooted in a comprehensive understanding of your unique needs and challenges. My website may not grab attention with glitz, but that's intentional. I'm seeking individuals committed to genuine transformation.those ready to put in the effort and follow my tailored guidance for sustainable results.
 
When you choose to work with me, you benefit from my extensive training and experience in bodywork, movement, and nutrition. I've honed my skills under the mentorship of world.class teachers and practitioners, continuously expanding my knowledge to offer you the best.
 
What sets me apart is my personal investment in each client. I take the time to know you, comprehend your aspirations and obstacles, and provide unwavering support throughout your journey. Whether it's answering questions, addressing concerns, or cheering you on, I'm dedicated to your success.
 
If you're prepared to embark on a transformative journey and are seeking a trusted partner to guide you towards your health and wellness goals, I invite you to schedule a consultation with me today. Together, we can craft a personalized plan that will have you looking and feeling your best for years to come. Let's make your health journey a remarkable success!

SERVICES OFFERED:

**Consultation (Free)**
. Free consultation to discuss goals and determine best approach

**Movement Coaching:**
. 30min: Quick check.ins, form corrections
. 60min: Standard coaching session
. 90min: Extended movement work
. 120min: Initial assessments, complex issues

**Structural Integration:**
Precise hands.on work that helps your body's connective tissue (fascia) glide and coordinate better. I pair it with simple movement cues so changes "stick" when you stand, walk, lift, and live.

Why People Book This:
. Relief from nagging tension and "stuck" spots
. Better posture and easier breathing
. Stronger, smoother movement in daily life and training

How it works:
. Assess & map: We look at how you stand, walk, and breathe to find the bottlenecks
. Hands.on + cueing: Targeted work to free tissue + movements that teach your body a better option
. Reinforce: Leave with 1.2 micro.practices tailored to your patterns

What to Expect:
. Wear comfy clothing, no oils
. We'll get you up and moving during the session
. You may feel lighter or a bit worked (normal and temporary)
. Session lengths: 60 / 90 / 120 minutes

What's Realistic:
. Many feel a meaningful shift in 1.3 sessions
. Lasting change usually needs 6.12 sessions with light homework
. Not a quick fix . it's change that holds because your movement changes

PRICING:
. Consultation: Free
. 30min Movement: $100
. 60min Movement: $180
. 90min Movement: $270
. 120min Movement: $360
. 60min SI: $180
. 90min SI: $270
. 120min SI: $360
(You can say "pricing varies by session length . check the pricing page for details")

Discounts:
Movement:
. 5 sessions: 10% off
. 10 sessions: 15% off
. 20 sessions: 20% off
Structural Integration:
. 12.Series: Complete Anatomy Trains Structural Integration protocol, 12 sessions $3000
. Hip Series: 4.session focused hip work $720

SPECIALIZED OFFERINGS:

**The 12.Series (Anatomy Trains Structural Integration):**
A comprehensive 12.session protocol that systematically reorganizes the entire fascial system.
. Sessions 1.4: Superficial layer (front, back, lateral line, spiral line)
. Sessions 5.8: Deep core (legs, pelvis, spine, deep front line, head and neck)
. Sessions 9.12: Integration (upper body, functional lines, whole.body coordination)
Best for: Chronic pain, structural issues, complete body reorganization
See /12.series for full details

**Hip Series:**
4.session protocol specifically for hip dysfunction and pain
It’s a great intro to the 12.series
Best for: Hip pain, limited mobility, groin issues, hip.related back pain
See /hip.series for full details

MY APPROACH:
I combine three elements:
1. I work hands.on . Structural Integration to reorganize your body's connective tissue
2. I teach movement . Movement Education so you learn patterns that stick
3. I help your body remember . Integration so the changes become automatic

Core Principles:
. The body is a system (pain in one area often comes from somewhere else)
. Structure influences function (how you're built affects how you move)
. Movement is a skill (it's about learning patterns, not just getting stronger)
. Fascia is key (your connective tissue holds patterns that can be released)
. You have to move it (I can release restrictions, but you integrate the change through movement)

What makes this different: Most personal training focuses on exercises. Most bodywork focuses on relaxation. I combine both: structural work to reorganize your body, plus movement education to make the changes last.

See /approach for full details

THE PROCESS:
1. ASSESS . Where are you now? Comprehensive movement and structural assessment
2. WORK . Meeting your body where it is through hands.on SI and movement training
3. REINFORCE . Making it stick with practices you can do at home

See /process for full details

SMART STARTS:
Three clear entry points for new clients:
1. The Reset ($990, 6 sessions) . Get back on track, perfect for getting restarted
2. Hip Series ($720, 4 sessions) . Great intro to the work, focused on hip freedom
3. Full Repatterning ($3,720+, 24+ sessions) . Complete transformation

See /smart-starts for full details and to help decide which is right

BLOG POSTS:
Rock has written detailed blog posts that explain his approach. Reference these when relevant:

**"Why Training with Rock is Different: The Power of Integrating Structure and Movement"**
URL: /blog/integrating.structure.and.movement
. Explains how Rock combines Structural Integration and Movement Education
. Discusses the 12.session progressive protocol based on Anatomy Trains
. Covers why movement education is the "missing link" that makes changes last
. Details real results clients experience
. Perfect for people who've tried everything but still feel something is missing

PHILOSOPHY & APPROACH:
. The body is a system . pain in one area often comes from somewhere else
. Structure influences function . reorganize structure for better movement
. Movement is a skill that can be learned
. Fascia holds patterns and restrictions
. Integration through movement makes changes last
. Find what works for your body and build on that
. Create a solid foundation by stripping away compensation patterns and building strength from a stronger, more aligned space
See /approach for full philosophy

FUN RACCOON FACTS (Rock's favorite animal - they're on the hero image!):
. Raccoons have incredibly dexterous hands with almost as much sensitivity as human hands
. They have 5 fingers on each paw and can rotate their hind feet 180 degrees
. Raccoons are problem solvers and can remember solutions to tasks for up to 3 years
. Their scientific name "Procyon lotor" means "before-dog washer"
. Raccoons are nocturnal and have excellent night vision
. They can run up to 15 mph and are excellent climbers and swimmers
. Baby raccoons are called "kits" and they purr like cats when content
. Raccoons are one of the few animals that can descend from a tree headfirst
. They have a highly developed sense of touch, with most sensory receptors in their paws
. Much like how I work with fascia, raccoons are masters of manipulation and dexterity!
If someone asks about raccoons or mentions the hero image, share a fun fact or two!

SMART WAYS TO START:
. The Reset (3 weeks) . SI + movement to clear the biggest roadblocks
. The Hip Series . Unstick hips/low back and restore stride
. Full Repatterning (12 weeks) . Complete SI series + movement habit change
See /smart-starts to help someone figure out where to begin

WHAT IS PAGES (Methodology . Link to these BEFORE packages):
. /what-is-structural-integration . Explains SI, what it is, how it works
. /what-is-movement-education . Explains movement coaching, the approach
. /combo-programs . Why combining SI + Movement is powerful

INFORMATION PAGES TO REFERENCE:

**Problem-Specific Pages (Pain & Conditions):**
. Back pain → /back-pain-santa-cruz
. Neck pain → /neck-pain-relief
. Shoulder pain → /shoulder-pain-relief
. Hip pain → /hip-pain-treatment
. Knee pain → /knee-pain-treatment
. Chronic pain (general) → /chronic-pain-relief
. Sciatica → /sciatica-relief
. Plantar fasciitis → /plantar-fasciitis
. IT Band syndrome → /it-band-syndrome
. Achilles tendonitis → /achilles-tendonitis
. Rotator cuff injury → /rotator-cuff-injury
. Frozen shoulder → /frozen-shoulder
. TMJ/jaw pain → /tmj-relief
. Headaches/migraines → /headache-migraine-relief
. Thoracic outlet syndrome → /thoracic-outlet-syndrome
. Bunions/foot pain → /bunion-foot-pain
. Scoliosis → /scoliosis-treatment
. Whiplash recovery → /whiplash-recovery

**Activity & Specialty Pages:**
. Surfers → /surfers
. Climbers → /climbers
. Cyclists & runners → /cyclists-and-runners
. Golfers → /golf-performance
. Athletic performance (general) → /athletic-performance
. Sports injury prevention → /sports-injury-prevention

**Demographic & Lifestyle Pages:**
. Desk workers → /desk-worker-wellness
. Active aging / older adults → /active-aging
. Pregnancy & postpartum → /pregnancy-postpartum
. Parkinson's fitness → /certifications/medfit-parkinsons
. Recovery from addiction → /certifications/medfit-recovery

**Educational Pages:**
. Structural Integration basics → /what-is-structural-integration
. SI vs Massage → /rolfing-vs-massage
. SI vs Chiropractic → /structural-integration-vs-chiropractic
. Fascia / fascial release → /fascial-release
. Movement screening → /movement-screening
. Posture correction → /posture-correction
. Injury recovery (general) → /injury-recovery
. Mobility training → /mobility-training
. Balance training → /balance-training
. Core strengthening → /core-strengthening
. Breathing & core → /breathing-core

**Training & Certifications:**
. Personal training approach → /personal-training-posture
. ATSI certification → /certifications/anatomy-trains-structural-integration
. Anatomy Trains teacher → /certifications/anatomy-trains-teacher
. NASM Personal Trainer → /certifications/nasm-personal-trainer
. NASM Corrective Exercise → /certifications/nasm-corrective-exercise
. ACE Health Coach → /certifications/ace-health-coach
. ACE Corrective Exercise → /certifications/ace-corrective-exercise
. Precision Nutrition → /certifications/precision-nutrition
. MovNat → /certifications/movnat
. All credentials → /credentials

**Santa Cruz Local SEO:**
. Structural integration in Santa Cruz → /santa-cruz-structural-integration

WHEN TO RECOMMEND WHAT:
. Philosophy, approach → Link to /approach page
. Methodology questions → Link to /what-is-structural-integration or /what-is-movement-education FIRST
. Specific pain/problem → Link to relevant problem-specific page
. Activity-specific → Link to relevant activity page
. Package pricing → /packages page (but explain methodology pages first)
. Where to start → /smart-starts or /consult (free consultation)
. Credentials → /credentials or specific certification pages
. Not sure what they need → Ask questions, then suggest /consult

IMPORTANT: Link to INFORMATION pages first (methodology, problem-specific, educational), not booking pages. Only suggest booking pages when someone explicitly asks to book or schedule.

YOUR TASK:
You're here to help people understand if this work is right for them. Be helpful, direct, conversational. No fluff. Think of yourself as Rock chatting with someone who found the site.

TONE & STYLE:
. Conversational and direct (like you're texting a friend who knows their stuff)
. No corporate speak, no overly formal language
. Honest and straightforward. no hype, no false promises
. Empathetic but not sappy
. Helpful without being pushy
. Use "you" and "your" (not "one" or "clients")
. Short sentences. Get to the point.

CONSULTATIVE APPROACH:
. Ask 1-2 questions to understand what they're dealing with
. Listen to their actual problem before throwing solutions at them
. Most people just want to know if you can help with their specific thing
. Focus on information pages that explain concepts, not pushing booking pages
. Only mention booking when they ask to schedule something

QUESTION EXAMPLES:
. "What's going on with your [body part]? How long's it been like this?"
. "What have you already tried?"
. "Is this affecting your daily life, your workouts, or both?"
. "Looking for a quick tune-up or ready to dig into the root cause?"
. "What does 'better' look like for you?"

RESPONSE GUIDELINES:
. Keep responses under 80 words unless answering a detailed question
. Link to INFORMATION pages to learn more, not booking pages (unless they ask to book)
. When someone asks about a problem, link to the relevant problem page for details
. When someone asks about approach/methodology, link to /what-is-structural-integration or /what-is-movement-education
. Only mention packages/booking when they specifically ask about scheduling or pricing
. If unsure what they need, suggest the free consultation to talk it through
. Always include clickable links when referencing pages (format: [link text](URL))

LINK TO LEARN MORE, NOT TO BOOK:
. Pain question? → Link to problem-specific page (back pain, hip pain, etc.)
. Activity question? → Link to activity page (surfers, climbers, etc.)
. Methodology question? → Link to /what-is-structural-integration or /what-is-movement-education
. Want to understand approach? → Link to /approach
. Asking about credentials? → Link to specific certification page or /credentials
. Ready to book? → THEN link to /consult or /packages

WHEN TO ASK QUESTIONS:
. Someone mentions pain but doesn't say where or how long
. They ask "can you help me?" without explaining the problem
. They're comparing options (SI vs massage, etc.)
. They mention multiple issues
. They seem overwhelmed or unsure

WHEN TO PROVIDE INFORMATION:
. They ask a specific question ("what is structural integration?")
. They describe a clear problem ("my hip's been tight for months")
. They ask about your background or qualifications
. After you understand their situation through questions

EXAMPLES OF GOOD RESPONSES:

User: "My back hurts"
You: "How long's your back been bothering you? Is it constant or does it come and go with certain activities?"

User: "I'm a runner with knee pain"
You: "Runners and knee pain, classic combo. IT band? Meniscus? Something else? Here's info on [knee pain treatment](/knee-pain-treatment) and [training for cyclists & runners](/cyclists-and-runners) that might help."

User: "What's structural integration?"
You: "It's hands-on work with your fascia (connective tissue) to reorganize how your body's put together. Not massage, not chiropractic. Different animal. Here's the full explanation: [What is Structural Integration](/what-is-structural-integration)"

User: "How much does it cost?"
You: "Depends on what you need. Single sessions range $100-360 depending on length and type. Packages save 10-20%. Full pricing details here: [Pricing](/pricing). What are you looking to work on?"

User: "Can you help with [specific problem]?"
You: "Probably, but let's make sure. What's been going on? How long? What have you tried?" (Then after they explain, link to relevant info page)`;

    const messages = [
      {
        role: 'system',
        content: systemPrompt
      }
    ];

    // Add conversation history
    const recentHistory = conversationHistory.slice(.6);
    messages.push(...recentHistory.map(msg => ({
      role: msg.role,
      content: msg.content
    })));

    messages.push({
      role: 'user',
      content: userMessage
    });

    // Dad joke handler - check if user is asking for a joke
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('joke') || lowerMessage.includes('funny') || 
        lowerMessage.includes('laugh') || lowerMessage.includes('humor')) {
      const dadJokes = [
        {
          setup: "Why did the scarecrow become a successful bodyworker?",
          punchline: "Because he was outstanding in his field!",
          followup: "I try to be outstanding in my field too. What brings you here today - looking to improve your movement, work on alignment, or just curious about what I do?"
        },
        {
          setup: "What do you call a fake noodle?",
          punchline: "An impasta!",
          followup: "Much like fake movement patterns - they just don't hold up under pressure. Are you dealing with any movement patterns that feel off or uncomfortable?"
        },
        {
          setup: "Why don't skeletons fight each other?",
          punchline: "They don't have the guts!",
          followup: "But seriously, building real core strength (the guts!) is essential. Is core stability something you're working on?"
        },
        {
          setup: "What's the best thing about Switzerland?",
          punchline: "I don't know, but the flag is a big plus!",
          followup: "Speaking of big pluses - proper alignment is a huge plus for your body. What made you reach out today?"
        },
        {
          setup: "Why did the bicycle fall over?",
          punchline: "It was two-tired!",
          followup: "Rest and recovery are so important. Are you feeling run down or dealing with fatigue in your training?"
        },
        {
          setup: "What do you call a bear with no teeth?",
          punchline: "A gummy bear!",
          followup: "Just like fascia needs to stay supple, not stuck like gummy. Are you experiencing any areas that feel tight or restricted?"
        },
        {
          setup: "Why can't your nose be 12 inches long?",
          punchline: "Because then it would be a foot!",
          followup: "Proper body proportions matter in structural integration. Curious what brings you to my corner of the web today?"
        },
        {
          setup: "What did the ocean say to the beach?",
          punchline: "Nothing, it just waved!",
          followup: "Movement should be fluid and wave-like through your body. Are you looking to move more freely and fluidly?"
        },
        {
          setup: "Why did the coffee file a police report?",
          punchline: "It got mugged!",
          followup: "Don't let tension mug you of good posture! Is tension or posture something you're struggling with?"
        },
        {
          setup: "What do you call a sleeping bull?",
          punchline: "A bulldozer!",
          followup: "Sleep is when your body integrates all the work we do. How's your recovery going these days?"
        },
        {
          setup: "Why did the math book look so sad?",
          punchline: "It had too many problems!",
          followup: "Let's solve your movement problems together. What's the main thing you're hoping to work on?"
        },
        {
          setup: "What's orange and sounds like a parrot?",
          punchline: "A carrot!",
          followup: "And what's important for fascia? Good hydration and nutrition. But also movement! What are your goals?"
        },
        {
          setup: "Why don't eggs tell jokes?",
          punchline: "They'd crack each other up!",
          followup: "But tension in your body is no laughing matter. Are you dealing with any specific aches or tension?"
        },
        {
          setup: "What do you call a dinosaur with an extensive vocabulary?",
          punchline: "A thesaurus!",
          followup: "I have an extensive vocabulary of movement patterns to teach you. Interested in learning better movement?"
        },
        {
          setup: "Why did the golfer bring two pairs of pants?",
          punchline: "In case he got a hole in one!",
          followup: "Structural Integration helps you stay whole, not develop holes in your movement. Want to learn more about how it works?"
        },
        {
          setup: "Why don't raccoons ever get locked out?",
          punchline: "Because they're great at breaking and entering!",
          followup: "Just like raccoons are masters of unlocking things, I help you unlock better movement patterns. What movement issues are you looking to unlock?"
        },
        {
          setup: "What do you call a raccoon who does bodywork?",
          punchline: "A trash panda with good hands!",
          followup: "Speaking of good hands - that's what you get with Structural Integration. Curious about hands-on work?"
        },
      ];
      
      const randomJoke = dadJokes[Math.floor(Math.random() * dadJokes.length)];
      return `${randomJoke.setup}\n\n(Go ahead, take a guess! 😄)`;
    }
    
    // Dad joke punchline handler - if previous message was a joke setup
    if (conversationHistory.length > 0) {
      const lastAIMessage = conversationHistory.slice().reverse().find(msg => msg.role === 'assistant');
      if (lastAIMessage && lastAIMessage.content.includes('(Go ahead, take a guess! 😄)')) {
        const dadJokes = [
          {
            setup: "Why did the scarecrow become a successful bodyworker?",
            punchline: "Because he was outstanding in his field!",
            followup: "I try to be outstanding in my field too. What brings you here today - looking to improve your movement, work on alignment, or just curious about what I do?"
          },
          {
            setup: "What do you call a fake noodle?",
            punchline: "An impasta!",
            followup: "Much like fake movement patterns - they just don't hold up under pressure. Are you dealing with any movement patterns that feel off or uncomfortable?"
          },
          {
            setup: "Why don't skeletons fight each other?",
            punchline: "They don't have the guts!",
            followup: "But seriously, building real core strength (the guts!) is essential. Is core stability something you're working on?"
          },
          {
            setup: "What's the best thing about Switzerland?",
            punchline: "I don't know, but the flag is a big plus!",
            followup: "Speaking of big pluses - proper alignment is a huge plus for your body. What made you reach out today?"
          },
          {
            setup: "Why did the bicycle fall over?",
            punchline: "It was two-tired!",
            followup: "Rest and recovery are so important. Are you feeling run down or dealing with fatigue in your training?"
          },
          {
            setup: "What do you call a bear with no teeth?",
            punchline: "A gummy bear!",
            followup: "Just like fascia needs to stay supple, not stuck like gummy. Are you experiencing any areas that feel tight or restricted?"
          },
          {
            setup: "Why can't your nose be 12 inches long?",
            punchline: "Because then it would be a foot!",
            followup: "Proper body proportions matter in structural integration. Curious what brings you to my corner of the web today?"
          },
          {
            setup: "What did the ocean say to the beach?",
            punchline: "Nothing, it just waved!",
            followup: "Movement should be fluid and wave-like through your body. Are you looking to move more freely and fluidly?"
          },
          {
            setup: "Why did the coffee file a police report?",
            punchline: "It got mugged!",
            followup: "Don't let tension mug you of good posture! Is tension or posture something you're struggling with?"
          },
          {
            setup: "What do you call a sleeping bull?",
            punchline: "A bulldozer!",
            followup: "Sleep is when your body integrates all the work we do. How's your recovery going these days?"
          },
          {
            setup: "Why did the math book look so sad?",
            punchline: "It had too many problems!",
            followup: "Let's solve your movement problems together. What's the main thing you're hoping to work on?"
          },
          {
            setup: "What's orange and sounds like a parrot?",
            punchline: "A carrot!",
            followup: "And what's important for fascia? Good hydration and nutrition. But also movement! What are your goals?"
          },
          {
            setup: "Why don't eggs tell jokes?",
            punchline: "They'd crack each other up!",
            followup: "But tension in your body is no laughing matter. Are you dealing with any specific aches or tension?"
          },
          {
            setup: "What do you call a dinosaur with an extensive vocabulary?",
            punchline: "A thesaurus!",
            followup: "I have an extensive vocabulary of movement patterns to teach you. Interested in learning better movement?"
          },
          {
            setup: "Why did the golfer bring two pairs of pants?",
            punchline: "In case he got a hole in one!",
            followup: "Structural Integration helps you stay whole, not develop holes in your movement. Want to learn more about how it works?"
          },
          {
            setup: "Why don't raccoons ever get locked out?",
            punchline: "Because they're great at breaking and entering!",
            followup: "Just like raccoons are masters of unlocking things, I help you unlock better movement patterns. What movement issues are you looking to unlock?"
          },
          {
            setup: "What do you call a raccoon who does bodywork?",
            punchline: "A trash panda with good hands!",
            followup: "Speaking of good hands - that's what you get with Structural Integration. Curious about hands-on work?"
          },
        ];
        
        // Find which joke was asked
        const askedJoke = dadJokes.find(joke => lastAIMessage.content.includes(joke.setup));
        if (askedJoke) {
          return `${askedJoke.punchline}\n\n😄 ${askedJoke.followup}`;
        }
      }
    }

    // Prepare the request body with function calling support
    const requestBody = {
      model: 'gpt-4o-mini',
      messages: messages,
      max_tokens: 250,
      temperature: 0.7,
      functions: bookingFunctions,
      function_call: 'auto' // Let the model decide when to call functions
    };

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      logger.error('OpenAI API Error:', response.status, errorData);
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    
    if (data.error) {
      logger.error('OpenAI Error:', data.error);
      throw new Error(data.error.message || 'Unknown API error');
    }
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      logger.error('Invalid API response:', data);
      throw new Error('Invalid response format from API');
    }

    const message = data.choices[0].message;

    // Check if the model wants to call a function
    if (message.function_call) {
      const functionName = message.function_call.name;
      let functionArgs;
      
      try {
        functionArgs = JSON.parse(message.function_call.arguments);
      } catch (parseError) {
        logger.error('Failed to parse function arguments:', parseError);
        return "I'm having trouble processing that request. Could you try rephrasing?";
      }

      // Execute the function
      logger.info(`Executing function: ${functionName}`, functionArgs);
      const functionResult = await executeFunction(functionName, functionArgs);

      // Add the function call and result to the conversation
      messages.push({
        role: 'assistant',
        content: null,
        function_call: message.function_call
      });

      messages.push({
        role: 'function',
        name: functionName,
        content: JSON.stringify(functionResult)
      });

      // Make a second API call with the function result
      const secondResponse = await fetch('https://api.openai.com/v1/chat/completions', {
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

      if (!secondResponse.ok) {
        const errorData = await secondResponse.json().catch(() => ({}));
        logger.error('OpenAI API Error (second call):', secondResponse.status, errorData);
        // Return a user-friendly message based on function result
        if (functionResult.success) {
          return functionResult.message || 'The request was processed successfully.';
        } else {
          return functionResult.error || "I encountered an issue processing that request. Please try again or contact me directly.";
        }
      }

      const secondData = await secondResponse.json();
      
      if (secondData.error) {
        logger.error('OpenAI Error (second call):', secondData.error);
        // Return function result message if available
        if (functionResult.success) {
          return functionResult.message || 'The request was processed successfully.';
        }
        return functionResult.error || "I encountered an issue. Please try again.";
      }
      
      if (!secondData.choices || !secondData.choices[0] || !secondData.choices[0].message) {
        logger.error('Invalid API response (second call):', secondData);
        // Return function result message if available
        if (functionResult.success) {
          return functionResult.message || 'The request was processed successfully.';
        }
        return functionResult.error || "I encountered an issue. Please try again.";
      }

      return secondData.choices[0].message.content;
    }
    
    // No function call, return the regular message content
    return message.content;
  } catch (error) {
    logger.error('OpenAI API Error:', error);
    return "I'm having trouble connecting right now. Please try the navigation menu above.";
  }
}

/**
 * Alternative chatbot handler using OpenAI SDK with function calling
 * This uses the new runConversation function with the full system prompt
 * @param {string} userMessage - User's message
 * @param {Array} conversationHistory - Previous conversation messages
 * @param {string} suggestedPage - Suggested page route (optional)
 * @returns {Promise<string>} - AI response message
 */
export async function sendMessageToAIWithFunctions(userMessage, conversationHistory = [], suggestedPage = null) {
  try {
    // Build the full system prompt (same as sendMessageToAI)
    let systemPrompt = `You are a helpful assistant for Rock Your Body, a movement education and structural integration practice in Santa Cruz, California run by Rock Hudson.`;
    
    if (suggestedPage) {
      systemPrompt += `\n\nIMPORTANT: Based on the user's message, the ${suggestedPage} page is likely relevant. However, ask clarifying questions first to understand their specific needs before recommending this page. Only suggest the page after you understand their situation better.`;
    }
    
    // Convert conversation history format for runConversation
    const formattedHistory = conversationHistory
      .filter(msg => msg.role === 'user' || msg.role === 'assistant')
      .map(msg => ({
        role: msg.role,
        content: msg.content
      }));

    // Use runConversation with the custom system prompt
    const result = await runConversation(userMessage, formattedHistory, systemPrompt);
    
    return result.message || "I'm having trouble processing that. Could you try rephrasing?";
  } catch (error) {
    logger.error('Chatbot with functions error:', error);
    return "I'm having trouble connecting right now. Please try the navigation menu above.";
  }
}

export function detectIntent(userMessage) {
  const message = userMessage.toLowerCase();
  
  // ===== SPECIFIC SESSION REQUESTS =====
  
  // Consultation
  if (message.includes('consult') || message.includes('free session') || 
      (message.includes('not sure') && message.includes('book'))) {
    return '/consult';
  }
  
  // Movement Sessions . Specific Durations
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
  
  // Structural Integration . Specific Durations
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
  
  // Structural Integration without duration . suggest most common (90min) or show options
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
  
  // Movement without duration . suggest standard (60min)
  if (message.includes('movement coaching') || message.includes('movement education') || 
      message.includes('movement session')) {
    return '/book/move60';
  }
  
  // ===== PAIN/PROBLEM.BASED ROUTING =====
  
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
  
  // Quick questions, follow.ups → 30min movement
  if ((message.includes('quick') || message.includes('follow up') || message.includes('check in')) && 
      (message.includes('session') || message.includes('book'))) {
    return '/book/move30';
  }
  
  // ===== GENERAL BOOKING (no specific type) =====
  
  // Generic booking request . send to chooser page
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
      message.includes('charge') || message.includes('fee') || message.includes('expensive') ||
      message.includes('afford') || message.includes('budget')) {
    return '/pricing';
  }
  
  // Services
  if (message.includes('what do you do') || message.includes('services') || message.includes('what do you offer') ||
      message.includes('what kind of') || message.includes('types of') || message.includes('options')) {
    return '/services';
  }
  
  // About
  if (message.includes('about') || message.includes('who are you') || message.includes('background') || 
      message.includes('experience') || message.includes('credentials') || message.includes('tell me about') ||
      message.includes('your story') || message.includes('qualifications')) {
    return '/about';
  }
  
  // Contact
  if (message.includes('contact') || message.includes('location') || message.includes('where are you') || 
      message.includes('hours') || message.includes('when are you open') || message.includes('address') ||
      message.includes('phone') || message.includes('email')) {
    return '/contact';
  }

  // Packages
  if (message.includes('package') || message.includes('save money') || message.includes('discount') ||
      message.includes('bulk') || message.includes('multiple sessions') || message.includes('deal') ||
      message.includes('bundle') || message.includes('series')) {
    return '/packages';
  }

// 12.Series
if (message.includes('12 series') || message.includes('12.series') || message.includes('twelve series') ||
    message.includes('anatomy trains') || message.includes('complete series')) {
  return '/12.series';
}

// Hip Series
if (message.includes('hip series') || message.includes('hip pain') || message.includes('hip work') ||
    (message.includes('hip') && (message.includes('series') || message.includes('program')))) {
  return '/hip.series';
}

// Approach
if (message.includes('approach') || message.includes('philosophy') || 
    message.includes('how do you work') || message.includes('your method') ||
    message.includes('what makes you different') || message.includes('principles') ||
    (message.includes('work') && (message.includes('hands') || message.includes('teach')))) {
  return '/approach';
}

// Process
if (message.includes('process') || message.includes('how does it work') || 
    message.includes('what happens') || message.includes('step by step') ||
    (message.includes('assess') && (message.includes('work') || message.includes('reinforce')))) {
  return '/process';
}

// Smart Starts
if (message.includes('where') && (message.includes('start') || message.includes('begin')) ||
    message.includes('smart start') || message.includes('new') && message.includes('client') ||
    message.includes('first time') || message.includes('getting started') ||
    (message.includes('which') && (message.includes('program') || message.includes('package')))) {
  return '/smart-starts';
}

// Credentials
if (message.includes('credential') || message.includes('certification') || message.includes('training') ||
    message.includes('qualified') || message.includes('education')) {
  return '/credentials';
}

// Blog posts
if (message.includes('blog') || message.includes('article') || message.includes('read more')) {
  return '/blog';
}

// Specific blog post about Rock's approach
if ((message.includes('different') || message.includes('unique') || message.includes('special')) &&
    (message.includes('approach') || message.includes('method') || message.includes('training'))) {
  return '/blog/integrating.structure.and.movement';
}

// Integration of structure and movement
if ((message.includes('structure') && message.includes('movement')) ||
    message.includes('integrated approach') || 
    message.includes('whole body') ||
    (message.includes('tried everything') && (message.includes('pain') || message.includes('help')))) {
  return '/blog/integrating.structure.and.movement';
}
  
  // No clear intent detected
  return null;
}