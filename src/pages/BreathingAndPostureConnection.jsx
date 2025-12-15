import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function BreathingAndPostureConnection() {
  return (
    <>
      <SEO
        title="Breathing & Posture Connection - How Breathing Affects Posture | RockUrBody"
        description="Learn how breathing and posture are connected, why poor breathing creates postural problems, and how to fix both through structural integration and movement education."
        keywords="breathing and posture, breathing patterns, posture problems, breathing mechanics, structural integration, Santa Cruz"
        url="/breathing-and-posture-connection"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Breathing & Posture Connection
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Breathing and posture are connected. Fix one, and you fix the other.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How Breathing Affects Posture</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              When you breathe poorly, your body compensates. Your head moves forward. Your shoulders round. Your upper back gets tight. Your core doesn't work right.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Poor breathing creates postural problems. And postural problems create breathing problems. It's a cycle.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Common Breathing Problems</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Chest Breathing</h3>
                <p className="text-neutralDark/80">Breathing into your chest instead of your belly creates tension in your neck and shoulders, contributing to forward head posture.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Shallow Breathing</h3>
                <p className="text-neutralDark/80">Shallow breathing doesn't engage your core properly, contributing to poor core control and postural problems.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Restricted Breathing</h3>
                <p className="text-neutralDark/80">Structural restrictions in your ribs, diaphragm, or fascia can limit breathing, creating compensation patterns.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How Posture Affects Breathing</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              When your posture is poor, your breathing is restricted. Forward head posture restricts your airway. Rounded shoulders restrict your rib movement. Poor alignment restricts your diaphragm.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/what-is-alignment-in-the-body" className="text-accent hover:underline">alignment in the body</Link> and how it affects breathing.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Solution</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Fix both together. Structural work releases restrictions that limit breathing. Alignment work improves posture. Breathing education teaches proper breathing patterns. Movement education integrates breathing with movement.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/upgrade-your-body-software" className="text-accent hover:underline font-semibold">upgrading your body's software</Link> to fix breathing and posture together.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Fix Your Breathing & Posture?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              A <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> will assess your breathing and posture, then create a plan to fix both.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default BreathingAndPostureConnection;

