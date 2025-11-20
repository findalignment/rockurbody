import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import { getBreadcrumbSchema, getFAQSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function TMJRelief() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'TMJ Relief', url: '/tmj-relief' }
  ];

  const faqs = [
    {
      question: "How long does it take to fix TMJ pain?",
      answer: "Many clients notice immediate improvements in jaw comfort and reduced tension after their first session, but lasting TMJ relief typically requires 6-10 sessions as we systematically address the underlying causes—often neck tension, fascial restrictions, and structural imbalances. Most people see significant improvement within 8-12 sessions. The key is addressing the whole-body patterns that contribute to TMJ issues."
    },
    {
      question: "Will this help with jaw clicking and popping?",
      answer: "Yes. Jaw clicking and popping are often caused by muscle imbalances and fascial restrictions around the jaw joint. By releasing these restrictions and improving alignment, we often eliminate or significantly reduce clicking and popping. Many clients find their jaw moves more smoothly and quietly after the work."
    },
    {
      question: "What if I grind my teeth at night (bruxism)?",
      answer: "Bruxism often has structural and fascial contributors. When your neck and shoulders are tight, it can create tension that leads to clenching and grinding. By releasing these restrictions and improving your structure, we often reduce bruxism. Many clients find they clench less and wake up with less jaw tension."
    },
    {
      question: "Can I still eat normally while doing this work?",
      answer: "Yes. The goal is to help you eat and function normally without pain, not to restrict your activities. We may recommend temporary modifications to certain foods during the initial phase if your jaw is very sensitive, but most clients can continue their normal eating habits. In fact, applying what you learn in sessions to your daily activities accelerates your progress."
    },
    {
      question: "How many sessions will I need for TMJ relief?",
      answer: "This depends on how long you've had TMJ issues, how severe they are, and how quickly your body responds. Many people find significant relief within 6-10 sessions. We typically recommend starting with a series to address foundational issues, then continuing with additional sessions as needed. We'll discuss your specific needs during your initial consultation."
    },
    {
      question: "Is this safe if I have a night guard or other dental appliances?",
      answer: "Yes. Our work complements dental treatments and appliances. We'll discuss your dental situation during your consultation and work within any necessary limitations. Many dentists refer patients to us specifically for the structural work that enhances their treatment. We're happy to coordinate with your dental team."
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="TMJ Pain Relief Santa Cruz | Jaw Pain & Tension Treatment"
        description="Relief from TMJ pain, jaw tension, and clicking. Structural Integration addresses the root causes of jaw dysfunction in Santa Cruz."
        keywords="TMJ pain santa cruz, jaw pain, TMJ relief, jaw tension, bruxism, jaw clicking, temporomandibular joint"
        structuredData={[getBreadcrumbSchema(breadcrumbs), getFAQSchema(faqs)]}
      />
      
      <PageHero 
        imageSrc="/approach-hero.jpg"
        title="TMJ & Jaw Pain Relief"
        subtitle="Fix jaw pain, reduce tension, stop the clicking"
      />


      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Your Jaw Shouldn't Hurt to Eat
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Jaw pain. Clicking or popping when you open your mouth. Tension that radiates into your temples or ears. Difficulty chewing. Waking up with a sore jaw from grinding your teeth all night.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You've tried a night guard. Maybe seen a dentist. The symptoms improve slightly, but the underlying tension never fully goes away.
            </p>
            <p className="text-xl text-accent font-semibold">
              That's because TMJ issues are rarely just about your jaw.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Actually Causes TMJ Problems
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              Your jaw doesn't exist in isolation. It's connected to your skull, your neck, your shoulders, your entire cranial system. TMJ dysfunction is almost always a symptom of larger structural issues:
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="font-semibold text-neutralDark mb-2">Forward Head Posture</h3>
                <p className="text-neutralDark/80">
                  When your head moves forward (tech neck), your jaw has to work harder to function properly. The muscles that open and close your jaw are constantly fighting against gravity.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-semibold text-neutralDark mb-2">Neck & Shoulder Tension</h3>
                <p className="text-neutralDark/80">
                  Tight neck and shoulder muscles pull on your jaw. The same nerves that supply your jaw also supply your neck.tension in one area creates tension in the other.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-neutralDark mb-2">Stress & Clenching</h3>
                <p className="text-neutralDark/80">
                  Emotional stress shows up as jaw tension. You clench during the day without realizing it. You grind your teeth at night. Over time, the muscles stay chronically tight.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="font-semibold text-neutralDark mb-2">Fascial Restrictions</h3>
                <p className="text-neutralDark/80">
                  The fascia connecting your jaw to your neck, skull, and shoulders can become restricted. This limits jaw mobility and creates pain.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="font-semibold text-neutralDark mb-2">Old Injuries</h3>
                <p className="text-neutralDark/80">
                  Whiplash, dental work, even old sports injuries can create compensation patterns that affect jaw function years later.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Common TMJ Symptoms
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-neutralDark/80">
              <div className="bg-white border border-neutralLight rounded-xl p-4">
                ✓ Jaw pain or soreness
              </div>
              <div className="bg-white border border-neutralLight rounded-xl p-4">
                ✓ Clicking or popping sounds
              </div>
              <div className="bg-white border border-neutralLight rounded-xl p-4">
                ✓ Difficulty opening mouth fully
              </div>
              <div className="bg-white border border-neutralLight rounded-xl p-4">
                ✓ Jaw locking or getting stuck
              </div>
              <div className="bg-white border border-neutralLight rounded-xl p-4">
                ✓ Pain when chewing
              </div>
              <div className="bg-white border border-neutralLight rounded-xl p-4">
                ✓ Temple headaches
              </div>
              <div className="bg-white border border-neutralLight rounded-xl p-4">
                ✓ Ear pain or ringing
              </div>
              <div className="bg-white border border-neutralLight rounded-xl p-4">
                ✓ Facial pain
              </div>
              <div className="bg-white border border-neutralLight rounded-xl p-4">
                ✓ Teeth grinding (bruxism)
              </div>
              <div className="bg-white border border-neutralLight rounded-xl p-4">
                ✓ Jaw tension upon waking
              </div>
              <div className="bg-white border border-neutralLight rounded-xl p-4">
                ✓ Neck and shoulder pain
              </div>
              <div className="bg-white border border-neutralLight rounded-xl p-4">
                ✓ Dizziness or vertigo
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              How I Address TMJ Issues
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  1. Release the Surrounding Structures
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  We start by addressing everything around the jaw:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Release tight neck muscles pulling on jaw</li>
                  <li>• Free up restricted shoulders and upper back</li>
                  <li>• Address forward head posture</li>
                  <li>• Open up tight chest affecting neck position</li>
                  <li>• Release fascial restrictions in cranium and face</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  2. Work Directly with Jaw Muscles
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  Gentle, specific work on the jaw itself:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Release masseter muscles (main chewing muscles)</li>
                  <li>• Address temporalis muscles (temples)</li>
                  <li>• Work with pterygoid muscles (inside mouth.with gloves)</li>
                  <li>• Release fascia around TMJ joint</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  3. Retrain Movement Patterns
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  Teaching your body new patterns:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Improve head and neck position</li>
                  <li>• Teach proper jaw tracking</li>
                  <li>• Address breathing patterns (mouth vs. nose breathing)</li>
                  <li>• Awareness of clenching habits</li>
                  <li>• Stress reduction techniques</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Changes When Your Jaw Works Right
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ No more jaw pain</div>
              <div>✓ Clicking and popping stops</div>
              <div>✓ Open mouth fully without pain</div>
              <div>✓ Chew comfortably</div>
              <div>✓ Less teeth grinding at night</div>
              <div>✓ Temple headaches disappear</div>
              <div>✓ Reduced neck and shoulder tension</div>
              <div>✓ Wake up without jaw soreness</div>
            </div>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Important Notes About TMJ Work
            </h2>

            <div className="space-y-4 text-neutralDark/80">
              <p>
                <strong className="text-neutralDark">It's gentle:</strong> This isn't aggressive work. TMJ work requires a delicate touch and your active participation.
              </p>
              <p>
                <strong className="text-neutralDark">It's progressive:</strong> Jaw issues usually develop over years. Fixing them takes time and multiple sessions.
              </p>
              <p>
                <strong className="text-neutralDark">You're in control:</strong> We only work inside the mouth with your explicit permission, and you can stop at any time.
              </p>
              <p>
                <strong className="text-neutralDark">It's part of a whole-body approach:</strong> We rarely work only on the jaw. Addressing the whole system gets better results.
              </p>
            </div>
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
            title="Frequently Asked Questions About TMJ Relief"
          />
          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Pain Relief Hub
              </Link>
              <Link to="/headache-migraine-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Headache & Migraine Relief
              </Link>
              <Link to="/neck-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Neck Pain Relief
              </Link>
              <Link to="/shoulder-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Shoulder Pain Relief
              </Link>
              <Link to="/stress-anxiety-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Stress & Anxiety Relief
              </Link>
              <Link to="/posture-correction" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Posture Correction
              </Link>
              <Link to="/structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Structural Integration
              </Link>
              <Link to="/fascial-release" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Fascial Release
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default TMJRelief;
