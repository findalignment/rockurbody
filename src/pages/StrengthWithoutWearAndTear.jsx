import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function StrengthWithoutWearAndTear() {
  return (
    <>
      <SEO
        title="Strength Without Wear and Tear - Longevity Training | RockUrBody"
        description="Learn how to build strength without creating wear and tear. Alignment-based training, load management, and movement quality for long-term health. Santa Cruz, CA."
        keywords="strength without wear and tear, longevity training, sustainable strength training, alignment based training, load management, Santa Cruz"
        url="/strength-without-wear-and-tear"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Strength Without Wear and Tear
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              You can build strength without breaking down. It's about how you train, not just how much.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Problem</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Most strength training creates wear and tear. You lift heavy, you get stronger, but you also break down. Over time, that wear and tear creates problems: injuries, pain, movement restrictions.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              It doesn't have to be that way. You can build strength without creating wear and tear. It's about training smart, not just training hard.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How to Build Strength Without Wear and Tear</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Alignment-Based Training</h3>
                <p className="text-neutralDark/80">Build strength from proper alignment, not compensation. Learn about <Link to="/alignment-based-strength-training" className="text-accent hover:underline">alignment-based strength training</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Load Management</h3>
                <p className="text-neutralDark/80">Train hard, but manage load intelligently. Learn about <Link to="/load-management-for-longevity" className="text-accent hover:underline">load management for longevity</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Movement Quality</h3>
                <p className="text-neutralDark/80">Quality movement creates quality strength. Learn about <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline">movement coaching</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Recovery</h3>
                <p className="text-neutralDark/80">Recovery is part of training. Your body needs time to adapt, not just break down.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Long-Term Payoff</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              When you build strength without wear and tear, you're investing in your future. The strength you build today serves you tomorrow, next year, next decade.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/train-for-longevity" className="text-accent hover:underline font-semibold">training for longevity</Link> to build strength that pays dividends.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Build Strength That Lasts?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              A <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> will assess your movement patterns and create a strength training plan that builds you up, not breaks you down.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default StrengthWithoutWearAndTear;

