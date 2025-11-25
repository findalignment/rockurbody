import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import PaymentButton from '../components/PaymentButton';

function BookStructuralIntegration() {
  // Base prices from Pricing page
  const prices = {
    si60: 180,
    si90: 270,
    si120: 360,
    series12: 3000,
    hipSeries: 720
  };

  return (
    <PageLayout>
      <PageHero 
        imageSrc="/services-hero.jpg"
        title="Book Structural Integration"
        subtitle="Choose your session length or series"
        alt="Book structural integration sessions - choose from single sessions or complete series in Santa Cruz"
      />

      <div className="bg-offWhite py-20 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Single Sessions */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-4 text-center">Single Sessions</h2>
            <p className="text-lg text-neutralDark/80 mb-12 text-center max-w-2xl mx-auto">
              Perfect for trying structural integration or ongoing maintenance work
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* 60min */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-neutralLight hover:border-accent transition-colors flex flex-col">
                <h3 className="font-semibold text-neutralDark mb-2 text-xl">60 Minutes</h3>
                <p className="text-3xl font-bold text-accent mb-4">${prices.si60}</p>
                <p className="text-sm text-neutralDark/70 mb-6 flex-grow">Focused work on 1-2 areas</p>
                <PaymentButton
                  amount={prices.si60 * 100}
                  description="60min SI Session"
                  packageType="60min SI"
                  totalSessions={1}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Buy Now
                </PaymentButton>
              </div>

              {/* 90min */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-accent hover:shadow-lg transition-all flex flex-col">
                <div className="text-xs bg-accent text-white px-3 py-1 rounded-full inline-block mb-2">MOST POPULAR</div>
                <h3 className="font-semibold text-neutralDark mb-2 text-xl">90 Minutes</h3>
                <p className="text-3xl font-bold text-accent mb-4">${prices.si90}</p>
                <p className="text-sm text-neutralDark/70 mb-6 flex-grow">Full body session with integration</p>
                <PaymentButton
                  amount={prices.si90 * 100}
                  description="90min SI Session"
                  packageType="90min SI"
                  totalSessions={1}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Buy Now
                </PaymentButton>
              </div>

              {/* 120min */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-neutralLight hover:border-accent transition-colors flex flex-col">
                <h3 className="font-semibold text-neutralDark mb-2 text-xl">120 Minutes</h3>
                <p className="text-3xl font-bold text-accent mb-4">${prices.si120}</p>
                <p className="text-sm text-neutralDark/70 mb-6 flex-grow">Extended work for complex issues</p>
                <PaymentButton
                  amount={prices.si120 * 100}
                  description="120min SI Session"
                  packageType="120min SI"
                  totalSessions={1}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Buy Now
                </PaymentButton>
              </div>
            </div>
          </div>

          {/* Series */}
          <div>
            <h2 className="text-3xl font-heading text-primary mb-4 text-center">Complete Series</h2>
            <p className="text-lg text-neutralDark/80 mb-12 text-center max-w-2xl mx-auto">
              Systematic protocols for lasting transformation
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* 12-Series */}
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 shadow-sm border-2 border-accent flex flex-col">
                <div className="text-xs bg-accent text-white px-3 py-1 rounded-full inline-block mb-4">RECOMMENDED</div>
                <h3 className="text-2xl font-heading text-neutralDark mb-2">
                  12-Series
                </h3>
                <p className="text-4xl font-bold text-accent mb-4">$3,000</p>
                <p className="text-neutralDark/80 mb-6">
                  Complete Anatomy Trains Structural Integration protocol. 12 comprehensive sessions for complete structural transformation.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-neutralDark/70 flex-grow">
                  <li>✓ Systematic full-body reorganization</li>
                  <li>✓ Sessions 1-4: Superficial layers</li>
                  <li>✓ Sessions 5-8: Deep core work</li>
                  <li>✓ Sessions 9-12: Integration</li>
                </ul>
                <PaymentButton
                  amount={300000}
                  description="12-Series Complete Protocol"
                  packageType="12-Series"
                  totalSessions={12}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Purchase 12-Series
                </PaymentButton>
              </div>
              
              {/* Hip Series */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-neutralLight hover:border-accent transition-colors flex flex-col">
                <h3 className="text-2xl font-heading text-neutralDark mb-2">
                  Hip Series
                </h3>
                <p className="text-4xl font-bold text-accent mb-4">$720</p>
                <p className="text-neutralDark/80 mb-6">
                  4-session focused hip work. Great introduction to structural integration or precursor to the 12-Series.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-neutralDark/70 flex-grow">
                  <li>✓ Targeted hip mobility & alignment</li>
                  <li>✓ Address hip pain and restrictions</li>
                  <li>✓ Improve gait and posture</li>
                  <li>✓ Perfect intro to SI work</li>
                </ul>
                <PaymentButton
                  amount={72000}
                  description="Hip Series - 4 Sessions"
                  packageType="Hip Series"
                  totalSessions={4}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors border border-black"
                >
                  Purchase Hip Series
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
              You'll receive a confirmation email with a link to schedule your sessions. For series purchases, you'll have access to a dedicated scheduling page to book all your sessions.
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default BookStructuralIntegration;
