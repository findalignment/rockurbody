
import PageLayout from '../components/PageLayout';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function ScheduleSingleMove30() {

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
              Ready to Schedule Your 30-Minute Movement Session
            </h1>
            <p className="text-lg text-neutralDark/80 mb-6">
              Your purchase is complete! Now let's find a time that works for you.
            </p>
            <div className="bg-accent/10 rounded-xl p-6 text-left">
              <h3 className="font-heading text-xl text-primary mb-3">Session Details:</h3>
              <ul className="space-y-2 text-neutralDark/80">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span><strong>30-minute</strong> focused movement session</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Perfect for check-ins, tune-ups, or specific questions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>One-on-one attention to your movement patterns</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4 text-center">
              Schedule Your 30-Minute Session
            </h2>
            <p className="text-center text-neutralDark/70 mb-6">
              Pick a time that works best for you
            </p>
            {/* CALENDAR PLACEHOLDER - Replace with actual Cal.com embed link */}
            <iframe
                src="https://cal.com/rockyourbody/move30"
                style={{
                  width: '100%',
                  height: '800px',
                  border: 'none',
                  borderRadius: '8px'
                }}
                title="Book calendar"
              />
          </div>

          {/* Help section */}
          <div className="mt-12 text-center">
            <p className="text-neutralDark/70 mb-6">
              Questions or need to reschedule?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="outline">Contact Rock</Button>
              </Link>
              <Link to="/book/movement-education">
                <Button variant="outline">Book More Sessions</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default ScheduleSingleMove30;

