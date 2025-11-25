import { Link } from 'react-router-dom';
import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { getBreadcrumbSchema, getFAQSchema } from '../utils/structuredData';

function InjuryRecoveryHub() {
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Injury Recovery', url: '/injury-recovery' }
  ];

  const faqs = [
    {
      question: "How is your injury recovery approach different from physical therapy?",
      answer: "Physical therapy typically focuses on strengthening and rehabilitating the injured area. Our approach addresses the entire structural and movement context that contributed to the injury. We work with fascia throughout your body to release restrictions and improve alignment, not just strengthen specific muscles. We also teach movement patterns that support healing rather than perpetuating problems. Many clients find our work complements physical therapy, addressing aspects that PT doesn't cover."
    },
    {
      question: "Can you help with injuries from car accidents or whiplash?",
      answer: "Yes. Whiplash and car accident injuries often involve fascial restrictions and compensation patterns throughout the body, not just at the injury site. Structural Integration is particularly effective for these injuries because we address the whole-body patterns that develop after trauma. We work carefully around acute injuries, respecting healing timelines, then progressively restore function as you heal. Many clients recover more completely when structural work is part of their recovery."
    },
    {
      question: "How long does injury recovery take?",
      answer: "Recovery time depends on the injury, how long you've had it, and how quickly your body responds. Many people see significant improvement within 6-12 sessions, though complex or long-standing injuries may take longer. We work progressively, respecting your body's healing process and never pushing beyond what's safe. The goal is complete recovery, not just symptom management, which may take time but produces better long-term results."
    },
    {
      question: "Will this work if I've already had surgery for my injury?",
      answer: "Yes. Post-surgical recovery often involves scar tissue, fascial restrictions, and compensation patterns that can limit function and create ongoing problems. Structural Integration works with scar tissue and releases restrictions throughout your body. We respect surgical sites and work carefully around them, addressing the broader patterns that affect your recovery. Many clients find structural work helps them recover more fully from surgery than they would with rehabilitation alone."
    },
    {
      question: "Can I do this work while still seeing my doctor or physical therapist?",
      answer: "Absolutely. Our work complements medical care and physical therapy. Many healthcare providers refer patients to us specifically for the structural and fascial work that enhances their treatment. We're happy to coordinate with your medical team and work within any necessary limitations. The key is that we're addressing different aspects of recovery-structure and movement patterns-that other treatments may not address."
    },
    {
      question: "What if my injury is preventing me from being active?",
      answer: "That's exactly what we address. Our work helps restore function so you can return to activity safely. We don't just manage symptoms-we address the structural and movement patterns that limit your activity. As you recover, we progressively restore movement capacity and teach you how to move in ways that support healing. Many clients find they can return to activities they thought were lost, often moving better than before their injury."
    }
  ];

  const injuryServices = [
    {
      title: 'Injury Recovery Services',
      url: '/services/injury-recovery',
      description: 'Comprehensive approach to recovering from injuries and preventing recurrence.'
    },
    {
      title: 'Rotator Cuff Injury',
      url: '/services/rotator-cuff-injury',
      description: 'Restore shoulder function and eliminate pain from rotator cuff issues.'
    },
    {
      title: 'Frozen Shoulder',
      url: '/services/frozen-shoulder',
      description: 'Release adhesive capsulitis and restore natural shoulder mobility.'
    },
    {
      title: 'IT Band Syndrome',
      url: '/services/it-band-syndrome',
      description: 'Address the true causes of IT band pain beyond the band itself.'
    },
    {
      title: 'Achilles Tendonitis',
      url: '/services/achilles-tendonitis',
      description: 'Resolve Achilles pain and restore healthy tendon function.'
    },
    {
      title: 'Whiplash Recovery',
      url: '/services/whiplash-recovery',
      description: 'Release trauma patterns and restore neck function after whiplash.'
    },
    {
      title: 'Plantar Fasciitis',
      url: '/services/plantar-fasciitis',
      description: 'Eliminate heel pain by addressing foot structure and mechanics.'
    },
    {
      title: 'Sciatica Relief',
      url: '/services/sciatica-relief',
      description: 'Get to the root cause of sciatic nerve compression and pain.'
    },
    {
      title: 'Sports Injury Prevention',
      url: '/services/sports-injury-prevention',
      description: 'Build resilience and prevent future injuries through better structure.'
    },
    {
      title: 'Fascial Release',
      url: '/services/fascial-release',
      description: 'Release scar tissue and restrictions from old injuries.'
    },
    {
      title: 'Movement Screening',
      url: '/services/movement-screening',
      description: 'Identify movement compensations and injury risk factors.'
    },
    {
      title: 'Back Pain Relief',
      url: '/services/back-pain-santa-cruz',
      description: 'Address structural causes of back pain for lasting relief.'
    }
  ];

  const structuredData = [
    getBreadcrumbSchema(breadcrumbs),
    getFAQSchema(faqs)
  ];

  return (
    <PageLayout>
      <SEO
        title="Injury Recovery Santa Cruz | Post-Injury Rehabilitation"
        description="Expert injury recovery in Santa Cruz. Structural Integration and Movement Education for rotator cuff, frozen shoulder, IT band, Achilles, whiplash, and more. Return stronger than before."
        keywords="injury recovery, rehabilitation, rotator cuff injury, frozen shoulder, IT band syndrome, Achilles tendonitis, whiplash recovery, sports injury, Santa Cruz rehab"
        structuredData={structuredData}
      />

      <PageHero
        imageSrc="/services-hero.jpg"
        title="Injury Recovery"
        subtitle="Recover completely, return stronger"
        alt="Injury recovery and rehabilitation hub for comprehensive sports injury treatment in Santa Cruz"
      />


      <div className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Recovery Beyond Symptom Management
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Injury recovery shouldn't just mean "getting back to normal." Most conventional rehabilitation focuses on the injured tissue in isolation-strengthening specific muscles, reducing local inflammation, managing pain until symptoms subside. But this approach misses the bigger picture: why did you get injured in the first place? What patterns set you up for that injury? And how can you return not just to your previous state, but to something better?
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              At Rock Your Body, injury recovery means more than treating symptoms. We investigate the structural and movement factors that contributed to your injury. We address compensations throughout your body, not just at the injury site. We restore optimal function and build resilience against re-injury. The goal isn't just recovery-it's coming back stronger, more balanced, and less vulnerable than before.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Whether you're recovering from a sports injury, car accident, surgical procedure, or chronic overuse pattern, our approach combines Structural Integration to address fascial restrictions and alignment issues, with Movement Education to retrain dysfunctional patterns and build robust function. We work with your body's natural healing capacity, supporting complete recovery.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Why Injuries Don't Happen in Isolation
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Your rotator cuff didn't tear randomly-it had been compensating for restrictions elsewhere in your shoulder girdle, gradually weakening under abnormal stress. Your IT band didn't suddenly start hurting-it had been working overtime to stabilize a hip that wasn't functioning properly. Your Achilles tendonitis didn't appear from nowhere-it developed as your foot and ankle mechanics deteriorated over time.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Most injuries are the predictable outcome of accumulated structural imbalances and movement compensations. Something in your body wasn't working optimally, so other structures took up the slack. Eventually, those compensating structures break down under excessive demand. If you only treat the injured tissue without addressing why it was overloaded, you're setting yourself up for re-injury or problems elsewhere.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              This is where our whole-body, structural approach excels. We don't just work on your injured shoulder, knee, or back-we investigate your entire structure and movement patterns. We find and release the restrictions, imbalances, and compensations that created excessive stress on the injured area. We restore balanced function throughout your body, not just local symptom relief.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              The Recovery Process
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Recovery begins with comprehensive assessment. We evaluate not just your injury, but your entire structural and movement pattern. How is your body compensating? What restrictions exist throughout your structure? What movement habits contributed to the injury? This investigation reveals the complete picture and guides our approach.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              In early stages of recovery, we work gently to support your body's healing process. Structural Integration can reduce inflammation, improve circulation, and release compensatory tension that might be slowing recovery. We address areas away from the acute injury that are contributing to the problem, preparing your structure for more direct work as healing progresses.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              As you heal, we progressively restore function through hands-on structural work and movement re-education. You'll learn to move in ways that support healing rather than re-aggravating your injury. We build balanced strength and mobility throughout your body, not just in the injured area. The pace is individually tailored-we never push beyond what your body is ready for.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Finally, we focus on building resilience and preventing re-injury. You'll develop movement patterns that support healthy function rather than creating future problems. You'll understand your body better and know how to maintain the improvements we've created together. Many clients discover they move better after recovery than they did before their injury.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Common Injury Patterns We Address
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Shoulder injuries-rotator cuff tears, frozen shoulder, impingement-often stem from restrictions in the ribcage, neck, and spine that limit natural shoulder mechanics. We restore mobility throughout the shoulder girdle complex, not just the shoulder itself.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Lower extremity injuries-IT band syndrome, Achilles tendonitis, plantar fasciitis-typically involve the entire chain from low back through foot. We address hip function, pelvic alignment, and foot mechanics to eliminate the patterns causing overload.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Spinal injuries-whiplash, disc issues, chronic back pain-require addressing the entire structural context. We work with fascia throughout your body to reduce strain on vulnerable spinal tissues and restore balanced support.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Whatever your specific injury, we treat it within the context of your complete structure and movement. This comprehensive approach produces better outcomes than isolated injury-site treatment.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              The Role of Fascia in Injury Recovery
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Injuries don't just affect the injured tissue-they create fascial restrictions and compensation patterns throughout your body. When you injure your shoulder, your body compensates by using your neck, back, and ribs differently. When you injure your knee, your hip, pelvis, and foot adapt. These compensations can persist long after the original injury heals, creating ongoing problems.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Structural Integration addresses these fascial restrictions and compensation patterns. We release scar tissue, improve fascial mobility around injured areas, and restore balanced function throughout your body. This comprehensive approach supports complete recovery, not just healing of the injured tissue. Many clients discover that addressing these broader patterns resolves problems they thought were permanent.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Fascial work also supports the healing process itself. Improved circulation, reduced tension, and better alignment create conditions that support tissue healing. We work carefully around acute injuries, respecting healing timelines, then progressively address restrictions as you heal. This approach often accelerates recovery and produces better outcomes than isolated injury-site treatment.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Preventing Re-Injury
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              True recovery means not just healing from your injury, but preventing it from happening again. This requires addressing why you got injured in the first place. Was it a structural imbalance? A movement compensation? An accumulated pattern that finally broke down? We investigate these factors and address them systematically.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Through Structural Integration, we release the restrictions and imbalances that created excessive stress on the injured area. Through Movement Education, we teach you movement patterns that support healthy function rather than creating problems. Together, these create resilience-not just the ability to withstand stress, but the capacity to move in ways that prevent future injuries.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Many clients find they move better after recovery than they did before their injury. The injury forced attention to patterns that needed addressing anyway. By addressing these comprehensively, we don't just restore function-we optimize it. You return to activity not just healed, but improved.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Working with Your Medical Team
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Our injury recovery work complements medical care, physical therapy, and other treatments you may be receiving. We're happy to communicate with your healthcare providers and coordinate our approach with your overall treatment plan. Many physicians, surgeons, and physical therapists refer patients to us specifically for the structural and fascial work that enhances their treatment.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              We respect appropriate healing timelines and never push your body beyond what's safe. If you're in acute injury stages or post-surgical recovery, we'll work conservatively and progressively. Our goal is supporting your body's healing process, not forcing change before you're ready. We'll adapt our approach to your specific situation and recovery stage.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              The combination of medical care, physical therapy, and structural work often produces the best outcomes. Each addresses different aspects of recovery: medical care manages the injury itself, physical therapy strengthens and rehabilitates, and structural work addresses the broader patterns that affect recovery and function. Together, they support complete healing.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
              Injury Recovery Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {injuryServices.map((service, index) => (
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
              Frequently Asked Questions About Injury Recovery
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
              Ready to Recover Fully?
            </h2>
            <p className="text-lg text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Book a free consultation to discuss your injury and discover how our approach can support complete recovery.
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

export default InjuryRecoveryHub;
