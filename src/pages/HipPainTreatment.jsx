import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import { getBreadcrumbSchema, getFAQSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function HipPainTreatment() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Hip Pain Treatment', url: '/hip-pain-treatment' }
  ];

  const faqs = [
    {
      question: "How long does it take to fix hip pain?",
      answer: "Many clients notice immediate improvements in hip mobility and reduced pain after their first session. However, lasting hip pain relief typically requires 4-8 sessions as we systematically address fascial restrictions, hip flexor tightness, and movement patterns. The Hip Series (4 sessions) is specifically designed to address hip issues. Most people see significant improvement within 6-10 sessions."
    },
    {
      question: "Will this help with hip impingement or tight hips?",
      answer: "Yes. Structural Integration is particularly effective for hip impingement and tight hips. We release fascial restrictions, improve hip capsule mobility, and restore proper hip function. The work addresses the structural and fascial components that contribute to impingement and tightness. Many clients find their hip mobility improves dramatically and impingement symptoms resolve as we restore proper hip mechanics."
    },
    {
      question: "Can I still exercise and be active while doing this work?",
      answer: "Generally yes, but we'll discuss modifications based on your specific situation. The goal is to help you move better, not to stop you from being active. We may recommend temporary modifications to certain movements while we're addressing foundational issues, but most clients can continue their activities with some adjustments. In fact, applying what you learn in sessions to your activities accelerates your progress."
    },
    {
      question: "What if my hip pain is related to lower back or knee pain?",
      answer: "Hip issues often contribute to both lower back and knee pain. When your hips don't work properly, your back and knees compensate, leading to pain in those areas. By fixing your hip function, we often resolve back and knee pain as well. Our whole-body approach addresses these interconnected patterns. Many clients find that as their hips improve, their back and knee pain disappears."
    },
    {
      question: "Is this safe if I have a history of hip injuries or hip replacement?",
      answer: "Yes, we work carefully with clients who have hip injury or surgery histories. We'll discuss your medical history during your consultation and work within any necessary limitations. Structural Integration can be particularly effective for addressing scar tissue, compensation patterns, and restrictions from old injuries. We're experienced working with post-surgical clients and will respect any medical restrictions while helping your hip function improve."
    },
    {
      question: "How many sessions will I need for hip pain relief?",
      answer: "This depends on your specific situation-whether it's impingement, tightness, or general hip pain. The Hip Series (4 sessions) is specifically designed for hip issues and provides a great foundation. Many people find significant relief within 4-8 sessions. We'll discuss your specific needs during your initial consultation and recommend the best approach for your situation."
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Hip Pain Treatment Santa Cruz | Fix Tight Hips & Hip Impingement"
        description="Lasting relief from hip pain, tightness, and mobility issues. Structural Integration addresses root causes of hip problems in Santa Cruz."
        keywords="hip pain santa cruz, tight hips, hip impingement, hip flexibility, hip pain relief, hip mobility"
        structuredData={[getBreadcrumbSchema(breadcrumbs), getFAQSchema(faqs)]}
      />
      
      <PageHero 
        imageSrc="/hip-series-hero.jpg"
        title="Hip Pain Treatment"
        subtitle="Restore hip mobility, eliminate pain, move freely"
      />


      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Your Hips Affect Everything
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Hip pain isn't just annoying.it changes how you walk, sit, sleep, and move through life. And it rarely stays localized. When your hips don't work right, everything else compensates:
            </p>
            <ul className="space-y-3 text-lg text-neutralDark/80">
              <li>• Lower back takes over and gets painful</li>
              <li>• Knees track poorly and develop issues</li>
              <li>• Your gait changes and creates new problems</li>
              <li>• Simple movements become difficult</li>
              <li>• Quality of life decreases</li>
            </ul>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Common Hip Problems
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Tight Hip Flexors
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  <strong>Symptoms:</strong> Front hip pain, difficulty standing up straight, lower back arches excessively
                </p>
                <p className="text-neutralDark/80">
                  <strong>Cause:</strong> Hours of sitting shortens psoas and hip flexors, pulling on your lower back
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Hip Impingement (FAI)
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  <strong>Symptoms:</strong> Pinching sensation in front of hip, limited range of motion, pain with deep squats
                </p>
                <p className="text-neutralDark/80">
                  <strong>Cause:</strong> Bone structure or soft tissue restrictions causing abnormal contact in the joint
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Piriformis Syndrome
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  <strong>Symptoms:</strong> Deep buttock pain, sciatica-like symptoms, pain with sitting
                </p>
                <p className="text-neutralDark/80">
                  <strong>Cause:</strong> Tight piriformis muscle compressing the sciatic nerve
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  IT Band Syndrome
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  <strong>Symptoms:</strong> Outside hip and knee pain, especially with running/cycling
                </p>
                <p className="text-neutralDark/80">
                  <strong>Cause:</strong> Tight IT band and TFL from weak glutes and hip imbalances
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Hip Bursitis
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  <strong>Symptoms:</strong> Outside hip pain, worse when lying on that side or climbing stairs
                </p>
                <p className="text-neutralDark/80">
                  <strong>Cause:</strong> Inflammation from friction due to poor hip mechanics
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Labral Tears
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  <strong>Symptoms:</strong> Deep hip pain, clicking/locking sensation, instability
                </p>
                <p className="text-neutralDark/80">
                  <strong>Cause:</strong> Injury or repetitive stress on the hip labrum
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              How I Address Hip Pain
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Release the Restrictions
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through Structural Integration, I:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Release chronically tight hip flexors (psoas, rectus femoris)</li>
                  <li>• Free up restricted hip capsule and surrounding fascia</li>
                  <li>• Release IT band, TFL, and piriformis</li>
                  <li>• Address compensatory patterns in lower back and pelvis</li>
                  <li>• Restore natural hip socket mechanics</li>
                </ul>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Restore Proper Movement
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through movement education, you'll learn to:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Engage glutes properly (most people's are "asleep")</li>
                  <li>• Move from your hips instead of compensating with your back</li>
                  <li>• Squat, hinge, and lunge with proper mechanics</li>
                  <li>• Walk with better hip extension</li>
                  <li>• Maintain hip mobility long-term</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Prevent Future Problems
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  You'll get practical tools:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Daily hip mobility practices (5-10 minutes)</li>
                  <li>• Sitting strategies that don't destroy your hips</li>
                  <li>• Strengthening exercises that translate to real life</li>
                  <li>• Early warning signs to catch problems before they worsen</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              The Hip Series: Targeted 4-Session Program
            </h2>
            <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
              I offer a specialized Hip Series.4 sessions of focused work specifically designed to restore hip function:
            </p>
            <div className="space-y-3 text-neutralDark/80">
              <div><strong>Session 1:</strong> Release hip flexors, open front body</div>
              <div><strong>Session 2:</strong> Free up deep hip rotators, address piriformis</div>
              <div><strong>Session 3:</strong> Work IT band, lateral hip, and glute integration</div>
              <div><strong>Session 4:</strong> Balance and integrate, restore full range of motion</div>
            </div>
            <p className="text-lg text-neutralDark/80 mt-4 leading-relaxed">
              <strong>Investment:</strong> $720 (4 sessions) . A great introduction to this work or perfect if hip issues are your primary concern.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Changes When Your Hips Work Right
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ Pain-free walking and standing</div>
              <div>✓ Easier squatting and bending</div>
              <div>✓ Better athletic performance</div>
              <div>✓ Reduced lower back pain</div>
              <div>✓ Improved knee health</div>
              <div>✓ Better balance and stability</div>
              <div>✓ Sleep better (no hip pain at night)</div>
              <div>✓ Move with confidence</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/hip-series" variant="outline" size="lg" fullWidth>
              Learn About Hip Series
            </Button>
          </div>

          {/* FAQ Section */}
          <FAQSection 
            faqs={faqs} 
            title="Frequently Asked Questions About Hip Pain Treatment"
          />
          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Pain Relief Hub
              </Link>
              <Link to="/back-pain-santa-cruz" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Back Pain Relief
              </Link>
              <Link to="/knee-pain-treatment" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Knee Pain Treatment
              </Link>
              <Link to="/sciatica-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Sciatica Relief
              </Link>
              <Link to="/it-band-syndrome" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                IT Band Syndrome
              </Link>
              <Link to="/mobility-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Mobility Training
              </Link>
              <Link to="/cyclists-and-runners" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Cyclists & Runners
              </Link>
              <Link to="/sports-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Sports Performance
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default HipPainTreatment;
