import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';

function ChronicPainRelief() {
  return (
    <PageLayout>
      <SEO 
        title="Chronic Pain Relief Santa Cruz | Structural Integration & Movement Therapy"
        description="Find lasting relief from chronic back pain, neck pain, hip issues, and more. Structural Integration + Movement Education addresses root causes, not just symptoms."
        keywords="chronic pain relief santa cruz, back pain santa cruz, neck pain relief, hip pain treatment, fascia therapy, structural integration pain"
      />
      
      <PageHero 
        imageSrc="/approach-hero.jpg"
        title="Chronic Pain Relief That Lasts"
        subtitle="Address the root cause, not just symptoms"
      />

      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Intro */}
          <div className="mb-16">
            <p className="text-2xl font-heading text-primary mb-6 leading-relaxed">
              If you've been dealing with chronic pain for months or years, you know the frustration:
            </p>
            <ul className="space-y-3 text-xl text-neutralDark/80 mb-8">
              <li>✗ Massage feels good temporarily, but pain returns</li>
              <li>✗ Adjustments provide relief that doesn't last</li>
              <li>✗ Stretching and strengthening haven't solved it</li>
              <li>✗ Pain medications mask symptoms without fixing the problem</li>
              <li>✗ You're told "that's just how it is" or to "learn to live with it"</li>
            </ul>
            <p className="text-xl text-accent font-semibold mb-4">
              There's a better way.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Chronic pain often comes from structural imbalances and movement compensation patterns that have developed over years. To get lasting relief, we need to address the root cause.not just treat symptoms.
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              A Two-Part Approach to Pain Relief
            </h2>
            
            <div className="space-y-8">
              <div className="bg-sage/5 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-neutralDark mb-4">
                  1. Structural Integration: Release the Restrictions
                </h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  Your body's connective tissue (fascia) can become tight, stuck, and misaligned from injury, poor posture, repetitive movements, or stress. This creates:
                </p>
                <ul className="space-y-2 text-lg text-neutralDark/80 ml-6 mb-4">
                  <li>• Restricted movement patterns</li>
                  <li>• Constant muscle tension</li>
                  <li>• Nerve compression and irritation</li>
                  <li>• Poor circulation and inflammation</li>
                </ul>
                <p className="text-lg text-neutralDark/80 leading-relaxed">
                  Through precise hands-on work, I release these restrictions, restore length and space, and help your body reorganize around better alignment.
                </p>
              </div>

              <div className="bg-accent/5 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-neutralDark mb-4">
                  2. Movement Education: Change the Patterns
                </h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  Releasing tissue is only half the solution. If you return to the same movement patterns that created the problem, pain will return. We need to teach your body better ways to move.
                </p>
                <p className="text-lg text-neutralDark/80 leading-relaxed">
                  I'll give you simple, effective practices that retrain your nervous system and reinforce the structural changes we make. This is what makes results last.
                </p>
              </div>
            </div>
          </div>

          {/* Common Conditions */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Conditions I Work With
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-4">
                  Back & Spine
                </h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Chronic lower back pain</li>
                  <li>• Upper back tension</li>
                  <li>• Sciatica</li>
                  <li>• Herniated disc recovery</li>
                  <li>• Scoliosis support</li>
                </ul>
              </div>

              <div className="border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-4">
                  Neck & Shoulders
                </h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Chronic neck pain</li>
                  <li>• Shoulder impingement</li>
                  <li>• Forward head posture</li>
                  <li>• Rotator cuff issues</li>
                  <li>• Tension headaches</li>
                </ul>
              </div>

              <div className="border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-4">
                  Hips & Legs
                </h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Hip pain and tightness</li>
                  <li>• IT band syndrome</li>
                  <li>• Knee pain</li>
                  <li>• Plantar fasciitis</li>
                  <li>• Piriformis syndrome</li>
                </ul>
              </div>

              <div className="border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-4">
                  Whole Body
                </h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Poor posture</li>
                  <li>• Limited mobility</li>
                  <li>• Repetitive strain injuries</li>
                  <li>• Post-surgery recovery</li>
                  <li>• General body tension</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What Makes This Different */}
          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Makes This Approach Different
            </h2>
            
            <div className="space-y-4 text-lg text-neutralDark/80">
              <div>
                <strong className="text-neutralDark">We find the root cause.</strong> Pain in one area often originates somewhere else. I look at your whole structure and movement patterns to find what's really driving the problem.
              </div>
              <div>
                <strong className="text-neutralDark">We work systematically.</strong> Rather than chasing symptoms, we follow a progressive protocol that addresses your body layer by layer, inside to outside.
              </div>
              <div>
                <strong className="text-neutralDark">You're an active participant.</strong> This isn't passive treatment. You'll learn about your body, understand what's happening, and have tools to maintain results.
              </div>
              <div>
                <strong className="text-neutralDark">Results compound over time.</strong> Each session builds on the last. The changes we make stick because we're changing both structure and movement habits.
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What to Expect: Timeline for Relief
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-sage rounded-full flex items-center justify-center text-white font-bold">
                  1-3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutralDark mb-2">
                    Sessions: Initial Relief
                  </h3>
                  <p className="text-neutralDark/80">
                    Most people notice reduced pain, improved mobility, and better awareness of their body. You'll understand what's contributing to your pain and have a clear path forward.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  6-8
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutralDark mb-2">
                    Sessions: Significant Improvement
                  </h3>
                  <p className="text-neutralDark/80">
                    Pain is significantly reduced or gone. Movement feels easier. You're starting to maintain better posture and alignment without thinking about it.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  12+
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutralDark mb-2">
                    Sessions: Lasting Change
                  </h3>
                  <p className="text-neutralDark/80">
                    Your body has reorganized around better patterns. Pain is a distant memory. You move with ease and have tools to maintain your progress long-term.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/packages" variant="outline" size="lg" fullWidth>
              View Programs & Pricing
            </Button>
          </div>

          {/* Real Talk */}
          <div className="border-l-4 border-sage pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Real Talk: Is This Right for You?
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              This approach works best if you're ready to be an active participant in your healing. If you want someone to "heal" you while you lie there passively, this probably isn't the right fit.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              But if you're tired of temporary solutions and ready to address the root cause of your pain, I can help. We'll work together to understand your body, release what's stuck, and teach you better ways to move.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Book a free consultation and let's talk about whether this work makes sense for your situation.
            </p>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-sage/10 to-primary/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Ready for Real Relief?
            </h2>
            <p className="text-lg text-neutralDark/80 mb-6">
              Let's talk about your pain and create a plan to address it at the root.
            </p>
            <Button to="/consult" variant="primary" size="lg">
              Book Free Consultation
            </Button>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default ChronicPainRelief;

