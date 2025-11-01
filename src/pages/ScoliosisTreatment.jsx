import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';

function ScoliosisTreatment() {
  return (
    <PageLayout>
      <SEO 
        title="Scoliosis Treatment Santa Cruz | Structural Integration for Curves"
        description="Non-surgical scoliosis treatment through Structural Integration and movement training. Reduce pain, improve alignment, and enhance function in Santa Cruz."
        keywords="scoliosis treatment santa cruz, scoliosis pain relief, structural scoliosis, functional scoliosis, spinal curves, scoliosis exercises"
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Scoliosis Treatment"
        subtitle="Working with your body, not against it"
      />

      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              You Have Scoliosis. But That Doesn't Mean You Have to Hurt.
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You've known about your curve for years. Maybe since childhood. Maybe discovered it as an adult. You've been told "just live with it" or "surgery is your only option." You deal with chronic back pain, uneven shoulders, that persistent one-sided tension.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You wonder if your curve is getting worse. You're tired of always feeling crooked. Standard treatments (PT, chiropractic) help temporarily, but nothing seems to really address the whole-body compensation patterns your scoliosis creates.
            </p>
            <p className="text-xl text-accent font-semibold">
              Here's what I know: While we can't "cure" structural scoliosis, we can dramatically improve how your body functions with it.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Structural vs. Functional Scoliosis
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Structural Scoliosis
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  Actual bony rotation and curvature of the spine. This is what most people mean by "scoliosis." The vertebrae themselves are rotated and wedged.
                </p>
                <ul className="space-y-2 text-neutralDark/80 text-sm">
                  <li>• Idiopathic (unknown cause, develops in childhood/adolescence)</li>
                  <li>• Congenital (born with it)</li>
                  <li>• Neuromuscular (from conditions like CP or MD)</li>
                  <li>• Degenerative (develops with aging)</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Functional Scoliosis
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  A curve caused by something else (leg length discrepancy, muscle imbalances, etc.). The spine itself is structurally normal.
                </p>
                <ul className="space-y-2 text-neutralDark/80 text-sm">
                  <li>• Caused by leg length difference</li>
                  <li>• Muscle spasm or pain causing guarding</li>
                  <li>• Postural habits</li>
                  <li>• Often reversible when underlying cause is addressed</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-neutralDark/80 mt-6 leading-relaxed">
              <strong className="text-neutralDark">Important:</strong> Both types benefit from bodywork and movement training, but functional scoliosis often responds more dramatically since the underlying structure is normal.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              The Real Problem with Scoliosis: Compensation Patterns
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              Whether your curve is structural or functional, your entire body compensates around it. One side gets chronically tight. The other side becomes weak and overstretched. You develop rotation patterns. Your ribs become asymmetric. Your hips compensate. Your neck adapts.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Chronic One-Sided Tension
                </h3>
                <p className="text-neutralDark/80">
                  The concave side of your curve gets compressed and tight. Muscles on this side are constantly working to stabilize the curve. This creates chronic pain and restriction.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Weakness on the Other Side
                </h3>
                <p className="text-neutralDark/80">
                  The convex side is overstretched and often weak. These muscles can't properly support your spine, perpetuating the imbalance.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Rotation and Asymmetry
                </h3>
                <p className="text-neutralDark/80">
                  Your ribcage rotates with the spinal curve. One shoulder sits higher. Your hips compensate. You feel twisted and crooked. This affects breathing, core stability, and how you move.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Progressive Stiffness
                </h3>
                <p className="text-neutralDark/80">
                  Over time, fascia adapts to the curved position, becoming dense and restricted. This locks in the compensation patterns and makes movement more difficult.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              My Approach to Scoliosis
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  1. Release Fascial Restrictions
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through Structural Integration:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Address chronic tension on the tight side</li>
                  <li>• Release deep back and rib restrictions</li>
                  <li>• Work entire fascial system, not just the curve</li>
                  <li>• Free up ribcage for better breathing</li>
                  <li>• Create more symmetry in tissue quality</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  2. Build Balanced Strength
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Movement training to support your spine:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Strengthen weak, overstretched side</li>
                  <li>• Improve core stability (crucial for scoliosis)</li>
                  <li>• Work on controlled rotation</li>
                  <li>• Build strength in corrected positions</li>
                  <li>• Train asymmetrically when needed</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  3. Improve Movement Patterns
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Teach better breathing (often impaired by rib rotation)</li>
                  <li>• Address compensatory movement patterns</li>
                  <li>• Improve postural awareness</li>
                  <li>• Practice elongation and decompression</li>
                  <li>• Make daily activities easier and less painful</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  4. Give You Tools for Self-Care
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Stretches and releases for tight side</li>
                  <li>• Strengthening for weak side</li>
                  <li>• Breathing practices</li>
                  <li>• Positioning strategies for pain relief</li>
                  <li>• How to maintain progress between sessions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What About Surgery?
            </h2>
            
            <div className="space-y-4 text-lg text-neutralDark/80">
              <p>
                Spinal fusion surgery is typically recommended for curves over 45-50 degrees or curves that are rapidly progressing. It fuses vertebrae together with metal rods, stopping progression but eliminating movement in that area.
              </p>
              <p>
                <strong className="text-neutralDark">Before considering surgery:</strong>
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Have you truly optimized your body's function around the curve?</li>
                <li>• Are you doing comprehensive bodywork and specific strengthening?</li>
                <li>• Is the pain actually from the curve, or from compensation patterns we can address?</li>
              </ul>
              <p className="mt-4">
                Many people with significant curves (20-40 degrees) live pain-free and fully functional lives with proper body work and training. Surgery should be a last resort, not a first option.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Changes Look Like
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ Significant pain reduction</div>
              <div>✓ Less one-sided tension</div>
              <div>✓ Improved breathing capacity</div>
              <div>✓ Better posture and alignment</div>
              <div>✓ More symmetrical movement</div>
              <div>✓ Increased flexibility</div>
              <div>✓ Stronger, more stable core</div>
              <div>✓ Feeling less "crooked"</div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Realistic Expectations
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              I'm not going to tell you I can eliminate your structural scoliosis. The bony changes are there. But I can absolutely help you function better, hurt less, and move more freely within your body's structure.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Many people with scoliosis live completely pain-free, active lives. The curve doesn't have to limit you. Let's work with what you've got and optimize it.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/packages" variant="outline" size="lg" fullWidth>
              View Programs
            </Button>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default ScoliosisTreatment;

