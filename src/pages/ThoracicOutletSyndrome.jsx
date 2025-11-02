import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';

function ThoracicOutletSyndrome() {
  return (
    <PageLayout>
      <SEO 
        title="Thoracic Outlet Syndrome Treatment Santa Cruz | TOS Relief"
        description="Comprehensive thoracic outlet syndrome (TOS) treatment. Address numbness, tingling, and nerve compression through Structural Integration in Santa Cruz."
        keywords="thoracic outlet syndrome santa cruz, TOS treatment, arm numbness, nerve compression, shoulder nerve pain, scalene muscles"
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Thoracic Outlet Syndrome"
        subtitle="Numbness, tingling, weird symptoms. Let's decompress."
      />

      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Numbness, Tingling, and Symptoms That Make No Sense
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Numbness or tingling in your hand, especially at night or when your arms are overhead. Weakness in your hand. Cold or discolored fingers. Pain in your shoulder, neck, or arm that's hard to pinpoint. Symptoms that come and go based on arm position.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You've been told it might be carpal tunnel, or maybe something with your neck. You've tried wrist braces, ergonomic keyboards, physical therapy. Nothing fully fixes it. The symptoms are weird, inconsistent, and frustrating.
            </p>
            <p className="text-xl text-accent font-semibold">
              If symptoms change with arm position (especially overhead), it might be thoracic outlet syndrome.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Is Thoracic Outlet Syndrome?
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              Thoracic outlet syndrome (TOS) happens when nerves or blood vessels get compressed as they pass from your neck through a narrow space (the thoracic outlet) on their way to your arm. This compression creates a constellation of symptoms that often get misdiagnosed.
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  The Thoracic Outlet:
                </h3>
                <p className="text-neutralDark/80 text-sm mb-3">
                  The space between your first rib and collarbone where nerves (brachial plexus) and blood vessels (subclavian artery and vein) pass through to reach your arm. Several muscles (scalenes, pec minor) surround this area. When these structures get tight or your posture shifts, the space narrows and compresses the nerves or vessels.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Three Types of TOS
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Neurogenic TOS (95% of cases)
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Compression of the brachial plexus (nerves going to your arm). Most common type.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Symptoms:</strong> Numbness, tingling, weakness in hand/arm, pain in neck/shoulder/arm, symptoms worse with arm overhead
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Venous TOS (3-4% of cases)
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Compression of the subclavian vein.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Symptoms:</strong> Arm swelling, bluish discoloration, heaviness, prominent veins, possible blood clot formation
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Arterial TOS (1% of cases)
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Compression of the subclavian artery. Rarest but most serious.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Symptoms:</strong> Cold, pale hand, weak pulse, pain with arm use, possible aneurysm formation. Needs medical evaluation.
                </p>
              </div>
            </div>

            <p className="text-lg text-neutralDark/80 mt-6 leading-relaxed">
              <strong className="text-neutralDark">Most of this page focuses on neurogenic TOS,</strong> which is what most people have and what responds best to conservative treatment.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Why TOS Happens
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Tight Scalene Muscles
                </h3>
                <p className="text-neutralDark/80">
                  Your scalenes (side neck muscles) attach to your first rib and lift it when you breathe. When they're chronically tight (common with forward head posture, desk work, stress), they compress the nerves passing between them. This is the most common cause of TOS.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Forward Head Posture
                </h3>
                <p className="text-neutralDark/80">
                  When your head sits forward, your neck muscles (including scalenes) have to work overtime to hold your head up. They become chronically tight and hypertonic. This narrows the thoracic outlet and compresses the nerves.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Tight Pec Minor
                </h3>
                <p className="text-neutralDark/80">
                  Your pec minor (small chest muscle under your pec major) can compress the brachial plexus if it's tight. Common with rounded shoulders and desk posture. This is sometimes called "pec minor syndrome" but it's a subset of TOS.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Elevated First Rib
                </h3>
                <p className="text-neutralDark/80">
                  Your first rib can get stuck in an elevated position (from trauma, breathing dysfunction, or tight scalenes). This narrows the space between your first rib and collarbone, compressing everything passing through.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Thoracic Spine Dysfunction
                </h3>
                <p className="text-neutralDark/80">
                  A stiff upper back changes how your shoulders and neck move. This can alter scalene tension and rib position, contributing to TOS.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Repetitive Overhead Activity
                </h3>
                <p className="text-neutralDark/80">
                  Jobs or sports requiring repeated overhead arm positions can irritate and compress the thoracic outlet structures. Common in painters, swimmers, baseball players, mechanics.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Trauma
                </h3>
                <p className="text-neutralDark/80">
                  Whiplash, clavicle fracture, or other neck/shoulder trauma can create scar tissue, alter mechanics, or directly damage structures in the thoracic outlet.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              My Approach to Thoracic Outlet Syndrome
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  1. Release the Compressing Structures
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through Structural Integration:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Deep scalene release (critical for TOS)</li>
                  <li>• Pec minor work</li>
                  <li>• Address entire chest and shoulder complex</li>
                  <li>• Release tight upper traps and levator scapulae</li>
                  <li>• Work fascial restrictions throughout neck and shoulder</li>
                  <li>• First rib mobilization if needed</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  2. Fix Your Posture
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Address the root cause:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Improve forward head posture</li>
                  <li>• Strengthen deep neck flexors (weak in most people)</li>
                  <li>• Release tight chest pulling you forward</li>
                  <li>• Improve thoracic spine extension</li>
                  <li>• Scapular stabilization</li>
                  <li>• Better ergonomics and daily positioning</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  3. Restore Proper Breathing
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Diaphragmatic breathing (not chest breathing)</li>
                  <li>• Reduce scalene overuse during breathing</li>
                  <li>• Improve ribcage mobility</li>
                  <li>• Your breathing pattern directly affects TOS</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  4. Nerve Gliding
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Specific exercises to help nerves move freely</li>
                  <li>• Reduce nerve irritation and adhesions</li>
                  <li>• Carefully progressed based on symptoms</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  5. Activity Modification
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Identify and modify aggravating positions</li>
                  <li>• Proper sleeping position (often a trigger)</li>
                  <li>• Workspace ergonomics</li>
                  <li>• Strategies for overhead activities</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              TOS vs. Carpal Tunnel vs. Cervical Radiculopathy
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
              These three conditions cause similar symptoms (numbness/tingling in hand/arm) and are often confused:
            </p>

            <div className="space-y-4">
              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Carpal Tunnel Syndrome
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Nerve compression at the wrist. Numbness in thumb, index, middle fingers. Worse at night or with wrist flexion. Shaking hand provides relief.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Cervical Radiculopathy
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Nerve compression in neck (often disc herniation). Sharp, shooting pain down arm. Numbness in specific dermatome pattern. Worse with neck movements.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Thoracic Outlet Syndrome
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Compression at thoracic outlet. Numbness in ring/pinky fingers often (ulnar distribution). Symptoms worse with arms overhead. Positional changes provide relief.
                </p>
              </div>
            </div>

            <p className="text-lg text-neutralDark/80 mt-6 leading-relaxed">
              <strong className="text-neutralDark">You can have more than one:</strong> It's possible to have TOS and carpal tunnel, or TOS and cervical issues. This is called "double crush syndrome." Proper evaluation is important.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              When to See a Doctor
            </h2>
            
            <div className="bg-white border-2 border-red-500 rounded-xl p-6">
              <p className="text-lg text-neutralDark/80 mb-3 leading-relaxed">
                <strong className="text-neutralDark">Seek medical evaluation if you have:</strong>
              </p>
              <ul className="space-y-2 text-neutralDark/80 ml-6">
                <li>• Sudden onset of severe symptoms</li>
                <li>• Arm swelling or discoloration</li>
                <li>• Significant weakness in your hand</li>
                <li>• Cold, pale hand with weak pulse</li>
                <li>• Progressive worsening despite treatment</li>
              </ul>
              <p className="text-lg text-neutralDark/80 mt-4 leading-relaxed">
                Venous and arterial TOS need medical intervention. Most neurogenic TOS responds well to conservative treatment, but proper diagnosis matters.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Recovery Timeline
            </h2>
            
            <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
              <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
                <strong className="text-neutralDark">Mild TOS (recent onset):</strong> 4-8 weeks with consistent treatment
              </p>
              <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
                <strong className="text-neutralDark">Moderate TOS (several months):</strong> 3-6 months
              </p>
              <p className="text-lg text-neutralDark/80 leading-relaxed">
                <strong className="text-neutralDark">Chronic TOS:</strong> 6-12 months of consistent work
              </p>
              <p className="text-lg text-neutralDark/80 mt-6 leading-relaxed">
                TOS can be stubborn because the underlying postural and mechanical issues take time to correct. But most people see significant improvement with proper treatment.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Recovery Looks Like
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ No more numbness or tingling</div>
              <div>✓ Full hand strength restored</div>
              <div>✓ Sleep without symptoms</div>
              <div>✓ Overhead activities pain-free</div>
              <div>✓ Better posture naturally</div>
              <div>✓ No cold/discolored fingers</div>
              <div>✓ Return to normal activities</div>
              <div>✓ Confidence in your body</div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz Desk Workers and Athletes
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Whether you're dealing with numbness from desk work, symptoms from overhead sports, or just trying to figure out what's wrong with your arm, TOS is treatable. Comprehensive hands-on work combined with postural correction can resolve most cases. Let's decompress that thoracic outlet.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/packages" variant="outline" size="lg" fullWidth>
              View Treatment Programs
            </Button>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default ThoracicOutletSyndrome;

