import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import FAQSection from '../components/FAQSection';

function ComboPrograms() {
  return (
    <PageLayout>
      <PageHero 
        imageSrc="/services-hero.jpg"
        title="Combination Programs"
        subtitle="Structural Integration + Movement Education = Lasting Change"
        alt="Combined structural integration and movement education program for comprehensive body transformation in Santa Cruz"
      />

      {/* Intro with CTA above fold */}
      <div className="bg-offWhite pt-8 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
            Why Combine Both?
          </h2>
          <p className="text-lg md:text-xl text-neutralDark/90 leading-relaxed mb-8">
            Most clients see the best results when we combine Structural Integration (hands-on bodywork that releases restrictions) with Movement Education (learning better movement patterns). Together, they restore natural movement, reduce pain, and improve performance.
          </p>
          
          {/* CTA Above Fold */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              to="/book"
              variant="accent"
              size="lg"
              className="font-bold"
            >
              Book This Service
            </Button>
          </div>
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
                  If you're ready to commit to a process and want comprehensive, lasting change rather than temporary solutions, this is the path.
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
              to="/book"
              variant="accent"
              size="lg"
              className="font-bold"
            >
              Book This Service
            </Button>
          </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <FAQSection
              faqs={[
                {
                  question: "Why combine Structural Integration and Movement Education?",
                  answer: <>Structural Integration releases restrictions and reorganizes your structure, but without teaching you how to move from that new place, old patterns return. Movement Education teaches better patterns, but if you're starting from a restricted structure, you're building on a shaky foundation. Together, they create lasting change that neither can achieve alone.</>
                },
                {
                  question: "Do I have to do both, or can I choose one?",
                  answer: <>You can absolutely choose one. Many clients start with just Structural Integration or just Movement Education. But most people see the best results when they combine both. The combination creates a positive feedback loop: better structure makes learning new movement easier, and better movement patterns maintain and improve your structure.</>
                },
                {
                  question: "How are combo sessions structured?",
                  answer: "Typically we alternate: Structural Integration session to release and reorganize, then Movement Education session to teach your body how to use the new space. Or we combine them in longer sessions. We adapt to what your body needs. Early on, we focus more on structural work. As you open up, we shift more toward movement training."
                },
                {
                  question: "Which combo program should I start with?",
                  answer: <>If you're not sure, start with <Link to="/smart-starts" className="text-accent hover:underline">The Reset</Link> (3 weeks, 6 sessions). It's a perfect introduction that clears the biggest roadblocks and teaches fundamental movement patterns. If your main issue is hips or low back, the <Link to="/packages" className="text-accent hover:underline">Hip Freedom programs</Link> might be a better fit. For comprehensive transformation, the <Link to="/packages" className="text-accent hover:underline">Full Repatterning programs</Link> offer the complete approach.</>
                },
                {
                  question: "How long do combo programs take?",
                  answer: "It depends on the program. The Reset is 3 weeks (6 sessions). Hip Freedom programs are 8-12 sessions. Full Repatterning programs are 12+ weeks (24-48 sessions depending on the option). We'll work at your pace, focusing on what matters most to you."
                },
                {
                  question: "Will I become dependent on sessions?",
                  answer: "No. The goal is independence. You learn practices you can do yourself. Occasional tune-ups? Sure. But you'll have the tools to maintain and continue improving on your own. By the end of a program, you should feel confident managing your body's needs independently."
                },
                {
                  question: "Can I do a combo program if I have an injury?",
                  answer: <>Yes, but we'll work with your injury. Structural Integration can help address the underlying patterns contributing to your injury, and Movement Education can help you move better despite limitations. However, if you have an active injury, make sure you have medical clearance before starting. I'm not treating your injury, but we can work with your body to improve function.</>
                },
                {
                  question: "What's the difference between the combo program options?",
                  answer: <>The Reset (3 weeks) is perfect for getting unstuck or addressing a specific issue. Hip Freedom programs (8-12 sessions) focus on hip/low back issues. Full Repatterning programs (12+ weeks) offer comprehensive transformation with the complete <Link to="/12-series" className="text-accent hover:underline">12-Series</Link> Structural Integration plus ongoing movement education. The difference between Basic, Premium, and Ultimate Full Repatterning is session length and frequency.</>
                }
              ]}
              title="Frequently Asked Questions About Combination Programs"
            />
          </div>
        </div>

        {/* Related Topics */}
      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/what-is-structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                What Is Structural Integration?
              </Link>
              <Link to="/what-is-movement-education" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                What Is Movement Education?
              </Link>
              <Link to="/smart-starts" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Smart Starts
              </Link>
              <Link to="/packages" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Programs & Packages
              </Link>
              <Link to="/services" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Services
              </Link>
              <Link to="/pricing" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Pricing
              </Link>
              <Link to="/process" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                The Process
              </Link>
              <Link to="/approach" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                My Approach
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default ComboPrograms;
