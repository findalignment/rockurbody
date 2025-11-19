import { Link } from 'react-router-dom';
import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema, getFAQSchema } from '../utils/structuredData';

function SportsPerformanceHub() {
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Sports Performance', url: '/sports-performance' }
  ];

  const faqs = [
    {
      question: "How can Structural Integration improve my athletic performance?",
      answer: "Structural Integration optimizes your body's alignment and fascial system, which directly impacts performance. When your structure is properly aligned, forces transfer efficiently through your body, reducing energy waste. You'll generate more power with less effort, move more fluidly, and reduce injury risk. Many athletes report feeling 'faster,' 'lighter,' or 'more connected' after structural work. The improvements persist because your structure itself has changed, not just temporary performance enhancement."
    },
    {
      question: "Will this interfere with my current training program?",
      answer: "No, our work complements your training. Structural Integration sessions are typically spaced weekly, so they don't disrupt your training schedule. Movement Education can be integrated into your existing routine or done on recovery days. Many athletes find that structural and movement work enhances their training—they move better, recover faster, and perform better. We'll work around your competition schedule and training cycles."
    },
    {
      question: "How long before I see performance improvements?",
      answer: "Many athletes notice immediate improvements in movement quality and ease after their first session. Performance improvements typically develop over a series of sessions as we systematically address structural limitations. Most athletes see meaningful performance gains within 4-8 sessions, with continued improvement as the work progresses. The timeline depends on your sport, current structure, and training demands."
    },
    {
      question: "Do you work with competitive athletes?",
      answer: "Yes. I work with athletes at all levels—from weekend warriors to competitive amateurs to professionals. The principles of good structure and movement quality apply universally, though we tailor the application to your specific sport and goals. Many competitive athletes use structural work during off-seasons for comprehensive improvement, and during seasons for maintenance and injury prevention."
    },
    {
      question: "Can this help prevent sports injuries?",
      answer: "Absolutely. Most sports injuries aren't random—they're predictable outcomes of structural imbalances and movement compensations. By addressing these patterns proactively, we reduce injury risk significantly. Structural Integration releases restrictions that create excessive stress on vulnerable tissues. Movement Education teaches movement patterns that support healthy function rather than creating problems. Many athletes use this work preventively to stay healthy throughout their careers."
    },
    {
      question: "What if I'm already dealing with a sports injury?",
      answer: "Our work can help with injury recovery by addressing the structural and movement patterns that contributed to the injury. We work carefully around acute injuries, respecting healing timelines and medical limitations. As you heal, we progressively restore function and address the underlying patterns that set you up for injury. Many athletes recover faster and return stronger when structural and movement work is part of their rehabilitation."
    }
  ];

  const performanceServices = [
    {
      title: 'Athletic Performance Enhancement',
      url: '/services/athletic-performance',
      description: 'Optimize biomechanics, power, and efficiency for peak athletic performance.'
    },
    {
      title: 'Golf Performance',
      url: '/services/golf-performance',
      description: 'Improve swing mechanics, increase power, and eliminate compensations.'
    },
    {
      title: 'Climbers',
      url: '/services/climbers',
      description: 'Enhance movement efficiency and prevent climbing-specific injuries.'
    },
    {
      title: 'Cyclists & Runners',
      url: '/services/cyclists-runners',
      description: 'Optimize biomechanics for endurance and reduce overuse injuries.'
    },
    {
      title: 'Surfers Program',
      url: '/location/santa-cruz-surfers',
      description: 'Santa Cruz surfer-specific training for better performance in the water.'
    },
    {
      title: 'Sports Injury Prevention',
      url: '/services/sports-injury-prevention',
      description: 'Build resilience and reduce injury risk through structural work.'
    },
    {
      title: 'Injury Recovery Services',
      url: '/services/injury-recovery',
      description: 'Return to sport stronger and more resilient than before.'
    },
    {
      title: 'Movement Screening',
      url: '/services/movement-screening',
      description: 'Comprehensive assessment to identify limitations and asymmetries.'
    },
    {
      title: 'Core Strengthening',
      url: '/services/core-strengthening',
      description: 'Build functional core strength that transfers to athletic performance.'
    },
    {
      title: 'Mobility Training',
      url: '/services/mobility-training',
      description: 'Increase range of motion and movement quality for better performance.'
    },
    {
      title: 'Balance Training',
      url: '/services/balance-training',
      description: 'Improve stability, proprioception, and body control.'
    },
    {
      title: 'Breathing & Core Training',
      url: '/services/breathing-core',
      description: 'Master breath mechanics for optimal performance and recovery.'
    }
  ];

  const structuredData = [
    getBreadcrumbSchema(breadcrumbs),
    getFAQSchema(faqs)
  ];

  return (
    <PageLayout>
      <SEO
        title="Sports Performance Training Santa Cruz | Athletic Enhancement"
        description="Elite sports performance training in Santa Cruz. Improve biomechanics, prevent injuries, and enhance athletic performance for golf, climbing, cycling, running, surfing, and more."
        keywords="sports performance, athletic training, golf performance, climbing training, cycling coaching, running biomechanics, injury prevention, Santa Cruz sports training"
        structuredData={structuredData}
      />

      <PageHero
        imageSrc="/surfers-hero.jpg"
        title="Sports Performance"
        subtitle="Move better, perform better, stay healthy"
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Unlock Your Athletic Potential
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Every athlete knows the frustration of hitting a plateau or the setback of recurring injuries. You train hard, yet improvements seem elusive. You work on strength and conditioning, yet something still feels off. The missing piece isn't more hours in the gym—it's addressing the structural and movement inefficiencies that limit your performance and resilience.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              At Rock Your Body, we approach athletic performance from a different angle. Rather than piling more training on top of dysfunctional patterns, we optimize your body's structure and movement quality first. When your body is properly aligned and moving efficiently, every ounce of strength and conditioning you build gets used effectively. You perform better with less effort and injury risk.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Our sports performance work combines Structural Integration to optimize your body's alignment and fascial system, with Movement Education to refine technique and eliminate compensations. Whether you're a competitive athlete, weekend warrior, or active individual wanting to stay healthy in your sport, we can help you move better and perform better.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Why Structure Matters for Performance
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Athletic performance isn't just about strength, endurance, or skill—it's about how efficiently your body can express those qualities. A misaligned structure creates friction, wastes energy, and increases injury risk. When your body is organized around better alignment, movement becomes more fluid, powerful, and sustainable.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Structural Integration releases the fascial restrictions that limit your range of motion, create asymmetries, and cause compensations. It reorganizes your body around better balance and alignment, so forces transfer cleanly through your structure. The result? More power, better control, and movements that feel easier and more natural.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Athletes often describe feeling "faster," "lighter," or "more connected" after structural work. They find movements that were previously difficult now come easily. They discover power they couldn't access before. This isn't about adding something new—it's about removing what was in the way.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Sport-Specific Training Approaches
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Every sport has unique demands and common injury patterns. Climbers develop specific imbalances from pulling-dominant movement. Cyclists deal with repetitive hip flexion and forward posture. Golfers need rotational power through an organized core. Runners need efficient biomechanics to handle high repetition. We tailor our work to your sport's specific requirements.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              For golfers, we focus on thoracic mobility, hip function, and sequencing for powerful, consistent swings. For climbers, we address shoulder organization, hip mobility, and full-body tension control. For cyclists and runners, we optimize pedaling or gait mechanics and address overuse patterns. For surfers, we work on rotational power, balance, and shoulder resilience.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              But we never lose sight of the whole picture. Sport-specific demands often create imbalances that need balancing work in other areas. A cyclist's tight hips might need addressing through foot and back work. A climber's shoulder issues might stem from ribcage restrictions. We treat you as a complete athlete, not just a collection of sport-specific parts.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Injury Prevention and Resilience
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Most sports injuries aren't random accidents—they're the predictable result of structural imbalances, movement compensations, and accumulated stress. That nagging shoulder pain, recurring hamstring strain, or persistent tendonitis? Your body was telling you something needed attention long before the injury occurred.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Our approach to injury prevention addresses root causes rather than symptoms. We identify and correct the structural and movement patterns that create excessive stress on vulnerable tissues. We build balanced strength and mobility throughout your body, not just in the muscles you use most. We teach you to recognize and respond to your body's signals before they become injuries.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              The result is genuine resilience—not just the ability to withstand stress, but the capacity to adapt, recover, and stay healthy over long athletic careers. Athletes who invest in structural and movement work tend to have fewer injuries, faster recovery, and longer participation in their sports.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              The Performance Enhancement Process
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              We begin with comprehensive assessment of your structure, movement quality, and sport-specific patterns. We observe you moving in your sport (when possible) and identify the limitations and compensations affecting your performance. This guides our work and helps us prioritize what will make the biggest difference.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Structural Integration sessions release restrictions and optimize alignment throughout your body. We might follow a complete series for full-body transformation or focus on specific areas relevant to your sport. The work is systematic and progressive, building toward comprehensive structural balance.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Movement Education sessions refine your technique, eliminate compensations, and develop the specific movement capacities your sport demands. We bridge the gap between structural changes and sport performance, ensuring improvements transfer directly to your athletic activities. You'll leave with practices and principles you can continue using independently.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              The Performance Edge: Efficiency and Power
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Athletic performance isn't just about strength, speed, or skill—it's about efficiency. When your body is properly aligned and moving optimally, every ounce of strength and conditioning you've built gets used effectively. You generate more power with less effort. You move faster because you're not fighting your own structure. You maintain performance longer because you're not wasting energy on compensations.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Structural Integration creates this efficiency by optimizing your body's alignment and releasing restrictions that limit power transfer. Movement Education refines your technique to eliminate wasteful compensations. Together, they create a performance edge that comes from moving better, not just training harder. Many athletes discover they can perform at higher levels with less training volume once their movement quality improves.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              This efficiency also supports recovery. When your body moves efficiently, it creates less stress and fatigue. You recover faster between training sessions and competitions. You maintain performance throughout long events. You reduce the wear and tear that accumulates over athletic careers. Better structure and movement quality don't just improve performance—they extend your athletic lifespan.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Sport-Specific Applications
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              While the principles of good structure and movement are universal, each sport has unique demands and common injury patterns. Golfers need rotational power through an organized core and mobile thoracic spine. Climbers need shoulder stability, hip mobility, and full-body tension control. Cyclists need efficient pedaling mechanics and balanced hip function. Runners need optimal gait patterns and shock absorption. Surfers need rotational power, paddle efficiency, and balance.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              We tailor our work to your sport's specific requirements while maintaining the whole-body perspective. A golfer's swing limitations might require addressing hip restrictions, ribcage mobility, and core organization. A climber's shoulder issues might stem from ribcage restrictions and hip limitations. A runner's knee pain might require foot and hip work. We treat you as a complete athlete, addressing sport-specific needs within the context of your entire structure.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              This sport-specific focus ensures improvements transfer directly to your performance. You'll feel changes in how you move in your sport, not just in isolated exercises. Your swing becomes more powerful. Your climbing feels more efficient. Your running becomes smoother. Your surfing improves. The work translates because we address the structural and movement patterns that actually matter for your sport.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Who This Helps
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Our sports performance work serves athletes at all levels—from weekend warriors to competitive athletes to professionals. If you're dealing with recurring injuries, feeling stuck at a performance plateau, or simply wanting to optimize your movement quality, this work can help.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              We work with golfers wanting more power and consistency, climbers dealing with shoulder or finger issues, cyclists and runners optimizing biomechanics, surfers improving paddle strength and wave performance, and athletes from every sport imaginable. The principles of good structure and movement quality are universal, even as we tailor the application to your specific needs.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Whether you're trying to break through a performance plateau, prevent recurring injuries, recover from an injury stronger than before, or simply optimize your movement for better performance, our work can help. The common thread is a commitment to improvement and a willingness to address the structural and movement foundations that support athletic performance.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
              Sports Performance Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {performanceServices.map((service, index) => (
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
              Frequently Asked Questions About Sports Performance
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
              Ready to Elevate Your Performance?
            </h2>
            <p className="text-lg text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Book a free consultation to discuss your athletic goals and discover how we can help you perform at your best.
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

export default SportsPerformanceHub;
