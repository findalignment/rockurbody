import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

function Credentials() {
  return (
    <PageLayout>
      <SEO 
        title="Credentials & Certifications | Rock Hudson - Santa Cruz Personal Trainer"
        description="Rock Hudson's professional credentials: Anatomy Trains Structural Integrator, NASM Personal Trainer, ACE Health Coach, MovNat Level 2, and more. 12+ years experience in Santa Cruz. Expert training in fascial bodywork and functional movement."
        keywords="Rock Hudson credentials, Santa Cruz personal trainer certifications, Anatomy Trains certified, NASM trainer, structural integration certified, movement education credentials, professional qualifications"
        url="/credentials"
      />
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
          <Link to="/certifications/anatomy-trains-si" style={{ textDecoration: 'none' }}>
            <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px', cursor: 'pointer', transition: 'color 0.2s' }} className="hover:text-accent">
              Anatomy Trains Structural Integration →
            </h3>
          </Link>
          <p style={{ color: '#999', marginBottom: '10px' }}>Comprehensive 12-session protocol training</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Completed comprehensive training in Tom Myers' Anatomy Trains approach to structural integration, focusing on fascial system reorganization and whole-body structural alignment.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <Link to="/certifications/anatomy-trains-teacher" style={{ textDecoration: 'none' }}>
            <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px', cursor: 'pointer', transition: 'color 0.2s' }} className="hover:text-accent">
              Anatomy Trains Teacher in Training →
            </h3>
          </Link>
          <p style={{ color: '#999', marginBottom: '10px' }}>Advanced teaching certification</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Training to become a certified instructor in the Anatomy Trains methodology, deepening understanding of fascial anatomy and teaching techniques.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <Link to="/certifications/nasm-personal-trainer" style={{ textDecoration: 'none' }}>
            <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px', cursor: 'pointer', transition: 'color 0.2s' }} className="hover:text-accent">
              NASM Certified Personal Trainer →
            </h3>
          </Link>
          <p style={{ color: '#999', marginBottom: '10px' }}>National Academy of Sports Medicine</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Certified personal trainer with expertise in exercise science, program design, and client assessment.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <Link to="/certifications/nasm-corrective-exercise" style={{ textDecoration: 'none' }}>
            <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px', cursor: 'pointer', transition: 'color 0.2s' }} className="hover:text-accent">
              NASM Corrective Exercise Specialist →
            </h3>
          </Link>
          <p style={{ color: '#999', marginBottom: '10px' }}>National Academy of Sports Medicine</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Specialized training in identifying and correcting movement dysfunctions and postural imbalances.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <Link to="/certifications/ace-health-coach" style={{ textDecoration: 'none' }}>
            <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px', cursor: 'pointer', transition: 'color 0.2s' }} className="hover:text-accent">
              ACE Health Coach →
            </h3>
          </Link>
          <p style={{ color: '#999', marginBottom: '10px' }}>American Council on Exercise</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Certified health coach with training in behavior change, motivation, and holistic wellness approaches.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <Link to="/certifications/ace-corrective-exercise" style={{ textDecoration: 'none' }}>
            <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px', cursor: 'pointer', transition: 'color 0.2s' }} className="hover:text-accent">
              ACE Corrective Exercise Specialist →
            </h3>
          </Link>
          <p style={{ color: '#999', marginBottom: '10px' }}>American Council on Exercise</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Advanced certification in corrective exercise techniques for addressing movement limitations and pain.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <Link to="/certifications/medfit-parkinsons" style={{ textDecoration: 'none' }}>
            <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px', cursor: 'pointer', transition: 'color 0.2s' }} className="hover:text-accent">
              MedFit Parkinson's Disease Fitness Specialist →
            </h3>
          </Link>
          <p style={{ color: '#999', marginBottom: '10px' }}>Medical Fitness Network</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Specialized training in exercise programming for individuals with Parkinson's disease, focusing on balance, mobility, and quality of life.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <Link to="/certifications/medfit-recovery" style={{ textDecoration: 'none' }}>
            <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px', cursor: 'pointer', transition: 'color 0.2s' }} className="hover:text-accent">
              MedFit Drug & Alcohol Recovery Fitness Specialist →
            </h3>
          </Link>
          <p style={{ color: '#999', marginBottom: '10px' }}>Medical Fitness Network</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Specialized training in supporting individuals in recovery through targeted exercise and movement therapy.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <Link to="/certifications/precision-nutrition" style={{ textDecoration: 'none' }}>
            <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px', cursor: 'pointer', transition: 'color 0.2s' }} className="hover:text-accent">
              Precision Nutrition Coach Level 2 →
            </h3>
          </Link>
          <p style={{ color: '#999', marginBottom: '10px' }}>Precision Nutrition</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Advanced nutrition coaching certification focusing on evidence-based nutrition strategies and behavior change.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <Link to="/certifications/movnat" style={{ textDecoration: 'none' }}>
            <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px', cursor: 'pointer', transition: 'color 0.2s' }} className="hover:text-accent">
              MovNat Level 2 →
            </h3>
          </Link>
          <p style={{ color: '#999', marginBottom: '10px' }}>Natural Movement Training</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Advanced certification in natural movement training, focusing on practical, real-world movement skills and functional fitness.
          </p>
        </div>
      </div>

      <div style={{ background: 'white', padding: '40px', borderRadius: '16px', marginBottom: '40px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '30px' }}>Education</h2>
        
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px' }}>
            San Jose State University
          </h3>
          <p style={{ color: '#999', marginBottom: '10px' }}>Bachelor of Science in Business Administration - Management</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Comprehensive business education focusing on management principles, organizational behavior, and strategic decision-making.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px' }}>
            Cabrillo College
          </h3>
          <p style={{ color: '#999', marginBottom: '10px' }}>Associate of Arts & Associate of Science</p>
          <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '10px' }}>
            Completed multiple associate degrees demonstrating breadth of knowledge across disciplines:
          </p>
          <ul style={{ color: '#666', lineHeight: '1.8', marginLeft: '20px' }}>
            <li>AA in General Business</li>
            <li>AA in Communication</li>
            <li>AA in Chemistry</li>
            <li>AA in Economics</li>
            <li>AA in Kinesiology</li>
            <li>AA in Philosophy</li>
            <li>AA in Anthropology</li>
            <li>AA in Psychology</li>
            <li>AS in Business</li>
          </ul>
        </div>
      </div>

      <div style={{ background: 'white', padding: '40px', borderRadius: '16px', marginBottom: '40px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '30px' }}>Professional Experience</h2>
        <p style={{ color: '#666', lineHeight: '1.8' }}>
          Over a decade of experience working with diverse populations, from competitive athletes to individuals managing chronic pain and neurological conditions. I specialize in helping clients understand their bodies, move better, and achieve lasting change through education and sustainable practices.
        </p>
      </div>

      <div style={{ background: '#f0f9ff', padding: '40px', borderRadius: '16px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Philosophy</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '15px' }}>
          My approach is rooted in helping you discover what works for your unique body and circumstances. There's no one-size-fits-all solution. What matters is finding what you enjoy, what helps you reach your goals, and what you can sustain over time.
        </p>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '15px' }}>
          I believe in teaching you to understand your body so you can make informed decisions about your movement and health. My diverse educational background (spanning business, communication, psychology, kinesiology, and philosophy) informs a holistic approach that considers not just the physical, but the mental and emotional aspects of change.
        </p>
        <p style={{ color: '#666', lineHeight: '1.8' }}>
          The goal isn't perfection. It's continuous improvement. Together, we'll build a foundation of understanding and develop practical strategies that fit your life, helping you move better, feel better, and maintain those improvements long-term.
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