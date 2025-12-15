import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function WhatIsAlignmentInTheBody() {
  return (
    <>
      <SEO
        title="What Is Alignment In The Body - Understanding Body Alignment | RockUrBody"
        description="Learn what alignment means in the body, why it matters for movement and pain, and how to improve alignment through structural integration and movement education."
        keywords="body alignment, postural alignment, structural alignment, movement alignment, alignment training, Santa Cruz"
        url="/what-is-alignment-in-the-body"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              What Is Alignment In The Body?
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Alignment isn't about perfect posture. It's about how your body organizes itself to move efficiently.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What Alignment Means</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Alignment is how your body parts relate to each other. Are your ears over your shoulders? Are your shoulders over your hips? Are your hips over your ankles? When your body is aligned, it moves efficiently. When it's not, it compensates.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              But alignment isn't static. It's dynamic. Your alignment changes as you move. Good alignment means your body organizes itself well in movement, not just standing still.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Why Alignment Matters</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Efficient Movement</h3>
                <p className="text-neutralDark/80">When your body is aligned, it moves efficiently. No wasted energy, no compensation patterns.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Load Distribution</h3>
                <p className="text-neutralDark/80">Good alignment distributes load properly. Poor alignment creates wear and tear. Learn about <Link to="/strength-without-wear-and-tear" className="text-accent hover:underline">strength without wear and tear</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Pain Prevention</h3>
                <p className="text-neutralDark/80">Poor alignment creates compensation patterns that cause pain. Good alignment prevents problems.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Performance</h3>
                <p className="text-neutralDark/80">Good alignment supports performance. Learn about <Link to="/alignment-based-strength-training" className="text-accent hover:underline">alignment-based strength training</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How We Improve Alignment</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              We don't just tell you to stand up straight. We address the structural restrictions, alignment issues, and movement patterns that create poor alignment.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Structural work releases restrictions. Alignment work improves organization. Movement education teaches your body to maintain alignment in movement.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/upgrade-your-body-software" className="text-accent hover:underline font-semibold">upgrading your body's software</Link> to improve alignment.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Improve Your Alignment?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              A <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> will assess your alignment and create a plan to improve it.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default WhatIsAlignmentInTheBody;

