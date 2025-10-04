import PageLayout from '../components/PageLayout';
import PaymentButton from '../components/PaymentButton';

function Pricing() {
  // Base prices
  const prices = {
    move30: 100,
    move60: 180,
    move90: 270,
    move120: 360,
    si60: 180,
    si90: 270,
    si120: 360,
  };

  // Calculate package prices with discounts
  const calculatePackage = (basePrice, quantity, discount) => {
    const total = basePrice * quantity;
    const discounted = total * (1 - discount);
    return Math.round(discounted);
  };

  return (
    <PageLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-heading text-primary mb-8">
            Pricing
          </h1>
          <div className="space-y-12">
            {/* Consultation */}
            <div>
              <h2 className="text-3xl font-heading text-neutralDark mb-6">Consultation</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-black">
                  <h3 className="font-semibold text-neutralDark mb-2">
                    Free Consultation
              </h3>
                  <p className="text-2xl font-bold text-accent mb-3">Free</p>
                  <p className="text-sm text-neutralDark/80 mb-3">
                    Initial assessment
                  </p>
                  <a
                    href="/book/consult"
                    className="inline-block w-full px-3 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-center text-sm border border-black"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            {/* Movement Education */}
            <div>
              <h2 className="text-3xl font-heading text-neutralDark mb-6">Movement Education</h2>
              
              {/* Single Sessions */}
              <h3 className="text-xl font-semibold text-neutralDark mb-4">Single Sessions</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {/* 30min */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-black">
                  <h4 className="font-semibold text-neutralDark mb-2">30 Minutes</h4>
                  <p className="text-2xl font-bold text-accent mb-3">${prices.move30}</p>
                  <PaymentButton
                    amount={prices.move30 * 100}
                    description="30min Movement Session"
                    packageType="30min Movement"
                    totalSessions={1}
                    className="w-full px-3 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-sm border border-black"
                  >
                    Buy Now
                  </PaymentButton>
                </div>

                {/* 60min */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-black">
                  <h4 className="font-semibold text-neutralDark mb-2">60 Minutes</h4>
                  <p className="text-2xl font-bold text-accent mb-3">${prices.move60}</p>
                  <PaymentButton
                    amount={prices.move60 * 100}
                    description="60min Movement Session"
                    packageType="60min Movement"
                    totalSessions={1}
                    className="w-full px-3 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-sm border border-black"
                  >
                    Buy Now
                  </PaymentButton>
                </div>

                {/* 90min */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-black">
                  <h4 className="font-semibold text-neutralDark mb-2">90 Minutes</h4>
                  <p className="text-2xl font-bold text-accent mb-3">${prices.move90}</p>
                  <PaymentButton
                    amount={prices.move90 * 100}
                    description="90min Movement Session"
                    packageType="90min Movement"
                    totalSessions={1}
                    className="w-full px-3 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-sm border border-black"
                  >
                    Buy Now
                  </PaymentButton>
                </div>

                {/* 120min */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-black">
                  <h4 className="font-semibold text-neutralDark mb-2">120 Minutes</h4>
                  <p className="text-2xl font-bold text-accent mb-3">${prices.move120}</p>
                  <PaymentButton
                    amount={prices.move120 * 100}
                    description="120min Movement Session"
                    packageType="120min Movement"
                    totalSessions={1}
                    className="w-full px-3 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-sm border border-black"
                  >
                    Buy Now
                  </PaymentButton>
                </div>
              </div>

              {/* Movement Packages */}
              <h3 className="text-xl font-semibold text-neutralDark mb-4">60-Minute Session Packages</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {/* 5-Pack */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-black">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-neutralDark">5 Sessions</h4>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">10% OFF</span>
                  </div>
                  <p className="text-2xl font-bold text-accent mb-1">${calculatePackage(prices.move60, 5, 0.10)}</p>
                  <p className="text-sm text-neutralDark/60 mb-3 line-through">${prices.move60 * 5}</p>
                  <PaymentButton
                    amount={calculatePackage(prices.move60, 5, 0.10) * 100}
                    description="5-Pack 60min Movement"
                    packageType="60min Movement - 5 Pack"
                    totalSessions={5}
                    className="w-full px-3 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-sm border border-black"
                  >
                    Buy 5-Pack
                  </PaymentButton>
                </div>

                {/* 10-Pack */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-black">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-neutralDark">10 Sessions</h4>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">15% OFF</span>
                  </div>
                  <p className="text-2xl font-bold text-accent mb-1">${calculatePackage(prices.move60, 10, 0.15)}</p>
                  <p className="text-sm text-neutralDark/60 mb-3 line-through">${prices.move60 * 10}</p>
                  <PaymentButton
                    amount={calculatePackage(prices.move60, 10, 0.15) * 100}
                    description="10-Pack 60min Movement"
                    packageType="60min Movement - 10 Pack"
                    totalSessions={10}
                    className="w-full px-3 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-sm border border-black"
                  >
                    Buy 10-Pack
                  </PaymentButton>
                </div>

                {/* 20-Pack */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-black">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-neutralDark">20 Sessions</h4>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">20% OFF</span>
                  </div>
                  <p className="text-2xl font-bold text-accent mb-1">${calculatePackage(prices.move60, 20, 0.20)}</p>
                  <p className="text-sm text-neutralDark/60 mb-3 line-through">${prices.move60 * 20}</p>
                  <PaymentButton
                    amount={calculatePackage(prices.move60, 20, 0.20) * 100}
                    description="20-Pack 60min Movement"
                    packageType="60min Movement - 20 Pack"
                    totalSessions={20}
                    className="w-full px-3 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-sm border border-black"
                  >
                    Buy 20-Pack
                  </PaymentButton>
                </div>
              </div>
            </div>

            {/* Structural Integration */}
            <div>
              <h2 className="text-3xl font-heading text-neutralDark mb-6">Structural Integration</h2>
              
              {/* Single Sessions */}
              <h3 className="text-xl font-semibold text-neutralDark mb-4">Single Sessions</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {/* 60min SI */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-black">
                  <h4 className="font-semibold text-neutralDark mb-2">60 Minutes</h4>
                  <p className="text-2xl font-bold text-accent mb-3">${prices.si60}</p>
                  <PaymentButton
                    amount={prices.si60 * 100}
                    description="60min SI Session"
                    packageType="60min SI"
                    totalSessions={1}
                    className="w-full px-3 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-sm border border-black"
                  >
                    Buy Now
                  </PaymentButton>
                </div>

                {/* 90min SI */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-black">
                  <h4 className="font-semibold text-neutralDark mb-2">90 Minutes</h4>
                  <p className="text-2xl font-bold text-accent mb-3">${prices.si90}</p>
                  <PaymentButton
                    amount={prices.si90 * 100}
                    description="90min SI Session"
                    packageType="90min SI"
                    totalSessions={1}
                    className="w-full px-3 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-sm border border-black"
                  >
                    Buy Now
                  </PaymentButton>
                </div>

                {/* 120min SI */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-black">
                  <h4 className="font-semibold text-neutralDark mb-2">120 Minutes</h4>
                  <p className="text-2xl font-bold text-accent mb-3">${prices.si120}</p>
                  <PaymentButton
                    amount={prices.si120 * 100}
                    description="120min SI Session"
                    packageType="120min SI"
                    totalSessions={1}
                    className="w-full px-3 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-sm border border-black"
                  >
                    Buy Now
                  </PaymentButton>
                </div>
              </div>

            </div>
            
            {/* Specialized Series */}
            <div>
              <h2 className="text-3xl font-heading text-neutralDark mb-6">Specialized Series</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* 12-Series */}
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 shadow-sm border border-black">
                  <h3 className="text-2xl font-heading text-neutralDark mb-2">
                    12-Series
                  </h3>
                  <p className="text-4xl font-bold text-accent mb-4">$3,000</p>
                  <p className="text-neutralDark/80 mb-4">
                    Complete Anatomy Trains Structural Integration protocol
                  </p>
                  <p className="text-sm text-neutralDark/60 mb-4">
                    12 comprehensive sessions for complete structural transformation
                  </p>
                  <PaymentButton
                    amount={300000}
                    description="12-Series Complete Protocol"
                    packageType="12-Series"
                    totalSessions={12}
                    className="w-full px-4 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition border border-black"
                  >
                    Purchase 12-Series - $3,000
                  </PaymentButton>
                </div>
                
                {/* Hip Series */}
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 shadow-sm border border-black">
              <h3 className="text-2xl font-heading text-neutralDark mb-2">
                    Hip Series
              </h3>
                  <p className="text-4xl font-bold text-accent mb-4">$720</p>
                  <p className="text-neutralDark/80 mb-4">
                    4-session focused hip work
                  </p>
                  <p className="text-sm text-neutralDark/60 mb-4">
                    Targeted approach for hip mobility and alignment
                  </p>
                  <PaymentButton
                    amount={72000}
                    description="Hip Series - 4 Sessions"
                    packageType="Hip Series"
                    totalSessions={4}
                    className="w-full px-4 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition border border-black"
                  >
                    Purchase Hip Series - $720
                  </PaymentButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Pricing;