import { Link } from 'react-router-dom';
import Button from './Button';

/**
 * Services Overview Section
 * Displays a comprehensive overview of Rock Your Body services
 * Designed for mobile-first responsive layout with SEO optimization
 */
function ServicesOverview() {
  const sections = [
    {
      title: "Structural Integration",
      description: "Hands-on bodywork that reorganizes your connective tissue (fascia) for better alignment, easier movement, and lasting change. The 12-Series is a systematic progression through your entire body.",
      pricing: "From $180/session • 60-120 minutes",
      link: "/what-is-structural-integration",
      cta: "Learn About SI",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Movement Education",
      description: "Intelligent training that teaches strength, core stability, mobility, coordination, awareness, balance, and flexibility. Foundation first, then build. Sustainable challenge without deterring you from your workout.",
      pricing: "From $90/session • 30-120 minutes",
      link: "/what-is-movement-education",
      cta: "Learn About Movement",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "The 12-Series",
      description: "The complete Anatomy Trains Structural Integration protocol. Sessions 1-4: superficial layers (front line, back line, lateral line, spiral line). Sessions 5-8: deep core (up to waist, above waist, back, head and neck). Sessions 9-12: integration (below waist, above waist, arms, wrapping it all together).",
      link: "/12-series",
      cta: "Explore 12-Series",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Smart Starts",
      description: "Not sure where to begin? The Reset (6 sessions), Hip Series (3 sessions), or Full Repatterning (36 sessions). Each designed as a clear entry point based on your goals and timeline.",
      link: "/smart-starts",
      cta: "Find Your Start",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "My Approach",
      description: "I work hands-on with your structure and teach intelligent movement. Most practitioners focus on one or the other. I address both because structure without movement doesn't stick, and movement without structure is building on a faulty foundation.",
      link: "/approach",
      cta: "Read My Philosophy",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Packages & Pricing",
      description: "Single sessions, movement packages (5, 10, 20 sessions), complete SI series, and combination programs. Transparent pricing with better rates for committed series work.",
      link: "/packages",
      cta: "View Packages",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-primary mb-4">
            What Rock Your Body Offers
          </h2>
          <p className="text-lg md:text-xl text-neutralDark/80 max-w-3xl mx-auto leading-relaxed">
            Comprehensive bodywork and movement education to help you live better and more comfortably in your body
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent/30 group flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-accent group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-heading text-primary flex-1">
                  {section.title}
                </h3>
              </div>
              
              <p className="text-neutralDark/80 leading-relaxed mb-4 text-sm md:text-base flex-grow">
                {section.description}
              </p>
              
              {section.pricing && (
                <div className="mb-4 pb-4 border-b border-neutralLight">
                  <p className="text-sm font-semibold text-primary">
                    {section.pricing}
                  </p>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                <Link 
                  to={section.link}
                  className="inline-flex items-center justify-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors group text-sm"
                >
                  <span>{section.cta}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                {section.bookLink && (
                  <Link 
                    to={section.bookLink}
                    className="inline-flex items-center justify-center gap-1 px-3 py-1.5 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Book</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-heading text-primary mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-neutralDark/80 mb-6 md:mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your goals, or browse all services to find what fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/consult"
              variant="primary"
              size="lg"
            >
              Book Free Consultation
            </Button>
            <Button
              to="/services"
              variant="outline"
              size="lg"
            >
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;

