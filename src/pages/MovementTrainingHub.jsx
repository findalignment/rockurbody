import { Link } from 'react-router-dom';
import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { getBreadcrumbSchema, getFAQSchema } from '../utils/structuredData';

function MovementTrainingHub() {
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Movement Training', url: '/movement-training' }
  ];

  const faqs = [
    {
      question: "How is Movement Education different from personal training?",
      answer: "Traditional personal training focuses on exercises, reps, and sets-building strength and fitness through repetition. Movement Education focuses on how you move, not just what exercises you do. We teach movement quality, efficiency, and awareness. You'll learn to sense what your body is doing, understand movement principles, and develop skills that transfer to everything you do. It's education, not just exercise-you gain understanding and tools you can use for life."
    },
    {
      question: "Do I need to be in shape to start Movement Training?",
      answer: "Not at all. Movement Education meets you where you are, whether you're deconditioned, injured, or highly trained. We start with fundamental movement patterns and build from there. In fact, if you're dealing with pain or limitations, addressing movement quality first often resolves those issues before you need to build more strength or fitness. The work adapts to your current capacity and progresses at your pace."
    },
    {
      question: "Can I combine Movement Education with my regular workouts?",
      answer: "Absolutely. In fact, that's ideal. Movement Education makes your existing training more effective and safer. You'll move with better form, reduce injury risk, and get more benefit from your workouts. Many clients continue their regular gym routines, sports, or activities while working with us. We just improve how you're moving, which enhances everything else you do."
    },
    {
      question: "Why do you train barefoot?",
      answer: "Your feet are your foundation. Shoes mask problems and prevent your feet from doing their job properly. Training barefoot lets you feel the ground, activate stabilizing muscles, and build real stability from the ground up. It's not about being trendy-it's about developing foot function that supports everything else. You'll develop better balance, proprioception, and movement quality. Many clients find their foot pain, knee issues, or back problems improve once their feet start working properly."
    },
    {
      question: "How often should I do Movement Training sessions?",
      answer: "Frequency depends on your goals and situation. Many clients come 2-3 times per week initially to establish new patterns, then reduce to weekly or bi-weekly as they develop independence. Some people do intensive periods of regular sessions, then maintain with periodic tune-ups. We'll discuss what makes sense for your schedule, goals, and budget. The key is consistency-regular practice helps new patterns stick."
    },
    {
      question: "Will I get exercises to do at home?",
      answer: "Yes. Each session includes practices you can do independently. These aren't generic exercises-they're specific movements tailored to what your body needs. You'll learn why you're doing them and how to progress them. The goal is building independence, not dependency. Most clients find the home practices become part of their daily routine because they feel good and make a noticeable difference."
    }
  ];

  const movementServices = [
    {
      title: 'Mobility Training',
      url: '/services/mobility-training',
      description: 'Restore natural range of motion and move with ease in all directions.'
    },
    {
      title: 'Balance Training',
      url: '/services/balance-training',
      description: 'Improve stability, coordination, and confidence in your movement.'
    },
    {
      title: 'Core Strengthening',
      url: '/services/core-strengthening',
      description: 'Build functional core strength that supports every movement you make.'
    },
    {
      title: 'Breathing & Core Training',
      url: '/services/breathing-core',
      description: 'Master breath mechanics and integrate breathing with core function.'
    },
    {
      title: 'Posture Correction',
      url: '/services/posture-correction',
      description: 'Develop natural, effortless posture that supports your structure.'
    },
    {
      title: 'Movement Screening',
      url: '/services/movement-screening',
      description: 'Comprehensive assessment to identify movement limitations and asymmetries.'
    },
    {
      title: 'Active Aging',
      url: '/services/active-aging',
      description: 'Stay strong, mobile, and independent as you age gracefully.'
    },
    {
      title: 'Desk Worker Wellness',
      url: '/services/desk-worker-wellness',
      description: 'Counter the effects of prolonged sitting and screen time.'
    },
    {
      title: 'Athletic Performance',
      url: '/services/athletic-performance',
      description: 'Enhance power, efficiency, and resilience for any sport.'
    },
    {
      title: 'Sports Injury Prevention',
      url: '/services/sports-injury-prevention',
      description: 'Build resilience and reduce injury risk through better movement.'
    },
    {
      title: 'Golf Performance',
      url: '/services/golf-performance',
      description: 'Improve your swing mechanics, power, and consistency.'
    },
    {
      title: 'Climbers',
      url: '/services/climbers',
      description: 'Optimize movement efficiency and prevent climbing-specific injuries.'
    },
    {
      title: 'Cyclists & Runners',
      url: '/services/cyclists-runners',
      description: 'Improve biomechanics and endurance for cycling and running.'
    }
  ];

  const structuredData = [
    getBreadcrumbSchema(breadcrumbs),
    getFAQSchema(faqs)
  ];

  return (
    <PageLayout>
      <SEO
        title="Movement Training Santa Cruz | Mobility, Balance & Functional Fitness"
        description="Expert movement training in Santa Cruz. Improve mobility, balance, core strength, posture, and athletic performance through personalized movement education and coaching."
        keywords="movement training, mobility training, balance training, core strengthening, functional fitness, movement education, Santa Cruz personal training"
        structuredData={structuredData}
      />

      <PageHero
        imageSrc="/training-hero.jpg"
        title="Movement Training"
        subtitle="Move better, feel better, perform better"
        alt="Movement training hub for functional movement education and movement quality improvement in Santa Cruz"
      />


      <div className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Rediscover How Good Movement Can Feel
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Movement is your body's native language. When you move well, everything feels easier-whether you're reaching for something on a high shelf, getting up from the floor, hiking a trail, or performing in your sport. But most of us have lost touch with our natural movement capacity, accumulating restrictions, compensations, and inefficient patterns over years of modern living.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Movement Training at Rock Your Body isn't about copying exercises from a screen or grinding through generic workout routines. It's about rediscovering your body's innate intelligence and relearning how to move with efficiency, ease, and power. Through personalized coaching and hands-on guidance, you'll develop movement skills that translate directly into your daily life and activities.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Whether you want to eliminate pain, enhance athletic performance, prevent injury, or simply move through life with more confidence and capability, our movement training provides the foundation. You'll learn to sense what your body is doing, understand why certain patterns create problems, and develop new strategies that work better.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              What Makes Our Movement Training Different
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Unlike conventional personal training that focuses on muscle isolation and repetitive exercises, our movement training emphasizes integration, variability, and functional transfer. We're not interested in how much weight you can lift in a controlled gym environment-we care about how well you move in real life.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Every session is tailored to your unique body, goals, and challenges. We start by assessing your current movement patterns, identifying restrictions and compensations, then design practices that address your specific needs. You might work on breathing mechanics one day, hip mobility another, and full-body integration the next-whatever your body needs most.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              We draw from diverse movement disciplines-developmental patterns, natural movement, athletic training, somatic practices, and functional biomechanics-to create a rich, effective approach. The goal isn't to make you dependent on us, but to give you tools and understanding you can use independently for life.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Core Principles of Effective Movement
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Good movement starts with awareness. You can't change what you can't feel. We help you develop refined body sense-the ability to notice what you're actually doing, not what you think you're doing. This awareness is the foundation for all lasting change.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              From there, we focus on fundamental patterns that underlie all human movement: breathing, core control, hip function, shoulder organization, foot stability, and spinal articulation. Master these basics and everything else becomes easier. Skip them and you'll struggle with compensation patterns no matter how much you train.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              We also emphasize variability and adaptability. Your body needs exposure to diverse movement challenges to develop true resilience and capability. We'll explore different positions, speeds, load conditions, and environments to build robust movement skills that serve you anywhere.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              The Movement Education Process
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Your movement journey begins with assessment. We observe how you move through basic patterns, identify limitations and compensations, and discuss your goals and challenges. This gives us a clear starting point and helps us design your personalized program.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              In sessions, you'll receive hands-on guidance and coaching as you explore new movement patterns. We might use props, gravity variations, or specific constraints to help your nervous system discover better options. The atmosphere is exploratory and curious rather than demanding or punishing-we're investigating possibilities, not grinding through reps.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Between sessions, you'll practice key patterns on your own, integrating improvements into your daily movement. We provide clear practices you can do at home, along with ongoing support and adjustment as you progress. The real work happens in how you move throughout your day, not just during our sessions.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              The Role of Awareness in Movement
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Awareness is the foundation of all movement improvement. You can't change what you can't feel. Most people move through life with minimal body awareness-they don't notice their patterns until pain or limitation forces attention. Movement Education develops refined proprioception and interoception-the ability to sense your body's position, movement, and internal state.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              As your awareness develops, you begin noticing things you never felt before: how you're holding tension, where you're compensating, how your breathing affects your movement, where you're stable and where you're not. This awareness becomes your guide for making better movement choices throughout your day. You start catching yourself before patterns become problems.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              This isn't about constant self-monitoring or perfectionism-it's about developing a relationship with your body where you can sense what's happening and respond appropriately. Many clients describe feeling more "at home" in their bodies, more connected, more present. This embodied awareness is a skill that serves you for life.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Building Movement Capacity Safely
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Safety is paramount in Movement Education. We never push beyond what your body is ready for. Instead, we create conditions where your nervous system can safely explore new movement possibilities. This might mean starting with simpler patterns, using props for support, or working in positions that reduce load while you develop capacity.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              We respect injuries, limitations, and your body's signals. If something doesn't feel right, we adjust. The goal isn't to force your body into positions-it's to help your body discover better options naturally. This patient, respectful approach builds trust between you and your body, which is essential for lasting change.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Many people come to us after injuring themselves trying to push through limitations or force their bodies into positions they weren't ready for. Our approach is different: we build capacity progressively, ensuring each step is solid before moving to the next. This might feel slower initially, but it produces better, safer, more lasting results.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Integration with Structural Work
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Movement Education works powerfully on its own, but it's even more effective when combined with Structural Integration. Here's why: Structural Integration releases fascial restrictions and improves alignment, creating space for better movement. Movement Education teaches you how to use that space effectively and maintain those improvements.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Without movement education, structural changes can fade as old movement patterns pull your body back into familiar shapes. Without structural work, movement education can feel like trying to build on a shaky foundation. Together, they create lasting transformation: better structure supports better movement, and better movement maintains better structure.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Many clients do both simultaneously-structural sessions to optimize alignment, movement sessions to develop new patterns. Others alternate between periods focused on structure and periods focused on movement. We'll discuss what combination makes sense for your goals and situation.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Who Movement Training Helps
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Our movement training serves anyone wanting to improve their movement quality and capacity. Athletes use it to enhance performance and prevent injury. People recovering from injuries use it to rebuild function safely. Older adults use it to maintain independence and vitality. Desk workers use it to counter the effects of prolonged sitting.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              If you're dealing with chronic pain, movement training often provides the missing piece-teaching you how to move in ways that support healing rather than perpetuating problems. If you're already active but feeling limited, it can unlock new levels of capability. If you've never considered yourself "athletic," it can help you discover what your body can really do.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              The common thread? A genuine interest in moving better. If you're curious about your body, willing to explore, and ready to invest in long-term improvement rather than quick fixes, this work is for you. Movement Education isn't about becoming a movement expert-it's about developing practical skills that make your daily life easier and more enjoyable.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
              Movement Training Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {movementServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.url}
                  className="block bg-white rounded-xl p-6 shadow-sm border-2 border-neutralLight hover:border-accent transition-all duration-200 hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutralDark/70 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 text-accent font-semibold flex items-center">
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
              Frequently Asked Questions About Movement Training
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFAQ === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden border-2 border-neutralLight hover:border-accent/30 transition-colors"
                  >
                    <button
                      onClick={() => setOpenFAQ(isOpen ? null : index)}
                      className="w-full text-left p-6 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      <h3 className="text-xl font-semibold text-primary pr-8">
                        {faq.question}
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
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-sage/5 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Ready to Transform Your Movement?
            </h2>
            <p className="text-lg text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a free consultation to explore your movement goals and discover which training approach is right for you.
            </p>
            <Link
              to="/consult"
              className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
            >
              Book Free Consultation
            </Link>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default MovementTrainingHub;
