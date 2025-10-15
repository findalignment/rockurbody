import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import PaymentButton from '../components/PaymentButton';

function Packages() {
  // Movement session packages - matches Pricing page
  const movementPackages = {
    '5 Sessions': {
      sessions: 5,
      price: 810, // $180 * 5 * 0.90 (10% off)
      discount: '10%',
      pricePerSession: 162,
      savings: 90
    },
    '10 Sessions': {
      sessions: 10,
      price: 1530, // $180 * 10 * 0.85 (15% off)
      discount: '15%',
      pricePerSession: 153,
      savings: 270
    },
    '20 Sessions': {
      sessions: 20,
      price: 2880, // $180 * 20 * 0.80 (20% off)
      discount: '20%',
      pricePerSession: 144,
      savings: 720
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
      description: '36 sessions: 12 SI + 24 Movement',
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
              Save on multiple 60-minute sessions of one-on-one movement training. Focus on how you move, not just what exercises you do.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 5 Sessions */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-neutralLight hover:border-accent transition-colors flex flex-col">
                <div className="text-center mb-6">
                  <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Save {movementPackages['5 Sessions'].discount}
                  </div>
                  <h3 className="text-2xl font-heading text-primary mb-2">5 Sessions</h3>
                  <div className="text-4xl font-bold text-accent mb-2">${movementPackages['5 Sessions'].price}</div>
                  <p className="text-sm text-neutralDark/60 line-through mb-1">$900</p>
                  <p className="text-lg text-neutralDark/80">${movementPackages['5 Sessions'].pricePerSession}/session</p>
                </div>
                
                <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
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
              <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-accent relative transform hover:scale-105 transition-transform flex flex-col">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-6 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
                
                <div className="text-center mb-6 mt-2">
                  <div className="inline-block bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Save {movementPackages['10 Sessions'].discount}
                  </div>
                  <h3 className="text-2xl font-heading text-primary mb-2">10 Sessions</h3>
                  <div className="text-4xl font-bold text-accent mb-2">${movementPackages['10 Sessions'].price}</div>
                  <p className="text-sm text-neutralDark/60 line-through mb-1">$1,800</p>
                  <p className="text-lg text-neutralDark/80">${movementPackages['10 Sessions'].pricePerSession}/session</p>
                </div>
                
                <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
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
              <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-neutralLight hover:border-accent transition-colors flex flex-col">
                <div className="text-center mb-6">
                  <div className="inline-block bg-highlight/10 text-highlight px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Save {movementPackages['20 Sessions'].discount}
                  </div>
                  <h3 className="text-2xl font-heading text-primary mb-2">20 Sessions</h3>
                  <div className="text-4xl font-bold text-accent mb-2">${movementPackages['20 Sessions'].price}</div>
                  <p className="text-sm text-neutralDark/60 line-through mb-1">$3,600</p>
                  <p className="text-lg text-neutralDark/80">${movementPackages['20 Sessions'].pricePerSession}/session</p>
                </div>
                
                <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
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

          {/* Structural Integration Packages */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading text-primary mb-8 text-center">Structural Integration Series</h2>
            <p className="text-lg text-neutralDark/80 mb-12 text-center max-w-3xl mx-auto">
              Transform your body's structure through comprehensive Structural Integration protocols. Each series offers a complete approach to realigning your body and restoring natural movement patterns.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Hip Series */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-neutralLight hover:border-accent transition-colors flex flex-col">
                <div className="text-center mb-6">
                  <div className="inline-block bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Great Introduction
                  </div>
                  <h3 className="text-2xl font-heading text-primary mb-2">Hip Series</h3>
                  <div className="text-4xl font-bold text-accent mb-2">$720</div>
                  <p className="text-lg text-neutralDark/80">4 targeted sessions</p>
                </div>
                
                <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                  <li>✓ 4-session focused hip work</li>
                  <li>✓ Targeted hip mobility & alignment</li>
                  <li>✓ Great intro to the work</li>
                  <li>✓ Perfect precursor to 12-Series</li>
                </ul>
                
                <PaymentButton
                  packageType="Hip Series"
                  totalSessions={4}
                  amount={720}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Get Started
                </PaymentButton>
              </div>

              {/* 12-Series */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-accent relative transform hover:scale-105 transition-transform flex flex-col">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-6 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
                
                <div className="text-center mb-6 mt-2">
                  <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Complete Protocol
                  </div>
                  <h3 className="text-2xl font-heading text-primary mb-2">12-Series</h3>
                  <div className="text-4xl font-bold text-accent mb-2">$3,000</div>
                  <p className="text-lg text-neutralDark/80">12 comprehensive sessions</p>
                </div>
                
                <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                  <li>✓ Complete Anatomy Trains protocol</li>
                  <li>✓ Full structural transformation</li>
                  <li>✓ Proven systematic approach</li>
                  <li>✓ Life-changing results</li>
                </ul>
                
                <PaymentButton
                  packageType="12-Series"
                  totalSessions={12}
                  amount={3000}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Get Started
                </PaymentButton>
              </div>
            </div>
          </div>

          {/* Specialized Programs */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading text-primary mb-8 text-center">Specialized Programs</h2>
            <p className="text-lg text-neutralDark/80 mb-12 text-center max-w-3xl mx-auto">
              Comprehensive programs combining Structural Integration and Movement Education for lasting change.
            </p>

            {/* The Reset - Single Card */}
            <div className="max-w-md mx-auto mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-neutralLight hover:border-accent transition-colors flex flex-col">
                <div className="text-center mb-6">
                  <div className="inline-block bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Quick Reset
                  </div>
                  <h3 className="text-2xl font-heading text-primary mb-2">The Reset</h3>
                  <div className="text-4xl font-bold text-accent mb-2">$990</div>
                  <p className="text-lg text-neutralDark/80">6 sessions total</p>
                </div>
                
                <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                  <li>✓ 3 SI sessions (60 min)</li>
                  <li>✓ 3 Movement sessions (60 min)</li>
                  <li>✓ Perfect for getting back on track</li>
                  <li>✓ Reset your foundation</li>
                </ul>
                
                <PaymentButton
                  amount={packageConfigs['The Reset'].price * 100}
                  description={packageConfigs['The Reset'].name}
                  packageType={packageConfigs['The Reset'].name}
                  totalSessions={packageConfigs['The Reset'].sessions.reduce((sum, s) => sum + s.count, 0)}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Get Started
                </PaymentButton>
              </div>
            </div>

            {/* Hip Freedom Options */}
            <div className="mb-16">
              <h3 className="text-2xl font-heading text-primary mb-8 text-center">Hip Freedom</h3>
              <p className="text-base text-neutralDark/80 mb-8 text-center max-w-2xl mx-auto">
                Reclaim how your hips are meant to move
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Basic Option */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-neutralLight hover:border-accent transition-colors flex flex-col">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-heading text-primary mb-2">Basic</h4>
                    <div className="text-4xl font-bold text-accent mb-2">$1,320</div>
                    <p className="text-lg text-neutralDark/80">8 sessions total</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                    <li>✓ 4 SI sessions (60 min)</li>
                    <li>✓ 4 Movement sessions (60 min)</li>
                    <li>✓ Targeted hip work</li>
                    <li>✓ Restore natural movement</li>
                  </ul>
                  
                  <PaymentButton
                    amount={packageConfigs['Hip Freedom - Basic'].price * 100}
                    description={packageConfigs['Hip Freedom - Basic'].name}
                    packageType={packageConfigs['Hip Freedom - Basic'].name}
                    totalSessions={packageConfigs['Hip Freedom - Basic'].sessions.reduce((sum, s) => sum + s.count, 0)}
                    className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                  >
                    Get Started
                  </PaymentButton>
                </div>

                {/* Extended Option */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-accent relative transform hover:scale-105 transition-transform flex flex-col">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-6 py-1 rounded-full text-sm font-bold">
                    POPULAR
                  </div>
                  
                  <div className="text-center mb-6 mt-2">
                    <h4 className="text-2xl font-heading text-primary mb-2">Extended</h4>
                    <div className="text-4xl font-bold text-accent mb-2">$1,920</div>
                    <p className="text-lg text-neutralDark/80">12 sessions total</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                    <li>✓ 6 SI sessions (60 min)</li>
                    <li>✓ 6 Movement sessions (60 min)</li>
                    <li>✓ Comprehensive hip transformation</li>
                    <li>✓ Long-lasting results</li>
                  </ul>
                  
                  <PaymentButton
                    amount={packageConfigs['Hip Freedom - Extended'].price * 100}
                    description={packageConfigs['Hip Freedom - Extended'].name}
                    packageType={packageConfigs['Hip Freedom - Extended'].name}
                    totalSessions={packageConfigs['Hip Freedom - Extended'].sessions.reduce((sum, s) => sum + s.count, 0)}
                    className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                  >
                    Get Started
                  </PaymentButton>
                </div>
              </div>
            </div>

            {/* Full Repatterning Options */}
            <div>
              <h3 className="text-2xl font-heading text-primary mb-8 text-center">Full Repatterning</h3>
              <p className="text-base text-neutralDark/80 mb-8 text-center max-w-2xl mx-auto">
                Complete transformation of how you move
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-neutralLight hover:border-accent transition-colors flex flex-col">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-heading text-primary mb-2">Basic</h4>
                    <div className="text-4xl font-bold text-accent mb-2">$3,720</div>
                    <p className="text-lg text-neutralDark/80">24 sessions total</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                    <li>✓ 12 SI sessions (60 min)</li>
                    <li>✓ 12 Movement sessions (60 min)</li>
                    <li>✓ Complete body transformation</li>
                    <li>✓ Foundation for lasting change</li>
                  </ul>
                  
                  <PaymentButton
                    amount={packageConfigs['Full Repatterning - Basic'].price * 100}
                    description={packageConfigs['Full Repatterning - Basic'].name}
                    packageType={packageConfigs['Full Repatterning - Basic'].name}
                    totalSessions={packageConfigs['Full Repatterning - Basic'].sessions.reduce((sum, s) => sum + s.count, 0)}
                    className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                  >
                    Get Started
                  </PaymentButton>
                </div>

                {/* Premium */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-accent relative transform hover:scale-105 transition-transform flex flex-col">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-6 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                  
                  <div className="text-center mb-6 mt-2">
                    <h4 className="text-2xl font-heading text-primary mb-2">Premium</h4>
                    <div className="text-4xl font-bold text-accent mb-2">$5,400</div>
                    <p className="text-lg text-neutralDark/80">36 sessions total</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                    <li>✓ 12 SI sessions</li>
                    <li>✓ 24 Movement sessions (60 min)</li>
                    <li>✓ Deep integration work</li>
                    <li>✓ Optimal results & retention</li>
                  </ul>
                  
                  <PaymentButton
                    amount={packageConfigs['Full Repatterning - Premium'].price * 100}
                    description={packageConfigs['Full Repatterning - Premium'].name}
                    packageType={packageConfigs['Full Repatterning - Premium'].name}
                    totalSessions={packageConfigs['Full Repatterning - Premium'].sessions.reduce((sum, s) => sum + s.count, 0)}
                    className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                  >
                    Get Started
                  </PaymentButton>
                </div>

                {/* Ultimate */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-neutralLight hover:border-accent transition-colors flex flex-col">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-highlight/10 text-highlight px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      Maximum Support
                    </div>
                    <h4 className="text-2xl font-heading text-primary mb-2">Ultimate</h4>
                    <div className="text-4xl font-bold text-accent mb-2">$7,200</div>
                    <p className="text-lg text-neutralDark/80">48 sessions total</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                    <li>✓ 12 SI sessions</li>
                    <li>✓ 36 Movement sessions (60 min)</li>
                    <li>✓ Maximum transformation</li>
                    <li>✓ Life-changing results</li>
                  </ul>
                  
                  <PaymentButton
                    amount={packageConfigs['Full Repatterning - Ultimate'].price * 100}
                    description={packageConfigs['Full Repatterning - Ultimate'].name}
                    packageType={packageConfigs['Full Repatterning - Ultimate'].name}
                    totalSessions={packageConfigs['Full Repatterning - Ultimate'].sessions.reduce((sum, s) => sum + s.count, 0)}
                    className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                  >
                    Get Started
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
                href="/consult"
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