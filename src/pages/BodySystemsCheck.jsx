import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function BodySystemsCheck() {
  return (
    <>
      <SEO
        title="Body Systems Check - Comprehensive Assessment | RockUrBody"
        description="A comprehensive 90-minute assessment of your alignment, movement patterns, and structural imbalances. Identify what's working, what's not, and create a clear roadmap for improvement."
        keywords="body assessment Santa Cruz, movement screening, structural assessment, body systems check, alignment evaluation"
        url="/body-systems-check"
      />
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Body Systems Check
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              A comprehensive 90-minute assessment that identifies what's working, what's not, and creates a clear roadmap for upgrading your body's software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                to="/book"
                variant="primary"
                size="lg"
              >
                Book Your Systems Check
              </Button>
            </div>
          </div>
        </section>

        {/* What You'll Get */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-12 text-center">
              What You'll Get
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border-2 border-neutralLight">
                <h3 className="text-2xl font-semibold text-primary mb-4">Comprehensive Assessment</h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  We evaluate your entire system: alignment, movement patterns, structural imbalances, and identify where your body is holding tension or restriction.
                </p>
                <ul className="space-y-2 text-neutralDark/70">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Postural analysis and alignment evaluation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Movement pattern screening (walking, squatting, reaching)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Structural integration assessment (fascial restrictions)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Breathing and core function evaluation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border-2 border-neutralLight">
                <h3 className="text-2xl font-semibold text-primary mb-4">Clear Roadmap</h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  Based on what we find, we'll create a personalized plan that addresses your specific needs. You'll know exactly what to work on and in what order.
                </p>
                <ul className="space-y-2 text-neutralDark/70">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Priority areas for structural work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Movement patterns to develop or correct</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Recommended service packages or programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Timeline and expected outcomes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border-2 border-neutralLight">
                <h3 className="text-2xl font-semibold text-primary mb-4">Immediate Insights</h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed">
                  You'll leave understanding exactly where your body is holding tension, where movement is restricted, and what patterns are causing problems. Many clients experience immediate relief and clarity after the assessment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">
              Who This Is For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">New Clients</h3>
                <p className="text-neutralDark/80">
                  Perfect starting point if you're not sure where to begin. Get clarity on what your body needs before committing to a program.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Chronic Issues</h3>
                <p className="text-neutralDark/80">
                  If you've tried everything and still have pain or restrictions, this assessment identifies root causes you may have missed.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Performance Athletes</h3>
                <p className="text-neutralDark/80">
                  Identify movement inefficiencies and structural limitations that are holding back your performance.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Prevention Focused</h3>
                <p className="text-neutralDark/80">
                  Catch imbalances before they become problems. Upgrade your body's software proactively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-12 text-center">
              What Happens During Your Check
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Initial Conversation (15 min)</h3>
                  <p className="text-neutralDark/80">
                    We discuss your goals, pain points, movement history, and what you've tried before. This helps us understand your context.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Movement Assessment (30 min)</h3>
                  <p className="text-neutralDark/80">
                    We observe you walking, squatting, reaching, and moving through various patterns. This reveals how your body organizes itself in motion.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Structural Evaluation (30 min)</h3>
                  <p className="text-neutralDark/80">
                    Hands-on assessment of your fascia, alignment, and structural relationships. We identify restrictions, imbalances, and areas that need attention.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Review & Recommendations (15 min)</h3>
                  <p className="text-neutralDark/80">
                    We walk through what we found, explain what it means, and create a clear plan for moving forward. You'll leave with actionable next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
              Investment
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg max-w-2xl mx-auto">
              <div className="text-5xl font-bold text-primary mb-4">$180</div>
              <p className="text-xl text-neutralDark/80 mb-6">90 minutes</p>
              <p className="text-lg text-neutralDark/70 mb-8">
                Includes comprehensive assessment, written summary, and personalized roadmap for your body's upgrade.
              </p>
              <Button
                to="/book"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Book Your Systems Check
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
              Ready to See What Your Body Needs?
            </h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Book your Body Systems Check and get clarity on your body's operating system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                to="/book"
                variant="primary"
                size="lg"
              >
                Book Now
              </Button>
              <Button
                to="/how-it-works"
                variant="outline"
                size="lg"
              >
                Learn More About Our Process
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default BodySystemsCheck;

