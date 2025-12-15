import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Button from '../components/Button';

function AlignmentBasedStrengthTraining() {
  return (
    <PageLayout>
      <SEO
        title="Alignment-Based Strength Training - Strength Without Compensation | RockUrBody"
        description="Build strength from proper alignment, not compensation patterns. Learn how alignment-based strength training prevents injury and creates lasting change. Santa Cruz, CA."
        keywords="alignment based strength training, strength without compensation, proper form training, functional strength, movement quality, Santa Cruz"
        url="/alignment-based-strength-training"
      />
      <PageHero 
        imageSrc="/alignment-strength-hero.jpg"
        title="Alignment-Based Strength Training"
        subtitle="Build strength from proper alignment, not compensation patterns. Strong movement from a weak foundation creates problems. We build the foundation first."
        alt="Alignment-based strength training that builds strength without compensation"
      />
      <div className="pt-16 pb-24 px-6">

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Problem with Traditional Strength Training</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Most strength training focuses on moving weight. It doesn't care how you move it. If you can squat 200 pounds, great—even if your knees cave, your back rounds, and your body compensates everywhere to make it happen.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              That's not strength. That's compensation masquerading as strength. And it creates problems: injuries, pain, movement restrictions, and patterns that break down over time.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Alignment-Based Approach</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Foundation First</h3>
                <p className="text-neutralDark/80">We establish proper alignment before adding load. Your body learns to organize itself correctly, then we build strength from that foundation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Quality Over Quantity</h3>
                <p className="text-neutralDark/80">We'd rather you squat 100 pounds with perfect alignment than 200 pounds with compensation. Quality movement creates quality strength.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Progressive Loading</h3>
                <p className="text-neutralDark/80">Once alignment is solid, we progressively add load. But we never sacrifice alignment for weight. The alignment comes first, always.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Why This Works</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              When you build strength from proper alignment, you're not just getting stronger. You're upgrading your body's operating system. The strength serves your movement, not the other way around.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              This approach prevents injuries, reduces pain, and creates strength that lasts. You're not just strong—you're strong in ways that support everything else you do.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn more about <Link to="/what-are-compensation-patterns" className="text-accent hover:underline">compensation patterns</Link> and how we address them.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Build Real Strength?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> to assess your alignment, then we'll design your strength training program.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

export default AlignmentBasedStrengthTraining;

