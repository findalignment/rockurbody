import { Link } from 'react-router-dom';

function HipSeries() {
  return (
    <div style={{ padding: '100px 20px 50px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
        Hip Series
      </h1>
      <p style={{ fontSize: '20px', color: '#666', marginBottom: '40px' }}>
        Targeted structural work to restore hip function and eliminate pain
      </p>

      <div style={{ background: 'white', padding: '40px', borderRadius: '16px', marginBottom: '40px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>What is the Hip Series?</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
          The Hip Series is a focused 4-session protocol specifically designed to address hip dysfunction, 
          pain, and movement limitations. It combines structural integration with movement education to 
          restore natural hip function.
        </p>
        <p style={{ color: '#666', lineHeight: '1.8' }}>
          Most hip issues aren't just about the hip joint itself. They involve the pelvis, lower back, 
          legs, and core. This series addresses the whole system that affects hip function.
        </p>
      </div>

      <div style={{ background: 'white', padding: '40px', borderRadius: '16px', marginBottom: '40px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '30px' }}>The Three Sessions</h2>
        
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '10px' }}>Session 1: Opening the Pelvis</h3>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Release restrictions in the pelvic floor, psoas, and hip flexors. Create space and mobility 
            in the hip joint. Address fascial restrictions limiting hip movement.
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '10px' }}>Session 2: Leg Lines & Integration</h3>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Work the deep lateral rotators, IT band, and leg lines. Balance the relationship between 
            pelvis and legs. Address compensation patterns.
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '10px' }}>Session 3: Movement Integration</h3>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Teach proper hip mechanics. Retrain movement patterns. Ensure the structural work translates 
            to functional improvement in daily life.
          </p>
        </div>
      </div>

      <div style={{ background: '#f0f9ff', padding: '40px', borderRadius: '16px', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Who Benefits from the Hip Series?</h2>
        <ul style={{ listStyle: 'none', padding: 0, color: '#666', lineHeight: '1.8' }}>
          <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, fontSize: '20px' }}>✓</span>
            Hip pain (front, side, or back of hip)
          </li>
          <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, fontSize: '20px' }}>✓</span>
            Limited hip mobility or flexibility
          </li>
          <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, fontSize: '20px' }}>✓</span>
            Groin strains or recurrent injuries
          </li>
          <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, fontSize: '20px' }}>✓</span>
            Lower back pain related to hip issues
          </li>
          <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, fontSize: '20px' }}>✓</span>
            Athletes wanting better hip function
          </li>
        </ul>
      </div>

      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h3 style={{ fontSize: '28px', marginBottom: '20px' }}>Start your hip transformation</h3>
        <Link 
          to="/packages" 
          style={{ 
            display: 'inline-block', 
            padding: '16px 32px', 
            background: '#06b6d4', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '8px', 
            fontSize: '18px', 
            fontWeight: 'bold'
          }}
        >
          View Hip Series Package
        </Link>
      </div>

      {/* Related Topics */}
      <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(0,0,0,0.1)', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>Related Topics:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
          <Link to="/hip-pain-treatment" style={{ fontSize: '14px', padding: '8px 16px', background: 'rgba(34, 197, 94, 0.1)', color: '#1e3a8a', borderRadius: '8px', textDecoration: 'none' }}>Hip Pain Treatment</Link>
          <Link to="/12-series" style={{ fontSize: '14px', padding: '8px 16px', background: 'rgba(34, 197, 94, 0.1)', color: '#1e3a8a', borderRadius: '8px', textDecoration: 'none' }}>12-Series</Link>
          <Link to="/what-is-structural-integration" style={{ fontSize: '14px', padding: '8px 16px', background: 'rgba(34, 197, 94, 0.1)', color: '#1e3a8a', borderRadius: '8px', textDecoration: 'none' }}>Structural Integration</Link>
          <Link to="/combo-programs" style={{ fontSize: '14px', padding: '8px 16px', background: 'rgba(34, 197, 94, 0.1)', color: '#1e3a8a', borderRadius: '8px', textDecoration: 'none' }}>Combination Programs</Link>
          <Link to="/back-pain-santa-cruz" style={{ fontSize: '14px', padding: '8px 16px', background: 'rgba(34, 197, 94, 0.1)', color: '#1e3a8a', borderRadius: '8px', textDecoration: 'none' }}>Back Pain Relief</Link>
          <Link to="/packages" style={{ fontSize: '14px', padding: '8px 16px', background: 'rgba(34, 197, 94, 0.1)', color: '#1e3a8a', borderRadius: '8px', textDecoration: 'none' }}>Programs & Packages</Link>
          <Link to="/process" style={{ fontSize: '14px', padding: '8px 16px', background: 'rgba(34, 197, 94, 0.1)', color: '#1e3a8a', borderRadius: '8px', textDecoration: 'none' }}>The Process</Link>
          <Link to="/services" style={{ fontSize: '14px', padding: '8px 16px', background: 'rgba(34, 197, 94, 0.1)', color: '#1e3a8a', borderRadius: '8px', textDecoration: 'none' }}>Services</Link>
        </div>
      </div>
    </div>
  );
}

export default HipSeries;
