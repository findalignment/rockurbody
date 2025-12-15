import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Button from '../components/Button';

function HipPainFromSitting() {
  return (
    <PageLayout>
      <SEO
        title="Hip Pain From Sitting - Desk Work Hip Problems | RockUrBody"
        description="Hip pain from sitting isn't just about time in a chair. Learn how sitting creates structural restrictions and movement patterns that cause hip pain, and how to fix it."
        keywords="hip pain from sitting, desk work hip pain, sitting hip problems, hip restrictions, structural integration, Santa Cruz"
        url="/hip-pain-from-sitting"
      />
      <PageHero 
        imageSrc="/hip-pain-sitting-hero.jpg"
        title="Hip Pain From Sitting"
        subtitle="Sitting doesn't just make your hips tight. It creates structural restrictions and movement patterns that cause pain."
        alt="Hip pain from sitting treatment through structural integration"
      />
      <div className="pt-16 pb-24 px-6">

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How Sitting Creates Hip Problems</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              When you sit all day, your hips are in a shortened position. Your hip flexors get tight. Your glutes get weak. Your pelvis tilts. Over time, this creates structural restrictions in your fascia that don't just go away when you stand up.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              These restrictions create compensation patterns. Your body adapts to sitting, and those adaptations cause problems when you move. That's why your hips hurt—not just when you sit, but when you walk, squat, or do anything else.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Why Stretching Doesn't Fix It</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              You can stretch your hip flexors all day, but if the restriction is in your fascia, stretching won't fix it. You need structural work to release these restrictions, then movement education to change the patterns.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn more about <Link to="/why-stretching-doesnt-fix-it" className="text-accent hover:underline">why stretching doesn't fix it</Link>.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Solution</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Address the structural restrictions that sitting creates. Release the fascial restrictions. Restore proper hip function. Then build movement patterns that counter the effects of sitting.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/desk-worker-wellness" className="text-accent hover:underline">desk worker wellness</Link> and <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline">movement coaching</Link> to address hip pain from sitting.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Fix Your Hip Pain?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              A <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> will identify the restrictions causing your hip pain and create a plan to address them.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

export default HipPainFromSitting;

