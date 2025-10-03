import PageLayout from '../components/PageLayout';

function Pricing() {
  return (
    <PageLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-heading text-primary mb-8">
            Pricing
          </h1>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-heading text-neutralDark mb-2">
                Single Session
              </h3>
              <p className="text-4xl font-bold text-accent mb-4">$150</p>
              <p className="text-neutralDark/80">
                90-minute session including assessment and treatment
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-heading text-neutralDark mb-2">
                Package of 5
              </h3>
              <p className="text-4xl font-bold text-accent mb-4">$650</p>
              <p className="text-neutralDark/80">
                Save $100 with a 5-session package
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Pricing;