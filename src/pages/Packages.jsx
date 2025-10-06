import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import PaymentButton from '../components/PaymentButton';

function Packages() {
  // Movement session packages - based on pricing from Pricing page
  const movementPackages = {
    '5 Sessions': {
      sessions: 5,
      price: 825, // $165 * 5 * 0.90 (10% off)
      discount: '10%',
      pricePerSession: 165,
      savings: 82.50
    },
    '10 Sessions': {
      sessions: 10,
      price: 1402.50, // $165 * 10 * 0.85 (15% off)
      discount: '15%',
      pricePerSession: 140.25,
      savings: 247.50
    },
    '20 Sessions': {
      sessions: 20,
      price: 2640, // $165 * 20 * 0.80 (20% off)
      discount: '20%',
      pricePerSession: 132,
      savings: 660
    }
  };

  // Package configurations - moved from SessionService to avoid Airtable browser import
  const packageConfigs = {
    'The Reset': {
      name: 'The Reset',
      description: '6 sessions: 3 SI + 3 Movement',
      price: 990,
      sessions: [
        { type: 'SI', duration: 60, count: 3 },
        { type: 'Movement', duration: 60, count: 3 }
      ]
    },
    'Hip Freedom - Basic': {
      name: 'Hip Freedom - Basic',
      description: '8 sessions: 4 SI + 4 Movement',
      price: 1320,
      sessions: [
        { type: 'SI', duration: 60, count: 4 },
        { type: 'Movement', duration: 60, count: 4 }
      ]
    },
    'Hip Freedom - Extended': {
      name: 'Hip Freedom - Extended',
      description: '12 sessions: 4 SI + 8 Movement',
      price: 1920,
      sessions: [
        { type: 'SI', duration: 60, count: 4 },
        { type: 'Movement', duration: 60, count: 8 }
      ]
    },
    'Full Repatterning - Basic': {
      name: 'Full Repatterning - Basic',
      description: '24 sessions: 12 SI + 12 Movement',
      price: 3720,
      sessions: [
        { type: 'SI', duration: 60, count: 12 },
        { type: 'Movement', duration: 60, count: 12 }
      ]
    },
    'Full Repatterning - Extended': {
      name: 'Full Repatterning - Extended',
      description: '36 sessions: 12 SI + 24 Movement',
      price: 5400,
      sessions: [
        { type: 'SI', duration: 60, count: 12 },
        { type: 'Movement', duration: 60, count: 24 }
      ]
    },
    'Full Repatterning - Premium': {
      name: 'Full Repatterning - Premium',
      description: '36 sessions: 12 SI (90min) + 24 Movement',
      price: 5400,
      sessions: [
        { type: 'SI', duration: 90, count: 12 },
        { type: 'Movement', duration: 60, count: 24 }
      ]
    },
    'Full Repatterning - Ultimate': {
      name: 'Full Repatterning - Ultimate',
      description: '48 sessions: 12 SI (90min) + 36 Movement',
      price: 7200,
      sessions: [
        { type: 'SI', duration: 90, count: 12 },
        { type: 'Movement', duration: 60, count: 36 }
      ]
    }
  };

  return (
    <PageLayout>
      <PageHero 
        imageSrc="/packages-hero.jpg"
        title="Programs Designed Around You"
        subtitle="Move Better. Feel Stronger. Stay Adventurous."
      />
      <div className="pt-16 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xl text-neutralDark/80 mb-20 text-center max-w-4xl mx-auto leading-relaxed">
            The movement and structural integration programs are thoughtfully crafted around real client needs: relieving tension, improving mobility, and supporting lifelong vitality. Each program offers a proven path to freedom in your body, yet every journey is personal. That's why each plan is adaptable to your unique goals and lifestyle. Not sure where to start? Explore your options with a free consultation and let's find the right fit together.
          </p>

          {/* Movement Session Packages */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading text-primary mb-8 text-center">Movement Education Packages</h2>
            <p className="text-lg text-neutralDark/80 mb-12 text-center max-w-3xl mx-auto">
              Save on multiple sessions of one-on-one movement training. Focus on how you move, not just what exercises you do.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 5 Sessions */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-neutralLight hover:border-accent transition-colors">
                <div className="text-center mb-6">
                  <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Save {movementPackages['5 Sessions'].discount}
                  </div>
                  <h3 className="text-2xl font-heading text-primary mb-2">5 Sessions</h3>
                  <div className="text-4xl font-bold text-accent mb-2">${movementPackages['5 Sessions'].price}</div>
                  <p className="text-sm text-neutralDark/60 line-through mb-1">${movementPackages['5 Sessions'].pricePerSession * 5}</p>
                  <p className="text-lg text-neutralDark/80">${movementPackages['5 Sessions'].pricePerSession}/session</p>
                </div>
                
                <ul className="space-y-3 mb-8 text-sm text-neutralDark/80">
                  <li>✓ Five 60-minute sessions</li>
                  <li>✓ Save ${movementPackages['5 Sessions'].savings}</li>
                  <li>✓ Personalized movement training</li>
                  <li>✓ Flexible scheduling</li>
                </ul>
                
                <PaymentButton
                  packageType="Movement 5-Pack"
                  totalSessions={5}
                  amount={movementPackages['5 Sessions'].price}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Get Started
                </PaymentButton>
              </div>

              {/* 10 Sessions */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-accent relative transform hover:scale-105 transition-transform">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-6 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
                
                <div className="text-center mb-6 mt-2">
                  <div className="inline-block bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Save {movementPackages['10 Sessions'].discount}
                  </div>
                  <h3 className="text-2xl font-heading text-primary mb-2">10 Sessions</h3>
                  <div className="text-4xl font-bold text-accent mb-2">${movementPackages['10 Sessions'].price}</div>
                  <p className="text-sm text-neutralDark/60 line-through mb-1">${movementPackages['10 Sessions'].pricePerSession * 10 + movementPackages['10 Sessions'].savings}</p>
                  <p className="text-lg text-neutralDark/80">${movementPackages['10 Sessions'].pricePerSession}/session</p>
                </div>
                
                <ul className="space-y-3 mb-8 text-sm text-neutralDark/80">
                  <li>✓ Ten 60-minute sessions</li>
                  <li>✓ Save ${movementPackages['10 Sessions'].savings}</li>
                  <li>✓ Personalized movement training</li>
                  <li>✓ Flexible scheduling</li>
                  <li>✓ Best value for progress</li>
                </ul>
                
                <PaymentButton
                  packageType="Movement 10-Pack"
                  totalSessions={10}
                  amount={movementPackages['10 Sessions'].price}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Get Started
                </PaymentButton>
              </div>

              {/* 20 Sessions */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-neutralLight hover:border-accent transition-colors">
                <div className="text-center mb-6">
                  <div className="inline-block bg-highlight/10 text-highlight px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Save {movementPackages['20 Sessions'].discount}
                  </div>
                  <h3 className="text-2xl font-heading text-primary mb-2">20 Sessions</h3>
                  <div className="text-4xl font-bold text-accent mb-2">${movementPackages['20 Sessions'].price}</div>
                  <p className="text-sm text-neutralDark/60 line-through mb-1">${movementPackages['20 Sessions'].pricePerSession * 20 + movementPackages['20 Sessions'].savings}</p>
                  <p className="text-lg text-neutralDark/80">${movementPackages['20 Sessions'].pricePerSession}/session</p>
                </div>
                
                <ul className="space-y-3 mb-8 text-sm text-neutralDark/80">
                  <li>✓ Twenty 60-minute sessions</li>
                  <li>✓ Save ${movementPackages['20 Sessions'].savings}</li>
                  <li>✓ Personalized movement training</li>
                  <li>✓ Flexible scheduling</li>
                  <li>✓ Maximum savings & results</li>
                </ul>
                
                <PaymentButton
                  packageType="Movement 20-Pack"
                  totalSessions={20}
                  amount={movementPackages['20 Sessions'].price}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Get Started
                </PaymentButton>
              </div>
            </div>
          </div>

          {/* Specialized Programs */}
          <div className="mb-12">
            <h2 className="text-3xl font-heading text-primary mb-4 text-center">Specialized Programs</h2>
            <p className="text-lg text-neutralDark/80 mb-12 text-center max-w-3xl mx-auto">
              Comprehensive programs combining Structural Integration and Movement Education for lasting change.
            </p>
          </div>

          {/* Package Options */}
          <div className="space-y-20">
            {/* The Reset - Half width, centered */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-neutralLight">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-heading text-primary mb-4">The Reset</h2>
                <p className="text-lg text-neutralDark/80">Perfect for getting back on track</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="bg-accent/10 p-4 rounded-lg mb-4">
                  <p className="text-3xl font-bold text-accent mb-2">$990</p>
                  <p className="text-sm text-neutralDark/80">
                    {packageConfigs['The Reset'].description}
                  </p>
                </div>
                
                <PaymentButton
                  amount={packageConfigs['The Reset'].price * 100}
                  description={packageConfigs['The Reset'].name}
                  packageType={packageConfigs['The Reset'].name}
                  totalSessions={packageConfigs['The Reset'].sessions.reduce((sum, s) => sum + s.count, 0)}
                  className="w-full px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
                >
                  Purchase The Reset - $990
                </PaymentButton>
              </div>
              </div>
            </div>

            {/* Hip Freedom Options */}
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-neutralLight">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-heading text-primary mb-4">Hip Freedom</h2>
                <p className="text-lg text-neutralDark/80">Reclaim how your hips are meant to move</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Basic Option */}
                <div className="border border-neutralLight rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-neutralDark mb-3">Basic</h3>
                  <div className="bg-accent/10 p-4 rounded-lg mb-4">
                    <p className="text-2xl font-bold text-accent mb-2">$1,320</p>
                    <p className="text-sm text-neutralDark/80">
                      {packageConfigs['Hip Freedom - Basic'].description}
                    </p>
                  </div>
                  
                  <PaymentButton
                    amount={packageConfigs['Hip Freedom - Basic'].price * 100}
                    description={packageConfigs['Hip Freedom - Basic'].name}
                    packageType={packageConfigs['Hip Freedom - Basic'].name}
                    totalSessions={packageConfigs['Hip Freedom - Basic'].sessions.reduce((sum, s) => sum + s.count, 0)}
                    className="w-full px-4 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-sm"
                  >
                    Purchase Basic - $1,320
                  </PaymentButton>
                </div>

                {/* Extended Option */}
                <div className="border border-accent rounded-lg p-6 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutralDark mb-3">Extended</h3>
                  <div className="bg-accent/10 p-4 rounded-lg mb-4">
                    <p className="text-2xl font-bold text-accent mb-2">$1,920</p>
                    <p className="text-sm text-neutralDark/80">
                      {packageConfigs['Hip Freedom - Extended'].description}
                    </p>
                  </div>
                  
                  <PaymentButton
                    amount={packageConfigs['Hip Freedom - Extended'].price * 100}
                    description={packageConfigs['Hip Freedom - Extended'].name}
                    packageType={packageConfigs['Hip Freedom - Extended'].name}
                    totalSessions={packageConfigs['Hip Freedom - Extended'].sessions.reduce((sum, s) => sum + s.count, 0)}
                    className="w-full px-4 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-sm"
                  >
                    Purchase Extended - $1,920
                  </PaymentButton>
                </div>
              </div>
            </div>

            {/* Full Repatterning Options */}
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-neutralLight">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-heading text-primary mb-4">Full Repatterning</h2>
                <p className="text-lg text-neutralDark/80">Complete transformation of how you move</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Basic */}
                <div className="border border-neutralLight rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-neutralDark mb-3">Basic</h3>
                  <div className="bg-accent/10 p-4 rounded-lg mb-4">
                    <p className="text-2xl font-bold text-accent mb-2">$3,720</p>
                    <p className="text-sm text-neutralDark/80">
                      {packageConfigs['Full Repatterning - Basic'].description}
                    </p>
                  </div>
                  
                  <PaymentButton
                    amount={packageConfigs['Full Repatterning - Basic'].price * 100}
                    description={packageConfigs['Full Repatterning - Basic'].name}
                    packageType={packageConfigs['Full Repatterning - Basic'].name}
                    totalSessions={packageConfigs['Full Repatterning - Basic'].sessions.reduce((sum, s) => sum + s.count, 0)}
                    className="w-full px-4 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-sm"
                  >
                    Purchase Basic - $3,720
                  </PaymentButton>
                </div>

                {/* Premium */}
                <div className="border border-accent rounded-lg p-6 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutralDark mb-3">Premium</h3>
                  <div className="bg-accent/10 p-4 rounded-lg mb-4">
                    <p className="text-2xl font-bold text-accent mb-2">$5,400</p>
                    <p className="text-sm text-neutralDark/80">
                      {packageConfigs['Full Repatterning - Premium'].description}
                    </p>
                  </div>
                  
                  <PaymentButton
                    amount={packageConfigs['Full Repatterning - Premium'].price * 100}
                    description={packageConfigs['Full Repatterning - Premium'].name}
                    packageType={packageConfigs['Full Repatterning - Premium'].name}
                    totalSessions={packageConfigs['Full Repatterning - Premium'].sessions.reduce((sum, s) => sum + s.count, 0)}
                    className="w-full px-4 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-sm"
                  >
                    Purchase Premium - $5,400
                  </PaymentButton>
                </div>

                {/* Ultimate */}
                <div className="border border-neutralLight rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-neutralDark mb-3">Ultimate</h3>
                  <div className="bg-accent/10 p-4 rounded-lg mb-4">
                    <p className="text-2xl font-bold text-accent mb-2">$7,200</p>
                    <p className="text-sm text-neutralDark/80">
                      {packageConfigs['Full Repatterning - Ultimate'].description}
                    </p>
                  </div>
                  
                  <PaymentButton
                    amount={packageConfigs['Full Repatterning - Ultimate'].price * 100}
                    description={packageConfigs['Full Repatterning - Ultimate'].name}
                    packageType={packageConfigs['Full Repatterning - Ultimate'].name}
                    totalSessions={packageConfigs['Full Repatterning - Ultimate'].sessions.reduce((sum, s) => sum + s.count, 0)}
                    className="w-full px-4 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-sm"
                  >
                    Purchase Ultimate - $7,200
                  </PaymentButton>
                </div>
              </div>
            </div>
          </div>

          {/* Free Consultation */}
          <div className="mt-20 text-center">
            <div className="bg-white rounded-2xl p-12 shadow-sm border border-neutralLight max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading text-primary mb-6">Not Sure Which Package?</h3>
              <p className="text-lg text-neutralDark/80 mb-8 leading-relaxed">
                Book a free consultation to discuss your goals and find the perfect program for you.
              </p>
              <a
                href="https://cal.com/rockyourbody/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Packages;