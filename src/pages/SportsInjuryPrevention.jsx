import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function SportsInjuryPrevention() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Sports Injury Prevention', url: '/sports-injury-prevention' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Sports Injury Prevention Santa Cruz | Stay Healthy, Stay Active"
        description="Prevent sports injuries through movement assessment and structural balance. Proactive injury prevention for athletes in Santa Cruz."
        keywords="injury prevention santa cruz, sports injury prevention, athletic screening, injury risk assessment, prehab"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Sports Injury Prevention"
        subtitle="Don't wait until you're hurt. Prevent injuries before they happen."
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              The Best Injury is the One That Never Happens
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You're active. You train. You push yourself. But are you setting yourself up for injury without realizing it?
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Most injuries aren't random bad luck.they're the result of accumulated imbalances, poor movement patterns, and structural issues that finally reach a breaking point.
            </p>
            <p className="text-xl text-accent font-semibold">
              What if you could identify and address those issues BEFORE they become injuries?
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Common Injury Risk Factors
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Structural Imbalances
                </h3>
                <p className="text-neutralDark/80">
                  Left-right asymmetries in strength, mobility, or structure. One tight hip. One weak glute. These imbalances create uneven load distribution and eventual injury.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Poor Movement Patterns
                </h3>
                <p className="text-neutralDark/80">
                  Landing with knees caving in. Running with excessive pelvic drop. Squatting with knee valgus. These faulty patterns create stress on joints and tissues.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Mobility Restrictions
                </h3>
                <p className="text-neutralDark/80">
                  Limited ankle dorsiflexion. Restricted hip internal rotation. Stiff thoracic spine. When one joint can't move properly, others compensate and get overloaded.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Weakness & Instability
                </h3>
                <p className="text-neutralDark/80">
                  Weak glutes. Poor core stability. Inadequate single-leg control. Muscles that don't fire when they should. These create injury vulnerability.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Old Injuries & Compensation
                </h3>
                <p className="text-neutralDark/80">
                  You recovered from that ankle sprain 3 years ago.but your body never fully corrected the compensation patterns. Now your knee hurts. Everything's connected.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Training Errors
                </h3>
                <p className="text-neutralDark/80">
                  Too much volume. Too much intensity. Not enough recovery. Poor programming. Even perfect bodies break down under improper training loads.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              My Approach to Injury Prevention
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Step 1: Comprehensive Assessment
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  We identify vulnerabilities before they become injuries:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Movement screening to assess fundamental patterns</li>
                  <li>• Structural assessment for imbalances and asymmetries</li>
                  <li>• Range of motion testing in key joints</li>
                  <li>• Strength and stability testing</li>
                  <li>• Sport-specific movement analysis</li>
                  <li>• Injury history and compensation review</li>
                </ul>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Step 2: Address Structural Issues
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through Structural Integration:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Release fascial restrictions limiting mobility</li>
                  <li>• Balance left-right asymmetries</li>
                  <li>• Restore optimal joint positioning</li>
                  <li>• Address old injury patterns still affecting movement</li>
                  <li>• Create a more resilient structure</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Step 3: Correct Movement Patterns
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through movement education:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Fix faulty movement patterns creating stress</li>
                  <li>• Improve landing mechanics (for jumpers/runners)</li>
                  <li>• Enhance single-leg stability and control</li>
                  <li>• Train proper squatting, hinging, rotating</li>
                  <li>• Develop better body awareness</li>
                </ul>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Step 4: Build Resilience
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Targeted strengthening and conditioning:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Strengthen weak links (often glutes, core, posterior chain)</li>
                  <li>• Improve tissue capacity to handle load</li>
                  <li>• Progressive overload in safe patterns</li>
                  <li>• Sport-specific preparation</li>
                  <li>• Recovery strategies and practices</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Who Should Focus on Injury Prevention
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-neutralDark mb-3">You Should if You:</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>✓ Have a history of recurring injuries</li>
                  <li>✓ Are starting a new sport or activity</li>
                  <li>✓ Are ramping up training volume or intensity</li>
                  <li>✓ Notice nagging aches that come and go</li>
                  <li>✓ Feel "off" or imbalanced</li>
                  <li>✓ Want to extend your athletic career</li>
                  <li>✓ Are returning from injury</li>
                  <li>✓ Compete and can't afford downtime</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-neutralDark mb-3">Best For:</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Runners prone to IT band or knee pain</li>
                  <li>• Cyclists with recurring back/neck issues</li>
                  <li>• Surfers with shoulder problems</li>
                  <li>• Climbers dealing with finger/elbow pain</li>
                  <li>• Team sport athletes with recurring sprains</li>
                  <li>• CrossFitters pushing hard</li>
                  <li>• Weekend warriors over 40</li>
                  <li>• Anyone serious about longevity</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              The ROI of Injury Prevention
            </h2>

            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              Think about the cost of an injury:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">Cost of Injury</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Weeks or months off training</li>
                  <li>• Medical bills (PT, doctors, imaging)</li>
                  <li>• Lost race entries or competition fees</li>
                  <li>• Deconditioning and fitness loss</li>
                  <li>• Frustration and setbacks</li>
                  <li>• Risk of chronic issues</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">Value of Prevention</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Stay training consistently</li>
                  <li>• Improve performance</li>
                  <li>• Reduce injury risk significantly</li>
                  <li>• Catch issues early when easy to address</li>
                  <li>• Confidence in your body</li>
                  <li>• Longer athletic lifespan</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-accent font-semibold">
              Prevention is always cheaper (and less painful) than rehabilitation.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz Athletes
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Whether you're training for a race, hitting the trails every weekend, or just want to stay active for decades.proactive injury prevention keeps you doing what you love. I help Santa Cruz athletes identify vulnerabilities and build resilient bodies that handle whatever you throw at them.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Book Injury Prevention Assessment
            </Button>
            <Button to="/packages" variant="outline" size="lg" fullWidth>
              View Programs
            </Button>
          </div>

          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/sports-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Sports Performance Hub
              </Link>
              <Link to="/movement-screening" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Movement Screening
              </Link>
              <Link to="/athletic-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Athletic Performance
              </Link>
              <Link to="/surfers" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                For Surfers
              </Link>
              <Link to="/cyclists-and-runners" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Cyclists & Runners
              </Link>
              <Link to="/climbers" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                For Climbers
              </Link>
              <Link to="/mobility-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Mobility Training
              </Link>
              <Link to="/injury-recovery" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Injury Recovery
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default SportsInjuryPrevention;

