import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ComparisonTable from '../components/ComparisonTable';

function PersonalTrainerSantaCruzForLongevity() {
  // LocalBusiness Schema for SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness", "SportsActivityLocation"],
    "name": "RockUrBody - Personal Training Santa Cruz",
    "image": "https://rockurbody.com/logo.png",
    "description": "Personal training in Santa Cruz focused on longevity. Alignment-based strength training, movement education, and structural integration for aging well.",
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
    "url": "https://rockurbody.com/personal-trainer-santa-cruz-for-longevity",
    "telephone": "+1-831-419-4422",
    "priceRange": "$$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/RockUrBody",
      "https://www.instagram.com/rockurbody"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Santa Cruz"
      },
      {
        "@type": "City",
        "name": "Aptos"
      },
      {
        "@type": "City",
        "name": "Capitola"
      },
      {
        "@type": "City",
        "name": "Scotts Valley"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Personal Trainer Santa Cruz For Longevity | RockUrBody"
        description="Personal training in Santa Cruz focused on longevity. Build strength, mobility, and movement quality that serves you for decades. Alignment-based training for aging well."
        keywords="personal trainer Santa Cruz, longevity training Santa Cruz, personal training Santa Cruz, movement coaching Santa Cruz, strength training Santa Cruz"
        url="/personal-trainer-santa-cruz-for-longevity"
      />
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Personal Trainer Santa Cruz For Longevity
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Personal training that builds movement for the long term. Strength, mobility, and movement quality that serves you for decades.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Why Longevity-Focused Training?</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Most personal training focuses on short-term goals: lose weight, get stronger, look better. That's fine, but it doesn't account for the long term.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Longevity-focused training is different. Every movement, every exercise, every session is an investment in your future self. You're not just training for today you're building movement capital that pays dividends for decades.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What Makes This Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Alignment-Based</h3>
                <p className="text-neutralDark/80">Build strength from proper alignment, not compensation. Learn about <Link to="/alignment-based-strength-training" className="text-accent hover:underline">alignment-based training</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Load Management</h3>
                <p className="text-neutralDark/80">Train hard, but manage load intelligently. Learn about <Link to="/load-management-for-longevity" className="text-accent hover:underline">load management</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Movement Quality</h3>
                <p className="text-neutralDark/80">Quality movement creates quality strength. Learn about <Link to="/strength-without-wear-and-tear" className="text-accent hover:underline">strength without wear and tear</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Pain-Aware</h3>
                <p className="text-neutralDark/80">We work with your body's limitations, not against them. Learn about <Link to="/pain-aware-training-santa-cruz" className="text-accent hover:underline">pain-aware training</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Who This Is For</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              This is for people who want to train for the long term. You're not just looking for quick results you want movement that serves you for decades. You want to age well, stay mobile, stay strong, stay independent.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about <Link to="/train-for-longevity" className="text-accent hover:underline font-semibold">training for longevity</Link> and the dividends philosophy.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-4 text-center">Why Choose Private Training Over Big Box Gyms?</h2>
            <p className="text-lg text-neutralDark/80 text-center mb-12 max-w-3xl mx-auto">
              Not all personal training is created equal. Here's what makes private, specialized training in Santa Cruz different from corporate gym trainers.
            </p>
            <ComparisonTable />
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Serving Santa Cruz and Surrounding Areas</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-8">
              Based in Santa Cruz, I work with clients throughout the greater Santa Cruz area. Whether you're coming from the Westside, the Eastside, or nearby communities, you'll find a private, focused training environment that's a world away from crowded gyms.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Areas Served:</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Downtown Santa Cruz
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Westside Santa Cruz
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Eastside Santa Cruz
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Live Oak
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Capitola
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">&nbsp;</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Aptos
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Soquel
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Scotts Valley
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Felton
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Boulder Creek
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-accent/10 rounded-xl p-6 border-l-4 border-accent">
              <p className="text-neutralDark/80 leading-relaxed">
                <strong className="text-primary">Why Santa Cruz?</strong> The active lifestyle here means people want training that supports their adventures, whether that's surfing at Pleasure Point, hiking in the Redwoods, or simply walking the Westcliff Drive with confidence and ease. Longevity training means you can keep doing what you love for decades to come.
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
                  "I asked my physical therapist to recommend a personal trainer, and she suggested Rock. From day one, I felt safe, respected, and appropriately challenged. He has a sharp eye for alignment and movement. His background in structural integration has helped me understand why my body does what it does, not just how to muscle through an exercise. My strength, balance, and confidence have all improved in ways I can feel in day-to-day life."
                </p>
                <p className="text-primary font-semibold">Ellen M., Santa Cruz</p>
              </div>

              <div className="bg-neutralLight rounded-xl p-8 shadow-md">
                <p className="text-lg text-neutralDark/80 leading-relaxed mb-4 italic">
                  "Rock is an encyclopedia of anatomy knowledge with deep intuition on how to help people address and move through their physical challenges. I trust him to guide me into new skills and have never once worried about him leading me toward bad form or injury. The level of strength and comfort in my body that I've developed in the past year working with him has exceeded all of my expectations."
                </p>
                <p className="text-primary font-semibold">Tahlia D., Santa Cruz</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Train for the Long Term?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> to assess your current movement patterns, then we'll design a longevity-focused training program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
              <Button to="/book" variant="outline" size="lg">Book Training Session</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PersonalTrainerSantaCruzForLongevity;

