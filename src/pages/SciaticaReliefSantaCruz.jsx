import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema } from '../utils/structuredData';

function SciaticaReliefSantaCruz() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Sciatica Relief', url: '/sciatica-relief-santa-cruz' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Sciatica Relief Santa Cruz | Piriformis Syndrome & Nerve Pain Treatment"
        description="Natural relief from sciatica and nerve pain. Structural Integration addresses piriformis syndrome and root causes in Santa Cruz."
        keywords="sciatica relief santa cruz, sciatica treatment, piriformis syndrome, sciatic nerve pain, leg pain, hip pain radiating"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/hip-series-hero.jpg"
        title="Sciatica Relief"
        subtitle="Stop the shooting pain down your leg"
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              That Electric Shock Down Your Leg? Let's Fix It.
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Shooting pain from your butt down the back of your leg. Numbness, tingling, or that weird "electric" feeling. Sitting makes it worse. Sometimes standing makes it worse. Sometimes existing makes it worse.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You've been told it's "sciatica" (no kidding) or "pinched nerve" or "piriformis syndrome." Maybe you've had an MRI showing a bulging disc. But knowing what it's called doesn't make it stop hurting.
            </p>
            <p className="text-xl text-accent font-semibold">
              Here's what most people miss: Sciatica is a symptom, not a diagnosis. Something is irritating your sciatic nerve. Let's find out what.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What's Actually Causing Your Sciatica
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Piriformis Syndrome (Most Common)
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Your piriformis muscle (deep in your hip) is tight and angry. The sciatic nerve runs under it (or sometimes through it). When the piriformis gets tight, it compresses the nerve.
                </p>
                <p className="text-neutralDark/80">
                  <strong>Why it happens:</strong> Sitting too much, hip imbalances, weak glutes forcing piriformis to overwork
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Disc Bulge/Herniation
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  A disc in your lower back is pressing on the nerve root. This can cause classic sciatica symptoms.
                </p>
                <p className="text-neutralDark/80">
                  <strong>What helps:</strong> Decompressing the spine, improving core function, releasing hip and leg tension pulling on the spine
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  SI Joint Dysfunction
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Your sacroiliac joint (where your pelvis meets your spine) isn't moving properly. This can irritate nerve roots and create sciatica-like symptoms.
                </p>
                <p className="text-neutralDark/80">
                  <strong>What helps:</strong> Releasing the pelvis, balancing leg length, improving hip mechanics
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Tight Hip Rotators & Glute Imbalance
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Multiple deep hip muscles (gemelli, obturators, quadratus femoris) are restricted. They compress the area where the sciatic nerve passes through.
                </p>
                <p className="text-neutralDark/80">
                  <strong>What helps:</strong> Deep hip work, glute activation, restoring hip rotation
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Hamstring Referral (Pseudo-Sciatica)
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Sometimes what feels like sciatica is actually hamstring and posterior leg fascia that's super tight and referring pain.
                </p>
                <p className="text-neutralDark/80">
                  <strong>What helps:</strong> Fascial release of entire posterior chain, not just "stretching"
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              How I Address Sciatica
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Release Everything Compressing the Nerve
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through precise manual work, I release:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Piriformis and deep hip rotators</li>
                  <li>• Tight glutes putting pressure on the area</li>
                  <li>• Hamstrings and posterior leg fascia</li>
                  <li>• Lower back restrictions pulling on the spine</li>
                  <li>• Hip flexors creating pelvic imbalance</li>
                </ul>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Fix What's Causing the Compression
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  It's not enough to just release tight muscles. We need to address why they got tight:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Weak glutes forcing smaller muscles to overwork</li>
                  <li>• Poor sitting posture creating chronic compression</li>
                  <li>• Hip imbalances and rotation issues</li>
                  <li>• Core dysfunction affecting spinal stability</li>
                  <li>• Movement patterns that perpetuate the problem</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Prevent It From Coming Back
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  You'll learn:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• How to sit without aggravating your sciatic nerve</li>
                  <li>• Daily practices to keep hips and piriformis happy</li>
                  <li>• Glute strengthening that actually works</li>
                  <li>• Warning signs to catch flare-ups early</li>
                  <li>• Movements to avoid vs. movements that help</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
              <strong>Session 1:</strong> Usually you'll notice some relief immediately. Not always 100%, but enough to know we're on the right track.
            </p>
            <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
              <strong>Sessions 2-4:</strong> Progressive improvement. The electric shocks get less frequent, less intense. You start forgetting about it for hours at a time.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              <strong>Sessions 5+:</strong> We're working on prevention and addressing the root structural issues so it doesn't come back.
            </p>
          </div>

          <div className="mb-16 border-l-4 border-accent pl-6">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Real Talk About Disc Issues
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              If you have a confirmed disc herniation, I'm not going to magically put the disc back in place. But I can reduce the pressure on that area, improve your body's ability to compensate, and help you move in ways that don't aggravate it. Many people with disc issues live completely pain-free once they learn how to manage their structure.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              That said: If you have severe weakness, loss of bowel/bladder control, or progressively worsening symptoms . see a doctor first. I'm good, but I'm not magic.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/hip-series" variant="outline" size="lg" fullWidth>
              Learn About Hip Series
            </Button>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default SciaticaReliefSantaCruz;

