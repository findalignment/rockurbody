import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function AchillesTendonitis() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Achilles Tendonitis', url: '/achilles-tendonitis' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Achilles Tendonitis Treatment Santa Cruz | Heel Pain Relief"
        description="Effective Achilles tendonitis treatment for runners and athletes. Address chronic Achilles pain through Structural Integration and movement training in Santa Cruz."
        keywords="achilles tendonitis santa cruz, achilles tendinitis, achilles pain, achilles injury, heel pain treatment, achilles tendinosis"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Achilles Tendonitis Treatment"
        subtitle="Your Achilles hurts. Let's address why."
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              That Painful, Angry Tendon Behind Your Heel
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Pain in your Achilles tendon. Worse in the morning or after sitting. Gets better as you warm up, then worse again after activity. Maybe it's tender to touch. Maybe it's swollen. You've tried rest, ice, stretching. The pain keeps coming back.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You're worried about it rupturing. You're frustrated because you can't run, can't train, can't do the activities you love. You've been told to rest, but rest alone isn't fixing it. You're wondering if this is permanent.
            </p>
            <p className="text-xl text-accent font-semibold">
              Achilles tendonitis doesn't respond to rest alone. It needs load management and addressing what caused it in the first place.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Tendonitis vs. Tendinosis
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              Most chronic Achilles pain is actually <strong>tendinosis</strong>, not tendonitis. Understanding the difference matters for treatment.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Tendonitis (Acute)
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  True inflammation of the tendon. Happens with sudden injury or acute overload. Recent onset (days to weeks).
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Treatment:</strong> Rest, ice, anti-inflammatories work here
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Tendinosis (Chronic)
                </h3>
                <p className="text-neutralDark/80 mb-3">
                  Degeneration and poor healing of the tendon. Little actual inflammation. Chronic problem (months to years).
                </p>
                <p className="text-neutralDark/70 text-sm">
                  <strong>Treatment:</strong> Loading (eccentric exercises), addressing causes, patience
                </p>
              </div>
            </div>

            <p className="text-lg text-neutralDark/80 mt-6 leading-relaxed">
              If your Achilles pain has been going on for more than 6 weeks, you likely have tendinosis. This is why rest and ice aren't working. Tendinosis needs controlled loading to stimulate proper healing.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Why Your Achilles Hurts
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Tight, Overworked Calves
                </h3>
                <p className="text-neutralDark/80">
                  Your Achilles is the tendon that connects your calf muscles (gastrocnemius and soleus) to your heel bone. If your calves are chronically tight (they are for most people), they pull constantly on the Achilles. Add running, jumping, or sudden load increases, and you overload an already stressed tendon.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Limited Ankle Mobility
                </h3>
                <p className="text-neutralDark/80">
                  If your ankle doesn't move through proper range (dorsiflexion), your Achilles has to work harder with every step. Limited ankle mobility also changes your running mechanics, putting more stress on the Achilles.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Training Errors
                </h3>
                <p className="text-neutralDark/80">
                  Too much too soon. Sudden increases in mileage, intensity, or hill work. Change in footwear (especially to minimalist shoes without proper transition). These overwhelm the Achilles before it can adapt.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Poor Running Mechanics
                </h3>
                <p className="text-neutralDark/80">
                  Excessive heel striking, overstriding, or poor foot/ankle mechanics increase Achilles load with every step. Multiply that by thousands of steps per run, and you create chronic overload.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Weak Intrinsic Foot Muscles
                </h3>
                <p className="text-neutralDark/80">
                  If your foot muscles are weak (common from years of supportive shoes), your calves and Achilles have to work harder to stabilize your foot. This creates chronic overload.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Hip and Knee Issues
                </h3>
                <p className="text-neutralDark/80">
                  How your hip and knee move affects forces at your ankle and Achilles. Poor hip extension, weak glutes, or knee tracking issues can all contribute to Achilles problems.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              My Approach to Achilles Tendonitis
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  1. Release the Entire Posterior Chain
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through Structural Integration:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Deep calf work (gastrocnemius and soleus)</li>
                  <li>• Release tight Achilles and surrounding tissue</li>
                  <li>• Address plantar fascia (connected to Achilles via fascia)</li>
                  <li>• Work tight hamstrings pulling on the system</li>
                  <li>• Free up ankle joint restrictions</li>
                  <li>• Improve fascial quality throughout lower leg</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  2. Eccentric Loading (The Gold Standard)
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Progressive, controlled loading to stimulate tendon healing:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Eccentric calf raises (lowering phase emphasized)</li>
                  <li>• Both straight leg (gastrocnemius) and bent knee (soleus)</li>
                  <li>• Progressive resistance as tolerated</li>
                  <li>• Daily loading protocol (not rest)</li>
                  <li>• Tendinosis needs load to heal properly</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  3. Improve Ankle Mobility and Foot Function
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Restore ankle dorsiflexion</li>
                  <li>• Strengthen intrinsic foot muscles</li>
                  <li>• Improve foot and ankle control</li>
                  <li>• Address pronation or supination issues</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  4. Fix Running Mechanics
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Reduce excessive heel striking</li>
                  <li>• Improve hip extension in stride</li>
                  <li>• Better cadence and foot strike</li>
                  <li>• Address contributing factors up the chain</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  5. Smart Return to Activity
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Gradual load progression</li>
                  <li>• Monitor symptoms (some discomfort OK)</li>
                  <li>• Cross-training to maintain fitness</li>
                  <li>• Patience with the healing timeline</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What About Rest, Ice, Orthotics?
            </h2>
            
            <div className="space-y-4 text-lg text-neutralDark/80">
              <p>
                <strong className="text-neutralDark">Complete rest:</strong> Helps acute tendonitis but doesn't resolve chronic tendinosis. In fact, complete rest can make tendinosis worse. Tendons need load to heal, just controlled, progressive load.
              </p>
              <p>
                <strong className="text-neutralDark">Ice:</strong> May reduce pain temporarily but doesn't address the underlying tendon degeneration. Not harmful, but not a solution.
              </p>
              <p>
                <strong className="text-neutralDark">Heel lifts:</strong> Can temporarily reduce Achilles strain but don't resolve the problem and may create dependence. Use short-term if needed, not long-term.
              </p>
              <p>
                <strong className="text-neutralDark">Orthotics:</strong> May help if you have significant foot mechanics issues, but address foot strength and mechanics first. Orthotics should support your rehab, not replace it.
              </p>
              <p>
                <strong className="text-neutralDark">Cortisone injections:</strong> Strongly not recommended for Achilles. Risk of rupture. The temporary pain relief isn't worth the risk.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Recovery Timeline
            </h2>
            
            <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
              <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
                <strong className="text-neutralDark">Acute tendonitis (recent onset):</strong> 4-6 weeks with proper treatment
              </p>
              <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
                <strong className="text-neutralDark">Chronic tendinosis (3-6 months of symptoms):</strong> 3-4 months of consistent work
              </p>
              <p className="text-lg text-neutralDark/80 leading-relaxed">
                <strong className="text-neutralDark">Severe, longstanding tendinosis:</strong> 6-12 months to fully resolve
              </p>
              <p className="text-lg text-neutralDark/80 mt-6 leading-relaxed">
                <strong>Important:</strong> Tendinosis is slow to heal because tendons have poor blood supply. Patience and consistency with eccentric loading are key. You won't heal this in 2 weeks.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Recovery Looks Like
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ No more morning pain</div>
              <div>✓ Return to running pain-free</div>
              <div>✓ Able to jump and push off</div>
              <div>✓ No tenderness to touch</div>
              <div>✓ Better ankle mobility</div>
              <div>✓ Stronger calves and feet</div>
              <div>✓ Improved running mechanics</div>
              <div>✓ Confidence in your Achilles</div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz Runners and Athletes
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Whether you're trail running in the redwoods, surfing at Pleasure Point, or just want to walk without pain, Achilles tendonitis doesn't have to sideline you permanently. With the right combination of hands-on work, eccentric loading, and addressing contributing factors, most people make full recoveries. Let's address your Achilles.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/packages" variant="outline" size="lg" fullWidth>
              View Recovery Programs
            </Button>
          </div>
          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Pain Relief Hub
              </Link>
              <Link to="/plantar-fasciitis" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Plantar Fasciitis
              </Link>
              <Link to="/bunion-foot-pain" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Bunion & Foot Pain
              </Link>
              <Link to="/knee-pain-treatment" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Knee Pain Treatment
              </Link>
              <Link to="/cyclists-and-runners" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Cyclists & Runners
              </Link>
              <Link to="/sports-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Sports Performance
              </Link>
              <Link to="/injury-recovery" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Injury Recovery
              </Link>
              <Link to="/mobility-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Mobility Training
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default AchillesTendonitis;
