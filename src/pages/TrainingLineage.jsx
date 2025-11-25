import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';

function TrainingLineage() {
  return (
    <PageLayout>
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Training & Lineage"
        subtitle="Mentors who shaped my approach"
        alt="Training and mentorship in structural integration and movement education"
      />
      <div className="pt-16 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-neutralDark/80 mb-12">
            The mentors and teachers who have shaped my approach to structural integration and movement education
          </p>

          <div className="space-y-8">
            {/* Tom Myers */}
            <a 
              href="https://www.anatomytrains.com/about-us/about-tom-myers/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl p-8 shadow-sm border-2 border-black hover:border-accent hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-6 md:items-center">
                <div className="md:w-1/3 flex-shrink-0">
                  <img 
                    src="/tom-myers.jpg" 
                    alt="Tom Myers, founder of Anatomy Trains Structural Integration and author of Anatomy Trains" 
                    className="w-full h-64 object-cover rounded-lg"
                    style={{ border: '2px solid black' }}
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-heading text-neutralDark mb-4">
                    Tom Myers
                  </h2>
                  <p className="text-neutralDark/80 leading-relaxed mb-4">
                    Tom, author of Anatomy Trains, has over 50 years of experience in structural integration. As the founder of Anatomy Trains Structural Integration, Tom's guidance is unparalleled.
                  </p>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <h4 className="font-semibold text-neutralDark mb-2">My Training with Tom:</h4>
                    <ul className="text-neutralDark/80 space-y-1">
                      <li>• Personally mentored by Tom Myers</li>
                      <li>• Assisted Tom in numerous structural integration courses</li>
                      <li>• Taught Anatomy Trains lines in the first course of ATSI under Tom's guidance</li>
                    </ul>
                  </div>
                  <div className="mt-4 text-accent font-semibold flex items-center gap-2">
                    Read Tom's full bio
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            {/* Sharon Wheeler */}
            <a 
              href="https://www.sharonwheeler.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl p-8 shadow-sm border-2 border-black hover:border-accent hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-6 md:items-center">
                <div className="md:w-1/3 flex-shrink-0">
                  <img 
                    src="/sharon-wheeler.jpg" 
                    alt="Sharon Wheeler, structural integration master teacher with over 50 years of experience in advanced techniques" 
                    className="w-full h-64 object-cover rounded-lg"
                    style={{ border: '2px solid black' }}
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-heading text-neutralDark mb-4">
                    Sharon Wheeler
                  </h2>
                  <p className="text-neutralDark/80 leading-relaxed mb-4">
                    Sharon brings over 50 years of experience in structural integration into the classroom. Her expertise in advanced techniques and specialized work is unmatched.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-neutralDark mb-2">My Training with Sharon:</h4>
                    <ul className="text-neutralDark/80 space-y-1">
                      <li>• Over 60 hours with Sharon in Maine learning advanced techniques</li>
                      <li>• Specialized training in bone fascia and tension in and around the skull</li>
                      <li>• Assisted Sharon twice in Ukraine</li>
                      <li>• Worked on veterans with amputations as part of Sharon's team</li>
                    </ul>
                  </div>
                  <div className="mt-4 text-accent font-semibold flex items-center gap-2">
                    Visit sharonwheeler.com
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            {/* Til Luchau */}
            <a 
              href="https://www.advanced-trainings.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl p-8 shadow-sm border-2 border-black hover:border-accent hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-6 md:items-center">
                <div className="md:w-1/3 flex-shrink-0">
                  <img 
                    src="/til-luchau.jpg" 
                    alt="Til Luchau, author of Advanced Myofascial Techniques and structural integration educator" 
                    className="w-full h-64 object-cover rounded-lg"
                    style={{ border: '2px solid black' }}
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-heading text-neutralDark mb-4">
                    Til Luchau
                  </h2>
                  <p className="text-neutralDark/80 leading-relaxed mb-4">
                    Til, author of Advanced Myofascial Techniques 1 & 2 and longtime structural integration educator, has a gentle, knowing touch he shares with his students.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-neutralDark mb-2">My Training with Til:</h4>
                    <ul className="text-neutralDark/80 space-y-1">
                      <li>• Several in-person courses with Til</li>
                      <li>• Immersive learning experience in Thailand</li>
                      <li>• Numerous online courses through Advanced Trainings</li>
                    </ul>
                  </div>
                  <div className="mt-4 text-accent font-semibold flex items-center gap-2">
                    Visit advanced-trainings.com
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            {/* Wojtek Cackowski */}
            <a 
              href="https://www.zoga-movement.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl p-8 shadow-sm border-2 border-black hover:border-accent hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-6 md:items-center">
                <div className="md:w-1/3 flex-shrink-0">
                  <img 
                    src="/wojtek-cackowski.jpg" 
                    alt="Wojtek Cackowski, physiotherapist and creator of Zoga movement system, Anatomy Trains instructor" 
                    className="w-full h-64 object-cover rounded-lg"
                    style={{ border: '2px solid black' }}
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-heading text-neutralDark mb-4">
                    Wojtek Cackowski
                  </h2>
                  <p className="text-neutralDark/80 leading-relaxed mb-4">
                    Wojtek, physiotherapist, Zoga creator, and instructor for both Anatomy Trains and Sharon Wheeler, brings a special edge to structural integration.
                  </p>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-neutralDark mb-2">My Training with Wojtek:</h4>
                    <ul className="text-neutralDark/80 space-y-1">
                      <li>• Countless hours with Wojtek both in and out of the classroom</li>
                      <li>• Learned specialized techniques and precise hand placement</li>
                      <li>• Training in structural integration through movement</li>
                      <li>• Focus on maximum effectiveness in treatment</li>
                    </ul>
                  </div>
                  <div className="mt-4 text-accent font-semibold flex items-center gap-2">
                    Visit zoga-movement.com
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            {/* Philosophy Section */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-8">
              <h2 className="text-3xl font-heading text-neutralDark mb-6">
                The Lineage Advantage
              </h2>
              <div className="space-y-4 text-neutralDark/80">
                <p className="text-lg leading-relaxed">
                  Working with these master practitioners has given me access to techniques and insights that span over 200 years of combined experience in structural integration.
                </p>
                <p className="leading-relaxed">
                  Each mentor has contributed unique perspectives: Tom's systematic approach to fascial anatomy, Sharon's advanced cranial and bone work, Til's gentle precision, and Wojtek's movement integration. This diverse training allows me to adapt my approach to each client's specific needs.
                </p>
                <p className="leading-relaxed">
                  When you work with me, you're not just getting my experience.you're benefiting from the accumulated wisdom of the structural integration community's most respected teachers.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-heading text-neutralDark mb-4">
                Ready to Experience This Level of Training?
              </h3>
              <p className="text-neutralDark/80 mb-6">
                Book a consultation to discuss how this comprehensive training background can benefit your specific needs.
              </p>
              <a
                href="/consult"
                className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
              >
                Book Free Consultation
              </a>
            </div>
          </div>

          {/* Related Topics */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/about" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                About
              </Link>
              <Link to="/credentials" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Credentials
              </Link>
              <Link to="/approach" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                My Approach
              </Link>
              <Link to="/what-is-structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Structural Integration
              </Link>
              <Link to="/services" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Services
              </Link>
              <Link to="/process" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                The Process
              </Link>
              <Link to="/packages" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Programs & Packages
              </Link>
              <Link to="/contact" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default TrainingLineage;
