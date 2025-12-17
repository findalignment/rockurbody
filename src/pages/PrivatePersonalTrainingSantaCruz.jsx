import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ComparisonTable from '../components/ComparisonTable';

function PrivatePersonalTrainingSantaCruz() {
  // LocalBusiness Schema for SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness", "SportsActivityLocation"],
    "name": "RockUrBody - Private Personal Training Santa Cruz",
    "image": "https://rockurbody.com/logo.png",
    "description": "Private one-on-one personal training in Santa Cruz. Customized movement coaching, structural integration, and strength training in a private studio environment.",
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
    "url": "https://rockurbody.com/private-personal-training-santa-cruz",
    "telephone": "+1-831-419-4422",
    "priceRange": "$$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:00",
        "closes": "20:00"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Private Personal Training Santa Cruz | One-on-One Coaching | RockUrBody"
        description="Private personal training in Santa Cruz. One-on-one movement coaching tailored to your body, goals, and needs. Structural integration and movement education."
        keywords="private personal training Santa Cruz, one on one training Santa Cruz, personal trainer Santa Cruz, movement coaching Santa Cruz, private training"
        url="/private-personal-training-santa-cruz"
      />
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Private Personal Training Santa Cruz
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              One-on-one movement coaching tailored to your body, goals, and needs. Personalized training that addresses your specific patterns.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Why Private Training?</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Private training isn't just about having a trainer to yourself. It's about personalized attention to your specific body, your specific patterns, your specific needs.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              In group classes or generic programs, you get generic solutions. In private training, you get solutions tailored to you. That's the difference.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What You Get</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Personalized Assessment</h3>
                <p className="text-neutralDark/80">We assess your specific movement patterns, restrictions, and needs. Learn about <Link to="/movement-assessment-santa-cruz" className="text-accent hover:underline">movement assessment</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Customized Programming</h3>
                <p className="text-neutralDark/80">Every session is tailored to your body and goals. No generic programs, no one-size-fits-all.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Real-Time Feedback</h3>
                <p className="text-neutralDark/80">We watch you move, we correct in real-time, we teach you how to move better.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Integrated Approach</h3>
                <p className="text-neutralDark/80">We combine structural integration and movement education. Learn about <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline">movement coaching</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Who This Is For</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Private training is for people who want personalized attention. You might have specific goals, specific limitations, or you might just want training that's tailored to you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-accent/5 rounded-lg p-6 border-l-4 border-accent">
                <h3 className="font-semibold text-primary mb-2">You'll Benefit If You:</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Have specific pain or movement limitations</li>
                  <li>• Want undivided attention and coaching</li>
                  <li>• Prefer working out away from crowded gyms</li>
                  <li>• Value quality over quantity</li>
                  <li>• Want to understand your body better</li>
                  <li>• Need a program designed for YOUR structure</li>
                </ul>
              </div>
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <h3 className="font-semibold text-primary mb-2">Especially Useful For:</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Professionals with limited time</li>
                  <li>• People returning from injury</li>
                  <li>• Active adults (40s, 50s, 60s+)</li>
                  <li>• Athletes with specific performance goals</li>
                  <li>• Anyone intimidated by traditional gyms</li>
                  <li>• People who've "tried everything"</li>
                </ul>
              </div>
            </div>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about our <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline font-semibold">movement coaching</Link> approach.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-4 text-center">Private Studio vs. Big Box Gym Training</h2>
            <p className="text-lg text-neutralDark/80 text-center mb-12 max-w-3xl mx-auto">
              There's a reason discerning clients choose private training over corporate gym memberships. Here's the real difference.
            </p>
            <ComparisonTable />
            <div className="mt-12 bg-accent/10 rounded-xl p-6 max-w-3xl mx-auto text-center border-2 border-accent/20">
              <p className="text-lg text-neutralDark/80 leading-relaxed">
                <strong className="text-primary">The Bottom Line:</strong> You're not paying for a gym membership. You're investing in expertise, personalized attention, and results that last. Private training is more expensive upfront, but infinitely more valuable long-term.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Training Locations in Santa Cruz</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-8">
              We train at Mavericks Fitness in Santa Cruz or your private location. Both options provide a focused, distraction-free environment, easily accessible from downtown, the Westside, Eastside, and surrounding communities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">100% Private</h3>
                <p className="text-neutralDark/80">Just you and Rock Hudson. No distractions, no crowds.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Fully Equipped</h3>
                <p className="text-neutralDark/80">Everything needed for comprehensive training.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Flexible Hours</h3>
                <p className="text-neutralDark/80">Early morning through evening sessions available.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Serving These Areas:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 text-neutralDark/80">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Downtown Santa Cruz
                </div>
                <div className="flex items-center gap-2 text-neutralDark/80">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Westside
                </div>
                <div className="flex items-center gap-2 text-neutralDark/80">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Eastside
                </div>
                <div className="flex items-center gap-2 text-neutralDark/80">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Capitola
                </div>
                <div className="flex items-center gap-2 text-neutralDark/80">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Aptos
                </div>
                <div className="flex items-center gap-2 text-neutralDark/80">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Scotts Valley
                </div>
                <div className="flex items-center gap-2 text-neutralDark/80">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Soquel
                </div>
                <div className="flex items-center gap-2 text-neutralDark/80">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Live Oak
                </div>
                <div className="flex items-center gap-2 text-neutralDark/80">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Felton
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">Client Testimonials</h2>
            
            <div className="space-y-8">
              <div className="bg-neutralLight rounded-xl p-8 shadow-md">
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4 italic">
                  "Rock listens carefully, adjusts on the spot, and pays attention to details most people miss. He changes the workouts often enough to keep them interesting, but never just for the sake of novelty. Sessions are focused, efficient, and held in a clean, well-equipped, private space that feels a world away from a typical gym."
                </p>
                <p className="text-primary font-semibold">Ellen M., Santa Cruz</p>
              </div>

              <div className="bg-neutralLight rounded-xl p-8 shadow-md">
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4 italic">
                  "His gym is clean and private, and one of the only truly welcoming gym environments I've ever experienced. The level of strength and comfort in my body that I've developed in the past year working with him has exceeded all of my expectations."
                </p>
                <p className="text-primary font-semibold">Tahlia D., Santa Cruz</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready for Private Training?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> to assess your needs, then we'll design your personalized training program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
              <Button to="/book" variant="outline" size="lg">Book Private Training</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PrivatePersonalTrainingSantaCruz;

