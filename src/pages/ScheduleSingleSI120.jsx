import { useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function ScheduleSingleSI120() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    
    script.onload = () => {
      // Initialize Cal.com after script loads
      if (window.Cal) {
        window.Cal('init');
      }
    };
    document.body.appendChild(script);
    return () => { if (document.body.contains(script)) {
        document.body.removeChild(script);
      } };
  }, []);

  return (
    <PageLayout>
      <div className="bg-offWhite min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 text-center border-2 border-success">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading text-primary mb-4">
              Ready to Schedule Your 2-Hour SI Session
            </h1>
            <p className="text-lg text-neutralDark/80 mb-6">
              Your purchase is complete! Now let's find a time that works for you.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4 text-center">
              Schedule Your 2-Hour Structural Integration Session
            </h2>
            <div 
              className="cal-inline" 
              data-cal-link="rockyourbody/si120"
              data-cal-config='{"layout":"month_view"}'
              style={{ width: '100%', height: '700px', overflow: 'scroll' }}
            />
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact"><Button variant="outline">Contact Rock</Button></Link>
              <Link to="/book/structural-integration"><Button variant="outline">Book More Sessions</Button></Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default ScheduleSingleSI120;
