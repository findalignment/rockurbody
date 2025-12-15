import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function StrongButStillInPain() {
  return (
    <>
      <SEO
        title="Strong But Still In Pain - Why Strength Alone Isn't Enough | RockUrBody"
        description="You're strong but still in pain. Learn why strength alone isn't enough and how alignment, movement quality, and structural work address chronic pain."
        keywords="strong but in pain, chronic pain despite strength, pain with strength training, movement quality, alignment issues, Santa Cruz"
        url="/strong-but-still-in-pain"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Strong But Still In Pain
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              You're strong. You train hard. But you're still in pain. Strength alone isn't enough.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Strength-Pain Paradox</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              You can squat 300 pounds and still have back pain. You can deadlift 400 pounds and still have hip pain. Strength doesn't automatically mean pain-free.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Why? Because strength and pain are different systems. Strength is about force production. Pain is about how your body organizes itself to produce that force. If your body compensates to get strong, you can be strong and still hurt.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Why Strength Alone Fails</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Compensation Patterns</h3>
                <p className="text-neutralDark/80">If you're strong but compensating, you're strong in ways that create problems. Learn about <Link to="/what-are-compensation-patterns" className="text-accent hover:underline">compensation patterns</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Alignment Issues</h3>
                <p className="text-neutralDark/80">Strength from poor alignment creates wear and tear. Learn about <Link to="/alignment-based-strength-training" className="text-accent hover:underline">alignment-based strength training</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Movement Quality</h3>
                <p className="text-neutralDark/80">You can be strong but move poorly. Movement quality matters more than strength numbers. Learn about <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline">movement coaching</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Structural Restrictions</h3>
                <p className="text-neutralDark/80">Fascial restrictions can create pain even when you're strong. Structural work addresses these restrictions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Solution</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              You don't need to get weaker. You need to get stronger in the right ways. That means building strength from proper alignment, not compensation. It means addressing structural restrictions that create pain. It means upgrading your movement patterns.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/upgrade-your-body-software" className="text-accent hover:underline font-semibold">upgrading your body's software</Link> to address pain while maintaining strength.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Be Strong AND Pain-Free?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              A <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> will identify why you're strong but still in pain, then we'll create a plan to address it.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default StrongButStillInPain;

