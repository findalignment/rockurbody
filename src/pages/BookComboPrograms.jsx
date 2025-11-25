import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import PaymentButton from '../components/PaymentButton';

function BookComboPrograms() {
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
      description: '12 sessions: 6 SI + 6 Movement',
      price: 1920,
      sessions: [
        { type: 'SI', duration: 60, count: 6 },
        { type: 'Movement', duration: 60, count: 6 }
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
      description: '48 sessions: 12 SI + 36 Movement',
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
        title="Book Combination Programs"
        subtitle="Structural Integration + Movement Education"
        alt="Book combination programs combining structural integration and movement education sessions in Santa Cruz"
      />

      <div className="bg-offWhite py-20 px-4">
        <div className="max-w-6xl mx-auto">
          
          <p className="text-lg text-neutralDark/80 mb-16 text-center max-w-3xl mx-auto">
            These programs combine hands-on structural work with movement education for lasting change. Most clients see the best results with this integrated approach.
          </p>

          {/* The Reset */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-8 text-center">Quick Start</h2>
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-neutralLight hover:border-accent transition-colors flex flex-col">
                <div className="text-center mb-6">
                  <div className="inline-block bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Perfect for Getting Started
                  </div>
                  <h3 className="text-2xl font-heading text-primary mb-2">The Reset</h3>
                  <div className="text-4xl font-bold text-accent mb-2">$990</div>
                  <p className="text-lg text-neutralDark/80">6 sessions total</p>
                </div>
                
                <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                  <li>✓ 3 SI sessions (60 min)</li>
                  <li>✓ 3 Movement sessions (60 min)</li>
                  <li>✓ Clear the biggest roadblocks</li>
                  <li>✓ Reset your foundation</li>
                </ul>
                
                <PaymentButton
                  amount={packageConfigs['The Reset'].price * 100}
                  description={packageConfigs['The Reset'].name}
                  packageType={packageConfigs['The Reset'].name}
                  totalSessions={6}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Purchase
                </PaymentButton>
              </div>
            </div>
          </div>

          {/* Hip Freedom */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-8 text-center">Hip Freedom</h2>
            <p className="text-base text-neutralDark/80 mb-8 text-center max-w-2xl mx-auto">
              Reclaim how your hips are meant to move
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Basic */}
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
                  totalSessions={8}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Purchase
                </PaymentButton>
              </div>

              {/* Extended */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-accent relative hover:scale-105 transition-transform flex flex-col">
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
                  totalSessions={12}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Purchase
                </PaymentButton>
              </div>
            </div>
          </div>

          {/* Full Repatterning */}
          <div>
            <h2 className="text-3xl font-heading text-primary mb-8 text-center">Full Repatterning</h2>
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
                  totalSessions={24}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Purchase
                </PaymentButton>
              </div>

              {/* Premium */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-accent relative hover:scale-105 transition-transform flex flex-col">
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
                  totalSessions={36}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Purchase
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
                  totalSessions={48}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Purchase
                </PaymentButton>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-16 bg-white rounded-2xl p-8 max-w-2xl mx-auto text-center border-2 border-primary/20">
            <h3 className="text-xl font-heading text-primary mb-4">
              After Your Purchase
            </h3>
            <p className="text-neutralDark/80 leading-relaxed">
              You'll receive a confirmation page with links to schedule both your Structural Integration and Movement Education sessions. Bookmark that page for easy access to both calendars.
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default BookComboPrograms;
