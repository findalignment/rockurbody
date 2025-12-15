import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function TrainingFor40sAnd50s() {
  return (
    <>
      <SEO
        title="Training For 40s & 50s - Movement Coaching For Midlife | RockUrBody"
        description="Training designed for people in their 40s and 50s. Build strength, maintain mobility, and train for longevity. Movement coaching that serves you for decades."
        keywords="training for 40s and 50s, midlife training, aging well, longevity training, movement for life, Santa Cruz"
        url="/training-for-40s-and-50s"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Training For 40s & 50s
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Movement coaching designed for midlife. Build strength, maintain mobility, and train for longevity—movement that serves you for decades.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Midlife Challenge</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Your body changes in your 40s and 50s. You might notice more stiffness, more aches, less recovery. But that doesn't mean you have to slow down. It means you need to train smarter.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Midlife training isn't about training less—it's about training better. Building strength without wear and tear. Maintaining mobility without breaking down. Training for the long term.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How We Approach Midlife Training</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Longevity Focus</h3>
                <p className="text-neutralDark/80">Train for the long term. Learn about <Link to="/train-for-longevity" className="text-accent hover:underline">training for longevity</Link> and the dividends philosophy.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Load Management</h3>
                <p className="text-neutralDark/80">Train hard, but manage load intelligently. Learn about <Link to="/load-management-for-longevity" className="text-accent hover:underline">load management</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Strength Without Wear</h3>
                <p className="text-neutralDark/80">Build strength without breaking down. Learn about <Link to="/strength-without-wear-and-tear" className="text-accent hover:underline">strength without wear and tear</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Mobility Maintenance</h3>
                <p className="text-neutralDark/80">Maintain mobility without creating problems. Quality movement that serves you long-term.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What You Get</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Training that respects your body's changes while still challenging you. Movement that builds you up, not breaks you down. Strength and mobility that serve you for decades.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/personal-trainer-santa-cruz-for-longevity" className="text-accent hover:underline font-semibold">personal training for longevity</Link>.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Train for Midlife?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> to assess your movement patterns, then we'll design a midlife training program.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default TrainingFor40sAnd50s;

