import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import { getBreadcrumbSchema } from '../utils/structuredData';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

function WhatIsMovementEducation() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Movement Training', url: '/movement-training' },
    { name: 'What Is Movement Education?', url: '/what-is-movement-education' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="What is Movement Education? | Santa Cruz Movement Training"
        description="Learn what Movement Education is and how it differs from personal training. Intelligent movement training focused on how you move, not just exercises."
        keywords="what is movement education, movement training santa cruz, movement coach, functional training, movement intelligence"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      <PageHero 
        imageSrc="/services-hero.jpg"
        title="What is Movement Education?"
        subtitle="Learning to move the way your body was designed to"
        alt="Movement education session teaching functional movement patterns and movement intelligence in Santa Cruz"
      />


      {/* SEO-optimized intro with CTA above fold */}
      <div className="bg-offWhite pt-8 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
            Movement Education in Santa Cruz
          </h2>
          <p className="text-lg md:text-xl text-neutralDark/90 leading-relaxed mb-8">
            <strong>Movement Education</strong> isn't personal training. It's not about exercises, reps, or crushing yourself. It's about learning to move with intelligence, efficiency, and awareness-so you can restore natural movement, reduce pain, and improve performance in everything you do.
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
          
          {/* My approach */}
          <div>
            <h3 className="text-3xl font-heading text-primary mb-6">
              My Approach to Movement
            </h3>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Most training focuses on what you're doing. I focus on <em>how</em> you're doing it.
            </p>
            
            <div className="space-y-6">
              <div className="bg-offWhite rounded-xl p-6">
                <h4 className="text-xl font-heading text-primary mb-3">
                  Slow and Methodical
                </h4>
                <p className="text-neutralDark/80 leading-relaxed">
                  We're not rushing through sets. We're exploring movement patterns, finding where you're compensating, and teaching your nervous system a better way. Speed comes later.precision comes first.
                </p>
              </div>

              <div className="bg-offWhite rounded-xl p-6">
                <h4 className="text-xl font-heading text-primary mb-3">
                  Practicing Great Movement
                </h4>
                <p className="text-neutralDark/80 leading-relaxed">
                  Every rep is practice. You're not just building strength.you're building skill. Good movement is a learnable skill, and like any skill, it takes deliberate practice.
                </p>
              </div>

              <div className="bg-offWhite rounded-xl p-6">
                <h4 className="text-xl font-heading text-primary mb-3">
                  Finding Your Alignment and Core Strength
                </h4>
                <p className="text-neutralDark/80 leading-relaxed">
                  True core strength isn't about planks and crunches. It's about finding your center, connecting your breath to your movement, and building stability from the inside out.
                </p>
              </div>

              <div className="bg-offWhite rounded-xl p-6">
                <h4 className="text-xl font-heading text-primary mb-3">
                  Building from the Inside Out
                </h4>
                <p className="text-neutralDark/80 leading-relaxed">
                  We start with foundation: breath, alignment, basic movement patterns. Once those are solid, we build complexity. You can't build a strong house on a shaky foundation.
                </p>
              </div>
            </div>
          </div>

          {/* What you'll learn */}
          <div>
            <h3 className="text-3xl font-heading text-primary mb-6">
              What You'll Learn
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl font-bold">→</span>
                <div>
                  <strong className="text-neutralDark">How to breathe with your movement</strong>
                  <p className="text-neutralDark/70 mt-1">Most people hold their breath when they lift, squat, or reach. You'll learn to use your breath as a tool for stability and power.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl font-bold">→</span>
                <div>
                  <strong className="text-neutralDark">How to find and use your core</strong>
                  <p className="text-neutralDark/70 mt-1">Not the six-pack muscles.the deep stabilizers that actually support your spine and pelvis.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl font-bold">→</span>
                <div>
                  <strong className="text-neutralDark">How to move without compensation</strong>
                  <p className="text-neutralDark/70 mt-1">You'll learn to feel when you're cheating a movement and how to correct it in real-time.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl font-bold">→</span>
                <div>
                  <strong className="text-neutralDark">How to build strength that transfers</strong>
                  <p className="text-neutralDark/70 mt-1">You're not training for the gym.you're training for life. Every movement pattern we work on will make your daily life easier.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Who this is for */}
          <div className="bg-gradient-to-br from-accent/5 to-sage/5 rounded-2xl p-8">
            <h3 className="text-2xl font-heading text-primary mb-6">
              This Is For You If:
            </h3>
            <ul className="space-y-3 text-neutralDark/80">
              <li>✓ You've been training but keep getting injured</li>
              <li>✓ You want to move better, not just move more</li>
              <li>✓ You're tired of compensating and want to address the root issue</li>
              <li>✓ You value quality over quantity</li>
              <li>✓ You're willing to slow down to build something lasting</li>
            </ul>
          </div>

          {/* How sessions work */}
          <div>
            <h3 className="text-3xl font-heading text-primary mb-6">
              How Sessions Work
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h4 className="text-xl font-heading text-primary mb-3">
                  Assessment
                </h4>
                <p className="text-neutralDark/80 leading-relaxed">
                  We start by watching how you move. Where do you lose stability? Where do you compensate? What patterns need attention?
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-heading text-primary mb-3">
                  Movement Work
                </h4>
                <p className="text-neutralDark/80 leading-relaxed">
                  We'll work on 2–3 movement patterns per session. I'll teach you what to feel for, how to self-correct, and how to practice effectively.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h4 className="text-xl font-heading text-primary mb-3">
                  Practice Plan
                </h4>
                <p className="text-neutralDark/80 leading-relaxed">
                  You'll leave with simple practices you can do daily. Not hour-long workouts.5 to 10 minutes of focused movement that builds the patterns we worked on.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom line */}
          <div className="bg-primary text-white rounded-2xl p-8">
            <h3 className="text-2xl font-heading mb-4">
              The Bottom Line
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              Movement Education is about learning to move the way your body was designed to move. It's not flashy. It's not quick. But it's the foundation for everything else you do.
            </p>
            <p className="text-lg leading-relaxed">
              When you move well, training becomes more effective, pain decreases, and life gets easier. That's the promise.
            </p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-offWhite py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-heading text-primary mb-6">
            Ready to learn how to move?
          </h3>
          <p className="text-lg text-neutralDark/80 mb-8 leading-relaxed">
            Explore our movement education packages, from single sessions to comprehensive training programs. Many clients combine movement work with Structural Integration for best results.
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
            <Button
              to="/smart-starts"
              variant="outline"
              size="lg"
            >
              Start Here
            </Button>
          </div>
          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/movement-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Movement Training Hub
              </Link>
              <Link to="/personal-trainer-santa-cruz" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Personal Trainer Santa Cruz
              </Link>
              <Link to="/mobility-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Mobility Training
              </Link>
              <Link to="/athletic-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Athletic Performance
              </Link>
              <Link to="/core-strengthening" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Core Strengthening
              </Link>
              <Link to="/exercise-for-life" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Exercise for Life
              </Link>
              <Link to="/safe-gym-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Safe Gym Training
              </Link>
              <Link to="/sports-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Sports Performance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default WhatIsMovementEducation;
