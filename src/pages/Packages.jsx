import PageLayout from '../components/PageLayout';
import PaymentButton from '../components/PaymentButton';

function Packages() {
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
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-heading text-primary mb-8 text-center">
            Programs Designed Around You
          </h1>
          <p className="text-2xl font-semibold text-neutralDark mb-4 text-center">
            Move Better. Feel Stronger. Stay Adventurous.
          </p>
          <p className="text-xl text-neutralDark/80 mb-12 text-center max-w-4xl mx-auto">
            The movement and structural integration programs are thoughtfully crafted around real client needs: relieving tension, improving mobility, and supporting lifelong vitality. Each program offers a proven path to freedom in your body, yet every journey is personal. That's why each plan is adaptable to your unique goals and lifestyle. Not sure where to start? Explore your options with a free consultation and let's find the right fit together.
          </p>

          {/* Package Options */}
          <div className="space-y-12">
            {/* The Reset */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutralLight">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-heading text-primary mb-2">The Reset</h2>
                <p className="text-neutralDark/80">Perfect for getting back on track</p>
              </div>
              
              <div className="text-center mb-6">
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

            {/* Hip Freedom Options */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutralLight">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-heading text-primary mb-2">Hip Freedom</h2>
                <p className="text-neutralDark/80">Reclaim how your hips are meant to move</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
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
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutralLight">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-heading text-primary mb-2">Full Repatterning</h2>
                <p className="text-neutralDark/80">Complete transformation of how you move</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Basic */}
                <div className="border border-neutralLight rounded-lg p-4">
                  <h3 className="font-semibold text-neutralDark mb-2">Basic</h3>
                  <div className="bg-accent/10 p-3 rounded-lg mb-3">
                    <p className="text-xl font-bold text-accent mb-1">$3,720</p>
                    <p className="text-xs text-neutralDark/80">
                      {packageConfigs['Full Repatterning - Basic'].description}
                    </p>
                  </div>
                  
                  <PaymentButton
                    amount={packageConfigs['Full Repatterning - Basic'].price * 100}
                    description={packageConfigs['Full Repatterning - Basic'].name}
                    packageType={packageConfigs['Full Repatterning - Basic'].name}
                    totalSessions={packageConfigs['Full Repatterning - Basic'].sessions.reduce((sum, s) => sum + s.count, 0)}
                    className="w-full px-3 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-xs"
                  >
                    $3,720
                  </PaymentButton>
                </div>

                {/* Extended */}
                <div className="border border-neutralLight rounded-lg p-4">
                  <h3 className="font-semibold text-neutralDark mb-2">Extended</h3>
                  <div className="bg-accent/10 p-3 rounded-lg mb-3">
                    <p className="text-xl font-bold text-accent mb-1">$5,400</p>
                    <p className="text-xs text-neutralDark/80">
                      {packageConfigs['Full Repatterning - Extended'].description}
                    </p>
                  </div>
                  
                  <PaymentButton
                    amount={packageConfigs['Full Repatterning - Extended'].price * 100}
                    description={packageConfigs['Full Repatterning - Extended'].name}
                    packageType={packageConfigs['Full Repatterning - Extended'].name}
                    totalSessions={packageConfigs['Full Repatterning - Extended'].sessions.reduce((sum, s) => sum + s.count, 0)}
                    className="w-full px-3 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-xs"
                  >
                    $5,400
                  </PaymentButton>
                </div>

                {/* Premium */}
                <div className="border border-accent rounded-lg p-4 relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Premium
                    </span>
                  </div>
                  <h3 className="font-semibold text-neutralDark mb-2">Premium</h3>
                  <div className="bg-accent/10 p-3 rounded-lg mb-3">
                    <p className="text-xl font-bold text-accent mb-1">$5,400</p>
                    <p className="text-xs text-neutralDark/80">
                      {packageConfigs['Full Repatterning - Premium'].description}
                    </p>
                  </div>
                  
                  <PaymentButton
                    amount={packageConfigs['Full Repatterning - Premium'].price * 100}
                    description={packageConfigs['Full Repatterning - Premium'].name}
                    packageType={packageConfigs['Full Repatterning - Premium'].name}
                    totalSessions={packageConfigs['Full Repatterning - Premium'].sessions.reduce((sum, s) => sum + s.count, 0)}
                    className="w-full px-3 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-xs"
                  >
                    $5,400
                  </PaymentButton>
                </div>

                {/* Ultimate */}
                <div className="border border-accent rounded-lg p-4 relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Ultimate
                    </span>
                  </div>
                  <h3 className="font-semibold text-neutralDark mb-2">Ultimate</h3>
                  <div className="bg-accent/10 p-3 rounded-lg mb-3">
                    <p className="text-xl font-bold text-accent mb-1">$7,200</p>
                    <p className="text-xs text-neutralDark/80">
                      {packageConfigs['Full Repatterning - Ultimate'].description}
                    </p>
                  </div>
                  
                  <PaymentButton
                    amount={packageConfigs['Full Repatterning - Ultimate'].price * 100}
                    description={packageConfigs['Full Repatterning - Ultimate'].name}
                    packageType={packageConfigs['Full Repatterning - Ultimate'].name}
                    totalSessions={packageConfigs['Full Repatterning - Ultimate'].sessions.reduce((sum, s) => sum + s.count, 0)}
                    className="w-full px-3 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-xs"
                  >
                    $7,200
                  </PaymentButton>
                </div>
              </div>
            </div>
          </div>

          {/* Free Consultation */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutralLight max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading text-primary mb-4">Not Sure Which Package?</h3>
              <p className="text-neutralDark/80 mb-6">
                Book a free consultation to discuss your goals and find the perfect program for you.
              </p>
              <a
                href="https://cal.com/rockhudson/consult"
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