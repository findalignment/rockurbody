import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function TrainingForHikersAndTrailRunners() {
  return (
    <>
      <SEO
        title="Training For Hikers & Trail Runners - Movement Coaching | RockUrBody"
        description="Movement coaching for hikers and trail runners. Address hiking and running patterns, prevent injuries, and improve performance. Training designed for trail athletes."
        keywords="training for hikers, training for trail runners, hiking training, trail running training, movement coaching hikers, Santa Cruz"
        url="/training-for-hikers-and-trail-runners"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Training For Hikers & Trail Runners
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Movement coaching designed for hikers and trail runners. Address trail-specific patterns, prevent injuries, and improve performance.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Trail-Specific Challenges</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Hiking and trail running create specific demands. Uneven terrain, elevation changes, long distances—trail activities require stability, mobility, and endurance in ways that road running doesn't.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              These demands create specific problems: hip restrictions from repetitive patterns, knee issues from compensation, lower back problems from load. We address these trail-specific patterns.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How We Help Trail Athletes</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Address Hip Restrictions</h3>
                <p className="text-neutralDark/80">Repetitive trail patterns create hip restrictions. Learn about <Link to="/runner-tight-hips-and-compensation" className="text-accent hover:underline">runner tight hips</Link> and compensation patterns.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Improve Stability</h3>
                <p className="text-neutralDark/80">Uneven terrain requires stability. Learn about <Link to="/mobility-vs-stability-vs-control" className="text-accent hover:underline">mobility vs stability vs control</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Prevent Knee Problems</h3>
                <p className="text-neutralDark/80">Trail activities can create knee issues. We address loading patterns and compensation to prevent problems.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Build Trail-Specific Strength</h3>
                <p className="text-neutralDark/80">Strength that serves trail activities. Stability, mobility, endurance—training that improves your hiking and running.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What You Get</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Training that addresses trail-specific patterns. Movement coaching that improves your hiking and running. Injury prevention that keeps you on the trail.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/cyclists-and-runners" className="text-accent hover:underline">training for runners</Link> and <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline font-semibold">movement coaching</Link>.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Improve Your Trail Performance?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> to assess your movement patterns, then we'll design a trail-specific training program.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default TrainingForHikersAndTrailRunners;

