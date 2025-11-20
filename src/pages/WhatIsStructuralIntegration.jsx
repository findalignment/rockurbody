import { useState, useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import { getBreadcrumbSchema } from '../utils/structuredData';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

function WhatIsStructuralIntegration() {
  const [isAligned, setIsAligned] = useState(false);

  useEffect(() => {
    // After 6 seconds, allow user to align the page
    const timer = setTimeout(() => {
      setIsAligned(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Structural Integration', url: '/structural-integration' },
    { name: 'What Is SI?', url: '/what-is-structural-integration' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="What is Structural Integration? | Santa Cruz SI Explained"
        description="Learn what Structural Integration is and how it differs from massage and other bodywork. Systematic bodywork that reorganizes how your whole body functions."
        keywords="what is structural integration, rolfing explained, structural integration santa cruz, fascia bodywork, systematic bodywork"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      <PageHero 
        imageSrc="/services-hero.jpg"
        title="What is Structural Integration?"
        subtitle="Understanding the foundation of lasting change"
      />


      {/* SEO-optimized intro with CTA above fold */}
      <div 
        className="bg-offWhite pt-8 pb-12 px-4 transition-all duration-1000"
        style={{
          transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(6px) rotate(0.3deg)',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl font-heading text-primary mb-6 transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-5px) rotate(-0.25deg)',
            }}
          >
            Structural Integration in Santa Cruz
          </h2>
          <p 
            className="text-lg md:text-xl text-neutralDark/90 leading-relaxed mb-8 transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(4px) rotate(0.2deg)',
            }}
          >
            <strong>Structural Integration</strong> is hands-on bodywork that helps restore your natural movement, reduce pain, and improve performance. Think of your body like a three-dimensional web-when one part gets tight or restricted, it pulls on everything else. This work releases those restrictions so your whole body can function better.
          </p>
          
          {/* CTA Above Fold */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-3px) rotate(-0.15deg)',
            }}
          >
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
          
          {/* What it is */}
          <div
            className="transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-4px) rotate(-0.2deg)',
            }}
          >
            <h3 
              className="text-3xl font-heading text-primary mb-6 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(5px) rotate(0.25deg)',
              }}
            >
              What It Is
            </h3>
            <p 
              className="text-lg text-neutralDark/80 leading-relaxed mb-4 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(3px) rotate(0.1deg)',
              }}
            >
              Your body is wrapped in a web of connective tissue (think of it like a three-dimensional sweater). When one part gets tight or restricted-from injury, stress, or just how you've been moving-it pulls on everything else. Over time, these compensations stack up, and you end up with pain, stiffness, or movement limitations that won't budge with stretching or strength training alone.
            </p>
            <p 
              className="text-lg text-neutralDark/80 leading-relaxed mb-4 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-2px) rotate(-0.1deg)',
              }}
            >
              Structural Integration addresses these restrictions directly. Through skilled hands-on work, I release tight areas and help your body reorganize around better alignment. I pair this with simple movement cues, so the changes "stick" when you stand, walk, lift, and live. The goal: restore natural movement, reduce pain, and improve how your body performs.
            </p>
          </div>

          {/* Why people book this */}
          <div 
            className="bg-offWhite rounded-2xl p-8 transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(7px) rotate(0.35deg)',
            }}
          >
            <h3 
              className="text-2xl font-heading text-primary mb-6 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-4px) rotate(-0.2deg)',
              }}
            >
              Why People Book This
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">💪</span>
                <div>
                  <strong className="text-neutralDark">Restore Natural Movement</strong>
                  <p className="text-neutralDark/70 mt-1">Release tight spots and restrictions so your body moves the way it was designed to. That shoulder that never quite loosens up, the hip that's always tight-these aren't just muscle problems. They're often restrictions in your connective tissue that need hands-on work.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🌬️</span>
                <div>
                  <strong className="text-neutralDark">Reduce Pain</strong>
                  <p className="text-neutralDark/70 mt-1">When your structure is organized, your body doesn't have to work so hard to hold you upright. This reduces strain, tension, and the pain that comes from compensation patterns. Breathing becomes easier and deeper too.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🏃</span>
                <div>
                  <strong className="text-neutralDark">Improve Performance</strong>
                  <p className="text-neutralDark/70 mt-1">Whether you're lifting, running, or just moving through your day, better structure means better function. You'll move stronger, smoother, and more efficiently in everything you do.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* How it works */}
          <div
            className="transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-6px) rotate(-0.3deg)',
            }}
          >
            <h3 
              className="text-3xl font-heading text-primary mb-6 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(4px) rotate(0.2deg)',
              }}
            >
              How It Works
            </h3>
            
            <div className="space-y-6">
              <div 
                className="border-l-4 border-sage pl-6 transition-all duration-1000"
                style={{
                  transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(5px) rotate(0.15deg)',
                }}
              >
                <h4 className="text-xl font-heading text-primary mb-3">
                  1. Assess & Map
                </h4>
                <p className="text-neutralDark/80 leading-relaxed">
                  We look at how you stand, walk, and breathe to find the bottlenecks. Where is your body compensating? What patterns are you stuck in?
                </p>
              </div>

              <div 
                className="border-l-4 border-accent pl-6 transition-all duration-1000"
                style={{
                  transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-3px) rotate(-0.1deg)',
                }}
              >
                <h4 className="text-xl font-heading text-primary mb-3">
                  2. Hands-On + Cueing
                </h4>
                <p className="text-neutralDark/80 leading-relaxed">
                  Targeted work to free tissue, combined with movements that teach your body a better option. This isn't passive.you're actively learning as we work.
                </p>
              </div>

              <div 
                className="border-l-4 border-highlight pl-6 transition-all duration-1000"
                style={{
                  transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(6px) rotate(0.2deg)',
                }}
              >
                <h4 className="text-xl font-heading text-primary mb-3">
                  3. Reinforce
                </h4>
                <p className="text-neutralDark/80 leading-relaxed">
                  You leave with 1–2 micro-practices tailored to your patterns. Simple things you can do daily to maintain and build on what we've opened up.
                </p>
              </div>
            </div>
          </div>

          {/* What to expect */}
          <div 
            className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-5px) rotate(-0.25deg)',
            }}
          >
            <h3 
              className="text-2xl font-heading text-primary mb-6 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(3px) rotate(0.15deg)',
              }}
            >
              What to Expect
            </h3>
            <ul className="space-y-3 text-neutralDark/80">
              <li>✓ Wear comfy clothing you can move in.no oils or lotions</li>
              <li>✓ We'll get you up and moving during the session (this isn't a passive table experience)</li>
              <li>✓ You may feel lighter, taller, or a bit worked afterward (normal and temporary)</li>
              <li>✓ Session lengths: 60, 90, or 120 minutes depending on your needs</li>
            </ul>
          </div>

          {/* What's realistic */}
          <div
            className="transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(6px) rotate(0.3deg)',
            }}
          >
            <h3 
              className="text-3xl font-heading text-primary mb-6 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-4px) rotate(-0.2deg)',
              }}
            >
              What's Realistic
            </h3>
            <p 
              className="text-lg text-neutralDark/80 leading-relaxed mb-4 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(3px) rotate(0.1deg)',
              }}
            >
              Many people feel a meaningful shift in 1–3 sessions. But lasting change? That usually needs 6–12 sessions with light homework between.
            </p>
            <p 
              className="text-lg text-neutralDark/80 leading-relaxed mb-4 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-5px) rotate(-0.15deg)',
              }}
            >
              This isn't a quick solution. It's change that holds because your movement changes. You're not just getting "worked on".you're learning a better way to inhabit your body.
            </p>
          </div>

          {/* Bottom line */}
          <div 
            className="bg-primary text-white rounded-2xl p-8 transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-7px) rotate(-0.35deg)',
            }}
          >
            <h3 
              className="text-2xl font-heading mb-4 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(5px) rotate(0.25deg)',
              }}
            >
              The Bottom Line
            </h3>
            <p 
              className="text-lg leading-relaxed transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-3px) rotate(-0.1deg)',
              }}
            >
              If you've tried stretching, strengthening, and adjustments but still feel stuck, or if you want to build a body that works better for the long haul.Structural Integration might be exactly what you need.
            </p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div 
        className="bg-offWhite py-20 px-4 transition-all duration-1000"
        style={{
          transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(5px) rotate(0.25deg)',
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h3 
            className="text-3xl font-heading text-primary mb-6 transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-4px) rotate(-0.2deg)',
            }}
          >
            Ready to experience it?
          </h3>
          <p 
            className="text-lg text-neutralDark/80 mb-8 leading-relaxed transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(4px) rotate(0.15deg)',
            }}
          >
            Explore our programs featuring Structural Integration, from targeted series like the Hip Series to comprehensive full-body repatterning.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-3px) rotate(-0.1deg)',
            }}
          >
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
          <div 
            className="mt-12 pt-8 border-t border-neutralDark/20 transition-all duration-1000 text-center"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(6px) rotate(0.2deg)',
            }}
          >
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Structural Integration Hub
              </Link>
              <Link to="/santa-cruz-structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Santa Cruz SI
              </Link>
              <Link to="/rolfing-vs-massage" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Rolfing vs Massage
              </Link>
              <Link to="/structural-integration-vs-chiropractic" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                SI vs Chiropractic
              </Link>
              <Link to="/gravity-and-structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Gravity & SI
              </Link>
              <Link to="/fascial-release" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Fascial Release
              </Link>
              <Link to="/chronic-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Chronic Pain Relief
              </Link>
              <Link to="/posture-correction" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Posture Correction
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Interactive element - button to align the page */}
      {!isAligned && (
        <div className="fixed bottom-8 right-8 bg-accent text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse">
          <button
            onClick={() => setIsAligned(true)}
            className="font-semibold"
          >
            Click to Align Page →
          </button>
        </div>
      )}
    </PageLayout>
  );
}

export default WhatIsStructuralIntegration;
