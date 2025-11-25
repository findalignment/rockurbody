import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';

function Credentials() {
  return (
    <PageLayout>
      <PageHero 
        imageSrc="/credentials-hero.jpg"
        title="Credentials & Certifications"
        subtitle="Professional training and expertise"
        alt="Rock Hudson's professional credentials and certifications in structural integration and movement education"
      />
    <div style={{ padding: '40px 20px 50px', maxWidth: '1000px', margin: '0 auto' }}>

      {/* Add your actual credentials here - template below */}

      <div style={{ background: 'white', padding: '40px', borderRadius: '16px', marginBottom: '40px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '30px' }}>Certifications & Training</h2>
        
        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px' }}>
            Anatomy Trains Structural Integration
          </h3>
          <p style={{ color: '#999', marginBottom: '10px' }}>Comprehensive 12-session protocol training</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Completed comprehensive training in Tom Myers' Anatomy Trains approach to structural integration, focusing on fascial system reorganization and whole-body structural alignment.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px' }}>
            Anatomy Trains Teacher in Training
          </h3>
          <p style={{ color: '#999', marginBottom: '10px' }}>Advanced teaching certification</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Training to become a certified instructor in the Anatomy Trains methodology, deepening understanding of fascial anatomy and teaching techniques.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px' }}>
            NASM Certified Personal Trainer
          </h3>
          <p style={{ color: '#999', marginBottom: '10px' }}>National Academy of Sports Medicine</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Certified personal trainer with expertise in exercise science, program design, and client assessment.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px' }}>
            NASM Corrective Exercise Specialist
          </h3>
          <p style={{ color: '#999', marginBottom: '10px' }}>National Academy of Sports Medicine</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Specialized training in identifying and correcting movement dysfunctions and postural imbalances.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px' }}>
            ACE Health Coach
          </h3>
          <p style={{ color: '#999', marginBottom: '10px' }}>American Council on Exercise</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Certified health coach with training in behavior change, motivation, and holistic wellness approaches.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px' }}>
            ACE Corrective Exercise Specialist
          </h3>
          <p style={{ color: '#999', marginBottom: '10px' }}>American Council on Exercise</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Advanced certification in corrective exercise techniques for addressing movement limitations and pain.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px' }}>
            MedFit Parkinson's Disease Fitness Specialist
          </h3>
          <p style={{ color: '#999', marginBottom: '10px' }}>Medical Fitness Network</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Specialized training in exercise programming for individuals with Parkinson's disease, focusing on balance, mobility, and quality of life.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px' }}>
            MedFit Drug & Alcohol Recovery Fitness Specialist
          </h3>
          <p style={{ color: '#999', marginBottom: '10px' }}>Medical Fitness Network</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Specialized training in supporting individuals in recovery through targeted exercise and movement therapy.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px' }}>
            Precision Nutrition Coach Level 2
          </h3>
          <p style={{ color: '#999', marginBottom: '10px' }}>Precision Nutrition</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Advanced nutrition coaching certification focusing on evidence-based nutrition strategies and behavior change.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px' }}>
            MovNat Level 2
          </h3>
          <p style={{ color: '#999', marginBottom: '10px' }}>Natural Movement Training</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Advanced certification in natural movement training, focusing on practical, real-world movement skills and functional fitness.
          </p>
        </div>
      </div>

      <div style={{ background: 'white', padding: '40px', borderRadius: '16px', marginBottom: '40px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '30px' }}>Professional Experience</h2>
        <p style={{ color: '#666', lineHeight: '1.8' }}>
          [Add your experience working with clients, types of cases you've worked on, etc.]
        </p>
      </div>

      <div style={{ background: '#f0f9ff', padding: '40px', borderRadius: '16px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Philosophy</h2>
        <p style={{ color: '#666', lineHeight: '1.8' }}>
          [Add a paragraph about your philosophy and approach to working with clients]
        </p>
      </div>

      {/* Related Topics */}
      <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center" style={{ padding: '40px 20px' }}>
        <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/about" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
            About
          </Link>
          <Link to="/training-lineage" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
            Training Lineage
          </Link>
          <Link to="/approach" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
            My Approach
          </Link>
          <Link to="/what-is-structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
            Structural Integration
          </Link>
          <Link to="/what-is-movement-education" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
            Movement Education
          </Link>
          <Link to="/services" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
            Services
          </Link>
          <Link to="/process" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
            The Process
          </Link>
          <Link to="/contact" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
            Contact
          </Link>
        </div>
      </div>
    </div>
    </PageLayout>
  );
}

export default Credentials;