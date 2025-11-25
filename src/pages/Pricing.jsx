import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';

function Pricing() {
  const [activeFilter, setActiveFilter] = useState('all');

  // All pricing data organized by category
  const pricingData = {
    movement: [
      {
        name: '5 Movement Sessions',
        price: 810,
        originalPrice: 900,
        discount: '10% OFF',
        sessions: 5,
        duration: '60 min each',
        includes: [
          '5 personalized movement sessions',
          'Learn foundational patterns',
          'Address specific issues',
          'Flexible scheduling'
        ],
        link: '/programs/movement-5-sessions',
        badge: null
      },
      {
        name: '10 Movement Sessions',
        price: 1530,
        originalPrice: 1800,
        discount: '15% OFF',
        sessions: 10,
        duration: '60 min each',
        includes: [
          '10 personalized movement sessions',
          'Real transformation time',
          'Develop sustainable habits',
          'Best value for progress'
        ],
        link: '/programs/movement-10-sessions',
        badge: 'POPULAR'
      },
      {
        name: '20 Movement Sessions',
        price: 2880,
        originalPrice: 3600,
        discount: '20% OFF',
        sessions: 20,
        duration: '60 min each',
        includes: [
          '20 personalized movement sessions',
          'Complete transformation',
          'Master complex patterns',
          'Maximum savings'
        ],
        link: '/programs/movement-20-sessions',
        badge: null
      }
    ],
    si: [
      {
        name: 'Hip Series',
        price: 720,
        originalPrice: null,
        discount: null,
        sessions: 4,
        duration: 'SI sessions',
        includes: [
          '4 targeted SI sessions',
          'Focus on hip mobility',
          'Great intro to the work',
          'Perfect for hip issues'
        ],
        link: '/programs/hip-series',
        badge: 'INTRO'
      },
      {
        name: '12-Series',
        price: 3000,
        originalPrice: null,
        discount: null,
        sessions: 12,
        duration: 'SI sessions',
        includes: [
          '12 comprehensive SI sessions',
          'Complete Anatomy Trains protocol',
          'Full structural transformation',
          'Life-changing results'
        ],
        link: '/programs/12-series',
        badge: 'MOST POPULAR'
      }
    ],
    combo: [
      {
        name: 'The Reset',
        price: 990,
        originalPrice: null,
        discount: null,
        sessions: 6,
        duration: '3 SI + 3 Movement',
        includes: [
          '3 SI sessions (60 min)',
          '3 Movement sessions (60 min)',
          'Quick comprehensive reset',
          'Get back on track'
        ],
        link: '/programs/the-reset',
        badge: null
      },
      {
        name: 'Hip Freedom - Basic',
        price: 1320,
        originalPrice: null,
        discount: null,
        sessions: 8,
        duration: '4 SI + 4 Movement',
        includes: [
          '4 SI sessions (60 min)',
          '4 Movement sessions (60 min)',
          'Focused hip work',
          'Restore natural movement'
        ],
        link: '/programs/hip-freedom-basic',
        badge: null
      },
      {
        name: 'Hip Freedom - Extended',
        price: 1920,
        originalPrice: null,
        discount: null,
        sessions: 12,
        duration: '6 SI + 6 Movement',
        includes: [
          '6 SI sessions (60 min)',
          '6 Movement sessions (60 min)',
          'Comprehensive hip transformation',
          'Long-lasting results'
        ],
        link: '/programs/hip-freedom-extended',
        badge: 'POPULAR'
      },
      {
        name: 'Full Repatterning - Basic',
        price: 3720,
        originalPrice: null,
        discount: null,
        sessions: 24,
        duration: '12 SI + 12 Movement',
        includes: [
          '12 SI sessions (60 min)',
          '12 Movement sessions (60 min)',
          'Complete transformation',
          'Weekly hands-on sessions'
        ],
        link: '/programs/full-repatterning-basic',
        badge: null
      },
      {
        name: 'Full Repatterning - Premium',
        price: 5400,
        originalPrice: null,
        discount: null,
        sessions: 36,
        duration: '12 SI + 24 Movement',
        includes: [
          '12 SI sessions (90 min)',
          '24 Movement sessions (60 min)',
          'Deep integration work',
          'Optimal results'
        ],
        link: '/programs/full-repatterning-premium',
        badge: 'MOST POPULAR'
      },
      {
        name: 'Full Repatterning - Ultimate',
        price: 7200,
        originalPrice: null,
        discount: null,
        sessions: 48,
        duration: '12 SI + 36 Movement',
        includes: [
          '12 SI sessions (90 min)',
          '36 Movement sessions (60 min)',
          'Maximum transformation',
          'Ultimate support'
        ],
        link: '/programs/full-repatterning-ultimate',
        badge: null
      }
    ]
  };

  // Get filtered data
  const getFilteredData = () => {
    if (activeFilter === 'all') {
      return [...pricingData.movement, ...pricingData.si, ...pricingData.combo];
    }
    return pricingData[activeFilter] || [];
  };

  const filteredPrograms = getFilteredData();

  return (
    <PageLayout>
      <PageHero 
        imageSrc="/pricing-hero.jpg"
        alt="Pricing for structural integration and movement education services in Santa Cruz, California"
        title="Pricing"
        subtitle="Clear, transparent pricing. Choose what works for you."
      />
      
      <div className="bg-white py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Filter Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeFilter === 'all'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-neutralLight text-neutralDark hover:bg-neutralLight/80'
                }`}
              >
                All Programs
              </button>
              <button
                onClick={() => setActiveFilter('movement')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeFilter === 'movement'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-neutralLight text-neutralDark hover:bg-neutralLight/80'
                }`}
              >
                Movement Only
              </button>
              <button
                onClick={() => setActiveFilter('si')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeFilter === 'si'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-neutralLight text-neutralDark hover:bg-neutralLight/80'
                }`}
              >
                SI Only
              </button>
              <button
                onClick={() => setActiveFilter('combo')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeFilter === 'combo'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-neutralLight text-neutralDark hover:bg-neutralLight/80'
                }`}
              >
                SI + Movement Combo
              </button>
            </div>

            <p className="text-center text-neutralDark/70 max-w-2xl mx-auto">
              {activeFilter === 'all' && 'All programs and packages'}
              {activeFilter === 'movement' && 'Movement Education packages - learn to move better'}
              {activeFilter === 'si' && 'Structural Integration series - fix your structure'}
              {activeFilter === 'combo' && 'Combined programs - structure + movement for lasting change'}
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredPrograms.map((program, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-md border-2 transition-all hover:shadow-xl hover:border-accent ${
                  program.badge === 'MOST POPULAR' || program.badge === 'POPULAR'
                    ? 'border-accent relative'
                    : 'border-neutralLight'
                }`}
              >
                {/* Badge */}
                {program.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold">
                    {program.badge}
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6 mt-2">
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">
                    {program.name}
                  </h3>
                  <div className="text-4xl font-bold text-accent mb-2">
                    ${program.price.toLocaleString()}
                  </div>
                  {program.originalPrice && (
                    <div className="text-sm text-neutralDark/60 line-through mb-1">
                      ${program.originalPrice.toLocaleString()}
                    </div>
                  )}
                  {program.discount && (
                    <div className="inline-block bg-sage/10 text-sage px-3 py-1 rounded-full text-sm font-semibold">
                      {program.discount}
                    </div>
                  )}
                  <div className="text-sm text-neutralDark/70 mt-2">
                    {program.sessions} sessions • {program.duration}
                  </div>
                </div>

                {/* What's Included */}
                <div className="mb-6">
                  <h4 className="font-semibold text-neutralDark mb-3 text-sm uppercase tracking-wide">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {program.includes.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-neutralDark/80">
                        <span className="text-accent font-bold mr-2 flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  to={program.link}
                  className="block w-full text-center px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          {/* Single Sessions Note */}
          <div className="bg-sage/10 rounded-2xl p-8 border-2 border-sage/20 mb-8">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4 text-center">
              Single Sessions Available
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div>
                <h4 className="font-semibold text-neutralDark mb-3">Movement Education</h4>
                <ul className="space-y-2 text-neutralDark/80">
                  <li className="flex justify-between">
                    <span>30 minutes</span>
                    <span className="font-semibold">$100</span>
                  </li>
                  <li className="flex justify-between">
                    <span>60 minutes</span>
                    <span className="font-semibold">$180</span>
                  </li>
                  <li className="flex justify-between">
                    <span>90 minutes</span>
                    <span className="font-semibold">$270</span>
                  </li>
                  <li className="flex justify-between">
                    <span>120 minutes</span>
                    <span className="font-semibold">$360</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutralDark mb-3">Structural Integration</h4>
                <ul className="space-y-2 text-neutralDark/80">
                  <li className="flex justify-between">
                    <span>60 minutes</span>
                    <span className="font-semibold">$180</span>
                  </li>
                  <li className="flex justify-between">
                    <span>90 minutes</span>
                    <span className="font-semibold">$270</span>
                  </li>
                  <li className="flex justify-between">
                    <span>120 minutes</span>
                    <span className="font-semibold">$360</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-sm text-neutralDark/70 mt-6">
              Book single sessions through our <Link to="/book" className="text-accent hover:underline font-semibold">booking page</Link>
            </p>
          </div>

          {/* Not Sure CTA */}
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-neutralLight text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Not Sure Which Program?
            </h3>
            <p className="text-lg text-neutralDark/80 mb-6">
              Book a free consultation to discuss your goals and find the perfect program for you.
            </p>
            <Link
              to="/consult"
              className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
            >
              Book Free Consultation
            </Link>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default Pricing;
