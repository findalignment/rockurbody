import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Button from '../components/Button';

function WhyMyBackKeepsGoingOut() {
  return (
    <PageLayout>
      <SEO
        title="Why My Back Keeps Going Out - Recurring Back Problems | RockUrBody"
        description="Recurring back problems aren't random. Learn why your back keeps going out and how to address the root causes through structural integration and movement education."
        keywords="recurring back pain, back keeps going out, chronic back problems, structural issues, compensation patterns, Santa Cruz"
        url="/why-my-back-keeps-going-out"
      />
      <PageHero 
        imageSrc="/back-going-out-hero.jpg"
        title="Why My Back Keeps Going Out"
        subtitle="Recurring back problems aren't random. They're patterns. And patterns can be changed."
        alt="Recurring back problems treatment through structural integration"
      />
      <div className="pt-16 pb-24 px-6">

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Pattern</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Your back goes out. You rest, ice, maybe see a chiropractor. It gets better. Then it happens again. And again. Why?
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Because the underlying pattern hasn't changed. Your back is compensating for something a structural restriction, an alignment issue, a movement pattern that doesn't serve your body. Until you address that pattern, your back will keep going out.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Common Causes</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Hip Restrictions</h3>
                <p className="text-neutralDark/80">If your hips don't move well, your back compensates. Learn about <Link to="/hip-pain-from-sitting" className="text-accent hover:underline">hip restrictions</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Core Control Issues</h3>
                <p className="text-neutralDark/80">Poor core control forces your back to do work it shouldn't. Learn why <Link to="/why-core-work-doesnt-fix-back-pain" className="text-accent hover:underline">core work doesn't fix back pain</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Alignment Problems</h3>
                <p className="text-neutralDark/80">When your pelvis isn't aligned properly, your back compensates. Structural work addresses alignment.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Movement Patterns</h3>
                <p className="text-neutralDark/80">If you move in ways that don't serve your structure, your back takes the load. Movement education changes these patterns.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Solution</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Stop treating the symptom. Address the pattern. That means structural work to release restrictions, alignment work to improve organization, and movement education to change how you move.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/upgrade-your-body-software" className="text-accent hover:underline font-semibold">upgrading your body's software</Link> to break the cycle of recurring back problems.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Break the Cycle?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              A <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> will identify why your back keeps going out and create a plan to address it.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

export default WhyMyBackKeepsGoingOut;

