import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function ActiveAging() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Active Aging', url: '/active-aging' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Active Aging Santa Cruz | Stay Strong, Mobile, & Independent"
        description="Movement therapy and bodywork for active seniors in Santa Cruz. Maintain mobility, reduce pain, and stay doing what you love at any age."
        keywords="active aging santa cruz, senior fitness, mobility for seniors, elderly bodywork, senior movement training, aging well santa cruz"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/approach-hero.jpg"
        title="Active Aging"
        subtitle="Stay strong, mobile, and independent at any age"
        alt="Active aging program using structural integration and movement training to maintain mobility and independence for seniors in Santa Cruz"
      />


      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Age is Just a Number. Movement is What Matters.
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You're in your 50s, 60s, 70s, or beyond. You live in Santa Cruz because you love being active.hiking, gardening, playing with grandkids, maybe still surfing or cycling. But lately, your body isn't keeping up with your spirit.
            </p>
            <ul className="space-y-3 text-lg text-neutralDark/80 mb-6">
              <li>• Getting up from a chair takes effort</li>
              <li>• Balance isn't what it used to be</li>
              <li>• Chronic aches and stiffness slow you down</li>
              <li>• You're afraid of losing your independence</li>
              <li>• Recovery from activities takes longer</li>
            </ul>
            <p className="text-xl text-accent font-semibold">
              You don't have to accept decline as inevitable.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Changes as We Age (And What We Can Do About It)
            </h2>
            <div className="space-y-4">
              <div>
                <strong className="text-neutralDark block mb-2">Loss of Mobility & Flexibility</strong>
                <p className="text-neutralDark/80">Fascia gets sticky and restricted. Joints lose range of motion. But targeted manual therapy can restore much of this lost mobility.</p>
              </div>
              <div>
                <strong className="text-neutralDark block mb-2">Decreased Balance & Coordination</strong>
                <p className="text-neutralDark/80">Your proprioception (body awareness) declines. But specific movement training can rebuild balance and prevent falls.</p>
              </div>
              <div>
                <strong className="text-neutralDark block mb-2">Chronic Pain & Stiffness</strong>
                <p className="text-neutralDark/80">Decades of compensation patterns create pain. Structural Integration addresses root causes, not just symptoms.</p>
              </div>
              <div>
                <strong className="text-neutralDark block mb-2">Reduced Strength & Endurance</strong>
                <p className="text-neutralDark/80">Muscle mass decreases, but functional strength training can maintain and even build strength at any age.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              How I Help Active Seniors Stay Active
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Restore Mobility Through Structural Integration
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Gentle, precise hands-on work that:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Releases fascial restrictions limiting your movement</li>
                  <li>• Improves joint mobility and flexibility</li>
                  <li>• Reduces chronic pain from old injuries or compensation</li>
                  <li>• Helps you stand taller and move with more ease</li>
                </ul>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Build Strength & Balance Through Movement Education
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Age-appropriate training that focuses on:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Functional movements for daily life (getting up, reaching, carrying)</li>
                  <li>• Balance training to prevent falls</li>
                  <li>• Core strength for stability</li>
                  <li>• Breathing practices for energy and stress reduction</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Maintain Your Independence
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  The goal isn't just pain relief.it's maintaining quality of life:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Continue doing activities you love</li>
                  <li>• Stay independent and self-sufficient</li>
                  <li>• Prevent injuries and falls</li>
                  <li>• Have energy to enjoy life</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Active Aging Clients Say
            </h2>
            <div className="space-y-6 italic text-lg text-neutralDark/80">
              <p className="border-l-4 border-sage pl-6">
                "At 68, I thought my hiking days were numbered. After 3 months of work with Rock, I'm back on the trails feeling stronger than I have in years."
              </p>
              <p className="border-l-4 border-accent pl-6">
                "I can get up from the floor to play with my grandkids without needing help. That's priceless."
              </p>
              <p className="border-l-4 border-primary pl-6">
                "My balance has improved so much. I'm not afraid of falling anymore, which means I'm more confident doing everything."
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Common Goals for Active Aging Clients
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">Daily Activities</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Get up from chairs/floor easily</li>
                  <li>• Reach overhead without pain</li>
                  <li>• Garden without back pain</li>
                  <li>• Walk without limping</li>
                  <li>• Climb stairs confidently</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">Recreation</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Keep hiking Santa Cruz trails</li>
                  <li>• Continue playing golf/tennis</li>
                  <li>• Stay cycling/swimming</li>
                  <li>• Travel without limitations</li>
                  <li>• Play with grandchildren</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">Independence</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Maintain self-sufficiency</li>
                  <li>• Prevent falls</li>
                  <li>• Drive safely</li>
                  <li>• Live in your own home</li>
                  <li>• Stay socially active</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">Quality of Life</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Reduce chronic pain</li>
                  <li>• Sleep better</li>
                  <li>• Have more energy</li>
                  <li>• Feel confident in your body</li>
                  <li>• Age with dignity</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16 border-l-4 border-accent pl-6">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Gentle, Respectful, Effective
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              I work at your pace. Sessions are adapted to your needs and comfort level. The work is challenging but never painful. You're always in control.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              My goal is to help you maintain independence, reduce pain, and keep doing what you love for as long as possible. You've earned the right to enjoy these years.let's make sure your body allows it.
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
              <Link to="/wellness" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Wellness Hub
              </Link>
              <Link to="/chronic-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Chronic Pain Relief
              </Link>
              <Link to="/balance-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Balance Training
              </Link>
              <Link to="/mobility-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Mobility Training
              </Link>
              <Link to="/posture-correction" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Posture Correction
              </Link>
              <Link to="/movement-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Movement Training Hub
              </Link>
              <Link to="/structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Structural Integration
              </Link>
              <Link to="/fascial-release" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Fascial Release
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default ActiveAging;
