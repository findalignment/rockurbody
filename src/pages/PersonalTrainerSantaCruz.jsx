import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function PersonalTrainerSantaCruz() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Movement Training', url: '/movement-training' },
    { name: 'Personal Trainer Santa Cruz', url: '/personal-trainer-santa-cruz' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Personal Trainer Santa Cruz | Movement Education & Functional Training"
        description="One-on-one movement training in Santa Cruz focused on how you move, not just exercises. Build strength that serves your life."
        keywords="personal trainer santa cruz, movement coach, functional training santa cruz, movement education, private training santa cruz"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Personal Training in Santa Cruz"
        subtitle="Movement that serves your life, not just the gym"
      />


      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              This Isn't Your Average Personal Training
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Most trainers count reps and make you sweat. That's fine if your goal is just to "get a workout." But what if you want something more meaningful?
            </p>
            <ul className="space-y-3 text-lg text-neutralDark/80 mb-6">
              <li>• To move without pain</li>
              <li>• To build strength that translates to real life</li>
              <li>• To prevent injuries, not create them</li>
              <li>• To understand your body, not just follow instructions</li>
              <li>• To move well for decades, not just look good for summer</li>
            </ul>
            <p className="text-xl text-accent font-semibold">
              That's what Movement Education is about.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Movement Education vs. Traditional Personal Training
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-4">
                  Traditional Training
                </h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Focus on exercises and reps</li>
                  <li>• Goal: Build muscle, lose weight</li>
                  <li>• You follow instructions</li>
                  <li>• Work harder, push through pain</li>
                  <li>• Results: Temporary fitness</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-4">
                  Movement Education
                </h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Focus on movement patterns and quality</li>
                  <li>• Goal: Move better, feel better, prevent injury</li>
                  <li>• You understand principles</li>
                  <li>• Work smarter, respect your body</li>
                  <li>• Results: Lasting movement competence</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What We Work On
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Fundamental Movement Patterns
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Squat, hinge, push, pull, carry, rotate.the movements you do every day. We make sure you do them well.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Core Integration & Breathing
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Real core strength isn't about crunches. It's about integrating your breath, pelvic floor, and deep stabilizers for effortless power.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Mobility & Flexibility
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Not just stretching. Active mobility that improves how you move through full ranges of motion with control.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Strength for Life
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Building strength in movement patterns that actually matter.picking things up, reaching overhead, getting up from the floor, carrying groceries.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Balance & Proprioception
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Improving your body's ability to know where it is in space and respond appropriately. Crucial for injury prevention.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Problem-Solving Your Issues
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Have a specific goal or limitation? We work together to figure out what's getting in the way and address it systematically.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Who This is For
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-neutralDark/80">
              <div>
                <strong className="block mb-2">Active People Who Want to Stay Active</strong>
                Surfers, cyclists, hikers, runners who want to prevent injuries and improve performance
              </div>
              <div>
                <strong className="block mb-2">People Recovering from Injury</strong>
                Ready to return to activity but want to do it intelligently to prevent re-injury
              </div>
              <div>
                <strong className="block mb-2">Desk Workers</strong>
                Need to counteract hours of sitting and rebuild functional movement
              </div>
              <div>
                <strong className="block mb-2">Active Seniors</strong>
                Want to maintain independence, mobility, and quality of life
              </div>
              <div>
                <strong className="block mb-2">People with Chronic Pain</strong>
                Need movement therapy alongside (or instead of) other treatments
              </div>
              <div>
                <strong className="block mb-2">Athletes</strong>
                Want to optimize movement efficiency and performance
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              How It Works
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  First Session: Assessment & Education
                </h3>
                <p className="text-neutralDark/80">
                  We'll discuss your goals, history, and current limitations. I'll assess how you move and identify what's getting in the way. You'll leave with clarity about your body and a plan forward.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Ongoing Sessions: Progressive Training
                </h3>
                <p className="text-neutralDark/80">
                  Each session builds on the last. We work on your specific needs.not a cookie-cutter program. You'll learn principles you can apply yourself, making you less dependent on me over time.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Session Options
                </h3>
                <ul className="space-y-1 text-neutralDark/80 ml-6">
                  <li>• 30-minute sessions (focused work on one issue)</li>
                  <li>• 60-minute sessions (comprehensive training)</li>
                  <li>• 90-minute sessions (deep dive with bodywork integration)</li>
                  <li>• Package deals available (5, 10, or 20 sessions)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16 border-l-4 border-accent pl-6">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Training Locations in Santa Cruz
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Sessions are one-on-one and can be held at my studio or, for local clients, outdoors at parks or beaches. I serve Santa Cruz County including Capitola, Aptos, Soquel, and surrounding areas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/packages" variant="outline" size="lg" fullWidth>
              View Training Packages
            </Button>
          </div>
          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/movement-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Movement Training Hub
              </Link>
              <Link to="/athletic-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Athletic Performance
              </Link>
              <Link to="/mobility-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Mobility Training
              </Link>
              <Link to="/core-strengthening" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Core Strengthening
              </Link>
              <Link to="/exercise-for-life" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Exercise for Life
              </Link>
              <Link to="/safe-gym-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Safe Gym Training
              </Link>
              <Link to="/what-is-movement-education" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                What Is Movement Education?
              </Link>
              <Link to="/sports-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Sports Performance
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default PersonalTrainerSantaCruz;
