import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema } from '../utils/structuredData';

function CoreStrengthening() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Core Strengthening', url: '/core-strengthening' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Core Strengthening Santa Cruz | Functional Core Stability Training"
        description="Build real core strength and stability through functional training. Address back pain, improve performance, and develop a strong foundation in Santa Cruz."
        keywords="core strengthening santa cruz, core stability, core training, abs workout, lower back pain, functional core, core exercises"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Core Strengthening"
        subtitle="Forget crunches. Build a core that actually works."
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              You've Been Doing Core Training Wrong
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Hundreds of crunches. Planks for days. Your abs hurt, but your back still hurts too. You "work your core" regularly but you still feel unstable, weak, or like something isn't connecting properly.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Here's the problem: crunches and sit-ups aren't functional core training. They train movement your core rarely does in real life. Your core's real job is to resist movement and transfer force. Not to flex your spine repeatedly.
            </p>
            <p className="text-xl text-accent font-semibold">
              Real core strength is about stability, not endless sit-ups.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Is Your "Core" Actually?
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              Your core isn't just your abs. It's the entire musculature stabilizing your spine and pelvis. Think of it as a cylinder:
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6">
                <ul className="space-y-3 text-neutralDark/80">
                  <li><strong className="text-neutralDark">Top:</strong> Diaphragm (your breathing muscle)</li>
                  <li><strong className="text-neutralDark">Front:</strong> Transverse abdominis (deep abs), rectus abdominis (six-pack), obliques</li>
                  <li><strong className="text-neutralDark">Sides:</strong> Obliques, quadratus lumborum</li>
                  <li><strong className="text-neutralDark">Back:</strong> Multifidus, erector spinae, lats</li>
                  <li><strong className="text-neutralDark">Bottom:</strong> Pelvic floor muscles</li>
                </ul>
              </div>
              
              <p className="text-lg text-neutralDark/80 leading-relaxed">
                All of these work together to stabilize your spine, create intra-abdominal pressure, transfer force from your lower body to upper body, and protect your back. They need to work as a coordinated unit, not as isolated muscles.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Your Core Actually Does
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Resists Extension
                </h3>
                <p className="text-neutralDark/80">
                  Prevents your lower back from arching excessively. When you lift something heavy, carry a weight in front of you, or push something, your core fights the tendency for your back to hyperextend. This is critical for back health.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Resists Rotation
                </h3>
                <p className="text-neutralDark/80">
                  Controls and prevents unwanted rotation. When you carry something in one hand, walk, or run, your core stops you from rotating excessively. This is huge for functional strength and injury prevention.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Resists Lateral Flexion
                </h3>
                <p className="text-neutralDark/80">
                  Prevents side-bending. When you carry a weight on one side, your core keeps you upright. Critical for single-leg activities like walking and running.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Transfers Force
                </h3>
                <p className="text-neutralDark/80">
                  Acts as a bridge between your upper and lower body. When you throw, swing, or generate power from your legs, your core transfers that force up through your body. A weak core leaks power.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Creates Intra-Abdominal Pressure
                </h3>
                <p className="text-neutralDark/80">
                  Your diaphragm descends, your abs and back muscles engage, and your pelvic floor activates. This creates pressure in your abdominal cavity that stabilizes your spine. This is how you create a brace for heavy lifting.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Supports Your Breathing
                </h3>
                <p className="text-neutralDark/80">
                  Your diaphragm is part of your core. Proper breathing and core stability are inseparable. If you can't breathe properly, you can't have real core function.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              How to Actually Build Core Strength
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  1. Anti-Extension Exercises
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Train your core to resist extension:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Dead bugs (one of the best core exercises)</li>
                  <li>• Front planks (proper form, not for time)</li>
                  <li>• Ab wheel rollouts (advanced)</li>
                  <li>• Hollow body holds</li>
                  <li>• Any exercise where you fight your back arching</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  2. Anti-Rotation Exercises
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Resist rotational forces:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Pallof press (the king of anti-rotation)</li>
                  <li>• Bird dogs</li>
                  <li>• Single-arm carries</li>
                  <li>• Single-arm rows and presses</li>
                  <li>• Chops and lifts (controlled)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  3. Anti-Lateral Flexion
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Side planks (static hold and variations)</li>
                  <li>• Suitcase carries (loaded on one side)</li>
                  <li>• Single-leg exercises (inherently anti-lateral flexion)</li>
                  <li>• Waiter carries (weight overhead on one side)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  4. Carries (Loaded Carries)
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Some of the best core training:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Farmer's carry (weight in both hands)</li>
                  <li>• Suitcase carry (weight in one hand)</li>
                  <li>• Waiter carry (weight overhead)</li>
                  <li>• Front-rack carry (weight at chest)</li>
                  <li>• Carries train your core in a functional, real-world way</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  5. Proper Breathing Integration
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• 360° breathing (ribcage expansion)</li>
                  <li>• Coordinating breath with bracing</li>
                  <li>• Diaphragm and pelvic floor coordination</li>
                  <li>• Your core can't function properly without proper breathing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Why Traditional Ab Exercises Fall Short
            </h2>
            
            <div className="space-y-4 text-lg text-neutralDark/80">
              <p>
                <strong className="text-neutralDark">Crunches and sit-ups:</strong> Train spinal flexion (forward bending). Your core rarely needs to do this in real life. Plus, repeated spinal flexion under load can create back problems, especially disc issues. They have their place (sports requiring rotation), but they're overused.
              </p>
              <p>
                <strong className="text-neutralDark">Holding planks for minutes:</strong> Once you can hold a plank for 60 seconds with perfect form, holding longer isn't making you stronger. It's an endurance test. Progress by making planks harder (adding instability, arm/leg lifts), not longer.
              </p>
              <p>
                <strong className="text-neutralDark">Focusing only on abs:</strong> Your six-pack is just one small part of your core. Obsessing over rectus abdominis development while ignoring deeper stabilizers, obliques, and back creates imbalance and dysfunction.
              </p>
              <p>
                <strong className="text-neutralDark">Training core in isolation:</strong> Your core works as part of integrated movement. Train it that way. Carries, single-leg work, and compound movements build functional core strength better than isolated ab exercises.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              How Core Weakness Shows Up
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 text-neutralDark/80">
              <div>• Chronic lower back pain</div>
              <div>• Back arching during overhead pressing</div>
              <div>• Inability to maintain neutral spine</div>
              <div>• Feeling "weak" in the middle</div>
              <div>• Poor posture</div>
              <div>• Compensating with back muscles</div>
              <div>• Difficulty with single-leg movements</div>
              <div>• Loss of power in sports</div>
              <div>• Feeling unstable during lifting</div>
              <div>• Pelvic floor dysfunction</div>
              <div>• Breathing dysfunction</div>
              <div>• Hip or SI joint pain</div>
            </div>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              My Approach to Core Development
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              I don't do traditional ab workouts. We build core function through:
            </p>

            <ul className="space-y-3 text-lg text-neutralDark/80 ml-6">
              <li>✓ Addressing fascial restrictions limiting core activation</li>
              <li>✓ Teaching proper breathing mechanics (foundation of core function)</li>
              <li>✓ Anti-extension, anti-rotation, anti-lateral flexion training</li>
              <li>✓ Loaded carries and functional movements</li>
              <li>✓ Integrating core into all movement patterns</li>
              <li>✓ Building strength that transfers to real life</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Real Core Strength Looks Like
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ No more lower back pain</div>
              <div>✓ Better posture naturally</div>
              <div>✓ Stable during all movements</div>
              <div>✓ Transfer force efficiently</div>
              <div>✓ Better athletic performance</div>
              <div>✓ Confidence in your body</div>
              <div>✓ Improved balance</div>
              <div>✓ Functional strength for life</div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz Active People
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Whether you're surfing, lifting, running, or just want to move through life without back pain, real core strength is your foundation. Let's build a core that actually works for you.
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

        </div>
      </div>
    </PageLayout>
  );
}

export default CoreStrengthening;

