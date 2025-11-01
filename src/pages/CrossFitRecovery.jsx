import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';

function CrossFitRecovery() {
  return (
    <PageLayout>
      <SEO 
        title="CrossFit Recovery & Performance Santa Cruz | Mobility for Athletes"
        description="Improve CrossFit performance and recover faster. Address mobility restrictions, prevent injuries, and optimize movement quality for functional fitness athletes in Santa Cruz."
        keywords="crossfit santa cruz, crossfit recovery, crossfit mobility, functional fitness, crossfit injury prevention, athletic performance"
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="CrossFit Performance & Recovery"
        subtitle="Move better, lift heavier, recover faster"
      />

      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Your Work Capacity Is Great. Your Movement Quality Needs Help.
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You can grind through a tough WOD. Push yourself hard. But your squat depth isn't great. Overhead position feels wonky. Your back rounds under load. You're working around nagging injuries. Recovery takes forever.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You've heard "just do more mobility work" a thousand times. You stretch. You foam roll. You do the band distractions. But your restrictions aren't improving. You're still tight, still compensating, still not moving optimally.
            </p>
            <p className="text-xl text-accent font-semibold">
              Here's the truth: CrossFit exposes mobility limitations better than almost any other training. But it doesn't fix them.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Common CrossFit Movement Limitations
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Can't Get Deep in the Squat
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Your heels lift. You fold forward. Knees cave in. Depth is inconsistent.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Actual problem:</strong> Limited ankle dorsiflexion, tight hip capsules, restricted thoracic spine, weak anterior core
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Struggle with Overhead Positions
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Shoulder mobility limits your snatch, overhead squat, handstand work. You arch your back to compensate.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Actual problem:</strong> Restricted shoulder capsule, tight lats and chest, poor thoracic extension, limited scapular upward rotation
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Hip Hinge Feels Off
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Deadlifts feel awkward. Your back rounds. You can't feel your hamstrings engage properly.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Actual problem:</strong> Limited hip flexion mobility, weak or inhibited glutes, restricted hamstrings, poor pelvic control
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Front Rack Position Is Painful
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Your wrists hurt. Elbows won't come up. You can barely hold the bar in the front rack.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Actual problem:</strong> Wrist extension limitation, tight lats pulling shoulders forward, restricted thoracic rotation, limited shoulder flexion
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Constantly Beat Up
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Always sore. Nagging injuries. Taking weeks to feel recovered. Can't train at full intensity consistently.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Actual problem:</strong> Poor movement quality creating excessive wear, compensation patterns overloading tissues, inadequate recovery strategies
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Why Standard "Mobility Work" Isn't Enough
            </h2>
            
            <div className="space-y-4 text-lg text-neutralDark/80">
              <p>
                <strong className="text-neutralDark">Foam rolling before class:</strong> Creates temporary tissue quality improvement but doesn't address underlying fascial restrictions or movement pattern dysfunction. It's like putting a band-aid on structural problems.
              </p>
              <p>
                <strong className="text-neutralDark">Band distractions:</strong> Can help joint positioning in the moment, but if you don't have the strength and control to maintain that position, it doesn't transfer to loaded movement.
              </p>
              <p>
                <strong className="text-neutralDark">Generic stretching:</strong> Passive flexibility isn't the same as active, usable mobility under load. You need motor control and strength in new ranges.
              </p>
              <p>
                <strong className="text-neutralDark">Just "working on it":</strong> Doing a few mobility drills here and there won't overcome deep fascial restrictions or years of compensation patterns. You need systematic, progressive work.
              </p>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              How I Help CrossFit Athletes
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  1. Address Actual Restrictions
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through Structural Integration:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Deep fascial work to create tissue quality</li>
                  <li>• Release chronically tight areas (lats, hip flexors, calves)</li>
                  <li>• Improve joint capsule mobility</li>
                  <li>• Address compensation patterns from old injuries</li>
                  <li>• Create space and range that actually lasts</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  2. Build Usable Mobility
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Movement training specifically for CrossFit demands:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Ankle mobility for deep squats</li>
                  <li>• Hip mobility for snatch, clean, pistols</li>
                  <li>• Shoulder mobility for overhead work</li>
                  <li>• Thoracic mobility for all pressing and lifting</li>
                  <li>• Wrist and forearm work for gymnastics and front rack</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  3. Optimize Movement Patterns
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Clean up squat mechanics</li>
                  <li>• Improve hip hinge quality</li>
                  <li>• Better overhead positioning</li>
                  <li>• More efficient movement (less wasted energy)</li>
                  <li>• Reduce injury risk through better mechanics</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  4. Enhance Recovery
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Better tissue quality = faster recovery</li>
                  <li>• Improved movement = less wear and tear</li>
                  <li>• Address compensations before they become injuries</li>
                  <li>• Teach effective self-care strategies</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Changes When You Move Better
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ Deeper, more stable squats</div>
              <div>✓ Better overhead position</div>
              <div>✓ Cleaner Olympic lifts</div>
              <div>✓ Less pain in movements</div>
              <div>✓ Faster recovery between sessions</div>
              <div>✓ Fewer nagging injuries</div>
              <div>✓ More consistent training</div>
              <div>✓ PR potential unlocked</div>
            </div>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz CrossFit Athletes
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
              Whether you train at a local box or in your garage, if mobility restrictions are holding back your performance, let's address them properly. Not just more stretching. Actual fascial work combined with intelligent movement training.
            </p>

            <p className="text-lg text-neutralDark/80 leading-relaxed">
              I work with CrossFit athletes to improve movement quality, prevent injuries, and optimize performance. You keep doing CrossFit. I help you do it better.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <p className="text-lg text-neutralDark/80 italic leading-relaxed">
              "I've been doing CrossFit for 5 years. I thought my squat depth was just 'how I'm built.' After working with Rock for 3 months, I have the deepest squat in my gym. Turns out I just had really tight ankles and hips. Who knew?"
            </p>
            <p className="text-neutralDark/70 mt-2">
              - Sarah, Santa Cruz CrossFitter
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

export default CrossFitRecovery;

