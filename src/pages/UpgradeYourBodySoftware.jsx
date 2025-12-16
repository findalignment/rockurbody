import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Button from '../components/Button';

function UpgradeYourBodySoftware() {
  return (
    <PageLayout>
      <SEO
        title="Upgrade Your Body's Software - Systematic Body Transformation | RockUrBody"
        description="Upgrade your body's software through systematic structural integration and movement education. Transform alignment, strength, and movement longevity. Santa Cruz, CA."
        keywords="upgrade body software, body systems upgrade, structural integration, movement education, body transformation, Santa Cruz"
        url="/upgrade-your-body-software"
      />
      <PageHero 
        imageSrc="/upgrade-body-software-hero.jpg"
        title="Upgrade Your Body's Software"
        subtitle="Your body runs on patterns alignment, strength, movement longevity. We identify what's not working and rebuild it from the ground up."
        alt="Upgrade your body's software through systematic structural integration and movement education"
      />
      <div className="pt-16 pb-24 px-6">

        {/* The Concept */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">
              The Concept
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
                Think of your body like a computer operating system. Over time, it accumulates bugs, inefficient code, and outdated patterns. You can patch symptoms (pain, tightness, restrictions), or you can upgrade the entire system.
              </p>
              <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
                We don't just fix problems. We systematically upgrade how your body operates its alignment, its movement patterns, its structural organization. The result isn't temporary relief. It's a fundamentally better operating system.
              </p>
            </div>
          </div>
        </section>

        {/* Why It Works */}
        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">
              Why This Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Systems Thinking</h3>
                <p className="text-neutralDark/80">
                  Your body works as an integrated system. Pain in one area often comes from somewhere else. We address root causes, not just symptoms.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Structure + Movement</h3>
                <p className="text-neutralDark/80">
                  Hands-on work reorganizes tissue. Movement education makes it stick. Most practitioners focus on one or the other we do both.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Progressive Protocol</h3>
                <p className="text-neutralDark/80">
                  Systematic approach builds on itself. Each session sets up the next. We follow a proven sequence that creates lasting change.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Lasting Change</h3>
                <p className="text-neutralDark/80">
                  We don't just fix problems. We upgrade your movement patterns for the long term. The changes hold because your body learns new ways to move.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Process */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">
              How We Upgrade Your Body's Software
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-3">Assess</h3>
                  <p className="text-lg text-neutralDark/80">
                    We start with a <Link to="/body-systems-check" className="text-accent hover:underline">Body Systems Check</Link> to identify what's working, what's not, and what needs upgrading.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-3">Reorganize</h3>
                  <p className="text-lg text-neutralDark/80">
                    Through Structural Integration, we work hands-on with your fascia to release restrictions and reorganize how your body is put together.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-3">Educate</h3>
                  <p className="text-lg text-neutralDark/80">
                    Movement Education teaches you how to move in ways that support your upgraded structure. These patterns become automatic.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-3">Integrate</h3>
                  <p className="text-lg text-neutralDark/80">
                    Your body learns to use its new structure automatically. You develop movement habits that maintain the improvements long-term.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
              Ready to Upgrade Your Body's Software?
            </h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a Body Systems Check to see what needs upgrading, then we'll design your custom upgrade plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                to="/body-systems-check"
                variant="primary"
                size="lg"
              >
                Book a Body Systems Check
              </Button>
              <Button
                to="/how-it-works"
                variant="outline"
                size="lg"
              >
                Learn How It Works
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

export default UpgradeYourBodySoftware;

