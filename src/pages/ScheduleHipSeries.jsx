import { useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function ScheduleHipSeries() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <PageLayout>
      <div className="bg-offWhite min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Success message */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 text-center border-2 border-success">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading text-primary mb-4">
              Welcome to Your Hip Series
            </h1>
            <p className="text-lg text-neutralDark/80 mb-6">
              Your purchase is complete! Now let's schedule your 3 sessions.
            </p>
            <div className="bg-accent/10 rounded-xl p-6 text-left">
              <h3 className="font-heading text-xl text-primary mb-3">What to Expect:</h3>
              <ul className="space-y-2 text-neutralDark/80">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span><strong>3 sessions</strong> focused specifically on hip freedom and lower body alignment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Each session is <strong>90 minutes</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span><strong>Bookmark this page</strong> to easily schedule your remaining sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Sessions should be spaced about 1-2 weeks apart</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4 text-center">
              Schedule Your Hip Series Sessions (90 minutes)
            </h2>
            <p className="text-center text-neutralDark/70 mb-6">
              Book all 3 sessions at once or schedule them one at a time
            </p>
            <div 
              className="cal-inline" 
              data-cal-link="rockyourbody/si90"
              data-cal-config='{"layout":"month_view"}'
              style={{ width: '100%', height: '700px', overflow: 'scroll' }}
            />
          </div>

          {/* Help section */}
          <div className="mt-12 text-center">
            <p className="text-neutralDark/70 mb-6">
              Questions about your Hip Series?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="outline">Contact Rock</Button>
              </Link>
              <Link to="/what-is-structural-integration">
                <Button variant="outline">Learn More About SI</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default ScheduleHipSeries;

