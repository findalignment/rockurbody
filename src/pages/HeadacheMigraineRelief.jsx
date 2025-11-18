import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function HeadacheMigraineRelief() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Headache & Migraine Relief', url: '/headache-migraine-relief' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Headache and Migraine Relief Santa Cruz | Tension Headache Treatment"
        description="Natural headache and migraine relief through Structural Integration and bodywork. Address cervicogenic headaches, tension headaches, and chronic head pain in Santa Cruz."
        keywords="headache relief santa cruz, migraine treatment, tension headache, cervicogenic headache, chronic headaches, natural headache relief"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Headache & Migraine Relief"
        subtitle="Most headaches start in your neck and shoulders, not your head"
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              You Live with Headaches. You Shouldn't Have To.
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Tension headaches that start at the base of your skull. Migraines that wipe you out for days. That constant pressure behind your eyes. Headaches that get worse as the day goes on. Waking up with headaches. Headaches after working at your computer.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You've tried medication. It helps temporarily, but the headaches keep coming back. You've accepted this as your normal. Maybe you've been told it's stress (it partly is), but no one has addressed what's actually creating the tension.
            </p>
            <p className="text-xl text-accent font-semibold">
              Most chronic headaches have a physical, structural component that bodywork can address.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Types of Headaches We Can Help
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Cervicogenic Headaches
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  Headaches that originate from your neck. Often feel like they start at the base of your skull and radiate forward. May be one-sided. Neck movement or posture can trigger them.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Cause:</strong> Tight suboccipital muscles, upper cervical joint dysfunction, poor posture
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Tension Headaches
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  Feels like a tight band around your head. Dull, aching pain. Often gets worse throughout the day. Related to muscle tension in neck, shoulders, and jaw.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Cause:</strong> Chronic muscle tension, poor posture, stress, jaw clenching
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Migraines (with muscular component)
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  Severe, often one-sided throbbing pain. Can include nausea, light sensitivity, visual disturbances. While migraines have a neurological component, muscle tension in the neck often triggers or worsens them.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Trigger reduction:</strong> Releasing neck and jaw tension can reduce migraine frequency and severity
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Occipital Neuralgia
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  Sharp, shooting, electric-shock-like pain from the base of skull up over the head. Can feel like your scalp is on fire. Caused by irritation of occipital nerves.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Cause:</strong> Tight muscles compressing occipital nerves, often suboccipital muscles
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  TMJ-Related Headaches
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  Headaches at temples or sides of head. Often accompanied by jaw pain, clicking, or tension. Related to jaw clenching, grinding, or TMJ dysfunction.
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Cause:</strong> Jaw muscle tension, TMJ dysfunction, teeth grinding (bruxism)
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              The Physical Causes of Most Headaches
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Forward Head Posture
                </h3>
                <p className="text-neutralDark/80">
                  Your head weighs 10-12 pounds. For every inch your head sits forward of your shoulders, it adds 10 pounds of force on your neck muscles. Desk work creates chronic forward head posture. Your neck muscles are constantly working to hold your head up, creating massive tension at the base of your skull. This is the #1 cause of chronic headaches.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Tight Suboccipital Muscles
                </h3>
                <p className="text-neutralDark/80">
                  Four small muscles at the base of your skull (suboccipitals) connect your skull to your upper cervical vertebrae. When tight (which they are in almost everyone), they refer pain up over your head and into your eyes. They also compress the occipital nerves, creating sharp, shooting pains.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Upper Trapezius and Neck Tension
                </h3>
                <p className="text-neutralDark/80">
                  Chronically elevated and tight shoulders (upper traps) pull on your neck and skull. This creates the classic "tension headache" feeling. Stress makes you hike your shoulders up, compounding the problem.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Jaw Clenching and TMJ
                </h3>
                <p className="text-neutralDark/80">
                  Your jaw muscles (temporalis, masseter) attach near your temples. When you clench or grind your teeth (often unconsciously from stress), these muscles get tight and refer pain into your head. TMJ dysfunction creates headaches.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Upper Cervical Restrictions
                </h3>
                <p className="text-neutralDark/80">
                  Your top two cervical vertebrae (C1 and C2) have unique anatomy and lots of nerve connections. Restrictions here often refer pain up into your head. Poor posture and old whiplash injuries commonly affect this area.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Fascial Restrictions
                </h3>
                <p className="text-neutralDark/80">
                  Tight fascia throughout your neck, chest, and upper back creates pulling forces that eventually reach your head. Your whole system is connected. Restrictions anywhere up the chain can contribute to headaches.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              My Approach to Headache Relief
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  1. Release the Tension at the Source
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through hands-on Structural Integration:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Deep suboccipital release (often immediately reduces headache)</li>
                  <li>• Work tight upper traps and neck muscles</li>
                  <li>• Release jaw muscles (temporalis, masseter, pterygoids)</li>
                  <li>• Address fascial restrictions in neck, chest, upper back</li>
                  <li>• Free up cranial base and upper cervical spine</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  2. Fix Your Posture
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Addressing the root cause:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Improve forward head posture</li>
                  <li>• Strengthen deep neck flexors (often weak)</li>
                  <li>• Release tight chest pulling you forward</li>
                  <li>• Improve thoracic spine extension</li>
                  <li>• Teach proper ergonomics and positioning</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  3. Address Jaw Issues
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Release jaw muscles internally and externally</li>
                  <li>• Work TMJ directly</li>
                  <li>• Teach jaw relaxation techniques</li>
                  <li>• Address nighttime grinding if present</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  4. Give You Self-Care Tools
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Self-massage for suboccipitals</li>
                  <li>• Stretches for neck and shoulders</li>
                  <li>• Breathing exercises (stress reduction)</li>
                  <li>• Posture awareness practices</li>
                  <li>• Early intervention strategies when you feel a headache coming</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Changes When Headaches Stop
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ Fewer or no headaches</div>
              <div>✓ Less medication needed</div>
              <div>✓ Better focus and productivity</div>
              <div>✓ Improved sleep</div>
              <div>✓ No more missing work or activities</div>
              <div>✓ Less anxiety about when next headache will hit</div>
              <div>✓ More energy (not drained by pain)</div>
              <div>✓ Better quality of life</div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              When to See a Doctor First
            </h2>
            
            <div className="bg-white border-2 border-red-500 rounded-xl p-6">
              <p className="text-lg text-neutralDark/80 mb-3 leading-relaxed">
                <strong className="text-neutralDark">Seek immediate medical care if you have:</strong>
              </p>
              <ul className="space-y-2 text-neutralDark/80 ml-6">
                <li>• Sudden, severe headache ("thunderclap headache")</li>
                <li>• Headache with fever, stiff neck, confusion, or neurological symptoms</li>
                <li>• Headache after head injury</li>
                <li>• New headache pattern if you're over 50</li>
                <li>• Headache with vision changes, weakness, or difficulty speaking</li>
                <li>• Progressively worsening headaches</li>
              </ul>
              <p className="text-lg text-neutralDark/80 mt-4 leading-relaxed">
                These could indicate serious conditions requiring immediate evaluation. For chronic tension headaches and cervicogenic headaches that have been evaluated by a doctor, bodywork is highly effective.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz Headache Sufferers
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              If you've been living with chronic headaches and medication only provides temporary relief, addressing the physical, structural causes can create lasting change. Most people see significant reduction in headache frequency and intensity within 4-6 sessions. Let's get you out of pain.
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

          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Pain Relief Hub
              </Link>
              <Link to="/neck-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Neck Pain Relief
              </Link>
              <Link to="/tmj-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                TMJ Relief
              </Link>
              <Link to="/shoulder-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Shoulder Pain Relief
              </Link>
              <Link to="/posture-correction" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Posture Correction
              </Link>
              <Link to="/stress-anxiety-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Stress & Anxiety Relief
              </Link>
              <Link to="/desk-worker-wellness" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Desk Worker Wellness
              </Link>
              <Link to="/structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Structural Integration
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default HeadacheMigraineRelief;

