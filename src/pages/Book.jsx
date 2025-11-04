import { useEffect } from 'react';
import PageLayout from '../components/PageLayout';

function Book() {
  useEffect(() => {
    // Listen for messages from Cal.com iframe
    const handleMessage = (event) => {
      // Check if message is from Cal.com and indicates a booking was completed
      if (event.origin === 'https://cal.com' && event.data) {
        try {
          const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
          
          // Cal.com sends different event types - listen for booking completion
          if (data.type === 'booking:success' || data.event === 'booking:success') {
            // Wait a moment for the confirmation to show, then reload
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
        } catch (e) {
          // Ignore parsing errors for non-JSON messages
        }
      }
    };

    window.addEventListener('message', handleMessage);
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <PageLayout>
      <div className="bg-white pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-heading text-primary mb-6 text-center">
            Book Your Session
          </h1>
          <p className="text-xl text-neutralDark/80 text-center mb-12 max-w-3xl mx-auto">
            Choose from Structural Integration, Movement Education, or Combination Programs
          </p>
          
          <div className="bg-offWhite rounded-2xl p-8 shadow-sm">
            <iframe
              src="https://cal.com/rockyourbody"
              className="w-full rounded-xl"
              allow="payment"
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