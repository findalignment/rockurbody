import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';

function ComboPrograms() {
  return (
    <PageLayout>
      <PageHero 
        imageSrc="/services-hero.jpg"
        title="Combination Programs"
        subtitle="Structural Integration + Movement Education = Lasting Change"
      />

      {/* Intro */}
      <div className="bg-offWhite pt-8 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
            Why Combine Both?
          </h2>
          <p className="text-lg text-neutralDark/80 leading-relaxed">
            Most clients see the best results when we combine Structural Integration (hands-on fascial work) with Movement Education (learning better patterns). Here's why.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* The Problem */}
          <div>
            <h3 className="text-3xl font-heading text-primary mb-6">
              The Problem with Doing Just One
            </h3>
            
            <div className="space-y-6">
              <div className="bg-offWhite rounded-xl p-6">
                <h4 className="text-xl font-heading text-neutralDark mb-3">
                  Structural Integration Alone
                </h4>
                <p className="text-neutralDark/80 leading-relaxed">
                  Hands-on work can release restrictions and reorganize your structure. You'll feel better, move better. But if you immediately go back to the same movement patterns that created the problem, those old habits will recreate the restrictions. The bodywork helps, but it doesn't teach you new patterns.
                </p>
              </div>

              <div className="bg-offWhite rounded-xl p-6">
                <h4 className="text-xl font-heading text-neutralDark mb-3">
                  Movement Education Alone
                </h4>
                <p className="text-neutralDark/80 leading-relaxed">
                  Learning better movement patterns is powerful. But if you're starting from a restricted, compensated structure, you're trying to learn new patterns on top of old restrictions. It's like trying to tune a guitar with broken strings. You can learn the theory, but your body can't fully express it yet.
                </p>
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-3xl font-heading text-primary mb-6">
              The Power of Both Together
            </h3>
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              When we combine them, magic happens:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔓</span>
                <div>
                  <strong className="text-neutralDark">Structural Integration opens you up</strong>
                  <p className="text-neutralDark/70 mt-1">We release the fascial restrictions, create space, reorganize your structure. Your body now has options it didn't have before.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <strong className="text-neutralDark">Movement Education teaches you how to use it</strong>
                  <p className="text-neutralDark/70 mt-1">Now that you have more range, better alignment, less compensation, we teach you how to move from this new place. You learn patterns that maintain and build on the structural changes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">♻️</span>
                <div>
                  <strong className="text-neutralDark">They reinforce each other</strong>
                  <p className="text-neutralDark/70 mt-1">Better structure makes learning new movement easier. Better movement patterns maintain and improve your structure. It's a positive feedback loop.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">⏰</span>
                <div>
                  <strong className="text-neutralDark">Changes last longer</strong>
                  <p className="text-neutralDark/70 mt-1">You're not just getting bodywork and hoping it sticks. You're actively learning to move in ways that support your new structure. The work compounds.</p>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div>
            <h3 className="text-3xl font-heading text-primary mb-6">
              How We Structure It
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h4 className="text-xl font-semibold text-neutralDark mb-3">
                  Assess & Plan
                </h4>
                <p className="text-neutralDark/80 leading-relaxed">
                  We start with a thorough assessment. What's restricted structurally? What movement patterns need work? We create a plan that addresses both.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-semibold text-neutralDark mb-3">
                  Alternating Sessions
                </h4>
                <p className="text-neutralDark/80 leading-relaxed">
                  Typically we alternate: Structural Integration session to release and reorganize, then Movement Education session to teach your body how to use the new space. Or we combine them in longer sessions. We adapt to what your body needs.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl font-semibold text-neutralDark mb-3">
                  Progressive Over Time
                </h4>
                <p className="text-neutralDark/80 leading-relaxed">
                  Early on, we focus more on structural work. As you open up, we shift more toward movement training. By the end, you have both a better structure AND the skills to maintain it.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h4 className="text-xl font-semibold text-neutralDark mb-3">
                  You're Not Dependent on Me
                </h4>
                <p className="text-neutralDark/80 leading-relaxed">
                  The goal is independence. You learn practices you can do yourself. Occasional tune-ups? Sure. But you'll have the tools to maintain and continue improving on your own.
                </p>
              </div>
            </div>
          </div>

          {/* Programs Overview */}
          <div className="bg-offWhite rounded-2xl p-8">
            <h3 className="text-3xl font-heading text-primary mb-6">
              Our Combination Programs
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-neutralDark mb-2">The Reset</h4>
                <p className="text-neutralDark/80 mb-2">
                  <strong>6 sessions over 3 weeks:</strong> 3 SI + 3 Movement
                </p>
                <p className="text-neutralDark/70">
                  Perfect intro. We clear the biggest structural roadblocks and teach you fundamental movement patterns. Great for getting unstuck or addressing a specific issue.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-neutralDark mb-2">Hip Freedom Programs</h4>
                <p className="text-neutralDark/80 mb-2">
                  <strong>8-12 sessions:</strong> Targeted hip work
                </p>
                <p className="text-neutralDark/70">
                  If your main issue is hips, low back, or related areas, we focus the structural and movement work there. Basic (8 sessions) or Extended (12 sessions) options.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-neutralDark mb-2">Full Repatterning Programs</h4>
                <p className="text-neutralDark/80 mb-2">
                  <strong>24-48 sessions over 12 weeks:</strong> Comprehensive transformation
                </p>
                <p className="text-neutralDark/70">
                  The complete approach. 12-session Structural Integration series paired with ongoing movement education. Available in Basic, Premium, and Ultimate options depending on session length and frequency. This is where deep, lasting change happens.
                </p>
              </div>
            </div>
          </div>

          {/* Who This Is For */}
          <div>
            <h3 className="text-3xl font-heading text-primary mb-6">
              Who Benefits Most from Combo Programs
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h4 className="text-lg font-semibold text-neutralDark mb-3">
                  Chronic Pain or Limitation
                </h4>
                <p className="text-neutralDark/80">
                  If you've been dealing with something for months or years, you probably need both structural change and movement retraining. One without the other leaves the job half-done.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h4 className="text-lg font-semibold text-neutralDark mb-3">
                  Performance Goals
                </h4>
                <p className="text-neutralDark/80">
                  Athletes who want to optimize movement efficiency and reduce injury risk benefit from both improved structure and refined movement patterns.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h4 className="text-lg font-semibold text-neutralDark mb-3">
                  Postural Issues
                </h4>
                <p className="text-neutralDark/80">
                  Forward head, rounded shoulders, anterior pelvic tilt. These aren't just tight muscles. They're structural patterns reinforced by movement habits. Fix both.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h4 className="text-lg font-semibold text-neutralDark mb-3">
                  Serious About Results
                </h4>
                <p className="text-neutralDark/80">
                  If you're ready to commit to a process and want comprehensive, lasting change rather than temporary fixes, this is the path.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-offWhite py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-heading text-primary mb-6">
            Ready to get started?
          </h3>
          <p className="text-lg text-neutralDark/80 mb-8 leading-relaxed">
            Explore our combination programs ranging from The Reset (3 weeks) to Full Repatterning (12+ weeks). All combine hands-on structural work with movement education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to="/packages"
              variant="primary"
              size="lg"
            >
              View All Programs & Pricing
            </Button>
            <Button
              to="/consult"
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

export default ComboPrograms;

