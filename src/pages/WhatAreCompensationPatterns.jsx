import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function WhatAreCompensationPatterns() {
  return (
    <>
      <SEO
        title="What Are Compensation Patterns - Understanding Body Compensation | RockUrBody"
        description="Learn what compensation patterns are, how they create pain and movement problems, and how to address them through structural integration and movement education."
        keywords="compensation patterns, body compensation, movement compensation, structural compensation, pain patterns, Santa Cruz"
        url="/what-are-compensation-patterns"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              What Are Compensation Patterns?
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Your body compensates when something isn't working. Understanding compensation patterns is key to fixing pain and movement problems.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What Is Compensation?</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Compensation is your body's way of working around a problem. If something isn't working right—a restriction, an alignment issue, a weakness—your body finds another way to do the job.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              That's not necessarily bad. Compensation is adaptive. But when compensation becomes a pattern, it creates problems. Your body compensates, and that compensation creates new problems.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How Compensation Creates Problems</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Example: Hip Restriction</h3>
                <p className="text-neutralDark/80">If your hip doesn't move well, your back compensates. Your back takes load it shouldn't, and your back hurts. The problem is the hip, but the pain is in the back.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Example: Ankle Mobility</h3>
                <p className="text-neutralDark/80">If your ankle doesn't flex, your knee compensates. Your knee takes load it shouldn't, and your knee hurts. The problem is the ankle, but the pain is in the knee.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Example: Core Control</h3>
                <p className="text-neutralDark/80">If your core doesn't control movement, your back compensates. Your back does work it shouldn't, and your back hurts. Learn why <Link to="/why-core-work-doesnt-fix-back-pain" className="text-accent hover:underline">core work doesn't fix back pain</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How We Address Compensation</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              We don't just treat the symptom (the pain). We address the cause (the restriction, alignment issue, or movement pattern that's creating the compensation).
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              That means structural work to release restrictions, alignment work to improve organization, and movement education to change patterns. Learn about <Link to="/upgrade-your-body-software" className="text-accent hover:underline font-semibold">upgrading your body's software</Link>.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Address Your Compensation Patterns?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              A <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> will identify your compensation patterns and create a plan to address them.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default WhatAreCompensationPatterns;

