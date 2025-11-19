import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import { getBreadcrumbSchema, getFAQSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function SciaticaRelief() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Sciatica Relief', url: '/sciatica-relief' }
  ];

  const faqs = [
    {
      question: "How long does it take to fix sciatica?",
      answer: "Many clients notice immediate relief from sciatic pain after their first session, but lasting sciatica relief typically requires 4-8 sessions as we systematically address the underlying causes—often tight hip muscles, fascial restrictions, or structural imbalances. Most people see significant improvement within 6-10 sessions. The key is addressing the root cause, not just the symptoms."
    },
    {
      question: "Will this help if I have a herniated disc causing my sciatica?",
      answer: "Yes. Even when sciatica is caused by a herniated disc, Structural Integration can help by releasing fascial restrictions that may be contributing to compression, improving alignment to reduce stress on the affected area, and teaching movement patterns that support your back. We work carefully within any medical limitations and coordinate with your healthcare providers. Many clients find significant relief even with disc issues."
    },
    {
      question: "Can I continue my normal activities while doing this work?",
      answer: "We'll discuss modifications based on your specific situation. The goal is to help you move better, not to stop you from living your life. We may recommend temporary modifications to certain activities that aggravate your sciatica while we're addressing foundational issues. Most clients can continue their normal routines with some adjustments. Applying what you learn in sessions to your daily activities accelerates your progress."
    },
    {
      question: "What if my sciatica is from piriformis syndrome?",
      answer: "Piriformis syndrome is one of the most common causes of sciatica, and Structural Integration is particularly effective for it. We release the tight piriformis muscle and surrounding fascial restrictions that compress the sciatic nerve. The work addresses both the muscle tightness and the structural patterns that contribute to it. Many clients find their sciatica resolves completely once we release the piriformis."
    },
    {
      question: "How many sessions will I need for sciatica relief?",
      answer: "This depends on how long you've had sciatica, what's causing it, and how quickly your body responds. Many people find significant relief within 4-8 sessions. If your sciatica is related to hip issues, the Hip Series (4 sessions) can be particularly effective. We'll discuss your specific needs during your initial consultation and recommend the best approach for your situation."
    },
    {
      question: "Is this safe if I have numbness or tingling in my leg?",
      answer: "Yes. Numbness and tingling are common sciatica symptoms, and our work can help address the underlying causes. We'll discuss your symptoms during your consultation and work carefully. As we release restrictions and improve alignment, many clients find their numbness and tingling decrease or disappear. However, if you have severe or progressive neurological symptoms, we'll coordinate with your healthcare providers."
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Sciatica Relief Santa Cruz | Fix Radiating Leg Pain & Numbness"
        description="Lasting relief from sciatica pain, numbness, and tingling. Address the root causes through Structural Integration in Santa Cruz."
        keywords="sciatica relief santa cruz, sciatic nerve pain, leg pain, radiating pain, numbness in leg, piriformis syndrome"
        structuredData={[getBreadcrumbSchema(breadcrumbs), getFAQSchema(faqs)]}
      />
      
      <PageHero 
        imageSrc="/approach-hero.jpg"
        title="Sciatica Relief"
        subtitle="Stop the radiating pain. Fix what's causing it."
      />


      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              That Shooting Pain Down Your Leg? Let's Fix It.
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Sharp, burning pain that shoots from your lower back or butt down your leg. Numbness or tingling in your foot. Pain that gets worse when sitting. Standing up feels like lightning striking your leg.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You've tried rest, stretching, maybe pain meds. Some days are better than others, but the pain always comes back. You're starting to wonder if this is just your life now.
            </p>
            <p className="text-xl text-accent font-semibold">
              It doesn't have to be.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Actually Causes Sciatica
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              "Sciatica" just means pain along the sciatic nerve. But what's causing the nerve to get irritated? That's what we need to address.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Piriformis Syndrome (Most Common)
                </h3>
                <p className="text-neutralDark/80">
                  Your piriformis muscle sits deep in your hip. When it gets tight or spasms, it compresses the sciatic nerve that runs right underneath (or sometimes through) it. This is "true" piriformis syndrome.and it's way more common than actual disc problems.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Hip Imbalances & Rotation
                </h3>
                <p className="text-neutralDark/80">
                  One hip rotated forward. Uneven leg length (often functional, not structural). These imbalances create tension patterns that irritate the nerve. Address the imbalance, resolve the sciatica.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Tight Psoas & Hip Flexors
                </h3>
                <p className="text-neutralDark/80">
                  Sitting all day shortens your hip flexors. They pull on your lower back, creating compression and nerve irritation. The psoas muscle is especially guilty.it attaches to your lumbar spine right where nerve roots exit.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Disc Issues (Sometimes)
                </h3>
                <p className="text-neutralDark/80">
                  Yes, herniated or bulging discs can cause sciatica. But they're less common than people think. Most people with disc bulges on MRI have zero symptoms. The disc might not be the problem.it might be everything around it.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Fascial Restrictions
                </h3>
                <p className="text-neutralDark/80">
                  Tight fascia along the entire posterior chain (back of body) creates compression and reduced space for the nerve. When we open up these restrictions, nerves often stop hurting.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Why Sciatica Keeps Coming Back
            </h2>

            <div className="space-y-4 text-lg text-neutralDark/80">
              <p className="leading-relaxed">
                Most treatments focus on the pain.anti-inflammatories, muscle relaxers, stretching the piriformis. These might help temporarily, but they don't address WHY your piriformis is tight or WHY your hip is rotated or WHY your psoas won't release.
              </p>
              <p className="leading-relaxed">
                You need to address the structural patterns causing the problem. That's what I do.
              </p>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              My Approach to Sciatica
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  1. Find the Root Cause
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  We assess your whole structure:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• How your pelvis sits (rotation, tilt)</li>
                  <li>• Hip mobility and restrictions</li>
                  <li>• Leg length differences</li>
                  <li>• Movement patterns creating compression</li>
                  <li>• Where fascia is restricted</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  2. Release What's Restricted
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  Through Structural Integration:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Release deep hip rotators (including piriformis)</li>
                  <li>• Free up tight psoas and hip flexors</li>
                  <li>• Open entire posterior chain (hamstrings, glutes, back)</li>
                  <li>• Address fascial restrictions compressing nerve</li>
                  <li>• Balance left and right sides</li>
                  <li>• Create space for the nerve</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  3. Retrain Movement Patterns
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  Through movement education:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Teach proper hip mechanics</li>
                  <li>• Improve sitting and standing posture</li>
                  <li>• Strengthen glutes (usually weak with sciatica)</li>
                  <li>• Address compensations creating the problem</li>
                  <li>• Give you tools to prevent recurrence</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What to Expect
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  First Few Sessions
                </h3>
                <p className="text-neutralDark/80">
                  You might feel improvement right away, or it might take 2-3 sessions. Sciatica that's been around for months or years takes time to resolve. We're changing structural patterns, not just masking symptoms.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  The Work Can Be Intense
                </h3>
                <p className="text-neutralDark/80">
                  Releasing deep hip muscles (like piriformis) can be uncomfortable. It shouldn't be unbearable, but you'll feel it. Most people say it's "hurts so good".they can feel it's the right kind of pressure.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Results Build Over Time
                </h3>
                <p className="text-neutralDark/80">
                  Each session builds on the last. The goal isn't just to stop the pain.it's to address the underlying structure so it doesn't come back. That takes commitment.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Life Looks Like Without Sciatica
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ No more shooting leg pain</div>
              <div>✓ Sit without agony</div>
              <div>✓ Stand up easily</div>
              <div>✓ Sleep through the night</div>
              <div>✓ Walk without limping</div>
              <div>✓ No numbness or tingling</div>
              <div>✓ Return to activities you love</div>
              <div>✓ Confidence in your body again</div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <p className="text-lg text-neutralDark/80 leading-relaxed italic">
              "I had sciatica for 8 months. Couldn't sit through a movie without pain shooting down my leg. After working with Rock, we found out my left hip was rotated and my piriformis was locked up from compensating. Four sessions in, the pain was 80% gone. Now it's completely gone. I can sit, I can hike, I can live my life again." . Mark, 47, Software Engineer
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
            title="Frequently Asked Questions About Sciatica Relief"
          />
          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Pain Relief Hub
              </Link>
              <Link to="/back-pain-santa-cruz" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Back Pain Relief
              </Link>
              <Link to="/hip-pain-treatment" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Hip Pain Treatment
              </Link>
              <Link to="/chronic-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Chronic Pain Relief
              </Link>
              <Link to="/injury-recovery" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Injury Recovery
              </Link>
              <Link to="/structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Structural Integration
              </Link>
              <Link to="/fascial-release" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Fascial Release
              </Link>
              <Link to="/posture-correction" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Posture Correction
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default SciaticaRelief;
