import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MovementAssessmentSantaCruz() {
  // LocalBusiness Schema for SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness", "MedicalBusiness"],
    "name": "RockUrBody - Movement Assessment Santa Cruz",
    "image": "https://rockurbody.com/logo.png",
    "description": "Comprehensive movement assessment and screening in Santa Cruz. Identify movement patterns, compensation, and restrictions. Functional movement analysis for athletes and active individuals.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Santa Cruz",
      "addressLocality": "Santa Cruz",
      "addressRegion": "CA",
      "postalCode": "95060",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.9741,
      "longitude": -122.0308
    },
    "url": "https://rockurbody.com/movement-assessment-santa-cruz",
    "telephone": "+1-831-419-4422",
    "priceRange": "$$$"
  };

  return (
    <>
      <SEO
        title="Movement Assessment Santa Cruz | Comprehensive Movement Screening | RockUrBody"
        description="Comprehensive movement assessment in Santa Cruz. Evaluate movement patterns, identify restrictions, and create a personalized plan. Movement screening for athletes and active people."
        keywords="movement assessment Santa Cruz, movement screening Santa Cruz, movement evaluation, functional movement screen, movement analysis Santa Cruz"
        url="/movement-assessment-santa-cruz"
      />
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
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
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What Makes This Assessment Different</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">We Look at the Whole System</h3>
                <p className="text-neutralDark/80 leading-relaxed">
                  Most assessments isolate joints and movements. We look at how everything connects. Your hip restriction might be causing your knee pain. Your ankle stiffness might be affecting your back. We assess the whole system, not just individual parts.
                </p>
              </div>
              <div className="bg-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">We Identify Why, Not Just What</h3>
                <p className="text-neutralDark/80 leading-relaxed">
                  Identifying that you have limited hip mobility isn't enough. We figure out WHY. Is it structural restriction? Lack of motor control? <Link to="/what-are-compensation-patterns" className="text-accent hover:underline">Compensation patterns</Link>? The "why" determines the solution.
                </p>
              </div>
              <div className="bg-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">We Create an Actionable Plan</h3>
                <p className="text-neutralDark/80 leading-relaxed">
                  You don't just get information you get a plan. Based on what we find, we'll recommend specific next steps, whether that's <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline">movement coaching</Link>, <Link to="/what-is-structural-integration" className="text-accent hover:underline">structural integration</Link>, or a combination.
                </p>
              </div>
            </div>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              This assessment is part of our <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link>, a comprehensive 75-minute session that evaluates your entire movement system.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Who Should Get Assessed</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-accent/5 rounded-lg p-6 border-l-4 border-accent">
                <h3 className="font-semibold text-primary mb-3">Great For:</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Athletes wanting to optimize performance</li>
                  <li>• People with chronic pain or recurring injuries</li>
                  <li>• Active adults noticing limitations</li>
                  <li>• Anyone starting a new training program</li>
                  <li>• People returning from injury</li>
                  <li>• Anyone who wants to move better</li>
                </ul>
              </div>
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <h3 className="font-semibold text-primary mb-3">Especially Useful If:</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• You've tried everything but still have pain</li>
                  <li>• Your workouts feel harder than they should</li>
                  <li>• You have one side stronger than the other</li>
                  <li>• You get injured doing "normal" things</li>
                  <li>• You want to train for longevity</li>
                  <li>• You're a surfer, climber, runner, hiker in Santa Cruz</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">Movement Assessment in Santa Cruz</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Located in Santa Cruz, serving active individuals throughout the area who want to understand and improve their movement.
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-md mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">Proudly Serving:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="text-neutralDark/80">Downtown Santa Cruz</div>
                <div className="text-neutralDark/80">Westside</div>
                <div className="text-neutralDark/80">Eastside</div>
                <div className="text-neutralDark/80">Capitola</div>
                <div className="text-neutralDark/80">Aptos</div>
                <div className="text-neutralDark/80">Soquel</div>
                <div className="text-neutralDark/80">Scotts Valley</div>
                <div className="text-neutralDark/80">Live Oak</div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-xl p-6 border-l-4 border-accent">
              <p className="text-neutralDark/80 leading-relaxed">
                <strong className="text-primary">For Santa Cruz's Active Community:</strong> Whether you're surfing at Steamer Lane, trail running in Nisene Marks, or climbing at Pacific Edge, movement assessment helps you understand your body's patterns and stay in the activities you love.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">What Clients Say</h2>
            
            <div className="space-y-8">
              <div className="bg-neutralLight rounded-xl p-8 shadow-md">
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4 italic">
                  "He has a sharp eye for alignment and movement. His background in structural integration has helped me understand why my body does what it does, not just how to muscle through an exercise."
                </p>
                <p className="text-primary font-semibold">Ellen M., Santa Cruz</p>
              </div>

              <div className="bg-neutralLight rounded-xl p-8 shadow-md">
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4 italic">
                  "Rock is an encyclopedia of anatomy knowledge with deep intuition on how to help people address and move through their physical challenges."
                </p>
                <p className="text-primary font-semibold">Tahlia D., Santa Cruz</p>
              </div>
            </div>
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

