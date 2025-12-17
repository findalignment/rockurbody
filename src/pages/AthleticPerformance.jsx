import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import { getBreadcrumbSchema, getFAQSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function AthleticPerformance() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Athletic Performance', url: '/athletic-performance' }
  ];

  const faqs = [
    {
      question: "How long does it take to see performance improvements?",
      answer: "Many athletes notice immediate improvements in movement quality and reduced restrictions after their first session, but lasting performance gains typically develop over 6-12 sessions as we systematically address structural limitations and movement patterns. The improvements build over time as your body integrates the changes. Most athletes see significant performance improvements within 8-12 sessions."
    },
    {
      question: "Will this help prevent injuries?",
      answer: "Yes. Better structure and movement quality significantly reduce injury risk. When your body is properly aligned and moves efficiently, there's less stress on vulnerable tissues. We address compensation patterns and movement limitations that often lead to injuries. Many athletes find they stay healthier and perform better after doing this work."
    },
    {
      question: "Can I continue my regular training while doing this work?",
      answer: "Absolutely. The goal is to enhance your training, not interrupt it. We'll discuss your training schedule and may recommend some modifications during the initial phase, but most athletes can continue their regular training. In fact, applying what you learn in sessions to your training accelerates your progress. We'll help you integrate the improvements into your sport-specific movements."
    },
    {
      question: "What if I'm already working with a coach or trainer?",
      answer: "Our work complements coaching and training beautifully. Coaches focus on technique and conditioning. We address the structural and movement quality foundations that support better performance. Many coaches refer athletes to us specifically for the structural work that enhances their training. We're happy to coordinate with your coach and work within your training schedule."
    },
    {
      question: "How many sessions will I need for performance improvement?",
      answer: "This depends on your specific goals, current movement quality, and how quickly your body responds. Many athletes find significant improvements within 8-12 sessions. We typically recommend starting with a series to address foundational issues, then continuing with additional sessions as needed. We'll discuss your specific needs during your initial consultation and create a plan tailored to your sport and goals."
    },
    {
      question: "Is this right for all sports?",
      answer: "Yes. Better structure and movement quality benefit all sports. Whether you're a runner, surfer, climber, golfer, or play team sports, improved alignment, mobility, and movement patterns enhance performance. We adapt the work to your specific sport and movement demands. Many athletes across different sports find this work transformative for their performance."
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Athletic Performance Training Santa Cruz | Optimize Movement"
        description="Improve athletic performance through better movement patterns and structural balance. For serious athletes in Santa Cruz."
        keywords="athletic performance santa cruz, sports performance, movement optimization, functional training, athletic bodywork"
        structuredData={[getBreadcrumbSchema(breadcrumbs), getFAQSchema(faqs)]}
      />
      
      <PageHero 
        imageSrc="/athletic-performance-hero.jpg"
        title="Athletic Performance Enhancement"
        subtitle="Move better. Perform better. Win more."
        alt="Athletic performance enhancement using structural integration and movement optimization for serious athletes in Santa Cruz"
      />


      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              You're Already Good. Let's Make You Great.
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You train hard. You're dedicated. You've hit a plateau or you're dealing with nagging issues that limit your performance. You want that edge, but working harder isn't the answer.
            </p>
            <p className="text-xl text-accent font-semibold mb-6">
              Working smarter is.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed">
              When your structure is balanced and your movement patterns are dialed in, you get more power with less effort. You recover faster. You stay healthier. You perform at your peak longer.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Limits Athletic Performance
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Structural Imbalances
                </h3>
                <p className="text-neutralDark/80">
                  Your left side doesn't match your right. One hip is tighter. One shoulder sits higher. These asymmetries leak power and create injury risk. Elite athletes are obsessed with symmetry for a reason.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Poor Movement Patterns
                </h3>
                <p className="text-neutralDark/80">
                  You've built compensations over years. Maybe you favor one side. Maybe you're overusing certain muscles while others are "asleep." Inefficient movement wastes energy and limits performance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Fascial Restrictions
                </h3>
                <p className="text-neutralDark/80">
                  Tight fascia limits range of motion, reduces power transfer, and increases injury risk. You can't fire a cannon from a canoe, you need a stable, mobile structure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Incomplete Recovery
                </h3>
                <p className="text-neutralDark/80">
                  Old injuries leave scar tissue and compensation patterns. You're not moving the same as before the injury, even if the pain is gone. That affects performance.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              My Approach to Performance Enhancement
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Optimize Your Structure
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through Structural Integration:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Balance left-right asymmetries</li>
                  <li>• Release fascial restrictions limiting power transfer</li>
                  <li>• Improve range of motion without losing stability</li>
                  <li>• Address old injury patterns affecting current performance</li>
                  <li>• Create a more efficient kinetic chain</li>
                </ul>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Refine Your Movement
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through movement education:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Identify and address compensation patterns</li>
                  <li>• Improve movement efficiency (less energy for same output)</li>
                  <li>• Enhance proprioception and body awareness</li>
                  <li>• Develop better breathing patterns for performance</li>
                  <li>• Train movement quality, not just strength</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold text-neutralDark mb-3">
                  Sport-Specific Application
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Every sport has unique demands:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• <strong>Surfers:</strong> Paddle efficiency, pop-up mechanics, rotation power</li>
                  <li>• <strong>Cyclists:</strong> Pedal stroke optimization, power transfer, endurance positioning</li>
                  <li>• <strong>Runners:</strong> Gait efficiency, ground contact mechanics, injury prevention</li>
                  <li>• <strong>Climbers:</strong> Core tension, hip mobility, shoulder stability</li>
                  <li>• <strong>Team sports:</strong> Explosive power, quick direction changes, durability</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Performance Gains You Can Expect
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-neutralDark mb-3">Immediate Improvements</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Better range of motion</li>
                  <li>• Reduced pain/discomfort</li>
                  <li>• Improved body awareness</li>
                  <li>• More efficient breathing</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-neutralDark mb-3">Long-Term Benefits</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Increased power output</li>
                  <li>• Better endurance</li>
                  <li>• Faster recovery</li>
                  <li>• Reduced injury rate</li>
                  <li>• Extended athletic career</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Who This Is For
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">Competitive Athletes</h3>
                <p className="text-neutralDark/80">
                  Looking for that edge. Ready to optimize every aspect of performance. Want to extend your competitive career.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">Serious Amateurs</h3>
                <p className="text-neutralDark/80">
                  Train like a pro even if it's not your job. Want to perform at your best. Frustrated by plateaus or recurring issues.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">Comeback Athletes</h3>
                <p className="text-neutralDark/80">
                  Returning from injury. Want to come back better than before. Need to address compensation patterns.
                </p>
              </div>

              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">Masters Athletes</h3>
                <p className="text-neutralDark/80">
                  Not slowing down with age. Want to stay competitive. Need smarter training to stay injury-free.
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Santa Cruz Athletes
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              I've worked with surfers, cyclists, runners, climbers, and weekend warriors throughout Santa Cruz. If you're serious about your sport and ready to optimize your body for performance, let's talk.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/packages" variant="outline" size="lg" fullWidth>
              View Training Programs
            </Button>
          </div>

          {/* FAQ Section */}
          <FAQSection 
            faqs={faqs} 
            title="Frequently Asked Questions About Athletic Performance Training"
          />
          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/sports-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Sports Performance Hub
              </Link>
              <Link to="/movement-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Movement Training Hub
              </Link>
              <Link to="/surfers" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                For Surfers
              </Link>
              <Link to="/cyclists-and-runners" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Cyclists & Runners
              </Link>
              <Link to="/climbers" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                For Climbers
              </Link>
              <Link to="/golf-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Golf Performance
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

export default AthleticPerformance;
