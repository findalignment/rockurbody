
import PageLayout from '../components/PageLayout';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function ScheduleFullRepatterning() {

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
              Welcome to Full Repatterning
            </h1>
            <p className="text-lg text-neutralDark/80 mb-6">
              Your purchase is complete! This is the complete transformation program.
            </p>
            <div className="bg-warning/20 rounded-xl p-6 text-left mb-6">
              <h3 className="font-heading text-xl text-primary mb-3">⚠️ Important: Three Calendars</h3>
              <p className="text-neutralDark/80 mb-3">
                Full Repatterning includes <strong>12 SI sessions</strong> (eleven 90-min + one 2-hour) and <strong>24 Movement Education sessions (60 min)</strong>.
              </p>
              <p className="text-neutralDark/80 font-semibold">
                📌 Please bookmark this page so you can easily return to schedule your future sessions!
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-primary/30">
              <div className="flex items-center justify-center mb-4">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  12-Series SI (Sessions 1-7, 9-12)
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4 text-center">
                Schedule 90-Minute SI Sessions
              </h2>
              <p className="text-center text-neutralDark/70 mb-4">Use this for all sessions except Session 8</p>
              <div 
                className="cal-inline" 
                data-cal-link="rockyourbody/si90"
                data-cal-config='{"layout":"month_view"}'
                style={{ width: '100%', height: '700px', overflow: 'scroll' }}
              />
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-primary/50">
              <div className="flex items-center justify-center mb-4">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  12-Series SI (Session 8 Only)
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4 text-center">
                Schedule 3-Hour SI Session
              </h2>
              <p className="text-center text-neutralDark/70 mb-4">Session 8 is the deeper integration session</p>
              <div 
                className="cal-inline" 
                data-cal-link="rockyourbody/si180"
                data-cal-config='{"layout":"month_view"}'
                style={{ width: '100%', height: '700px', overflow: 'scroll' }}
              />
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-accent/30">
              <div className="flex items-center justify-center mb-4">
                <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Movement Education
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4 text-center">
                Schedule Your 24 Movement Sessions (60 minutes)
              </h2>
              <div 
                className="cal-inline" 
                data-cal-link="rockyourbody/move60"
                data-cal-config='{"layout":"month_view"}'
                style={{ width: '100%', height: '700px', overflow: 'scroll' }}
              />
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 text-center border-2 border-accent/20">
            <h3 className="text-2xl font-heading text-primary mb-4">
              📌 Bookmark This Page!
            </h3>
            <p className="text-lg text-neutralDark/80">
              You'll want to return here to schedule your remaining sessions throughout this 12-week program.
            </p>
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact"><Button variant="outline">Contact Rock</Button></Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default ScheduleFullRepatterning;
