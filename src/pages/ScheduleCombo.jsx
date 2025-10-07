
import PageLayout from '../components/PageLayout';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function ScheduleCombo() {

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
              Welcome to Your Combination Program
            </h1>
            <p className="text-lg text-neutralDark/80 mb-6">
              Your purchase is complete! Now let's schedule your sessions.
            </p>
            <div className="bg-warning/20 rounded-xl p-6 text-left mb-6">
              <h3 className="font-heading text-xl text-primary mb-3">⚠️ Important: Two Calendars</h3>
              <p className="text-neutralDark/80 mb-3">
                Your program includes both <strong>Structural Integration</strong> and <strong>Movement Education</strong> sessions. 
                You'll need to use <strong>both calendars below</strong> to schedule all your sessions.
              </p>
              <p className="text-neutralDark/80 font-semibold">
                📌 Please bookmark this page so you can easily return to schedule your future sessions!
              </p>
            </div>
            <div className="bg-accent/10 rounded-xl p-6 text-left">
              <h3 className="font-heading text-xl text-primary mb-3">Scheduling Tips:</h3>
              <ul className="space-y-2 text-neutralDark/80">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Start with Structural Integration sessions (they create the foundation)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Weave in Movement sessions between SI sessions for best results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>SI sessions should be spaced 1-2 weeks apart</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Movement sessions can be weekly or as needed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Calendar sections */}
          <div className="space-y-8">
            {/* Structural Integration Calendar */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-primary/30">
              <div className="flex items-center justify-center mb-4">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Structural Integration
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4 text-center">
                Schedule Your SI Sessions (90 minutes)
              </h2>
              <p className="text-center text-neutralDark/70 mb-6">
                Use this calendar for your Structural Integration sessions
              </p>
              <div 
                className="cal-inline" 
                data-cal-link="rockyourbody/si90"
                data-cal-config='{"layout":"month_view"}'
                style={{ width: '100%', height: '700px', overflow: 'scroll' }}
              />
            </div>

            {/* Movement Education Calendar */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-accent/30">
              <div className="flex items-center justify-center mb-4">
                <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Movement Education
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4 text-center">
                Schedule Your Movement Sessions (60 minutes)
              </h2>
              <p className="text-center text-neutralDark/70 mb-6">
                Use this calendar for your Movement Education sessions
              </p>
              <div 
                className="cal-inline" 
                data-cal-link="rockyourbody/move60"
                data-cal-config='{"layout":"month_view"}'
                style={{ width: '100%', height: '700px', overflow: 'scroll' }}
              />
            </div>
          </div>

          {/* Reminder to bookmark */}
          <div className="mt-8 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 text-center border-2 border-accent/20">
            <h3 className="text-2xl font-heading text-primary mb-4">
              📌 Don't Forget to Bookmark This Page!
            </h3>
            <p className="text-lg text-neutralDark/80">
              You'll want to return here to schedule your future sessions throughout your program.
            </p>
          </div>

          {/* Help section */}
          <div className="mt-12 text-center">
            <p className="text-neutralDark/70 mb-6">
              Questions about your program or scheduling?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="outline">Contact Rock</Button>
              </Link>
              <Link to="/process">
                <Button variant="outline">Learn About the Process</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default ScheduleCombo;

