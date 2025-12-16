import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Button from '../components/Button';
import FAQSection from '../components/FAQSection';
import GlossaryTerm from '../components/GlossaryTerm';

function BodySystemsCheck() {
  return (
    <PageLayout>
      <SEO
        title="Body Systems Check - Comprehensive Assessment | RockUrBody"
        description="A comprehensive 90-minute assessment of your alignment, movement patterns, and structural imbalances. Identify what's working, what's not, and create a clear roadmap for improvement."
        keywords="body assessment Santa Cruz, movement screening, structural assessment, body systems check, alignment evaluation"
        url="/body-systems-check"
      />
      <PageHero 
        imageSrc="/body-systems-check-hero.jpg"
        title="Body Systems Check"
        subtitle="A comprehensive 90-minute assessment that identifies what's working, what's not, and creates a clear roadmap for upgrading your body's software."
        alt="Body systems check assessment in Santa Cruz"
      />
      <div className="pt-24 md:pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Important Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-12 rounded-r-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Notice</h3>
                <p className="text-blue-800 leading-relaxed">
                  The Body Systems Check is an assessment and educational service, not a medical diagnosis. This evaluation focuses on movement patterns, alignment, and structural relationships. It does not diagnose medical conditions, diseases, or injuries. If you have concerns about a medical condition, please consult with a qualified healthcare provider.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Get */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-12 text-center">
              What You'll Get
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border-2 border-neutralLight">
                <h3 className="text-2xl font-semibold text-primary mb-4">Comprehensive Assessment</h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  We evaluate your entire system: alignment, movement patterns, structural imbalances, and identify where your body is holding tension or restriction.
                </p>
                <ul className="space-y-2 text-neutralDark/70">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Postural analysis and alignment evaluation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Movement pattern screening (walking, squatting, reaching)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><GlossaryTerm term="Structural Integration" definition="Systematic bodywork that reorganizes your body's connective tissue (fascia) to improve alignment and function. Unlike massage, SI works strategically with fascia throughout your entire structure for lasting structural change.">Structural Integration</GlossaryTerm> assessment (<GlossaryTerm term="fascia" definition="The connective tissue network that wraps every muscle, bone, nerve, and organ in your body, creating one continuous system. When healthy, fascia is mobile and resilient. Restrictions in fascia can limit movement and pull your structure out of alignment." videoUrl="https://www.youtube.com/watch?v=_FtSP-tkSUg">fascial</GlossaryTerm> restrictions)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Breathing and core function evaluation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border-2 border-neutralLight">
                <h3 className="text-2xl font-semibold text-primary mb-4">Clear Roadmap</h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                  Based on what we find, we'll create a personalized plan that addresses your specific needs. You'll know exactly what to work on and in what order.
                </p>
                <ul className="space-y-2 text-neutralDark/70">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Priority areas for structural work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Movement patterns to develop or correct</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Recommended service packages or programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Timeline and expected outcomes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border-2 border-neutralLight">
                <h3 className="text-2xl font-semibold text-primary mb-4">Immediate Insights</h3>
                <p className="text-lg text-neutralDark/80 leading-relaxed">
                  You'll leave understanding exactly where your body is holding tension, where movement is restricted, and what patterns are causing problems. Many clients experience immediate relief and clarity after the assessment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">
              Who This Is For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">New Clients</h3>
                <p className="text-neutralDark/80">
                  Perfect starting point if you're not sure where to begin. Get clarity on what your body needs before committing to a program.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Chronic Issues</h3>
                <p className="text-neutralDark/80">
                  If you've tried everything and still have pain or restrictions, this assessment identifies root causes you may have missed.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Performance Athletes</h3>
                <p className="text-neutralDark/80">
                  Identify movement inefficiencies and structural limitations that are holding back your performance.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Prevention Focused</h3>
                <p className="text-neutralDark/80">
                  Catch imbalances before they become problems. Upgrade your body's software proactively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-12 text-center">
              What Happens During Your Check
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Initial Conversation (15 min)</h3>
                  <p className="text-neutralDark/80">
                    We discuss your goals, pain points, movement history, and what you've tried before. This helps us understand your context.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Movement Assessment (30 min)</h3>
                  <p className="text-neutralDark/80">
                    We observe you walking, squatting, reaching, and moving through various patterns. This reveals how your body organizes itself in motion.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Structural Evaluation (30 min)</h3>
                  <p className="text-neutralDark/80">
                    Hands-on assessment of your fascia, alignment, and structural relationships. We identify restrictions, imbalances, and areas that need attention.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Review & Recommendations (15 min)</h3>
                  <p className="text-neutralDark/80">
                    We walk through what we found, explain what it means, and create a clear plan for moving forward. You'll leave with actionable next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
              Investment
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg max-w-2xl mx-auto">
              <div className="text-5xl font-bold text-primary mb-4">$250</div>
              <p className="text-xl text-neutralDark/80 mb-6">90 minutes</p>
              <p className="text-lg text-neutralDark/70 mb-8">
                Includes comprehensive assessment, written summary, and personalized roadmap for your body's upgrade.
              </p>
              <Button
                to="/book"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Book Your Systems Check
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <FAQSection
              faqs={[
                {
                  question: "What is included in the Body Systems Check?",
                  answer: "The Body Systems Check is a comprehensive 90-minute assessment that includes: a detailed conversation about your goals and history, movement pattern screening (walking, squatting, reaching), hands-on structural evaluation of your fascia and alignment, breathing and core function assessment, and a personalized roadmap with recommendations for your specific needs."
                },
                {
                  question: "Is this a medical diagnosis?",
                  answer: "No. The Body Systems Check is an assessment and educational service focused on movement patterns, alignment, and structural relationships. It is not a medical diagnosis and does not diagnose medical conditions, diseases, or injuries. If you have concerns about a medical condition, please consult with a qualified healthcare provider."
                },
                {
                  question: "What should I expect during the assessment?",
                  answer: "You'll start with a conversation about your goals and movement history (15 min), then move through various movement patterns while we observe how your body organizes itself (30 min). We'll do hands-on assessment of your structure, fascia, and alignment (30 min), and finish with a review of findings and recommendations for next steps (15 min)."
                },
                {
                  question: "Do I need to prepare anything beforehand?",
                  answer: "Wear comfortable clothing that allows you to move freely. You may want to bring a list of any questions or concerns you have. No other preparation is needed just come as you are."
                },
                {
                  question: "What happens after the Body Systems Check?",
                  answer: "After your assessment, you'll receive a clear roadmap with recommendations tailored to your specific needs. This may include priority areas for structural work, movement patterns to develop or correct, recommended service packages or programs, and a timeline for expected outcomes. Many clients then choose to begin a Structural Integration series or Movement Education program."
                },
                {
                  question: "Can I use this assessment if I'm already working with a physical therapist or doctor?",
                  answer: "Yes. The Body Systems Check complements medical care by focusing on movement patterns and structural relationships. It's not a replacement for medical treatment, but it can provide valuable insights into how your body moves and organizes itself. We're happy to work alongside your healthcare providers."
                },
                {
                  question: "How is this different from a physical therapy evaluation?",
                  answer: "While physical therapy focuses on diagnosing and treating medical conditions, the Body Systems Check focuses on movement patterns, alignment, and structural relationships. We assess how your body organizes itself in movement and identify patterns that may be contributing to restrictions or inefficiencies. It's complementary to medical care, not a replacement."
                }
              ]}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
              Ready to See What Your Body Needs?
            </h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Book your Body Systems Check and get clarity on your body's operating system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                to="/book"
                variant="primary"
                size="lg"
              >
                Book Now
              </Button>
              <Button
                to="/how-it-works"
                variant="outline"
                size="lg"
              >
                Learn More About Our Process
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

export default BodySystemsCheck;

