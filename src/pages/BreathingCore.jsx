import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function BreathingCore() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Breathing & Core Training', url: '/breathing-core' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Breathing & Core Training Santa Cruz | Diaphragm Function"
        description="Improve breathing mechanics, core stability, and diaphragm function. Address breathing pattern dysfunction and build real core strength in Santa Cruz."
        keywords="breathing training santa cruz, core stability, diaphragm function, breathing dysfunction, core strength, proper breathing"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Breathing & Core Training"
        subtitle="Your diaphragm is your most important core muscle"
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              You've Been Breathing Wrong Your Whole Life
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Sounds dramatic, but most people breathe dysfunctionally. Chest breathing instead of belly breathing. Shallow breaths. Holding your breath during effort. Breathing into your shoulders. Using your neck muscles to breathe.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              This doesn't just affect your cardio. It affects your core stability, your posture, your stress levels, your back pain, even your pelvic floor. Your breathing pattern influences almost everything about how your body functions.
            </p>
            <p className="text-xl text-accent font-semibold">
              Improve your breathing, and you improve a lot of other problems.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Is Diaphragmatic Breathing?
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              Your diaphragm is a dome-shaped muscle that sits under your lungs. When it contracts, it pulls down, creating negative pressure that draws air into your lungs. This is how you're supposed to breathe.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Proper Diaphragmatic Breathing
                </h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>✓ Belly expands on inhale (360° expansion)</li>
                  <li>✓ Chest rises minimally</li>
                  <li>✓ Shoulders stay relaxed</li>
                  <li>✓ Ribcage expands in all directions</li>
                  <li>✓ Pelvic floor descends slightly on inhale</li>
                  <li>✓ Creates intra-abdominal pressure for core stability</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Dysfunctional Chest Breathing
                </h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>✗ Chest and shoulders rise excessively</li>
                  <li>✗ Belly doesn't expand (might even pull in)</li>
                  <li>✗ Neck muscles visibly working</li>
                  <li>✗ Upper ribs flare</li>
                  <li>✗ Shallow, rapid breaths</li>
                  <li>✗ No core stability from breathing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Why Breathing Dysfunction Happens
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Chronic Stress
                </h3>
                <p className="text-neutralDark/80">
                  Stress activates your sympathetic nervous system, shifting you into shallow, rapid chest breathing. Do this for years, and chest breathing becomes your default pattern even when you're calm.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Poor Posture
                </h3>
                <p className="text-neutralDark/80">
                  Slouched, forward head posture compresses your diaphragm and restricts rib mobility. You literally can't breathe properly in this position, so you compensate with chest breathing.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Tight Abs/Core Bracing
                </h3>
                <p className="text-neutralDark/80">
                  Constantly holding your abs tight (trying to "engage your core" all day) prevents your diaphragm from descending. You're bracing against breathing, forcing shallow chest breaths.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Restricted Ribcage
                </h3>
                <p className="text-neutralDark/80">
                  Tight fascia around your ribs, back, and chest limits ribcage expansion. Your diaphragm tries to work, but your ribs can't move, so you resort to shoulder breathing.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Never Learned Proper Breathing
                </h3>
                <p className="text-neutralDark/80">
                  Most people were never taught how to breathe properly. You picked up whatever pattern worked as a kid and kept it. That pattern might be terrible.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              How Breathing Affects Everything
            </h2>

            <div className="space-y-4 text-lg text-neutralDark/80">
              <p>
                <strong className="text-neutralDark">Core Stability:</strong> Your diaphragm creates intra-abdominal pressure (IAP) that stabilizes your spine. No proper diaphragm function = no real core stability. All the planks in the world won't resolve this.
              </p>
              <p>
                <strong className="text-neutralDark">Back Pain:</strong> Poor breathing means poor core stability, which means your back muscles overwork trying to stabilize you. Chronic back tension often starts with breathing dysfunction.
              </p>
              <p>
                <strong className="text-neutralDark">Pelvic Floor:</strong> Your diaphragm and pelvic floor work together. If your diaphragm doesn't descend properly, your pelvic floor can't function optimally. Issues like incontinence or pelvic pain often have a breathing component.
              </p>
              <p>
                <strong className="text-neutralDark">Stress and Anxiety:</strong> Breathing drives your nervous system. Chest breathing keeps you in sympathetic (fight or flight). Diaphragmatic breathing activates parasympathetic (rest and digest). You can literally breathe yourself calm.
              </p>
              <p>
                <strong className="text-neutralDark">Performance:</strong> Proper breathing improves oxygen delivery, endurance, and recovery. It also allows you to create more force (proper bracing) for lifting and explosive movements.
              </p>
              <p>
                <strong className="text-neutralDark">Posture:</strong> Your ribcage position affects your whole spine. Breathing pattern directly influences whether you're in extension (ribs flared) or neutral position.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              My Approach to Breathing & Core Training
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  1. Release Restrictions
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through Structural Integration:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Free up ribcage mobility</li>
                  <li>• Release tight diaphragm attachments</li>
                  <li>• Address restricted fascia around chest, back, and abs</li>
                  <li>• Improve thoracic spine mobility</li>
                  <li>• Create space for proper breathing mechanics</li>
                </ul>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  2. Retrain Breathing Patterns
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Movement education focused on breath:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Teach proper diaphragmatic breathing</li>
                  <li>• 360° breathing (ribcage expansion in all directions)</li>
                  <li>• Breathing during movement (don't hold your breath)</li>
                  <li>• Stress management breathing techniques</li>
                  <li>• Proper bracing for lifting (IAP)</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  3. Build Real Core Strength
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Not crunches. Functional core stability:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Anti-rotation work</li>
                  <li>• Anti-extension work</li>
                  <li>• Breathing with load (deadbugs, carries, etc.)</li>
                  <li>• Integrate breathing into all movements</li>
                  <li>• Build a core that actually stabilizes you</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Changes When You Breathe Right
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ Better core stability</div>
              <div>✓ Less back pain</div>
              <div>✓ Reduced stress and anxiety</div>
              <div>✓ Improved posture naturally</div>
              <div>✓ Better athletic performance</div>
              <div>✓ Faster recovery</div>
              <div>✓ More efficient movement</div>
              <div>✓ Feeling calmer overall</div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz Active People
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Whether you're dealing with chronic back pain, feeling stressed, or just want better core stability and performance, breathing is where we start. It's the foundation of everything. Let's get yours working right.
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

          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/movement-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Movement Training Hub
              </Link>
              <Link to="/core-strengthening" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Core Strengthening
              </Link>
              <Link to="/posture-correction" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Posture Correction
              </Link>
              <Link to="/stress-anxiety-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Stress & Anxiety Relief
              </Link>
              <Link to="/desk-worker-wellness" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Desk Worker Wellness
              </Link>
              <Link to="/back-pain-santa-cruz" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Back Pain Relief
              </Link>
              <Link to="/wellness" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Wellness Hub
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

export default BreathingCore;

