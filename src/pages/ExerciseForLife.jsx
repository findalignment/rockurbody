import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';

function ExerciseForLife() {
  return (
    <PageLayout>
      <Helmet>
        <title>Exercise for Life's Challenges | Functional Training Santa Cruz</title>
        <meta name="description" content="Learn how to exercise for real-world strength and resilience. Functional training in Santa Cruz that prepares your body for life's actual challenges, not just the gym." />
        <meta name="keywords" content="functional training Santa Cruz, exercise for life, real-world strength, movement training, practical fitness, functional movement, life-ready fitness, movement coaching Santa Cruz" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Exercise for Life's Challenges | Rock Your Body" />
        <meta property="og:description" content="Training that prepares you for life's actual challenges, not just looking good in the mirror." />
        <meta property="og:type" content="article" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Exercise for Life's Challenges: Functional Training That Actually Matters",
            "author": {
              "@type": "Person",
              "name": "Rock Hudson"
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "Rock Your Body",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Santa Cruz",
                "addressRegion": "CA"
              }
            },
            "description": "How to train your body for real-world challenges, not just gym performance."
          })}
        </script>
      </Helmet>

      <PageHero 
        imageSrc="/images/movement-hero.jpg"
        title="Exercise for Life's Challenges"
        subtitle="Because picking up your kid matters more than your bench press PR"
      />

      <div className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-neutralDark/90 leading-relaxed mb-6">
              Let me ask you something: when was the last time you had to do a perfect barbell squat in real life? Or bench press something while lying flat on your back?
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Here's what you actually do: you bend down to pick up your kid (or dog, or groceries), you reach overhead to grab something from a shelf, you twist to look behind you while driving, you catch yourself when you slip on a wet surface. Life doesn't happen on a weight machine.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed font-medium">
              So why are we training like it does?
            </p>
          </div>

          {/* The Problem With Traditional Training */}
          <div className="bg-sage/10 rounded-2xl p-8 mb-16 border-2 border-sage/20">
            <h2 className="text-3xl font-heading text-primary mb-6">The Problem With Traditional Training</h2>
            <div className="space-y-4 text-neutralDark/80">
              <p>
                Don't get me wrong, traditional gym training has its place. But if your only goal is to get stronger at gym exercises, you're missing the bigger picture.
              </p>
              <p className="font-medium">
                Real-world challenges require:
              </p>
              <ul className="space-y-3 ml-6 mb-4">
                <li>Multi-directional movement (not just forward and back)</li>
                <li>Balance and stability on uneven surfaces</li>
                <li>The ability to twist, reach, and bend simultaneously</li>
                <li>Quick reactions and adaptability</li>
                <li>Endurance for sustained daily activities</li>
                <li>Resilience when things don't go as planned</li>
              </ul>
              <p>
                A leg press machine doesn't teach you any of that.
              </p>
            </div>
          </div>

          {/* What Functional Training Actually Means */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-8 text-center">
              What "Exercise for Life" Actually Means
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-offWhite rounded-2xl p-6">
                <h3 className="text-xl font-heading text-primary mb-4">Traditional Training</h3>
                <ul className="space-y-2 text-neutralDark/80 text-sm">
                  <li>• Isolated muscle groups</li>
                  <li>• Single plane of motion</li>
                  <li>• Stable, predictable environment</li>
                  <li>• Perfect form on every rep</li>
                  <li>• Goal: look good, lift heavy</li>
                </ul>
              </div>

              <div className="bg-accent/10 rounded-2xl p-6 border-2 border-accent/30">
                <h3 className="text-xl font-heading text-primary mb-4">Training for Life</h3>
                <ul className="space-y-2 text-neutralDark/80 text-sm">
                  <li>• Integrated movement patterns</li>
                  <li>• Multi-directional, dynamic</li>
                  <li>• Variable, unpredictable challenges</li>
                  <li>• Adaptability and problem-solving</li>
                  <li>• Goal: move well, live better</li>
                </ul>
              </div>
            </div>

            <p className="text-center text-neutralDark/80 text-lg max-w-2xl mx-auto">
              I'm not saying traditional training is bad. I'm saying it's incomplete. You need both strength AND the ability to use that strength in the messy, chaotic reality of daily life.
            </p>
          </div>

          {/* What This Looks Like in Practice */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">What This Looks Like in Practice</h2>
            <div className="space-y-6">
              <div className="bg-offWhite rounded-xl p-6">
                <h3 className="text-lg font-heading text-primary mb-3">Movement Patterns, Not Muscle Groups</h3>
                <p className="text-neutralDark/80">
                  Instead of "back day" or "leg day," we train fundamental movement patterns: push, pull, hinge, squat, lunge, carry, rotate. These are the movements you actually do in life.
                </p>
              </div>

              <div className="bg-offWhite rounded-xl p-6">
                <h3 className="text-lg font-heading text-primary mb-3">Ground-Based Movement</h3>
                <p className="text-neutralDark/80">
                  Getting up and down from the floor. Crawling. Rolling. These aren't "baby exercises." They're fundamental human movements that most adults have lost, and getting them back is a game-changer for longevity and resilience.
                </p>
              </div>

              <div className="bg-offWhite rounded-xl p-6">
                <h3 className="text-lg font-heading text-primary mb-3">Variable Load and Position</h3>
                <p className="text-neutralDark/80">
                  Life doesn't give you perfectly balanced dumbbells. You carry groceries in one arm, your kid in the other, and you're trying not to step in a puddle. We train for that asymmetry and unpredictability.
                </p>
              </div>

              <div className="bg-offWhite rounded-xl p-6">
                <h3 className="text-lg font-heading text-primary mb-3">Integration With Daily Life</h3>
                <p className="text-neutralDark/80">
                  Your training should make your life easier, not just make you tired. We focus on movements and patterns that directly translate to what you do every day.
                </p>
              </div>
            </div>
          </div>

          {/* Who This Is For */}
          <div className="bg-sage/10 rounded-2xl p-8 mb-16 border-2 border-sage/20">
            <h2 className="text-3xl font-heading text-primary mb-6">This Is For You If:</h2>
            <ul className="space-y-3 text-neutralDark/80">
              <li>✓ You're tired of training that doesn't translate to real life</li>
              <li>✓ You want to stay active and capable as you age</li>
              <li>✓ You've been injured doing "normal" activities</li>
              <li>✓ You want training that makes you more resilient, not just bigger</li>
              <li>✓ You're a parent, outdoor enthusiast, or active adult</li>
              <li>✓ You want to move with confidence in any situation</li>
            </ul>
          </div>

          {/* My Approach */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">My Approach</h2>
            <div className="space-y-4 text-neutralDark/80">
              <p>
                I combine <Link to="/what-is-movement-education" className="text-accent hover:underline">movement education</Link> with strength training and functional patterns. We don't just make you stronger, we make you more capable.
              </p>
              <p>
                This means:
              </p>
              <ul className="space-y-2 ml-6 mb-4">
                <li>Learning how your body actually moves (and should move)</li>
                <li>Building strength in positions that matter</li>
                <li>Developing adaptability and problem-solving skills</li>
                <li>Creating resilience for life's unexpected challenges</li>
              </ul>
              <p className="font-medium text-lg text-primary">
                The result? You're not just fit for the gym. You're fit for life.
              </p>
            </div>
          </div>

          {/* Related Pages */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6 text-center">Learn More</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/what-is-movement-education" className="bg-offWhite rounded-xl p-6 hover:shadow-lg transition group">
                <h3 className="text-xl font-heading text-primary mb-3 group-hover:text-accent transition">What is Movement Education?</h3>
                <p className="text-sm text-neutralDark/80">
                  Understanding the philosophy and science behind training for life.
                </p>
              </Link>
              
              <Link to="/safe-gym-training" className="bg-offWhite rounded-xl p-6 hover:shadow-lg transition group">
                <h3 className="text-xl font-heading text-primary mb-3 group-hover:text-accent transition">How to Not Get Hurt in the Gym</h3>
                <p className="text-sm text-neutralDark/80">
                  Training smart means training sustainably. Learn how to stay injury-free.
                </p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-heading mb-4">Ready to Train for Real Life?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's talk about what you want to be able to do, and how we can get you there.
            </p>
            <Link
              to="/consult"
              className="inline-block px-8 py-4 bg-accent text-white rounded-xl font-semibold text-lg hover:bg-accent/90 transition transform hover:scale-105"
            >
              Schedule a Free Consultation
            </Link>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default ExerciseForLife;

