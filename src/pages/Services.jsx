import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import WaveDivider from '../components/dividers/WaveDivider';
import PullQuote from '../components/content/PullQuote';
import Callout from '../components/content/Callout';
import ExpandableSection from '../components/content/ExpandableSection';

function Services() {
  return (
    <PageLayout>
      <PageHero 
        imageSrc="/services-hero.jpg"
        title="Our Services"
        subtitle="Structural Integration & Movement Education"
      />
      {/* Add soft wave divider */}
      <div className="relative bg-white">
        <WaveDivider position="top" color="#faf8f5" height="80px" />
        
        <div className="pt-24 pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Pull Quote */}
            <PullQuote size="medium" position="center">
              Your movement holds your story
            </PullQuote>
            
            <p className="text-xl text-neutralDark/80 mb-16 leading-relaxed text-center">
              I offer two complementary approaches: hands-on structural work and movement education. Most clients benefit from both.
            </p>
            
            <div className="space-y-16">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <h2 className="text-3xl font-heading text-neutralDark mb-6">
                Structural Integration
              </h2>
              <p className="text-lg text-neutralDark/80 mb-8 leading-relaxed">
                Structural Integration is precise hands-on work that helps your body's connective tissue (fascia) glide and coordinate better. I pair it with simple movement cues so changes "stick" when you stand, walk, lift, and live.
              </p>
              
              <Callout variant="info" title="The Bottom Line">
                Hands-on fascia work + movement education to realign how you move so life feels easier
              </Callout>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutralDark mb-4">Why People Book This</h3>
                  <ul className="space-y-3 text-lg text-neutralDark/80 leading-relaxed">
                    <li>• Relief from nagging tension and "stuck" spots</li>
                    <li>• Better posture and easier breathing</li>
                    <li>• Stronger, smoother movement in daily life and training</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutralDark mb-4">How It Works</h3>
                  <div className="space-y-4 text-lg text-neutralDark/80 leading-relaxed">
                    <div>
                      <strong>Assess & map</strong> – We look at how you stand, walk, and breathe to find the bottlenecks.
                    </div>
                    <div>
                      <strong>Hands-on + cueing</strong> – Targeted work to free tissue + movements that teach your body a better option.
                    </div>
                    <div>
                      <strong>Reinforce</strong> – Leave with 1–2 micro-practices tailored to your patterns.
                    </div>
                  </div>
                </div>

                <ExpandableSection
                  preview={
                    <div>
                      <h3 className="text-xl font-semibold text-neutralDark mb-3">What to Expect</h3>
                      <p className="text-neutralDark/80">Typical session lengths: 60 / 90 / 120 minutes. Wear comfy clothing, no oils needed.</p>
                    </div>
                  }
                  buttonText="See Full Details"
                  collapseText="Show Less"
                >
                  <ul className="space-y-2 text-neutralDark/80">
                    <li>• Wear comfy clothing</li>
                    <li>• No oils</li>
                    <li>• We'll get you up and moving during the session</li>
                    <li>• You may feel lighter or a bit worked. This is normal and temporary</li>
                    <li>• Typical session lengths: 60 / 90 / 120 minutes</li>
                  </ul>
                </ExpandableSection>

                <ExpandableSection
                  preview={
                    <div>
                      <h3 className="text-xl font-semibold text-neutralDark mb-3">What's Realistic</h3>
                      <p className="text-neutralDark/80">Many feel a meaningful shift in 1–3 sessions. Lasting change usually needs 6–12 sessions.</p>
                    </div>
                  }
                  buttonText="Learn More"
                  collapseText="Show Less"
                >
                  <ul className="space-y-2 text-neutralDark/80">
                    <li>• Many feel a meaningful shift in 1–3 sessions</li>
                    <li>• Lasting change usually needs 6–12 sessions with light homework</li>
                    <li>• Not a quick fix. It's change that holds because your movement changes</li>
                    <li>• I'll tell you if I'm not the right fit and refer out</li>
                  </ul>
                </ExpandableSection>

                <div>
                  <h3 className="text-xl font-semibold text-neutralDark mb-3">Smart Ways to Start</h3>
                  <div className="space-y-3">
                    <div className="bg-neutralLight/50 p-4 rounded-lg">
                      <p className="font-semibold text-neutralDark mb-1">The Reset (3 weeks)</p>
                      <p className="text-neutralDark/80 text-sm">SI + movement to clear the biggest roadblocks.</p>
                    </div>
                    <div className="bg-neutralLight/50 p-4 rounded-lg">
                      <p className="font-semibold text-neutralDark mb-1">The Hip Series</p>
                      <p className="text-neutralDark/80 text-sm">Unstick hips/low back and restore stride.</p>
                    </div>
                    <div className="bg-neutralLight/50 p-4 rounded-lg">
                      <p className="font-semibold text-neutralDark mb-1">Full Repatterning (12 weeks)</p>
                      <p className="text-neutralDark/80 text-sm">Complete SI series + movement habit change.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Wave divider between sections */}
            <div className="relative my-16">
              <WaveDivider position="bottom" color="#06b6d4" opacity={0.1} height="60px" />
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-heading text-neutralDark mb-4">
                Movement Education
              </h2>
              <p className="text-lg text-neutralDark/80 mb-4">
                One-on-one training focused on how you move, not just what exercises you do. We work on fundamental movement patterns that improve everything you do.
              </p>
              <div className="space-y-2 text-neutralDark/80">
                <p><strong>What we work on:</strong></p>
                <ul className="space-y-1 ml-6">
                  <li>• Efficient breathing and core integration</li>
                  <li>• Fundamental movement patterns (squat, hinge, push, pull)</li>
                  <li>• Balance and proprioception</li>
                  <li>• Strength that serves your life, not just the gym</li>
                  <li>• Injury prevention and movement problem-solving</li>
                </ul>
              </div>
            </div>
            
            {/* Pull Quote */}
            <PullQuote size="small" position="center">
              Movement that serves your life, not just the gym
            </PullQuote>
            
            {/* Process */}
            <Callout variant="tip" title="The Process">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-neutralDark mb-1">First Session</h4>
                  <p>We assess where you are, what you want, and what's getting in the way. I'll explain what I see and recommend a plan.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutralDark mb-1">Ongoing Work</h4>
                  <p>Most clients see significant changes in 5-10 sessions. We work at your pace, focusing on what matters most to you.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutralDark mb-1">Maintenance</h4>
                  <p>Once you're moving well, monthly or quarterly tune-ups keep you there. You'll also have tools to maintain the work yourself.</p>
                </div>
              </div>
            </Callout>
            </div>
          </div>
        </div>
        
        {/* Bottom wave divider */}
        <WaveDivider position="bottom" color="#0f172a" opacity={0.05} height="100px" flip />
      </div>
    </PageLayout>
  );
}

export default Services;