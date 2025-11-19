import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function RolfingVsMassage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Structural Integration', url: '/structural-integration' },
    { name: 'Rolfing vs Massage', url: '/rolfing-vs-massage' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Rolfing vs Massage: What's the Difference? | Santa Cruz Bodywork"
        description="Understand the key differences between Rolfing (Structural Integration) and massage therapy. Learn which approach is right for your goals."
        keywords="rolfing vs massage, structural integration vs massage, difference between rolfing and massage, santa cruz bodywork"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/approach-hero.jpg"
        title="Structural Integration vs. Massage"
        subtitle="Understanding the difference to make the right choice"
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Intro */}
          <div className="mb-16">
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              "Is Structural Integration like massage?" It's the most common question I get. The short answer: No, but they're both valuable, just for different reasons.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed">
              Let me break down the real differences so you can choose what's right for your goals.
            </p>
          </div>

          {/* Quick Comparison Table */}
          <div className="mb-16 overflow-x-auto">
            <table className="w-full border-2 border-neutralLight rounded-xl overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-4 text-left"></th>
                  <th className="p-4 text-left">Massage Therapy</th>
                  <th className="p-4 text-left">Rolfing / Structural Integration</th>
                </tr>
              </thead>
              <tbody className="text-neutralDark/80">
                <tr className="border-b border-neutralLight">
                  <td className="p-4 font-semibold">Primary Focus</td>
                  <td className="p-4">Muscle relaxation</td>
                  <td className="p-4">Fascial system & body structure</td>
                </tr>
                <tr className="border-b border-neutralLight bg-neutralLight/30">
                  <td className="p-4 font-semibold">Main Goal</td>
                  <td className="p-4">Relaxation & temporary relief</td>
                  <td className="p-4">Lasting structural change</td>
                </tr>
                <tr className="border-b border-neutralLight">
                  <td className="p-4 font-semibold">Approach</td>
                  <td className="p-4">Works muscle tissue</td>
                  <td className="p-4">Works connective tissue (fascia)</td>
                </tr>
                <tr className="border-b border-neutralLight bg-neutralLight/30">
                  <td className="p-4 font-semibold">Frequency</td>
                  <td className="p-4">Regular maintenance (weekly/monthly)</td>
                  <td className="p-4">Progressive series (6-12 sessions)</td>
                </tr>
                <tr className="border-b border-neutralLight">
                  <td className="p-4 font-semibold">Client Role</td>
                  <td className="p-4">Passive recipient</td>
                  <td className="p-4">Active participant</td>
                </tr>
                <tr className="bg-neutralLight/30">
                  <td className="p-4 font-semibold">Best For</td>
                  <td className="p-4">Stress relief, circulation, relaxation</td>
                  <td className="p-4">Chronic pain, posture issues, lasting change</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Detailed Explanations */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-8">
              Let's Dive Deeper
            </h2>

            <div className="space-y-8">
              {/* Massage */}
              <div className="bg-sage/5 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-neutralDark mb-4">
                  Massage Therapy: Relaxation & Relief
                </h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  Massage therapy primarily works with muscles to:
                </p>
                <ul className="space-y-2 text-lg text-neutralDark/80 ml-6 mb-4">
                  <li>• Reduce stress and promote relaxation</li>
                  <li>• Improve circulation</li>
                  <li>• Release muscle tension temporarily</li>
                  <li>• Support general wellness</li>
                </ul>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  <strong>Think of it like:</strong> Regular maintenance for your car. Keeps things running smoothly, feels good, and addresses immediate needs.
                </p>
                <p className="text-lg text-neutralDark/80 leading-relaxed">
                  <strong>Ideal frequency:</strong> Weekly, bi-weekly, or monthly for ongoing maintenance and stress relief.
                </p>
              </div>

              {/* Rolfing */}
              <div className="bg-accent/5 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-neutralDark mb-4">
                  Rolfing / Structural Integration: Transformation
                </h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  Structural Integration works with fascia (connective tissue) to:
                </p>
                <ul className="space-y-2 text-lg text-neutralDark/80 ml-6 mb-4">
                  <li>• Reorganize your body's structure</li>
                  <li>• Change movement patterns</li>
                  <li>• Address root causes of chronic issues</li>
                  <li>• Create lasting postural improvements</li>
                </ul>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  <strong>Think of it like:</strong> Physical therapy meets bodywork. We're fixing underlying mechanical problems, not just treating symptoms.
                </p>
                <p className="text-lg text-neutralDark/80 leading-relaxed">
                  <strong>Typical approach:</strong> A progressive series of 6-12 sessions that build on each other, plus movement education to reinforce changes.
                </p>
              </div>
            </div>
          </div>

          {/* What is Fascia */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What is Fascia (And Why It Matters)
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              Fascia is the connective tissue that wraps around every muscle, bone, nerve, and organ in your body. Think of it as a 3D web that holds everything together.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              When fascia gets tight, restricted, or misaligned:
            </p>
            <ul className="space-y-2 text-lg text-neutralDark/80 ml-6 mb-4">
              <li>• Your posture shifts to compensate</li>
              <li>• Movement becomes restricted and inefficient</li>
              <li>• Chronic pain and tension develop</li>
              <li>• Injuries take longer to heal</li>
            </ul>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Working with fascia (rather than just muscles) is what allows Structural Integration to create lasting structural change.
            </p>
          </div>

          {/* When to Choose What */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              So Which Should You Choose?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-2 border-sage rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-4">
                  Choose Massage If You Want:
                </h3>
                <ul className="space-y-3 text-neutralDark/80">
                  <li>✓ Stress relief and relaxation</li>
                  <li>✓ Improved circulation</li>
                  <li>✓ Temporary muscle tension relief</li>
                  <li>✓ General wellness maintenance</li>
                  <li>✓ A soothing, pampering experience</li>
                </ul>
              </div>

              <div className="border-2 border-accent rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-4">
                  Choose Structural Integration If You Want:
                </h3>
                <ul className="space-y-3 text-neutralDark/80">
                  <li>✓ Lasting relief from chronic pain</li>
                  <li>✓ Improved posture and alignment</li>
                  <li>✓ Better movement patterns</li>
                  <li>✓ Structural transformation</li>
                  <li>✓ To address root causes, not symptoms</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Good News */}
          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              The Good News: They're Complementary
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              You don't have to choose one forever. Many of my clients:
            </p>
            <ul className="space-y-2 text-lg text-neutralDark/80 ml-6 mb-4">
              <li>• Do a series of Structural Integration to address chronic issues</li>
              <li>• Then return to regular massage for maintenance and stress relief</li>
              <li>• Come back for occasional SI "tune-ups" when needed</li>
            </ul>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Both modalities have their place. The key is understanding what you need right now.
            </p>
          </div>

          {/* Common Questions */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Common Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Does Rolfing hurt more than massage?
                </h3>
                <p className="text-neutralDark/80">
                  Not necessarily. We work at the edge of sensation, but never into pain. Some areas may be tender, but it should feel productive, not unbearable. Many find it deeply satisfying in a different way than relaxation massage.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Can I get Rolfing for relaxation?
                </h3>
                <p className="text-neutralDark/80">
                  While therapeutic and often deeply satisfying, SI isn't primarily for relaxation. If you're looking to de-stress and unwind, massage is the better choice. If you want lasting structural change that happens to feel good, SI is for you.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  How do I know if I need Structural Integration?
                </h3>
                <p className="text-neutralDark/80">
                  If you've been getting massage regularly but the same issues keep coming back, or if you have chronic pain, poor posture, or movement restrictions that aren't resolving, SI might be the missing piece. Book a free consultation and we'll discuss whether it's right for you.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-sage/10 to-accent/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Still Not Sure Which is Right for You?
            </h2>
            <p className="text-lg text-neutralDark/80 mb-6">
              Let's talk. I'll help you figure out the best approach for your specific situation.
            </p>
            <Button to="/consult" variant="primary" size="lg">
              Schedule Free Consultation
            </Button>
          </div>
          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Structural Integration
              </Link>
              <Link to="/santa-cruz-structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Santa Cruz SI
              </Link>
              <Link to="/what-is-structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                What Is SI?
              </Link>
              <Link to="/structural-integration-vs-chiropractic" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                SI vs Chiropractic
              </Link>
              <Link to="/fascial-release" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Fascial Release
              </Link>
              <Link to="/chronic-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Chronic Pain Relief
              </Link>
              <Link to="/posture-correction" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Posture Correction
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default RolfingVsMassage;
