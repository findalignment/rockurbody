import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import { getBreadcrumbSchema, getFAQSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function KneePainTreatment() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Knee Pain Treatment', url: '/knee-pain-treatment' }
  ];

  const faqs = [
    {
      question: "How long does it take to fix knee pain?",
      answer: "Many clients notice immediate improvements in knee comfort and function after their first session, but lasting knee pain relief typically requires 4-8 sessions as we systematically address the underlying causes-often hip and ankle issues, movement patterns, or structural imbalances. Most people see significant improvement within 6-10 sessions. Since knee pain is often caused by problems elsewhere, we address the whole system."
    },
    {
      question: "Will this help with runner's knee or patellar tracking issues?",
      answer: "Yes. Runner's knee and patellar tracking issues are often caused by hip weakness, tight IT bands, or movement patterns that create excessive stress on the knee. Structural Integration addresses these root causes by releasing fascial restrictions, improving hip function, and teaching better movement patterns. Many runners find their knee pain resolves once we fix the underlying hip and movement issues."
    },
    {
      question: "Can I still run/exercise while doing this work?",
      answer: "Generally yes, but we'll discuss modifications based on your specific situation. The goal is to help you return to your activities pain-free. We may recommend temporary modifications to certain activities while we're addressing foundational issues, but most clients can continue their activities with some adjustments. In fact, applying what you learn in sessions to your running or exercise accelerates your progress."
    },
    {
      question: "What if my knee pain is from arthritis or an old injury?",
      answer: "Structural Integration can help even with arthritis or old injuries. We work carefully to release fascial restrictions, improve alignment to reduce stress on the knee joint, and teach movement patterns that support your knee. While we can't reverse arthritis, we can significantly improve function and reduce pain. We're experienced working with post-injury clients and will respect any medical limitations."
    },
    {
      question: "How many sessions will I need for knee pain relief?",
      answer: "This depends on your specific situation-whether it's runner's knee, tracking issues, or general knee pain. Many people find significant relief within 6-10 sessions. Since knee pain often relates to hip and ankle function, we may recommend addressing those areas as well. We'll discuss your specific needs during your initial consultation and create a plan tailored to your situation."
    },
    {
      question: "Is this safe if I've had knee surgery?",
      answer: "Yes, we work carefully with clients who have knee surgery histories. We'll discuss your medical history during your consultation and work within any necessary limitations. Structural Integration can be particularly effective for addressing scar tissue, compensation patterns, and restrictions from surgery. We're experienced working with post-surgical clients and will respect any medical restrictions while helping your knee function improve."
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Knee Pain Treatment Santa Cruz | Runner's Knee & Joint Pain Relief"
        description="Fix knee pain, runner's knee, and tracking issues. Structural Integration addresses the root causes of knee problems in Santa Cruz."
        keywords="knee pain santa cruz, runners knee, knee pain relief, patellofemoral pain, knee injury, IT band knee pain"
        structuredData={[getBreadcrumbSchema(breadcrumbs), getFAQSchema(faqs)]}
      />
      
      <PageHero 
        imageSrc="/knee-pain-hero.jpg"
        title="Knee Pain Treatment"
        subtitle="Fix knee pain by addressing what's above and below it"
        alt="Knee pain treatment using structural integration to address runner's knee and joint pain in Santa Cruz"
      />


      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Your Knee Pain Isn't a Knee Problem
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Pain going up stairs. Pain going down stairs. Pain when squatting. Your knee hurts when you run, hike, or just stand for too long. Maybe it clicks or pops. Maybe it swells up after activity.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You've tried rest, ice, compression, elevation. Maybe some knee strengthening exercises. It helps a little, but the pain keeps coming back.
            </p>
            <p className="text-xl text-accent font-semibold">
              Here's why: Your knee is caught in the middle, taking the beating for problems in your hip and ankle.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              The Real Cause of Knee Pain
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              Your knee is a hinge joint—it wants to bend and straighten in one plane. But it's stuck between your hip (which rotates) and your ankle (which should be mobile but often isn't).
            </p>

            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              When your hip doesn't move properly or your ankle is stiff, your knee has to compensate. It gets twisted, torqued, and stressed in ways it wasn't designed to handle. Over time, this creates pain.
            </p>

            <div className="bg-white rounded-xl p-6">
              <p className="text-xl font-semibold text-neutralDark mb-4">
                Most Common Causes:
              </p>
              <ul className="space-y-3 text-neutralDark/80">
                <li>• <strong>Weak or inhibited glutes</strong> → hip drops, knee caves inward</li>
                <li>• <strong>Tight hip flexors</strong> → alters femur angle, changes knee tracking</li>
                <li>• <strong>Stiff ankles</strong> → knee compensates for lack of ankle mobility</li>
                <li>• <strong>Tight IT band</strong> → pulls on outside of knee</li>
                <li>• <strong>Quad imbalances</strong> → kneecap doesn't track properly</li>
                <li>• <strong>Poor foot mechanics</strong> → collapses arch, rotates tibia, stresses knee</li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Common Knee Issues
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Runner's Knee (Patellofemoral Pain)
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  <strong>Symptoms:</strong> Pain around or behind kneecap, worse with stairs or squatting
                </p>
                <p className="text-neutralDark/80">
                  <strong>Real cause:</strong> Kneecap isn't tracking properly in its groove, usually because of hip weakness, quad imbalances, or tight lateral structures
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  IT Band Syndrome
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  <strong>Symptoms:</strong> Sharp pain on outside of knee, especially with running or cycling
                </p>
                <p className="text-neutralDark/80">
                  <strong>Real cause:</strong> Weak glutes and hip abductors create excessive friction where IT band crosses the knee. The IT band isn't the problem—it's the victim.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Patellar Tendonitis (Jumper's Knee)
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  <strong>Symptoms:</strong> Pain below kneecap, worse with jumping or explosive movements
                </p>
                <p className="text-neutralDark/80">
                  <strong>Real cause:</strong> Overloaded patellar tendon from poor landing mechanics, tight quads, or lack of hip contribution to force absorption
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Meniscus Issues
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  <strong>Symptoms:</strong> Catching, locking, swelling, pain with twisting
                </p>
                <p className="text-neutralDark/80">
                  <strong>Real cause:</strong> While meniscus tears can require surgery, many meniscus issues are from chronic knee stress due to poor hip/ankle mechanics. Fix those, reduce the stress.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  General Knee Stiffness & Arthritis
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  <strong>Symptoms:</strong> Stiffness, reduced range of motion, grinding sensation
                </p>
                <p className="text-neutralDark/80">
                  <strong>Real cause:</strong> Years of poor tracking and compensation create wear and tear. While we can't reverse arthritis, improving mechanics reduces pain and slows progression.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              My Approach to Knee Pain
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  1. Fix the Hip
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Release tight hip flexors affecting femur angle</li>
                  <li>• Free up restricted hip capsule</li>
                  <li>• Release IT band and TFL</li>
                  <li>• Activate and strengthen glutes (usually "asleep")</li>
                  <li>• Improve hip stability and control</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  2. Fix the Ankle & Foot
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Restore ankle mobility (dorsiflexion especially)</li>
                  <li>• Release tight calves restricting ankle</li>
                  <li>• Address foot mechanics and arch support</li>
                  <li>• Improve lower leg fascial restrictions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  3. Address the Knee Itself
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Balance quad muscles (VMO vs. lateral quad)</li>
                  <li>• Release fascial restrictions around kneecap</li>
                  <li>• Improve patellar tracking</li>
                  <li>• Reduce inflammation and swelling</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  4. Retrain Movement Patterns
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Teach proper squatting mechanics</li>
                  <li>• Improve single-leg stability</li>
                  <li>• Fix gait and running mechanics</li>
                  <li>• Strengthen in functional patterns</li>
                  <li>• Prevent future issues</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Changes When Your Knees Work Right
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ Pain-free stairs (up AND down)</div>
              <div>✓ Squat without fear</div>
              <div>✓ Run without knee pain</div>
              <div>✓ Hike downhill comfortably</div>
              <div>✓ No clicking or popping</div>
              <div>✓ No swelling after activity</div>
              <div>✓ Better athletic performance</div>
              <div>✓ Confidence in your knees</div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz Active People
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Whether you're a runner dealing with IT band pain, a hiker with bad knees going downhill, a surfer with knee issues from pop-ups, or just someone who wants to go up stairs without pain—I help Santa Cruz residents address knee problems by addressing what's actually causing them.
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

          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Pain Relief Hub
              </Link>
              <Link to="/hip-pain-treatment" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Hip Pain Treatment
              </Link>
              <Link to="/it-band-syndrome" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                IT Band Syndrome
              </Link>
              <Link to="/achilles-tendonitis" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Achilles Tendonitis
              </Link>
              <Link to="/plantar-fasciitis" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Plantar Fasciitis
              </Link>
              <Link to="/cyclists-and-runners" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Cyclists & Runners
              </Link>
              <Link to="/sports-injury-prevention" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Injury Prevention
              </Link>
              <Link to="/mobility-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Mobility Training
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <FAQSection 
            faqs={faqs} 
            title="Frequently Asked Questions About Knee Pain Treatment"
          />
        </div>
      </div>
    </PageLayout>
  );
}

export default KneePainTreatment;
