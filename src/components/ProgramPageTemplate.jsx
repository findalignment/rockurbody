import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';
import PageHero from './PageHero';

/**
 * Reusable template for program detail pages with accordion format
 */
function ProgramPageTemplate({ 
  programName,
  tagline,
  price,
  heroImage = '/packages-hero.jpg',
  whatYouGet = [],
  accordionSections = [],
  stripeLink,
  recommended = false
}) {
  const [openIndex, setOpenIndex] = useState(0); // First section open by default

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageLayout>
      <PageHero 
        imageSrc={heroImage}
        title={programName}
        subtitle={tagline}
      />

      <div className="pt-20 pb-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* What You Get - Simple List */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">What You Get</h2>
            <div className="bg-sage/10 p-8 md:p-10 rounded-xl">
              <ul className="space-y-4 text-lg md:text-xl text-neutralDark/80">
                {whatYouGet.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent font-bold text-2xl flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Accordion Sections - Deep Dive */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">Program Details</h2>
            <div className="space-y-4">
              {accordionSections.map((section, index) => {
                const isOpen = openIndex === index;
                
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl overflow-hidden border-2 border-neutralLight hover:border-accent/50 transition-colors shadow-sm"
                  >
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full text-left p-6 md:p-8 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      <h3 className="text-xl md:text-2xl font-semibold text-neutralDark pr-8">
                        {section.title}
                      </h3>
                      <span className={`text-accent text-3xl font-bold transition-transform flex-shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
                        +
                      </span>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-[2000px]' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-base md:text-lg text-neutralDark/80 leading-relaxed prose prose-lg max-w-none">
                        {section.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Footer with Pricing */}
          <div className="bg-primary text-white p-10 md:p-12 rounded-2xl text-center">
            {recommended && (
              <div className="inline-block bg-accent px-4 py-2 rounded-full text-sm font-bold mb-4">
                RECOMMENDED
              </div>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start?</h2>
            <p className="text-xl md:text-2xl mb-6 text-white/90 leading-relaxed">
              Let's get your body back in business.
            </p>
            <div className="text-5xl md:text-6xl font-bold mb-2">${price.toLocaleString()}</div>
            <p className="text-lg md:text-xl text-white/80 mb-8">{tagline}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={stripeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold text-lg hover:bg-accent/90 transition-colors shadow-lg"
              >
                Purchase Program
              </a>
              <Link
                to="/consult"
                className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors"
              >
                Free Consultation
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default ProgramPageTemplate;

