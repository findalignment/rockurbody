import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NeckShoulderTensionFromDeskWork() {
  return (
    <>
      <SEO
        title="Neck & Shoulder Tension From Desk Work - Posture Problems | RockUrBody"
        description="Neck and shoulder tension from desk work isn't just about posture. Learn how desk work creates structural restrictions and compensation patterns, and how to fix them."
        keywords="neck tension desk work, shoulder pain from sitting, desk posture problems, neck shoulder tension, structural integration, Santa Cruz"
        url="/neck-shoulder-tension-from-desk-work"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Neck & Shoulder Tension From Desk Work
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Desk work doesn't just create bad posture. It creates structural restrictions and compensation patterns that cause chronic tension.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How Desk Work Creates Tension</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              When you sit at a desk all day, your head moves forward. Your shoulders round. Your upper back gets tight. Over time, this creates fascial restrictions that don't just go away when you stand up.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              These restrictions create compensation patterns. Your neck and shoulders have to work harder to hold your head up. Your breathing gets restricted. Everything gets tight and achy.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Connection</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Posture & Breathing</h3>
                <p className="text-neutralDark/80">Poor posture restricts breathing, which creates tension. Learn about the <Link to="/breathing-and-posture-connection" className="text-accent hover:underline">breathing and posture connection</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Structural Restrictions</h3>
                <p className="text-neutralDark/80">Fascial restrictions in your neck, shoulders, and upper back create chronic tension that stretching won't fix.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Compensation Patterns</h3>
                <p className="text-neutralDark/80">Your body compensates for desk work, creating patterns that cause tension. Learn about <Link to="/what-are-compensation-patterns" className="text-accent hover:underline">compensation patterns</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">The Solution</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Address the structural restrictions that desk work creates. Release the fascial restrictions in your neck, shoulders, and upper back. Restore proper alignment. Then build movement patterns that counter the effects of desk work.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/desk-worker-wellness" className="text-accent hover:underline">desk worker wellness</Link> and <Link to="/posture-coaching-santa-cruz" className="text-accent hover:underline">posture coaching</Link> to address neck and shoulder tension.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Fix Your Neck & Shoulder Tension?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              A <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> will identify the restrictions causing your tension and create a plan to address them.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default NeckShoulderTensionFromDeskWork;

