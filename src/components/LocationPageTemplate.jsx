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
  const pageTitle = `Rock Your Body | Structural Integration & Functional Fitness in ${city}, CA`;
  const metaDescription = `Private movement education and structural integration serving ${city}, CA. Personalized training that restores alignment, strength, and balance. Mobile service from Santa Cruz.`;

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
                  Unlike typical personal trainers who just count reps, I look at <em>why</em> your body moves the way it does. Through hands-on bodywork and personalized movement coaching, I help you address the root causes of pain, stiffness, and limitation—not just treat symptoms.
                </p>
                <p className="text-base md:text-lg text-neutralDark/70 leading-relaxed">
                  Movement is your foundation. When that foundation is compromised—whether by old injuries, compensation patterns, or simply years of repetitive stress—everything becomes harder. My approach addresses both structure (how your tissues are organized) and function (how you actually move). That's why the changes hold.
                </p>
              </div>
            </div>
          </div>

          {/* Extended Content Block */}
          <div className="bg-neutralLight/30 p-8 md:p-10 rounded-xl mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-neutralDark mb-6">Why {city} Clients Choose Mobile Sessions</h3>
            <div className="prose prose-lg max-w-none text-neutralDark/80">
              <p className="leading-relaxed mb-4">
                Training in your own space eliminates the barrier of commuting to yet another appointment. For busy professionals in {city}, this matters. You're not fighting traffic or rearranging your schedule around gym hours. Sessions happen in your home, your garage gym, or even at a local park—wherever you're most comfortable and focused.
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

          {/* Drive Time & Cost Calculator */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutralDark mb-8">Drive Time & Session Cost from Santa Cruz</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-neutralLight">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=311+Soquel+Ave+Santa+Cruz+CA+95062&destination=${encodeURIComponent(city + ', CA')}&mode=driving`}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Driving directions from Santa Cruz to ${city}`}
                />
              </div>

              {/* Calculator */}
              <div className="bg-sage/10 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-neutralDark mb-4">Estimate Your Session Cost</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-neutralDark/70">Drive Time (round-trip):</span>
                      <span className="font-bold text-primary">{driveTime === '45 minutes' ? '1.5 hours' : driveTime.includes('hour') ? driveTime.replace('minutes', 'min').replace(' ', '') : `${parseInt(driveTime) * 2} minutes`}</span>
                    </div>
                    <p className="text-sm text-neutralDark/60 italic">
                      *Actual time varies with traffic and roadwork
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-neutralDark/70 mb-2">Example: 90-Minute SI Session</div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Session (90 min @ $180/hr):</span>
                        <span className="font-semibold">$270</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Drive time ({driveTime.includes('hour') ? driveTime.split(' ')[0] + ' hr' : Math.round(parseInt(driveTime) * 2 / 60 * 10) / 10 + ' hr'} @ $180/hr):</span>
                        <span className="font-semibold">${driveTime.includes('hour') ? Math.round(parseFloat(driveTime) * 180) : Math.round(parseInt(driveTime) * 2 / 60 * 180)}</span>
                      </div>
                      <div className="border-t border-neutralLight pt-2 flex justify-between text-base">
                        <span className="font-bold">Total Investment:</span>
                        <span className="font-bold text-primary">${270 + (driveTime.includes('hour') ? Math.round(parseFloat(driveTime) * 180) : Math.round(parseInt(driveTime) * 2 / 60 * 180))}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-neutralDark/70 leading-relaxed">
                  <p className="mb-2"><strong>Note:</strong> All session types billed at $180/hour for active work time. Drive time charged at the same rate for round-trip travel.</p>
                  <p>Package discounts available for committed series (12-Series, movement packages, etc.)</p>
                </div>

                <a
                  href={`https://www.google.com/maps/dir/311+Soquel+Ave,+Santa+Cruz,+CA+95062/${encodeURIComponent(city + ', CA')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span>Get Directions in Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutralDark mb-8">What to Expect</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl md:text-2xl font-bold text-neutralDark mb-3">Initial Assessment</h4>
                <p className="text-base md:text-lg text-neutralDark/80 leading-relaxed">
                  We start with a thorough movement assessment and conversation about your goals, history, and what's getting in the way. I'll explain what I see and recommend a specific plan—not a generic program.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl md:text-2xl font-bold text-neutralDark mb-3">Tailored Sessions</h4>
                <p className="text-base md:text-lg text-neutralDark/80 leading-relaxed">
                  Each session combines hands-on structural work with movement education specific to your patterns. I bring everything needed—massage table for bodywork, equipment for movement training. Sessions in {city} are conducted with the same attention to detail as those in my studio.
                </p>
              </div>
              <div className="border-l-4 border-sage pl-6">
                <h4 className="text-xl md:text-2xl font-bold text-neutralDark mb-3">Measurable Progress</h4>
                <p className="text-base md:text-lg text-neutralDark/80 leading-relaxed">
                  Most clients feel meaningful changes within 3-6 sessions. Lasting transformation typically requires 8-12 sessions with consistent practice. This isn't quick-fix work—it's change that holds because your movement patterns actually shift.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-white p-10 md:p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Move Better?</h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Let's get your body back in business. Book a session in {city} today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto mb-6">
              <Button 
                to="/consult"
                variant="secondary"
                size="large"
                className="w-full sm:w-auto"
              >
                Free Consultation
              </Button>
              <Button 
                to="/book"
                variant="accent"
                size="large"
                className="w-full sm:w-auto"
              >
                Book a Session
              </Button>
            </div>
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

