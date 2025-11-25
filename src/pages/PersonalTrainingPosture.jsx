import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function PersonalTrainingPosture() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Movement Training', url: '/movement-training' },
    { name: 'Personal Training & Posture', url: '/personal-training-posture' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Personal Training & Posture Improvement Santa Cruz | Fitness Coach"
        description="Personal training combined with structural bodywork. Private coaching focused on movement quality, posture improvement, and lasting results in Santa Cruz."
        keywords="personal training santa cruz, fitness coach, personal coach, private training, structural bodywork, posture improvement, movement coach, one on one training"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Personal Training & Posture Improvement"
        subtitle="Not your typical personal trainer. I improve how you move, then make you stronger."
        alt="Personal training combined with structural bodywork for movement quality and posture improvement in Santa Cruz"
      />


      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              You Don't Need More Workouts. You Need Better Movement.
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You've tried gyms, workout programs, maybe even personal trainers. You work hard, but results plateau. You're strong in the gym but still have pain. Your posture is still terrible. You feel like something fundamental is missing.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Here's what's missing: quality of movement. Most personal training focuses on how much you lift or how many reps you do. But if you're moving poorly, you're just getting really good at moving poorly. Then you wonder why your back hurts, your shoulder clicks, or you can't seem to improve your posture.
            </p>
            <p className="text-xl text-accent font-semibold">
              I'm a personal coach who addresses your movement first, then builds strength on top of proper mechanics.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Makes This Personal Training Different
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  I'm a Structural Integration Specialist + Personal Trainer
                </h3>
                <p className="text-neutralDark/80">
                  Most fitness coaches only know exercise. I combine private training with structural bodywork. I can feel where you're restricted, see how you compensate, and actually address the underlying issues before we load them with weight. This combination is rare and incredibly effective.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Movement Quality Over Everything
                </h3>
                <p className="text-neutralDark/80">
                  Before we worry about how much you're squatting, I make sure you can squat properly. Before we add weight to overhead pressing, we work on your shoulder mechanics. Quality first, then quantity. This prevents injury and actually creates better results.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Posture Improvement Is Built Into Everything
                </h3>
                <p className="text-neutralDark/80">
                  Your posture isn't improved by "standing up straight." It's improved by addressing why you can't stand up straight (tight chest, weak back, poor breathing, fascial restrictions). Through structural bodywork and proper training, we rebuild your posture from the ground up.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Truly Private Training
                </h3>
                <p className="text-neutralDark/80">
                  This isn't a group class where I watch 5 people at once. It's one-on-one, private coaching where you get my complete attention. Every session is tailored to your body, your limitations, your goals.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              My Approach as Your Personal Coach
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Phase 1: Assessment & Foundation
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  We start by understanding your body:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Movement screening to identify limitations and compensations</li>
                  <li>• Postural analysis (what's actually happening vs. what should happen)</li>
                  <li>• Identify fascial restrictions limiting your movement</li>
                  <li>• Understand your injury history and current pain</li>
                  <li>• Set realistic goals based on your actual capacity</li>
                </ul>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Phase 2: Structural Bodywork
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Before we train hard, we address what's limiting you:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Hands-on Structural Integration to release restrictions</li>
                  <li>• Address chronic tightness limiting your movement</li>
                  <li>• Improve joint mobility</li>
                  <li>• Address postural issues at their source</li>
                  <li>• Create the physical capacity for proper movement</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Phase 3: Movement Education
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Learn to move properly:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Fundamental movement patterns (squat, hinge, push, pull, carry)</li>
                  <li>• Breathing mechanics and core stability</li>
                  <li>• Joint-by-joint mobility work</li>
                  <li>• Motor control and body awareness</li>
                  <li>• Address your compensations before they become habits</li>
                </ul>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Phase 4: Strength & Performance
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Now we build on a solid foundation:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Progressive strength training with perfect form</li>
                  <li>• Functional fitness that transfers to real life</li>
                  <li>• Sport-specific training if relevant</li>
                  <li>• Conditioning and endurance work</li>
                  <li>• Maintaining quality as intensity increases</li>
                </ul>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Ongoing: Refinement & Progress
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Continuous assessment and adjustment</li>
                  <li>• Address new limitations as they arise</li>
                  <li>• Keep progressing without plateaus</li>
                  <li>• Maintain structural health as you get stronger</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              What We Work On in Personal Training Sessions
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-3">
                  Posture Improvement
                </h3>
                <ul className="space-y-2 text-neutralDark/80 text-sm">
                  <li>• Correct forward head posture</li>
                  <li>• Correct rounded shoulders</li>
                  <li>• Address anterior pelvic tilt</li>
                  <li>• Improve thoracic extension</li>
                  <li>• Build postural endurance</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-3">
                  Functional Strength
                </h3>
                <ul className="space-y-2 text-neutralDark/80 text-sm">
                  <li>• Full-body compound movements</li>
                  <li>• Real core stability (not just abs)</li>
                  <li>• Unilateral training (single-leg, single-arm)</li>
                  <li>• Carries and loaded movement</li>
                  <li>• Power and explosiveness when appropriate</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-3">
                  Mobility & Flexibility
                </h3>
                <ul className="space-y-2 text-neutralDark/80 text-sm">
                  <li>• Hip mobility for better movement</li>
                  <li>• Ankle mobility for squatting</li>
                  <li>• Shoulder mobility for overhead work</li>
                  <li>• Thoracic spine rotation</li>
                  <li>• Usable range of motion, not just passive stretching</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-3">
                  Pain Reduction
                </h3>
                <ul className="space-y-2 text-neutralDark/80 text-sm">
                  <li>• Address chronic back pain</li>
                  <li>• Address neck and shoulder tension</li>
                  <li>• Knee and hip pain management</li>
                  <li>• Work around injuries intelligently</li>
                  <li>• Prevent future injuries through proper mechanics</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-3">
                  Athletic Performance
                </h3>
                <ul className="space-y-2 text-neutralDark/80 text-sm">
                  <li>• Sport-specific movement patterns</li>
                  <li>• Power development</li>
                  <li>• Speed and agility</li>
                  <li>• Endurance and conditioning</li>
                  <li>• Injury prevention for your sport</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-3">
                  Body Composition
                </h3>
                <ul className="space-y-2 text-neutralDark/80 text-sm">
                  <li>• Build lean muscle</li>
                  <li>• Metabolic conditioning</li>
                  <li>• Strength training for fat loss</li>
                  <li>• Sustainable lifestyle changes</li>
                  <li>• Real results that last</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Who This Private Training Is For
            </h2>
            
            <div className="space-y-4 text-lg text-neutralDark/80">
              <p>
                <strong className="text-neutralDark">✓ People frustrated with traditional personal training</strong><br/>
                You've worked with fitness coaches before but never addressed underlying movement issues. You want a personal coach who actually understands anatomy and fascia.
              </p>
              <p>
                <strong className="text-neutralDark">✓ Anyone dealing with chronic pain</strong><br/>
                Back pain, neck pain, shoulder issues. You want to get stronger but need someone who can work around (and address) your limitations.
              </p>
              <p>
                <strong className="text-neutralDark">✓ Athletes wanting better movement quality</strong><br/>
                You're strong but you know your movement could be better. You want a coach who focuses on mechanics and injury prevention.
              </p>
              <p>
                <strong className="text-neutralDark">✓ People serious about posture improvement</strong><br/>
                You're tired of slouching, rounded shoulders, and forward head posture. You want structural bodywork combined with training to actually improve it.
              </p>
              <p>
                <strong className="text-neutralDark">✓ Anyone wanting a smarter approach to fitness</strong><br/>
                You don't just want to "crush it" in the gym. You want to move well, feel good, and build sustainable strength.
              </p>
            </div>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Why Structural Bodywork + Personal Training Works
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              Most people need both. Structural bodywork (Structural Integration) releases restrictions and creates capacity for movement. Personal training builds strength and reinforces good movement patterns. Together, they create lasting change.
            </p>

            <div className="space-y-4 text-neutralDark/80">
              <p>
                <strong className="text-neutralDark">Bodywork without training:</strong> You'll feel better and move better temporarily, but without strengthening new patterns, old habits return.
              </p>
              <p>
                <strong className="text-neutralDark">Training without bodywork:</strong> You're trying to build strength on top of restrictions and compensations. Limited results, higher injury risk.
              </p>
              <p>
                <strong className="text-neutralDark">Both together:</strong> We release restrictions, restore proper movement, then build strength in these new patterns. This is how you get lasting results.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Results Look Like
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ Better posture naturally</div>
              <div>✓ Significant strength gains</div>
              <div>✓ Reduced or eliminated pain</div>
              <div>✓ Improved athletic performance</div>
              <div>✓ Better body composition</div>
              <div>✓ Increased mobility and flexibility</div>
              <div>✓ Confidence in your movement</div>
              <div>✓ Knowledge to train yourself properly</div>
              <div>✓ Sustainable habits that last</div>
              <div>✓ Feeling capable in your body</div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Training Options
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Movement Education Sessions
                </h3>
                <p className="text-neutralDark/80 mb-4">
                  One-on-one movement coaching focused on quality, mechanics, and addressing your specific limitations. Includes assessment, corrective work, and progressive training.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  60-minute private sessions
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Combination Programs
                </h3>
                <p className="text-neutralDark/80 mb-4">
                  Structural Integration bodywork sessions combined with movement training. The most comprehensive approach for lasting results.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  Custom programs available
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz Active People
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              Whether you're looking for a personal trainer, a fitness coach who understands structural bodywork, or private training that focuses on movement quality and posture improvement, this is different from what you'll find at typical gyms.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              I work with Santa Cruz residents who want smarter training, better movement, and results that actually last. Let's build something sustainable.
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
              <Link to="/movement-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Movement Training Hub
              </Link>
              <Link to="/personal-trainer-santa-cruz" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Personal Trainer Santa Cruz
              </Link>
              <Link to="/posture-correction" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Posture Correction
              </Link>
              <Link to="/core-strengthening" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Core Strengthening
              </Link>
              <Link to="/mobility-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Mobility Training
              </Link>
              <Link to="/structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Structural Integration
              </Link>
              <Link to="/desk-worker-wellness" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Desk Worker Wellness
              </Link>
              <Link to="/athletic-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Athletic Performance
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default PersonalTrainingPosture;
