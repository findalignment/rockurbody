import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema } from '../utils/structuredData';

function ShoulderPainRelief() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Shoulder Pain Relief', url: '/shoulder-pain-relief' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Shoulder Pain Relief Santa Cruz | Fix Rotator Cuff & Impingement"
        description="Lasting relief from shoulder pain, frozen shoulder, and rotator cuff issues. Structural Integration addresses the root causes in Santa Cruz."
        keywords="shoulder pain santa cruz, rotator cuff pain, frozen shoulder, shoulder impingement, shoulder mobility"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Shoulder Pain Relief"
        subtitle="Get your shoulder moving freely again"
      />

      <Breadcrumbs items={breadcrumbs} />

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

        </div>
      </div>
    </PageLayout>
  );
}

export default ShoulderPainRelief;

