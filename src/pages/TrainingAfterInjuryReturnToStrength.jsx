import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function TrainingAfterInjuryReturnToStrength() {
  return (
    <>
      <SEO
        title="Training After Injury - Return To Strength | RockUrBody"
        description="Return to strength training after injury. Safe, progressive training that respects your body's healing process. Movement coaching for injury recovery."
        keywords="training after injury, return to strength, injury recovery training, post-injury training, rehabilitation training, Santa Cruz"
        url="/training-after-injury-return-to-strength"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Training After Injury: Return To Strength
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Return to strength training safely after injury. Progressive training that respects your body's healing process.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Challenge</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              You've been injured. You've done physical therapy. You're cleared to train again. But you're not sure how to return to strength training safely.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              You don't want to re-injure yourself, but you also don't want to stay weak. You need training that respects your body's healing process while still challenging you.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How We Approach Post-Injury Training</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Respect Healing</h3>
                <p className="text-neutralDark/80">We don't push through pain or rush recovery. We respect your body's healing process.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Progressive Loading</h3>
                <p className="text-neutralDark/80">Gradual return to strength. We start where you are and progress safely. Learn about <Link to="/load-management-for-longevity" className="text-accent hover:underline">load management</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Address Root Causes</h3>
                <p className="text-neutralDark/80">We don't just strengthen the injured area we address what caused the injury. Structural work, alignment work, movement education.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Pain-Aware Training</h3>
                <p className="text-neutralDark/80">Train with awareness of your limitations. Learn about <Link to="/pain-aware-training-santa-cruz" className="text-accent hover:underline">pain-aware training</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What You Get</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Safe, progressive return to strength. Training that respects your healing while still challenging you. Movement patterns that prevent re-injury.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/injury-recovery" className="text-accent hover:underline">injury recovery</Link> and <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline font-semibold">movement coaching</Link>.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Return to Strength?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> to assess your current movement patterns and create a safe return-to-strength plan.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default TrainingAfterInjuryReturnToStrength;

