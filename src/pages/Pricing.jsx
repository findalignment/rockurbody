import PageLayout from '../components/PageLayout';
import PaymentButton from '../components/PaymentButton';

function Pricing() {
  return (
    <PageLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-heading text-primary mb-8">
            Pricing
          </h1>
          <div className="space-y-8">
            {/* Individual Sessions */}
            <div>
              <h2 className="text-3xl font-heading text-neutralDark mb-6">Individual Sessions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-heading text-neutralDark mb-2">
                    Consultation
                  </h3>
                  <p className="text-3xl font-bold text-accent mb-4">Free</p>
                  <p className="text-neutralDark/80">
                    Initial assessment and consultation
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-heading text-neutralDark mb-2">
                    30min Movement
                  </h3>
                  <p className="text-3xl font-bold text-accent mb-4">$100</p>
                  <p className="text-neutralDark/80">
                    Focused movement session
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-heading text-neutralDark mb-2">
                    60min Movement
                  </h3>
                  <p className="text-3xl font-bold text-accent mb-4">$180</p>
                  <p className="text-neutralDark/80 mb-4">
                    Extended movement session
                  </p>
                  <PaymentButton
                    amount={18000} // $180 in cents
                    description="60-minute Movement Education Session"
                    packageType="60min Movement"
                    totalSessions={1}
                    className="w-full px-4 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-center text-sm"
                  >
                    Book & Pay - $180
                  </PaymentButton>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-heading text-neutralDark mb-2">
                    90min Movement
                  </h3>
                  <p className="text-3xl font-bold text-accent mb-4">$270</p>
                  <p className="text-neutralDark/80">
                    Comprehensive movement session
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-heading text-neutralDark mb-2">
                    120min Movement
                  </h3>
                  <p className="text-3xl font-bold text-accent mb-4">$360</p>
                  <p className="text-neutralDark/80">
                    Extended comprehensive session
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-heading text-neutralDark mb-2">
                    60min SI
                  </h3>
                  <p className="text-3xl font-bold text-accent mb-4">$180</p>
                  <p className="text-neutralDark/80">
                    Structural Integration session
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-heading text-neutralDark mb-2">
                    90min SI
                  </h3>
                  <p className="text-3xl font-bold text-accent mb-4">$270</p>
                  <p className="text-neutralDark/80">
                    Extended Structural Integration
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-heading text-neutralDark mb-2">
                    120min SI
                  </h3>
                  <p className="text-3xl font-bold text-accent mb-4">$360</p>
                  <p className="text-neutralDark/80">
                    Comprehensive Structural Integration
                  </p>
                </div>
              </div>
            </div>

            {/* Package Discounts */}
            <div>
              <h2 className="text-3xl font-heading text-neutralDark mb-6">Package Discounts</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-heading text-neutralDark mb-2">
                    5 Sessions
                  </h3>
                  <p className="text-3xl font-bold text-accent mb-4">10% Off</p>
                  <p className="text-neutralDark/80">
                    Save on any 5-session package
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-heading text-neutralDark mb-2">
                    10 Sessions
                  </h3>
                  <p className="text-3xl font-bold text-accent mb-4">15% Off</p>
                  <p className="text-neutralDark/80">
                    Save on any 10-session package
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-heading text-neutralDark mb-2">
                    20 Sessions
                  </h3>
                  <p className="text-3xl font-bold text-accent mb-4">20% Off</p>
                  <p className="text-neutralDark/80">
                    Save on any 20-session package
                  </p>
                </div>
              </div>
            </div>

            {/* Specialized Series */}
            <div>
              <h2 className="text-3xl font-heading text-neutralDark mb-6">Specialized Series</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 shadow-sm border border-accent/20">
                  <h3 className="text-2xl font-heading text-neutralDark mb-2">
                    12-Series
                  </h3>
                  <p className="text-4xl font-bold text-accent mb-4">$3,000</p>
                  <p className="text-neutralDark/80 mb-4">
                    Complete Anatomy Trains Structural Integration protocol
                  </p>
                  <p className="text-sm text-neutralDark/60">
                    12 comprehensive sessions for complete structural transformation
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 shadow-sm border border-accent/20">
                  <h3 className="text-2xl font-heading text-neutralDark mb-2">
                    Hip Series
                  </h3>
                  <p className="text-4xl font-bold text-accent mb-4">$720</p>
                  <p className="text-neutralDark/80 mb-4">
                    4-session focused hip work
                  </p>
                  <p className="text-sm text-neutralDark/60">
                    Targeted approach for hip mobility and alignment
                  </p>
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