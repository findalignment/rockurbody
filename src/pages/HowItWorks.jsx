import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Button from '../components/Button';
import GlossaryTerm from '../components/GlossaryTerm';

function HowItWorks() {
  return (
    <PageLayout>
      <SEO
        title="How It Works - Upgrade Your Body's Software | RockUrBody"
        description="Learn how we upgrade your body's software through systematic assessment, structural integration, and movement education. Clear process, lasting results."
        keywords="how structural integration works, movement education process, body systems upgrade, Santa Cruz bodywork"
        url="/how-it-works"
      />
      <PageHero 
        imageSrc="/approach-hero.jpg"
        title="How It Works"
        subtitle="A systematic approach to upgrading your body's operating system from assessment to integration to lasting change."
        alt="How structural integration and movement education works at RockUrBody"
      />
      <div className="pt-16 pb-24 px-6">

        {/* Process Steps */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12 md:space-y-16">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4">
                    Assess Your Systems
                  </h2>
                  <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                    We start with a comprehensive Body Systems Check. We evaluate your alignment, movement patterns, structural imbalances, and identify what's working and what's not. This gives us a clear baseline and roadmap.
                  </p>
                  <p className="text-neutralDark/70 leading-relaxed">
                    You'll understand exactly where your body is holding tension, where movement is restricted, and what patterns are causing problems.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4">
                    Reorganize Structure
                  </h2>
                  <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                    Through <GlossaryTerm term="Structural Integration" definition="Systematic bodywork that reorganizes your body's connective tissue (fascia) to improve alignment and function. Unlike massage, SI works strategically with fascia throughout your entire structure for lasting structural change.">Structural Integration</GlossaryTerm>, we work hands-on with your <GlossaryTerm term="fascia" definition="The connective tissue network that wraps every muscle, bone, nerve, and organ in your body, creating one continuous system. When healthy, fascia is mobile and resilient. Restrictions in fascia can limit movement and pull your structure out of alignment." videoUrl="https://www.youtube.com/watch?v=_FtSP-tkSUg">fascia</GlossaryTerm> to release restrictions and reorganize how your body is put together. This isn't massage—it's systematic, progressive work that builds on itself.
                  </p>
                  <ul className="text-neutralDark/70 leading-relaxed space-y-2 ml-6 list-disc">
                    <li>Each session addresses specific lines of tension</li>
                    <li>Creates space and alignment for efficient movement</li>
                    <li>Builds progressively, session by session</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4">
                    Teach New Movement Patterns
                  </h2>
                  <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                    Structural work creates the potential for change. <GlossaryTerm term="Movement Education" definition="Intelligent training that teaches your body new movement patterns. Unlike traditional exercise, Movement Education focuses on how you move, not just what exercises you do. It reinforces structural changes and builds strength, mobility, and coordination from a better foundation.">Movement Education</GlossaryTerm> makes it stick.
                  </p>
                  <ul className="text-neutralDark/70 leading-relaxed space-y-2 ml-6 list-disc">
                    <li>Learn movement patterns that support your upgraded structure</li>
                    <li>Build strength, mobility, and coordination from a better foundation</li>
                    <li>Prevent old compensations from returning</li>
                    <li>Make structural changes stick through movement</li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4">
                    Integrate and Maintain
                  </h2>
                  <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                    The final phase is integration. Your body learns to use its new structure automatically. You develop movement habits that maintain the improvements, and you have the tools to keep upgrading your body's software over time.
                  </p>
                  <p className="text-neutralDark/70 leading-relaxed">
                    This isn't a quick fix it's a fundamental upgrade to how your body operates. The changes last because they're built into your movement patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It's Different */}
        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">
              Why This Approach Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Systems Thinking</h3>
                <p className="text-neutralDark/80">
                  Your body works as an integrated system. Pain in one area often comes from somewhere else. We address root causes, not just symptoms.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Structure + Movement</h3>
                <p className="text-neutralDark/80">
                  Hands-on work reorganizes tissue. Movement education makes it stick. Most practitioners focus on one or the other we do both.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Progressive Protocol</h3>
                <p className="text-neutralDark/80">
                  Systematic approach builds on itself. Each session sets up the next. We follow a proven sequence that creates lasting change.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Lasting Change</h3>
                <p className="text-neutralDark/80">
                  We don't just fix problems. We upgrade your movement patterns for the long term. The changes hold because your body learns new ways to move.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
              Ready to Upgrade Your Body's Software?
            </h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a Body Systems Check to see what needs upgrading, or explore our service packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                to="/body-systems-check"
                variant="primary"
                size="lg"
              >
                Book a Systems Check
              </Button>
              <Button
                to="/services"
                variant="outline"
                size="lg"
              >
                View All Services
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

export default HowItWorks;

