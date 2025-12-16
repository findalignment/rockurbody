import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Button from '../components/Button';

function AlignmentBasedStrengthTraining() {
  return (
    <PageLayout>
      <SEO
        title="Alignment-Based Strength Training - Strength Without Compensation | RockUrBody"
        description="Build strength from proper alignment, not compensation patterns. Learn how alignment-based strength training prevents injury and creates lasting change. Santa Cruz, CA."
        keywords="alignment based strength training, strength without compensation, proper form training, functional strength, movement quality, Santa Cruz"
        url="/alignment-based-strength-training"
      />
      <PageHero 
        imageSrc="/alignment-strength-hero.jpg"
        title="Alignment-Based Strength Training"
        subtitle="Build strength from proper alignment, not compensation patterns. Strong movement from a weak foundation creates problems. We build the foundation first."
        alt="Alignment-based strength training that builds strength without compensation"
      />
      <div className="pt-16 pb-24 px-6">

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Problem with Traditional Strength Training</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Most strength training focuses on moving weight. It doesn't care how you move it. If you can squat 200 pounds, great—even if your knees cave, your back rounds, and your body compensates everywhere to make it happen.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              That's not strength. That's compensation masquerading as strength. And it creates problems: injuries, pain, movement restrictions, and patterns that break down over time.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              The weight on the bar might go up, but your body pays the price. Your joints wear down faster, your movement quality degrades, and eventually, something breaks.
            </p>
          </div>
        </section>

        <section className="bg-offWhite py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Who This Is For</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-4">You'll Benefit If You:</h3>
                <ul className="space-y-3 text-neutralDark/80">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Have been training for years but keep getting injured</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Feel like you're working hard but not seeing real progress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Want to build strength without breaking down your body</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Notice your form breaks down under load</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Are tired of the "no pain, no gain" mentality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Want to feel strong in daily life, not just in the gym</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-4">Especially Useful For:</h3>
                <ul className="space-y-3 text-neutralDark/80">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Athletes returning from injury who want to rebuild properly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>People over 40 who want to train smarter, not harder</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Anyone with chronic pain that flares up with training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Former athletes who want to stay strong without the damage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>People tired of the gym scene but who still want results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Anyone who's been told they "just need to strengthen" but it hasn't worked</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Alignment-Based Approach</h2>
            <div className="space-y-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Foundation First</h3>
                <p className="text-neutralDark/80">We establish proper alignment before adding load. Your body learns to organize itself correctly, then we build strength from that foundation. This means we might spend weeks on movement quality before touching a heavy weight—and that's exactly the point.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Quality Over Quantity</h3>
                <p className="text-neutralDark/80">We'd rather you squat 100 pounds with perfect alignment than 200 pounds with compensation. Quality movement creates quality strength. Every rep is intentional, precise, and executed from proper alignment. No junk reps.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Progressive Loading</h3>
                <p className="text-neutralDark/80">Once alignment is solid, we progressively add load. But we never sacrifice alignment for weight. The alignment comes first, always. If your form breaks down, we reduce the load until you can maintain quality. This builds real, lasting strength.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Individual Assessment</h3>
                <p className="text-neutralDark/80">We don't use cookie-cutter programs. Your body has unique strengths, restrictions, and compensation patterns. We assess your specific alignment needs and design your strength program accordingly. What works for someone else might not work for you.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-accent/20">
              <h3 className="text-2xl font-semibold text-primary mb-4">What a Session Looks Like</h3>
              <div className="space-y-4 text-neutralDark/80">
                <p><strong className="text-primary">Assessment (5-10 minutes):</strong> We check in on how you're feeling, what's working, and what needs attention. We might reassess specific movement patterns to track progress.</p>
                <p><strong className="text-primary">Movement Prep (10-15 minutes):</strong> We prep your body with targeted mobility work and activation exercises. This isn't generic stretching—it's specific prep for your alignment needs.</p>
                <p><strong className="text-primary">Skill Work (15-20 minutes):</strong> We practice movement patterns with attention to alignment. This might be bodyweight squats, hinge patterns, pressing, pulling—whatever your body needs to learn or refine.</p>
                <p><strong className="text-primary">Strength Work (20-25 minutes):</strong> Once your body is ready, we load the patterns. This could be kettlebells, barbells, dumbbells, or bodyweight progressions. The load serves the movement, not the other way around.</p>
                <p><strong className="text-primary">Integration (5-10 minutes):</strong> We finish with movement that integrates what you've worked on. This helps your body remember the new patterns and carry them into daily life.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Why This Works</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              When you build strength from proper alignment, you're not just getting stronger. You're upgrading your body's operating system. The strength serves your movement, not the other way around.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              This approach prevents injuries, reduces pain, and creates strength that lasts. You're not just strong—you're strong in ways that support everything else you do.
            </p>
            
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">What Changes</h3>
              <ul className="space-y-4 text-neutralDark/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl font-bold">→</span>
                  <span><strong>Pain decreases or disappears.</strong> When you stop loading compensation patterns, your body stops hurting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl font-bold">→</span>
                  <span><strong>Movement quality improves across the board.</strong> Better squat mechanics translate to better hiking, climbing, running—everything.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl font-bold">→</span>
                  <span><strong>You feel more confident in your body.</strong> When you know you can move well under load, you trust yourself more.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl font-bold">→</span>
                  <span><strong>Injuries become rare.</strong> Proper alignment distributes force evenly. Nothing gets overloaded.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl font-bold">→</span>
                  <span><strong>You build strength that lasts.</strong> Not just for the next workout, but for decades.</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn more about <Link to="/what-are-compensation-patterns" className="text-accent hover:underline font-semibold">compensation patterns</Link> and how we address them, or explore our <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline font-semibold">movement education</Link> approach.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Build Real Strength?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> to assess your alignment, then we'll design your strength training program.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

export default AlignmentBasedStrengthTraining;

