import PageLayout from '../components/PageLayout';

function PrivacyPolicy() {
  return (
    <PageLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-heading text-primary mb-8">
            Privacy Policy
          </h1>
          <p className="text-lg text-neutralDark/80 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">Introduction</h2>
              <p className="text-neutralDark/80 leading-relaxed">
                Rock Your Body ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-neutralDark mb-3">Personal Information</h3>
              <p className="text-neutralDark/80 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 text-neutralDark/80 leading-relaxed mb-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Health and fitness information relevant to our services</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutralDark mb-3">Automatically Collected Information</h3>
              <p className="text-neutralDark/80 leading-relaxed mb-4">
                We may automatically collect certain information when you visit our website:
              </p>
              <ul className="list-disc pl-6 text-neutralDark/80 leading-relaxed">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">How We Use Your Information</h2>
              <p className="text-neutralDark/80 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-neutralDark/80 leading-relaxed">
                <li>To provide and improve our movement education and structural integration services</li>
                <li>To schedule and manage appointments</li>
                <li>To process payments and billing</li>
                <li>To communicate with you about our services</li>
                <li>To send you important updates and information</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">Information Sharing and Disclosure</h2>
              <p className="text-neutralDark/80 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 text-neutralDark/80 leading-relaxed">
                <li>With your explicit consent</li>
                <li>With service providers who assist us in operating our business (under strict confidentiality agreements)</li>
                <li>To comply with legal requirements or court orders</li>
                <li>To protect our rights, property, or safety, or that of our clients</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">California Privacy Rights (CCPA/CPRA)</h2>
              <p className="text-neutralDark/80 leading-relaxed mb-4">
                If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
              </p>
              <ul className="list-disc pl-6 text-neutralDark/80 leading-relaxed mb-4">
                <li><strong>Right to Know:</strong> You have the right to know what personal information we collect, use, and disclose</li>
                <li><strong>Right to Delete:</strong> You have the right to request deletion of your personal information</li>
                <li><strong>Right to Correct:</strong> You have the right to correct inaccurate personal information</li>
                <li><strong>Right to Opt-Out:</strong> You have the right to opt-out of the sale or sharing of personal information (we do not sell personal information)</li>
                <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights</li>
              </ul>
              <p className="text-neutralDark/80 leading-relaxed">
                To exercise these rights, please contact us at <a href="mailto:rock@rockurbody.com" className="text-accent hover:underline">rock@rockurbody.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">Data Security</h2>
              <p className="text-neutralDark/80 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">Data Retention</h2>
              <p className="text-neutralDark/80 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-neutralDark/80 leading-relaxed mb-4">
                Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences. Note that disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">Third-Party Links</h2>
              <p className="text-neutralDark/80 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">Children's Privacy</h2>
              <p className="text-neutralDark/80 leading-relaxed">
                Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">Changes to This Privacy Policy</h2>
              <p className="text-neutralDark/80 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after any modifications constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-neutralDark mb-4">Contact Information</h2>
              <p className="text-neutralDark/80 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-neutralLight/50 p-6 rounded-lg">
                <p className="text-neutralDark/80">
                  <strong>Email:</strong> <a href="mailto:rock@rockurbody.com" className="text-accent hover:underline">rock@rockurbody.com</a>
                </p>
                <p className="text-neutralDark/80">
                  <strong>Location:</strong> Santa Cruz, California
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default PrivacyPolicy;
