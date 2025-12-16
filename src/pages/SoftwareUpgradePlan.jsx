import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SoftwareUpgradePlan() {
  return (
    <>
      <SEO
        title="Software Upgrade Plan - 4-8 Week Transformation | RockUrBody"
        description="A focused 4-8 week block that systematically upgrades your body's software through structural integration and movement education. Transform your alignment, strength, and movement quality."
        keywords="software upgrade plan, structural integration program, movement education block, 4-8 week transformation, body upgrade program"
        url="/software-upgrade-plan"
      />
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Software Upgrade Plan
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              A focused 4-8 week block that systematically upgrades your body's software. Transform your alignment, strength, and movement quality through structured integration and movement education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                to="/book"
                variant="primary"
                size="lg"
              >
                Start Your Upgrade
              </Button>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">
              Who It's For
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-md border-2 border-neutralLight">
              <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
                This plan is for people ready to commit to a systematic upgrade. You've done the Body Systems Check (or have a clear sense of what needs work), and you're ready to invest 4-8 weeks in transforming how your body moves and feels.
              </p>
              <ul className="space-y-3 text-neutralDark/70">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>You have chronic tension, pain, or movement restrictions that need systematic attention</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>You're ready to commit to a structured program, not just occasional sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>You want lasting change, not temporary relief</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>You're willing to do light homework between sessions to reinforce changes</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What Happens */}
        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-12 text-center">
              What Happens
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-4">Weeks 1-2: Foundation</h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  We start with the biggest restrictions and imbalances. Structural work releases major tension patterns, and movement education begins teaching your body new ways to organize itself.
                </p>
                <p className="text-neutralDark/70">
                  You'll notice immediate changes: easier breathing, less tension, improved range of motion.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-4">Weeks 3-4: Integration</h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  We build on the foundation, addressing deeper patterns and refining movement quality. Your body starts to "remember" the new patterns.
                </p>
                <p className="text-neutralDark/70">
                  Movement feels smoother, strength improves, and old compensations begin to fade.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-4">Weeks 5-8: Refinement</h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  We fine-tune the system, address remaining restrictions, and build movement patterns that support your upgraded structure long-term.
                </p>
                <p className="text-neutralDark/70">
                  The changes feel automatic. Your body operates differently better alignment, stronger movement, less effort.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Leave With */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-12 text-center">
              What You Leave With
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-neutralLight">
                <h3 className="text-xl font-semibold text-primary mb-3">Upgraded Structure</h3>
                <p className="text-neutralDark/80">
                  Your body is better aligned, with restrictions released and fascial patterns reorganized. Movement happens from a stronger foundation.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-neutralLight">
                <h3 className="text-xl font-semibold text-primary mb-3">New Movement Patterns</h3>
                <p className="text-neutralDark/80">
                  You've learned how to move in ways that support your upgraded structure. These patterns become automatic.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-neutralLight">
                <h3 className="text-xl font-semibold text-primary mb-3">Self-Maintenance Tools</h3>
                <p className="text-neutralDark/80">
                  You have specific exercises and practices to maintain the improvements and continue upgrading over time.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-neutralLight">
                <h3 className="text-xl font-semibold text-primary mb-3">Lasting Change</h3>
                <p className="text-neutralDark/80">
                  The changes hold because they're built into your movement patterns, not just applied from the outside.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Typical Cadence */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">
              Typical Cadence
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Session Frequency</h3>
                  <p className="text-lg text-neutralDark/80">
                    Most clients do 1-2 sessions per week, depending on their schedule and goals. The program is flexible we can adjust the cadence to fit your life.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Session Types</h3>
                  <p className="text-lg text-neutralDark/80 mb-4">
                    We alternate between Structural Integration sessions (hands-on work) and Movement Education sessions (movement coaching), or combine both in longer sessions. The mix depends on what your body needs.
                  </p>
                  <ul className="space-y-2 text-neutralDark/70">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Structural Integration: 60-120 minutes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Movement Education: 60-90 minutes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Combined sessions: 90-120 minutes</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Between Sessions</h3>
                  <p className="text-lg text-neutralDark/80">
                    You'll have light homework specific movements or practices to reinforce what we've worked on. This isn't intense training; it's integration work that makes the changes stick.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
              Investment
            </h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Pricing varies based on session types and frequency. Most 4-8 week programs range from $1,200-$3,000 depending on your needs.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto mb-8">
              <p className="text-lg text-neutralDark/80 mb-6">
                We'll create a custom plan during your Body Systems Check or initial consultation. Package pricing available for committed programs.
              </p>
              <Button
                to="/book"
                variant="primary"
                size="lg"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
              Ready to Upgrade Your Body's Software?
            </h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a Body Systems Check to see what needs upgrading, then we'll design your custom upgrade plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                to="/body-systems-check"
                variant="primary"
                size="lg"
              >
                Book a Systems Check
              </Button>
              <Button
                to="/book"
                variant="outline"
                size="lg"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SoftwareUpgradePlan;

