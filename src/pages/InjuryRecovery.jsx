import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';

function InjuryRecovery() {
  return (
    <PageLayout>
      <SEO 
        title="Sports Injury Recovery Santa Cruz | Return to Activity Faster"
        description="Speed your recovery from sports injuries with Structural Integration and movement therapy. Address root causes and prevent re-injury."
        keywords="sports injury recovery santa cruz, injury rehabilitation, return to sport, injury prevention, movement therapy santa cruz"
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Injury Recovery & Prevention"
        subtitle="Heal faster, come back stronger, stay injury-free"
      />

      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Stop Getting the Same Injury Over and Over
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You recovered from your injury. You did the PT exercises. You took time off. But now you're back to your sport and... the same thing flares up again.
            </p>
            <p className="text-xl text-accent font-semibold mb-6">
              Why? Because you treated the injury, not what caused it.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Common Injuries I Work With
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-neutralDark mb-2">Shoulders</h3>
                <ul className="space-y-1 text-neutralDark/80">
                  <li>• Rotator cuff strains</li>
                  <li>• Shoulder impingement</li>
                  <li>• Labral issues</li>
                  <li>• Frozen shoulder</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-neutralDark mb-2">Knees & Hips</h3>
                <ul className="space-y-1 text-neutralDark/80">
                  <li>• Runner's knee</li>
                  <li>• IT band syndrome</li>
                  <li>• Hip impingement</li>
                  <li>• Meniscus recovery</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-neutralDark mb-2">Ankles & Feet</h3>
                <ul className="space-y-1 text-neutralDark/80">
                  <li>• Plantar fasciitis</li>
                  <li>• Achilles tendonitis</li>
                  <li>• Ankle sprains</li>
                  <li>• Foot mechanics</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-neutralDark mb-2">Back & Spine</h3>
                <ul className="space-y-1 text-neutralDark/80">
                  <li>• Disc issues</li>
                  <li>• Muscle strains</li>
                  <li>• SI joint dysfunction</li>
                  <li>• Spinal injuries</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              My Approach to Injury Recovery
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  1. Find the Real Problem
                </h3>
                <p className="text-neutralDark/80">
                  Most injuries aren't random bad luck. They're the result of structural imbalances, movement compensation patterns, and accumulated stress. We find and fix those underlying issues.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  2. Speed Recovery with Manual Therapy
                </h3>
                <p className="text-neutralDark/80">
                  Structural Integration releases fascial restrictions, reduces scar tissue, improves circulation, and helps damaged tissue heal faster and more completely.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  3. Rebuild Better Movement Patterns
                </h3>
                <p className="text-neutralDark/80">
                  Through movement education, you'll learn to move in ways that don't stress the injured area. When you return to activity, you'll be moving better than before the injury.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  4. Prevent Future Injuries
                </h3>
                <p className="text-neutralDark/80">
                  You'll leave with tools to maintain better mechanics, identify warning signs early, and keep your body resilient long-term.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Perfect for Active Santa Cruz Residents
            </h2>
            <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
              Whether you're a surfer dealing with shoulder issues, a cyclist with IT band problems, a runner with chronic knee pain, or a weekend warrior who went too hard—I help active people recover fully and get back to doing what they love.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              The goal isn't just to stop hurting. It's to come back stronger, move better, and prevent the injury from happening again.
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

export default InjuryRecovery;

