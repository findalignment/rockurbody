import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I prepare for my first session?",
          a: "Come as you are. No special preparation needed. Wear comfortable clothing you can move in (see below). Avoid eating a heavy meal right before your session. If you have any injuries, medical conditions, or specific concerns, let me know when you arrive."
        },
        {
          q: "What should I wear?",
          a: <>Wear comfortable clothing that allows you to move freely. For <Link to="/what-is-structural-integration" className="text-accent hover:underline">Structural Integration</Link>: athletic shorts and a sports bra/tank top work well (I need to see and access the tissue). For <Link to="/what-is-movement-education" className="text-accent hover:underline">Movement Education</Link>: comfortable workout clothes. You'll be moving, not just lying down.</>
        },
        {
          q: "How often should I come?",
          a: <>It depends on what we're doing. For the <Link to="/12-series" className="text-accent hover:underline">12-Series</Link>: sessions are typically spaced 1 week apart. For ongoing <Link to="/what-is-movement-education" className="text-accent hover:underline">movement work</Link>: clients typically come 2-3 times per week. For maintenance after a series: monthly or quarterly tune-ups keep you on track. We'll figure out what makes sense for your body and your schedule.</>
        },
        {
          q: "Where should I start?",
          a: <>Not sure? Book a <Link to="/consult" className="text-accent hover:underline">free consultation</Link> and we'll talk through what makes sense for your goals. Many people start with <Link to="/packages" className="text-accent hover:underline">The Reset</Link> (3 SI + 3 Movement sessions) or the <Link to="/hip-series" className="text-accent hover:underline">Hip Series</Link> if hip issues are the main concern. Check out the <Link to="/smart-starts" className="text-accent hover:underline">Smart Starts</Link> page for recommendations.</>
        }
      ]
    },
    {
      category: "About Structural Integration",
      questions: [
        {
          q: "Is this massage?",
          a: <>No. Massage focuses on relaxation and releasing muscle tension. <Link to="/what-is-structural-integration" className="text-accent hover:underline">Structural Integration</Link> reorganizes the connective tissue (fascia) to improve your body's alignment and function. It's systematic, not just 'where it hurts.' The pressure is specific and intentional, and we work with your whole structure, not just tight spots.</>
        },
        {
          q: "Does it hurt?",
          a: "It shouldn't. You'll feel pressure and sensation as we work with restricted tissue, but it should never be painful. We work at your edge, not past it. You're in control. If something doesn't feel right, speak up. Good work doesn't require suffering."
        },
        {
          q: "What's the 12-Series?",
          a: <>The <Link to="/12-series" className="text-accent hover:underline">12-Series</Link> is the complete Anatomy Trains Structural Integration protocol. It's a systematic progression through your entire body over 12 sessions. Sessions 1-4: superficial layers (front line, back line, lateral line, spiral line). Sessions 5-8: deep core (up to waist, above waist, back, head and neck). Sessions 9-12: integration and arms (below waist, above waist, arms, wrapping it all together). It's designed to create lasting change in how your body is organized.</>
        },
        {
          q: "How is this different from chiropractic or physical therapy?",
          a: <>Chiropractors adjust bones. Physical therapists rehabilitate injuries and strengthen weak areas. <Link to="/what-is-structural-integration" className="text-accent hover:underline">Structural Integration</Link> works with fascia to change how your whole structure is organized. We're not treating symptoms or injuries. We're reorganizing your body so it works better. These approaches can complement each other.</>
        },
        {
          q: "How long do results last?",
          a: <><Link to="/what-is-structural-integration" className="text-accent hover:underline">Structural Integration</Link> creates lasting change in your tissue and alignment. Most people maintain results for years. Your body learns a new organization. That said, if you go back to old habits or don't maintain your structure, patterns can creep back. <Link to="/what-is-movement-education" className="text-accent hover:underline">Movement education</Link> and occasional tune-ups help maintain the work.</>
        }
      ]
    },
    {
      category: "About Movement Education",
      questions: [
        {
          q: "Is this personal training?",
          a: <>Yes, but evolved. I started as a personal trainer and kept learning until I developed a thorough practice for people who just want to live better and more comfortably in their body. I teach strength, core stability, mobility, coordination, awareness, balance, and flexibility. Outcomes include strength gains, weight loss, better posture, and pain reduction. But the foundation comes first. We set the foundation through quality movement, then build from there. It's sustainable, consistently challenging, but just challenging enough that you don't feel deterred by your workout. Learn more about <Link to="/what-is-movement-education" className="text-accent hover:underline">Movement Education</Link>.</>
        },
        {
          q: "Can I combine this with my workout routine?",
          a: <>Absolutely. In fact, that's the point. <Link to="/what-is-movement-education" className="text-accent hover:underline">Movement Education</Link> makes your training more effective and sustainable. You'll move better, lift with better form, and reduce injury risk. Most clients continue their regular workouts while working with me. We just clean up how you're moving.</>
        },
        {
          q: "Why do we train barefoot?",
          a: "Your feet are your foundation. Shoes mask problems and prevent your feet from doing their job. Training barefoot lets you feel the ground, activate the small stabilizing muscles in your feet, and build real stability from the ground up. It's not about being trendy. It's about building a body that works."
        },
        {
          q: "Do I need to be in shape to start?",
          a: <>No. We meet you where you are. <Link to="/what-is-movement-education" className="text-accent hover:underline">Movement Education</Link> isn't about crushing yourself. It's about learning to move well. Whether you're deconditioned, injured, or highly trained, we start with quality movement and build from there.</>
        },
        {
          q: "What if I have an injury or chronic pain?",
          a: <>We work with it. <Link to="/what-is-movement-education" className="text-accent hover:underline">Movement Education</Link> can help you move better despite limitations, and <Link to="/what-is-structural-integration" className="text-accent hover:underline">Structural Integration</Link> often helps address the underlying patterns contributing to pain. I'm not treating your injury, but we can work with your body to improve function and reduce compensation patterns.</>
        }
      ]
    },
    {
      category: "Logistics",
      questions: [
        {
          q: "Where are sessions held?",
          a: <>Sessions are held at Mavericks Fitness (311 Soquel Ave, Santa Cruz, CA) by appointment only. I can also come to your location if you're in the Santa Cruz area (travel time both ways is billed at the session rate).</>
        },
        {
          q: "Do you take insurance?",
          a: "No. I don't bill insurance. Sessions are out-of-pocket. Some HSA/FSA accounts may reimburse for bodywork or training. Check with your provider. I can provide receipts for your records."
        },
        {
          q: "What's your cancellation policy?",
          a: "Life happens. Please give 4 hours notice if you need to cancel or reschedule. Late cancellations or no-shows will be charged a $50 fee."
        },
        {
          q: "Can I buy a single session or do I need to commit to a series?",
          a: <>Both options are available. You can book a <Link to="/pricing" className="text-accent hover:underline">single session</Link> to try the work, or commit to a <Link to="/packages" className="text-accent hover:underline">package</Link> for better pricing and systematic results. Most people see the best results with a series, but you're not locked in.</>
        },
        {
          q: "How long are sessions?",
          a: <>It depends on what you book. <Link to="/what-is-movement-education" className="text-accent hover:underline">Movement sessions</Link> are typically 60 minutes. <Link to="/what-is-structural-integration" className="text-accent hover:underline">Structural Integration</Link> sessions can be 60 minutes, but I find people get significantly better results from 90-minute sessions. The 90-minute format allows deeper work and better integration. The <Link to="/12-series" className="text-accent hover:underline">12-Series</Link> includes one 2-hour session. <Link to="/pricing" className="text-accent hover:underline">Single sessions</Link> range from 60-120 minutes depending on what you need.</>
        }
      ]
    },
    {
      category: "Philosophy & Approach",
      questions: [
        {
          q: "What makes your approach different?",
          a: <>I combine hands-on <Link to="/what-is-structural-integration" className="text-accent hover:underline">structural work</Link> with intelligent <Link to="/what-is-movement-education" className="text-accent hover:underline">movement education</Link>. Most people focus on one or the other. Structure without movement doesn't stick. Movement without structure is building on a faulty foundation. I address both. Read more about <Link to="/approach" className="text-accent hover:underline">my approach</Link>.</>
        },
        {
          q: "Do you work with athletes?",
          a: "Yes. Many of my clients are athletes, weekend warriors, or people who train regularly. Better structure and movement quality improve performance and reduce injury risk. Whether you're training for a marathon or just want to move pain-free, this work helps."
        },
        {
          q: "Is this right for older adults?",
          a: <>Absolutely. Age is just context. <Link to="/what-is-structural-integration" className="text-accent hover:underline">Structural Integration</Link> and <Link to="/what-is-movement-education" className="text-accent hover:underline">Movement Education</Link> help you maintain function, reduce pain, and stay active as you age. We adapt the work to meet your body where it is.</>
        },
        {
          q: "What if I'm just dealing with daily aches and stiffness?",
          a: "That's exactly what this work addresses. Chronic discomfort, stiffness, and nagging issues often come from how your body is organized and how you move. We work on the underlying patterns, not just the symptoms."
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageLayout>
      <PageHero 
        imageSrc="/services-hero.jpg"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before you start"
      />

      <div className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Intro */}
          <div className="text-center mb-16">
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Have a question not answered here? <a href="/contact" className="text-accent hover:underline">Contact me</a> or book a free consultation to talk through your specific situation.
            </p>
          </div>

          {/* FAQ Categories */}
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-heading text-primary mb-8 pb-4 border-b-2 border-primary/20">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const index = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === index;
                  
                  return (
                    <div 
                      key={questionIndex}
                      className="bg-offWhite rounded-xl overflow-hidden border-2 border-transparent hover:border-accent/30 transition-colors"
                    >
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full text-left p-6 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-accent/50"
                      >
                        <h3 className="text-xl font-semibold text-neutralDark pr-8">
                          {faq.q}
                        </h3>
                        <span className={`text-accent text-2xl font-bold transition-transform flex-shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
                          +
                        </span>
                      </button>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="px-6 pb-6 text-lg text-neutralDark/80 leading-relaxed">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12 text-center mt-16">
            <h3 className="text-3xl font-heading text-primary mb-4">
              Still have questions?
            </h3>
            <p className="text-lg text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              The best way to know if this work is right for you is to have a conversation. Book a free consultation and we'll talk through your goals, concerns, and what approach makes sense for your body.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/consult"
                variant="primary"
                size="lg"
              >
                Book Free Consultation
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
              >
                Contact Me
              </Button>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default FAQ;

