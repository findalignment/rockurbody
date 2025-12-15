import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function TrainingForSurfersSantaCruz() {
  return (
    <>
      <SEO
        title="Training For Surfers Santa Cruz | Movement Coaching For Surfers | RockUrBody"
        description="Movement coaching for surfers in Santa Cruz. Address surfing-specific movement patterns, prevent injuries, and improve performance. Training designed for surfers."
        keywords="training for surfers Santa Cruz, surfer training, surfing performance, surfer movement, Santa Cruz surfers, movement coaching surfers"
        url="/training-for-surfers-santa-cruz"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Training For Surfers Santa Cruz
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Movement coaching designed for surfers. Address surfing-specific patterns, prevent injuries, and improve performance.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Surfing-Specific Challenges</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Surfing creates specific movement patterns and demands. Paddling, popping up, balancing, rotating—surfing requires mobility, stability, and control in ways that other activities don't.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              These demands create specific problems: shoulder issues from paddling, lower back problems from arching, hip restrictions from the pop-up. We address these surfing-specific patterns.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How We Help Surfers</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Address Paddling Patterns</h3>
                <p className="text-neutralDark/80">Paddling creates shoulder and upper back restrictions. We address these patterns to prevent injuries and improve paddling efficiency.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Improve Pop-Up</h3>
                <p className="text-neutralDark/80">The pop-up requires hip mobility, core control, and coordination. We train these patterns specifically.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Prevent Lower Back Problems</h3>
                <p className="text-neutralDark/80">Surfing's arching creates lower back problems. We address alignment and movement patterns to prevent these issues.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Build Surfing-Specific Strength</h3>
                <p className="text-neutralDark/80">Strength that serves surfing. Rotational power, stability, mobility—training that improves your surfing.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What You Get</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Training that addresses surfing-specific patterns. Movement coaching that improves your surfing. Injury prevention that keeps you in the water.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/surfers" className="text-accent hover:underline">surfer training</Link> and <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline font-semibold">movement coaching</Link>.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Improve Your Surfing?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> to assess your movement patterns, then we'll design a surfing-specific training program.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default TrainingForSurfersSantaCruz;

