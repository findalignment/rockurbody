import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import { getBreadcrumbSchema, getFAQSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function NeckPainRelief() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Neck Pain Relief', url: '/neck-pain-relief' }
  ];

  const faqs = [
    {
      question: "How long does it take to fix neck pain and tech neck?",
      answer: "Many clients notice immediate improvements in neck mobility and reduced tension after their first session. However, fixing tech neck and chronic neck pain typically requires 4-8 sessions as we systematically address forward head posture, release fascial restrictions, and retrain movement patterns. The structural changes we create need time to integrate, and you'll need to practice new movement patterns. Most people see significant improvement within 6-10 sessions."
    },
    {
      question: "Will this help with tension headaches and migraines?",
      answer: "Yes. Many tension headaches and some migraines are caused by neck tension, forward head posture, and fascial restrictions pulling on the skull. By releasing these restrictions and improving neck alignment, we often eliminate or significantly reduce headache frequency. Clients frequently report that their headaches disappear as their neck tension resolves. We work with the structural and fascial contributors to headaches."
    },
    {
      question: "Can I still work at my computer while doing this work?",
      answer: "Yes, but we'll teach you better ergonomics and movement patterns to support your neck. The goal isn't to stop you from working-it's to help you work in ways that don't create neck problems. We'll give you simple practices to do throughout your workday, improve your workstation setup, and teach you how to move your head and neck in ways that don't strain them. Many clients find they can work longer without pain."
    },
    {
      question: "What if I've already tried chiropractic adjustments for my neck?",
      answer: "Our approach is different. Chiropractic adjusts bones, but neck pain often involves fascial restrictions, muscle imbalances, and movement patterns that adjustments alone don't address. Structural Integration works with the connective tissue system to release restrictions throughout your neck, shoulders, and upper back. We also teach you movement patterns to maintain the improvements. Many clients come to us after chiropractic provided temporary relief but didn't solve the underlying problem."
    },
    {
      question: "Is this safe if I have a history of neck injuries or whiplash?",
      answer: "Yes, we work carefully with clients who have neck injury histories. We'll discuss your medical history during your consultation and work within any necessary limitations. Structural Integration can be particularly effective for addressing scar tissue, fascial restrictions, and compensation patterns from old injuries. We're experienced working with post-whiplash clients and will respect any medical restrictions while helping your neck heal."
    },
    {
      question: "How many sessions will I need for neck pain relief?",
      answer: "This depends on how long you've had neck pain, how severe your forward head posture is, and how quickly your body responds. Many people find significant relief within 6-10 sessions. We typically recommend starting with a series to address foundational issues, then continuing with additional sessions as needed. We'll discuss your specific needs during your initial consultation and create a plan tailored to your situation."
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Neck Pain Relief Santa Cruz | Fix Tech Neck & Tension Headaches"
        description="Relief from chronic neck pain, tech neck, and tension headaches. Structural Integration addresses root causes in Santa Cruz."
        keywords="neck pain santa cruz, tech neck, tension headaches, stiff neck, forward head posture, cervical pain"
        structuredData={[getBreadcrumbSchema(breadcrumbs), getFAQSchema(faqs)]}
      />
      
      <PageHero 
        imageSrc="/neck-pain-treatment-hero.jpg"
        title="Neck Pain Relief"
        subtitle="Free your neck, improve your posture, lose the headaches"
        alt="Structural integration treatment for neck pain relief, addressing tension, posture, and headaches in Santa Cruz"
      />


      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              That Constant Neck Tension? It's Not Normal.
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Tension at the base of your skull. Stiffness that makes it hard to check your blind spot. Headaches by the end of the day. A neck that cracks constantly but never feels better.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You massage it. You stretch it. You crack it. Maybe you've tried a chiropractor. It helps temporarily, then it comes right back.
            </p>
            <p className="text-xl text-accent font-semibold">
              That's because you're treating the symptom, not the cause.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              The Real Problem: Tech Neck
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              Forward head posture is epidemic in our screen-obsessed world. And it's destroying your neck.
            </p>

            <div className="bg-white rounded-xl p-6 mb-6">
              <p className="text-xl font-semibold text-neutralDark mb-4">
                Here's the problem:
              </p>
              <ul className="space-y-3 text-neutralDark/80">
                <li>• Your head weighs about 10-12 pounds when properly aligned</li>
                <li>• For every inch your head moves forward, it adds 10 pounds of pressure on your neck</li>
                <li>• Most people with tech neck have their head 2-3 inches forward</li>
                <li>• That's 30-40 pounds of constant strain on your neck muscles</li>
              </ul>
            </div>

            <p className="text-lg text-neutralDark/80 leading-relaxed">
              No wonder your neck is always tight. Those muscles are working overtime just to hold your head up.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Common Neck Issues I Work With
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Tech Neck / Forward Head Posture
                </h3>
                <p className="text-neutralDark/80">
                  The modern epidemic. Hours looking at screens pulls your head forward, creating massive strain. Over time, your body adapts to this bad position, making it harder to correct.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Tension Headaches
                </h3>
                <p className="text-neutralDark/80">
                  That band of pressure around your head or pain at the base of your skull? It's from tight neck muscles and fascia pulling on your skull. Fix the neck tension, lose the headaches.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Upper Trap Tension
                </h3>
                <p className="text-neutralDark/80">
                  Those muscles on top of your shoulders are rock-hard knots. They're overworking to hold up your forward head. Massage feels good but doesn't last because the underlying pattern hasn't changed.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Stiff Neck / Limited Rotation
                </h3>
                <p className="text-neutralDark/80">
                  Can't turn your head to check your blind spot? Difficulty looking over your shoulder? That's fascial restriction locking down your cervical spine.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Nerve Issues / Tingling
                </h3>
                <p className="text-neutralDark/80">
                  Tingling in your hands or arms can come from tight neck muscles compressing nerves. Not all nerve issues require surgery . many respond to releasing fascial restrictions.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              How I Fix Chronic Neck Pain
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  1. Release the Restrictions
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Free up tight front neck muscles pulling your head forward</li>
                  <li>• Release chronically overworked upper traps</li>
                  <li>• Address tight chest and shoulders contributing to forward head</li>
                  <li>• Open up restricted suboccipital muscles at base of skull</li>
                  <li>• Restore natural cervical curve</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  2. Correct the Posture
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Strengthen weak deep neck flexors</li>
                  <li>• Retrain proper head position on spine</li>
                  <li>• Address compensations throughout spine</li>
                  <li>• Improve awareness of head position</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  3. Prevent It From Coming Back
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Ergonomic setup for work and phone use</li>
                  <li>• Simple exercises to counter screen time</li>
                  <li>• Movement breaks that actually help</li>
                  <li>• Tools to maintain results long-term</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Life Looks Like Without Neck Pain
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ No more constant tension</div>
              <div>✓ Headaches disappear</div>
              <div>✓ Turn your head freely</div>
              <div>✓ Better posture without thinking about it</div>
              <div>✓ No need to crack your neck constantly</div>
              <div>✓ Work at computer without pain</div>
              <div>✓ Wake up without neck stiffness</div>
              <div>✓ Feel 10 years younger</div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <p className="text-lg text-neutralDark/80 leading-relaxed italic">
              "I had chronic neck pain and headaches for 5 years. Tried everything. After working with Rock, my headaches are gone and I can actually turn my head to check my blind spot without pain. Life-changing." . Sarah, 42, Software Engineer
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/packages" variant="outline" size="lg" fullWidth>
              View Programs
            </Button>
          </div>

          {/* FAQ Section */}
          <FAQSection 
            faqs={faqs} 
            title="Frequently Asked Questions About Neck Pain Relief"
          />
          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Pain Relief Hub
              </Link>
              <Link to="/chronic-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Chronic Pain Relief
              </Link>
              <Link to="/headache-migraine-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Headache & Migraine Relief
              </Link>
              <Link to="/shoulder-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Shoulder Pain Relief
              </Link>
              <Link to="/back-pain-santa-cruz" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Back Pain Relief
              </Link>
              <Link to="/posture-correction" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Posture Correction
              </Link>
              <Link to="/desk-worker-wellness" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Desk Worker Wellness
              </Link>
              <Link to="/tmj-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                TMJ Relief
              </Link>
              <Link to="/thoracic-outlet-syndrome" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Thoracic Outlet Syndrome
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default NeckPainRelief;
