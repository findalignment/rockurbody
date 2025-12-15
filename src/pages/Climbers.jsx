import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function Climbers() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'For Climbers', url: '/climbers' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Bodywork for Climbers | Santa Cruz Boulder & Sport Climbing"
        description="Overcome finger pain, shoulder issues, and elbow tendonitis. Structural Integration for rock climbers in Santa Cruz."
        keywords="climber bodywork santa cruz, climbing injuries, finger pain, climbers elbow, shoulder pain climbing, boulder therapy"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/climbers-hero.jpg"
        title="For Climbers"
        subtitle="Climb stronger, recover faster, prevent injuries"
        alt="Structural integration and movement training for rock climbers to improve performance and prevent injuries in Santa Cruz"
      />


      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Climbing is Demanding. Your Body Needs Support.
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Whether you're bouldering at The Cave, sport climbing at the Quarry, or projecting routes outdoors.climbing beats up your body. The same issues keep limiting your progression:
            </p>
            <ul className="space-y-3 text-lg text-neutralDark/80">
              <li>• Finger pain and tendon issues</li>
              <li>• Climber's elbow (medial epicondylitis)</li>
              <li>• Shoulder impingement and instability</li>
              <li>• Tight hips limiting high steps</li>
              <li>• Lower back pain from dynamic moves</li>
              <li>• Neck tension from constantly looking up</li>
            </ul>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Common Climbing Injuries & Issues
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Finger & Hand Issues
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Pulley strains from crimp grips</li>
                  <li>• Tendonitis from overuse</li>
                  <li>• Decreased grip strength</li>
                  <li>• Forearm pump and fatigue</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Elbow Problems
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Climber's elbow (medial epicondylitis)</li>
                  <li>• Tennis elbow (lateral epicondylitis)</li>
                  <li>• Bicep tendon irritation</li>
                  <li>• Chronic forearm tightness</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Shoulder Issues
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Rotator cuff strains from big reaches</li>
                  <li>• Shoulder impingement</li>
                  <li>• Instability from overhead positions</li>
                  <li>• Shoulder pain on lockoffs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Core & Back
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Lower back pain from dynamic moves</li>
                  <li>• Hip flexor tightness limiting high steps</li>
                  <li>• Core weakness affecting stability</li>
                  <li>• Poor body tension</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              How I Help Climbers
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Address Overuse Patterns
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Climbing creates specific imbalances:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Release chronically tight forearms, chest, and lats</li>
                  <li>• Restore balance to overpowered pulling muscles</li>
                  <li>• Free up restricted shoulder mobility</li>
                  <li>• Address hip flexor tightness limiting high steps</li>
                </ul>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Improve Climbing-Specific Mobility
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Movement work focused on:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Shoulder mobility for reaching and mantling</li>
                  <li>• Hip flexibility for high steps and heel hooks</li>
                  <li>• Core integration for body tension</li>
                  <li>• Antagonist training to prevent imbalances</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Speed Recovery & Prevent Injury
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Practices that:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Reduce inflammation and tendon stress</li>
                  <li>• Improve recovery between sessions</li>
                  <li>• Identify early warning signs</li>
                  <li>• Keep you climbing long-term</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Climb Better, Not Just Pain-Free
            </h2>
            <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
              When your structure improves and imbalances correct, you don't just hurt less.you climb better:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-neutralDark/80">
              <div>✓ Greater reach without strain</div>
              <div>✓ Better body tension</div>
              <div>✓ Improved lockoff strength</div>
              <div>✓ More powerful movement</div>
              <div>✓ Better balance and control</div>
              <div>✓ Faster recovery between sessions</div>
              <div>✓ Reduced injury risk</div>
              <div>✓ Send harder, longer</div>
            </div>
          </div>

          <div className="mb-16 border-l-4 border-accent pl-6">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz Climbers
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Whether you're training at The Cave, climbing at the Quarry, or heading up to Castle Rock.I help Santa Cruz climbers overcome injuries, improve performance, and climb sustainably for decades. Let's make sure your body can keep up with your psych.
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
          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/sports-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Sports Performance Hub
              </Link>
              <Link to="/shoulder-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Shoulder Pain Relief
              </Link>
              <Link to="/rotator-cuff-injury" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Rotator Cuff Injury
              </Link>
              <Link to="/neck-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Neck Pain Relief
              </Link>
              <Link to="/back-pain-santa-cruz" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Back Pain Relief
              </Link>
              <Link to="/athletic-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Athletic Performance
              </Link>
              <Link to="/sports-injury-prevention" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Injury Prevention
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

export default Climbers;
