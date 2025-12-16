import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function PerformanceLongevityCoaching() {
  return (
    <>
      <SEO
        title="Performance + Longevity Coaching - Ongoing Body Upgrade | RockUrBody"
        description="Ongoing coaching for athletes and active individuals who want to maintain peak performance and prevent injury. Regular tune-ups, movement refinement, and long-term body optimization."
        keywords="performance coaching, longevity coaching, athletic performance, injury prevention, ongoing bodywork, movement coaching"
        url="/performance-longevity-coaching"
      />
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Performance + Longevity Coaching
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Ongoing coaching for athletes and active individuals who want to maintain peak performance, prevent injury, and keep their body's software optimized long-term.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                to="/book"
                variant="primary"
                size="lg"
              >
                Start Coaching
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
                This is for people who've completed a Software Upgrade Plan (or equivalent work) and want ongoing maintenance and optimization. You understand the value of regular bodywork and movement coaching, and you're committed to long-term performance.
              </p>
              <ul className="space-y-3 text-neutralDark/70">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Athletes who train hard and need regular tune-ups to prevent injury and maintain performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Active individuals who want to stay mobile, strong, and pain-free as they age</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>People who've done structural work and want to maintain the improvements long-term</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Anyone committed to optimizing their body's operating system over time</span>
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
                <h3 className="text-2xl font-semibold text-primary mb-4">Regular Tune-Ups</h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  We catch imbalances and restrictions before they become problems. Regular structural work keeps your fascia supple and your alignment optimal.
                </p>
                <p className="text-neutralDark/70">
                  Small issues get addressed quickly, preventing them from becoming big problems.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-4">Movement Refinement</h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  We continuously refine your movement patterns, build strength, and address new challenges as your training or activity level changes.
                </p>
                <p className="text-neutralDark/70">
                  Your movement quality improves over time, not just maintains.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-4">Performance Optimization</h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  We identify movement inefficiencies, strength gaps, and mobility limitations that are holding back your performance.
                </p>
                <p className="text-neutralDark/70">
                  You move better, perform better, and recover faster.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-4">Long-Term Upgrades</h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  Your body's software gets regular updates. We address new patterns, adapt to changes in your life or training, and keep optimizing.
                </p>
                <p className="text-neutralDark/70">
                  You're not just maintaining you're continuously improving.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Leave With */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-12 text-center">
              What You Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-neutralLight">
                <h3 className="text-xl font-semibold text-primary mb-3">Peak Performance</h3>
                <p className="text-neutralDark/80">
                  Your body operates at its best. Movement is efficient, strength is optimal, and you perform at your highest level.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-neutralLight">
                <h3 className="text-xl font-semibold text-primary mb-3">Injury Prevention</h3>
                <p className="text-neutralDark/80">
                  We catch problems early. Regular tune-ups prevent the small issues that lead to injuries.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-neutralLight">
                <h3 className="text-xl font-semibold text-primary mb-3">Longevity</h3>
                <p className="text-neutralDark/80">
                  You stay mobile, strong, and pain-free as you age. Your body's software stays updated and optimized.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-neutralLight">
                <h3 className="text-xl font-semibold text-primary mb-3">Ongoing Support</h3>
                <p className="text-neutralDark/80">
                  You have a trusted partner for your body's long-term health. Questions, concerns, or new challenges? We're here.
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
                  <p className="text-lg text-neutralDark/80 mb-4">
                    Most clients do 1-2 sessions per month, though frequency varies based on your needs:
                  </p>
                  <ul className="space-y-2 text-neutralDark/70">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>High-intensity athletes:</strong> Every 2-3 weeks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Active maintenance:</strong> Once per month</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Flexible scheduling:</strong> We adjust based on your training cycles, travel, and needs</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Session Types</h3>
                  <p className="text-lg text-neutralDark/80 mb-4">
                    We mix structural work and movement coaching based on what you need:
                  </p>
                  <ul className="space-y-2 text-neutralDark/70">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Structural tune-ups (60-90 min) to release restrictions and maintain alignment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Movement coaching (60-90 min) to refine patterns and build strength</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Combined sessions (90-120 min) for comprehensive work</span>
                    </li>
                  </ul>
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
              Ongoing coaching is priced per session, with package discounts available for committed clients. Most clients invest $180-$360 per month depending on frequency and session types.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto mb-8">
              <p className="text-lg text-neutralDark/80 mb-6">
                We'll discuss your needs and create a coaching plan that fits your goals and budget. Package pricing available for monthly commitments.
              </p>
              <Button
                to="/book"
                variant="primary"
                size="lg"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
              Ready for Long-Term Performance?
            </h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              If you've completed a Software Upgrade Plan and want ongoing coaching, let's discuss how we can keep your body optimized.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                to="/book"
                variant="primary"
                size="lg"
              >
                Start Coaching
              </Button>
              <Button
                to="/software-upgrade-plan"
                variant="outline"
                size="lg"
              >
                Learn About Upgrade Plans
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PerformanceLongevityCoaching;

