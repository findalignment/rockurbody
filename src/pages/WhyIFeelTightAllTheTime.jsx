import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function WhyIFeelTightAllTheTime() {
  return (
    <>
      <SEO
        title="Why I Feel Tight All The Time - Understanding Chronic Tension | RockUrBody"
        description="Chronic tightness isn't just about flexibility. Learn why you feel tight all the time and how to address the root causes through structural integration and movement education."
        keywords="chronic tightness, always feel tight, muscle tension, flexibility issues, structural restrictions, Santa Cruz"
        url="/why-i-feel-tight-all-the-time"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Why I Feel Tight All The Time
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Chronic tightness isn't a flexibility problem. It's a structural and movement pattern problem.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Real Problem</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              If you've tried stretching, foam rolling, and yoga but still feel tight all the time, you're not alone. And it's not because you're not stretching enough.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Chronic tightness is usually a sign that your body is compensating. Something isn't working right, so your body tightens up to create stability. The tightness is a symptom, not the problem.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Common Causes</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Structural Restrictions</h3>
                <p className="text-neutralDark/80">Your fascia (connective tissue) can get restricted and create a feeling of tightness. Learn about <Link to="/what-are-compensation-patterns" className="text-accent hover:underline">compensation patterns</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Alignment Issues</h3>
                <p className="text-neutralDark/80">When your body isn't aligned properly, muscles have to work harder to maintain stability, creating chronic tension.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Movement Patterns</h3>
                <p className="text-neutralDark/80">If you move in ways that don't serve your structure, your body compensates with tightness. Learn about <Link to="/mobility-vs-stability-vs-control" className="text-accent hover:underline">mobility vs stability vs control</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Breathing Restrictions</h3>
                <p className="text-neutralDark/80">Poor breathing patterns create tension throughout your body. Learn about the <Link to="/breathing-and-posture-connection" className="text-accent hover:underline">breathing and posture connection</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Why Stretching Doesn't Fix It</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Stretching addresses the symptom (tightness) but not the cause (why your body is tight in the first place). If your body is tight because it's compensating for a structural issue, stretching won't fix it. The tightness will come back.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn more about <Link to="/why-stretching-doesnt-fix-it" className="text-accent hover:underline font-semibold">why stretching doesn't fix it</Link>.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Address the Root Cause?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              A <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> will identify why you feel tight and create a plan to address it.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default WhyIFeelTightAllTheTime;

