
import PageLayout from '../components/PageLayout';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function ScheduleSingleMove60() {

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
              Ready to Schedule Your 60-Minute Movement Session
            </h1>
            <p className="text-lg text-neutralDark/80 mb-6">
              Your purchase is complete! Now let's find a time that works for you.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4 text-center">
              Schedule Your 60-Minute Session
            </h2>
            {/* CALENDAR PLACEHOLDER - Replace with actual Cal.com embed link */}
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

          <div className="mt-12 text-center">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact"><Button variant="outline">Contact Rock</Button></Link>
              <Link to="/book/movement-education"><Button variant="outline">Book More Sessions</Button></Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default ScheduleSingleMove60;
