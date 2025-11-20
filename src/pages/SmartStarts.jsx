import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function SmartStarts() {
  const [selectedCard, setSelectedCard] = useState(null);

  const packages = [
    {
      id: 'reset',
      name: 'The Reset',
      tagline: 'Get back on track',
      price: 990,
      sessions: '6 sessions',
      breakdown: '3 SI + 3 Movement',
      duration: '60 minutes each',
      totalSessions: 6,
      description: 'Life knocked you off balance. Work, stress, or just time took you away from feeling good in your body. The Reset is your way back.',
      ideal: [
        'You used to feel better and want that back',
        'You need a clear starting point',
        'You want to understand what your body needs',
        'You\'re ready to invest in yourself, but want to start focused'
      ],
      outcomes: [
        'Relief from tension patterns',
        'Improved posture and awareness',
        'Foundation for ongoing work',
        'Clear next steps for your body'
      ],
      icon: '🔄',
      color: 'sage'
    },
    {
      id: 'hip',
      name: 'Hip Series',
      tagline: 'Freedom where you need it most',
      price: 720,
      sessions: '4 sessions',
      breakdown: 'Targeted hip work',
      duration: 'Focused sessions',
      totalSessions: 4,
      description: 'Your hips carry everything.your posture, your gait, your story. When they\'re stuck, everything else compensates. This series gets them moving again.',
      ideal: [
        'Hip pain or tightness affecting your life',
        'Limited mobility in your lower body',
        'Interested in SI but want to start focused',
        'Looking for an intro to structural work'
      ],
      outcomes: [
        'Increased hip mobility and ease',
        'Reduced compensatory patterns',
        'Better understanding of your structure',
        'Foundation for deeper work if desired'
      ],
      icon: '🦵',
      color: 'accent'
    },
    {
      id: 'repatterning',
      name: 'Full Repatterning',
      tagline: 'Complete transformation',
      price: 3720,
      sessions: '24 sessions',
      breakdown: '12 SI (60 min) + 12 Movement (60 min)',
      duration: '60 minutes each',
      totalSessions: 24,
      description: 'This isn\'t a tune-up.it\'s a complete rebuild. For when you\'re ready to fundamentally change how your body works, feels, and moves through life.',
      ideal: [
        'Chronic issues that won\'t resolve with other approaches',
        'Ready for significant, lasting change',
        'Want both structural and movement transformation',
        'Committed to the full journey'
      ],
      outcomes: [
        'Complete structural realignment',
        'New movement patterns that last',
        'Deep understanding of your body',
        'Foundation for lifelong wellbeing'
      ],
      icon: '✨',
      color: 'highlight',
      popular: true
    }
  ];

  return (
    <PageLayout>
      <PageHero 
        imageSrc="/smart-starts-hero.jpg"
        title="Smart Starts"
        subtitle="The right beginning for your body"
      />

      {/* Intro */}
      <div className="bg-offWhite pt-8 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-neutralDark/80 leading-relaxed">
            Starting something new with your body shouldn't feel overwhelming. These programs offer clear entry points for <strong>structural integration</strong>, <strong>movement education</strong>, and <strong>personalized exercise instruction in Santa Cruz</strong>. Each one meets you where you are and takes you where you want to go.
          </p>
        </div>
      </div>

      {/* Empathetic intro */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-heading text-primary text-center leading-relaxed mb-8">
            Not sure where to start?<br />
            You're not alone.
          </p>
          <p className="text-lg text-neutralDark/80 leading-relaxed text-center">
            Most people come to this work because something isn't working anymore. Maybe it's pain that won't quit, movement that feels stuck, or just a sense that your body could feel better. Whatever brought you here, these three programs are designed as clear starting points.each one addressing different needs, timelines, and goals.
          </p>
        </div>
      </div>

      {/* What This Work Is - NEW SECTION */}
      <div className="bg-gradient-to-b from-white to-offWhite py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
              What This Work Is
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto">
              This isn't personal training in the traditional sense. It's not massage or chiropractic. It's something different: a combination of hands-on structural work and intelligent movement education that addresses both how your body is organized and how you've learned to move.
            </p>
          </div>

          {/* Structural Integration Explanation */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-heading text-primary mb-4">
              Structural Integration: Reorganizing Your Foundation
            </h3>
            <p className="text-neutralDark/80 leading-relaxed mb-4">
              Your body is wrapped in a web of connective tissue (fascia) that holds everything together. When one part gets tight or restricted—from injury, stress, or how you've been moving—it pulls on everything else. Over time, these compensations stack up, creating pain, stiffness, or movement limitations that won't budge with stretching or strength training alone.
            </p>
            <p className="text-neutralDark/80 leading-relaxed mb-4">
              Structural Integration addresses these restrictions directly. Through skilled hands-on work, I release tight areas and help your body reorganize around better alignment. This isn't passive bodywork—we'll get you up and moving during sessions, teaching your nervous system a better way to organize itself.
            </p>
            <p className="text-neutralDark/80 leading-relaxed">
              <Link to="/what-is-structural-integration" className="text-accent hover:underline font-semibold">Learn more about Structural Integration →</Link>
            </p>
          </div>

          {/* Movement Education Explanation */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-heading text-primary mb-4">
              Movement Education: Learning to Move Well
            </h3>
            <p className="text-neutralDark/80 leading-relaxed mb-4">
              Most training focuses on <em>what</em> you're doing. Movement Education focuses on <em>how</em> you're doing it. This isn't about exercises, reps, or crushing yourself. It's about learning to move with intelligence, efficiency, and awareness.
            </p>
            <p className="text-neutralDark/80 leading-relaxed mb-4">
              We work slowly and methodically, exploring movement patterns, finding where you're compensating, and teaching your nervous system a better way. You'll learn how to breathe with your movement, find and use your deep core stabilizers, move without compensation, and build strength that transfers to everything you do.
            </p>
            <p className="text-neutralDark/80 leading-relaxed mb-4">
              Every session includes 2–3 movement patterns we'll work on together. You'll learn what to feel for, how to self-correct, and how to practice effectively. You'll leave with simple practices you can do daily—not hour-long workouts, but 5 to 10 minutes of focused movement that builds the patterns we worked on.
            </p>
            <p className="text-neutralDark/80 leading-relaxed">
              <Link to="/what-is-movement-education" className="text-accent hover:underline font-semibold">Learn more about Movement Education →</Link>
            </p>
          </div>

          {/* Why They Work Together */}
          <div className="bg-gradient-to-br from-accent/10 to-sage/10 rounded-2xl p-8 border-2 border-accent/20">
            <h3 className="text-2xl font-heading text-primary mb-4">
              Why They Work Together
            </h3>
            <p className="text-neutralDark/80 leading-relaxed mb-4">
              Here's the thing: you can have the most beautifully organized structure, but if you go right back to your old movement patterns, you'll recreate the same problems. That's why these programs combine both.
            </p>
            <p className="text-neutralDark/80 leading-relaxed mb-4">
              The structural work creates space and releases restrictions. The movement education teaches you how to use that new space intelligently. Together, they create change that lasts because you're not just getting "worked on"—you're learning a better way to inhabit your body.
            </p>
            <p className="text-neutralDark/80 leading-relaxed">
              <Link to="/combo-programs" className="text-accent hover:underline font-semibold">Learn more about combining SI and Movement →</Link>
            </p>
          </div>
        </div>
      </div>

      {/* How Sessions Work */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-12 text-center">
            How Sessions Work
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-4 border-sage pl-6">
              <h3 className="text-xl font-heading text-primary mb-3">
                1. Assess
              </h3>
              <p className="text-neutralDark/80 leading-relaxed">
                We start by understanding where you are. How do you stand, walk, and breathe? Where are you compensating? What patterns need attention? This isn't a quick checklist—it's a comprehensive look at your unique body.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-heading text-primary mb-3">
                2. Work
              </h3>
              <p className="text-neutralDark/80 leading-relaxed">
                Through hands-on structural work and movement education, we address the root patterns—not just the symptoms. This is where change happens: slowly, intelligently, and with your body's full participation. You're actively learning as we work.
              </p>
            </div>

            <div className="border-l-4 border-highlight pl-6">
              <h3 className="text-xl font-heading text-primary mb-3">
                3. Reinforce
              </h3>
              <p className="text-neutralDark/80 leading-relaxed">
                You leave with 1–2 micro-practices tailored to your patterns. Simple things you can do daily to maintain and build on what we've opened up. Not hour-long workouts—just focused movement that makes the changes stick.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes This Different */}
      <div className="bg-offWhite py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-12 text-center">
            What Makes This Different
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-heading text-primary mb-3">
                Most personal training focuses on exercises
              </h3>
              <p className="text-neutralDark/80 leading-relaxed">
                You do squats, you do deadlifts, you get stronger. But if your structure is off or your movement patterns are inefficient, you're just reinforcing compensations. You might get stronger, but you won't necessarily move better.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-heading text-primary mb-3">
                Most bodywork focuses on relaxation
              </h3>
              <p className="text-neutralDark/80 leading-relaxed">
                You feel good for a day or two, then everything tightens back up. That's because the work didn't address how you move. Without changing your movement patterns, your body will recreate the same restrictions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-sage/10 rounded-xl p-6 border-2 border-accent/20">
              <h3 className="text-xl font-heading text-primary mb-3">
                This work combines both
              </h3>
              <p className="text-neutralDark/80 leading-relaxed font-medium">
                Structural work to reorganize your body, plus movement education to make the changes last. You're not just getting stronger or getting worked on—you're learning a better way to inhabit your body. That's what creates lasting change.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Three Programs - Simplified Cards */}
      <div className="bg-gradient-to-b from-offWhite to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-4 text-center">
            Three Clear Entry Points
          </h2>
          <p className="text-lg text-neutralDark/80 text-center mb-12 max-w-3xl mx-auto">
            Each program is designed for different needs, timelines, and levels of commitment. All combine structural integration and movement education—just in different amounts and intensities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => setSelectedCard(selectedCard === pkg.id ? null : pkg.id)}
                className={`
                  relative bg-white rounded-2xl p-8 shadow-sm cursor-pointer
                  transition-all duration-500 transform
                  ${selectedCard === pkg.id 
                    ? 'scale-105 shadow-2xl border-2 border-accent z-10' 
                    : 'border-2 border-neutralLight hover:border-accent/50 hover:shadow-lg'
                  }
                  ${pkg.popular ? 'md:-mt-4' : ''}
                `}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-6 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{pkg.icon}</div>
                  <h3 className="text-2xl font-heading text-primary mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-lg text-accent italic mb-4">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Expandable Content */}
                <div className={`
                  transition-all duration-500 overflow-hidden
                  ${selectedCard === pkg.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <div className="border-t border-neutralLight pt-6 mb-6">
                    <p className="text-base text-neutralDark/80 leading-relaxed mb-6">
                      {pkg.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                        This is for you if:
                      </h4>
                      <ul className="space-y-2">
                        {pkg.ideal.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-neutralDark/70">
                            <span className="text-accent mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                        What to expect:
                      </h4>
                      <ul className="space-y-2">
                        {pkg.outcomes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-neutralDark/70">
                            <span className="text-sage mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing moved here, inside expandable */}
                    <div className="mb-6 pt-6 border-t border-neutralLight">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          ${pkg.price.toLocaleString()}
                        </div>
                        <p className="text-sm text-neutralDark/60 mb-1">{pkg.sessions}</p>
                        <p className="text-sm text-neutralDark/60">{pkg.breakdown}</p>
                        <p className="text-xs text-neutralDark/50 mt-2">{pkg.duration}</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={
                      pkg.id === 'reset' ? 'https://buy.stripe.com/dRmfZhgcLcNF0l31wSefC04' :
                      pkg.id === 'hip' ? 'https://buy.stripe.com/bJe8wPaSr7tl5FndfAefC05' :
                      'https://buy.stripe.com/3cI9ATf8H3d50l32AWefC09'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-colors border border-black inline-block text-center"
                  >
                    Start {pkg.name}
                  </a>
                </div>

                {/* Click indicator when collapsed */}
                {selectedCard !== pkg.id && (
                  <div className="text-center pt-4 border-t border-neutralLight mt-6">
                    <span className="text-sm text-accent font-semibold">
                      Click to learn more →
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rhythmic storytelling transition */}
      <div className="bg-offWhite py-16 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-xl md:text-2xl font-light text-neutralDark/80 leading-relaxed">
            Every body is different.
          </p>
          <p className="text-xl md:text-2xl font-light text-neutralDark/80 leading-relaxed">
            Every path is unique.
          </p>
          <p className="text-2xl md:text-3xl font-heading text-primary leading-relaxed">
            But everyone needs a place to <em className="text-accent">start</em>.
          </p>
        </div>
      </div>

      {/* Pricing Details Section - MOVED TO BOTTOM */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-12 text-center">
            Investment & Details
          </h2>

          <div className="space-y-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-offWhite rounded-2xl p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading text-primary mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-lg text-accent italic mb-4">{pkg.tagline}</p>
                    <p className="text-neutralDark/80 mb-4">{pkg.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-neutralDark/70">
                      <span>{pkg.sessions}</span>
                      <span>•</span>
                      <span>{pkg.breakdown}</span>
                      <span>•</span>
                      <span>{pkg.duration}</span>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-4xl font-bold text-primary mb-2">
                      ${pkg.price.toLocaleString()}
                    </div>
                    <a
                      href={
                        pkg.id === 'reset' ? 'https://buy.stripe.com/dRmfZhgcLcNF0l31wSefC04' :
                        pkg.id === 'hip' ? 'https://buy.stripe.com/bJe8wPaSr7tl5FndfAefC05' :
                        'https://buy.stripe.com/3cI9ATf8H3d50l32AWefC09'
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-colors border border-black"
                    >
                      Purchase {pkg.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-sage/10 to-accent/10 rounded-2xl p-8 border-2 border-sage/20">
            <h3 className="text-xl font-heading text-primary mb-4">
              What's Included
            </h3>
            <ul className="space-y-2 text-neutralDark/80">
              <li>✓ All sessions scheduled at your convenience</li>
              <li>✓ Comprehensive movement and structural assessment</li>
              <li>✓ Hands-on structural integration work</li>
              <li>✓ Movement education and pattern retraining</li>
              <li>✓ Personalized practice plans for between sessions</li>
              <li>✓ Email support for questions between sessions</li>
              <li>✓ Flexible scheduling to fit your life</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Still not sure? */}
      <div className="bg-offWhite py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-heading text-primary mb-6">
            Still not sure which path is right?
          </h3>
          <p className="text-lg text-neutralDark/80 mb-8 leading-relaxed">
            Let's talk. A free consultation helps us figure out together what makes sense for your body, your goals, and your life right now.
          </p>
          <Button
            href="/consult"
            variant="primary"
            size="lg"
          >
            Book Free Consultation
          </Button>
        </div>
      </div>

      {/* SEO footer content */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-heading text-primary mb-4 text-center">
            Why Choose Movement Education & Structural Integration in Santa Cruz?
          </h3>
          <p className="text-base text-neutralDark/70 leading-relaxed text-center">
            Whether you're seeking relief from chronic pain, improved athletic performance, or simply want to feel more at home in your body, these programs combine the best of hands-on <strong>structural integration</strong> and intelligent <strong>movement education</strong>. Located in Santa Cruz, I work with clients throughout the Bay Area who are ready to invest in lasting change.not quick solutions.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

export default SmartStarts;
