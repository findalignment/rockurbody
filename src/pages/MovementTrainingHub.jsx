import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema } from '../utils/structuredData';

function MovementTrainingHub() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Movement Training', url: '/movement-training' }
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

  return (
    <PageLayout>
      <SEO
        title="Movement Training Santa Cruz | Mobility, Balance & Functional Fitness"
        description="Expert movement training in Santa Cruz. Improve mobility, balance, core strength, posture, and athletic performance through personalized movement education and coaching."
        keywords="movement training, mobility training, balance training, core strengthening, functional fitness, movement education, Santa Cruz personal training"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />

      <PageHero
        imageSrc="/training-hero.jpg"
        title="Movement Training"
        subtitle="Move better, feel better, perform better"
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Rediscover How Good Movement Can Feel
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Movement is your body's native language. When you move well, everything feels easier—whether you're reaching for something on a high shelf, getting up from the floor, hiking a trail, or performing in your sport. But most of us have lost touch with our natural movement capacity, accumulating restrictions, compensations, and inefficient patterns over years of modern living.
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
              Unlike conventional personal training that focuses on muscle isolation and repetitive exercises, our movement training emphasizes integration, variability, and functional transfer. We're not interested in how much weight you can lift in a controlled gym environment—we care about how well you move in real life.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Every session is tailored to your unique body, goals, and challenges. We start by assessing your current movement patterns, identifying restrictions and compensations, then design practices that address your specific needs. You might work on breathing mechanics one day, hip mobility another, and full-body integration the next—whatever your body needs most.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              We draw from diverse movement disciplines—developmental patterns, natural movement, athletic training, somatic practices, and functional biomechanics—to create a rich, effective approach. The goal isn't to make you dependent on us, but to give you tools and understanding you can use independently for life.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Core Principles of Effective Movement
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Good movement starts with awareness. You can't change what you can't feel. We help you develop refined body sense—the ability to notice what you're actually doing, not what you think you're doing. This awareness is the foundation for all lasting change.
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
              In sessions, you'll receive hands-on guidance and coaching as you explore new movement patterns. We might use props, gravity variations, or specific constraints to help your nervous system discover better options. The atmosphere is exploratory and curious rather than demanding or punishing—we're investigating possibilities, not grinding through reps.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Between sessions, you'll practice key patterns on your own, integrating improvements into your daily movement. We provide clear practices you can do at home, along with ongoing support and adjustment as you progress. The real work happens in how you move throughout your day, not just during our sessions.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Who Movement Training Helps
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Our movement training serves anyone wanting to improve their movement quality and capacity. Athletes use it to enhance performance and prevent injury. People recovering from injuries use it to rebuild function safely. Older adults use it to maintain independence and vitality. Desk workers use it to counter the effects of prolonged sitting.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              If you're dealing with chronic pain, movement training often provides the missing piece—teaching you how to move in ways that support healing rather than perpetuating problems. If you're already active but feeling limited, it can unlock new levels of capability. If you've never considered yourself "athletic," it can help you discover what your body can really do.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              The common thread? A genuine interest in moving better. If you're curious about your body, willing to explore, and ready to invest in long-term improvement rather than quick fixes, this work is for you.
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

