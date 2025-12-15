import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function GymInjuriesFromBadMechanics() {
  return (
    <>
      <SEO
        title="Gym Injuries From Bad Mechanics - Movement Quality Training | RockUrBody"
        description="Gym injuries aren't accidents. They're the result of bad movement mechanics. Learn how poor form, compensation patterns, and alignment issues create injuries."
        keywords="gym injuries, bad form injuries, movement mechanics, training injuries, compensation patterns, Santa Cruz"
        url="/gym-injuries-from-bad-mechanics"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Gym Injuries From Bad Mechanics
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Gym injuries aren't accidents. They're the result of bad movement mechanics.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How Bad Mechanics Create Injuries</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              When you lift with poor form, your body compensates. You might be able to move the weight, but you're doing it in ways that create problems. Over time, these compensation patterns lead to injuries.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Common issues: knees that cave, backs that round, shoulders that compensate. These aren't just form problems—they're movement pattern problems that create wear and tear.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Common Gym Injuries From Bad Mechanics</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Back Injuries</h3>
                <p className="text-neutralDark/80">Poor squat or deadlift form creates back injuries. Learn about <Link to="/alignment-based-strength-training" className="text-accent hover:underline">alignment-based strength training</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Knee Injuries</h3>
                <p className="text-neutralDark/80">Knees that cave or compensate create knee pain. Learn about <Link to="/knee-pain-when-squatting" className="text-accent hover:underline">knee pain when squatting</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Shoulder Injuries</h3>
                <p className="text-neutralDark/80">Poor pressing mechanics create shoulder problems. Compensation patterns create wear and tear.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Hip Injuries</h3>
                <p className="text-neutralDark/80">Hips that don't move well create compensation and injuries. Learn about <Link to="/what-are-compensation-patterns" className="text-accent hover:underline">compensation patterns</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Solution</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Fix the movement mechanics, not just the injury. Address alignment, compensation patterns, structural restrictions. Then build movement patterns that serve strength training.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline font-semibold">movement coaching</Link> and <Link to="/pain-aware-training-santa-cruz" className="text-accent hover:underline">pain-aware training</Link> to prevent gym injuries.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Fix Your Movement Mechanics?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              A <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> will identify your movement mechanics issues and create a plan to fix them.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default GymInjuriesFromBadMechanics;

