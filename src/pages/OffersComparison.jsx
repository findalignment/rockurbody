import SEO from '../components/SEO';
import Button from '../components/Button';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';

function OffersComparison() {
  return (
    <PageLayout>
      <SEO
        title="Compare Our Service Offers - Body Systems Check, Upgrade Plan, Coaching | RockUrBody"
        description="Compare our three service offers: Body Systems Check (intro), Software Upgrade Plan (4-8 weeks), and Performance + Longevity Coaching (ongoing). Find the right fit for your goals."
        keywords="service comparison, body systems check vs upgrade plan, coaching comparison, structural integration programs"
        url="/offers-comparison"
      />
      <PageHero
        title="Choose Your Upgrade Path"
        subtitle="Three clear ways to upgrade your body's software. Compare options and find the right fit for your goals."
        imageSrc="/approach-hero.jpg"
      />

      {/* Comparison Table */}
      <section className="py-16 md:py-24 px-4 bg-offWhite">
          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left font-semibold">Feature</th>
                    <th className="p-4 text-center font-semibold border-l border-white/20">Body Systems Check</th>
                    <th className="p-4 text-center font-semibold border-l border-white/20">Software Upgrade Plan</th>
                    <th className="p-4 text-center font-semibold border-l border-white/20">Performance + Longevity Coaching</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutralLight">
                    <td className="p-4 font-semibold text-primary">Who It's For</td>
                    <td className="p-4 text-center border-l border-neutralLight text-neutralDark/80">New clients, anyone wanting clarity on their body's needs</td>
                    <td className="p-4 text-center border-l border-neutralLight text-neutralDark/80">Ready to commit to systematic 4-8 week transformation</td>
                    <td className="p-4 text-center border-l border-neutralLight text-neutralDark/80">Completed upgrade plan, want ongoing optimization</td>
                  </tr>
                  <tr className="border-b border-neutralLight bg-neutralLight/30">
                    <td className="p-4 font-semibold text-primary">What Happens</td>
                    <td className="p-4 text-center border-l border-neutralLight text-neutralDark/80">90-minute comprehensive assessment and roadmap</td>
                    <td className="p-4 text-center border-l border-neutralLight text-neutralDark/80">Systematic structural work + movement education over 4-8 weeks</td>
                    <td className="p-4 text-center border-l border-neutralLight text-neutralDark/80">Regular tune-ups, movement refinement, performance optimization</td>
                  </tr>
                  <tr className="border-b border-neutralLight">
                    <td className="p-4 font-semibold text-primary">What You Leave With</td>
                    <td className="p-4 text-center border-l border-neutralLight text-neutralDark/80">Clear understanding of your body's needs, personalized roadmap</td>
                    <td className="p-4 text-center border-l border-neutralLight text-neutralDark/80">Upgraded structure, new movement patterns, self-maintenance tools</td>
                    <td className="p-4 text-center border-l border-neutralLight text-neutralDark/80">Peak performance, injury prevention, long-term optimization</td>
                  </tr>
                  <tr className="border-b border-neutralLight bg-neutralLight/30">
                    <td className="p-4 font-semibold text-primary">Typical Cadence</td>
                    <td className="p-4 text-center border-l border-neutralLight text-neutralDark/80">Single 90-minute session</td>
                    <td className="p-4 text-center border-l border-neutralLight text-neutralDark/80">1-2 sessions per week for 4-8 weeks</td>
                    <td className="p-4 text-center border-l border-neutralLight text-neutralDark/80">1-2 sessions per month, ongoing</td>
                  </tr>
                  <tr className="border-b border-neutralLight">
                    <td className="p-4 font-semibold text-primary">Session Types</td>
                    <td className="p-4 text-center border-l border-neutralLight text-neutralDark/80">Assessment + evaluation</td>
                    <td className="p-4 text-center border-l border-neutralLight text-neutralDark/80">SI sessions (60-120 min) + Movement (60-90 min)</td>
                    <td className="p-4 text-center border-l border-neutralLight text-neutralDark/80">Mix of SI tune-ups + Movement coaching</td>
                  </tr>
                  <tr className="border-b border-neutralLight bg-neutralLight/30">
                    <td className="p-4 font-semibold text-primary">Investment</td>
                    <td className="p-4 text-center border-l border-neutralLight">
                      <div className="text-2xl font-bold text-primary">$250</div>
                      <div className="text-sm text-neutralDark/70">One-time</div>
                    </td>
                    <td className="p-4 text-center border-l border-neutralLight">
                      <div className="text-2xl font-bold text-primary">$1,200-$3,000</div>
                      <div className="text-sm text-neutralDark/70">4-8 weeks</div>
                    </td>
                    <td className="p-4 text-center border-l border-neutralLight">
                      <div className="text-2xl font-bold text-primary">$180-$360</div>
                      <div className="text-sm text-neutralDark/70">Per month</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-primary">Best For</td>
                    <td className="p-4 text-center border-l border-neutralLight text-neutralDark/80">
                      <ul className="text-left space-y-1 text-sm">
                        <li>• Not sure where to start</li>
                        <li>• Want clarity before committing</li>
                        <li>• Need assessment</li>
                      </ul>
                    </td>
                    <td className="p-4 text-center border-l border-neutralLight text-neutralDark/80">
                      <ul className="text-left space-y-1 text-sm">
                        <li>• Ready for transformation</li>
                        <li>• Have chronic issues</li>
                        <li>• Want lasting change</li>
                      </ul>
                    </td>
                    <td className="p-4 text-center border-l border-neutralLight text-neutralDark/80">
                      <ul className="text-left space-y-1 text-sm">
                        <li>• Athletes & active people</li>
                        <li>• Want ongoing optimization</li>
                        <li>• Long-term performance</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-neutralLight text-center">
                <h3 className="text-xl font-semibold text-primary mb-4">Body Systems Check</h3>
                <p className="text-neutralDark/80 mb-6">Start here to get clarity on your body's needs.</p>
                <Button
                  to="/body-systems-check"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-accent text-center">
                <h3 className="text-xl font-semibold text-primary mb-4">Software Upgrade Plan</h3>
                <p className="text-neutralDark/80 mb-6">Commit to a systematic 4-8 week transformation.</p>
                <Button
                  to="/software-upgrade-plan"
                  variant="accent"
                  size="md"
                  className="w-full"
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-neutralLight text-center">
                <h3 className="text-xl font-semibold text-primary mb-4">Performance Coaching</h3>
                <p className="text-neutralDark/80 mb-6">Ongoing optimization for long-term performance.</p>
                <Button
                  to="/performance-longevity-coaching"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
      </section>

      {/* Next Steps */}
      <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
              Not Sure Which Is Right?
            </h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a Body Systems Check. We'll assess your needs and recommend the best path forward.
            </p>
            <Button
              to="/body-systems-check"
              variant="primary"
              size="lg"
            >
              Book a Systems Check
            </Button>
          </div>
      </section>
    </PageLayout>
  );
}

export default OffersComparison;

