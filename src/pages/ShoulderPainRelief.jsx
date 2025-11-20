import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import { getBreadcrumbSchema, getFAQSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function ShoulderPainRelief() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Shoulder Pain Relief', url: '/shoulder-pain-relief' }
  ];

  const faqs = [
    {
      question: "How long does it take to fix shoulder pain?",
      answer: "Many clients notice immediate improvements in shoulder mobility and reduced pain after their first session. However, lasting shoulder pain relief typically requires 6-10 sessions as we systematically address fascial restrictions, muscle imbalances, and movement patterns. Complex issues like frozen shoulder or rotator cuff injuries may take longer. Most people see significant improvement within 8-12 sessions."
    },
    {
      question: "Will this help with frozen shoulder or rotator cuff injuries?",
      answer: "Yes. Structural Integration can help with both frozen shoulder and rotator cuff issues by releasing fascial restrictions, improving shoulder blade mobility, and restoring proper movement patterns. We work carefully with these conditions, respecting any medical limitations while helping your shoulder heal. Many clients find our approach complements physical therapy and accelerates recovery."
    },
    {
      question: "Can I still surf/climb/exercise while doing this work?",
      answer: "Generally yes, but we'll discuss modifications based on your specific situation. The goal is to help you return to your activities pain-free, not to stop you from doing what you love. We may recommend temporary modifications to certain movements while we're addressing foundational issues, but most clients can continue their activities with some adjustments. In fact, applying what you learn in sessions to your activities accelerates your progress."
    },
    {
      question: "What if I've already tried physical therapy for my shoulder?",
      answer: "Our approach complements physical therapy by addressing the fascial and structural components that PT may not address. Physical therapy typically focuses on strengthening and range of motion exercises. Structural Integration works with the connective tissue system to release restrictions throughout your shoulder, neck, and upper back. We also address whole-body patterns that contribute to shoulder issues. Many clients come to us after PT helped but didn't fully resolve their pain."
    },
    {
      question: "Is this safe if I have a history of shoulder injuries or surgeries?",
      answer: "Yes, we work carefully with clients who have shoulder injury or surgery histories. We'll discuss your medical history during your consultation and work within any necessary limitations. Structural Integration can be particularly effective for addressing scar tissue, compensation patterns, and restrictions from old injuries. We're experienced working with post-surgical clients and will respect any medical restrictions while helping your shoulder heal."
    },
    {
      question: "How many sessions will I need for shoulder pain relief?",
      answer: "This depends on your specific condition-whether it's impingement, frozen shoulder, rotator cuff issues, or general shoulder pain. Many people find significant relief within 6-12 sessions. We typically recommend starting with a series to address foundational issues, then continuing with additional sessions as needed. We'll discuss your specific needs during your initial consultation and create a plan tailored to your situation."
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Shoulder Pain Relief Santa Cruz | Fix Rotator Cuff & Impingement"
        description="Lasting relief from shoulder pain, frozen shoulder, and rotator cuff issues. Structural Integration addresses the root causes in Santa Cruz."
        keywords="shoulder pain santa cruz, rotator cuff pain, frozen shoulder, shoulder impingement, shoulder mobility"
        structuredData={[getBreadcrumbSchema(breadcrumbs), getFAQSchema(faqs)]}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Shoulder Pain Relief"
        subtitle="Get your shoulder moving freely again"
      />


      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Your Shoulder Shouldn't Hurt This Much
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Reaching overhead hurts. Sleeping on that side is impossible. Simple things like putting on a jacket or grabbing something from the back seat make you wince.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You've tried rest, ice, maybe some PT exercises. It helps a little, but the pain keeps coming back. Why?
            </p>
            <p className="text-xl text-accent font-semibold">
              Because most shoulder pain isn't actually a shoulder problem.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Common Shoulder Issues
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Rotator Cuff Pain & Tendonitis
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  <strong>Symptoms:</strong> Pain with overhead movements, weakness, can't sleep on that shoulder
                </p>
                <p className="text-neutralDark/80">
                  <strong>Real cause:</strong> Usually not the rotator cuff itself . it's restrictions in your chest, neck, and upper back forcing your rotator cuff to work overtime
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Shoulder Impingement
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  <strong>Symptoms:</strong> Pinching sensation when raising arm, painful arc of motion
                </p>
                <p className="text-neutralDark/80">
                  <strong>Real cause:</strong> Your shoulder blade isn't moving properly because tight muscles are holding it in the wrong position
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Frozen Shoulder (Adhesive Capsulitis)
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  <strong>Symptoms:</strong> Severely limited range of motion, pain that gets worse at night
                </p>
                <p className="text-neutralDark/80">
                  <strong>Real cause:</strong> Fascial restrictions in the shoulder capsule, often triggered by compensation patterns from other areas
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Rounded Shoulders / Poor Posture
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  <strong>Symptoms:</strong> Shoulders pulled forward, upper back pain, neck tension
                </p>
                <p className="text-neutralDark/80">
                  <strong>Real cause:</strong> Tight chest and front shoulder muscles from years of sitting, working at computers, looking at phones
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Why Shoulder Problems Keep Coming Back
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              Your shoulder is one of the most mobile joints in your body. But that mobility depends on everything around it working properly:
            </p>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-sage pl-6">
                <p className="text-neutralDark/80">
                  <strong className="text-neutralDark">Your ribcage needs to move freely</strong> so your shoulder blade can glide properly
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <p className="text-neutralDark/80">
                  <strong className="text-neutralDark">Your neck needs to be unrestricted</strong> because tight neck muscles pull your shoulder blade up
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <p className="text-neutralDark/80">
                  <strong className="text-neutralDark">Your chest needs to be open</strong> so your shoulder isn't constantly pulled forward
                </p>
              </div>
              <div className="border-l-4 border-highlight pl-6">
                <p className="text-neutralDark/80">
                  <strong className="text-neutralDark">Your upper back needs strength</strong> to counter all the forward pulling
                </p>
              </div>
            </div>

            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Most treatments only address the shoulder itself. That's why the pain keeps returning. We need to address the whole system.
            </p>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              My Approach to Shoulder Pain
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Release What's Restricting You
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Open up chronically tight chest (pecs, anterior shoulder)</li>
                  <li>• Free restricted ribcage and upper back</li>
                  <li>• Release tight neck muscles pulling on shoulder blade</li>
                  <li>• Address arm and forearm restrictions</li>
                  <li>• Restore natural shoulder joint mechanics</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Retrain Proper Movement
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Teach proper shoulder blade mechanics</li>
                  <li>• Strengthen weak upper back and rotator cuff</li>
                  <li>• Improve overhead movement patterns</li>
                  <li>• Address compensations from other areas</li>
                  <li>• Give you tools to maintain results</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Changes When Your Shoulder Works Right
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ Reach overhead without pain</div>
              <div>✓ Sleep on either side</div>
              <div>✓ Lift and carry without worry</div>
              <div>✓ Better posture naturally</div>
              <div>✓ No more clicking/popping</div>
              <div>✓ Full range of motion restored</div>
              <div>✓ Reduced neck and upper back tension</div>
              <div>✓ Confidence in your shoulder again</div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz Active People
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Whether you're a surfer dealing with paddling pain, a climber with shoulder impingement, or a desk worker with forward shoulder posture . I help Santa Cruz residents get their shoulders back. Let's figure out what's actually causing your pain and address it properly.
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
            title="Frequently Asked Questions About Shoulder Pain Relief"
          />
          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Pain Relief Hub
              </Link>
              <Link to="/rotator-cuff-injury" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Rotator Cuff Injury
              </Link>
              <Link to="/frozen-shoulder" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Frozen Shoulder
              </Link>
              <Link to="/neck-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Neck Pain Relief
              </Link>
              <Link to="/back-pain-santa-cruz" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Back Pain Relief
              </Link>
              <Link to="/thoracic-outlet-syndrome" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Thoracic Outlet Syndrome
              </Link>
              <Link to="/sports-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Sports Performance
              </Link>
              <Link to="/surfers" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                For Surfers
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default ShoulderPainRelief;
