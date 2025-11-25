import { Link } from 'react-router-dom';

function TwelveSeries() {
  return (
    <div style={{ padding: '100px 20px 50px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
        The 12-Series: Anatomy Trains Structural Integration
      </h1>
      <p style={{ fontSize: '20px', color: '#666', marginBottom: '40px' }}>
        A systematic approach to reorganizing your entire structure
      </p>

      <div style={{ background: 'white', padding: '40px', borderRadius: '16px', marginBottom: '40px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>What is the 12-Series?</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
          The Anatomy Trains 12-Series is a comprehensive structural integration protocol developed by Tom Myers. 
          It addresses your entire fascial system in a systematic way, releasing restrictions and reorganizing 
          your structure from the ground up.
        </p>
        <p style={{ color: '#666', lineHeight: '1.8' }}>
          Unlike traditional bodywork that focuses on symptoms, the 12-Series addresses the whole system. 
          Each session builds on the previous one, creating lasting structural change.
        </p>
      </div>

      <div style={{ background: 'white', padding: '40px', borderRadius: '16px', marginBottom: '40px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '30px' }}>The Session Breakdown</h2>
        
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '10px' }}>Sessions 1-4: Superficial Layers</h3>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            We start by addressing the superficial front line, superficial back line, lateral line, and spiral line. 
            This creates initial ease and prepares the body for deeper work.
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '10px' }}>Sessions 5-8: Deep Core</h3>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Deep core work: up to the waist, above the waist, back, and head and neck. 
            This is where major structural shifts happen as we address the deep layers of your body.
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '10px' }}>Sessions 9-12: Integration and Arms</h3>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Integration work below the waist, above the waist, arms, and wrapping it all together. 
            We refine the work and ensure everything works together as a coordinated system.
          </p>
        </div>
      </div>

      <div style={{ background: '#f0f9ff', padding: '40px', borderRadius: '16px', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Who Should Do the 12-Series?</h2>
        <ul style={{ listStyle: 'none', padding: 0, color: '#666', lineHeight: '1.8' }}>
          <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, fontSize: '20px' }}>✓</span>
            People with chronic pain or movement restrictions
          </li>
          <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, fontSize: '20px' }}>✓</span>
            Athletes wanting to improve performance and prevent injury
          </li>
          <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, fontSize: '20px' }}>✓</span>
            Anyone wanting a complete structural reset
          </li>
          <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, fontSize: '20px' }}>✓</span>
            People committed to long-term change (not a quick solution)
          </li>
        </ul>
      </div>

      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h3 style={{ fontSize: '28px', marginBottom: '20px' }}>Ready to start?</h3>
        <Link 
          to="/consult" 
          style={{ 
            display: 'inline-block', 
            padding: '16px 32px', 
            background: '#06b6d4', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '8px', 
            fontSize: '18px', 
            fontWeight: 'bold',
            marginRight: '20px'
          }}
        >
          Book Free Consultation
        </Link>
        <Link 
          to="/packages" 
          style={{ 
            display: 'inline-block', 
            padding: '16px 32px', 
            background: '#1e3a8a', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '8px', 
            fontSize: '18px', 
            fontWeight: 'bold'
          }}
        >
          View 12-Series Package
        </Link>
      </div>

      {/* Related Topics */}
      <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(0,0,0,0.1)', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>Related Topics:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
          <Link to="/what-is-structural-integration" style={{ fontSize: '14px', padding: '8px 16px', background: 'rgba(34, 197, 94, 0.1)', color: '#1e3a8a', borderRadius: '8px', textDecoration: 'none' }}>Structural Integration</Link>
          <Link to="/hip-series" style={{ fontSize: '14px', padding: '8px 16px', background: 'rgba(34, 197, 94, 0.1)', color: '#1e3a8a', borderRadius: '8px', textDecoration: 'none' }}>Hip Series</Link>
          <Link to="/combo-programs" style={{ fontSize: '14px', padding: '8px 16px', background: 'rgba(34, 197, 94, 0.1)', color: '#1e3a8a', borderRadius: '8px', textDecoration: 'none' }}>Combination Programs</Link>
          <Link to="/packages" style={{ fontSize: '14px', padding: '8px 16px', background: 'rgba(34, 197, 94, 0.1)', color: '#1e3a8a', borderRadius: '8px', textDecoration: 'none' }}>Programs & Packages</Link>
          <Link to="/process" style={{ fontSize: '14px', padding: '8px 16px', background: 'rgba(34, 197, 94, 0.1)', color: '#1e3a8a', borderRadius: '8px', textDecoration: 'none' }}>The Process</Link>
          <Link to="/approach" style={{ fontSize: '14px', padding: '8px 16px', background: 'rgba(34, 197, 94, 0.1)', color: '#1e3a8a', borderRadius: '8px', textDecoration: 'none' }}>My Approach</Link>
          <Link to="/services" style={{ fontSize: '14px', padding: '8px 16px', background: 'rgba(34, 197, 94, 0.1)', color: '#1e3a8a', borderRadius: '8px', textDecoration: 'none' }}>Services</Link>
          <Link to="/smart-starts" style={{ fontSize: '14px', padding: '8px 16px', background: 'rgba(34, 197, 94, 0.1)', color: '#1e3a8a', borderRadius: '8px', textDecoration: 'none' }}>Smart Starts</Link>
        </div>
      </div>
    </div>
  );
}

export default TwelveSeries;
