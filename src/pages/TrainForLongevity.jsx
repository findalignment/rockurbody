import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function TrainForLongevity() {
  return (
    <>
      <SEO
        title="Train for Longevity - The Dividends Philosophy | RockUrBody"
        description="Train for the long term. Build strength, mobility, and movement quality that pays dividends for decades. The dividends philosophy for aging well. Santa Cruz, CA."
        keywords="train for longevity, longevity training, aging well, movement for life, sustainable training, Santa Cruz"
        url="/train-for-longevity"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Train for Longevity
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              The Dividends Philosophy: Build movement that pays dividends for decades, not just today.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Dividends Philosophy</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Most training is transactional. You work out, you get stronger today. But what about next year? Next decade? Most training doesn't account for the long term.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              The Dividends Philosophy is different. Every movement, every exercise, every training session is an investment in your future self. You're not just training for today you're building movement capital that pays dividends for decades.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What This Means</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Strength Without Wear and Tear</h3>
                <p className="text-neutralDark/80">We build strength that supports your body, not breaks it down. Learn more about <Link to="/strength-without-wear-and-tear" className="text-accent hover:underline">strength without wear and tear</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Load Management</h3>
                <p className="text-neutralDark/80">We train hard, but we manage load intelligently. Learn about <Link to="/load-management-for-longevity" className="text-accent hover:underline">load management for longevity</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Movement Quality</h3>
                <p className="text-neutralDark/80">Every movement pattern we build serves you long-term. Quality over quantity, always.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Prevention Over Treatment</h3>
                <p className="text-neutralDark/80">We catch problems before they become problems. Regular maintenance keeps your body's software updated.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Long-Term Payoff</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              When you train for longevity, you're investing in your future self. The movements you build today serve you tomorrow, next year, next decade. You're not just getting stronger you're building a body that ages well.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              This isn't about training less. It's about training smarter. Training that builds you up, not breaks you down. Training that pays dividends.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Train for the Long Term?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> to assess your current movement patterns, then we'll design a longevity-focused training program.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default TrainForLongevity;

