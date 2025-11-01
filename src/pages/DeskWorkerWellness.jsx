import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';

function DeskWorkerWellness() {
  return (
    <PageLayout>
      <SEO 
        title="Desk Worker Wellness Santa Cruz | Fix Tech Neck & Back Pain"
        description="Relief from desk job pain: tech neck, rounded shoulders, lower back issues. Structural Integration for remote workers and office professionals."
        keywords="desk job pain, tech neck, computer posture, office worker pain santa cruz, work from home pain, ergonomic therapy"
      />
      
      <PageHero 
        imageSrc="/approach-hero.jpg"
        title="Desk Worker Wellness"
        subtitle="Undo the damage of sitting all day"
      />

      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Your Job is Destroying Your Body
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Eight hours (or more) hunched over a laptop. Neck craned forward looking at screens. Shoulders rounded from typing. Lower back compressed from sitting.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You're working from home in Santa Cruz, supposedly living the dream. But your body feels like it's 20 years older than it is.
            </p>
            <ul className="space-y-3 text-lg text-neutralDark/80">
              <li>• Constant neck and shoulder tension</li>
              <li>• Headaches by end of day</li>
              <li>• Lower back pain from sitting</li>
              <li>• Forward head posture that won't correct</li>
              <li>• Stiff hips and tight chest</li>
              <li>• Can barely move after a full day of work</li>
            </ul>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              The Desk Job Damage Pattern
            </h2>
            <div className="space-y-4 text-lg text-neutralDark/80">
              <div>
                <strong className="text-neutralDark block mb-2">Tech Neck (Forward Head Posture)</strong>
                Looking at screens all day pulls your head forward, creating massive strain on your neck and upper back. For every inch your head moves forward, it adds 10 pounds of pressure.
              </div>
              <div>
                <strong className="text-neutralDark block mb-2">Rounded Shoulders</strong>
                Typing and mouse work shortens your chest muscles and lengthens your upper back, creating the classic "computer posture."
              </div>
              <div>
                <strong className="text-neutralDark block mb-2">Dead Glutes & Tight Hip Flexors</strong>
                Sitting turns off your glutes and shortens your hip flexors, creating lower back pain and poor posture.
              </div>
              <div>
                <strong className="text-neutralDark block mb-2">Shallow Breathing</strong>
                Collapsed chest = restricted breathing = less oxygen = more fatigue and brain fog.
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              How We Fix It
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  1. Reverse the Structural Damage
                </h3>
                <p className="text-neutralDark/80">
                  Release chronically tight chest, hip flexors, and front neck. Open up compressed lower back. Restore natural spinal curves. Get your shoulders back where they belong.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  2. Retrain Your Body
                </h3>
                <p className="text-neutralDark/80">
                  Learn to sit without destroying yourself. Strengthen weak posterior chain. Practice movement breaks that actually help. Create new patterns so you don't just recreate the problem.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  3. Give You Practical Tools
                </h3>
                <p className="text-neutralDark/80">
                  2-minute desk breaks that reset your posture. Breathing exercises that improve focus. Simple practices you can do during the workday. Ergonomic guidance that actually works.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              What Changes
            </h2>
            <div className="grid md:grid-cols-2 gap-3 text-lg text-neutralDark/80">
              <div>✓ No more constant neck/shoulder pain</div>
              <div>✓ Sit for hours without lower back pain</div>
              <div>✓ Headaches disappear</div>
              <div>✓ Better posture without thinking about it</div>
              <div>✓ More energy throughout the day</div>
              <div>✓ Deeper breathing & better focus</div>
              <div>✓ Actually enjoy Santa Cruz after work</div>
              <div>✓ Feel 10 years younger</div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Perfect for Santa Cruz Tech Workers & Remote Professionals
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              You moved to Santa Cruz for the lifestyle. Don't let your desk job steal it from you. Get your body back so you can actually enjoy hiking the redwoods, surfing in the morning, or biking on the weekend without pain.
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

export default DeskWorkerWellness;

