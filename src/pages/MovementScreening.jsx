import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema } from '../utils/structuredData';

function MovementScreening() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Movement Assessment', url: '/movement-screening' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Movement Assessment Santa Cruz | Functional Movement Screening"
        description="Comprehensive movement assessment to identify imbalances, restrictions, and injury risk. Functional movement screening in Santa Cruz."
        keywords="movement assessment santa cruz, functional movement screening, movement analysis, injury prevention, biomechanics assessment"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Movement Assessment"
        subtitle="Understand how you move. Fix what's not working."
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              You Can't Fix What You Don't Understand
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You know something's off. Maybe one side feels tighter. Maybe you compensate without realizing it. Maybe you've been injured and don't move the same way anymore.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              A comprehensive movement assessment reveals what's actually happening in your body.the imbalances you can't see, the compensations you don't know you're making, the restrictions limiting your performance.
            </p>
            <p className="text-xl text-accent font-semibold">
              Once you understand how you move, we can address it.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What a Movement Assessment Reveals
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Structural Imbalances
                </h3>
                <p className="text-neutralDark/80">
                  Are your shoulders level? Is one hip higher? Does your pelvis rotate to one side? These asymmetries create compensation patterns and eventual pain.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Movement Restrictions
                </h3>
                <p className="text-neutralDark/80">
                  Where are you limited? Which joints don't move through full range? What's restricted that shouldn't be? What's hypermobile to compensate for what's stuck?
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Compensation Patterns
                </h3>
                <p className="text-neutralDark/80">
                  Your body is smart.when one area doesn't work, another takes over. But compensations create new problems. We find them before they become painful.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Injury Risk Factors
                </h3>
                <p className="text-neutralDark/80">
                  Weak glutes? Limited ankle mobility? Poor core integration? These increase injury risk. We identify vulnerabilities before they become injuries.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Performance Limiters
                </h3>
                <p className="text-neutralDark/80">
                  What's holding you back? Poor hip extension limiting your running stride? Restricted thoracic spine limiting your golf swing? We find it.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What's Included in the Assessment
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Static Postural Assessment
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  How you stand reveals a lot. We assess:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Head position (forward head posture)</li>
                  <li>• Shoulder height and rotation</li>
                  <li>• Spinal curves and alignment</li>
                  <li>• Pelvic position and rotation</li>
                  <li>• Leg alignment</li>
                  <li>• Foot position and arches</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Range of Motion Testing
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  We test mobility in key joints:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Ankle dorsiflexion</li>
                  <li>• Hip flexion, extension, rotation</li>
                  <li>• Thoracic spine rotation</li>
                  <li>• Shoulder flexion, extension, rotation</li>
                  <li>• Neck mobility</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Functional Movement Patterns
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  How you move matters more than how you stand:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Squat pattern (depth, knee tracking, balance)</li>
                  <li>• Hinge pattern (hip vs. back dominant)</li>
                  <li>• Single-leg balance and stability</li>
                  <li>• Overhead reach and shoulder mechanics</li>
                  <li>• Rotation patterns</li>
                  <li>• Gait analysis (how you walk)</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Strength & Activation Testing
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  Which muscles are weak or not firing properly:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Glute activation (often "asleep")</li>
                  <li>• Core stability and integration</li>
                  <li>• Rotator cuff function</li>
                  <li>• VMO activation (inner quad for knee stability)</li>
                  <li>• Postural muscle endurance</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Fascial Restrictions Assessment
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  Where is fascia restricted or dense:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Palpation of key fascial lines</li>
                  <li>• Tissue quality assessment</li>
                  <li>• Areas of chronic tension</li>
                  <li>• Scar tissue from old injuries</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              What You Get
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">📊</div>
                <div>
                  <h3 className="font-semibold text-neutralDark mb-1">Clear Understanding</h3>
                  <p className="text-neutralDark/80">You'll finally understand what's actually going on in your body and why you hurt or move the way you do.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl">🎯</div>
                <div>
                  <h3 className="font-semibold text-neutralDark mb-1">Specific Action Plan</h3>
                  <p className="text-neutralDark/80">Not generic advice. A personalized roadmap for addressing your specific imbalances and restrictions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl">🔍</div>
                <div>
                  <h3 className="font-semibold text-neutralDark mb-1">Root Cause Identification</h3>
                  <p className="text-neutralDark/80">Why your shoulder hurts might have nothing to do with your shoulder. We find the actual source.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl">📝</div>
                <div>
                  <h3 className="font-semibold text-neutralDark mb-1">Written Report (Optional)</h3>
                  <p className="text-neutralDark/80">Detailed assessment findings and recommendations you can refer back to or share with other practitioners.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Who Benefits from Movement Assessment
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">Athletes</h3>
                <p className="text-neutralDark/80">
                  Identify limitations holding back performance. Find imbalances before they become injuries.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">Post-Injury</h3>
                <p className="text-neutralDark/80">
                  Understand what compensation patterns you've developed. Create a plan to return to full function.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">Chronic Pain Sufferers</h3>
                <p className="text-neutralDark/80">
                  Finally understand why the pain keeps coming back. Address root causes, not just symptoms.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">Prevention-Focused</h3>
                <p className="text-neutralDark/80">
                  Catch problems early before they become painful or limit your activities.
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Assessment + Action
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              The assessment is the first step. Then we create a plan.whether that's a full Structural Integration series, targeted movement training, or a hybrid approach. You'll know exactly what you need and why.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Book Movement Assessment
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

export default MovementScreening;

