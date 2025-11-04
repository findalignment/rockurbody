import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';

function DailyMobility() {
  return (
    <PageLayout>
      <Helmet>
        <title>The 5-Minute Mobility Routine That Changes Everything | Santa Cruz</title>
        <meta name="description" content="Learn why a simple 5-minute daily mobility routine is essential for aging well. Movement hygiene for your body, like brushing your teeth. Santa Cruz movement coaching." />
        <meta name="keywords" content="daily mobility routine, 5 minute mobility, movement hygiene, aging well, hip mobility, joint health, daily movement practice, mobility training Santa Cruz, flexibility routine" />
        
        {/* Open Graph */}
        <meta property="og:title" content="The 5-Minute Mobility Routine That Changes Everything | Rock Your Body" />
        <meta property="og:description" content="Movement hygiene for your body. A simple daily practice that makes aging easier." />
        <meta property="og:type" content="article" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The 5-Minute Mobility Routine That Changes Everything",
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
            "description": "Why daily mobility work is essential for aging well, and how a simple 5-minute routine can change your relationship with your body."
          })}
        </script>
      </Helmet>

      <PageHero 
        imageSrc="/images/mobility-hero.jpg"
        title="The 5-Minute Mobility Routine"
        subtitle="Movement hygiene for your body"
      />

      <div className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-neutralDark/90 leading-relaxed mb-6">
              You brush your teeth every day, right? You take a shower. You do these things not because they're exciting, but because they're necessary. They're basic hygiene.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Your body needs the same thing. Call it movement hygiene. Just like you wouldn't skip brushing your teeth for weeks and expect healthy gums, you can't skip moving your joints and expect them to work well as you age.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed font-medium">
              A simple 5-minute daily mobility routine isn't about getting flexible or impressive. It's about maintenance. It's about being able to tie your shoes, get out of a chair, and play with your grandkids when you're 70.
            </p>
          </div>

          {/* The Problem */}
          <div className="bg-sage/10 rounded-2xl p-8 mb-16 border-2 border-sage/20">
            <h2 className="text-3xl font-heading text-primary mb-6">What Happens When You Don't Move</h2>
            <div className="space-y-4 text-neutralDark/80">
              <p>
                Here's the reality: if you don't regularly take your joints through their full range of motion, you lose it. Not dramatically, not overnight, but gradually. Imperceptibly. Until one day you can't reach overhead without pain, or you can't squat down to pick something up.
              </p>
              <p className="font-medium">
                This isn't aging. This is neglect.
              </p>
              <p>
                Your joints are designed to move. When they don't, the surrounding tissues get stiff, weak, and cranky. Muscles shorten. Fascia gets sticky. Your nervous system starts to forget what full range of motion even feels like.
              </p>
              <p className="text-lg font-medium text-primary mt-6">
                The good news? A little bit of daily movement goes a long way.
              </p>
            </div>
          </div>

          {/* Movement Hygiene */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-8 text-center">
              Movement Hygiene: The Concept
            </h2>

            <div className="bg-offWhite rounded-2xl p-8 mb-8">
              <p className="text-neutralDark/80 mb-4">
                Think of movement hygiene like this:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-heading text-primary mb-2">Brushing Your Teeth</h3>
                  <ul className="space-y-1 text-sm text-neutralDark/80">
                    <li>• Takes 2-3 minutes</li>
                    <li>• Do it every day</li>
                    <li>• Prevents bigger problems</li>
                    <li>• Not negotiable</li>
                    <li>• Results compound over time</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-heading text-primary mb-2">Daily Mobility Work</h3>
                  <ul className="space-y-1 text-sm text-neutralDark/80">
                    <li>• Takes 5 minutes</li>
                    <li>• Do it every day</li>
                    <li>• Prevents bigger problems</li>
                    <li>• Should be non-negotiable</li>
                    <li>• Results compound over time</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-center text-neutralDark/80 text-lg max-w-2xl mx-auto">
              You don't skip brushing your teeth because you're "too busy" or "not feeling it today." The same mindset should apply to moving your body. It's not optional, it's maintenance.
            </p>
          </div>

          {/* What This Looks Like */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">What a Simple Routine Looks Like</h2>
            <div className="space-y-4 text-neutralDark/80 mb-6">
              <p>
                I'm not going to give you the full routine here (that's what working together is for), but I'll give you the concept. You want to move your major joints through their full range of motion, in a way that feels good and wakes up your nervous system.
              </p>
              <p>
                For most people, this means focusing on:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-offWhite rounded-xl p-6">
                <h3 className="text-lg font-heading text-primary mb-3">Hips</h3>
                <p className="text-sm text-neutralDark/80">
                  Your hips do a lot. They flex, extend, rotate, abduct, adduct. Most people only use about 30% of their hip's available range. A good hip flow routine wakes up all those ranges.
                </p>
              </div>

              <div className="bg-offWhite rounded-xl p-6">
                <h3 className="text-lg font-heading text-primary mb-3">Spine</h3>
                <p className="text-sm text-neutralDark/80">
                  Flexion, extension, rotation, lateral bending. Your spine is meant to move in all directions. Spending all day in one position (sitting, standing, whatever) robs you of that.
                </p>
              </div>

              <div className="bg-offWhite rounded-xl p-6">
                <h3 className="text-lg font-heading text-primary mb-3">Shoulders</h3>
                <p className="text-sm text-neutralDark/80">
                  The shoulder joint has the most range of motion in your body. It also loses it faster than anything else if you don't use it. Reaching, rotating, and moving it in all directions keeps it healthy.
                </p>
              </div>

              <div className="bg-offWhite rounded-xl p-6">
                <h3 className="text-lg font-heading text-primary mb-3">Ankles</h3>
                <p className="text-sm text-neutralDark/80">
                  Stiff ankles screw up everything above them. Knees, hips, back, all of it. A little ankle mobility work pays huge dividends.
                </p>
              </div>
            </div>

            <div className="bg-accent/10 border-2 border-accent/30 rounded-2xl p-6">
              <p className="text-neutralDark/80 mb-3">
                <strong className="text-primary">My go-to warm-up:</strong> I use a flow-based routine that takes about 5 minutes and hits all these areas. It's smooth, it's continuous, and it gets your whole system online.
              </p>
              <p className="text-neutralDark/80">
                I teach this to all my clients, and it's one of the most valuable things they take away from working with me. Not because it's complicated (it's not), but because it's simple enough to actually do every day.
              </p>
            </div>
          </div>

          {/* Why This Matters as You Age */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">Why This Matters (Especially as You Age)</h2>
            <div className="space-y-4 text-neutralDark/80">
              <p>
                When you're 25, you can get away with a lot. You can sleep weird, sit all day, never stretch, and your body mostly forgives you.
              </p>
              <p>
                By 35, things start to catch up. By 45, you're feeling it. By 55, you're dealing with chronic stiffness, limited mobility, and a body that feels like it's working against you.
              </p>
              <p className="font-medium text-lg text-primary">
                But here's the thing: it doesn't have to be that way.
              </p>
              <p>
                People who maintain a simple daily mobility practice age differently. They're not fighting their bodies. They're not constantly dealing with stiffness and pain. They move with ease, because they've been taking care of their movement hygiene.
              </p>
              <p>
                Five minutes a day. That's all it takes. Less time than scrolling social media. Less time than making coffee. But the return on investment is massive.
              </p>
            </div>
          </div>

          {/* Who This Is For */}
          <div className="bg-sage/10 rounded-2xl p-8 mb-16 border-2 border-sage/20">
            <h2 className="text-3xl font-heading text-primary mb-6">This Is For You If:</h2>
            <ul className="space-y-3 text-neutralDark/80">
              <li>✓ You wake up stiff and it takes a while to "warm up"</li>
              <li>✓ You feel like your body is getting stiffer as you age</li>
              <li>✓ You want to prevent problems before they start</li>
              <li>✓ You're willing to commit 5 minutes a day to your body</li>
              <li>✓ You want to move with ease in your 60s, 70s, and beyond</li>
              <li>✓ You're tired of feeling like your body is betraying you</li>
            </ul>
          </div>

          {/* How I Can Help */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">How I Can Help</h2>
            <div className="space-y-4 text-neutralDark/80">
              <p>
                When you work with me, one of the first things I teach is a personalized mobility routine. It's based on what YOUR body needs, not some generic YouTube routine.
              </p>
              <p>
                We look at:
              </p>
              <ul className="space-y-2 ml-6 mb-4">
                <li>What ranges of motion you're missing</li>
                <li>Where you're compensating</li>
                <li>What movements feel good vs. what feels restricted</li>
                <li>How to build a routine you'll actually do every day</li>
              </ul>
              <p className="font-medium text-lg text-primary">
                The goal isn't to turn you into a gymnast. It's to give you the tools to maintain your body for the long haul.
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
                  Understanding how movement coaching helps you maintain your body long-term.
                </p>
              </Link>
              
              <Link to="/exercise-for-life" className="bg-offWhite rounded-xl p-6 hover:shadow-lg transition group">
                <h3 className="text-xl font-heading text-primary mb-3 group-hover:text-accent transition">Exercise for Life's Challenges</h3>
                <p className="text-sm text-neutralDark/80">
                  Training that keeps you capable and resilient as you age.
                </p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-heading mb-4">Ready to Start Taking Care of Your Body?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's build a simple daily routine that actually works for you and your life.
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

export default DailyMobility;

