import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import AvailableLocations from '../components/AvailableLocations';
import FAQSection from '../components/FAQSection';
import { getBreadcrumbSchema, getFAQSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function PostureCorrection() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Posture Correction', url: '/posture-correction' }
  ];

  const faqs = [
    {
      question: "How long does it take to fix poor posture?",
      answer: "Many clients notice immediate improvements in how they feel after their first session, but lasting posture correction typically requires 6-12 sessions as we systematically address fascial restrictions, muscle imbalances, and retrain movement patterns. The structural changes we create need time to integrate, and you'll need to practice new movement patterns. Most people see significant improvement within 8-12 sessions."
    },
    {
      question: "Will I have to constantly think about my posture?",
      answer: "No. The goal is to make good posture feel natural, not to require constant effort. Through Structural Integration, we reorganize your structure so that better alignment feels comfortable and natural. Movement Education teaches you patterns that support good posture without thinking about it. Over time, good posture becomes your default because your structure supports it."
    },
    {
      question: "Can I still work at my desk while doing this work?",
      answer: "Yes, but we'll teach you better ergonomics and movement patterns to support your posture. The goal isn't to stop you from working—it's to help you work in ways that don't create postural problems. We'll give you simple practices to do throughout your workday, improve your workstation setup, and teach you how to sit and move in ways that support your structure. Many clients find they can work longer without pain."
    },
    {
      question: "What if I've tried posture exercises and they didn't work?",
      answer: "Posture exercises often fail because they don't address the underlying structural restrictions. If your fascia is locked up and pulling you into poor alignment, exercises alone won't fix it. Structural Integration releases these restrictions first, then Movement Education teaches you patterns that maintain the improvements. This combination addresses both structure and function, which is why it works when exercises alone haven't."
    },
    {
      question: "How many sessions will I need for posture correction?",
      answer: "This depends on how severe your postural issues are and how long you've had them. Many people find significant improvement within 8-12 sessions. We typically recommend starting with a series (like The Reset or 12-Series) to address foundational issues, then continuing with additional sessions as needed. We'll discuss your specific needs during your initial consultation."
    },
    {
      question: "Is this safe if I have scoliosis or other structural issues?",
      answer: "Yes. We work carefully with clients who have structural issues like scoliosis. Structural Integration can help improve alignment and function even with these conditions. We'll discuss your medical history during your consultation and work within any necessary limitations. While we can't eliminate scoliosis, we can often significantly improve function and reduce associated pain."
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Posture Correction Santa Cruz | Fix Forward Head & Rounded Shoulders"
        description="Improve your posture permanently through Structural Integration. Address forward head, rounded shoulders, and postural imbalances in Santa Cruz."
        keywords="posture correction santa cruz, improve posture, forward head posture, rounded shoulders, structural alignment, body alignment santa cruz"
        structuredData={[getBreadcrumbSchema(breadcrumbs), getFAQSchema(faqs)]}
      />
      
      <PageHero 
        imageSrc="/approach-hero.jpg"
        title="Posture Correction"
        subtitle="Stand taller, move better, feel confident"
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Intro */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Your Posture Isn't Just About "Sitting Up Straight"
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You've heard it your whole life: "Stand up straight!" "Pull your shoulders back!" But no matter how hard you try, within minutes you're back to your old posture. By the end of the day, you're exhausted from fighting your own body.
            </p>
            <p className="text-xl text-accent font-semibold mb-6">
              Here's why: You can't improve posture with willpower alone.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed">
              Your posture is dictated by your fascial structure, muscle balance, and nervous system patterns. To change it permanently, we need to address all three.
            </p>
          </div>

          {/* Common Posture Problems */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Common Posture Problems
            </h2>

            <div className="space-y-8">
              <div className="bg-sage/5 rounded-2xl p-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Forward Head Posture
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  <strong>What it looks like:</strong> Head juts forward, chin pokes out, constantly looking down at screens
                </p>
                <p className="text-lg text-neutralDark/80 mb-3">
                  <strong>What it causes:</strong> Neck pain, headaches, shoulder tension, upper back strain
                </p>
                <p className="text-lg text-neutralDark/80">
                  <strong>Why it happens:</strong> Hours of looking at phones/computers shortens front neck muscles and lengthens back neck muscles
                </p>
              </div>

              <div className="bg-accent/5 rounded-2xl p-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Rounded Shoulders
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  <strong>What it looks like:</strong> Shoulders roll forward, chest caves in, upper back rounds
                </p>
                <p className="text-lg text-neutralDark/80 mb-3">
                  <strong>What it causes:</strong> Shoulder impingement, breathing restrictions, rotator cuff issues
                </p>
                <p className="text-lg text-neutralDark/80">
                  <strong>Why it happens:</strong> Tight chest and weak upper back from desk work, driving, screen time
                </p>
              </div>

              <div className="bg-primary/5 rounded-2xl p-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Anterior Pelvic Tilt
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  <strong>What it looks like:</strong> Lower back arches excessively, belly sticks out, butt sticks back
                </p>
                <p className="text-lg text-neutralDark/80 mb-3">
                  <strong>What it causes:</strong> Lower back pain, hip flexor tightness, weak glutes
                </p>
                <p className="text-lg text-neutralDark/80">
                  <strong>Why it happens:</strong> Prolonged sitting shortens hip flexors and turns off core
                </p>
              </div>

              <div className="bg-highlight/5 rounded-2xl p-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Sway Back
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  <strong>What it looks like:</strong> Hips push forward, upper body leans back, chest drops
                </p>
                <p className="text-lg text-neutralDark/80 mb-3">
                  <strong>What it causes:</strong> Hip pain, lower back strain, poor balance
                </p>
                <p className="text-lg text-neutralDark/80">
                  <strong>Why it happens:</strong> Compensation pattern often from standing for long periods
                </p>
              </div>
            </div>
          </div>

          {/* The Real Cost */}
          <div className="mb-16 border-l-4 border-sage pl-6">
            <h2 className="text-2xl font-heading text-primary mb-4">
              The Real Cost of Poor Posture
            </h2>
            <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
              Poor posture isn't just cosmetic. It affects everything:
            </p>
            <ul className="space-y-2 text-lg text-neutralDark/80">
              <li>• <strong>Chronic pain:</strong> Neck, shoulders, back.your body compensates everywhere</li>
              <li>• <strong>Reduced energy:</strong> Fighting gravity all day is exhausting</li>
              <li>• <strong>Restricted breathing:</strong> Collapsed chest = shallow breaths = less oxygen</li>
              <li>• <strong>Decreased confidence:</strong> Slumped posture signals defeat to yourself and others</li>
              <li>• <strong>Faster aging:</strong> Poor alignment accelerates wear and tear on joints</li>
              <li>• <strong>Athletic performance:</strong> Misalignment limits power and efficiency</li>
            </ul>
          </div>

          {/* How I Fix It */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              How We Fix Your Posture (For Real)
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Step 1: Release Structural Restrictions
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through Structural Integration, I release the fascial restrictions holding you in poor posture:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Open shortened front-body tissue (chest, hip flexors, anterior neck)</li>
                  <li>• Release overworked back-body tissue (upper back, lower back)</li>
                  <li>• Balance left-right imbalances causing rotation and side-bending</li>
                  <li>• Restore natural spinal curves</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Step 2: Retrain Your Nervous System
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Your nervous system has learned to hold you in this posture. We need to teach it a new way:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Movement patterns that reinforce better alignment</li>
                  <li>• Breathing practices that support upright posture</li>
                  <li>• Body awareness exercises so you notice and correct yourself</li>
                  <li>• Simple daily practices that become automatic</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Step 3: Make It Effortless
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  When your structure is balanced, good posture becomes effortless:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• You don't have to "remember" to sit up straight</li>
                  <li>• Your body naturally finds optimal alignment</li>
                  <li>• You have more energy because you're not fighting gravity</li>
                  <li>• Movement feels easier and more efficient</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Changes When Your Posture Improves
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ Less pain (neck, shoulders, back)</div>
              <div>✓ More energy throughout the day</div>
              <div>✓ Better breathing & more oxygen</div>
              <div>✓ Improved confidence & presence</div>
              <div>✓ Easier, more efficient movement</div>
              <div>✓ Better athletic performance</div>
              <div>✓ Reduced injury risk</div>
              <div>✓ Look taller and younger</div>
              <div>✓ Less tension & stress</div>
              <div>✓ Improved digestion</div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Timeline: Improving Your Posture
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-sage rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <strong className="text-neutralDark">First Session:</strong>
                  <span className="text-neutralDark/80"> Notice immediate improvement. Stand taller without trying. Understand what's been holding you in poor posture.</span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  3-5
                </div>
                <div>
                  <strong className="text-neutralDark">Early Sessions:</strong>
                  <span className="text-neutralDark/80"> Posture feels easier to maintain. Less pain. More awareness of when you're slumping. Friends/family notice you look different.</span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  10+
                </div>
                <div>
                  <strong className="text-neutralDark">Full Series:</strong>
                  <span className="text-neutralDark/80"> Good posture is your new normal. Your body naturally finds alignment. You have tools to maintain it for life.</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/packages" variant="outline" size="lg" fullWidth>
              View Programs
            </Button>
          </div>

          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/wellness" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Wellness Hub
              </Link>
              <Link to="/neck-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Neck Pain Relief
              </Link>
              <Link to="/shoulder-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Shoulder Pain Relief
              </Link>
              <Link to="/desk-worker-wellness" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Desk Worker Wellness
              </Link>
              <Link to="/back-pain-santa-cruz" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Back Pain Relief
              </Link>
              <Link to="/structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Structural Integration
              </Link>
              <Link to="/breathing-and-core" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Breathing & Core
              </Link>
              <Link to="/chronic-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Chronic Pain Relief
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <FAQSection 
            faqs={faqs} 
            title="Frequently Asked Questions About Posture Correction"
          />

          {/* Available in Your Area */}
          <AvailableLocations serviceName="posture correction" />

        </div>
      </div>
    </PageLayout>
  );
}

export default PostureCorrection;

