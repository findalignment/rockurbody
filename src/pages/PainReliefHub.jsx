import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema } from '../utils/structuredData';

function PainReliefHub() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Pain Relief', url: '/pain-relief' }
  ];

  const painConditions = [
    {
      title: 'Back Pain Relief',
      url: '/services/back-pain-santa-cruz',
      description: 'Comprehensive solutions for lower back pain, upper back tension, and chronic back discomfort.'
    },
    {
      title: 'Neck Pain Treatment',
      url: '/services/neck-pain-relief',
      description: 'Release chronic neck tension, restore mobility, and eliminate persistent neck pain.'
    },
    {
      title: 'Shoulder Pain Relief',
      url: '/services/shoulder-pain-relief',
      description: 'Address shoulder impingement, frozen shoulder, and chronic shoulder discomfort.'
    },
    {
      title: 'Hip Pain Treatment',
      url: '/services/hip-pain-treatment',
      description: 'Resolve hip impingement, restore natural hip mobility, and eliminate hip discomfort.'
    },
    {
      title: 'Sciatica Relief',
      url: '/services/sciatica-relief',
      description: 'Target the root causes of sciatic nerve pain and restore pain-free movement.'
    },
    {
      title: 'Knee Pain Treatment',
      url: '/services/knee-pain-treatment',
      description: 'Address knee tracking issues, patellar pain, and chronic knee discomfort.'
    },
    {
      title: 'Chronic Pain Relief',
      url: '/services/chronic-pain-relief',
      description: 'Long-term solutions for persistent pain patterns throughout the body.'
    },
    {
      title: 'TMJ Relief',
      url: '/services/tmj-relief',
      description: 'Release jaw tension, improve bite alignment, and eliminate TMJ dysfunction.'
    },
    {
      title: 'Plantar Fasciitis',
      url: '/services/plantar-fasciitis',
      description: 'Resolve heel pain and restore natural foot function from the ground up.'
    },
    {
      title: 'Headache & Migraine Relief',
      url: '/services/headache-migraine-relief',
      description: 'Address structural and fascial contributions to chronic headaches and migraines.'
    },
    {
      title: 'Bunion & Foot Pain',
      url: '/services/bunion-foot-pain',
      description: 'Improve foot alignment and reduce pain from bunions and foot dysfunction.'
    },
    {
      title: 'Thoracic Outlet Syndrome',
      url: '/services/thoracic-outlet-syndrome',
      description: 'Release compression affecting nerves and blood vessels in the shoulder girdle.'
    }
  ];

  return (
    <PageLayout>
      <SEO
        title="Pain Relief Santa Cruz | Chronic Pain Treatment & Solutions"
        description="Comprehensive pain relief solutions in Santa Cruz. Structural Integration and Movement Education for back pain, neck pain, shoulder pain, sciatica, and more. Get to the root cause."
        keywords="pain relief, chronic pain treatment, back pain relief, neck pain treatment, shoulder pain, sciatica relief, Santa Cruz pain management"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />

      <PageHero
        imageSrc="/services-hero.jpg"
        title="Pain Relief Solutions"
        subtitle="Address the root cause, not just symptoms"
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Lasting Relief from Chronic Pain
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Pain is your body's way of telling you something needs attention. But most conventional approaches only address symptoms—prescribing medications, injections, or surgeries that provide temporary relief without solving the underlying problem. What if there was a better way?
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              At Rock Your Body, we take a fundamentally different approach to pain relief. Rather than chasing symptoms, we investigate the structural and movement patterns that create pain in the first place. Through Structural Integration and Movement Education, we help your body reorganize itself around better alignment, releasing chronic tension and restoring natural, pain-free function.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Your pain didn't appear overnight—it developed over months or years as compensation patterns accumulated. Similarly, lasting relief requires addressing these patterns systematically. Our work targets the fascial restrictions, structural misalignments, and dysfunctional movement habits that keep you stuck in chronic pain cycles.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Why Traditional Pain Treatment Falls Short
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Most pain treatment focuses on the location where you feel pain. But the source of your discomfort is often somewhere else entirely. Your tight hip might be causing your knee pain. Your jaw tension might be contributing to your headaches. Your collapsed arch might be the reason for your back pain.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              This is where Structural Integration excels. By working with the fascial system—the connective tissue network that holds your entire body together—we can release restrictions throughout your structure, not just at the site of pain. Combined with Movement Education to retrain dysfunctional patterns, this approach creates lasting change rather than temporary relief.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Our Approach to Pain Relief
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              We begin with a comprehensive assessment of your structure and movement. Where are you holding tension? How is your body compensating? What patterns are contributing to your pain? This investigation guides our hands-on work and movement education.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Structural Integration sessions use specific manual techniques to release fascial restrictions, improve alignment, and restore balance throughout your body. You'll feel changes immediately—greater ease, more space, reduced pain—but the real transformation happens as your nervous system integrates these improvements into your daily movement.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Movement Education teaches you how to move in ways that support your structure rather than undermining it. You'll learn to recognize and interrupt old patterns, replacing them with more efficient, pain-free movement. This ensures your improvements last long after our sessions end.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              What Makes This Work Different
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Unlike massage, which focuses on muscles, we work with fascia—the connective tissue that creates your structure. Unlike physical therapy, which often treats injuries in isolation, we address your body as an integrated system. Unlike chiropractic, which adjusts bones, we release the soft tissue restrictions that pull bones out of alignment.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              The result? Changes that actually stick. Your body learns to hold itself in better alignment. Pain decreases not because we've masked it, but because we've addressed its cause. Movement becomes easier, more efficient, and ultimately pain-free.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Who This Helps
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Our pain relief approach works for anyone dealing with chronic pain—whether you've been suffering for months or decades. It's particularly effective for people who've tried conventional treatments without lasting success. If you're tired of temporary fixes and ready for real change, this work can help.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              We work with active individuals who want to stay moving, older adults looking to maintain independence, desk workers battling postural pain, athletes recovering from injury, and anyone who simply wants to feel better in their body. Whatever your pain story, we can help you write a better ending.
            </p>
          </div>

          {/* Pain Conditions Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
              Conditions We Treat
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {painConditions.map((condition, index) => (
                <Link
                  key={index}
                  to={condition.url}
                  className="block bg-white rounded-xl p-6 shadow-sm border-2 border-neutralLight hover:border-accent transition-all duration-200 hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {condition.title}
                  </h3>
                  <p className="text-neutralDark/70 leading-relaxed">
                    {condition.description}
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
              Ready to Address Your Pain at Its Source?
            </h2>
            <p className="text-lg text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Book a free consultation to discuss your pain and discover how Structural Integration and Movement Education can help you find lasting relief.
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

export default PainReliefHub;

