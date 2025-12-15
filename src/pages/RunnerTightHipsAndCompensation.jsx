import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RunnerTightHipsAndCompensation() {
  return (
    <>
      <SEO
        title="Runner Tight Hips & Compensation - Running Injury Prevention | RockUrBody"
        description="Tight hips in runners aren't just about flexibility. Learn how running creates compensation patterns, structural restrictions, and how to fix them. Santa Cruz, CA."
        keywords="runner tight hips, running compensation patterns, running injuries, hip restrictions runners, movement patterns runners, Santa Cruz"
        url="/runner-tight-hips-and-compensation"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Runner Tight Hips & Compensation
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Tight hips in runners aren't a flexibility problem. They're a compensation pattern problem.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How Running Creates Compensation</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Running is repetitive. If your body doesn't move well, running amplifies those problems. Your hips get tight because they're compensating for restrictions elsewhere—ankles that don't move, core that doesn't control, alignment that's off.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Over time, these compensation patterns create structural restrictions. Your fascia adapts to the compensation, and the tightness becomes structural, not just muscular.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Common Running Compensation Patterns</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Ankle Restrictions</h3>
                <p className="text-neutralDark/80">If your ankles don't move well, your hips compensate. Learn about <Link to="/mobility-vs-stability-vs-control" className="text-accent hover:underline">mobility vs stability</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Core Control</h3>
                <p className="text-neutralDark/80">If your core doesn't control movement, your hips compensate. Your hips do work they shouldn't, and they get tight.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Alignment Issues</h3>
                <p className="text-neutralDark/80">Poor alignment creates compensation. Learn about <Link to="/what-is-alignment-in-the-body" className="text-accent hover:underline">alignment in the body</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Structural Restrictions</h3>
                <p className="text-neutralDark/80">Fascial restrictions create compensation patterns. Structural work releases these restrictions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Solution</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Fix the compensation pattern, not just the tightness. Address ankle mobility, core control, alignment. Release structural restrictions. Then build movement patterns that serve running.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/cyclists-and-runners" className="text-accent hover:underline">training for runners</Link> and <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline">movement coaching</Link> to fix tight hips.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Fix Your Running Compensation?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              A <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> will identify your compensation patterns and create a plan to fix them.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default RunnerTightHipsAndCompensation;

