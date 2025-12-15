import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Button from '../components/Button';

function WhyStretchingDoesntFixIt() {
  return (
    <PageLayout>
      <SEO
        title="Why Stretching Doesn't Fix It - Addressing Root Causes | RockUrBody"
        description="Stretching addresses symptoms, not causes. Learn why stretching doesn't fix chronic tightness and how to address the root causes through structural integration."
        keywords="why stretching doesn't work, chronic tightness, flexibility issues, structural restrictions, compensation patterns, Santa Cruz"
        url="/why-stretching-doesnt-fix-it"
      />
      <PageHero 
        imageSrc="/stretching-doesnt-fix-hero.jpg"
        title="Why Stretching Doesn't Fix It"
        subtitle="Stretching addresses the symptom, not the cause. If your body is tight because it's compensating, stretching won't fix it."
        alt="Why stretching doesn't fix chronic tightness - addressing root causes"
      />
      <div className="pt-16 pb-24 px-6">

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Stretching Trap</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              You feel tight, so you stretch. It feels good temporarily. But the tightness comes back. So you stretch more. It still comes back. Why?
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Because tightness is usually a symptom, not the problem. Your body is tight because something isn't working right. Stretching addresses the tightness, but not why your body is tight in the first place.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Why Stretching Fails</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Compensation Patterns</h3>
                <p className="text-neutralDark/80">If your body is tight because it's compensating for a structural issue, stretching won't fix it. The compensation will recreate the tightness. Learn about <Link to="/what-are-compensation-patterns" className="text-accent hover:underline">compensation patterns</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Structural Restrictions</h3>
                <p className="text-neutralDark/80">Fascial restrictions create tightness that stretching can't address. You need structural work to release these restrictions.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Alignment Issues</h3>
                <p className="text-neutralDark/80">When your body isn't aligned properly, muscles have to work harder, creating chronic tension. Stretching doesn't fix alignment.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Movement Patterns</h3>
                <p className="text-neutralDark/80">If you move in ways that don't serve your structure, your body compensates with tightness. You need to change the movement patterns, not just stretch.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Real Solution</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Instead of stretching the tightness, address why your body is tight. That means structural work to release restrictions, alignment work to improve organization, and movement education to change patterns.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/upgrade-your-body-software" className="text-accent hover:underline font-semibold">upgrading your body's software</Link> to address the root causes of tightness.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Address the Root Cause?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              A <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> will identify why you're tight and create a plan to address it.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

export default WhyStretchingDoesntFixIt;

