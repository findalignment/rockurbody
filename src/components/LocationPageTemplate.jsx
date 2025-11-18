import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';
import PageHero from './PageHero';
import Breadcrumbs from './Breadcrumbs';
import { getBreadcrumbSchema } from '../utils/structuredData';

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
  const pageTitle = `Rock Your Body | Structural Integration & Functional Fitness in ${city}, CA`;
  const metaDescription = `Private movement education and structural integration serving ${city}, CA. Personalized training that restores alignment, strength, and balance. Mobile service from Santa Cruz.`;

  // Breadcrumb data for navigation and SEO
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: '/services' },
    { name: city, url: `/${city.toLowerCase().replace(/\s+/g, '-')}-personal-training` }
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);

  return (
    <PageLayout>
      <Helmet>
        <title>{pageTitle}</title>
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

        {/* Breadcrumb Schema for SEO */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <PageHero 
        imageSrc={heroImage}
        title={`Personal Training in ${city}`}
        subtitle={`Mobile Movement Education & Structural Integration • ${county}`}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumbs items={breadcrumbs} />

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
                  Mobile Service in {city}
                </h2>
                <p className="text-lg md:text-xl text-neutralDark/80 leading-relaxed mb-4">
                  Professional structural integration and movement education at your home, gym, or preferred location. Approximately {driveTime} from my Santa Cruz base (depending on traffic and never-ending roadwork).
                </p>
                <p className="text-base text-neutralDark/70 italic">
                  No upcharge for in-home services. I ask that you pay my standard hourly rate for round-trip drive time.
                </p>
              </div>
            </div>
          </div>

          {/* About Me Section with Photo */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">Personal Training & Bodywork in {city}</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 flex-shrink-0">
                <img 
                  src="/rock.png" 
                  alt="Rock Hudson, certified structural integrator and movement specialist in Santa Cruz" 
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg md:text-xl text-neutralDark/80 leading-relaxed mb-6">
                  Hi, I'm Rock Hudson. I specialize in helping people in {city} move better, feel better, and get lasting results through a unique combination of structural integration (like Rolfing) and intelligent movement education.
                </p>
                <p className="text-lg md:text-xl text-neutralDark/80 leading-relaxed mb-6">
                  Unlike typical personal trainers who just count reps, I look at <em>why</em> your body moves the way it does. Through hands-on bodywork and personalized movement coaching, I help you address the root causes of pain, stiffness, and limitation, not just treat symptoms.
                </p>
                <p className="text-base md:text-lg text-neutralDark/70 leading-relaxed">
                  Movement is your foundation. When that foundation is compromised by old injuries, compensation patterns, or simply years of repetitive stress, everything becomes harder. My approach addresses both structure (how your tissues are organized) and function (how you actually move). That's why the changes hold.
                </p>
              </div>
            </div>
          </div>

          {/* Extended Content Block */}
          <div className="bg-neutralLight/30 p-8 md:p-10 rounded-xl mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-neutralDark mb-6">Why {city} Clients Choose Mobile Sessions</h3>
            <div className="prose prose-lg max-w-none text-neutralDark/80">
              <p className="leading-relaxed mb-4">
                Training in your own space eliminates the barrier of commuting to yet another appointment. For busy professionals in {city}, this matters. You're not fighting traffic or rearranging your schedule around gym hours. Sessions happen in your home, your garage gym, or even at a local park, wherever you're most comfortable and focused.
              </p>
              <p className="leading-relaxed mb-4">
                The work itself doesn't change. Whether we're in my Santa Cruz studio or at your location in {city}, you get the same thorough assessment, the same hands-on structural integration, the same personalized movement education. I bring a professional massage table for bodywork sessions and all necessary equipment for movement training. The quality and attention to detail remain consistent.
              </p>
              <p className="leading-relaxed">
                What does change is convenience and privacy. Some clients prefer the familiarity of their own environment. Others appreciate not having to navigate their post-session body through traffic. Many simply value the time saved. Based in Santa Cruz, I regularly work with clients throughout {county}, and the model works because serious training requires commitment, not commuting.
              </p>
            </div>
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

          {/* Related Services - Internal linking for SEO */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutralDark mb-6">
              Related Services Available in {city}
            </h2>
            <p className="text-base md:text-lg text-neutralDark/80 mb-6 leading-relaxed">
              Whether you're dealing with specific pain, recovering from an injury, or looking to improve your performance, I offer specialized services tailored to your needs:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link 
                to="/back-pain-santa-cruz" 
                className="p-4 bg-white border border-neutralLight rounded-lg hover:border-accent hover:shadow-md transition-all duration-200"
              >
                <h3 className="font-semibold text-neutralDark mb-2">Back Pain Relief</h3>
                <p className="text-sm text-neutralDark/70">Targeted treatment for chronic back pain</p>
              </Link>
              <Link 
                to="/neck-pain-relief" 
                className="p-4 bg-white border border-neutralLight rounded-lg hover:border-accent hover:shadow-md transition-all duration-200"
              >
                <h3 className="font-semibold text-neutralDark mb-2">Neck Pain Relief</h3>
                <p className="text-sm text-neutralDark/70">Address tension and alignment issues</p>
              </Link>
              <Link 
                to="/hip-pain-treatment" 
                className="p-4 bg-white border border-neutralLight rounded-lg hover:border-accent hover:shadow-md transition-all duration-200"
              >
                <h3 className="font-semibold text-neutralDark mb-2">Hip Pain Treatment</h3>
                <p className="text-sm text-neutralDark/70">Restore hip mobility and function</p>
              </Link>
              <Link 
                to="/shoulder-pain-relief" 
                className="p-4 bg-white border border-neutralLight rounded-lg hover:border-accent hover:shadow-md transition-all duration-200"
              >
                <h3 className="font-semibold text-neutralDark mb-2">Shoulder Pain Relief</h3>
                <p className="text-sm text-neutralDark/70">Rotator cuff and shoulder issues</p>
              </Link>
              <Link 
                to="/knee-pain-treatment" 
                className="p-4 bg-white border border-neutralLight rounded-lg hover:border-accent hover:shadow-md transition-all duration-200"
              >
                <h3 className="font-semibold text-neutralDark mb-2">Knee Pain Treatment</h3>
                <p className="text-sm text-neutralDark/70">Improve knee function and reduce pain</p>
              </Link>
              <Link 
                to="/posture-correction" 
                className="p-4 bg-white border border-neutralLight rounded-lg hover:border-accent hover:shadow-md transition-all duration-200"
              >
                <h3 className="font-semibold text-neutralDark mb-2">Posture Correction</h3>
                <p className="text-sm text-neutralDark/70">Fix alignment and movement patterns</p>
              </Link>
              <Link 
                to="/services/injury-recovery" 
                className="p-4 bg-white border border-neutralLight rounded-lg hover:border-accent hover:shadow-md transition-all duration-200"
              >
                <h3 className="font-semibold text-neutralDark mb-2">Injury Recovery</h3>
                <p className="text-sm text-neutralDark/70">Comprehensive rehabilitation approach</p>
              </Link>
              <Link 
                to="/athletic-performance" 
                className="p-4 bg-white border border-neutralLight rounded-lg hover:border-accent hover:shadow-md transition-all duration-200"
              >
                <h3 className="font-semibold text-neutralDark mb-2">Athletic Performance</h3>
                <p className="text-sm text-neutralDark/70">Enhance athletic performance</p>
              </Link>
              <Link 
                to="/chronic-pain-relief" 
                className="p-4 bg-white border border-neutralLight rounded-lg hover:border-accent hover:shadow-md transition-all duration-200"
              >
                <h3 className="font-semibold text-neutralDark mb-2">Chronic Pain Relief</h3>
                <p className="text-sm text-neutralDark/70">Long-term pain management solutions</p>
              </Link>
            </div>
          </div>

          {/* Nearby Areas - Now with clickable links for internal linking */}
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
                  <Link 
                    key={index}
                    to={`/${area.toLowerCase().replace(/\s+/g, '-')}-personal-training`}
                    className="px-4 py-2 bg-neutralLight text-neutralDark rounded-full text-base hover:bg-accent hover:text-white transition-colors duration-200"
                  >
                    {area}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* What to Expect */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutralDark mb-8">What to Expect</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl md:text-2xl font-bold text-neutralDark mb-3">Initial Assessment</h4>
                <p className="text-base md:text-lg text-neutralDark/80 leading-relaxed">
                  We start with a thorough movement assessment and conversation about your goals, history, and what's getting in the way. I'll explain what I see and recommend a specific plan, not a generic program.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl md:text-2xl font-bold text-neutralDark mb-3">Tailored Sessions</h4>
                <p className="text-base md:text-lg text-neutralDark/80 leading-relaxed">
                  Each session combines hands-on structural work with movement education specific to your patterns. I bring everything needed: massage table for bodywork, equipment for movement training. Sessions in {city} are conducted with the same attention to detail as those in my studio.
                </p>
              </div>
              <div className="border-l-4 border-sage pl-6">
                <h4 className="text-xl md:text-2xl font-bold text-neutralDark mb-3">Measurable Progress</h4>
                <p className="text-base md:text-lg text-neutralDark/80 leading-relaxed">
                  Most clients feel meaningful changes within 3-6 sessions. Lasting transformation typically requires 8-12 sessions with consistent practice. This isn't quick-fix work. It's change that holds because your movement patterns actually shift.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-white p-10 md:p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Move Better?</h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Let's get your body back in business. Book a consultation in {city} today.
            </p>
            <Link
              to="/consult"
              className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold text-lg hover:bg-accent/90 transition-colors shadow-lg"
            >
              Free Consultation
            </Link>
            <p className="mt-6 text-base text-white/70">
              Round-trip drive time billed at standard hourly rate • No upcharge for mobile service
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default LocationPageTemplate;

