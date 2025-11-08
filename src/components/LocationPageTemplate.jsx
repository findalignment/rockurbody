import { Helmet } from 'react-helmet-async';
import PageLayout from './PageLayout';
import PageHero from './PageHero';
import Button from './Button';

/**
 * Reusable template for location-based SEO pages
 */
function LocationPageTemplate({ 
  city, 
  county,
  state = 'California',
  driveTime = '45 minutes',
  heroImage = '/services-hero.jpg',
  nearbyAreas = []
}) {
  const pageTitle = `Mobile Personal Training & Structural Integration in ${city}, ${state}`;
  const metaDescription = `Mobile personal training, movement education & structural integration serving ${city}, CA. Rock Hudson brings expert bodywork & corrective exercise to your location. Book now!`;

  return (
    <PageLayout>
      <Helmet>
        <title>{pageTitle} | Rock Your Body</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <link rel="canonical" href={`https://rockyourbody.com/${city.toLowerCase().replace(/\s+/g, '-')}-personal-training`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Mobile Personal Training",
            "provider": {
              "@type": ["FitnessCenter", "HealthAndBeautyBusiness"],
              "name": "Rock Your Body",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Santa Cruz",
                "addressRegion": "CA",
                "addressCountry": "US"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": city,
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": county
              }
            },
            "description": `Mobile personal training and structural integration services in ${city}, ${state}. One-on-one training at your home or preferred location.`,
            "url": `https://rockyourbody.com/${city.toLowerCase().replace(/\s+/g, '-')}-personal-training`
          })}
        </script>
      </Helmet>

      <PageHero 
        imageSrc={heroImage}
        title={`Personal Training in ${city}`}
        subtitle={`Mobile Movement Education & Structural Integration • ${county}`}
      />

      <div className="pt-20 pb-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Mobile Service Highlight */}
          <div className="bg-accent/10 border-l-4 border-accent p-8 md:p-10 rounded-lg mb-16">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutralDark mb-3">
                  I Come to You in {city}
                </h2>
                <p className="text-lg md:text-xl text-neutralDark/80 leading-relaxed">
                  Professional mobile personal training, structural integration, and movement education at your home, park, or preferred location. Approximately {driveTime} from my Santa Cruz base.
                </p>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Personal Training & Bodywork in {city}</h2>
            <p className="text-lg md:text-xl text-neutralDark/80 leading-relaxed mb-6">
              Hi, I'm Rock Hudson. I specialize in helping people in {city} move better, feel better, and get lasting results through a unique combination of structural integration (like Rolfing) and intelligent movement education.
            </p>
            <p className="text-lg md:text-xl text-neutralDark/80 leading-relaxed">
              Unlike typical personal trainers who just count reps, I look at <em>why</em> your body moves the way it does. Through hands-on bodywork and personalized movement coaching, I help you address the root causes of pain, stiffness, and limitation—not just treat symptoms.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-neutralLight">
              <h3 className="text-2xl font-bold text-primary mb-4">Structural Integration</h3>
              <p className="text-base md:text-lg text-neutralDark/80 mb-6 leading-relaxed">
                Hands-on fascia work that realigns your body's structure. Think deep tissue massage meets body realignment. Great for chronic pain, posture issues, and movement restrictions.
              </p>
              <ul className="space-y-3 text-base text-neutralDark/80">
                <li>• 60, 90, or 120-minute sessions</li>
                <li>• 12-Series programs available</li>
                <li>• Portable table setup at your location</li>
              </ul>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-neutralLight">
              <h3 className="text-2xl font-bold text-primary mb-4">Movement Education</h3>
              <p className="text-base md:text-lg text-neutralDark/80 mb-6 leading-relaxed">
                One-on-one training that teaches you how to move better in real life. Personalized exercise programs based on assessment and your specific goals.
              </p>
              <ul className="space-y-3 text-base text-neutralDark/80">
                <li>• 30, 60, 90, or 120-minute sessions</li>
                <li>• Training at home, park, or gym</li>
                <li>• Package programs for better value</li>
              </ul>
            </div>
          </div>

          {/* Who It's For */}
          <div className="bg-sage/10 p-8 md:p-10 rounded-xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutralDark mb-6">Who This Is For</h2>
            <div className="grid md:grid-cols-2 gap-6 text-base md:text-lg text-neutralDark/80">
              <ul className="space-y-3">
                <li>✓ Dealing with chronic pain or stiffness</li>
                <li>✓ Recovering from injury</li>
                <li>✓ Poor posture from desk work</li>
                <li>✓ Want to move better as you age</li>
              </ul>
              <ul className="space-y-3">
                <li>✓ Athletes wanting better performance</li>
                <li>✓ Post-surgery rehab</li>
                <li>✓ Tired of "just stretch more" advice</li>
                <li>✓ Ready for real, lasting change</li>
              </ul>
            </div>
          </div>

          {/* Nearby Areas */}
          {nearbyAreas.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-neutralDark mb-6">
                Also Serving Nearby Areas
              </h3>
              <p className="text-base md:text-lg text-neutralDark/80 mb-6 leading-relaxed">
                In addition to {city}, I provide mobile training services throughout:
              </p>
              <div className="flex flex-wrap gap-3">
                {nearbyAreas.map((area, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-neutralLight text-neutralDark rounded-full text-base"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutralDark mb-8">How Mobile Training Works</h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-neutralDark mb-2">Book Your Session</h4>
                  <p className="text-base md:text-lg text-neutralDark/80 leading-relaxed">Schedule a free consultation or dive straight into a session. Your choice.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-neutralDark mb-2">I Come to You</h4>
                  <p className="text-base md:text-lg text-neutralDark/80 leading-relaxed">I bring all necessary equipment to your home, park, or preferred location in {city}.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-neutralDark mb-2">Get Results</h4>
                  <p className="text-base md:text-lg text-neutralDark/80 leading-relaxed">Move better, feel better, live better. Simple as that.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-white p-10 md:p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Move Better?</h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Let's get your body back in business. Book a session in {city} today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button 
                to="/consult"
                variant="secondary"
                size="large"
              >
                Free Consultation
              </Button>
              <Button 
                to="/book"
                variant="accent"
                size="large"
              >
                Book a Session
              </Button>
            </div>
            <p className="mt-6 text-base text-white/70">
              Travel time from Santa Cruz billed at session rate
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default LocationPageTemplate;

