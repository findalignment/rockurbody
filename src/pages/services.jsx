import PageLayout from '../components/PageLayout';

function Services() {
  return (
    <PageLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-heading text-primary mb-8">
            Services
          </h1>
          
          <p className="text-xl text-neutralDark/80 mb-12">
            I offer two complementary approaches: hands-on structural work and movement education. Most clients benefit from both.
          </p>
          
          <div className="space-y-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-heading text-neutralDark mb-4">
                Structural Integration Sessions
              </h2>
              <p className="text-lg text-neutralDark/80 mb-4">
                Hands-on fascial release to address restrictions in your connective tissue. This systematic approach reorganizes your body's structure, improving alignment and ease of movement.
              </p>
              <div className="space-y-2 text-neutralDark/80">
                <p><strong>What to expect:</strong></p>
                <ul className="space-y-1 ml-6">
                  <li>• 90-minute sessions</li>
                  <li>• Assessment of your movement patterns and structure</li>
                  <li>• Hands-on work to release fascial restrictions</li>
                  <li>• Movement integration to retrain patterns</li>
                  <li>• Between-session exercises and awareness practices</li>
                </ul>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-heading text-neutralDark mb-4">
                Movement Education
              </h2>
              <p className="text-lg text-neutralDark/80 mb-4">
                One-on-one training focused on how you move, not just what exercises you do. We work on fundamental movement patterns that improve everything you do.
              </p>
              <div className="space-y-2 text-neutralDark/80">
                <p><strong>What we work on:</strong></p>
                <ul className="space-y-1 ml-6">
                  <li>• Efficient breathing and core integration</li>
                  <li>• Fundamental movement patterns (squat, hinge, push, pull)</li>
                  <li>• Balance and proprioception</li>
                  <li>• Strength that serves your life, not just the gym</li>
                  <li>• Injury prevention and movement problem-solving</li>
                </ul>
              </div>
            </div>
            
            {/* Process */}
            <div className="bg-accent/10 border-2 border-accent rounded-2xl p-8">
              <h2 className="text-3xl font-heading text-neutralDark mb-4">
                The Process
              </h2>
              <div className="space-y-4 text-neutralDark/80">
                <div>
                  <h3 className="font-semibold text-neutralDark mb-1">First Session</h3>
                  <p>We assess where you are, what you want, and what's getting in the way. I'll explain what I see and recommend a plan.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutralDark mb-1">Ongoing Work</h3>
                  <p>Most clients see significant changes in 5-10 sessions. We work at your pace, focusing on what matters most to you.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutralDark mb-1">Maintenance</h3>
                  <p>Once you're moving well, monthly or quarterly tune-ups keep you there. You'll also have tools to maintain the work yourself.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Services;