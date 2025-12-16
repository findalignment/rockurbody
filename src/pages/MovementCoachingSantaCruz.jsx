import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MovementCoachingSantaCruz() {
  return (
    <>
      <SEO
        title="Movement Coaching Santa Cruz | Private Training | RockUrBody"
        description="Expert movement coaching in Santa Cruz, CA. Intelligent training that builds strength, mobility, and movement quality. Private sessions tailored to your body and goals."
        keywords="movement coaching Santa Cruz, private personal training Santa Cruz, movement education Santa Cruz, functional training Santa Cruz, movement specialist Santa Cruz"
        url="/movement-coaching-santa-cruz"
      />
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Movement Coaching Santa Cruz
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Intelligent training that builds strength, mobility, and movement quality from the ground up. Foundation first, then build.
            </p>
          </div>
        </section>

        {/* What It Is */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">
              What Is Movement Coaching?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
                Movement Coaching isn't just exercise. It's education. We teach you how to move better how to build strength without compensation, how to develop mobility that serves function, how to train for longevity, not just performance.
              </p>
              <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
                Most training focuses on exercises. We focus on movement patterns. The difference? Exercises are things you do. Movement patterns are how your body organizes itself to do them. Upgrade the patterns, and everything improves.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes It Different */}
        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">
              What Makes This Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Foundation First</h3>
                <p className="text-neutralDark/80">
                  We build from alignment and control, not just strength. Strong movement from a weak foundation creates problems. We build the foundation first.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Pattern-Based</h3>
                <p className="text-neutralDark/80">
                  We teach movement patterns, not just exercises. Your body learns how to organize itself better, which transfers to everything you do.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Pain-Aware</h3>
                <p className="text-neutralDark/80">
                  We work with your body's limitations, not against them. If something hurts, we find a better way. No "no pain, no gain" nonsense.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Longevity-Focused</h3>
                <p className="text-neutralDark/80">
                  We train for the long term. Strength without wear and tear. Performance that doesn't break you down. Movement that serves you for decades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">
              Who It's For
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent">
                <h3 className="text-xl font-semibold text-primary mb-3">People in Pain</h3>
                <p className="text-neutralDark/80">
                  If you're dealing with chronic pain, movement restrictions, or injuries, we'll work with your body's limitations and build strength that supports healing.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent">
                <h3 className="text-xl font-semibold text-primary mb-3">Athletes & Active People</h3>
                <p className="text-neutralDark/80">
                  If you want to perform better, move more efficiently, and prevent injuries, we'll upgrade your movement patterns to support your goals.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent">
                <h3 className="text-xl font-semibold text-primary mb-3">Aging Well</h3>
                <p className="text-neutralDark/80">
                  If you want to stay mobile, strong, and independent as you age, we'll build movement patterns that serve you for the long term.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent">
                <h3 className="text-xl font-semibold text-primary mb-3">Desk Workers</h3>
                <p className="text-neutralDark/80">
                  If you sit all day and feel tight, achy, or restricted, we'll address the patterns that desk work creates and build movement that counters them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">
              What You'll Learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-2">Alignment-Based Strength</h3>
                <p className="text-neutralDark/70 text-sm">Build strength from proper alignment, not compensation patterns.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-2">Functional Mobility</h3>
                <p className="text-neutralDark/70 text-sm">Develop mobility that serves movement, not just flexibility.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-2">Core Control</h3>
                <p className="text-neutralDark/70 text-sm">Learn how to use your core to support movement, not just brace.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-2">Breathing Integration</h3>
                <p className="text-neutralDark/70 text-sm">Connect breathing to movement for better efficiency and control.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-2">Load Management</h3>
                <p className="text-neutralDark/70 text-sm">Learn how to train hard without breaking down.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-2">Movement Patterns</h3>
                <p className="text-neutralDark/70 text-sm">Upgrade how you squat, hinge, push, pull, and carry.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
              Ready to Upgrade Your Movement?
            </h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> to see what needs upgrading, or book a movement coaching session.
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
                Book Movement Coaching
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default MovementCoachingSantaCruz;

