import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function WhiplashRecovery() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Whiplash Recovery', url: '/whiplash-recovery' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Whiplash Recovery Santa Cruz | Car Accident Injury Treatment"
        description="Comprehensive whiplash and car accident injury recovery. Address chronic neck pain, stiffness, and whole-body compensation patterns in Santa Cruz."
        keywords="whiplash treatment santa cruz, car accident injury, neck pain after accident, whiplash recovery, auto accident recovery"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Whiplash Recovery"
        subtitle="Healing from car accident injuries takes more than time"
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              The Accident Was Months Ago. Why Does Your Neck Still Hurt?
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              The initial pain might have faded, but something's not right. Your neck is stiff. Turning your head fully feels impossible. You get headaches. Your shoulders are constantly tight. Maybe your low back started hurting too, even though that wasn't injured.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You've done physical therapy. Maybe chiropractic adjustments. Some things helped initially, but you've plateaued. You're better than right after the accident, but you're not back to normal. You're starting to accept this might be permanent.
            </p>
            <p className="text-xl text-accent font-semibold">
              It doesn't have to be. Whiplash creates whole-body compensation patterns that need specific work to resolve.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Actually Happens in Whiplash
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              In a car accident, your body gets violently accelerated then decelerated. Your head whips forward and back (or side to side). This creates micro-tears in muscles, ligaments, and fascia throughout your neck, shoulders, and upper back.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Initial Injury (0-6 weeks)
                </h3>
                <p className="text-neutralDark/80">
                  Inflammation, pain, muscle guarding. Your body protects the injured area by splinting it with muscle tension. This is normal and appropriate initially.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Compensation Phase (6 weeks - 6 months)
                </h3>
                <p className="text-neutralDark/80">
                  As tissues heal, scar tissue forms. Your nervous system adapts to avoid painful movements. You develop compensatory movement patterns. Your fascia becomes dense and restricted. What started as acute injury becomes chronic dysfunction.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Chronic Phase (6+ months)
                </h3>
                <p className="text-neutralDark/80">
                  Compensation patterns are now ingrained. Limited neck rotation becomes your new normal. Shoulder tension is constant. You might develop headaches, jaw problems, or low back pain as your whole body adapts to the neck restriction.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Why Standard Treatment Falls Short
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  PT Often Focuses Too Locally
                </h3>
                <p className="text-neutralDark/80">
                  Physical therapy typically addresses the neck directly with exercises and stretches. This helps, but it misses the whole-body fascial restrictions and compensation patterns that developed.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Chiropractic Adjustments Without Soft Tissue Work
                </h3>
                <p className="text-neutralDark/80">
                  Adjusting joints that are locked up by fascial restrictions often provides only temporary relief. The fascial restriction pulls the joint back out of alignment.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Massage Feels Good But Doesn't Create Lasting Change
                </h3>
                <p className="text-neutralDark/80">
                  General relaxation massage can temporarily reduce tension but doesn't address the specific fascial restrictions, scar tissue, or movement pattern dysfunction from whiplash.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              My Approach to Whiplash Recovery
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  1. Release Deep Fascial Restrictions
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through Structural Integration, I work the entire system:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Deep neck and shoulder work to release chronic tension</li>
                  <li>• Address fascial restrictions throughout chest and upper back</li>
                  <li>• Work the cranial base and jaw (often affected but overlooked)</li>
                  <li>• Release protective patterns that became permanent</li>
                  <li>• Restore natural fascial sliding and tissue quality</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  2. Restore Normal Movement Patterns
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Movement education to retrain your nervous system:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Rebuild normal neck rotation and side-bending</li>
                  <li>• Restore thoracic spine mobility (often locked after whiplash)</li>
                  <li>• Address shoulder and arm compensation patterns</li>
                  <li>• Retrain proper head position and movement</li>
                  <li>• Integrate changes into daily activities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  3. Address Whole-Body Compensation
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Whiplash affects more than just your neck:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Balance work (vestibular system often affected)</li>
                  <li>• Breathing pattern restoration (chest tension limits breathing)</li>
                  <li>• Core and low back (compensating for limited neck movement)</li>
                  <li>• Jaw work if you developed TMJ issues</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Changes Look Like
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ Full, pain-free neck rotation</div>
              <div>✓ No more constant shoulder tension</div>
              <div>✓ Headaches reduce or disappear</div>
              <div>✓ Better posture naturally</div>
              <div>✓ Reduced muscle guarding</div>
              <div>✓ Improved sleep (less night pain)</div>
              <div>✓ Return to normal activities</div>
              <div>✓ Confidence moving your body again</div>
            </div>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              How Long Does Recovery Take?
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
              It depends on how long ago the accident was and how much compensation has set in. Generally:
            </p>

            <ul className="space-y-3 text-neutralDark/80 ml-6">
              <li>
                <strong className="text-neutralDark">Recent whiplash (2-6 months):</strong> Often see significant improvement in 4-8 sessions over 2-3 months
              </li>
              <li>
                <strong className="text-neutralDark">Chronic whiplash (6+ months):</strong> Typically requires 8-12 sessions over 3-6 months to fully unwind compensation patterns
              </li>
              <li>
                <strong className="text-neutralDark">Old injuries (years ago):</strong> May take longer but can still make substantial changes. Your body wants to return to normal function.
              </li>
            </ul>

            <p className="text-lg text-neutralDark/80 mt-6 leading-relaxed">
              The sooner after injury you start addressing fascial restrictions and compensation patterns, the faster and more complete your recovery.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz Car Accident Survivors
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Whether your accident was recent or years ago, if you're still dealing with neck pain, stiffness, or compensation patterns, there's more we can do. I help Santa Cruz residents fully recover from whiplash injuries through comprehensive fascial work and movement retraining.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/packages" variant="outline" size="lg" fullWidth>
              View Recovery Programs
            </Button>
          </div>

          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/injury-recovery" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Injury Recovery Hub
              </Link>
              <Link to="/neck-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Neck Pain Relief
              </Link>
              <Link to="/headache-migraine-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Headache & Migraine Relief
              </Link>
              <Link to="/back-pain-santa-cruz" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Back Pain Relief
              </Link>
              <Link to="/chronic-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Chronic Pain Relief
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

export default WhiplashRecovery;

