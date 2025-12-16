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
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What You Get</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Training that fits your life. Sessions that address your specific problems. Practices you can do anywhere. Results without taking over your schedule.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/private-personal-training-santa-cruz" className="text-accent hover:underline font-semibold">private personal training</Link> tailored to busy professionals.
            </p>
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

