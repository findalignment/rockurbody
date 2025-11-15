import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema } from '../utils/structuredData';

function SportsPerformanceHub() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Sports Performance', url: '/sports-performance' }
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

  return (
    <PageLayout>
      <SEO
        title="Sports Performance Training Santa Cruz | Athletic Enhancement"
        description="Elite sports performance training in Santa Cruz. Improve biomechanics, prevent injuries, and enhance athletic performance for golf, climbing, cycling, running, surfing, and more."
        keywords="sports performance, athletic training, golf performance, climbing training, cycling coaching, running biomechanics, injury prevention, Santa Cruz sports training"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
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
              Who This Helps
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Our sports performance work serves athletes at all levels—from weekend warriors to competitive athletes to professionals. If you're dealing with recurring injuries, feeling stuck at a performance plateau, or simply wanting to optimize your movement quality, this work can help.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              We work with golfers wanting more power and consistency, climbers dealing with shoulder or finger issues, cyclists and runners optimizing biomechanics, surfers improving paddle strength and wave performance, and athletes from every sport imaginable. The principles of good structure and movement quality are universal, even as we tailor the application to your specific needs.
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

