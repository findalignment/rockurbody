import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import PaymentButton from '../components/PaymentButton';

function BookMovementEducation() {
  // Base prices and packages from Pricing page
  const prices = {
    move30: 100,
    move60: 180,
    move90: 270,
    move120: 360
  };

  const packages = {
    pack5: { price: 810, discount: '10%', savings: 90 },
    pack10: { price: 1530, discount: '15%', savings: 270 },
    pack20: { price: 2880, discount: '20%', savings: 720 }
  };

  return (
    <PageLayout>
      <PageHero 
        imageSrc="/services-hero.jpg"
        title="Book Movement Education"
        subtitle="One-on-one movement training"
        alt="Book movement education sessions for one-on-one movement training and coaching in Santa Cruz"
      />

      <div className="bg-offWhite py-20 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Single Sessions */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-4 text-center">Single Sessions</h2>
            <p className="text-lg text-neutralDark/80 mb-12 text-center max-w-2xl mx-auto">
              Perfect for trying movement education or addressing specific needs
            </p>
            
            <div className="grid md:grid-cols-4 gap-4">
              {/* 30min */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-neutralLight hover:border-accent transition-colors flex flex-col">
                <h3 className="font-semibold text-neutralDark mb-2">30 Minutes</h3>
                <p className="text-2xl font-bold text-accent mb-3">${prices.move30}</p>
                <p className="text-sm text-neutralDark/70 mb-4">Quick check-ins, form corrections</p>
                <PaymentButton
                  amount={prices.move30 * 100}
                  description="30min Movement Session"
                  packageType="30min Movement"
                  totalSessions={1}
                  className="w-full bg-primary text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Buy Now
                </PaymentButton>
              </div>

              {/* 60min */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-accent hover:shadow-lg transition-all flex flex-col">
                <div className="text-xs bg-accent text-white px-2 py-0.5 rounded-full inline-block mb-2">POPULAR</div>
                <h3 className="font-semibold text-neutralDark mb-2">60 Minutes</h3>
                <p className="text-2xl font-bold text-accent mb-3">${prices.move60}</p>
                <p className="text-sm text-neutralDark/70 mb-4">Standard coaching session</p>
                <PaymentButton
                  amount={prices.move60 * 100}
                  description="60min Movement Session"
                  packageType="60min Movement"
                  totalSessions={1}
                  className="w-full bg-primary text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Buy Now
                </PaymentButton>
              </div>

              {/* 90min */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-neutralLight hover:border-accent transition-colors flex flex-col">
                <h3 className="font-semibold text-neutralDark mb-2">90 Minutes</h3>
                <p className="text-2xl font-bold text-accent mb-3">${prices.move90}</p>
                <p className="text-sm text-neutralDark/70 mb-4">Extended movement work</p>
                <PaymentButton
                  amount={prices.move90 * 100}
                  description="90min Movement Session"
                  packageType="90min Movement"
                  totalSessions={1}
                  className="w-full bg-primary text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Buy Now
                </PaymentButton>
              </div>

              {/* 120min */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-neutralLight hover:border-accent transition-colors flex flex-col">
                <h3 className="font-semibold text-neutralDark mb-2">120 Minutes</h3>
                <p className="text-2xl font-bold text-accent mb-3">${prices.move120}</p>
                <p className="text-sm text-neutralDark/70 mb-4">Initial assessments, complex issues</p>
                <PaymentButton
                  amount={prices.move120 * 100}
                  description="120min Movement Session"
                  packageType="120min Movement"
                  totalSessions={1}
                  className="w-full bg-primary text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Buy Now
                </PaymentButton>
              </div>
            </div>
          </div>

          {/* Movement Packages */}
          <div>
            <h2 className="text-3xl font-heading text-primary mb-4 text-center">60-Minute Session Packages</h2>
            <p className="text-lg text-neutralDark/80 mb-12 text-center max-w-2xl mx-auto">
              Save on multiple sessions. All packages are for 60-minute sessions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* 5-Pack */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-neutralLight hover:border-accent transition-colors flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-neutralDark text-xl">5 Sessions</h3>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">{packages.pack5.discount} OFF</span>
                </div>
                <p className="text-3xl font-bold text-accent mb-1">${packages.pack5.price}</p>
                <p className="text-sm text-neutralDark/60 line-through mb-1">${prices.move60 * 5}</p>
                <p className="text-sm text-neutralDark/70 mb-6">Save ${packages.pack5.savings}</p>
                <div className="flex-grow"></div>
                <PaymentButton
                  amount={packages.pack5.price * 100}
                  description="5-Pack 60min Movement"
                  packageType="60min Movement - 5 Pack"
                  totalSessions={5}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Buy 5-Pack
                </PaymentButton>
              </div>

              {/* 10-Pack */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-accent hover:shadow-lg transition-all flex flex-col relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold">
                  BEST VALUE
                </div>
                <div className="flex justify-between items-start mb-2 mt-2">
                  <h3 className="font-semibold text-neutralDark text-xl">10 Sessions</h3>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">{packages.pack10.discount} OFF</span>
                </div>
                <p className="text-3xl font-bold text-accent mb-1">${packages.pack10.price}</p>
                <p className="text-sm text-neutralDark/60 line-through mb-1">${prices.move60 * 10}</p>
                <p className="text-sm text-neutralDark/70 mb-6">Save ${packages.pack10.savings}</p>
                <div className="flex-grow"></div>
                <PaymentButton
                  amount={packages.pack10.price * 100}
                  description="10-Pack 60min Movement"
                  packageType="60min Movement - 10 Pack"
                  totalSessions={10}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Buy 10-Pack
                </PaymentButton>
              </div>

              {/* 20-Pack */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-neutralLight hover:border-accent transition-colors flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-neutralDark text-xl">20 Sessions</h3>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">{packages.pack20.discount} OFF</span>
                </div>
                <p className="text-3xl font-bold text-accent mb-1">${packages.pack20.price}</p>
                <p className="text-sm text-neutralDark/60 line-through mb-1">${prices.move60 * 20}</p>
                <p className="text-sm text-neutralDark/70 mb-6">Save ${packages.pack20.savings}</p>
                <div className="flex-grow"></div>
                <PaymentButton
                  amount={packages.pack20.price * 100}
                  description="20-Pack 60min Movement"
                  packageType="60min Movement - 20 Pack"
                  totalSessions={20}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Buy 20-Pack
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
              You'll receive a confirmation email with a link to schedule your sessions based on the session length you purchased.
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default BookMovementEducation;
