import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function TrainForLongevity() {
  return (
    <>
      <SEO
        title="Train for Longevity - The Dividends Philosophy | RockUrBody"
        description="Train for the long term. Build strength, mobility, and movement quality that pays dividends for decades. The dividends philosophy for aging well. Santa Cruz, CA."
        keywords="train for longevity, longevity training, aging well, movement for life, sustainable training, Santa Cruz"
        url="/train-for-longevity"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Train for Longevity
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              The Dividends Philosophy: Build movement that pays dividends for decades, not just today.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Dividends Philosophy</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Most training is transactional. You work out, you get stronger today. But what about next year? Next decade? Most training doesn't account for the long term.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              The Dividends Philosophy is different. Every movement, every exercise, every training session is an investment in your future self. You're not just training for today you're building movement capital that pays dividends for decades.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What This Means</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Strength Without Wear and Tear</h3>
                <p className="text-neutralDark/80">We build strength that supports your body, not breaks it down. Learn more about <Link to="/strength-without-wear-and-tear" className="text-accent hover:underline">strength without wear and tear</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Load Management</h3>
                <p className="text-neutralDark/80">We train hard, but we manage load intelligently. Learn about <Link to="/load-management-for-longevity" className="text-accent hover:underline">load management for longevity</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Movement Quality</h3>
                <p className="text-neutralDark/80">Every movement pattern we build serves you long-term. Quality over quantity, always.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Prevention Over Treatment</h3>
                <p className="text-neutralDark/80">We catch problems before they become problems. Regular maintenance keeps your body's software updated.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Long-Term Payoff</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-8">
              When you train for longevity, you're investing in your future self. The movements you build today serve you tomorrow, next year, next decade. You're not just getting stronger you're building a body that ages well.
            </p>
            
            <div className="bg-accent/10 rounded-xl p-8 border-l-4 border-accent mb-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">What "Dividends" Means in Practice:</h3>
              <div className="space-y-4 text-neutralDark/80">
                <div className="flex items-start gap-3">
                  <div className="text-accent font-bold text-xl mt-0.5">→</div>
                  <div>
                    <strong>Age 30-40:</strong> Build movement foundations now so you don't develop chronic issues later. The hip mobility you build today prevents back pain in 10 years.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-accent font-bold text-xl mt-0.5">→</div>
                  <div>
                    <strong>Age 40-50:</strong> Maintain strength and movement quality so you stay active in your 60s and 70s. The alignment work you do now keeps you hiking, surfing, and moving freely decades from now.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-accent font-bold text-xl mt-0.5">→</div>
                  <div>
                    <strong>Age 50-60+:</strong> Build strength and mobility that keeps you independent. The movement quality you develop now means you don't need help getting off the floor or reaching overhead at 80.
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg text-neutralDark/80 leading-relaxed">
              This isn't about training less. It's about training smarter. Training that builds you up, not breaks you down. Training that pays dividends.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">Short-Term Training vs. Longevity Training</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-neutralLight rounded-xl overflow-hidden shadow-md">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left">Aspect</th>
                    <th className="p-4 text-left">Short-Term Focus</th>
                    <th className="p-4 text-left bg-accent/20">Longevity Focus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white">
                    <td className="p-4 font-semibold">Goal</td>
                    <td className="p-4">Look good for summer, lose weight fast</td>
                    <td className="p-4 bg-accent/5">Move well for decades, age optimally</td>
                  </tr>
                  <tr className="border-b border-white">
                    <td className="p-4 font-semibold">Exercise Selection</td>
                    <td className="p-4">Whatever burns calories or builds muscle</td>
                    <td className="p-4 bg-accent/5">Movements that serve you long-term</td>
                  </tr>
                  <tr className="border-b border-white">
                    <td className="p-4 font-semibold">Pain Approach</td>
                    <td className="p-4">Push through it or work around it</td>
                    <td className="p-4 bg-accent/5">Understand it, address root causes</td>
                  </tr>
                  <tr className="border-b border-white">
                    <td className="p-4 font-semibold">Load Management</td>
                    <td className="p-4">More is better, go heavy always</td>
                    <td className="p-4 bg-accent/5">Intelligent progression, strategic recovery</td>
                  </tr>
                  <tr className="border-b border-white">
                    <td className="p-4 font-semibold">Success Metric</td>
                    <td className="p-4">Weight on the bar, reps completed</td>
                    <td className="p-4 bg-accent/5">Movement quality, function, feeling good</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Timeline</td>
                    <td className="p-4">8-12 weeks, then start over</td>
                    <td className="p-4 bg-accent/5">Years, decades, lifetime</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">What Gets Better When You Train for Longevity</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Immediate Benefits (Weeks):</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Less pain and tension</li>
                  <li>• Better movement quality</li>
                  <li>• Improved awareness of your body</li>
                  <li>• Reduced compensation patterns</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Medium-Term Benefits (Months):</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Strength built on good alignment</li>
                  <li>• Better posture without thinking about it</li>
                  <li>• Activities feel easier</li>
                  <li>• Fewer injuries and setbacks</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Long-Term Benefits (Years):</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Body ages well, stays mobile</li>
                  <li>• Chronic issues prevented, not treated</li>
                  <li>• Movement remains effortless</li>
                  <li>• Independence maintained</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Lifetime Benefits (Decades):</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Active well into 70s, 80s, 90s+</li>
                  <li>• No dependence on others for basic tasks</li>
                  <li>• Quality of life remains high</li>
                  <li>• The dividends keep compounding</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-neutralLight rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Is longevity training less intense?</h3>
                <p className="text-neutralDark/80">
                  No. Longevity training is still challenging you still build strength, you still push yourself. The difference is in <em>how</em> you train. You build strength from good alignment, you manage load intelligently, you respect your body's limitations. Intensity is still there, but it's smart intensity.
                </p>
              </div>
              <div className="bg-neutralLight rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Can I still build muscle training this way?</h3>
                <p className="text-neutralDark/80">
                  Absolutely. Muscle grows from progressive overload and adequate recovery. Longevity training includes both. The difference is we build muscle in ways that support your structure, not compromise it. You get stronger AND move better.
                </p>
              </div>
              <div className="bg-neutralLight rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">How is this different from "functional fitness"?</h3>
                <p className="text-neutralDark/80">
                  Functional fitness often means training movements that mimic daily life. Longevity training goes deeper we address your specific structure, your specific patterns, your specific needs. It's not about generic "functional" movements it's about movements that serve YOUR body long-term. Learn more about <Link to="/alignment-based-strength-training" className="text-accent hover:underline">alignment-based strength training</Link>.
                </p>
              </div>
              <div className="bg-neutralLight rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">What if I'm already 50, 60, or older?</h3>
                <p className="text-neutralDark/80">
                  Perfect. The best time to start training for longevity was 20 years ago. The second best time is now. Regardless of your age, the work you do today pays dividends tomorrow. Learn about <Link to="/training-for-40s-and-50s" className="text-accent hover:underline">training for your 40s and 50s</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Train for the Long Term?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> to assess your current movement patterns, then we'll design a longevity-focused training program.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default TrainForLongevity;

