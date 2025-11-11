import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema } from '../utils/structuredData';

function FascialRelease() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Fascial Release', url: '/fascial-release' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Fascial Release Santa Cruz | Myofascial Therapy & Bodywork"
        description="Expert fascial release and myofascial therapy in Santa Cruz. Address chronic pain and movement restrictions at their source."
        keywords="fascial release santa cruz, myofascial release, fascia therapy, connective tissue work, structural bodywork santa cruz"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/approach-hero.jpg"
        title="Fascial Release"
        subtitle="Address pain at its source.the connective tissue"
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What is Fascia? (And Why Should You Care?)
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Fascia is the connective tissue that wraps everything in your body.muscles, organs, bones, nerves. Think of it like a full-body wetsuit made of living tissue.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              When fascia is healthy and hydrated, it's slippery and allows smooth movement. But when it gets stuck, restricted, or dense from injury, poor posture, or chronic stress.everything changes.
            </p>
            <p className="text-xl text-accent font-semibold">
              Most chronic pain comes from fascial restrictions, not muscle or joint problems.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Causes Fascial Restrictions?
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="font-semibold text-neutralDark mb-2">Injuries & Trauma</h3>
                <p className="text-neutralDark/80">
                  When you get injured, fascia lays down scar tissue. This tissue is denser and less flexible than healthy fascia, creating restrictions that persist long after the injury heals.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-semibold text-neutralDark mb-2">Poor Posture & Repetitive Movement</h3>
                <p className="text-neutralDark/80">
                  Sitting hunched at a computer all day? Your fascia adapts to that position, becoming shorter and denser in the front body. Repetitive movements create similar patterns.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-neutralDark mb-2">Chronic Stress</h3>
                <p className="text-neutralDark/80">
                  Emotional stress creates physical tension. When you're stressed, fascia contracts and becomes less pliable. Over time, this becomes your default state.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="font-semibold text-neutralDark mb-2">Dehydration & Inflammation</h3>
                <p className="text-neutralDark/80">
                  Fascia needs water to stay slippery. Chronic dehydration and inflammation make fascia sticky and restricted.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              How Fascial Restrictions Affect You
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">Pain & Discomfort</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Chronic pain that moves around</li>
                  <li>• Tension that never fully releases</li>
                  <li>• Pain that doesn't respond to typical treatments</li>
                  <li>• Referred pain (hurt in one place, problem is elsewhere)</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">Movement Issues</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Limited range of motion</li>
                  <li>• Stiffness that won't go away</li>
                  <li>• Feeling "stuck" in your body</li>
                  <li>• Poor posture that's hard to correct</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">Performance Limits</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Reduced power output</li>
                  <li>• Decreased flexibility</li>
                  <li>• Inefficient movement patterns</li>
                  <li>• Increased injury risk</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">Overall Well-being</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Chronic fatigue</li>
                  <li>• Poor sleep quality</li>
                  <li>• Difficulty relaxing</li>
                  <li>• Feeling older than you are</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              My Approach to Fascial Release
            </h2>

            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              I practice Structural Integration, a systematic form of fascial bodywork based on the Anatomy Trains approach. This isn't just massage. It's:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Systematic & Progressive
                </h3>
                <p className="text-neutralDark/80">
                  Each session builds on the last. We work through your body in a specific sequence to address the deepest patterns and create lasting change.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Whole-Body Approach
                </h3>
                <p className="text-neutralDark/80">
                  Pain in your knee? We might need to work on your hip, your ankle, or even how you breathe. Fascia connects everything.we address the whole system.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Education + Integration
                </h3>
                <p className="text-neutralDark/80">
                  You're not passive. I teach you about your body and give you tools to maintain the changes. Movement education ensures the fascial work sticks.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Fascial Release vs. Massage
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-2 border-neutralLight rounded-xl overflow-hidden">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="p-4 text-left">Aspect</th>
                    <th className="p-4 text-left">Massage</th>
                    <th className="p-4 text-left">Fascial Release</th>
                  </tr>
                </thead>
                <tbody className="text-neutralDark/80">
                  <tr className="border-b border-neutralLight">
                    <td className="p-4 font-semibold">Focus</td>
                    <td className="p-4">Muscles, relaxation</td>
                    <td className="p-4">Connective tissue, structure</td>
                  </tr>
                  <tr className="border-b border-neutralLight bg-neutralLight/30">
                    <td className="p-4 font-semibold">Goal</td>
                    <td className="p-4">Temporary relief, relaxation</td>
                    <td className="p-4">Lasting structural change</td>
                  </tr>
                  <tr className="border-b border-neutralLight">
                    <td className="p-4 font-semibold">Approach</td>
                    <td className="p-4">General relaxation</td>
                    <td className="p-4">Systematic protocol</td>
                  </tr>
                  <tr className="bg-neutralLight/30">
                    <td className="p-4 font-semibold">Results</td>
                    <td className="p-4">Feel good for days</td>
                    <td className="p-4">Progressive, cumulative change</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
              Fascial release work is different from massage. The pressure is slow and sustained.we're working with the fascia, not just the muscles. Some areas might be tender, but it shouldn't be painful.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              You'll feel changes during and after the session. Movement feels different. You stand taller. Things that were tight start to let go. The work is cumulative.each session builds on the last.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/what-is-structural-integration" variant="outline" size="lg" fullWidth>
              Learn More
            </Button>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default FascialRelease;

