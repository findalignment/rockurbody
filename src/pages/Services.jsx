import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import WaveDivider from '../components/dividers/WaveDivider';
import PullQuote from '../components/content/PullQuote';
import Callout from '../components/content/Callout';
import ExpandableSection from '../components/content/ExpandableSection';
import FAQSection from '../components/FAQSection';
import Button from '../components/Button';
import { getLocalBusinessSchema, getServiceSchema, getProfessionalServiceSchema } from '../utils/structuredData';

function Services() {
  const structuredData = [
    getLocalBusinessSchema(),
    getServiceSchema('structural-integration'),
    getServiceSchema('movement-education'),
    getProfessionalServiceSchema()
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>Structural Integration Santa Cruz | Movement Education Services - Rock Ur Body</title>
        <meta name="description" content="Expert structural integration and functional movement coaching in Santa Cruz. Hands-on fascia work, posture correction, and personalized training. Mobile service available throughout Bay Area. Book your session today." />
        <meta name="keywords" content="structural integration Santa Cruz, movement education Santa Cruz, functional movement coaching, mobile personal training Santa Cruz, fascia therapy, posture correction Santa Cruz, bodywork Santa Cruz, corrective exercise, movement specialist Bay Area, private training Santa Cruz" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Structural Integration & Movement Education | Rock Your Body" />
        <meta property="og:description" content="Expert structural integration and movement coaching in Santa Cruz. Mobile service available throughout the Bay Area." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://rockyourbody.com/services" />
        
        {/* Schema.org */}
        {structuredData.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <PageHero 
        imageSrc="/services-hero.jpg"
        title="Structural Integration & Movement Education Services"
        subtitle="Expert hands-on fascia work and functional movement coaching in Santa Cruz"
        alt="Structural integration session showing hands-on fascia work and movement education in Santa Cruz"
      />
      {/* Add soft wave divider */}
      <div className="relative bg-white">
        <WaveDivider position="top" color="#faf8f5" height="80px" />
        
        <div className="pt-24 pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Pull Quote */}
            <PullQuote size="medium" position="center">
              Your movement holds your story
            </PullQuote>
            
            <p className="text-xl md:text-2xl text-neutralDark/90 mb-8 leading-relaxed text-center">
              I offer two complementary approaches: hands-on structural work and movement education. Most clients benefit from both to restore natural movement, reduce pain, and improve performance.
            </p>
            
            {/* CTA Above Fold */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                to="/book"
                variant="accent"
                size="lg"
                className="font-bold"
              >
                Book a Free 15-minute Call
              </Button>
            </div>
            
            <div className="space-y-16">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutralDark mb-4 md:mb-6">
                Structural Integration
              </h2>
              <p className="text-base md:text-lg text-neutralDark/80 mb-6 md:mb-8 leading-relaxed">
                Hands-on bodywork that releases tight areas and restrictions in your connective tissue (think of it like a web that connects everything in your body). When one part gets tight, it pulls on everything else. This work releases those restrictions so your whole body can function better. Paired with movement cues so changes "stick" when you stand, walk, lift, and live.
              </p>
              
              {/* Benefit Highlight */}
              <div className="bg-accent/5 rounded-lg p-4 md:p-6 mb-6 md:mb-8 border-l-4 border-accent">
                <p className="text-base md:text-lg font-semibold text-neutralDark mb-2">Key Benefits:</p>
                <p className="text-base md:text-lg text-neutralDark/90">Restore natural movement, reduce pain, and improve performance in daily life and training.</p>
              </div>
              
              <Callout variant="info" title="The Bottom Line">
                Hands-on fascia work + movement education to realign how you move so life feels easier
              </Callout>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutralDark mb-4">Why People Book This</h3>
                  <ul className="space-y-3 text-lg text-neutralDark/80 leading-relaxed">
                    <li>• Relief from nagging tension and "stuck" spots</li>
                    <li>• Better posture and easier breathing</li>
                    <li>• Stronger, smoother movement in daily life and training</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutralDark mb-4">How It Works</h3>
                  <div className="space-y-4 text-lg text-neutralDark/80 leading-relaxed">
                    <div>
                      <strong>Assess & map</strong> – We look at how you stand, walk, and breathe to find the bottlenecks.
                    </div>
                    <div>
                      <strong>Hands-on + cueing</strong> – Targeted work to free tissue + movements that teach your body a better option.
                    </div>
                    <div>
                      <strong>Reinforce</strong> – Leave with 1–2 micro-practices tailored to your patterns.
                    </div>
                  </div>
                </div>

                <ExpandableSection
                  preview={
                    <div>
                      <h3 className="text-xl font-semibold text-neutralDark mb-3">What to Expect</h3>
                      <p className="text-neutralDark/80">Typical session lengths: 60 / 90 / 120 minutes. Wear comfy clothing, no oils needed.</p>
                    </div>
                  }
                  buttonText="See Full Details"
                  collapseText="Show Less"
                >
                  <ul className="space-y-2 text-neutralDark/80">
                    <li>• Wear comfy clothing</li>
                    <li>• No oils</li>
                    <li>• We'll get you up and moving during the session</li>
                    <li>• You may feel lighter or a bit worked. This is normal and temporary</li>
                    <li>• Typical session lengths: 60 / 90 / 120 minutes</li>
                  </ul>
                </ExpandableSection>

                <ExpandableSection
                  preview={
                    <div>
                      <h3 className="text-xl font-semibold text-neutralDark mb-3">What's Realistic</h3>
                      <p className="text-neutralDark/80">Many feel a meaningful shift in 1–3 sessions. Lasting change usually needs 6–12 sessions.</p>
                    </div>
                  }
                  buttonText="Learn More"
                  collapseText="Show Less"
                >
                  <ul className="space-y-2 text-neutralDark/80">
                    <li>• Many feel a meaningful shift in 1–3 sessions</li>
                    <li>• Lasting change usually needs 6–12 sessions with light homework</li>
                    <li>• Not a quick solution. It's change that holds because your movement changes</li>
                    <li>• I'll tell you if I'm not the right fit and refer out</li>
                  </ul>
                </ExpandableSection>

                <div>
                  <h3 className="text-xl font-semibold text-neutralDark mb-3">Smart Ways to Start</h3>
                  <div className="space-y-3">
                    <div className="bg-neutralLight/50 p-4 rounded-lg">
                      <p className="font-semibold text-neutralDark mb-1">The Reset (3 weeks)</p>
                      <p className="text-neutralDark/80 text-sm">SI + movement to clear the biggest roadblocks.</p>
                    </div>
                    <div className="bg-neutralLight/50 p-4 rounded-lg">
                      <p className="font-semibold text-neutralDark mb-1">The Hip Series</p>
                      <p className="text-neutralDark/80 text-sm">Unstick hips/low back and restore stride.</p>
                    </div>
                    <div className="bg-neutralLight/50 p-4 rounded-lg">
                      <p className="font-semibold text-neutralDark mb-1">Full Repatterning (12 weeks)</p>
                      <p className="text-neutralDark/80 text-sm">Complete SI series + movement habit change.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button to="/book" variant="accent" size="lg" fullWidth className="font-bold">
                  Book This Service
                </Button>
                <Button to="/what-is-structural-integration" variant="outline" fullWidth>
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Wave divider between sections */}
            <div className="relative my-16">
              <WaveDivider position="bottom" color="#06b6d4" opacity={0.1} height="60px" />
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutralDark mb-4 md:mb-6">
                Movement Education
              </h2>
              <p className="text-base md:text-lg text-neutralDark/80 mb-6 md:mb-8 leading-relaxed">
                One-on-one training focused on how you move, not just what exercises you do. We work on fundamental movement patterns that improve everything you do.
              </p>
              
              {/* Benefit Highlight */}
              <div className="bg-sage/5 rounded-lg p-4 md:p-6 mb-6 md:mb-8 border-l-4 border-sage">
                <p className="text-base md:text-lg font-semibold text-neutralDark mb-2">Key Benefits:</p>
                <p className="text-base md:text-lg text-neutralDark/90">Restore natural movement patterns, reduce pain from compensation, and improve performance. Movement that serves your life, not just the gym. Strength, balance, and injury prevention that transfers to everything you do.</p>
              </div>
              
              <div className="space-y-2 text-base md:text-lg text-neutralDark/80 mb-6">
                <p className="font-semibold text-neutralDark">What we work on:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Efficient breathing and core integration</li>
                  <li>• Fundamental movement patterns (squat, hinge, push, pull)</li>
                  <li>• Balance and proprioception</li>
                  <li>• Strength that serves your life, not just the gym</li>
                  <li>• Injury prevention and movement problem-solving</li>
                </ul>
              </div>
              
              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button to="/book" variant="accent" size="lg" fullWidth className="font-bold">
                  Book This Service
                </Button>
                <Button to="/what-is-movement-education" variant="outline" fullWidth>
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Pull Quote */}
            <PullQuote size="small" position="center">
              Movement that serves your life, not just the gym
            </PullQuote>
            
            {/* Process */}
            <Callout variant="tip" title="The Process">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-neutralDark mb-1">First Session</h4>
                  <p>We assess where you are, what you want, and what's getting in the way. I'll explain what I see and recommend a plan.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutralDark mb-1">Ongoing Work</h4>
                  <p>Most clients see significant changes in 5-10 sessions. We work at your pace, focusing on what matters most to you.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutralDark mb-1">Maintenance</h4>
                  <p>Once you're moving well, monthly or quarterly tune-ups keep you there. You'll also have tools to maintain the work yourself.</p>
                </div>
              </div>
            </Callout>
            
            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button to="/book" variant="accent" size="lg" fullWidth className="font-bold">
                Book This Service
              </Button>
              <Button to="/what-is-movement-education" variant="outline" fullWidth>
                Learn More
              </Button>
            </div>
            </div>
            
            {/* Combo Programs CTA */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 text-center mt-16 mb-16">
              <h3 className="text-2xl font-heading text-primary mb-4">
                Want Both?
              </h3>
              <p className="text-lg text-neutralDark/80 mb-6">
                Most clients see the best results combining structural work and movement education
              </p>
              <Button to="/combo-programs" variant="accent" size="lg">
                Learn About Combination Programs
              </Button>
            </div>

            {/* FAQ Section */}
            <FAQSection
              faqs={[
                {
                  question: "What's the difference between Structural Integration and Movement Education?",
                  answer: <>Structural Integration is hands-on bodywork that releases restrictions in your connective tissue (fascia) and reorganizes your structure. Movement Education is training focused on how you move, teaching you better movement patterns. Most clients benefit from both: Structural Integration opens you up, and Movement Education teaches you how to use that new space.</>
                },
                {
                  question: "Which service should I start with?",
                  answer: <>It depends on your goals. If you have chronic pain or restrictions, start with Structural Integration. If you want to improve how you move and prevent injury, start with Movement Education. Most people see the best results combining both. Check out our <Link to="/smart-starts" className="text-accent hover:underline">Smart Starts</Link> page for recommendations based on your situation.</>
                },
                {
                  question: "Do I need to commit to a series, or can I try a single session?",
                  answer: <>Both options are available. You can book a <Link to="/pricing" className="text-accent hover:underline">single session</Link> to try the work, or commit to a <Link to="/packages" className="text-accent hover:underline">package</Link> for better pricing and systematic results. Most people see the best results with a series, but you're not locked in.</>
                },
                {
                  question: "How long are sessions?",
                  answer: <>It depends on what you book. Movement sessions are typically 60 minutes. Structural Integration sessions can be 60 minutes, but I find people get significantly better results from 90-minute sessions. The 90-minute format allows deeper work and better integration. Single sessions range from 60-120 minutes depending on your needs.</>
                },
                {
                  question: "Where are sessions held?",
                  answer: "Sessions are held at Mavericks Fitness (311 Soquel Ave, Santa Cruz, CA) by appointment only. Very selectively, I take a limited number of mobile clients based on fit, location, and availability. This requires a consultation first."
                },
                {
                  question: "Do you take insurance?",
                  answer: "No. I don't bill insurance. Sessions are out-of-pocket. Some HSA/FSA accounts may reimburse for bodywork or training. Check with your provider. I can provide receipts for your records."
                },
                {
                  question: "What's your cancellation policy?",
                  answer: "Life happens. Please give 4 hours notice if you need to cancel or reschedule. Late cancellations or no-shows will be charged a $50 fee."
                },
                {
                  question: "How do I prepare for my first session?",
                  answer: "Come as you are. No special preparation needed. Wear comfortable clothing you can move in. Avoid eating a heavy meal right before your session. If you have any injuries, medical conditions, or specific concerns, let me know when you arrive."
                }
              ]}
              title="Frequently Asked Questions About Our Services"
            />

            {/* Santa Cruz Personal Training Section */}
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-10 shadow-sm mt-12">
              <h2 className="text-3xl font-heading text-neutralDark mb-6 text-center">
                Personal Training & Movement Coaching in Santa Cruz
              </h2>
              <p className="text-lg text-neutralDark/80 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                Looking for a <Link to="/personal-trainer-santa-cruz" className="text-accent hover:underline font-semibold">personal trainer in Santa Cruz</Link> who combines structural integration with intelligent movement education? I work with clients throughout Santa Cruz County, from downtown to Westside, Capitola to Aptos, offering private one-on-one sessions at my studio or select outdoor locations.
              </p>
              <p className="text-lg text-neutralDark/80 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                Whether you need <Link to="/private-personal-training-santa-cruz" className="text-accent hover:underline">private personal training</Link>, <Link to="/movement-assessment-santa-cruz" className="text-accent hover:underline">movement assessment</Link>, <Link to="/posture-coaching-santa-cruz" className="text-accent hover:underline">posture coaching</Link>, or specialized support for active Santa Cruz lifestyles (surfing, trail running, climbing, cycling), we can work together to help you move better and feel better.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/personal-trainer-santa-cruz" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-semibold">
                  Learn About Santa Cruz Training
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/body-systems-check" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-accent border-2 border-accent rounded-lg hover:bg-accent/5 transition font-semibold">
                  Book a Systems Check
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Related Topics */}
            <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
              <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/what-is-structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                  What Is Structural Integration?
                </Link>
                <Link to="/what-is-movement-education" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                  What Is Movement Education?
                </Link>
                <Link to="/combo-programs" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                  Combination Programs
                </Link>
                <Link to="/packages" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                  Programs & Packages
                </Link>
                <Link to="/pricing" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                  Pricing
                </Link>
                <Link to="/smart-starts" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                  Smart Starts
                </Link>
                <Link to="/process" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                  The Process
                </Link>
                <Link to="/approach" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                  My Approach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Services;