import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function BalanceTraining() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Balance Training', url: '/balance-training' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Balance Training Santa Cruz | Fall Prevention for Seniors"
        description="Improve balance, stability, and coordination. Fall prevention training and vestibular work for seniors and active adults in Santa Cruz."
        keywords="balance training santa cruz, fall prevention, balance for seniors, stability training, vestibular training, coordination"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Balance & Stability Training"
        subtitle="Confidence in movement comes from better balance"
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Your Balance Isn't What It Used to Be
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You catch yourself wobbling. Standing on one foot feels sketchy. Uneven ground makes you nervous. You grab railings more than you'd like to admit. Maybe you've already had a close call or a fall.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              This isn't just about aging. Your balance is trainable at any age. The problem is most people don't train it until it becomes a problem. By then, compensation patterns are ingrained and confidence is shaken.
            </p>
            <p className="text-xl text-accent font-semibold">
              Good news: Balance improves quickly when you train it properly.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              The Three Systems of Balance
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              Your balance depends on three sensory systems working together. When one system declines, the others have to compensate. If multiple systems are compromised, your balance suffers.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  1. Visual System (Your Eyes)
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  You use your eyes to orient yourself in space. Where is the ground? Which way is up? What's moving around you?
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Problem:</strong> Most people over-rely on vision for balance. Close your eyes and you wobble immediately. This over-reliance masks problems in the other two systems.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  2. Vestibular System (Inner Ear)
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Fluid-filled canals in your inner ear detect head position and movement. This tells you if you're upright, tilting, or rotating.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Problem:</strong> Vestibular function declines with age and lack of use. Conditions like BPPV or vestibular neuritis can damage it. Many people have undiagnosed vestibular issues affecting their balance.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  3. Proprioceptive System (Body Sense)
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Sensors in your joints, muscles, and skin tell you where your body parts are in space. This is your "body awareness."
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Problem:</strong> Stiff joints, tight fascia, and lack of varied movement reduce proprioception. You literally lose the ability to feel where your body is.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Why Balance Gets Worse
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  You Stop Challenging It
                </h3>
                <p className="text-neutralDark/80">
                  Modern life is flat, stable, and predictable. You walk on even surfaces, wear supportive shoes, hold railings. You never practice balancing on one leg, navigating uneven terrain, or moving in unpredictable ways. Use it or lose it applies to balance.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Ankle Mobility Declines
                </h3>
                <p className="text-neutralDark/80">
                  Your ankles are your first line of defense for balance. When you start to tip, ankle muscles make micro-adjustments. If your ankles are stiff (and most people's are), you can't make these corrections. You're less stable.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Weak Hips and Core
                </h3>
                <p className="text-neutralDark/80">
                  Balance requires strength, particularly in your hips (glutes, especially glute medius) and core. When these are weak, you can't stabilize yourself effectively.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Poor Proprioception
                </h3>
                <p className="text-neutralDark/80">
                  Years of sitting, wearing cushioned shoes, and limited movement variety reduces your body awareness. You can't balance well if you don't know where your body is.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Fear of Falling
                </h3>
                <p className="text-neutralDark/80">
                  Once you've had a fall or near-fall, fear sets in. You move more cautiously, avoid challenging situations, and actually practice poor balance strategies. This creates a negative spiral.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Medication Side Effects
                </h3>
                <p className="text-neutralDark/80">
                  Many medications affect balance: blood pressure meds, sedatives, anti-anxiety drugs, pain medications. If you're on multiple medications, the combined effect can be significant.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              My Approach to Balance Training
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  1. Improve Physical Foundation
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through Structural Integration and movement work:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Restore ankle mobility (critical for balance)</li>
                  <li>• Free up hip and core function</li>
                  <li>• Address fascial restrictions limiting movement</li>
                  <li>• Improve overall body awareness (proprioception)</li>
                  <li>• Create a more stable foundation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  2. Progressive Balance Challenges
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Systematically challenge your balance systems:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Single-leg balance progressions</li>
                  <li>• Balance on unstable surfaces (foam pads, balance boards)</li>
                  <li>• Balance with eyes closed (reduce visual reliance)</li>
                  <li>• Head movements while balancing (vestibular training)</li>
                  <li>• Dynamic balance (walking, turning, reaching while balanced)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  3. Strength Training for Stability
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Ankle strengthening (often neglected)</li>
                  <li>• Hip strengthening (especially glute medius for lateral stability)</li>
                  <li>• Core stability (anti-rotation and anti-extension work)</li>
                  <li>• Functional movements that require balance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  4. Build Confidence Through Practice
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Safe environment to challenge yourself</li>
                  <li>• Progressive difficulty (start easy, gradually increase challenge)</li>
                  <li>• Practice falling safely and recovery strategies</li>
                  <li>• Real-world application (stairs, uneven ground, obstacles)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Fall Prevention Strategies
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              Beyond training, practical strategies to reduce fall risk:
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-neutralDark/80">
              <div>✓ Improve home lighting</div>
              <div>✓ Remove tripping hazards (rugs, clutter)</div>
              <div>✓ Install grab bars in bathroom</div>
              <div>✓ Wear appropriate footwear</div>
              <div>✓ Review medications with doctor</div>
              <div>✓ Get vision checked regularly</div>
              <div>✓ Use assistive devices if needed (no shame)</div>
              <div>✓ Keep moving and training</div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Better Balance Looks Like
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ Confident walking on uneven ground</div>
              <div>✓ Easy single-leg balance</div>
              <div>✓ Less fear of falling</div>
              <div>✓ Quicker reactions to perturbations</div>
              <div>✓ Better stability in daily activities</div>
              <div>✓ More independence</div>
              <div>✓ Reduced fall risk</div>
              <div>✓ Freedom to move without worry</div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz Active Seniors
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              Whether you're 55 or 85, balance training can dramatically reduce your fall risk and improve your confidence. Don't wait until you've had a fall. Prevention is always easier than recovery.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              I help Santa Cruz seniors and active adults maintain independence through comprehensive balance training, mobility work, and strength building. Let's keep you stable and confident.
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
          <div className="mt-12 pt-8 border-t border-neutralDark/20">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/wellness" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Wellness Hub
              </Link>
              <Link to="/active-aging" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Active Aging
              </Link>
              <Link to="/movement-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Movement Training Hub
              </Link>
              <Link to="/mobility-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Mobility Training
              </Link>
              <Link to="/core-strengthening" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Core Strengthening
              </Link>
              <Link to="/posture-correction" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Posture Correction
              </Link>
              <Link to="/chronic-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Chronic Pain Relief
              </Link>
              <Link to="/structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Structural Integration
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default BalanceTraining;

