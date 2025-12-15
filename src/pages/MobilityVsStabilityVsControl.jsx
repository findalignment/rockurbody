import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MobilityVsStabilityVsControl() {
  return (
    <>
      <SEO
        title="Mobility vs Stability vs Control - Understanding Movement Quality | RockUrBody"
        description="Learn the difference between mobility, stability, and control, and why all three matter for movement quality and injury prevention. Santa Cruz, CA."
        keywords="mobility vs stability, movement control, movement quality, functional movement, mobility training, stability training, Santa Cruz"
        url="/mobility-vs-stability-vs-control"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Mobility vs Stability vs Control
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Understanding the difference between mobility, stability, and control is key to movement quality.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Three Components</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent">
                <h3 className="text-2xl font-semibold text-primary mb-4">Mobility</h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  Mobility is your ability to move through a range of motion. Can your hip flex? Can your ankle dorsiflex? Can your shoulder reach overhead?
                </p>
                <p className="text-neutralDark/70">
                  But mobility alone isn't enough. You can have mobility and still move poorly.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent">
                <h3 className="text-2xl font-semibold text-primary mb-4">Stability</h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  Stability is your ability to resist unwanted movement. Can your core resist rotation? Can your hip resist collapse? Can your shoulder resist compensation?
                </p>
                <p className="text-neutralDark/70">
                  But stability alone isn't enough. You can be stable and still move poorly.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent">
                <h3 className="text-2xl font-semibold text-primary mb-4">Control</h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  Control is your ability to use mobility and stability together. Can you move through range while maintaining stability? Can you control movement, not just resist it?
                </p>
                <p className="text-neutralDark/70">
                  Control is what makes mobility and stability useful. It's the integration of both.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Why All Three Matter</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              You need mobility to move. You need stability to resist unwanted movement. But you need control to use both together effectively.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Most training focuses on one or two. We train all three together. That's what creates movement quality.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-md mt-6">
              <h3 className="text-xl font-semibold text-primary mb-3">Example: Squatting</h3>
              <p className="text-neutralDark/80">
                You need ankle mobility to squat deep. You need hip stability to resist collapse. But you need control to use both together—to move through range while maintaining stability. That's control.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How We Train All Three</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              We don't just stretch for mobility or brace for stability. We train control—the ability to use mobility and stability together in movement.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline font-semibold">movement coaching</Link> to develop mobility, stability, and control together.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Develop Movement Quality?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              A <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> will assess your mobility, stability, and control, then create a plan to develop all three.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default MobilityVsStabilityVsControl;

