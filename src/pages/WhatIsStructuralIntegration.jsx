import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';

function WhatIsStructuralIntegration() {
  return (
    <PageLayout>
      <PageHero 
        imageSrc="/services-hero.jpg"
        title="What is Structural Integration?"
        subtitle="Understanding the foundation of lasting change"
      />

      {/* SEO-optimized intro */}
      <div className="bg-offWhite pt-8 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
            Structural Integration in Santa Cruz
          </h2>
          <p className="text-lg text-neutralDark/80 leading-relaxed">
            <strong>Structural Integration</strong> is precise hands-on work that helps your body's connective tissue (fascia) glide and coordinate better. It's not massage—it's systematic bodywork that reorganizes how your whole body functions.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* What it is */}
          <div>
            <h3 className="text-3xl font-heading text-primary mb-6">
              What It Is
            </h3>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              Your body is wrapped in a web of connective tissue called fascia. Think of it like a three-dimensional sweater—when one part gets tight or restricted, it pulls on everything else. Over time, compensations stack up, and you end up with pain, stiffness, or movement limitations that won't budge with stretching or strength training alone.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              Structural Integration addresses the fascia directly. Through skilled hands-on work, I release restrictions and help your body reorganize around better alignment. I pair this with simple movement cues, so the changes "stick" when you stand, walk, lift, and live.
            </p>
          </div>

          {/* Why people book this */}
          <div className="bg-offWhite rounded-2xl p-8">
            <h3 className="text-2xl font-heading text-primary mb-6">
              Why People Book This
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">💪</span>
                <div>
                  <strong className="text-neutralDark">Relief from nagging tension and "stuck" spots</strong>
                  <p className="text-neutralDark/70 mt-1">That shoulder that never quite loosens up, the hip that's always tight—these aren't just muscle problems. They're often fascial restrictions.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🌬️</span>
                <div>
                  <strong className="text-neutralDark">Better posture and easier breathing</strong>
                  <p className="text-neutralDark/70 mt-1">When your structure is organized, your body doesn't have to work so hard to hold you upright. Breathing becomes easier, deeper.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🏃</span>
                <div>
                  <strong className="text-neutralDark">Stronger, smoother movement in daily life and training</strong>
                  <p className="text-neutralDark/70 mt-1">Whether you're lifting, running, or just moving through your day, better structure means better function.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* How it works */}
          <div>
            <h3 className="text-3xl font-heading text-primary mb-6">
              How It Works
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h4 className="text-xl font-heading text-primary mb-3">
                  1. Assess & Map
                </h4>
                <p className="text-neutralDark/80 leading-relaxed">
                  We look at how you stand, walk, and breathe to find the bottlenecks. Where is your body compensating? What patterns are you stuck in?
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-heading text-primary mb-3">
                  2. Hands-On + Cueing
                </h4>
                <p className="text-neutralDark/80 leading-relaxed">
                  Targeted work to free tissue, combined with movements that teach your body a better option. This isn't passive—you're actively learning as we work.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h4 className="text-xl font-heading text-primary mb-3">
                  3. Reinforce
                </h4>
                <p className="text-neutralDark/80 leading-relaxed">
                  You leave with 1–2 micro-practices tailored to your patterns. Simple things you can do daily to maintain and build on what we've opened up.
                </p>
              </div>
            </div>
          </div>

          {/* What to expect */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-heading text-primary mb-6">
              What to Expect
            </h3>
            <ul className="space-y-3 text-neutralDark/80">
              <li>✓ Wear comfy clothing you can move in—no oils or lotions</li>
              <li>✓ We'll get you up and moving during the session (this isn't a passive table experience)</li>
              <li>✓ You may feel lighter, taller, or a bit worked afterward (normal and temporary)</li>
              <li>✓ Session lengths: 60, 90, or 120 minutes depending on your needs</li>
            </ul>
          </div>

          {/* What's realistic */}
          <div>
            <h3 className="text-3xl font-heading text-primary mb-6">
              What's Realistic
            </h3>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              Many people feel a meaningful shift in 1–3 sessions. But lasting change? That usually needs 6–12 sessions with light homework between.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              This isn't a quick fix. It's change that holds because your movement changes. You're not just getting "worked on"—you're learning a better way to inhabit your body.
            </p>
          </div>

          {/* Bottom line */}
          <div className="bg-primary text-white rounded-2xl p-8">
            <h3 className="text-2xl font-heading mb-4">
              The Bottom Line
            </h3>
            <p className="text-lg leading-relaxed">
              If you've tried stretching, strengthening, and adjustments but still feel stuck—or if you want to build a body that works better for the long haul—Structural Integration might be exactly what you need.
            </p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-offWhite py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-heading text-primary mb-6">
            Ready to experience it?
          </h3>
          <p className="text-lg text-neutralDark/80 mb-8 leading-relaxed">
            Book a free consultation to discuss your goals, or explore our structural integration sessions and series.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to="/book/structural-integration"
              variant="primary"
              size="lg"
            >
              View Structural Integration Options
            </Button>
            <Button
              href="https://cal.com/rockyourbody/consultation"
              variant="outline"
              size="lg"
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default WhatIsStructuralIntegration;

