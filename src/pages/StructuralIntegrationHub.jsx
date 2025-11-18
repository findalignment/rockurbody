import { Link } from 'react-router-dom';
import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema, getFAQSchema } from '../utils/structuredData';

function StructuralIntegrationHub() {
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Structural Integration', url: '/structural-integration' }
  ];

  const faqs = [
    {
      question: "What is Structural Integration and how is it different from massage?",
      answer: "Structural Integration (SI) is systematic bodywork that reorganizes your body's connective tissue (fascia) to improve alignment and function. Unlike massage, which focuses on muscles for relaxation, SI works strategically with fascia throughout your entire structure. It's not about temporary relief—it's about creating lasting structural change. SI follows a systematic protocol that addresses your body as an integrated system, while massage typically focuses on isolated areas where you feel tension."
    },
    {
      question: "How long does a Structural Integration series take?",
      answer: "The classic 12-Series typically takes 12-16 weeks, with sessions spaced about one week apart. This allows time for your body to integrate changes between sessions. Shorter series like the Hip Series (4 sessions) or The Reset (6 sessions) take proportionally less time. We can also work at a faster pace if needed, though allowing integration time between sessions generally produces better results. The timeline depends on your goals, schedule, and how quickly your body responds."
    },
    {
      question: "Will Structural Integration help with my chronic pain?",
      answer: "Yes, SI is particularly effective for chronic pain because it addresses the structural and fascial patterns that create pain, rather than just managing symptoms. Many clients with chronic back pain, neck tension, shoulder issues, hip restrictions, and other persistent problems find significant relief through SI. The work releases fascial restrictions, improves alignment, and reduces the compensations that contribute to pain. Results typically develop progressively over a series of sessions."
    },
    {
      question: "Do I need to do the full 12-Series or can I do shorter series?",
      answer: "Both options work. The 12-Series provides comprehensive transformation of your entire structure, which is ideal if you want complete structural change. Shorter series like the Hip Series or The Reset address specific areas or provide a foundation for ongoing work. Many people start with a shorter series to experience the work, then continue with additional sessions or the full 12-Series. We'll discuss what makes sense for your goals, timeline, and budget during your consultation."
    },
    {
      question: "What should I expect during a Structural Integration session?",
      answer: "SI sessions typically last 60-90 minutes. You'll wear comfortable undergarments or athletic wear. We work on a massage table and sometimes standing, depending on what your body needs. The work involves slow, precise manual techniques that engage fascial layers. You'll feel pressure and sensation as tissue releases—often described as intense stretching or melting. We work at your edge, not past it. You're always in control and can ask us to adjust. Between sessions, your body continues integrating the work, and you may notice changes in how you move, stand, or feel."
    },
    {
      question: "How long do Structural Integration results last?",
      answer: "SI creates lasting change in your tissue and alignment. Most people maintain results for years because their structure itself has changed. However, if you return to old movement habits or don't maintain your structure, some patterns can gradually return. This is why combining SI with Movement Education is powerful—movement work helps you maintain structural improvements. Many clients do periodic tune-up sessions (monthly to quarterly) to maintain their results long-term."
    }
  ];

  const siServices = [
    {
      title: 'Fascial Release',
      url: '/services/fascial-release',
      description: 'Release restrictions in the fascial network to restore natural movement and reduce pain.'
    },
    {
      title: 'Posture Correction',
      url: '/services/posture-correction',
      description: 'Realign your structure for effortless, sustainable posture.'
    },
    {
      title: 'Scoliosis Treatment',
      url: '/services/scoliosis-treatment',
      description: 'Address spinal curvature and asymmetry through structural work.'
    },
    {
      title: 'Chronic Pain Relief',
      url: '/services/chronic-pain-relief',
      description: 'Break free from persistent pain patterns through structural change.'
    },
    {
      title: 'Injury Recovery Services',
      url: '/services/injury-recovery',
      description: 'Restore function and prevent re-injury with structural integration.'
    },
    {
      title: '12-Series Program',
      url: '/programs/12-series',
      description: 'The complete Anatomy Trains protocol for full-body transformation.'
    },
    {
      title: 'Hip Series Program',
      url: '/programs/hip-series',
      description: 'Targeted four-session series focused on hip mobility and alignment.'
    },
    {
      title: 'Full Repatterning Programs',
      url: '/programs/full-repatterning-basic',
      description: 'Comprehensive programs combining SI with movement education.'
    },
    {
      title: 'What is Structural Integration?',
      url: '/gravity-structural-integration',
      description: 'Learn about this transformative approach to bodywork and alignment.'
    },
    {
      title: 'Stress & Anxiety Relief',
      url: '/services/stress-anxiety-relief',
      description: 'Release stored tension and restore nervous system regulation.'
    }
  ];

  const structuredData = [
    getBreadcrumbSchema(breadcrumbs),
    getFAQSchema(faqs)
  ];

  return (
    <PageLayout>
      <SEO
        title="Structural Integration Santa Cruz | Rolfing & Fascial Release"
        description="Expert Structural Integration (SI) in Santa Cruz. Transform your body's alignment, release chronic tension, and restore natural movement through fascial bodywork."
        keywords="structural integration, rolfing, fascial release, bodywork, myofascial release, postural alignment, Santa Cruz SI"
        structuredData={structuredData}
      />

      <PageHero
        imageSrc="/gravity-structural-integration-hero.jpg"
        title="Structural Integration"
        subtitle="Transform your body's structure, transform your life"
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              What is Structural Integration?
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Imagine your body as a tensegrity structure—a network of tension and compression elements working together to maintain shape and function. When this structure is balanced, movement is effortless, pain is absent, and you feel at home in your body. But over time, injuries, repetitive movements, postural habits, and life stress create restrictions that pull your structure out of balance.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Structural Integration (SI) is a systematic approach to reorganizing your body's connective tissue—the fascia that wraps every muscle, bone, nerve, and organ. Unlike massage, which targets muscles for relaxation, SI works strategically with fascia to improve your body's alignment in gravity. The result is lasting structural change, not just temporary relief.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Developed by Dr. Ida Rolf and refined through decades of research and practice, SI has helped thousands of people eliminate chronic pain, improve performance, recover from injury, and simply feel better in their bodies. This isn't about fixing individual problems—it's about transforming how your entire structure works together.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              How Structural Integration Works
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Fascia is everywhere in your body, forming one continuous network from head to toe. When fascia is healthy, it's mobile, hydrated, and resilient. But fascial tissue adapts to how you use your body—repetitive movements, injuries, and chronic stress can cause it to become dense, dehydrated, and restricted. These restrictions limit your movement, create pain, and pull your structure out of alignment.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              SI practitioners use hands-on techniques to restore fascial mobility and reorganize your body's structure. Working session by session through a systematic protocol, we release restrictions, improve alignment, and help your body rediscover its natural balance. Each session builds on the last, creating progressive, cumulative change.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              What makes SI unique is its focus on structural relationships. We don't just work where you feel pain—we address the entire pattern that's creating your symptoms. Your shoulder pain might require releasing your ribs, spine, and pelvis. Your knee problems might stem from restrictions in your feet and hips. SI treats your body as the integrated system it truly is.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              The Transformation Process
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Most people begin with either the 12-Series—the complete SI protocol developed by Ida Rolf—or a shorter series like our Hip Series for targeted work. Each session addresses specific layers and areas of your body, following a logical progression that systematically reorganizes your structure from surface to core.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Early sessions open and release superficial fascial layers, creating space and improving basic alignment. Middle sessions address deeper core structures and functional relationships. Later sessions integrate everything, refining your new structure and ensuring all the pieces work together harmoniously.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Throughout the process, you'll notice cumulative changes: chronic pain diminishing, movement becoming easier, breathing deepening, posture improving without conscious effort. Many clients report feeling taller, lighter, and more comfortable in their bodies. These aren't temporary effects—the changes persist because your structure itself has changed.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              What to Expect in Sessions
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              SI sessions typically last 60-90 minutes. You'll wear comfortable undergarments or athletic wear, and we'll work on a massage table or standing, depending on what your body needs. The work involves slow, precise manual techniques that engage fascial layers and restore mobility.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              The sensation is unique—neither painful nor purely relaxing. You'll feel tissue releasing, sometimes with an intense stretching or melting quality. We work at the edge of your comfort, inviting change without forcing it. Your nervous system is actively involved, learning to allow new patterns and let go of old restrictions.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Between sessions, your body continues integrating the work. You might notice changes in how you move, stand, or breathe. Some people experience temporary soreness or emotional release as old patterns dissolve. We provide guidance and support throughout your transformation process.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              The Science of Fascia and Structure
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Fascia is the connective tissue network that wraps every muscle, bone, nerve, and organ in your body, creating one continuous system from head to toe. When fascia is healthy, it's mobile, hydrated, and resilient. But fascial tissue adapts to how you use your body—repetitive movements, injuries, stress, and postural habits can cause it to become dense, dehydrated, and restricted.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              These fascial restrictions don't just limit movement—they pull your entire structure out of alignment. Your tight hip fascia might be pulling your pelvis, affecting your spine and shoulders. Your restricted ribcage fascia might be limiting your breathing and contributing to neck tension. SI works directly with fascia to restore its natural properties and reorganize your structure around better alignment.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Research in fascial science continues to reveal fascia's crucial role in movement, pain, and structural health. SI practitioners use this understanding to work systematically through your fascial system, creating changes that persist because the tissue itself has changed. This isn't temporary manipulation—it's structural reorganization.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              The 12-Series: Complete Structural Transformation
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              The 12-Series is the complete Structural Integration protocol developed by Dr. Ida Rolf. It's a systematic progression through your entire body, organized into three phases. Sessions 1-4 address superficial fascial layers—the front line, back line, lateral line, and spiral line that create your basic shape and movement patterns.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Sessions 5-8 work with deeper core structures—the deep front line, back line, and structures around your waist, spine, and head. These sessions address the core of your structure, creating space and improving alignment at the deepest levels. Sessions 9-12 integrate everything, refining your new structure and ensuring all parts work together harmoniously.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Each session builds on the previous ones, creating cumulative change. By the end of the series, your body has been systematically reorganized around better alignment. Many clients describe feeling taller, lighter, more balanced, and more at ease. Movement becomes easier, pain decreases, and you feel more comfortable in your body.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Working with Gravity
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              A central principle of Structural Integration is improving your relationship with gravity. Most people fight gravity all day—holding themselves up, bracing against collapse, tensing muscles unnecessarily. This is exhausting and creates chronic tension patterns. SI helps you work with gravity instead of against it.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              When your structure is properly aligned, gravity supports you rather than working against you. Your bones stack efficiently, your fascia provides balanced support, and you don't need excessive muscle tension to maintain posture. This creates a sense of ease, lightness, and effortlessness in how you move and hold yourself.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              This improved relationship with gravity has profound effects: reduced energy expenditure, less chronic tension, better breathing, and a sense of being more grounded and stable. Many clients report feeling "lighter" or "taller" after SI work, even though their actual height hasn't changed—their structure is simply more efficiently organized in gravity.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Who Benefits from SI
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              People seek SI for many reasons: chronic pain that hasn't responded to other treatments, recovery from injury or surgery, improved athletic performance, better posture, stress relief, or simply wanting to feel more comfortable and at ease in their bodies.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              SI is particularly effective for conditions rooted in structural imbalance: back pain, neck tension, shoulder problems, hip restrictions, scoliosis, postural dysfunction, and movement limitations. It's also powerful for athletes wanting to optimize biomechanics and prevent injury, and for anyone dealing with the accumulated effects of sedentary modern life.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Whether you're 25 or 75, athletic or sedentary, in acute pain or simply not feeling your best, SI can help. The work meets you where you are and supports your body's natural capacity for change and healing. All it requires is your willingness to participate in the transformation process. SI isn't about fixing something broken—it's about optimizing what's already there.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
              Structural Integration Services & Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {siServices.map((service, index) => (
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
              Frequently Asked Questions About Structural Integration
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
              Experience Structural Transformation
            </h2>
            <p className="text-lg text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Book a free consultation to learn how Structural Integration can transform your body's alignment and function.
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

export default StructuralIntegrationHub;

