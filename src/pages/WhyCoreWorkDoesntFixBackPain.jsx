import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function WhyCoreWorkDoesntFixBackPain() {
  return (
    <>
      <SEO
        title="Why Core Work Doesn't Fix Back Pain - Root Cause Treatment | RockUrBody"
        description="Core work alone doesn't fix back pain. Learn why strengthening your core isn't enough and how to address the root causes of back pain through structural integration."
        keywords="core work back pain, why core doesn't fix back pain, back pain treatment, structural issues, compensation patterns, Santa Cruz"
        url="/why-core-work-doesnt-fix-back-pain"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Why Core Work Doesn't Fix Back Pain
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Core work alone doesn't fix back pain. You need to address the root causes.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Core Work Trap</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              You have back pain, so you strengthen your core. You do planks, crunches, dead bugs. Your core gets stronger, but your back still hurts. Why?
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Because back pain isn't usually a core weakness problem. It's a structural problem, an alignment problem, or a movement pattern problem. Strengthening your core doesn't fix those.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Why Core Work Fails</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Structural Restrictions</h3>
                <p className="text-neutralDark/80">If your fascia is restricted, your back compensates. Strengthening your core doesn't release those restrictions.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Alignment Issues</h3>
                <p className="text-neutralDark/80">If your pelvis isn't aligned properly, your back compensates. Learn about <Link to="/what-is-alignment-in-the-body" className="text-accent hover:underline">alignment in the body</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Compensation Patterns</h3>
                <p className="text-neutralDark/80">If your hips don't move well, your back compensates. Strengthening your core doesn't fix hip restrictions. Learn about <Link to="/what-are-compensation-patterns" className="text-accent hover:underline">compensation patterns</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Movement Patterns</h3>
                <p className="text-neutralDark/80">If you move in ways that don't serve your structure, your back compensates. You need to change the movement patterns, not just strengthen your core.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Real Solution</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Address the root causes. Release structural restrictions. Fix alignment issues. Address compensation patterns. Change movement patterns. Then strengthen your core in ways that support your structure.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/upgrade-your-body-software" className="text-accent hover:underline font-semibold">upgrading your body's software</Link> to fix back pain by addressing root causes.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Fix Your Back Pain?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              A <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> will identify the root causes of your back pain and create a plan to address them.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default WhyCoreWorkDoesntFixBackPain;

