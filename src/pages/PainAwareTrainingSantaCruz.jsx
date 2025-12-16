import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function PainAwareTrainingSantaCruz() {
  // LocalBusiness Schema for SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness", "SportsActivityLocation"],
    "name": "RockUrBody - Pain-Aware Training Santa Cruz",
    "image": "https://rockurbody.com/logo.png",
    "description": "Pain-aware training in Santa Cruz. Train safely with chronic pain, injuries, or movement restrictions. Specialized training that works with your body's limitations.",
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
    "url": "https://rockurbody.com/pain-aware-training-santa-cruz",
    "telephone": "+1-831-419-4422",
    "priceRange": "$$$$"
  };

  return (
    <>
      <SEO
        title="Pain-Aware Training Santa Cruz | Training With Pain & Injuries | RockUrBody"
        description="Pain-aware training in Santa Cruz. Train safely with chronic pain, injuries, or movement restrictions. Work with your body's limitations, not against them."
        keywords="pain aware training Santa Cruz, training with pain, training with injuries, chronic pain training, movement restrictions, Santa Cruz"
        url="/pain-aware-training-santa-cruz"
      />
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Pain-Aware Training Santa Cruz
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Train safely with pain, injuries, or movement restrictions. Work with your body's limitations, not against them.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What Is Pain-Aware Training?</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Pain-aware training means training with awareness of your body's limitations. If something hurts, we find a better way. If you have restrictions, we work around them. If you have injuries, we train around them.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              This isn't about avoiding training. It's about training smart. You can still get stronger, still move better, still make progress you just do it in ways that respect your body's limitations.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How We Approach Pain</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Respect Limitations</h3>
                <p className="text-neutralDark/80">We don't push through pain. If something hurts, we find a better way. Learn about <Link to="/strong-but-still-in-pain" className="text-accent hover:underline">being strong but still in pain</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Address Root Causes</h3>
                <p className="text-neutralDark/80">We don't just work around pain we address what's causing it. Structural work, alignment work, movement education.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Build Strength Safely</h3>
                <p className="text-neutralDark/80">You can still get stronger, even with pain. We build strength in ways that support healing, not hinder it.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Movement Quality</h3>
                <p className="text-neutralDark/80">Quality movement reduces pain. We teach you how to move in ways that don't hurt. Learn about <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline">movement coaching</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Who This Is For</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-8">
              Pain-aware training is for anyone dealing with pain, injuries, or movement restrictions. You don't have to stop training you just need to train differently.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-accent/5 rounded-lg p-6 border-l-4 border-accent">
                <h3 className="font-semibold text-primary mb-3">Common Conditions We Work With:</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Chronic back pain or sciatica</li>
                  <li>• Shoulder pain or impingement</li>
                  <li>• Hip pain or labral tears</li>
                  <li>• Knee pain or meniscus issues</li>
                  <li>• Neck pain or tension headaches</li>
                  <li>• Post-surgical rehabilitation</li>
                  <li>• Arthritis or joint degeneration</li>
                  <li>• Movement restrictions from injury</li>
                </ul>
              </div>
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <h3 className="font-semibold text-primary mb-3">What You'll Gain:</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Ability to train without aggravating pain</li>
                  <li>• Understanding of what triggers your pain</li>
                  <li>• Strength built safely and progressively</li>
                  <li>• Better movement patterns</li>
                  <li>• Reduced compensation patterns</li>
                  <li>• Confidence to move without fear</li>
                  <li>• Tools to manage pain long-term</li>
                  <li>• Return to activities you love</li>
                </ul>
              </div>
            </div>
            <p className="text-lg text-neutralDark/80 leading-relaxed mt-8">
              Learn about <Link to="/upgrade-your-body-software" className="text-accent hover:underline font-semibold">upgrading your body's software</Link>, <Link to="/strong-but-still-in-pain" className="text-accent hover:underline">being strong but still in pain</Link>, and <Link to="/what-are-compensation-patterns" className="text-accent hover:underline">compensation patterns</Link> that create pain.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">The Difference Between Pain-Aware Training and "No Pain, No Gain"</h2>
            <div className="bg-neutralLight rounded-xl p-8 shadow-md mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-red-600 mb-4">"No Pain, No Gain" Approach:</h3>
                  <ul className="space-y-2 text-neutralDark/80">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Push through pain, ignore warning signs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Same program for everyone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Work around injuries without addressing them</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Focus only on strength gains</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Risk of re-injury or chronic issues</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-4">Pain-Aware Approach:</h3>
                  <ul className="space-y-2 text-neutralDark/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Listen to pain, find better ways to move</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Customized to YOUR body and limitations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Address root causes while training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Focus on movement quality and strength</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Sustainable progress and reduced pain</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg text-neutralDark/80 leading-relaxed max-w-2xl mx-auto">
                Pain is information. It's your body communicating. Pain-aware training means listening to that information and responding intelligently, not ignoring it.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">Pain-Aware Training in Santa Cruz</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Based in Santa Cruz, serving individuals dealing with pain, chronic injuries, and movement restrictions throughout the area. Private, focused training that respects your body's limitations.
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-md mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">Serving These Communities:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="text-neutralDark/80">Santa Cruz</div>
                <div className="text-neutralDark/80">Capitola</div>
                <div className="text-neutralDark/80">Aptos</div>
                <div className="text-neutralDark/80">Soquel</div>
                <div className="text-neutralDark/80">Scotts Valley</div>
                <div className="text-neutralDark/80">Live Oak</div>
                <div className="text-neutralDark/80">Felton</div>
                <div className="text-neutralDark/80">Ben Lomond</div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-xl p-6 border-l-4 border-accent">
              <p className="text-neutralDark/80 leading-relaxed">
                <strong className="text-primary">Specialized Expertise for Santa Cruz:</strong> With a background in Structural Integration (500+ hours of training) and 15+ years of experience working with chronic pain and movement restrictions, I understand how to work with bodies that hurt. You don't have to choose between training and managing pain you can do both.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">What Clients Say</h2>
            
            <div className="space-y-8">
              <div className="bg-neutralLight rounded-xl p-8 shadow-md">
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4 italic">
                  "Rock meets me where I am and offers challenges with genuine care. The level of strength and comfort in my body that I've developed in the past year working with him has exceeded all of my expectations. I trust him to guide me into new skills and have never once worried about him leading me toward bad form or injury."
                </p>
                <p className="text-primary font-semibold">Tahlia D., Santa Cruz</p>
              </div>

              <div className="bg-neutralLight rounded-xl p-8 shadow-md">
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4 italic">
                  "From day one, I felt safe, respected, and appropriately challenged. He has a sharp eye for alignment and movement. His background in structural integration has helped me understand why my body does what it does, not just how to muscle through an exercise."
                </p>
                <p className="text-primary font-semibold">Ellen M., Santa Cruz</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Train With Pain Awareness?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> to assess your pain and movement restrictions, then we'll design a pain-aware training program.
            </p>
            <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PainAwareTrainingSantaCruz;

