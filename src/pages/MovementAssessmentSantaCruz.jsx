import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MovementAssessmentSantaCruz() {
  return (
    <>
      <SEO
        title="Movement Assessment Santa Cruz | Comprehensive Movement Screening | RockUrBody"
        description="Comprehensive movement assessment in Santa Cruz. Evaluate movement patterns, identify restrictions, and create a personalized plan. Movement screening for athletes and active people."
        keywords="movement assessment Santa Cruz, movement screening Santa Cruz, movement evaluation, functional movement screen, movement analysis Santa Cruz"
        url="/movement-assessment-santa-cruz"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Movement Assessment Santa Cruz
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Comprehensive movement screening to evaluate your movement patterns, identify restrictions, and create a personalized plan.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What Is a Movement Assessment?</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              A movement assessment evaluates how you move. We observe you walking, squatting, reaching, and moving through various patterns. This reveals how your body organizes itself in motion.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Unlike a static posture assessment, a movement assessment shows us how your body moves, not just how it looks. That's what matters for function and performance.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What We Assess</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Movement Patterns</h3>
                <p className="text-neutralDark/80">How you squat, hinge, push, pull, and carry. We identify compensation patterns and movement quality issues.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Mobility & Stability</h3>
                <p className="text-neutralDark/80">Range of motion, joint mobility, and stability. Learn about <Link to="/mobility-vs-stability-vs-control" className="text-accent hover:underline">mobility vs stability vs control</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Alignment</h3>
                <p className="text-neutralDark/80">How your body organizes itself in movement. Learn about <Link to="/what-is-alignment-in-the-body" className="text-accent hover:underline">alignment in the body</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Compensation Patterns</h3>
                <p className="text-neutralDark/80">Where your body compensates and why. Learn about <Link to="/what-are-compensation-patterns" className="text-accent hover:underline">compensation patterns</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What You Get</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              After your assessment, you'll get a clear picture of your movement patterns, restrictions, and needs. We'll create a personalized plan to address what we find.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              This is part of our <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> a comprehensive assessment that includes movement screening.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready for a Movement Assessment?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Book a <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> to get a comprehensive movement assessment and personalized plan.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default MovementAssessmentSantaCruz;

