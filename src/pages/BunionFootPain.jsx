import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import AvailableLocations from '../components/AvailableLocations';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function BunionFootPain() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Bunion & Foot Pain', url: '/bunion-foot-pain' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Bunion and Foot Pain Treatment Santa Cruz | Foot Alignment"
        description="Natural bunion and foot pain treatment through Structural Integration. Address foot alignment, big toe pain, and chronic foot issues in Santa Cruz."
        keywords="bunion treatment santa cruz, foot pain, big toe pain, foot alignment, hallux valgus, natural bunion treatment"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Bunion & Foot Pain Treatment"
        subtitle="Your feet are your foundation. Let's improve them."
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              That Painful Bump on Your Big Toe
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              A bony bump at the base of your big toe. It hurts. It's getting worse. Shoes don't fit right. Walking becomes painful. Your big toe is angling toward your other toes. You've been told surgery is your only option.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Maybe you don't have a bunion yet, but your feet hurt constantly. Aching arches. Pain in the balls of your feet. Toes that feel cramped. Feet that get tired quickly. You're starting to avoid activities because your feet can't handle them.
            </p>
            <p className="text-xl text-accent font-semibold">
              Bunions and chronic foot pain are usually symptoms of poor foot mechanics. Fix the mechanics, reduce the pain, slow the progression.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Is a Bunion?
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              A bunion (hallux valgus) is a bony deformity where your big toe angles toward your other toes and a bump forms on the inside of your foot at the base of the big toe. This isn't just a bump that appeared out of nowhere. It's the result of years of poor foot mechanics, muscle imbalances, and structural issues.
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  What Actually Happens:
                </h3>
                <ul className="space-y-2 text-neutralDark/80 text-sm">
                  <li>• Your big toe (hallux) drifts outward toward your other toes</li>
                  <li>• The metatarsal bone behind it drifts inward</li>
                  <li>• This creates the characteristic bump</li>
                  <li>• The joint becomes misaligned and inflamed</li>
                  <li>• Over time, bone changes and arthritis develop</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Why Bunions Happen
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Weak, Dysfunctional Feet
                </h3>
                <p className="text-neutralDark/80">
                  Your feet have intrinsic muscles that should create and maintain your arch, control toe position, and stabilize during movement. Years of supportive shoes, lack of varied movement, and modern life have made most people's feet weak and unable to function properly. When your foot muscles don't work, your foot collapses and your big toe drifts.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Overpronation
                </h3>
                <p className="text-neutralDark/80">
                  When your foot rolls inward excessively during walking (overpronation), it creates forces that push your big toe outward. This is often caused by weak glutes and hips allowing your knee to collapse inward, which affects your foot position.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Tight Calves and Achilles
                </h3>
                <p className="text-neutralDark/80">
                  Limited ankle dorsiflexion (ankle bending) from tight calves forces your foot to compensate. Your foot pronates more to "find" the range your ankle can't provide. This excessive pronation contributes to bunion formation.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Poor Footwear
                </h3>
                <p className="text-neutralDark/80">
                  Narrow toe boxes squeeze your toes together. Heels pitch your weight forward onto your forefoot. Years of this footwear accelerates bunion formation. The shoes didn't cause the bunion (weak feet did), but they made it much worse.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Genetics
                </h3>
                <p className="text-neutralDark/80">
                  There is a genetic component. If your parents have bunions, you're more likely to develop them. But genetics loads the gun, your foot mechanics pull the trigger. Even with genetic predisposition, improving foot function can slow or prevent progression.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Hip and Knee Dysfunction
                </h3>
                <p className="text-neutralDark/80">
                  Weak hips and glutes allow your knee to collapse inward during walking and standing. This changes forces at your foot, contributing to pronation and bunion formation. Your bunion might actually start at your hip.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              My Approach to Bunions and Foot Pain
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  1. Release Restrictions Throughout the Foot
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through Structural Integration:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Deep work on tight, restricted foot muscles</li>
                  <li>• Release plantar fascia</li>
                  <li>• Free up toe joints (often very stiff)</li>
                  <li>• Address tight calves pulling on the system</li>
                  <li>• Work entire lower leg affecting foot mechanics</li>
                  <li>• Restore fascial sliding in the foot</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  2. Strengthen Intrinsic Foot Muscles
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Build foot strength and function:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Short foot exercise (arch strengthening)</li>
                  <li>• Toe spreading and control exercises</li>
                  <li>• Barefoot work (carefully progressed)</li>
                  <li>• Balance and single-leg stability</li>
                  <li>• Teach your feet to actually work</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  3. Address the Whole Chain
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Improve ankle mobility</li>
                  <li>• Strengthen glutes and hips (critical for foot mechanics)</li>
                  <li>• Fix knee tracking issues</li>
                  <li>• Work the entire kinetic chain, not just the foot</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  4. Footwear and Lifestyle Changes
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Wider toe box shoes (let your toes spread)</li>
                  <li>• Minimize heel height</li>
                  <li>• Consider toe spacers (can help realign)</li>
                  <li>• More barefoot time when appropriate</li>
                  <li>• Footwear that supports your rehab, not replaces it</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Can You Reverse a Bunion Without Surgery?
            </h2>
            
            <div className="space-y-4 text-lg text-neutralDark/80">
              <p>
                <strong className="text-neutralDark">Honestly? Probably not completely.</strong> Once significant bone changes have occurred, the bunion won't fully straighten without surgery. But that doesn't mean conservative treatment is pointless.
              </p>
              <p>
                <strong className="text-neutralDark">What you can do:</strong>
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Significantly reduce or eliminate pain</li>
                <li>• Slow or stop progression</li>
                <li>• Improve foot function and strength</li>
                <li>• Reduce inflammation around the joint</li>
                <li>• Avoid or delay surgery</li>
                <li>• Improve outcomes if you eventually need surgery</li>
              </ul>
              <p className="mt-4">
                <strong className="text-neutralDark">For early/mild bunions:</strong> You may see some positional improvement with aggressive toe spacing and strengthening. The earlier you catch it, the more you can change.
              </p>
              <p>
                <strong className="text-neutralDark">Surgery should be considered if:</strong> Severe pain that conservative treatment doesn't help, significant deformity limiting function, or arthritis making daily activities difficult. But try conservative treatment first.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Other Common Foot Issues We Address
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Metatarsalgia
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Pain in the ball of your foot. Often from weak foot muscles, poor footwear, or bunion-related mechanics.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Hammer Toes
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Toes that curl or bend abnormally. Often accompanies bunions. Caused by muscle imbalances in the foot.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Flat Feet / Fallen Arches
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Collapsed arches from weak intrinsic foot muscles. Often accompanies bunions and pronation issues.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Morton's Neuroma
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Nerve pain between your toes (usually 3rd and 4th). Sharp, burning, or numbness. Related to poor foot mechanics.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Better Feet Look Like
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ Reduced or no bunion pain</div>
              <div>✓ Better arch function</div>
              <div>✓ Stronger, more capable feet</div>
              <div>✓ Improved balance and stability</div>
              <div>✓ Walk without pain</div>
              <div>✓ More footwear options</div>
              <div>✓ Slowed bunion progression</div>
              <div>✓ Confidence in your foundation</div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz Active People
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Whether you're walking on the beach, hiking in the redwoods, or just want to get through your day without foot pain, your feet are your foundation. When they don't work right, everything up the chain suffers. Let's get your feet strong and functional again.
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

          {/* Available in Your Area */}
          <AvailableLocations serviceName="bunion and foot pain treatment" />

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
              <Link to="/achilles-tendonitis" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Achilles Tendonitis
              </Link>
              <Link to="/knee-pain-treatment" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Knee Pain Treatment
              </Link>
              <Link to="/back-pain-santa-cruz" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Back Pain Relief
              </Link>
              <Link to="/posture-correction" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Posture Correction
              </Link>
              <Link to="/structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Structural Integration
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

export default BunionFootPain;

