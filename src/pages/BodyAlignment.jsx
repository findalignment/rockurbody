import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import { getBreadcrumbSchema } from '../utils/structuredData';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

function BodyAlignment() {
  const [isAligned, setIsAligned] = useState(false);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Body Alignment', url: '/body-alignment' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Body Alignment in Santa Cruz | Why Whole-Body Approach Matters"
        description="Learn why body alignment requires looking at your entire structure, not just isolated parts. When one area moves, it affects everything else. Structural Integration addresses the whole body."
        keywords="body alignment, posture alignment, structural alignment, whole body alignment, santa cruz alignment, structural integration, fascia alignment, postural correction"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
        canonicalUrl="https://rockurbody.com/body-alignment"
      />
      <PageHero 
        imageSrc="/services-hero.jpg"
        title="Body Alignment"
        subtitle="Why fixing one thing affects everything else"
        alt="Body alignment and structural integration explaining whole-body approach to alignment in Santa Cruz"
      />

      {/* Dramatic misaligned intro */}
      <div 
        className="bg-offWhite pt-8 pb-16 px-4 transition-all duration-1000"
        style={{
          transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(12px) rotate(1deg)',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl font-heading text-primary mb-6 transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-10px) rotate(-0.8deg)',
            }}
          >
            Look at This Page
          </h2>
          <p 
            className="text-lg md:text-xl text-neutralDark/90 leading-relaxed mb-8 transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(8px) rotate(0.6deg)',
            }}
          >
            Everything is out of alignment. The text is tilted. The headings are crooked. It's uncomfortable. It's distracting. Your eyes want to fix it. Your brain knows something is wrong.
          </p>
          
          {/* Dramatic Fix Button */}
          {!isAligned && (
            <div className="mb-8">
              <button
                onClick={() => setIsAligned(true)}
                className="bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-accent/90 transition-all transform hover:scale-105 animate-pulse"
              >
                Click to Fix Alignment →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main content - dramatically misaligned */}
      <div 
        className="bg-white py-20 px-4 transition-all duration-1000"
        style={{
          transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-8px) rotate(-0.5deg)',
        }}
      >
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* The Question */}
          <div
            className="transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(10px) rotate(0.7deg)',
            }}
          >
            <h3 
              className="text-4xl font-heading text-primary mb-6 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-7px) rotate(-0.4deg)',
              }}
            >
              Don't You Wish There Was a Button to Fix Your Body's Alignment?
            </h3>
            <p 
              className="text-xl text-neutralDark/80 leading-relaxed mb-4 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(6px) rotate(0.3deg)',
              }}
            >
              Wouldn't that be nice? One click, and everything snaps into place. Your shoulders level. Your hips align. Your head sits where it should. No more tension. No more compensation. Just... fixed.
            </p>
            <p 
              className="text-lg text-neutralDark/80 leading-relaxed transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-5px) rotate(-0.2deg)',
              }}
            >
              But here's the thing: your body doesn't work like a webpage. And that's exactly why finding alignment is so much more complex-and why it requires looking at your entire body, not just the part that hurts.
            </p>
          </div>

          {/* Why Bodies Are Different */}
          <div 
            className="bg-gradient-to-br from-accent/10 to-sage/10 rounded-2xl p-8 border-2 border-accent/20 transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-9px) rotate(-0.6deg)',
            }}
          >
            <h3 
              className="text-3xl font-heading text-primary mb-6 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(7px) rotate(0.5deg)',
              }}
            >
              Why Your Body Is Different From a Webpage
            </h3>
            <p 
              className="text-lg text-neutralDark/80 leading-relaxed mb-4 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(5px) rotate(0.2deg)',
              }}
            >
              On a webpage, when you fix one element, it doesn't affect the others. You can align the heading without touching the paragraph. You can center the button without moving the image. Each element is independent.
            </p>
            <p 
              className="text-lg text-neutralDark/80 leading-relaxed mb-4 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-6px) rotate(-0.3deg)',
              }}
            >
              Your body doesn't work that way. Everything is connected. Everything is interdependent. When one part moves, it affects everything else. When your right hip shifts, your left shoulder compensates. When your head moves forward, your entire spine reorganizes. When your foot pronates, your knee, hip, and back all adjust.
            </p>
            <p 
              className="text-lg text-neutralDark/80 leading-relaxed font-medium transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(8px) rotate(0.4deg)',
              }}
            >
              This is why you can't just "fix" your shoulder pain by working on your shoulder. Or your back pain by working on your back. The problem isn't where it hurts-it's how your entire body has organized itself around that restriction.
            </p>
          </div>

          {/* The Web of Connections */}
          <div
            className="transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(11px) rotate(0.8deg)',
            }}
          >
            <h3 
              className="text-3xl font-heading text-primary mb-6 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-8px) rotate(-0.5deg)',
              }}
            >
              The Web of Connections
            </h3>
            <p 
              className="text-lg text-neutralDark/80 leading-relaxed mb-4 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(7px) rotate(0.3deg)',
              }}
            >
              Your body is wrapped in a three-dimensional web of connective tissue called fascia. Think of it like a sweater-when you pull on one thread, the entire garment shifts. When one part of your fascia gets tight or restricted, it pulls on everything else.
            </p>
            <p 
              className="text-lg text-neutralDark/80 leading-relaxed mb-4 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-5px) rotate(-0.2deg)',
              }}
            >
              This is why isolated treatments often don't work. You can stretch your tight hip flexor all day, but if your foot is causing the problem, the hip will just tighten up again. You can massage your sore shoulder, but if your pelvis is rotated, the shoulder pain will return.
            </p>
            <p 
              className="text-lg text-neutralDark/80 leading-relaxed transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(9px) rotate(0.6deg)',
              }}
            >
              The body compensates. It finds ways to work around restrictions. And those compensations create new restrictions. It's a cascade. One misalignment leads to another, which leads to another, until your entire structure is organized around dysfunction.
            </p>
          </div>

          {/* Why We Need Whole-Body Approach */}
          <div 
            className="bg-white rounded-2xl p-8 shadow-sm transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-10px) rotate(-0.7deg)',
            }}
          >
            <h3 
              className="text-3xl font-heading text-primary mb-6 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(6px) rotate(0.4deg)',
              }}
            >
              Why We Need a Whole-Body Approach
            </h3>
            <p 
              className="text-lg text-neutralDark/80 leading-relaxed mb-4 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(5px) rotate(0.2deg)',
              }}
            >
              This is why <Link to="/what-is-structural-integration" className="text-accent hover:underline font-semibold">Structural Integration</Link> works systematically through your entire body. It's not about fixing one part. It's about understanding how your whole structure is organized and addressing the patterns that create dysfunction.
            </p>
            <p 
              className="text-lg text-neutralDark/80 leading-relaxed mb-4 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-7px) rotate(-0.3deg)',
              }}
            >
              We start with the foundation-your feet, your legs, your pelvis. Then we work up through your core, your spine, your shoulders, your neck. Each session builds on the last. Each release creates space for the next release. We're not chasing symptoms-we're reorganizing your entire structure.
            </p>
            <p 
              className="text-lg text-neutralDark/80 leading-relaxed transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(8px) rotate(0.5deg)',
              }}
            >
              And because everything is connected, when we release restrictions in one area, other areas can finally let go of their compensations. Your shoulder can relax because your pelvis is aligned. Your neck can release because your core is supporting you. Your whole body finds its natural alignment.
            </p>
          </div>

          {/* The Reality */}
          <div 
            className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border-2 border-primary/20 transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(9px) rotate(0.6deg)',
            }}
          >
            <h3 
              className="text-3xl font-heading text-primary mb-6 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-6px) rotate(-0.4deg)',
              }}
            >
              The Reality: There's No Magic Button
            </h3>
            <p 
              className="text-lg text-neutralDark/80 leading-relaxed mb-4 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(7px) rotate(0.3deg)',
              }}
            >
              There's no button to fix your body's alignment. There's no quick fix. There's no single treatment that addresses everything. But there is a systematic approach that understands how your body actually works.
            </p>
            <p 
              className="text-lg text-neutralDark/80 leading-relaxed mb-4 transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-5px) rotate(-0.2deg)',
              }}
            >
              Structural Integration recognizes that your body is a system. That when one part moves, everything else responds. That true alignment comes from addressing the whole, not just the parts. That lasting change requires understanding the patterns, not just treating the symptoms.
            </p>
            <p 
              className="text-lg text-neutralDark/80 leading-relaxed font-medium transition-all duration-1000"
              style={{
                transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(10px) rotate(0.7deg)',
              }}
            >
              It's not as simple as clicking a button. But it's more effective. Because it works with how your body actually functions, not how we wish it would.
            </p>
          </div>

          {/* After alignment message */}
          {isAligned && (
            <div className="bg-gradient-to-br from-sage/10 to-accent/10 border border-sage/20 rounded-2xl p-8 my-10 transition-all duration-1000">
              <h3 className="text-3xl font-heading text-neutralDark mb-6">
                Notice the Difference?
              </h3>
              <p className="leading-relaxed mb-4 text-lg text-neutralDark/80">
                When you clicked that button, everything snapped into alignment. The discomfort disappeared. The page became easier to read. Your eyes stopped trying to compensate for the misalignment.
              </p>
              <p className="leading-relaxed mb-4 text-lg text-neutralDark/80">
                Imagine if there was a similar button for your body. One click, and your shoulders level. Your hips align. Your head sits where it should. The tension releases. Everything finds its natural place.
              </p>
              <p className="leading-relaxed text-lg text-neutralDark/80 font-medium">
                There isn't a magic button. But there is Structural Integration-a systematic approach that understands how your body actually works. That recognizes when one part moves, everything else responds. That addresses the whole, not just the parts. That creates lasting alignment by working with your body's interconnected nature, not against it.
              </p>
            </div>
          )}

        </div>
      </div>

      {/* CTA */}
      <div 
        className="bg-offWhite py-20 px-4 transition-all duration-1000"
        style={{
          transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-7px) rotate(-0.4deg)',
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h3 
            className="text-3xl font-heading text-primary mb-6 transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(5px) rotate(0.3deg)',
            }}
          >
            Ready to Address Your Whole Body?
          </h3>
          <p 
            className="text-lg text-neutralDark/80 mb-8 leading-relaxed transition-all duration-1000"
            style={{
              transform: isAligned ? 'translateX(0) rotate(0deg)' : 'translateX(-4px) rotate(-0.2deg)',
            }}
          >
            Book a free consultation to learn how Structural Integration addresses your entire structure, not just isolated symptoms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to="/consult"
              variant="accent"
              size="lg"
              className="font-bold"
            >
              Book Free Consultation
            </Button>
            <Button
              to="/what-is-structural-integration"
              variant="outline"
              size="lg"
            >
              Learn More About SI
            </Button>
          </div>
          
          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/what-is-structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                What is Structural Integration
              </Link>
              <Link to="/posture-correction" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Posture Correction
              </Link>
              <Link to="/chronic-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Chronic Pain Relief
              </Link>
              <Link to="/fascial-release" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Fascial Release
              </Link>
              <Link to="/santa-cruz-structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Santa Cruz SI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default BodyAlignment;

