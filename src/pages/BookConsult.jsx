import PageLayout from '../components/PageLayout';

function BookConsult() {
  return (
    <PageLayout>
      <div className="bg-white pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-heading text-primary mb-3 text-center">
            Let's Figure This Out Together
          </h1>
          <p className="text-xl text-neutralDark/80 text-center mb-12 max-w-3xl mx-auto">
            Free 15-minute chat to understand your body, your goals, and what's getting in the way. No fluff, no sales pitch, just honest conversation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-offWhite p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-3">☕</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Totally Free</h3>
              <p className="text-neutralDark/70">Zero obligation. Just us talking about your body.</p>
            </div>
            
            <div className="bg-offWhite p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Get Clear</h3>
              <p className="text-neutralDark/70">Finally understand what's actually going on</p>
            </div>
            
            <div className="bg-offWhite p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Real Plan</h3>
              <p className="text-neutralDark/70">Leave knowing exactly what you need (and what you don't)</p>
            </div>
          </div>
          
          <div className="bg-offWhite rounded-2xl p-8 shadow-sm">
            <iframe
              src="https://cal.com/rockyourbody/consult"
              className="w-full rounded-xl"
              style={{
                height: '800px',
                border: 'none'
              }}
              title="Book consultation"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default BookConsult;