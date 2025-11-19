import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema } from '../utils/structuredData';

function ShoulderPainTreatment() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Shoulder Pain Treatment', url: '/shoulder-pain-treatment' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Shoulder Pain Treatment Santa Cruz | Rotator Cuff & Impingement Relief"
        description="Fix shoulder pain, impingement, and rotator cuff issues. Structural Integration addresses root causes in Santa Cruz."
        keywords="shoulder pain santa cruz, rotator cuff pain, shoulder impingement, frozen shoulder, shoulder mobility, shoulder rehab"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Shoulder Pain Treatment"
        subtitle="Get your shoulders back to full, pain-free function"
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Shoulders Are Complicated. Fixing Them Doesn't Have to Be.
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Can't reach overhead without pain. Sleeping on that side is impossible. Putting on a jacket is an ordeal. Your shoulder clicks, catches, or just plain hurts.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Maybe you've been told it's "just impingement" or "rotator cuff tendonitis." You've done the band exercises. You've stretched. You've rested. And yet...
            </p>
            <p className="text-xl text-accent font-semibold">
              Here's the thing: Most shoulder pain isn't actually a shoulder problem.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Common Shoulder Issues I Work With
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Shoulder Impingement
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Pain when reaching overhead or out to the side. The space in your shoulder joint is compressed, pinching tendons and bursa. But WHY is it compressed? Usually: rounded shoulders, tight chest, poor scapular control.
                </p>
                <p className="text-neutralDark/80 italic text-sm">
                  Better approach: Open the chest, restore scapular movement, reposition the shoulder
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Rotator Cuff Issues
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Weakness, pain, or "catching" sensation. Your rotator cuff stabilizes the shoulder. When it's not working right, everything else compensates poorly.
                </p>
                <p className="text-neutralDark/80 italic text-sm">
                  Better approach: Release overworked muscles (traps, pecs), retrain stabilizer function
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Frozen Shoulder (Adhesive Capsulitis)
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Severely limited range of motion, often after injury or immobilization. The shoulder capsule literally gets stuck and restricted.
                </p>
                <p className="text-neutralDark/80 italic text-sm">
                  Better approach: Careful fascial release, progressive movement restoration
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Rounded Shoulder Posture
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Shoulders pulled forward from desk work or phone use. This changes how your shoulder joint functions and creates pain over time.
                </p>
                <p className="text-neutralDark/80 italic text-sm">
                  Better approach: Release tight chest and front shoulders, strengthen back, retrain posture
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Scapular Dyskinesis
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Your shoulder blade doesn't move properly. Since your arm connects to your shoulder blade, poor scapular movement = shoulder pain.
                </p>
                <p className="text-neutralDark/80 italic text-sm">
                  Better approach: Release restrictions, retrain serratus and lower trap function
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              My Approach to Shoulder Pain
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Look Beyond the Shoulder
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Your shoulder pain is often caused by:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Tight chest pulling shoulders forward</li>
                  <li>• Stiff thoracic spine limiting overhead motion</li>
                  <li>• Neck tension restricting shoulder blade movement</li>
                  <li>• Poor breathing mechanics affecting shoulder position</li>
                  <li>• Compensations from an old ankle or hip injury</li>
                </ul>
                <p className="text-lg text-neutralDark/80 mt-3">
                  I find and address the actual source, not just where it hurts.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Restore Full Function
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through Structural Integration and movement work:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Release fascial restrictions in chest, neck, and shoulder</li>
                  <li>• Free up thoracic spine mobility</li>
                  <li>• Retrain scapular movement patterns</li>
                  <li>• Rebuild rotator cuff function (not just strength)</li>
                  <li>• Restore full, pain-free range of motion</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Keep It Working Long-Term
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  You'll learn:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Daily practices to maintain shoulder health</li>
                  <li>• How to modify activities during healing</li>
                  <li>• Movement patterns that protect vs. aggravate</li>
                  <li>• Progressive loading strategies to rebuild strength safely</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Perfect For Active Santa Cruz Residents
            </h2>
            <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
              Whether you're a surfer with shoulder impingement, a climber with rotator cuff issues, or a desk worker who can't reach overhead anymore . I help you get back to full function.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Most shoulder pain clients see significant improvement within 4-6 sessions. Not just "hurts less" . actual "I forgot I had a shoulder problem" results.
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

        </div>
      </div>
    </PageLayout>
  );
}

export default ShoulderPainTreatment;
