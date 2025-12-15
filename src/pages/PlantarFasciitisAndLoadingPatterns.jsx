import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Button from '../components/Button';

function PlantarFasciitisAndLoadingPatterns() {
  return (
    <PageLayout>
      <SEO
        title="Plantar Fasciitis & Loading Patterns - Root Cause Treatment | RockUrBody"
        description="Plantar fasciitis isn't just a foot problem. Learn how loading patterns, alignment issues, and compensation create plantar fasciitis, and how to fix it."
        keywords="plantar fasciitis, loading patterns, foot pain, structural issues, compensation patterns, Santa Cruz"
        url="/plantar-fasciitis-and-loading-patterns"
      />
      <PageHero 
        imageSrc="/plantar-loading-hero.jpg"
        title="Plantar Fasciitis & Loading Patterns"
        subtitle="Plantar fasciitis isn't a foot problem. It's a loading pattern problem."
        alt="Plantar fasciitis and loading patterns treatment through structural integration"
      />
      <div className="pt-16 pb-24 px-6">

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How Loading Patterns Create Plantar Fasciitis</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Your plantar fascia doesn't hurt because it's weak. It hurts because it's taking load it shouldn't. When your body doesn't load properly through your feet, your plantar fascia compensates.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Common issues: hips that don't control, knees that collapse, ankles that don't move well. Your feet take the load, and your plantar fascia hurts.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Real Problem</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Hip Control</h3>
                <p className="text-neutralDark/80">If your hips don't control movement, your feet compensate. Learn about <Link to="/mobility-vs-stability-vs-control" className="text-accent hover:underline">mobility vs stability vs control</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Alignment Issues</h3>
                <p className="text-neutralDark/80">Poor alignment creates loading problems. Learn about <Link to="/what-is-alignment-in-the-body" className="text-accent hover:underline">alignment in the body</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Compensation Patterns</h3>
                <p className="text-neutralDark/80">Your body compensates for restrictions, creating loading problems. Learn about <Link to="/what-are-compensation-patterns" className="text-accent hover:underline">compensation patterns</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Solution</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Fix the loading pattern, not just the foot. Address hip control, alignment, compensation patterns. Then teach your body to load properly.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline font-semibold">movement coaching</Link> to fix plantar fasciitis by addressing loading patterns.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Fix Your Plantar Fasciitis?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              A <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> will identify the loading patterns causing your plantar fasciitis and create a plan to fix them.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

export default PlantarFasciitisAndLoadingPatterns;

