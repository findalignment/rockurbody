import { Link } from 'react-router-dom';
import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema, getFAQSchema } from '../utils/structuredData';

function PainReliefHub() {
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Pain Relief', url: '/pain-relief' }
  ];

  const faqs = [
    {
      question: "How long does it take to see results from pain relief work?",
      answer: "Many clients notice immediate improvements in comfort and ease after their first session, but lasting pain relief typically develops over a series of sessions as we systematically address the underlying structural patterns. Most people experience significant pain reduction within 4-6 sessions, with continued improvement as the work progresses. Chronic pain that's been present for years may take longer to fully resolve, but you should see meaningful progress throughout the process."
    },
    {
      question: "Will this work if I've already tried physical therapy, chiropractic, or massage?",
      answer: "Yes. Our approach is fundamentally different from these modalities. Physical therapy typically focuses on strengthening and rehabilitating injured areas. Chiropractic adjusts bones. Massage relaxes muscles. Structural Integration works with the fascial system to reorganize your entire structure, addressing the root causes of pain rather than symptoms. Many clients come to us after other treatments provided temporary relief but didn't solve the underlying problem. Our whole-body, systematic approach often succeeds where isolated treatments haven't."
    },
    {
      question: "Does Structural Integration hurt?",
      answer: "The work involves pressure and sensation as we release restricted tissue, but it shouldn't be painful. We work at your edge—the boundary between comfort and discomfort—inviting change without forcing it. You're always in control and can ask us to adjust pressure or approach. The sensation is often described as intense stretching, melting, or releasing rather than pain. Many clients find the work deeply satisfying as they feel restrictions letting go."
    },
    {
      question: "What if my pain is from an old injury or surgery?",
      answer: "Old injuries and surgeries often create lasting fascial restrictions and compensation patterns that contribute to ongoing pain. Structural Integration is particularly effective for addressing these issues. We work with scar tissue, release restrictions from old injuries, and help your body reorganize around better patterns. Even injuries from years ago can be improved through systematic structural work. We'll work carefully around surgical sites and respect any medical limitations."
    },
    {
      question: "Can I continue other treatments while doing this work?",
      answer: "Absolutely. Our work complements medical care, physical therapy, and other treatments. Many healthcare providers refer patients to us specifically for the structural and fascial work that enhances their treatment. We're happy to coordinate with your medical team and work within any necessary limitations. The key is that we're addressing different aspects of your pain—structure and movement patterns—that other treatments may not address."
    },
    {
      question: "How many sessions will I need for pain relief?",
      answer: "This depends on your specific situation—how long you've had pain, how complex your structural patterns are, and how quickly your body responds. Many people find significant relief within 6-12 sessions, though some complex cases may require more. We typically recommend starting with a series (like The Reset or Hip Series) to address foundational issues, then continuing with additional sessions as needed. We'll discuss your specific needs during your initial consultation."
    }
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

  // Combine breadcrumb and FAQ schemas
  const structuredData = [
    getBreadcrumbSchema(breadcrumbs),
    getFAQSchema(faqs)
  ];

  return (
    <PageLayout>
      <SEO
        title="Pain Relief Santa Cruz | Chronic Pain Treatment & Solutions"
        description="Comprehensive pain relief solutions in Santa Cruz. Structural Integration and Movement Education for back pain, neck pain, shoulder pain, sciatica, and more. Get to the root cause."
        keywords="pain relief, chronic pain treatment, back pain relief, neck pain treatment, shoulder pain, sciatica relief, Santa Cruz pain management"
        structuredData={structuredData}
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
              Understanding Pain Patterns
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Pain patterns follow predictable rules. When one area of your body isn't functioning optimally, other areas compensate. Over time, these compensations create their own problems. Your tight hip forces your lower back to work harder, leading to back pain. Your forward head posture from desk work creates neck tension and headaches. Your collapsed arch affects your entire kinetic chain, contributing to knee, hip, and back issues.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Understanding these patterns is crucial for effective pain relief. We don't just work where you feel pain—we investigate the entire structural and movement context. By addressing the root causes throughout your body, we eliminate the patterns that create pain, not just manage symptoms at the site of discomfort.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              This systemic approach is why our work produces lasting results. When we release the fascial restrictions in your hip, your back pain decreases because your back no longer has to compensate. When we improve your foot mechanics, your knee pain resolves because forces transfer properly. When we address your ribcage restrictions, your shoulder pain disappears because your shoulder can move naturally again.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              The Science Behind Structural Pain Relief
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Fascia—the connective tissue network throughout your body—plays a crucial role in pain. When fascia becomes restricted, dehydrated, or dense, it creates tension, limits movement, and pulls structures out of alignment. These restrictions can compress nerves, create abnormal joint loading, and force muscles to work inefficiently, all contributing to pain.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Structural Integration works directly with fascia to restore its natural properties: mobility, hydration, and resilience. Through specific manual techniques, we release restrictions, improve fascial glide, and reorganize your structure around better alignment. This isn't just temporary relief—it's structural change that persists because your tissue itself has changed.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Research shows that fascial restrictions can persist long after injuries heal, creating ongoing pain and dysfunction. By addressing these restrictions systematically, we help your body return to optimal function. The nervous system also plays a role—chronic pain often involves sensitized nerves. Our work helps regulate the nervous system, reducing pain sensitivity and restoring normal sensation.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Movement Patterns and Pain
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              How you move matters enormously for pain. Dysfunctional movement patterns create excessive stress on vulnerable tissues, leading to pain and injury. Even if we release structural restrictions, if you continue moving in ways that create problems, pain will return. This is why Movement Education is essential for lasting pain relief.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              We teach you to recognize and change movement patterns that contribute to your pain. You'll learn to move in ways that support your structure rather than undermining it. This might involve changing how you sit, stand, walk, lift, or perform daily activities. These changes ensure that the structural improvements we create persist and continue to support pain-free function.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Many clients discover that simple changes in how they move eliminate pain that seemed mysterious or persistent. When you learn to engage your core properly, your back pain disappears. When you improve your breathing mechanics, your neck tension releases. When you restore hip function, your knee pain resolves. Movement education gives you tools to maintain your improvements independently.
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
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              People dealing with pain from old injuries, surgeries, repetitive strain, postural issues, or unknown causes all benefit from our structural approach. We don't need a specific diagnosis to help—we work with your body's structure and movement patterns, regardless of what medical labels have been applied. If you're experiencing pain and ready to address its root causes, we can help.
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

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
              Frequently Asked Questions About Pain Relief
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

