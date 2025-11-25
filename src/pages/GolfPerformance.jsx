import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function GolfPerformance() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Golf Performance', url: '/golf-performance' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Golf Performance & Mobility Santa Cruz | Improve Your Swing"
        description="Improve your golf game through better mobility, rotation, and body mechanics. Address swing limitations and prevent golf injuries in Santa Cruz."
        keywords="golf fitness santa cruz, golf mobility, improve golf swing, golf performance, golf injury prevention, rotational mobility"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Golf Performance & Mobility"
        subtitle="Your body is the foundation of your swing"
        alt="Golf performance training using structural integration and movement training to improve swing mechanics and rotational mobility in Santa Cruz"
      />


      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Your Golf Game Is Limited by Your Body, Not Your Swing Thoughts
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You've taken lessons. You know what you're supposed to do. Your pro keeps telling you to rotate more, extend through the ball, maintain your posture. But your body won't do what your brain wants.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Your hips don't rotate fully. Your thoracic spine is stiff. Your shoulders are tight. You can't maintain your spine angle. By the back nine, everything hurts. You know the mechanics of a good swing, but your body physically can't execute it.
            </p>
            <p className="text-xl text-accent font-semibold">
              No amount of swing coaching resolves physical limitations. You need better mobility and body mechanics.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Physical Limitations That Ruin Your Golf Game
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Limited Hip Rotation
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Your backswing and follow-through require massive hip rotation. If your hips don't rotate (internal and external rotation), you'll compensate with your lower back. This destroys your power and creates back pain.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Result:</strong> Weak drives, inconsistent contact, lower back pain after 18 holes
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Stiff Thoracic Spine
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Golf is a rotational sport. Most of that rotation should come from your thoracic spine (mid-back). But desk work and aging lock up this area. You try to rotate from your lower back instead, which doesn't work and causes injury.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Result:</strong> Limited backswing, casting, over-the-top moves, back and rib pain
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Tight Shoulders and Chest
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Your lead arm needs to stay extended across your chest during the backswing. If your chest and shoulders are tight (they are for most golfers), you can't get proper depth in your backswing without losing posture.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Result:</strong> Short backswing, loss of distance, inconsistent ball striking
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Can't Maintain Posture
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Golf requires maintaining a forward-tilted spine position throughout the swing. This takes hip mobility, core stability, and back strength. Without these, you stand up through impact (early extension), destroying your consistency.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Result:</strong> Thin shots, fat shots, inconsistency, loss of power
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Poor Ankle and Foot Stability
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Your feet are your connection to the ground. You need stable ankles and feet to transfer power from the ground up through your body. Poor foot/ankle function leaks power and ruins your balance.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Result:</strong> Balance issues, power loss, inconsistent contact
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Weak Core and Glutes
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Your core and glutes stabilize your pelvis and spine during the rotational forces of the golf swing. If these are weak, you lose power and put excessive stress on your back and joints.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Result:</strong> Loss of distance, fatigue late in the round, injuries
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              How I Help Golfers Improve Their Game
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  1. Increase Rotational Mobility
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through Structural Integration:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Free up hip rotation (internal and external)</li>
                  <li>• Restore thoracic spine rotation and extension</li>
                  <li>• Release tight shoulders and chest</li>
                  <li>• Improve ribcage mobility</li>
                  <li>• Address fascial restrictions limiting rotation</li>
                </ul>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  2. Build Golf-Specific Strength and Stability
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Movement training for better performance:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Core stability for rotational power</li>
                  <li>• Glute strength for hip drive</li>
                  <li>• Single-leg stability (critical for golf)</li>
                  <li>• Anti-rotation work to control the swing</li>
                  <li>• Proper sequencing drills</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  3. Address Pain and Injury Patterns
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Fix lower back pain from poor rotation</li>
                  <li>• Address lead wrist and elbow issues</li>
                  <li>• Reduce shoulder pain from swing mechanics</li>
                  <li>• Prevent common golf injuries</li>
                  <li>• Keep you playing pain-free</li>
                </ul>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  4. Optimize Movement Quality
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Better hip hinge for setup and posture</li>
                  <li>• Improved balance and weight transfer</li>
                  <li>• More efficient movement patterns</li>
                  <li>• Consistent mechanics even when fatigued</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              What Changes in Your Golf Game
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ Deeper, fuller backswing</div>
              <div>✓ More rotation without pain</div>
              <div>✓ Better weight transfer</div>
              <div>✓ Increased distance off the tee</div>
              <div>✓ More consistent ball striking</div>
              <div>✓ Better posture throughout swing</div>
              <div>✓ Play 18 holes without pain</div>
              <div>✓ Lower scores</div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Common Golf Injuries We Prevent and Treat
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Lower Back Pain
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Usually from trying to rotate with stiff hips and thoracic spine. The lower back compensates and gets overloaded.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Golfer's Elbow
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Medial elbow pain from gripping too tightly and compensating for poor body mechanics.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Lead Wrist Issues
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  From hitting fat shots or trying to muscle the ball when body mechanics are off.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Shoulder Pain
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Rotator cuff and shoulder issues from poor sequencing and trying to force rotation.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Hip Pain
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  From forcing rotation through stiff hip joints, especially on the trail hip in the backswing.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Rib Injuries
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Intercostal strains from trying to rotate with a stiff thoracic spine and ribcage.
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz Golfers
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              Whether you play at Pasatiempo, DeLaveaga, or any of the other great courses around Santa Cruz, if physical limitations are holding back your golf game, let's address them. Better mobility and body mechanics will drop strokes off your game faster than another swing lesson.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              I work with golfers of all levels to improve their physical capacity for golf. You keep taking lessons. I'll make sure your body can actually do what your instructor is teaching you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/packages" variant="outline" size="lg" fullWidth>
              View Training Programs
            </Button>
          </div>
          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/sports-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Sports Performance Hub
              </Link>
              <Link to="/athletic-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Athletic Performance
              </Link>
              <Link to="/back-pain-santa-cruz" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Back Pain Relief
              </Link>
              <Link to="/hip-pain-treatment" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Hip Pain Treatment
              </Link>
              <Link to="/shoulder-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Shoulder Pain Relief
              </Link>
              <Link to="/mobility-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Mobility Training
              </Link>
              <Link to="/movement-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Movement Training Hub
              </Link>
              <Link to="/sports-injury-prevention" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Injury Prevention
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default GolfPerformance;
