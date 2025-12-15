import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function PersonalTrainerSantaCruzForLongevity() {
  return (
    <>
      <SEO
        title="Personal Trainer Santa Cruz For Longevity | RockUrBody"
        description="Personal training in Santa Cruz focused on longevity. Build strength, mobility, and movement quality that serves you for decades. Alignment-based training for aging well."
        keywords="personal trainer Santa Cruz, longevity training Santa Cruz, personal training Santa Cruz, movement coaching Santa Cruz, strength training Santa Cruz"
        url="/personal-trainer-santa-cruz-for-longevity"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Personal Trainer Santa Cruz For Longevity
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Personal training that builds movement for the long term. Strength, mobility, and movement quality that serves you for decades.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Why Longevity-Focused Training?</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Most personal training focuses on short-term goals: lose weight, get stronger, look better. That's fine, but it doesn't account for the long term.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Longevity-focused training is different. Every movement, every exercise, every session is an investment in your future self. You're not just training for today—you're building movement capital that pays dividends for decades.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What Makes This Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Alignment-Based</h3>
                <p className="text-neutralDark/80">Build strength from proper alignment, not compensation. Learn about <Link to="/alignment-based-strength-training" className="text-accent hover:underline">alignment-based training</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Load Management</h3>
                <p className="text-neutralDark/80">Train hard, but manage load intelligently. Learn about <Link to="/load-management-for-longevity" className="text-accent hover:underline">load management</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Movement Quality</h3>
                <p className="text-neutralDark/80">Quality movement creates quality strength. Learn about <Link to="/strength-without-wear-and-tear" className="text-accent hover:underline">strength without wear and tear</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Pain-Aware</h3>
                <p className="text-neutralDark/80">We work with your body's limitations, not against them. Learn about <Link to="/pain-aware-training-santa-cruz" className="text-accent hover:underline">pain-aware training</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Who This Is For</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              This is for people who want to train for the long term. You're not just looking for quick results—you want movement that serves you for decades. You want to age well, stay mobile, stay strong, stay independent.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/train-for-longevity" className="text-accent hover:underline font-semibold">training for longevity</Link> and the dividends philosophy.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Train for the Long Term?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> to assess your current movement patterns, then we'll design a longevity-focused training program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
              <Button to="/book" variant="outline" size="lg">Book Training Session</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PersonalTrainerSantaCruzForLongevity;

