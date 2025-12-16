import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function PostureCoachingSantaCruz() {
  // LocalBusiness Schema for SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
    "name": "RockUrBody - Posture Coaching Santa Cruz",
    "image": "https://rockurbody.com/logo.png",
    "description": "Posture coaching and correction in Santa Cruz. Fix poor posture through structural integration and movement education. Address root causes, not just symptoms.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Santa Cruz",
      "addressLocality": "Santa Cruz",
      "addressRegion": "CA",
      "postalCode": "95060",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.9741,
      "longitude": -122.0308
    },
    "url": "https://rockurbody.com/posture-coaching-santa-cruz",
    "telephone": "+1-831-419-4422",
    "priceRange": "$$$"
  };

  return (
    <>
      <SEO
        title="Posture Coaching Santa Cruz | Posture Correction & Improvement | RockUrBody"
        description="Posture coaching in Santa Cruz. Fix poor posture through structural integration and movement education. Address root causes, not just symptoms. Santa Cruz, CA."
        keywords="posture coaching Santa Cruz, posture correction Santa Cruz, improve posture, postural alignment, desk posture, Santa Cruz"
        url="/posture-coaching-santa-cruz"
      />
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Posture Coaching Santa Cruz
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Fix poor posture by addressing root causes, not just symptoms. Structural integration and movement education for lasting change.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Why Posture Coaching?</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Most posture "fixes" are temporary. You're told to stand up straight, you do it for a while, then you forget. That's because you're treating the symptom, not the cause.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Posture coaching addresses the root causes: structural restrictions, alignment issues, movement patterns, breathing problems. Fix those, and posture improves naturally.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What We Address</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Structural Restrictions</h3>
                <p className="text-neutralDark/80">Fascial restrictions create poor posture. Structural work releases these restrictions.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Alignment Issues</h3>
                <p className="text-neutralDark/80">Poor alignment creates poor posture. Learn about <Link to="/what-is-alignment-in-the-body" className="text-accent hover:underline">alignment in the body</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Breathing Patterns</h3>
                <p className="text-neutralDark/80">Poor breathing creates poor posture. Learn about the <Link to="/breathing-and-posture-connection" className="text-accent hover:underline">breathing and posture connection</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Movement Patterns</h3>
                <p className="text-neutralDark/80">How you move affects your posture. Movement education changes these patterns.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Who This Is For</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-8">
              Posture coaching is for anyone with poor posture desk workers, athletes, people with chronic pain. If your posture is affecting your life, we can help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-accent/5 rounded-lg p-6 border-l-4 border-accent">
                <h3 className="font-semibold text-primary mb-3">Common Posture Problems:</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Rounded shoulders and forward head</li>
                  <li>• Anterior pelvic tilt or posterior tilt</li>
                  <li>• Slouching at desk or computer</li>
                  <li>• One shoulder higher than the other</li>
                  <li>• Neck and upper back tension</li>
                  <li>• Mid-back stiffness</li>
                </ul>
              </div>
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <h3 className="font-semibold text-primary mb-3">What Improves:</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Less neck and shoulder tension</li>
                  <li>• Better breathing capacity</li>
                  <li>• Reduced headaches</li>
                  <li>• Improved confidence and presence</li>
                  <li>• Better movement efficiency</li>
                  <li>• Reduced fatigue from standing/sitting</li>
                </ul>
              </div>
            </div>
            <p className="text-lg text-neutralDark/80 leading-relaxed mt-8">
              Learn more about <Link to="/posture-correction" className="text-accent hover:underline font-semibold">posture correction</Link>, <Link to="/desk-worker-wellness" className="text-accent hover:underline">desk worker wellness</Link>, and <Link to="/neck-shoulder-tension-from-desk-work" className="text-accent hover:underline">neck and shoulder tension from desk work</Link>.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">Posture Coaching in Santa Cruz</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Based in Santa Cruz, serving desk workers, remote professionals, and active individuals throughout the area who are tired of poor posture affecting their quality of life.
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-md mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">Serving Santa Cruz County:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="text-neutralDark/80">Downtown Santa Cruz</div>
                <div className="text-neutralDark/80">Westside</div>
                <div className="text-neutralDark/80">Eastside</div>
                <div className="text-neutralDark/80">Capitola</div>
                <div className="text-neutralDark/80">Aptos</div>
                <div className="text-neutralDark/80">Soquel</div>
                <div className="text-neutralDark/80">Scotts Valley</div>
                <div className="text-neutralDark/80">Santa Cruz Mountains</div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-xl p-6 border-l-4 border-accent">
              <p className="text-neutralDark/80 leading-relaxed">
                <strong className="text-primary">Perfect for Santa Cruz Professionals:</strong> If you work remotely, spend hours at a computer, or notice your posture getting worse as the day goes on, posture coaching can help. Learn how to set up your workspace, move better throughout the day, and address the structural issues causing poor posture.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">Client Success Stories</h2>
            
            <div className="space-y-8">
              <div className="bg-neutralLight rounded-xl p-8 shadow-md">
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4 italic">
                  "My strength, balance, and confidence have all improved in ways I can feel in day-to-day life. Rock listens carefully, adjusts on the spot, and pays attention to details most people miss."
                </p>
                <p className="text-primary font-semibold">Ellen M., Santa Cruz</p>
              </div>

              <div className="bg-neutralLight rounded-xl p-8 shadow-md">
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4 italic">
                  "Rock is an encyclopedia of anatomy knowledge with deep intuition on how to help people address and move through their physical challenges. Rock meets me where I am and offers challenges with genuine care."
                </p>
                <p className="text-primary font-semibold">Tahlia D., Santa Cruz</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Fix Your Posture?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> to assess your posture and create a plan to improve it.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PostureCoachingSantaCruz;

