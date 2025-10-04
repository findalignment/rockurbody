import PageLayout from '../components/PageLayout';

function RefundPolicy() {
  return (
    <PageLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-heading text-primary mb-8">
            Refund Policy
          </h1>
          <p className="text-lg text-neutralDark/80 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">Overview</h2>
              <p className="text-neutralDark/80 leading-relaxed">
                At Rock Your Body, we are committed to providing exceptional movement education and structural integration services. This refund policy outlines the terms and conditions for refunds and session transfers.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">Refund Terms</h2>
              
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">30-Day Refund Window</h3>
                <p className="text-neutralDark/80 leading-relaxed">
                  Refunds are only offered within the first 30 days of purchase and will be processed in the original form of payment.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-neutralDark mb-3">Refund Eligibility</h3>
              <p className="text-neutralDark/80 leading-relaxed mb-4">
                To be eligible for a refund, the following conditions must be met:
              </p>
              <ul className="list-disc pl-6 text-neutralDark/80 leading-relaxed mb-4">
                <li>The refund request is made within 30 days of the original purchase date</li>
                <li>The service has not been fully utilized (sessions not completed)</li>
                <li>The refund request is made in writing via email to rock@rockurbody.com</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutralDark mb-3">Refund Processing</h3>
              <p className="text-neutralDark/80 leading-relaxed mb-4">
                Approved refunds will be processed as follows:
              </p>
              <ul className="list-disc pl-6 text-neutralDark/80 leading-relaxed">
                <li>Refunds will be issued in the original form of payment</li>
                <li>Processing time: 5-10 business days after approval</li>
                <li>You will receive confirmation via email once the refund is processed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">Session Transfers</h2>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-3">Transfer to Another Person</h3>
                <p className="text-neutralDark/80 leading-relaxed">
                  Sessions can be transferred to another person at any time, subject to the terms below.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-neutralDark mb-3">Transfer Requirements</h3>
              <p className="text-neutralDark/80 leading-relaxed mb-4">
                To transfer sessions to another person:
              </p>
              <ul className="list-disc pl-6 text-neutralDark/80 leading-relaxed mb-4">
                <li>Contact us at least 24 hours before the scheduled session</li>
                <li>Provide the new participant's contact information</li>
                <li>Ensure the new participant completes any required intake forms</li>
                <li>Verify that the new participant meets any health or safety requirements</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutralDark mb-3">Transfer Limitations</h3>
              <ul className="list-disc pl-6 text-neutralDark/80 leading-relaxed">
                <li>Transfers are subject to availability and scheduling constraints</li>
                <li>Some specialized sessions may not be transferable</li>
                <li>Package deals and series may have specific transfer terms</li>
                <li>Transfers are final and cannot be reversed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">Non-Refundable Items</h2>
              <p className="text-neutralDark/80 leading-relaxed mb-4">
                The following are not eligible for refunds:
              </p>
              <ul className="list-disc pl-6 text-neutralDark/80 leading-relaxed">
                <li>Services completed more than 30 days after purchase</li>
                <li>No-show appointments or late cancellations (less than 4 hours notice)</li>
                <li>Services that have been partially or fully utilized</li>
                <li>Gift certificates or promotional packages (unless otherwise specified)</li>
                <li>Any services where the client has violated our terms of service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">Cancellation Policy</h2>
              <p className="text-neutralDark/80 leading-relaxed mb-4">
                To avoid charges and maintain eligibility for refunds:
              </p>
              <ul className="list-disc pl-6 text-neutralDark/80 leading-relaxed">
                <li>Cancel or reschedule at least 4 hours in advance</li>
                <li>Contact us directly via phone or email</li>
                <li>Late cancellations may result in forfeiture of the session</li>
                <li>Emergency cancellations will be handled on a case-by-case basis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">Special Circumstances</h2>
              <p className="text-neutralDark/80 leading-relaxed mb-4">
                We understand that exceptional circumstances may arise. In cases of:
              </p>
              <ul className="list-disc pl-6 text-neutralDark/80 leading-relaxed mb-4">
                <li>Medical emergencies</li>
                <li>Unexpected life events</li>
                <li>Service quality issues</li>
                <li>Other extenuating circumstances</li>
              </ul>
              <p className="text-neutralDark/80 leading-relaxed">
                Please contact us directly to discuss your situation. We will work with you to find an appropriate solution.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">How to Request a Refund or Transfer</h2>
              <div className="bg-neutralLight/50 p-6 rounded-lg">
                <p className="text-neutralDark/80 leading-relaxed mb-4">
                  To request a refund or session transfer:
                </p>
                <ol className="list-decimal pl-6 text-neutralDark/80 leading-relaxed mb-4">
                  <li>Email us at <a href="mailto:rock@rockurbody.com" className="text-accent hover:underline">rock@rockurbody.com</a></li>
                  <li>Include your name, purchase date, and reason for the request</li>
                  <li>For transfers, provide the new participant's contact information</li>
                  <li>We will respond within 2 business days</li>
                </ol>
                <p className="text-neutralDark/80 leading-relaxed">
                  <strong>Phone:</strong> Available during business hours for urgent matters
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">Policy Updates</h2>
              <p className="text-neutralDark/80 leading-relaxed">
                This refund policy may be updated from time to time. Any changes will be posted on this page with an updated "Last updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">Contact Information</h2>
              <p className="text-neutralDark/80 leading-relaxed mb-4">
                If you have any questions about this refund policy, please contact us:
              </p>
              <div className="bg-neutralLight/50 p-6 rounded-lg">
                <p className="text-neutralDark/80">
                  <strong>Email:</strong> <a href="mailto:rock@rockurbody.com" className="text-accent hover:underline">rock@rockurbody.com</a>
                </p>
                <p className="text-neutralDark/80">
                  <strong>Location:</strong> Santa Cruz, California
                </p>
                <p className="text-neutralDark/80">
                  <strong>Response Time:</strong> Within 2 business days
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default RefundPolicy;
