import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';

function SafeGymTraining() {
  return (
    <PageLayout>
      <Helmet>
        <title>How to Not Get Hurt in the Gym | Safe Training Santa Cruz</title>
        <meta name="description" content="Learn how to train safely and sustainably. Injury prevention strategies from a movement specialist in Santa Cruz. Train smarter, not just harder." />
        <meta name="keywords" content="gym safety Santa Cruz, injury prevention, safe training, avoid gym injuries, proper form, sustainable training, movement coaching, injury-free training, smart training Santa Cruz" />
        
        {/* Open Graph */}
        <meta property="og:title" content="How to Not Get Hurt in the Gym | Rock Your Body" />
        <meta property="og:description" content="Training smart means training sustainably. Learn how to avoid common gym injuries." />
        <meta property="og:type" content="article" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Not Get Hurt in the Gym: A Guide to Safe, Sustainable Training",
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
            "description": "Practical strategies for injury prevention and sustainable training from a movement specialist."
          })}
        </script>
      </Helmet>

      <PageHero 
        imageSrc="/safe-gym-training-hero.jpg"
        title="How to Not Get Hurt in the Gym"
        subtitle="Because taking 6 weeks off for an injury is worse than missing a PR"
        alt="Safe gym training demonstration showing proper exercise form and injury prevention techniques"
      />

      <div className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-neutralDark/90 leading-relaxed mb-6">
              Here's the truth: most gym injuries aren't dramatic accidents. They're not the result of one catastrophic moment. They're the accumulation of small mistakes, repeated over time, until something finally gives.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              The good news? They're also completely preventable.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed font-medium">
              Training smart doesn't mean training easy. It means training sustainably. It means you're still lifting when you're 60, not sitting on the sidelines with chronic pain.
            </p>
          </div>

          {/* The Real Culprits */}
          <div className="bg-sage/10 rounded-2xl p-8 mb-16 border-2 border-sage/20">
            <h2 className="text-3xl font-heading text-primary mb-6">The Real Culprits Behind Gym Injuries</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-heading text-primary mb-2">1. Ego Lifting</h3>
                <p className="text-neutralDark/80">
                  Lifting more than you can handle with good form. Your ego writes checks your body can't cash. Then you're out for 6 weeks wondering what went wrong.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading text-primary mb-2">2. Ignoring Pain Signals</h3>
                <p className="text-neutralDark/80">
                  There's a difference between discomfort (good) and pain (bad). If something hurts, that's your body telling you to stop. Listen to it.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading text-primary mb-2">3. Poor Movement Patterns</h3>
                <p className="text-neutralDark/80">
                  You can't out-weight bad mechanics. If you're moving poorly with 135 pounds, you'll just move poorly with 225 pounds until something breaks.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading text-primary mb-2">4. Inadequate Recovery</h3>
                <p className="text-neutralDark/80">
                  Your muscles don't grow in the gym. They grow when you're resting. Training 7 days a week isn't dedication, it's a recipe for overuse injuries.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading text-primary mb-2">5. Skipping the Boring Stuff</h3>
                <p className="text-neutralDark/80">
                  Mobility work, warm-ups, cool-downs. Everyone wants to skip them because they're not sexy. But they're the difference between training for life and being chronically injured.
                </p>
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-8 text-center">
              How to Train Smarter
            </h2>

            <div className="space-y-8">
              {/* Master the Basics */}
              <div className="bg-offWhite rounded-2xl p-8">
                <h3 className="text-2xl font-heading text-primary mb-4">Master the Basics First</h3>
                <p className="text-neutralDark/80 mb-4">
                  Before you load a movement pattern, make sure you can do it well. Can you squat to depth with good form and no weight? Can you hinge properly? Can you maintain a neutral spine under load?
                </p>
                <p className="text-neutralDark/80 font-medium">
                  If not, adding weight is just reinforcing bad patterns. Learn the movement first, then load it.
                </p>
              </div>

              {/* Listen to Your Body */}
              <div className="bg-offWhite rounded-2xl p-8">
                <h3 className="text-2xl font-heading text-primary mb-4">Listen to Your Body (Actually Listen)</h3>
                <p className="text-neutralDark/80 mb-4">
                  Muscle fatigue is normal. Sharp pain, pinching, or anything that makes you wince? Not normal. If something doesn't feel right, modify or skip it.
                </p>
                <p className="text-neutralDark/80 font-medium">
                  Missing one workout to avoid injury is smart. Missing 6 weeks because you pushed through pain is stupid.
                </p>
              </div>

              {/* Progressive Overload Done Right */}
              <div className="bg-offWhite rounded-2xl p-8">
                <h3 className="text-2xl font-heading text-primary mb-4">Progressive Overload (Done Right)</h3>
                <p className="text-neutralDark/80 mb-4">
                  Yes, you need to progressively challenge your body. But "progressive" doesn't mean jumping from 135 to 225. It means adding 5 pounds, or one more rep, or improving your range of motion.
                </p>
                <p className="text-neutralDark/80 font-medium">
                  Small, consistent improvements beat big, reckless jumps every time.
                </p>
              </div>

              {/* Do the Boring Stuff */}
              <div className="bg-offWhite rounded-2xl p-8">
                <h3 className="text-2xl font-heading text-primary mb-4">Actually Do the Boring Stuff</h3>
                <p className="text-neutralDark/80 mb-4">
                  Warm up. Cool down. Do your mobility work. Work on your weak points. Strengthen stabilizer muscles. This is the stuff that keeps you healthy long-term.
                </p>
                <p className="text-neutralDark/80">
                  I know it's not as exciting as hitting a new PR. But you know what's less exciting? Being injured. Check out my <Link to="/5-minute-mobility" className="text-accent hover:underline">5-minute mobility routine</Link> for a simple daily practice.
                </p>
              </div>

              {/* Get Coaching */}
              <div className="bg-offWhite rounded-2xl p-8">
                <h3 className="text-2xl font-heading text-primary mb-4">Get Eyes on Your Movement</h3>
                <p className="text-neutralDark/80 mb-4">
                  You can't see yourself move. You think you're doing it right, but you might be compensating in ways you can't feel yet. Eventually, those compensations catch up with you.
                </p>
                <p className="text-neutralDark/80 font-medium">
                  A good coach can spot problems before they become injuries. That's the whole point of <Link to="/what-is-movement-education" className="text-accent hover:underline">movement education</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* Red Flags */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-heading text-red-800 mb-6">🚩 Red Flags: Stop and Reassess</h2>
            <ul className="space-y-3 text-neutralDark/80">
              <li><strong>Sharp, stabbing pain:</strong> This isn't "good pain." Stop immediately.</li>
              <li><strong>Pain that persists after training:</strong> If it still hurts the next day (or days), that's a problem.</li>
              <li><strong>Loss of range of motion:</strong> If a joint suddenly feels stiff or locked, don't push through it.</li>
              <li><strong>Asymmetrical pain:</strong> If one side hurts but the other doesn't, you're compensating.</li>
              <li><strong>Pain that changes your form:</strong> If you're limping, favoring one side, or adjusting your movement to avoid pain, stop.</li>
            </ul>
            <p className="mt-6 text-neutralDark/80 font-medium">
              When in doubt, get it checked out. It's better to address something early than to train through it and make it worse.
            </p>
          </div>

          {/* Who This Is For */}
          <div className="bg-sage/10 rounded-2xl p-8 mb-16 border-2 border-sage/20">
            <h2 className="text-3xl font-heading text-primary mb-6">This Is For You If:</h2>
            <ul className="space-y-3 text-neutralDark/80">
              <li>✓ You've been injured before and don't want it to happen again</li>
              <li>✓ You're dealing with nagging aches and pains from training</li>
              <li>✓ You want to train hard without breaking down</li>
              <li>✓ You're tired of taking time off for preventable injuries</li>
              <li>✓ You want to be lifting, running, or moving in 10, 20, 30 years</li>
              <li>✓ You're willing to check your ego for long-term gains</li>
            </ul>
          </div>

          {/* My Approach */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">How I Can Help</h2>
            <div className="space-y-4 text-neutralDark/80">
              <p>
                I work with people who want to train sustainably. That means we focus on:
              </p>
              <ul className="space-y-2 ml-6 mb-4">
                <li>Identifying and correcting movement compensations</li>
                <li>Building a solid foundation of mobility and stability</li>
                <li>Teaching you how to listen to your body's signals</li>
                <li>Creating training programs that challenge you without breaking you</li>
                <li>Addressing structural issues that might be contributing to injury risk</li>
              </ul>
              <p className="font-medium text-lg text-primary">
                The goal isn't just to train hard today. It's to keep training for decades.
              </p>
            </div>
          </div>

          {/* Related Pages */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6 text-center">Learn More</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/exercise-for-life" className="bg-offWhite rounded-xl p-6 hover:shadow-lg transition group">
                <h3 className="text-xl font-heading text-primary mb-3 group-hover:text-accent transition">Exercise for Life's Challenges</h3>
                <p className="text-sm text-neutralDark/80">
                  Training that prepares you for real-world demands, not just gym performance.
                </p>
              </Link>
              
              <Link to="/5-minute-mobility" className="bg-offWhite rounded-xl p-6 hover:shadow-lg transition group">
                <h3 className="text-xl font-heading text-primary mb-3 group-hover:text-accent transition">5-Minute Mobility Routine</h3>
                <p className="text-sm text-neutralDark/80">
                  A simple daily practice to keep your body healthy and injury-free.
                </p>
              </Link>
            </div>
          </div>

          {/* Related Topics */}
          <div className="mb-16 pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/injury-recovery" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Injury Recovery
              </Link>
              <Link to="/sports-injury-prevention" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Sports Injury Prevention
              </Link>
              <Link to="/movement-screening" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Movement Screening
              </Link>
              <Link to="/mobility-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Mobility Training
              </Link>
              <Link to="/what-is-movement-education" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Movement Education
              </Link>
              <Link to="/athletic-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Athletic Performance
              </Link>
              <Link to="/core-strengthening" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Core Strengthening
              </Link>
              <Link to="/movement-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Movement Training Hub
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-heading mb-4">Train Smarter, Not Just Harder</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's assess your movement patterns and build a training plan that keeps you healthy long-term.
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

export default SafeGymTraining;
