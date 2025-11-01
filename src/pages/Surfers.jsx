import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';

function Surfers() {
  return (
    <PageLayout>
      <SEO 
        title="Bodywork for Surfers | Santa Cruz Structural Integration"
        description="Stay in the water longer. Structural Integration and movement training for surfers dealing with shoulder pain, back issues, and mobility restrictions."
        keywords="surfers bodywork santa cruz, surfing injury prevention, shoulder pain surfing, surf fitness santa cruz, rolfing for surfers"
      />
      
      <PageHero 
        imageSrc="/hero-background.jpg"
        title="For Surfers"
        subtitle="Stay in the water, surf longer, feel better"
      />

      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Intro */}
          <div className="mb-16">
            <p className="text-2xl font-heading text-primary mb-6 leading-relaxed">
              Surfing in Santa Cruz is demanding: paddling through closeouts at Steamer Lane, fighting for position at Pleasure Point, or putting in the work at your local break.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Your body takes a beating. Repetitive paddling. Rotational pop-ups. Cold water constriction. Wipeouts that torque your spine. Over time, it adds up:
            </p>
            <ul className="space-y-3 text-xl text-neutralDark/80 mb-8">
              <li>• Chronic shoulder pain that won't go away</li>
              <li>• Lower back tightness after sessions</li>
              <li>• Neck strain from constantly looking up</li>
              <li>• Limited rotation when paddling or taking off</li>
              <li>• Recovery taking longer than it used to</li>
            </ul>
            <p className="text-xl text-accent font-semibold">
              It doesn't have to be this way.
            </p>
          </div>

          {/* What I Do */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              How I Help Surfers Perform Better and Stay in the Water
            </h2>
            
            <div className="space-y-8">
              <div className="bg-sage/5 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-neutralDark mb-4">
                  Address the Root Causes
                </h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  Most surfer injuries aren't from one big wipeout—they're from cumulative stress and poor movement patterns. Through Structural Integration, I:
                </p>
                <ul className="space-y-2 text-lg text-neutralDark/80 ml-6">
                  <li>• Release fascial restrictions in shoulders, back, and hips</li>
                  <li>• Restore proper shoulder blade mechanics for pain-free paddling</li>
                  <li>• Improve spinal mobility for easier rotation and pop-ups</li>
                  <li>• Balance your structure to prevent future injuries</li>
                </ul>
              </div>

              <div className="bg-accent/5 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-neutralDark mb-4">
                  Improve Your Movement
                </h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  Releasing tissue is only half the equation. I'll teach you:
                </p>
                <ul className="space-y-2 text-lg text-neutralDark/80 ml-6">
                  <li>• Proper breathing patterns for better paddle efficiency</li>
                  <li>• Core integration for more powerful pop-ups</li>
                  <li>• Mobility exercises specific to surfing demands</li>
                  <li>• Warm-up routines that actually prepare you for the water</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Surfer Issues */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Common Issues I See in Santa Cruz Surfers
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Shoulder & Rotator Cuff Pain
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  <strong>What's happening:</strong> Repetitive paddling with poor shoulder mechanics creates impingement and inflammation.
                </p>
                <p className="text-neutralDark/80">
                  <strong>How I help:</strong> Release shoulder restrictions, restore proper scapular movement, and teach sustainable paddling mechanics.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Lower Back Stiffness & Pain
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  <strong>What's happening:</strong> Extended arching position on the board combined with cold water contraction locks up your lower back.
                </p>
                <p className="text-neutralDark/80">
                  <strong>How I help:</strong> Release hip flexors and low back restrictions, improve core integration, and restore natural spinal curves.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Neck & Upper Back Tension
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  <strong>What's happening:</strong> Constant "looking up" position while paddling creates forward head posture and chronic neck strain.
                </p>
                <p className="text-neutralDark/80">
                  <strong>How I help:</strong> Release anterior neck and chest restrictions, strengthen posterior chain, and correct head-forward patterns.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Hip & IT Band Tightness
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  <strong>What's happening:</strong> Repetitive squatting and turning on the board creates hip restrictions that affect your entire kinetic chain.
                </p>
                <p className="text-neutralDark/80">
                  <strong>How I help:</strong> Free up hip mobility, release IT band and TFL, improve functional range for better wave riding.
                </p>
              </div>
            </div>
          </div>

          {/* Performance Benefits */}
          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Beyond Pain Relief: Performance Benefits
            </h2>
            
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              When your structure improves and movement patterns optimize, you don't just hurt less—you surf better:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  💪 More Paddle Power
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Better shoulder mechanics = more efficient stroke = catching more waves with less effort
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  🔄 Improved Rotation
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Greater spinal mobility = smoother turns and better wave positioning
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  ⚡ Faster Pop-Ups
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Better core integration + hip mobility = quicker, more fluid pop-ups
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  🏄 Longer Sessions
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Less compensation = less fatigue = more waves per session
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  🔥 Faster Recovery
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Better movement patterns = less tissue damage = quicker bounce-back
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  🛡️ Injury Prevention
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Balanced structure = reduced stress on vulnerable areas = fewer injuries
                </p>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What to Expect
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  First Session: Assessment & Initial Work
                </h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed">
                  We'll talk about your surf history, current issues, and goals. I'll assess your structure and movement patterns, then start hands-on work targeting your biggest limitations. You'll leave with 1-2 simple practices to support the work.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Typical Timeline
                </h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed">
                  Most surfers notice improvement after 2-3 sessions. For lasting change and performance optimization, plan on 6-10 sessions over 2-3 months. This gives your body time to integrate the changes and build new patterns.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  During the Process
                </h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed">
                  You can (and should) keep surfing during your sessions. The work will make you more aware of your body, which actually helps you apply what we're learning. Some days you'll feel amazing, other days a bit worked. Both are normal.
                </p>
              </div>
            </div>
          </div>

          {/* Programs for Surfers */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Recommended Programs for Surfers
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-sage rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  The Reset (6 sessions)
                </h3>
                <p className="text-neutralDark/80 mb-4">
                  Perfect for addressing specific issues (shoulder pain, back stiffness) and getting back in the water feeling better. Combines SI and movement work.
                </p>
                <p className="text-accent font-semibold">$990</p>
              </div>

              <div className="border-2 border-accent rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Full Repatterning (24 sessions)
                </h3>
                <p className="text-neutralDark/80 mb-4">
                  Complete structural overhaul. Best for serious surfers who want to optimize performance, prevent future injuries, and surf strong for decades.
                </p>
                <p className="text-accent font-semibold">Starting at $3,720</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/packages" variant="outline" size="lg" fullWidth>
              View All Programs
            </Button>
          </div>

          {/* Testimonial Placeholder */}
          <div className="border-l-4 border-accent pl-6 italic text-lg text-neutralDark/80 mb-16">
            <p className="mb-2">
              "I've been surfing Santa Cruz for 20 years. After three months of work with Rock, my shoulder pain is gone and I'm catching more waves than I have in years. Wish I'd found him sooner."
            </p>
            <p className="text-sm not-italic font-semibold">
              — Local surfer, Pleasure Point
            </p>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-sage/10 to-accent/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Ready to Surf Better and Feel Better?
            </h2>
            <p className="text-lg text-neutralDark/80 mb-6">
              Let's talk about your specific situation and create a plan to get you surfing at your best.
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

export default Surfers;

