import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function PostureCoachingSantaCruz() {
  return (
    <>
      <SEO
        title="Posture Coaching Santa Cruz | Posture Correction & Improvement | RockUrBody"
        description="Posture coaching in Santa Cruz. Fix poor posture through structural integration and movement education. Address root causes, not just symptoms. Santa Cruz, CA."
        keywords="posture coaching Santa Cruz, posture correction Santa Cruz, improve posture, postural alignment, desk posture, Santa Cruz"
        url="/posture-coaching-santa-cruz"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Posture Coaching Santa Cruz
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Fix poor posture by addressing root causes, not just symptoms. Structural integration and movement education for lasting change.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Why Posture Coaching?</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Most posture "fixes" are temporary. You're told to stand up straight, you do it for a while, then you forget. That's because you're treating the symptom, not the cause.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Posture coaching addresses the root causes: structural restrictions, alignment issues, movement patterns, breathing problems. Fix those, and posture improves naturally.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What We Address</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Structural Restrictions</h3>
                <p className="text-neutralDark/80">Fascial restrictions create poor posture. Structural work releases these restrictions.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Alignment Issues</h3>
                <p className="text-neutralDark/80">Poor alignment creates poor posture. Learn about <Link to="/what-is-alignment-in-the-body" className="text-accent hover:underline">alignment in the body</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Breathing Patterns</h3>
                <p className="text-neutralDark/80">Poor breathing creates poor posture. Learn about the <Link to="/breathing-and-posture-connection" className="text-accent hover:underline">breathing and posture connection</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Movement Patterns</h3>
                <p className="text-neutralDark/80">How you move affects your posture. Movement education changes these patterns.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Who This Is For</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Posture coaching is for anyone with poor posture—desk workers, athletes, people with chronic pain. If your posture is affecting your life, we can help.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/desk-worker-wellness" className="text-accent hover:underline">desk worker wellness</Link> and <Link to="/neck-shoulder-tension-from-desk-work" className="text-accent hover:underline">neck and shoulder tension from desk work</Link>.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Fix Your Posture?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> to assess your posture and create a plan to improve it.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PostureCoachingSantaCruz;

