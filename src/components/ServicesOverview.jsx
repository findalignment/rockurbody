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
      title: "Body Systems Check",
      description: "A comprehensive assessment of your alignment, movement patterns, and structural imbalances. We identify what's working, what's not, and create a clear roadmap for improvement.",
      pricing: "90 minutes • $250",
      link: "/body-systems-check",
      cta: "Learn More",
      bookLink: "/body-systems-check",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Private Movement Coaching",
      description: "Intelligent training that builds strength, mobility, and movement quality from the ground up. Foundation first, then build. Personalized to your body and goals.",
      pricing: "30-120 minutes • From $100",
      link: "/what-is-movement-education",
      cta: "Learn More",
      bookLink: "/book/move60",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Structural Integration",
      description: "Hands-on bodywork that reorganizes your connective tissue (fascia) for better alignment, easier movement, and lasting change. Systematic, progressive, transformative.",
      pricing: "60-120 minutes • From $180",
      link: "/what-is-structural-integration",
      cta: "Learn More",
      bookLink: "/book/si60",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            Three Clear Ways to Upgrade
          </h2>
          <p className="text-lg md:text-xl text-neutralDark/80 max-w-3xl mx-auto leading-relaxed">
            Start with a systems check, commit to a focused upgrade plan, or invest in ongoing coaching for long-term performance.
          </p>
        </div>

        {/* Service Cards Grid - 3 tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
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

        {/* Why This Works Section */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl md:text-3xl font-heading text-primary mb-6 text-center">
            Why This Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Systems Thinking</h4>
                <p className="text-neutralDark/80 text-sm">Your body works as an integrated system. We address root causes, not just symptoms.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Structure + Movement</h4>
                <p className="text-neutralDark/80 text-sm">Hands-on work reorganizes tissue. Movement education makes it stick.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Progressive Protocol</h4>
                <p className="text-neutralDark/80 text-sm">Systematic approach builds on itself. Each session sets up the next.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Lasting Change</h4>
                <p className="text-neutralDark/80 text-sm">We don't just fix problems. We upgrade your movement patterns for the long term.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Santa Cruz Personal Training Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-12 border-2 border-accent/20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-heading text-primary mb-4">
              Santa Cruz Personal Training & Movement Coaching
            </h3>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Based in Santa Cruz, I work with clients throughout the area who want intelligent, personalized training. Whether you're in downtown Santa Cruz, Westside, Capitola, or Aptos, we can work together at my private studio or at select outdoor locations.
            </p>
            <p className="text-neutralDark/80">
              Looking for a <Link to="/personal-trainer-santa-cruz" className="text-accent hover:underline font-semibold">personal trainer in Santa Cruz</Link> who understands the unique needs of active people? From surfers and trail runners to desk workers and active seniors, I help Santa Cruz residents move better, feel better, and build strength that lasts.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to="/body-systems-check"
              variant="primary"
              size="lg"
            >
              Book a Systems Check
            </Button>
            <Button
              to="/how-it-works"
              variant="outline"
              size="lg"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;

