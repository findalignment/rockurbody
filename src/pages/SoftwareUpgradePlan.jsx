import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Button from '../components/Button';
import FAQSection from '../components/FAQSection';

function SoftwareUpgradePlan() {
  return (
    <PageLayout>
      <SEO
        title="Software Upgrade Plan - 4-8 Week Transformation | RockUrBody"
        description="A focused 4-8 week block that systematically upgrades your body's software through structural integration and movement education. Transform your alignment, strength, and movement quality."
        keywords="software upgrade plan, structural integration program, movement education block, 4-8 week transformation, body upgrade program"
        url="/software-upgrade-plan"
      />
      <PageHero 
        imageSrc="/software-upgrade-plan-hero.jpg"
        title="Software Upgrade Plan"
        subtitle="A focused 4-8 week block that systematically upgrades your body's software. Transform your alignment, strength, and movement quality through structured integration and movement education."
        alt="Software Upgrade Plan - 4-8 week body transformation program"
      />
      <div className="pt-16 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Who It's For */}
          <section className="py-16 md:py-24 px-4">
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
                  <span>Ready to commit to systematic 4-8 week transformation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Have chronic tension, pain, or movement restrictions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Want lasting change, not temporary relief</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Willing to do light homework between sessions</span>
                </li>
              </ul>
            </div>
          </section>

          {/* What Happens */}
          <section className="bg-neutralLight py-16 md:py-24 px-4">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-12 text-center">
              What Happens
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-4">Weeks 1-2: Foundation</h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed">
                  Release major restrictions, begin teaching new movement patterns. We start with the biggest restrictions and imbalances. Structural work releases major tension patterns, and movement education begins teaching your body new ways to organize itself.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-4">Weeks 3-4: Integration</h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed">
                  Address deeper patterns, refine movement quality. We build on the foundation, addressing deeper patterns and refining movement quality. Your body starts to "remember" the new patterns.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-4">Weeks 5-8: Refinement</h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed">
                  Fine-tune system, build long-term movement patterns. We fine-tune the system, address remaining restrictions, and build movement patterns that support your upgraded structure long-term.
                </p>
              </div>
            </div>
          </section>

          {/* What You Leave With */}
          <section className="py-16 md:py-24 px-4">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-12 text-center">
              What You Leave With
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-neutralLight">
                <h3 className="text-xl font-semibold text-primary mb-3">Upgraded Structure</h3>
                <p className="text-neutralDark/80">
                  Better alignment, restrictions released. Your body is better aligned, with restrictions released and fascial patterns reorganized. Movement happens from a stronger foundation.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-neutralLight">
                <h3 className="text-xl font-semibold text-primary mb-3">New Movement Patterns</h3>
                <p className="text-neutralDark/80">
                  Automatic, supportive of upgraded structure. You've learned how to move in ways that support your upgraded structure. These patterns become automatic.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-neutralLight">
                <h3 className="text-xl font-semibold text-primary mb-3">Self-Maintenance Tools</h3>
                <p className="text-neutralDark/80">
                  Exercises and practices to maintain improvements. You have specific exercises and practices to maintain the improvements and continue upgrading over time.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-neutralLight">
                <h3 className="text-xl font-semibold text-primary mb-3">Lasting Change</h3>
                <p className="text-neutralDark/80">
                  Built into movement patterns. The changes hold because they're built into your movement patterns, not just applied from the outside.
                </p>
              </div>
            </div>
          </section>

          {/* Typical Cadence */}
          <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">
              Typical Cadence
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Session Frequency</h3>
                  <p className="text-lg text-neutralDark/80">
                    1-2 sessions per week for 4-8 weeks. Most clients do 1-2 sessions per week, depending on their schedule and goals. The program is flexible we can adjust the cadence to fit your life.
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
              </div>
            </div>
          </section>

          {/* Investment */}
          <section className="py-16 md:py-24 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
                Investment
              </h2>
              <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg max-w-2xl mx-auto">
                <p className="text-xl text-neutralDark/80 mb-6">
                  $1,200-$3,000 (4-8 weeks, varies by session types and frequency)
                </p>
                <p className="text-lg text-neutralDark/70 mb-8">
                  Pricing varies based on session types and frequency. Most 4-8 week programs range from $1,200-$3,000 depending on your needs. We'll create a custom plan during your Body Systems Check or initial consultation.
                </p>
                <Button
                  to="/body-systems-check"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Book a Consultation
                </Button>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="bg-neutralLight py-16 md:py-24 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading text-primary mb-12 text-center">
                Compare Our Offers
              </h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary/5">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-primary border-b border-neutralLight">Feature</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-primary border-b border-neutralLight">Body Systems Check</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-primary border-b border-neutralLight">Software Upgrade Plan</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-primary border-b border-neutralLight">Performance + Longevity Coaching</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutralLight">
                      <tr>
                        <td className="px-6 py-4 font-semibold text-neutralDark">Who It's For</td>
                        <td className="px-6 py-4 text-neutralDark/80">New clients, anyone wanting clarity</td>
                        <td className="px-6 py-4 text-neutralDark/80">Ready to commit to systematic 4-8 week transformation</td>
                        <td className="px-6 py-4 text-neutralDark/80">Completed upgrade plan, want ongoing optimization</td>
                      </tr>
                      <tr className="bg-neutralLight/50">
                        <td className="px-6 py-4 font-semibold text-neutralDark">What Happens</td>
                        <td className="px-6 py-4 text-neutralDark/80">90-minute comprehensive assessment and roadmap</td>
                        <td className="px-6 py-4 text-neutralDark/80">Systematic structural work + movement education over 4-8 weeks</td>
                        <td className="px-6 py-4 text-neutralDark/80">Regular tune-ups, movement refinement, performance optimization</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold text-neutralDark">What You Leave With</td>
                        <td className="px-6 py-4 text-neutralDark/80">Clear understanding of needs, personalized roadmap</td>
                        <td className="px-6 py-4 text-neutralDark/80">Upgraded structure, new movement patterns, self-maintenance tools</td>
                        <td className="px-6 py-4 text-neutralDark/80">Peak performance, injury prevention, long-term optimization</td>
                      </tr>
                      <tr className="bg-neutralLight/50">
                        <td className="px-6 py-4 font-semibold text-neutralDark">Typical Cadence</td>
                        <td className="px-6 py-4 text-neutralDark/80">Single 90-minute session</td>
                        <td className="px-6 py-4 text-neutralDark/80">1-2 sessions per week for 4-8 weeks</td>
                        <td className="px-6 py-4 text-neutralDark/80">1-2 sessions per month, ongoing</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold text-neutralDark">Session Types</td>
                        <td className="px-6 py-4 text-neutralDark/80">Assessment + evaluation</td>
                        <td className="px-6 py-4 text-neutralDark/80">SI sessions (60-120 min) + Movement (60-90 min)</td>
                        <td className="px-6 py-4 text-neutralDark/80">Mix of SI tune-ups + Movement coaching</td>
                      </tr>
                      <tr className="bg-neutralLight/50">
                        <td className="px-6 py-4 font-semibold text-neutralDark">Investment</td>
                        <td className="px-6 py-4 text-neutralDark/80 font-semibold">$250 (one-time)</td>
                        <td className="px-6 py-4 text-neutralDark/80 font-semibold">$1,200-$3,000 (4-8 weeks)</td>
                        <td className="px-6 py-4 text-neutralDark/80 font-semibold">$180-$360 per month</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-neutralDark/80 mb-6">
                  Not sure which offer is right for you? Start with a Body Systems Check to get clarity on your needs.
                </p>
                <Button
                  to="/body-systems-check"
                  variant="primary"
                  size="lg"
                >
                  Book a Systems Check
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 md:py-24 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading text-primary mb-12 text-center">
                Frequently Asked Questions
              </h2>
              <FAQSection
                faqs={[
                  {
                    question: "How is the Software Upgrade Plan different from just booking individual sessions?",
                    answer: "The Software Upgrade Plan is a structured, systematic approach designed to create lasting change. Instead of random sessions, we follow a progressive protocol where each session builds on the previous one. We alternate between structural work and movement education in a specific sequence that maximizes results. Individual sessions can help, but the upgrade plan ensures comprehensive transformation."
                  },
                  {
                    question: "Do I need to do the Body Systems Check before starting the Software Upgrade Plan?",
                    answer: "While not strictly required, we highly recommend it. The Body Systems Check gives us a clear baseline and roadmap, allowing us to design your upgrade plan more effectively. If you've already had similar assessments or have a clear sense of what needs work, we can discuss whether you can skip directly to the upgrade plan."
                  },
                  {
                    question: "What if I can't commit to 1-2 sessions per week?",
                    answer: "The program is flexible. While 1-2 sessions per week is ideal for momentum, we can adjust the cadence to fit your schedule. The key is consistency over the 4-8 week period. We can work with less frequent sessions if needed, though it may extend the timeline slightly."
                  },
                  {
                    question: "Can I combine Structural Integration and Movement Education in the same session?",
                    answer: "Yes! Combined sessions (90-120 minutes) are very effective. We can do hands-on structural work followed immediately by movement education, which helps your body integrate the changes right away. Many clients prefer this approach."
                  },
                  {
                    question: "What kind of homework will I have between sessions?",
                    answer: "The homework is light and focused on integration, not intense training. You'll have specific movements or practices (usually 5-15 minutes) to reinforce what we've worked on. This might include simple mobility work, breathing exercises, or movement patterns to practice. The goal is to help your body remember the new patterns."
                  },
                  {
                    question: "What happens after the 4-8 week upgrade plan?",
                    answer: "After completing the upgrade plan, many clients transition to Performance + Longevity Coaching for ongoing maintenance and optimization. Others feel they've achieved their goals and come in occasionally for tune-ups. We'll discuss your options as you near the end of your upgrade plan."
                  },
                  {
                    question: "Is the Software Upgrade Plan covered by insurance?",
                    answer: "Structural Integration and Movement Education are typically not covered by insurance. However, some clients have used Health Savings Accounts (HSAs) or Flexible Spending Accounts (FSAs) for these services. Check with your plan administrator for details."
                  },
                  {
                    question: "Can I start with a shorter program than 4 weeks?",
                    answer: "The minimum effective program is typically 4 weeks, as it takes time for your body to integrate structural changes and learn new movement patterns. However, if you have specific constraints, we can discuss a modified approach. The Body Systems Check will help us determine what's realistic for your situation."
                  }
                ]}
              />
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
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
                  to="/offers-comparison"
                  variant="outline"
                  size="lg"
                >
                  Compare All Offers
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}

export default SoftwareUpgradePlan;
