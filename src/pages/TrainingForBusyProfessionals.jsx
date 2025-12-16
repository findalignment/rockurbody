import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function TrainingForBusyProfessionals() {
  return (
    <>
      <SEO
        title="Training For Busy Professionals - Efficient Movement Coaching | RockUrBody"
        description="Training designed for busy professionals. Efficient sessions that fit your schedule. Address desk work problems, build strength, and maintain movement quality."
        keywords="training for busy professionals, professional training, desk worker training, efficient training, time-efficient training, Santa Cruz"
        url="/training-for-busy-professionals"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Training For Busy Professionals
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Efficient training that fits your schedule. Address desk work problems, build strength, and maintain movement quality without taking over your life.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Challenge</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              You're busy. You work long hours, you sit at a desk, you don't have time for long workouts. But you still want to move well, stay strong, and avoid the problems that desk work creates.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              You need training that's efficient sessions that deliver results without taking hours. You need training that addresses your specific problems desk work, stress, time constraints.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How We Help</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Efficient Sessions</h3>
                <p className="text-neutralDark/80">30-60 minute sessions that deliver results. No wasted time, no fluff just effective training.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Desk Work Solutions</h3>
                <p className="text-neutralDark/80">Address the problems desk work creates. Learn about <Link to="/desk-worker-wellness" className="text-accent hover:underline">desk worker wellness</Link> and <Link to="/neck-shoulder-tension-from-desk-work" className="text-accent hover:underline">neck and shoulder tension</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Flexible Scheduling</h3>
                <p className="text-neutralDark/80">Sessions that fit your schedule. We work around your work, not the other way around.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Home Practice</h3>
                <p className="text-neutralDark/80">Simple practices you can do at home or in the office. Maximize results with minimal time.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Common Problems We Solve for Busy Professionals</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent">
                <h3 className="text-xl font-semibold text-primary mb-2">Neck & Shoulder Tension</h3>
                <p className="text-neutralDark/80 mb-2">
                  Hours at a computer create forward head posture, rounded shoulders, and chronic tension. We address the root causes, not just the symptoms.
                </p>
                <Link to="/neck-shoulder-tension-from-desk-work" className="text-accent hover:underline text-sm font-semibold">Learn more about desk work tension →</Link>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent">
                <h3 className="text-xl font-semibold text-primary mb-2">Low Back Pain from Sitting</h3>
                <p className="text-neutralDark/80 mb-2">
                  Prolonged sitting creates hip tightness and back pain. We restore hip mobility and build core stability that actually works.
                </p>
                <Link to="/hip-pain-from-sitting" className="text-accent hover:underline text-sm font-semibold">Learn more about sitting-related pain →</Link>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent">
                <h3 className="text-xl font-semibold text-primary mb-2">General Stiffness & Decreased Mobility</h3>
                <p className="text-neutralDark/80 mb-2">
                  Sedentary work makes you feel tight and restricted. We restore mobility through structural work and movement education.
                </p>
                <Link to="/why-i-feel-tight-all-the-time" className="text-accent hover:underline text-sm font-semibold">Learn why you feel tight →</Link>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent">
                <h3 className="text-xl font-semibold text-primary mb-2">Lack of Time & Energy for Training</h3>
                <p className="text-neutralDark/80 mb-2">
                  After a long workday, you're drained. Our efficient sessions give you energy instead of depleting it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">What a Session Looks Like</h2>
            <p className="text-lg text-neutralDark/80 text-center mb-12 max-w-3xl mx-auto">
              Efficient, focused, and designed to fit your schedule. Here's what to expect:
            </p>
            <div className="space-y-6">
              <div className="bg-neutralLight rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg">1</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-2">Quick Check-In (5 min)</h3>
                    <p className="text-neutralDark/80">How's your body feeling? What's been going on since last session? Any flare-ups or issues?</p>
                  </div>
                </div>
              </div>
              <div className="bg-neutralLight rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg">2</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-2">Movement Prep (10 min)</h3>
                    <p className="text-neutralDark/80">Address current restrictions, wake up dormant areas, prepare your body to move well.</p>
                  </div>
                </div>
              </div>
              <div className="bg-neutralLight rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg">3</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-2">Focused Training (35-40 min)</h3>
                    <p className="text-neutralDark/80">Build strength, improve movement patterns, address your specific needs. Every exercise chosen for maximum impact.</p>
                  </div>
                </div>
              </div>
              <div className="bg-neutralLight rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg">4</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-2">Wrap-Up & Home Practice (5 min)</h3>
                    <p className="text-neutralDark/80">Review what we did, assign simple practices for home/office, answer questions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-accent/10 rounded-xl p-6 border-l-4 border-accent text-center">
              <p className="text-lg text-neutralDark/80">
                <strong className="text-primary">Total Time:</strong> 60 minutes. No fluff, no wasted time. Just focused work that delivers results.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">Time Investment vs. Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-4xl font-bold text-accent mb-2">2-3x</div>
                <div className="text-sm text-neutralDark/60 mb-4">per week</div>
                <h3 className="text-lg font-semibold text-primary mb-3">Maintenance Mode</h3>
                <ul className="text-left space-y-2 text-neutralDark/80 text-sm">
                  <li>• Undo desk work damage</li>
                  <li>• Maintain strength & mobility</li>
                  <li>• Prevent chronic issues</li>
                  <li>• Feel good consistently</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center border-2 border-accent">
                <div className="text-sm text-accent font-semibold mb-2">MOST POPULAR</div>
                <div className="text-4xl font-bold text-accent mb-2">3-4x</div>
                <div className="text-sm text-neutralDark/60 mb-4">per week</div>
                <h3 className="text-lg font-semibold text-primary mb-3">Progress Mode</h3>
                <ul className="text-left space-y-2 text-neutralDark/80 text-sm">
                  <li>• Build real strength</li>
                  <li>• Fix chronic pain/issues</li>
                  <li>• Improve movement quality</li>
                  <li>• See consistent progress</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-4xl font-bold text-accent mb-2">4-5x</div>
                <div className="text-sm text-neutralDark/60 mb-4">per week</div>
                <h3 className="text-lg font-semibold text-primary mb-3">Transformation Mode</h3>
                <ul className="text-left space-y-2 text-neutralDark/80 text-sm">
                  <li>• Major changes in 3-6 months</li>
                  <li>• Significant strength gains</li>
                  <li>• Resolve long-standing issues</li>
                  <li>• Accelerated results</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-neutralDark/80 mt-8">
              Even 2-3 hours per week (2% of your time) creates significant results when training is efficient and focused.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-neutralLight rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Can I really see results with just 2-3 sessions per week?</h3>
                <p className="text-neutralDark/80">
                  Yes. When sessions are focused and intelligent, 2-3 hours per week is more than enough. We're not wasting time with filler exercises or generic programs. Every movement serves a purpose. Most busy professionals see significant improvements in pain, mobility, and strength within 4-6 weeks.
                </p>
              </div>
              <div className="bg-neutralLight rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">What if I have to miss sessions due to work travel?</h3>
                <p className="text-neutralDark/80">
                  Happens all the time. I'll give you simple practices you can do in a hotel room or office. We also schedule around your travel when possible. Consistency matters more than perfection.
                </p>
              </div>
              <div className="bg-neutralLight rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Do you offer early morning or evening sessions?</h3>
                <p className="text-neutralDark/80">
                  Yes. Sessions are available as early as 6am and as late as 7pm to accommodate work schedules. We'll find times that work for you.
                </p>
              </div>
              <div className="bg-neutralLight rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Will I be exhausted after training?</h3>
                <p className="text-neutralDark/80">
                  No. You'll feel energized, not depleted. We're not doing exhausting "bootcamp" style workouts. You're building strength and improving movement in ways that give you energy. Many clients schedule sessions during lunch or before work because they feel better afterward.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Train Efficiently?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> to assess your needs, then we'll design an efficient training program that fits your schedule.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default TrainingForBusyProfessionals;

