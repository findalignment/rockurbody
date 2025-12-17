import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function StructuralIntegrationVsChiropractic() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Structural Integration', url: '/structural-integration' },
    { name: 'SI vs Chiropractic', url: '/structural-integration-vs-chiropractic' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Structural Integration vs Chiropractic | What's the Difference?"
        description="Understand the key differences between Structural Integration (Rolfing) and chiropractic care. Learn which approach is right for your needs."
        keywords="structural integration vs chiropractic, rolfing vs chiropractor, bodywork vs adjustment, fascia vs spine, santa cruz"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/approach-hero.jpg"
        title="Structural Integration vs. Chiropractic"
        subtitle="Different approaches, different results"
        alt="Comparison of structural integration and chiropractic care approaches to body alignment in Santa Cruz"
      />


      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Same Goal, Different Paths
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Both Structural Integration and chiropractic care aim to help you move better and feel better. But the approaches are fundamentally different—and understanding those differences helps you choose what's right for your situation.
            </p>
            <p className="text-xl text-accent font-semibold">
              This isn't about one being "better." It's about understanding which approach serves your needs.
            </p>
          </div>

          <div className="mb-16 overflow-x-auto">
            <h2 className="text-3xl font-heading text-primary mb-6">Quick Comparison</h2>
            <table className="w-full border-2 border-neutralLight rounded-xl overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-4 text-left"></th>
                  <th className="p-4 text-left">Chiropractic</th>
                  <th className="p-4 text-left">Structural Integration</th>
                </tr>
              </thead>
              <tbody className="text-neutralDark/80">
                <tr className="border-b border-neutralLight">
                  <td className="p-4 font-semibold">Primary Focus</td>
                  <td className="p-4">Spinal alignment & joints</td>
                  <td className="p-4">Fascial system & whole-body structure</td>
                </tr>
                <tr className="border-b border-neutralLight bg-neutralLight/30">
                  <td className="p-4 font-semibold">Method</td>
                  <td className="p-4">Adjustments (mobilization/manipulation)</td>
                  <td className="p-4">Manual fascial release + movement education</td>
                </tr>
                <tr className="border-b border-neutralLight">
                  <td className="p-4 font-semibold">Treatment Speed</td>
                  <td className="p-4">Quick (5-15 minutes)</td>
                  <td className="p-4">Comprehensive (60-120 minutes)</td>
                </tr>
                <tr className="border-b border-neutralLight bg-neutralLight/30">
                  <td className="p-4 font-semibold">Relief Duration</td>
                  <td className="p-4">Temporary to moderate</td>
                  <td className="p-4">Progressive & cumulative</td>
                </tr>
                <tr className="border-b border-neutralLight">
                  <td className="p-4 font-semibold">Frequency</td>
                  <td className="p-4">Ongoing maintenance (weekly/monthly)</td>
                  <td className="p-4">Progressive series (6-12 sessions total)</td>
                </tr>
                <tr className="bg-neutralLight/30">
                  <td className="p-4 font-semibold">Best For</td>
                  <td className="p-4">Acute issues, joint dysfunction, maintenance</td>
                  <td className="p-4">Chronic patterns, postural issues, lasting change</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Understanding the Differences
            </h2>

            <div className="space-y-8">
              <div className="bg-sage/5 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-neutralDark mb-4">
                  Chiropractic: Joint-Focused
                </h3>
                <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
                  Chiropractors work primarily with joints—especially the spine. They use adjustments (quick, controlled force) to restore proper joint movement and alignment.
                </p>
                <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
                  <strong>The theory:</strong> When joints are misaligned or not moving properly, it affects the nervous system and creates pain/dysfunction. Restoring proper joint function improves nervous system communication.
                </p>
                <p className="text-lg text-neutralDark/80 leading-relaxed">
                  <strong>Results:</strong> Often immediate relief. Great for acute issues. Many people need ongoing maintenance to maintain results.
                </p>
              </div>

              <div className="bg-accent/5 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-neutralDark mb-4">
                  Structural Integration: Fascia-Focused
                </h3>
                <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
                  Structural Integrators work with fascia—the connective tissue that wraps everything in your body. Through sustained manual pressure and movement education, we reorganize your structure.
                </p>
                <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
                  <strong>The theory:</strong> Chronic pain and dysfunction come from fascial restrictions and poor movement patterns built up over years. To create lasting change, we need to address the whole system, not just individual joints.
                </p>
                <p className="text-lg text-neutralDark/80 leading-relaxed">
                  <strong>Results:</strong> Progressive improvement. Each session builds on the last. Changes are lasting because we're changing structure and movement patterns.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Which Should You Choose?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Choose Chiropractic If:
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>✓ You have acute pain or injury (recent onset)</li>
                  <li>✓ You need quick relief for a specific joint issue</li>
                  <li>✓ You respond well to adjustments</li>
                  <li>✓ You're looking for ongoing maintenance care</li>
                  <li>✓ You want sessions that fit into a lunch break</li>
                  <li>✓ Your insurance covers treatment</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Choose Structural Integration If:
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>✓ You have chronic pain that keeps coming back</li>
                  <li>✓ Adjustments only provide temporary relief</li>
                  <li>✓ You have postural issues or movement restrictions</li>
                  <li>✓ You want to address root causes, not just symptoms</li>
                  <li>✓ You're ready for a progressive series of sessions</li>
                  <li>✓ You want to learn how to maintain results yourself</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Common Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Can I do both?
                </h3>
                <p className="text-neutralDark/80">
                  Absolutely. Many people use chiropractic for acute issues and maintenance, then do a series of Structural Integration when they want deeper, lasting change. The approaches can complement each other.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  I've been seeing a chiropractor for years. Should I stop?
                </h3>
                <p className="text-neutralDark/80">
                  Not necessarily. If chiropractic is working for you, great! But if you've been getting adjusted regularly and the same issues keep returning, that might indicate a need for fascial work and movement retraining.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Does Structural Integration involve "cracking" or adjustments?
                </h3>
                <p className="text-neutralDark/80">
                  No. There are no quick, forceful movements. The work is slow, sustained pressure on fascia combined with movement. Sometimes joints will release or make sounds, but that's not the goal—it's a side effect of tissue releasing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Which is more effective for chronic back pain?
                </h3>
                <p className="text-neutralDark/80">
                  It depends on the cause. If your pain is from a specific joint dysfunction, chiropractic may help. If it's from fascial restrictions, postural imbalances, or movement patterns (most chronic pain), Structural Integration addresses root causes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Why doesn't my chiropractor work on fascia?
                </h3>
                <p className="text-neutralDark/80">
                  Different training and philosophy. Chiropractors specialize in spinal manipulation and joint function. Structural Integrators specialize in fascial work and whole-body structure. Both are valuable—just different approaches.
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              The Bottom Line
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              Chiropractic is great for joint-focused care and maintenance. Structural Integration is ideal for whole-body structural change and addressing chronic patterns.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              If you've been getting adjusted regularly but your issues keep returning, it might be time to address the fascial system and movement patterns. That's where I come in.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/what-is-structural-integration" variant="outline" size="lg" fullWidth>
              Learn More About SI
            </Button>
          </div>
          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Structural Integration Hub
              </Link>
              <Link to="/rolfing-vs-massage" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Rolfing vs Massage
              </Link>
              <Link to="/santa-cruz-structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Santa Cruz SI
              </Link>
              <Link to="/what-is-structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                What Is SI?
              </Link>
              <Link to="/chronic-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Chronic Pain Relief
              </Link>
              <Link to="/posture-correction" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Posture Correction
              </Link>
              <Link to="/fascial-release" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Fascial Release
              </Link>
              <Link to="/back-pain-santa-cruz" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Back Pain Relief
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default StructuralIntegrationVsChiropractic;
