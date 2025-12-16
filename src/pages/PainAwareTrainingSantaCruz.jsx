import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function PainAwareTrainingSantaCruz() {
  return (
    <>
      <SEO
        title="Pain-Aware Training Santa Cruz | Training With Pain & Injuries | RockUrBody"
        description="Pain-aware training in Santa Cruz. Train safely with chronic pain, injuries, or movement restrictions. Work with your body's limitations, not against them."
        keywords="pain aware training Santa Cruz, training with pain, training with injuries, chronic pain training, movement restrictions, Santa Cruz"
        url="/pain-aware-training-santa-cruz"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Pain-Aware Training Santa Cruz
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Train safely with pain, injuries, or movement restrictions. Work with your body's limitations, not against them.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What Is Pain-Aware Training?</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Pain-aware training means training with awareness of your body's limitations. If something hurts, we find a better way. If you have restrictions, we work around them. If you have injuries, we train around them.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              This isn't about avoiding training. It's about training smart. You can still get stronger, still move better, still make progress you just do it in ways that respect your body's limitations.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How We Approach Pain</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Respect Limitations</h3>
                <p className="text-neutralDark/80">We don't push through pain. If something hurts, we find a better way. Learn about <Link to="/strong-but-still-in-pain" className="text-accent hover:underline">being strong but still in pain</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Address Root Causes</h3>
                <p className="text-neutralDark/80">We don't just work around pain we address what's causing it. Structural work, alignment work, movement education.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Build Strength Safely</h3>
                <p className="text-neutralDark/80">You can still get stronger, even with pain. We build strength in ways that support healing, not hinder it.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Movement Quality</h3>
                <p className="text-neutralDark/80">Quality movement reduces pain. We teach you how to move in ways that don't hurt. Learn about <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline">movement coaching</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Who This Is For</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Pain-aware training is for anyone dealing with pain, injuries, or movement restrictions. You don't have to stop training you just need to train differently.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/upgrade-your-body-software" className="text-accent hover:underline font-semibold">upgrading your body's software</Link> to address pain while training.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Train With Pain Awareness?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> to assess your pain and movement restrictions, then we'll design a pain-aware training program.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PainAwareTrainingSantaCruz;

