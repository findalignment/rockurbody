import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function LoadManagementForLongevity() {
  return (
    <>
      <SEO
        title="Load Management For Longevity - Sustainable Training | RockUrBody"
        description="Learn how to manage training load for longevity. Train hard without breaking down. Load management strategies for sustainable strength and performance. Santa Cruz, CA."
        keywords="load management, training load, sustainable training, longevity training, recovery, training volume, Santa Cruz"
        url="/load-management-for-longevity"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Load Management For Longevity
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Train hard, but manage load intelligently. Your body needs stress to adapt, but too much stress breaks you down.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What Is Load Management?</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Load management is how you balance training stress with recovery. It's not about training less—it's about training smarter. You need stress to adapt, but you also need recovery to adapt.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Most people train too hard, too often, without enough recovery. That creates wear and tear. Load management prevents that.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Load Management Principles</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Progressive Overload</h3>
                <p className="text-neutralDark/80">Increase load gradually. Your body adapts to stress, but it needs time to adapt. Too much too fast breaks you down.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Recovery</h3>
                <p className="text-neutralDark/80">Recovery is part of training. Your body adapts during recovery, not during training. Without recovery, you just break down.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Movement Quality</h3>
                <p className="text-neutralDark/80">Quality movement handles load better. Learn about <Link to="/strength-without-wear-and-tear" className="text-accent hover:underline">strength without wear and tear</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Listen to Your Body</h3>
                <p className="text-neutralDark/80">Your body tells you when it's ready for more load and when it needs recovery. Learn to listen.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Long-Term Payoff</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              When you manage load intelligently, you train for the long term. You build strength, not just break down. You perform better, not just harder.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/train-for-longevity" className="text-accent hover:underline font-semibold">training for longevity</Link> to build movement that pays dividends.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Train for the Long Term?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              A <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> will assess your current load and create a training plan that builds you up, not breaks you down.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LoadManagementForLongevity;

