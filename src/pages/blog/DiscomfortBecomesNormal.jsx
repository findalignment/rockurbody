import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function DiscomfortBecomesNormal() {
  const [isAligned, setIsAligned] = useState(false);

  useEffect(() => {
    // After 3 seconds, allow user to align the page
    const timer = setTimeout(() => {
      setIsAligned(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 font-semibold"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Article Header - Slightly misaligned */}
          <article>
            <header 
              className="mb-12 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(8px) rotate(0.5deg)',
                transition: 'transform 0.3s ease-out'
              }}
            >
              <h1 
                className="text-5xl font-heading text-primary mb-4 transition-all duration-1000"
                style={{
                  transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-6px) rotate(-0.3deg)',
                }}
              >
                When Discomfort Becomes Normal: The Hidden Tension We Carry
              </h1>
              <h2 
                className="text-2xl text-neutralDark/70 mb-6 font-semibold transition-all duration-1000"
                style={{
                  transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(4px) rotate(0.2deg)',
                }}
              >
                How We Learn to Live with Misalignment Without Even Noticing
              </h2>
              <p 
                className="text-sm text-neutralDark/60 transition-all duration-1000"
                style={{
                  transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-3px) rotate(-0.1deg)',
                }}
              >
                January 15, 2025
              </p>
            </header>

            {/* Article Content - Multiple misaligned sections */}
            <div className="prose prose-lg max-w-none space-y-6 text-neutralDark/80">
              <p 
                className="text-lg leading-relaxed transition-all duration-1000"
                style={{
                  transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(5px) rotate(0.2deg)',
                }}
              >
                Look at this page. Something feels off, doesn't it? The text isn't quite straight. The headings are slightly tilted. Everything is just a little bit out of alignment. It's uncomfortable to look at. Your eyes want to fix it. Your brain notices something is wrong.
              </p>

              <p 
                className="leading-relaxed transition-all duration-1000"
                style={{
                  transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-4px) rotate(-0.15deg)',
                }}
              >
                But here's the thing: if you looked at this page long enough, your brain would start to accept it. The discomfort would fade. You'd stop noticing the misalignment. It would become your new normal. You'd adapt. You'd compensate. And eventually, you'd forget it was ever different.
              </p>

              <div 
                className="bg-white rounded-2xl p-8 shadow-sm my-10 transition-all duration-1000"
                style={{
                  transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(7px) rotate(0.4deg)',
                }}
              >
                <h3 
                  className="text-3xl font-heading text-neutralDark mb-6 transition-all duration-1000"
                  style={{
                    transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-5px) rotate(-0.25deg)',
                  }}
                >
                  Your Body Does the Same Thing
                </h3>
                <p 
                  className="leading-relaxed mb-4 transition-all duration-1000"
                  style={{
                    transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(3px) rotate(0.1deg)',
                  }}
                >
                  Your body is doing this right now. Somewhere in your structure, something is slightly off. Maybe your right shoulder sits a little higher than your left. Maybe your pelvis is rotated just a few degrees. Maybe your head is forward of where it should be. Nothing dramatic. Nothing that screams "broken." Just enough misalignment to create subtle tension.
                </p>
                <p 
                  className="leading-relaxed transition-all duration-1000"
                  style={{
                    transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-2px) rotate(-0.1deg)',
                  }}
                >
                  And your body has adapted. Your muscles have learned to hold you in this slightly-off position. Your fascia has tightened to support the misalignment. Your nervous system has accepted it as normal. You don't notice the tension anymore because it's been there so long, it feels like nothing at all.
                </p>
              </div>

              <section 
                className="my-10 transition-all duration-1000"
                style={{
                  transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-6px) rotate(-0.3deg)',
                }}
              >
                <h3 
                  className="text-3xl font-heading text-neutralDark mb-6 transition-all duration-1000"
                  style={{
                    transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(4px) rotate(0.2deg)',
                  }}
                >
                  The Slow Creep of Compensation
                </h3>
                <p 
                  className="leading-relaxed mb-4 transition-all duration-1000"
                  style={{
                    transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(5px) rotate(0.15deg)',
                  }}
                >
                  This doesn't happen overnight. It happens gradually. An old injury that never fully healed. Years of sitting at a desk. A movement pattern you learned as a kid that wasn't quite right. One small compensation leads to another. Your body finds ways to work around the restriction. It's clever. It's adaptive. It keeps you functioning.
                </p>
                <p 
                  className="leading-relaxed mb-4 transition-all duration-1000"
                  style={{
                    transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-3px) rotate(-0.1deg)',
                  }}
                >
                  But here's what happens: those compensations require energy. They create tension. They pull on other parts of your body. Your right hip compensates for your left foot. Your left shoulder compensates for your right hip. Everything is connected. Everything is pulling. Everything is working harder than it needs to.
                </p>
                <p 
                  className="leading-relaxed transition-all duration-1000"
                  style={{
                    transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(6px) rotate(0.2deg)',
                  }}
                >
                  And you don't feel it because it's normal. It's your normal. It's been your normal for so long, you've forgotten what it feels like to not be holding tension. You've forgotten what ease actually feels like.
                </p>
              </section>

              <div 
                className="bg-gradient-to-br from-accent/10 to-sage/10 border border-accent/20 rounded-2xl p-8 my-10 transition-all duration-1000"
                style={{
                  transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-5px) rotate(-0.25deg)',
                }}
              >
                <h3 
                  className="text-3xl font-heading text-neutralDark mb-6 transition-all duration-1000"
                  style={{
                    transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(3px) rotate(0.15deg)',
                  }}
                >
                  The Moment of Recognition
                </h3>
                <p 
                  className="leading-relaxed mb-4 transition-all duration-1000"
                  style={{
                    transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(4px) rotate(0.1deg)',
                  }}
                >
                  Sometimes, you get a glimpse. You catch yourself in a mirror and notice your shoulders aren't level. You see a photo and realize your head is forward. Someone points out that you're leaning to one side. For a moment, you see it. You feel it. The misalignment becomes visible.
                </p>
                <p 
                  className="leading-relaxed mb-4 transition-all duration-1000"
                  style={{
                    transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-4px) rotate(-0.2deg)',
                  }}
                >
                  But then you go back to your day, and it fades. Your body returns to its familiar position. The tension feels normal again. The discomfort disappears because you've adapted to it. You've normalized it.
                </p>
                <p 
                  className="leading-relaxed transition-all duration-1000"
                  style={{
                    transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(5px) rotate(0.2deg)',
                  }}
                >
                  This is what structural integration addresses. Not the dramatic misalignments. Not the obvious problems. The subtle ones. The ones you've learned to live with. The ones that have become so normal, you don't even know they're there.
                </p>
              </div>

              <section 
                className="my-10 transition-all duration-1000"
                style={{
                  transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(6px) rotate(0.3deg)',
                }}
              >
                <h3 
                  className="text-3xl font-heading text-neutralDark mb-6 transition-all duration-1000"
                  style={{
                    transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-4px) rotate(-0.2deg)',
                  }}
                >
                  What It Feels Like to Let Go
                </h3>
                <p 
                  className="leading-relaxed mb-4 transition-all duration-1000"
                  style={{
                    transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(3px) rotate(0.1deg)',
                  }}
                >
                  When you release those restrictions, when you let go of the compensations, something interesting happens. At first, it feels wrong. Your body wants to go back to the familiar position. The new alignment feels strange. Uncomfortable. Like this page would feel if everything suddenly snapped into perfect alignment.
                </p>
                <p 
                  className="leading-relaxed mb-4 transition-all duration-1000"
                  style={{
                    transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-5px) rotate(-0.15deg)',
                  }}
                >
                  But then, after a moment, you realize something: you're not holding tension anymore. Your shoulders aren't working to keep your head up. Your hips aren't compensating for your feet. Everything is just... easier. You feel lighter. Taller. More at ease.
                </p>
                <p 
                  className="leading-relaxed transition-all duration-1000"
                  style={{
                    transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(4px) rotate(0.15deg)',
                  }}
                >
                  And you realize: this is what your body was supposed to feel like. This is what ease actually is. Not the absence of pain, but the absence of unnecessary tension. Not perfect alignment, but alignment that doesn't require constant compensation.
                </p>
              </section>

              <div 
                className="bg-white rounded-2xl p-8 shadow-sm my-10 transition-all duration-1000"
                style={{
                  transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-7px) rotate(-0.35deg)',
                }}
              >
                <h3 
                  className="text-3xl font-heading text-neutralDark mb-6 transition-all duration-1000"
                  style={{
                    transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(5px) rotate(0.25deg)',
                  }}
                >
                  The Work Isn't About Perfection
                </h3>
                <p 
                  className="leading-relaxed mb-4 transition-all duration-1000"
                  style={{
                    transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-3px) rotate(-0.1deg)',
                  }}
                >
                  Structural integration isn't about achieving perfect alignment. It's about releasing the restrictions that force your body into patterns of compensation. It's about giving your body the freedom to find its own natural alignment. It's about letting go of the tension you didn't even know you were holding.
                </p>
                <p 
                  className="leading-relaxed transition-all duration-1000"
                  style={{
                    transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(6px) rotate(0.2deg)',
                  }}
                >
                  Because here's the truth: you can't fix what you can't feel. And you can't feel what's become normal. The work is about making the invisible visible. About bringing awareness to the patterns you've forgotten. About giving your body permission to let go of the compensations it's been holding for years, maybe decades.
                </p>
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

              {isAligned && (
                <div 
                  className="bg-gradient-to-br from-sage/10 to-accent/10 border border-sage/20 rounded-2xl p-8 my-10 transition-all duration-1000"
                  style={{
                    transform: 'translateX(0) rotate(0deg)',
                  }}
                >
                  <h3 className="text-3xl font-heading text-neutralDark mb-6">
                    Notice the Difference?
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Everything snapped into alignment. The discomfort disappeared. The page became easier to read. Your eyes stopped trying to compensate for the misalignment.
                  </p>
                  <p className="leading-relaxed mb-4">
                    This is what happens in your body when we release the restrictions. The compensations let go. The tension releases. Everything finds its natural place. And suddenly, you remember what ease feels like.
                  </p>
                  <p className="leading-relaxed">
                    You didn't realize how much tension you were holding until it was gone. You didn't realize how uncomfortable the misalignment was until it was fixed. And now that you've felt the difference, you can't unfeel it.
                  </p>
                </div>
              )}

              {/* Call to Action */}
              <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-heading text-neutralDark mb-4">
                  Ready to Feel the Difference?
                </h3>
                <p className="text-neutralDark/80 mb-6">
                  Book a free consultation to discover what restrictions your body has learned to live with—and what it feels like to let them go.
                </p>
                <Link
                  to="/consult"
                  className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </PageLayout>
  );
}

export default DiscomfortBecomesNormal;

