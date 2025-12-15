import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Button from '../components/Button';

function KneePainWhenSquatting() {
  return (
    <PageLayout>
      <SEO
        title="Knee Pain When Squatting - Movement Quality Issues | RockUrBody"
        description="Knee pain when squatting isn't a knee problem. Learn how poor movement patterns, alignment issues, and compensation create knee pain, and how to fix it."
        keywords="knee pain squatting, knee pain when squatting, squat form problems, movement quality, alignment issues, Santa Cruz"
        url="/knee-pain-when-squatting"
      />
      <PageHero 
        imageSrc="/knee-pain-squatting-hero.jpg"
        title="Knee Pain When Squatting"
        subtitle="Knee pain when squatting isn't a knee problem. It's a movement pattern problem."
        alt="Knee pain when squatting treatment through movement quality improvement"
      />
      <div className="pt-16 pb-24 px-6">

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Why Your Knees Hurt</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Your knees don't hurt because they're weak. They hurt because they're taking load they shouldn't. When you squat with poor movement patterns, your knees compensate for what your hips and ankles aren't doing.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Common issues: hips that don't move well, ankles that don't flex, core that doesn't control. Your knees take the load, and they hurt.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Common Causes</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Hip Restrictions</h3>
                <p className="text-neutralDark/80">If your hips don't move well, your knees compensate. Learn about <Link to="/hip-pain-from-sitting" className="text-accent hover:underline">hip restrictions</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Ankle Mobility</h3>
                <p className="text-neutralDark/80">Poor ankle mobility forces your knees to compensate. Learn about <Link to="/mobility-vs-stability-vs-control" className="text-accent hover:underline">mobility vs stability</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Alignment Issues</h3>
                <p className="text-neutralDark/80">Poor alignment creates knee pain. Learn about <Link to="/alignment-based-strength-training" className="text-accent hover:underline">alignment-based training</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Compensation Patterns</h3>
                <p className="text-neutralDark/80">Your body compensates for restrictions, creating knee pain. Learn about <Link to="/what-are-compensation-patterns" className="text-accent hover:underline">compensation patterns</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Solution</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Fix the movement pattern, not just the knee. Address hip restrictions, ankle mobility, alignment issues. Then teach your body to squat correctly.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline font-semibold">movement coaching</Link> to fix knee pain when squatting.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Fix Your Knee Pain?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              A <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> will identify why your knees hurt when squatting and create a plan to fix it.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

export default KneePainWhenSquatting;

