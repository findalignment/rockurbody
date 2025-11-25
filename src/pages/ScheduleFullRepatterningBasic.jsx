
import PageLayout from '../components/PageLayout';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function ScheduleFullRepatterningBasic() {

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
              Welcome to Full Repatterning - Basic
            </h1>
            <p className="text-lg text-neutralDark/80 mb-6">
              Your purchase is complete! This is the complete transformation program.
            </p>
            <div className="bg-warning/20 rounded-xl p-6 text-left mb-6">
              <h3 className="font-heading text-xl text-primary mb-3">⚠️ Important: Two Types of Sessions</h3>
              <p className="text-neutralDark/80 mb-3">
                Full Repatterning - Basic includes <strong>12 SI sessions (60 min)</strong> and <strong>12 Movement Education sessions (60 min)</strong>.
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
                  Structural Integration
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4 text-center">
                Schedule Your 12 SI Sessions (60 minutes)
              </h2>
              <iframe
                src="https://cal.com/rockyourbody/si60"
                style={{
                  width: '100%',
                  height: '800px',
                  border: 'none',
                  borderRadius: '8px'
                }}
                title="Book calendar"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-accent/30">
              <div className="flex items-center justify-center mb-4">
                <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Movement Education
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4 text-center">
                Schedule Your 12 Movement Sessions (60 minutes)
              </h2>
              <iframe
                src="https://cal.com/rockyourbody/move60"
                style={{
                  width: '100%',
                  height: '800px',
                  border: 'none',
                  borderRadius: '8px'
                }}
                title="Book calendar"
              />
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 text-center border-2 border-accent/20">
            <h3 className="text-2xl font-heading text-primary mb-4">
              📌 Bookmark This Page!
            </h3>
            <p className="text-lg text-neutralDark/80">
              You'll want to return here to schedule your remaining sessions throughout this program.
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

export default ScheduleFullRepatterningBasic;

