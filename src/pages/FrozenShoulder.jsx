import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function FrozenShoulder() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Frozen Shoulder', url: '/frozen-shoulder' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Frozen Shoulder Treatment Santa Cruz | Adhesive Capsulitis Relief"
        description="Comprehensive frozen shoulder (adhesive capsulitis) treatment through manual therapy and movement training. Restore shoulder mobility in Santa Cruz."
        keywords="frozen shoulder santa cruz, adhesive capsulitis, frozen shoulder treatment, shoulder mobility, shoulder pain relief"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Frozen Shoulder Treatment"
        subtitle="Getting your shoulder unstuck takes patience and the right approach"
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              You Literally Can't Move Your Shoulder
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              It started gradually. Maybe after an injury, surgery, or just out of nowhere. At first, just some stiffness. Then more pain. Then suddenly you can't reach behind your back, can't put on a jacket, can't reach up to a shelf. Your shoulder feels locked, frozen in place.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              The pain is worst at night. You can't sleep on that side. Simple movements are excruciating. Your doctor says it's "frozen shoulder" or "adhesive capsulitis" and tells you it will resolve on its own in 1-3 years. Three years of this sounds unbearable.
            </p>
            <p className="text-xl text-accent font-semibold">
              Frozen shoulder does eventually resolve on its own, but we can dramatically speed up recovery and reduce pain with the right treatment.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              The Three Stages of Frozen Shoulder
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              Frozen shoulder progresses through three distinct phases. Understanding which phase you're in matters for treatment approach.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Stage 1: Freezing (0-9 months)
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  Pain gradually increases. Range of motion slowly decreases. The shoulder capsule is inflamed and starting to thicken. Pain is often worse at night and with sudden movements.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Treatment focus:</strong> Pain management, gentle movement, preventing complete loss of motion
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Stage 2: Frozen (4-12 months)
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  Pain may actually decrease, but stiffness is at its worst. The shoulder capsule has thickened significantly and adhered to itself. You have severe limitations in all directions, especially rotation and reaching overhead.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Treatment focus:</strong> Restore mobility, prevent compensation patterns, manage remaining pain
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Stage 3: Thawing (12-24+ months)
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  Motion gradually returns. The capsule slowly loosens. This is when aggressive treatment can speed recovery. Without proper work, you may plateau before reaching full range of motion.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Treatment focus:</strong> Aggressive mobility work, strength building, restore full function
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Causes Frozen Shoulder?
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Post-Injury or Surgery
                </h3>
                <p className="text-neutralDark/80">
                  After a shoulder injury, rotator cuff repair, or even unrelated surgery, if the shoulder is immobilized too long, the capsule can stiffen and develop adhesions.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Diabetes
                </h3>
                <p className="text-neutralDark/80">
                  People with diabetes are 2-4 times more likely to develop frozen shoulder. High blood sugar affects collagen and makes tissues more prone to thickening and adhesions.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Thyroid Conditions
                </h3>
                <p className="text-neutralDark/80">
                  Hypothyroidism (underactive thyroid) is associated with increased risk of frozen shoulder, though the mechanism isn't fully understood.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Prolonged Immobilization
                </h3>
                <p className="text-neutralDark/80">
                  Anything that keeps your shoulder from moving (sling after fracture, pain avoidance, stroke) can trigger the capsule to stiffen.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Idiopathic (Unknown)
                </h3>
                <p className="text-neutralDark/80">
                  Often, frozen shoulder develops with no clear cause. Most common in people aged 40-60, more common in women, often affects the non-dominant shoulder.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              My Approach to Frozen Shoulder
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  1. Deep Capsular and Fascial Work
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through Structural Integration:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Release tight capsule (carefully and progressively)</li>
                  <li>• Address entire shoulder complex (not just the joint)</li>
                  <li>• Work chest, upper back, neck (all connected)</li>
                  <li>• Release fascial restrictions limiting movement</li>
                  <li>• Improve scapular mobility</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  2. Progressive Mobility Restoration
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Movement training tailored to your stage:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Gentle pendulum and passive range early on</li>
                  <li>• Progressive stretching as inflammation reduces</li>
                  <li>• Active-assisted range of motion work</li>
                  <li>• Aggressive mobilization in thawing stage</li>
                  <li>• Specific capsular stretches in all planes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  3. Prevent Compensation Patterns
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Keep your neck from compensating</li>
                  <li>• Maintain scapular control</li>
                  <li>• Address opposite shoulder (often gets overused)</li>
                  <li>• Prevent whole-body adaptations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  4. Rebuild Strength and Function
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Rotator cuff strengthening (once you have range)</li>
                  <li>• Scapular stabilization</li>
                  <li>• Functional movement patterns</li>
                  <li>• Return to full activity</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What About Other Treatments?
            </h2>
            
            <div className="space-y-4 text-lg text-neutralDark/80">
              <p>
                <strong className="text-neutralDark">Physical therapy:</strong> Helpful, but often too gentle or too aggressive. PT tends to focus on exercises without enough hands-on capsular work. Works best combined with manual therapy.
              </p>
              <p>
                <strong className="text-neutralDark">Cortisone injections:</strong> Can reduce pain and inflammation in freezing stage, giving a window to work on mobility. Not a cure, but can be helpful combined with bodywork.
              </p>
              <p>
                <strong className="text-neutralDark">Manipulation under anesthesia:</strong> Doctor forcefully breaks up adhesions while you're sedated. Can work but is aggressive and risky (potential for fracture or tendon tears). Usually reserved for severe cases that don't respond to conservative treatment.
              </p>
              <p>
                <strong className="text-neutralDark">Arthroscopic capsular release:</strong> Surgical option where the tight capsule is cut. Effective but invasive. Should be last resort after 6-12 months of proper conservative treatment.
              </p>
              <p>
                <strong className="text-neutralDark">Home stretching alone:</strong> Better than nothing, but you need someone to work the capsule directly. You can't get deep enough into the restriction on your own.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Recovery Timeline
            </h2>
            
            <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
              <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
                <strong className="text-neutralDark">Without treatment:</strong> 18-36 months for natural resolution, often with incomplete recovery
              </p>
              <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
                <strong className="text-neutralDark">With proper treatment:</strong> 6-12 months for substantial improvement, with more complete recovery of range of motion
              </p>
              <p className="text-lg text-neutralDark/80 leading-relaxed">
                The earlier you start proper treatment, the better. Don't wait three months hoping it will go away on its own.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Better Looks Like
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ Reach overhead without pain</div>
              <div>✓ Sleep on that side again</div>
              <div>✓ Put on jackets normally</div>
              <div>✓ Reach behind your back</div>
              <div>✓ Return to activities you love</div>
              <div>✓ No more constant pain</div>
              <div>✓ Full or near-full range restored</div>
              <div>✓ Confidence in your shoulder</div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz Residents
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              If you're dealing with frozen shoulder, waiting it out for 2-3 years isn't your only option. Comprehensive hands-on work combined with progressive mobility training can significantly speed your recovery and improve your outcome. Let's get your shoulder moving again.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/packages" variant="outline" size="lg" fullWidth>
              View Treatment Programs
            </Button>
          </div>
          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Pain Relief Hub
              </Link>
              <Link to="/shoulder-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Shoulder Pain Relief
              </Link>
              <Link to="/rotator-cuff-injury" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Rotator Cuff Injury
              </Link>
              <Link to="/injury-recovery" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Injury Recovery
              </Link>
              <Link to="/mobility-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Mobility Training
              </Link>
              <Link to="/structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Structural Integration
              </Link>
              <Link to="/fascial-release" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Fascial Release
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

export default FrozenShoulder;
