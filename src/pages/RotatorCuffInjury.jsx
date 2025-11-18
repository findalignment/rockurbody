import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import AvailableLocations from '../components/AvailableLocations';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function RotatorCuffInjury() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Rotator Cuff Injury', url: '/rotator-cuff-injury' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Rotator Cuff Injury Treatment Santa Cruz | Shoulder Rehabilitation"
        description="Comprehensive rotator cuff injury treatment and rehabilitation. Address tears, impingement, and chronic shoulder issues through Structural Integration and movement training in Santa Cruz."
        keywords="rotator cuff injury santa cruz, rotator cuff tear, shoulder impingement, rotator cuff rehabilitation, shoulder injury treatment"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Rotator Cuff Injury Treatment"
        subtitle="Strengthen what's weak, release what's tight, address what needs work"
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Your Shoulder Hurts. Now What?
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Pain when you reach overhead. Weakness in your shoulder. Can't sleep on that side. Reaching behind your back hurts. Maybe you got an MRI that said "rotator cuff tear" or "impingement" or "tendinosis." Your doctor said physical therapy or surgery.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You're trying PT. Some exercises help, some make it worse. Progress is slow. You're wondering if you need surgery, or if this is just permanent damage you'll have to live with.
            </p>
            <p className="text-xl text-accent font-semibold">
              Most rotator cuff issues don't need surgery. They need the right combination of manual work and proper strengthening.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Is Your Rotator Cuff?
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              Your rotator cuff is a group of four muscles and tendons that surround your shoulder joint. They stabilize your shoulder and control rotation. Together, they're critical for almost all shoulder movements.
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  The Four Muscles:
                </h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• <strong>Supraspinatus:</strong> Initiates arm abduction (lifting arm to side). Most commonly injured.</li>
                  <li>• <strong>Infraspinatus:</strong> External rotation (rotating arm outward). Second most commonly injured.</li>
                  <li>• <strong>Teres Minor:</strong> External rotation and stability. Rarely injured alone.</li>
                  <li>• <strong>Subscapularis:</strong> Internal rotation (rotating arm inward). Often overlooked but frequently tight.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Types of Rotator Cuff Injuries
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Rotator Cuff Tendinitis / Tendinosis
                </h3>
                <p className="text-neutralDark/80">
                  Inflammation or degeneration of the rotator cuff tendons. Often caused by overuse, poor mechanics, or impingement. This is the most common rotator cuff issue and responds very well to conservative treatment.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Shoulder Impingement
                </h3>
                <p className="text-neutralDark/80">
                  When your rotator cuff tendons get pinched between bones during overhead movements. Usually caused by poor scapular positioning, tight internal rotators, or weak rotator cuff muscles. Creates a cycle of inflammation and pain.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Partial Thickness Tear
                </h3>
                <p className="text-neutralDark/80">
                  A partial tear of the tendon. Can be on the top (bursal side) or bottom (articular side). Many partial tears heal with proper rehab. Surgery is usually not needed unless the tear is large or not responding to conservative treatment.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Full Thickness Tear
                </h3>
                <p className="text-neutralDark/80">
                  Complete tear through the tendon. Small tears may still heal with rehab. Larger tears, especially in younger, active people, may eventually need surgery. But even full thickness tears benefit from conservative treatment first, and many people function fine without surgery.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Rotator Cuff Strain
                </h3>
                <p className="text-neutralDark/80">
                  Muscle strain without tendon damage. Usually acute injury from lifting, throwing, or sudden movement. Heals relatively quickly with proper care.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Why Rotator Cuff Injuries Happen
            </h2>

            <div className="space-y-4 text-lg text-neutralDark/80">
              <p>
                <strong className="text-neutralDark">Poor scapular mechanics:</strong> Your shoulder blade (scapula) is the foundation for your rotator cuff. If your scapula doesn't move properly (often because of weak serratus anterior or lower traps), your rotator cuff gets overloaded and pinched. This is the #1 cause of chronic rotator cuff issues.
              </p>
              <p>
                <strong className="text-neutralDark">Tight chest and front shoulder:</strong> Sitting, desk work, and life pulls you forward. Your chest (pec major and minor) gets tight, your front shoulder (subscapularis) gets tight, and your shoulder joint sits forward in the socket. This creates impingement and overloads the posterior rotator cuff.
              </p>
              <p>
                <strong className="text-neutralDark">Weak rotator cuff:</strong> Your rotator cuff muscles might be weak from disuse, poor training, or compensation patterns. When they can't stabilize the shoulder properly, larger muscles (like deltoid) take over, creating poor mechanics and injury.
              </p>
              <p>
                <strong className="text-neutralDark">Overuse without proper strength:</strong> Repetitive overhead activity (throwing, swimming, overhead pressing) without adequate rotator cuff strength creates wear and tear that eventually breaks down the tendons.
              </p>
              <p>
                <strong className="text-neutralDark">Age and degeneration:</strong> Rotator cuff tendons naturally degenerate with age. By 60, many people have some degree of rotator cuff wear or small tears, even without symptoms. This is why proper mechanics and strength become even more critical as you age.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              My Approach to Rotator Cuff Recovery
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  1. Release What's Tight
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through Structural Integration:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Deep work on chronically tight chest (pec major and minor)</li>
                  <li>• Release subscapularis (often very tight and limiting)</li>
                  <li>• Address tight lats pulling the shoulder down and back</li>
                  <li>• Free up fascial restrictions around entire shoulder complex</li>
                  <li>• Work the neck and upper back (connected to shoulder function)</li>
                </ul>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  2. Fix Scapular Mechanics
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Your shoulder blade must move properly:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Strengthen serratus anterior (critical for scapular stability)</li>
                  <li>• Build lower and mid trap strength</li>
                  <li>• Reduce upper trap dominance</li>
                  <li>• Teach proper scapular positioning and movement</li>
                  <li>• Integrate scapular control into functional movements</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  3. Strengthen the Rotator Cuff Properly
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Progressive, intelligent strengthening:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Start with isometrics (no movement, just tension)</li>
                  <li>• Progress to light resistance rotational work</li>
                  <li>• Build endurance first, then strength</li>
                  <li>• Address all four rotator cuff muscles</li>
                  <li>• Integrate into functional patterns</li>
                  <li>• Progress to overhead movements when ready</li>
                </ul>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  4. Restore Full Function
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Improve shoulder mobility in all planes</li>
                  <li>• Rebuild confidence in the shoulder</li>
                  <li>• Return to activities you love</li>
                  <li>• Prevent re-injury through proper mechanics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Do You Need Surgery?
            </h2>
            
            <div className="space-y-4 text-lg text-neutralDark/80">
              <p>
                <strong className="text-neutralDark">Most rotator cuff issues don't need surgery.</strong> Studies show that many partial tears and even some full thickness tears respond well to conservative treatment. Surgery should be considered if:
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Large or massive tear (especially in younger, active people)</li>
                <li>• Significant weakness that doesn't improve with rehab</li>
                <li>• Acute traumatic tear (sudden, complete tear from injury)</li>
                <li>• Failed conservative treatment (6+ months of proper rehab)</li>
              </ul>
              <p className="mt-4">
                <strong className="text-neutralDark">Even if you eventually need surgery,</strong> pre-hab (strengthening before surgery) improves outcomes. Starting with conservative treatment is almost always the right move.
              </p>
              <p>
                <strong className="text-neutralDark">If you've already had surgery,</strong> comprehensive bodywork and proper strengthening are critical for full recovery and preventing issues on the other side.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Recovery Timeline
            </h2>
            
            <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
              <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
                <strong className="text-neutralDark">Tendinitis/Impingement:</strong> 6-12 weeks with proper treatment
              </p>
              <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
                <strong className="text-neutralDark">Partial tear:</strong> 3-6 months for significant improvement
              </p>
              <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
                <strong className="text-neutralDark">Full thickness tear (conservative):</strong> 6-12 months to maximize function
              </p>
              <p className="text-lg text-neutralDark/80 leading-relaxed">
                <strong className="text-neutralDark">Post-surgery:</strong> 6-12 months for full recovery
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Recovery Looks Like
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ Pain-free overhead reaching</div>
              <div>✓ Full shoulder strength restored</div>
              <div>✓ Sleep comfortably on that side</div>
              <div>✓ Return to throwing, lifting, swimming</div>
              <div>✓ Better shoulder mechanics</div>
              <div>✓ Reduced risk of re-injury</div>
              <div>✓ Confidence in your shoulder</div>
              <div>✓ No limitations in daily activities</div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz Active People
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Whether you're a surfer, swimmer, climber, or just someone who wants their shoulder to work properly, rotator cuff injuries don't have to be permanent. With the right combination of hands-on work and intelligent strengthening, most people make full recoveries. Let's get your shoulder back.
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

          {/* Available in Your Area */}
          <AvailableLocations serviceName="rotator cuff injury treatment" />

          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Pain Relief Hub
              </Link>
              <Link to="/shoulder-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Shoulder Pain Relief
              </Link>
              <Link to="/frozen-shoulder" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Frozen Shoulder
              </Link>
              <Link to="/injury-recovery" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Injury Recovery
              </Link>
              <Link to="/sports-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Sports Performance
              </Link>
              <Link to="/surfers" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                For Surfers
              </Link>
              <Link to="/climbers" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                For Climbers
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

export default RotatorCuffInjury;

