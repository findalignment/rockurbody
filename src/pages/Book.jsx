import { useState } from 'react';
import PageLayout from '../components/PageLayout';

function Book() {
  const [iframeKey, setIframeKey] = useState(0);

  const handleBookAnother = () => {
    setIframeKey(prevKey => prevKey + 1);
  };

  return (
    <PageLayout>
      <div className="bg-white pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-heading text-primary mb-6 text-center">
            Book Your Session
          </h1>
          <p className="text-xl text-neutralDark/80 text-center mb-8 max-w-3xl mx-auto">
            Choose from Structural Integration, Movement Education, or Combination Programs
          </p>
          
          <div className="text-center mb-8">
            <button
              onClick={handleBookAnother}
              className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
            >
              Book Another Session
            </button>
          </div>
          
          <div className="bg-offWhite rounded-2xl p-8 shadow-sm">
            <iframe
              key={iframeKey}
              src="https://cal.com/rockyourbody"
              className="w-full rounded-xl"
              style={{
                height: '1400px',
                border: 'none'
              }}
              title="Book a session"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Book;