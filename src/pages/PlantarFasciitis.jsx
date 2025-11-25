import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function PlantarFasciitis() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Plantar Fasciitis', url: '/plantar-fasciitis' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Plantar Fasciitis Treatment Santa Cruz | Heel Pain Relief"
        description="Lasting relief from plantar fasciitis and heel pain. Address the root causes through Structural Integration and movement training in Santa Cruz."
        keywords="plantar fasciitis santa cruz, heel pain, foot pain relief, plantar fasciitis treatment, chronic heel pain"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Plantar Fasciitis Relief"
        subtitle="Fix heel pain by addressing what's actually causing it"
        alt="Plantar fasciitis and heel pain relief treatment using structural integration in Santa Cruz"
      />


      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              That Sharp Heel Pain in the Morning? Let's Fix It.
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              First steps out of bed feel like walking on broken glass. Heel pain that gets worse with standing. That stabbing sensation in your arch or heel that makes you limp. You've tried rest, ice, stretching, maybe even orthotics or cortisone shots.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Some things help temporarily, but the pain keeps coming back. Walking, running, even standing becomes a problem. You're starting to wonder if this is permanent.
            </p>
            <p className="text-xl text-accent font-semibold">
              Here's the thing: Your heel pain isn't just a foot problem.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Why Plantar Fasciitis Keeps Coming Back
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              Plantar fasciitis is inflammation of the fascia on the bottom of your foot. But what's causing the inflammation? That's what we need to address.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Tight Calves
                </h3>
                <p className="text-neutralDark/80">
                  When your calves are chronically tight (which they are for most people), they pull on your Achilles tendon. Your Achilles connects to your plantar fascia. Tight calves = constant tension on the bottom of your foot. No amount of arch support resolves that.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Limited Ankle Mobility
                </h3>
                <p className="text-neutralDark/80">
                  If your ankle can't move through proper range (dorsiflexion), your foot compensates. It pronates more, collapses the arch, and overloads the plantar fascia. The ankle limitation creates the foot problem.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Hip and Knee Issues
                </h3>
                <p className="text-neutralDark/80">
                  How you walk matters. If your hips don't extend properly or your knees track poorly, you change how your foot hits the ground. Over thousands of steps, this creates excessive stress on your plantar fascia.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Whole-Body Fascial Tension
                </h3>
                <p className="text-neutralDark/80">
                  Your plantar fascia is part of a continuous line of fascia that runs up the back of your entire body (called the Superficial Back Line). Restrictions anywhere in that chain affect your feet. Sometimes heel pain starts with a tight back or hamstrings.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Poor Foot Mechanics
                </h3>
                <p className="text-neutralDark/80">
                  If you've lost the ability to properly use your foot (most people have), you're either over-pronating or walking rigidly. Either way, you're overloading the plantar fascia with every step.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              My Approach to Plantar Fasciitis
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Release the Entire Chain
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through Structural Integration, I work the whole posterior line:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Free up chronically tight calves and Achilles</li>
                  <li>• Release restricted plantar fascia directly</li>
                  <li>• Address tight hamstrings and back pulling on the system</li>
                  <li>• Restore ankle mobility</li>
                  <li>• Balance the entire lower leg</li>
                </ul>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Fix How You Walk
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through movement education:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Improve hip extension in your gait</li>
                  <li>• Teach proper foot mechanics (pronation vs. supination)</li>
                  <li>• Restore natural arch function</li>
                  <li>• Strengthen feet and lower legs properly</li>
                  <li>• Address compensations creating the problem</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Give You Tools
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Self-care practices you can do at home:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Calf release techniques that actually work</li>
                  <li>• Foot strengthening (not just stretching)</li>
                  <li>• Ankle mobility practices</li>
                  <li>• How to choose footwear that helps, not hurts</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              What About Orthotics, Cortisone, Surgery?
            </h2>
            
            <div className="space-y-4 text-neutralDark/80">
              <p>
                <strong className="text-neutralDark">Orthotics:</strong> Can provide temporary relief by supporting the arch, but they don't address why your arch collapsed in the first place. They're a crutch, not a solution. Better to restore actual foot function.
              </p>
              <p>
                <strong className="text-neutralDark">Cortisone shots:</strong> Reduce inflammation temporarily, but the underlying mechanical problem remains. The inflammation will return once the shot wears off.
              </p>
              <p>
                <strong className="text-neutralDark">Surgery:</strong> Should be a last resort. Most plantar fasciitis is mechanical and responds to conservative treatment when you address the whole system, not just the foot.
              </p>
              <p>
                <strong className="text-neutralDark">Night splints:</strong> Keep your foot in dorsiflexion overnight to prevent morning pain, but again, they don't resolve the underlying issue.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Changes When Your Feet Work Right
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ No more morning heel pain</div>
              <div>✓ Walk without limping</div>
              <div>✓ Stand for long periods</div>
              <div>✓ Return to running or hiking</div>
              <div>✓ Better balance and stability</div>
              <div>✓ No dependence on orthotics</div>
              <div>✓ Improved overall posture</div>
              <div>✓ Freedom to move again</div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz Active People
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Whether you're a runner sidelined by heel pain, a surfer struggling with foot issues, or just someone who wants to walk the beach without pain, I help Santa Cruz residents get their feet back. Let's address what's actually causing your plantar fasciitis, not just manage symptoms.
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
          <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Pain Relief Hub
              </Link>
              <Link to="/bunion-foot-pain" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Bunion & Foot Pain
              </Link>
              <Link to="/achilles-tendonitis" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Achilles Tendonitis
              </Link>
              <Link to="/knee-pain-treatment" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Knee Pain Treatment
              </Link>
              <Link to="/back-pain-santa-cruz" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Back Pain Relief
              </Link>
              <Link to="/cyclists-and-runners" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Cyclists & Runners
              </Link>
              <Link to="/mobility-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Mobility Training
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

export default PlantarFasciitis;
