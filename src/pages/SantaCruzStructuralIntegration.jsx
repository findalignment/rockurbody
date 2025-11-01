import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';

function SantaCruzStructuralIntegration() {
  return (
    <PageLayout>
      <SEO 
        title="Structural Integration Santa Cruz | Rolfing & Bodywork | Rock Hudson"
        description="Expert Structural Integration and Rolfing in Santa Cruz, CA. Relieve chronic pain, improve posture, and move better. Certified practitioner with 20+ years experience."
        keywords="structural integration santa cruz, rolfing santa cruz, bodywork santa cruz, fascia work santa cruz, posture correction, chronic pain relief"
      />
      
      <PageHero 
        imageSrc="/services-hero.jpg"
        title="Structural Integration in Santa Cruz"
        subtitle="Expert bodywork that helps you move, feel, and live better"
      />

      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Intro */}
          <div className="mb-16">
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Santa Cruz is a community that moves.surfers catching dawn patrol, cyclists climbing empire grade, weekend warriors hiking the redwoods. When your body isn't working right, everything gets harder.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed">
              I'm Rock Hudson, a certified Structural Integrator serving Santa Cruz and the greater Bay Area. For over 20 years, I've helped people get out of pain and back to the activities they love through precise hands-on work and intelligent movement training.
            </p>
          </div>

          {/* What is Structural Integration */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What is Structural Integration?
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              Structural Integration (often called Rolfing) is a specialized form of bodywork that focuses on your body's connective tissue.the fascia that wraps around every muscle, bone, and organ. When this tissue gets tight, restricted, or misaligned, it creates:
            </p>
            <ul className="space-y-3 text-lg text-neutralDark/80 ml-6 mb-6">
              <li>• Chronic pain and tension</li>
              <li>• Poor posture and limited mobility</li>
              <li>• Compensation patterns that lead to injury</li>
              <li>• Decreased athletic performance</li>
            </ul>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Through targeted manual therapy combined with movement education, I help your body reorganize around gravity, move more efficiently, and feel better in daily life.
            </p>
          </div>

          {/* Why Santa Cruz Residents Choose This Work */}
          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Why Santa Cruz Residents Choose Structural Integration
            </h2>
            <div className="space-y-4 text-lg text-neutralDark/80">
              <div>
                <strong className="text-neutralDark">Surfers:</strong> Address shoulder issues, improve paddling efficiency, and maintain spinal mobility
              </div>
              <div>
                <strong className="text-neutralDark">Cyclists & Runners:</strong> Release IT band tension, improve hip mechanics, and prevent overuse injuries
              </div>
              <div>
                <strong className="text-neutralDark">Office Workers:</strong> Reverse desk posture, eliminate neck/shoulder pain, and restore natural alignment
              </div>
              <div>
                <strong className="text-neutralDark">Active Seniors:</strong> Maintain mobility, reduce pain, and stay doing what you love
              </div>
              <div>
                <strong className="text-neutralDark">Athletes:</strong> Improve performance, recover faster, and move with greater efficiency
              </div>
            </div>
          </div>

          {/* How It's Different */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              How This is Different from Massage or Chiropractic
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-4">
                  Not Just Relaxation
                </h3>
                <p className="text-neutralDark/80">
                  While therapeutic, this isn't a spa massage. We're addressing root causes of dysfunction and creating lasting structural change through systematic, targeted work.
                </p>
              </div>
              
              <div className="bg-white border-2 border-neutralLight rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-4">
                  Beyond Adjustments
                </h3>
                <p className="text-neutralDark/80">
                  Rather than focusing on individual joints, we work with the whole fascial system. Changes come from releasing restrictions and teaching your body better movement patterns.
                </p>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What to Expect in Santa Cruz Sessions
            </h2>
            <div className="space-y-6 text-lg text-neutralDark/80">
              <div>
                <strong className="text-neutralDark block mb-2">First Session:</strong>
                We'll discuss your history, assess your structure and movement patterns, and begin hands-on work targeting your primary concerns.
              </div>
              <div>
                <strong className="text-neutralDark block mb-2">Typical Timeline:</strong>
                Most people feel improvement in 1-3 sessions, but lasting change usually takes 6-12 sessions depending on your goals and starting point.
              </div>
              <div>
                <strong className="text-neutralDark block mb-2">Session Length:</strong>
                60, 90, or 120 minutes depending on what we're addressing. Longer sessions allow for more comprehensive work.
              </div>
              <div>
                <strong className="text-neutralDark block mb-2">Active Participation:</strong>
                You're not just lying on a table.we'll get you moving during sessions and give you simple practices to reinforce the work between visits.
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Serving Santa Cruz & Surrounding Areas
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              Conveniently located to serve clients throughout Santa Cruz County and the greater Bay Area, including:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <ul className="space-y-2">
                <li>• Santa Cruz</li>
                <li>• Capitola</li>
                <li>• Aptos</li>
                <li>• Soquel</li>
              </ul>
              <ul className="space-y-2">
                <li>• Scotts Valley</li>
                <li>• Watsonville</li>
                <li>• Live Oak</li>
                <li>• Ben Lomond</li>
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/packages" variant="outline" size="lg" fullWidth>
              View Programs & Pricing
            </Button>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-8">
              Common Questions from Santa Cruz Clients
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  How is this different from massage?
                </h3>
                <p className="text-neutralDark/80">
                  Massage typically focuses on muscles for relaxation. Structural Integration works with fascia to create lasting postural and movement changes. It's systematic, progressive, and focused on long-term transformation.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Does it hurt?
                </h3>
                <p className="text-neutralDark/80">
                  We work at the edge of sensation, not into pain. Some areas may be tender, but the work should feel like "good pain".the kind that makes you breathe deeper, not tense up. You're always in control of the pressure.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  How many sessions do I need?
                </h3>
                <p className="text-neutralDark/80">
                  It varies. Some people come for a few sessions to address a specific issue. Others do a complete series (12 sessions) for comprehensive structural work. We'll discuss what makes sense after your consultation.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Do you take insurance?
                </h3>
                <p className="text-neutralDark/80">
                  I'm not in-network with insurance, but I can provide receipts for potential HSA/FSA reimbursement. Some clients have successfully submitted for out-of-network benefits.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-accent/10 to-sage/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Ready to Move Better?
            </h2>
            <p className="text-lg text-neutralDark/80 mb-6">
              Schedule a free consultation to discuss your goals and see if this work is right for you.
            </p>
            <Button to="/consult" variant="primary" size="lg">
              Book Your Free Consultation
            </Button>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default SantaCruzStructuralIntegration;

