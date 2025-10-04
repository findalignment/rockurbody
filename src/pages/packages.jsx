function Packages() {
  return (
    <div style={{ padding: '100px 20px 50px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px', textAlign: 'center' }}>
        Session Packages
      </h1>
      <p style={{ fontSize: '18px', textAlign: 'center', marginBottom: '60px', color: '#666', maxWidth: '800px', margin: '0 auto 60px' }}>
        Save money and commit to the process with multi-session packages
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        {/* Add your package info here - I'll give you a template below */}
        
        <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>
            Movement Package
          </h2>
          <p style={{ fontSize: '24px', color: '#06b6d4', fontWeight: 'bold', marginBottom: '20px' }}>
            5 Sessions
          </p>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Five 60-minute movement coaching sessions. Focus on building better patterns and sustainable strength.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', color: '#666' }}>
            <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>✓</span> Save $X per session
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>✓</span> Expires in 3 months
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>✓</span> Custom movement plan
            </li>
          </ul>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e3a8a' }}>
            $XXX
          </p>
        </div>

        <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', border: '2px solid #06b6d4' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>
            12-Series Package
          </h2>
          <p style={{ fontSize: '24px', color: '#06b6d4', fontWeight: 'bold', marginBottom: '20px' }}>
            12 Sessions
          </p>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Complete Anatomy Trains Structural Integration 12-series. Systematic full-body reorganization.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', color: '#666' }}>
            <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>✓</span> Save $X per session
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>✓</span> Complete structural transformation
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>✓</span> 90-120min sessions
            </li>
          </ul>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e3a8a' }}>
            $XXX
          </p>
        </div>

        <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>
            Hip Series Package
          </h2>
          <p style={{ fontSize: '24px', color: '#06b6d4', fontWeight: 'bold', marginBottom: '20px' }}>
            3 Sessions
          </p>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Focused work on hip function, mobility, and structural balance. Addresses hip pain and movement limitations.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', color: '#666' }}>
            <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>✓</span> Save $X per session
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>✓</span> Targeted hip work
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>✓</span> 90min sessions
            </li>
          </ul>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e3a8a' }}>
            $XXX
          </p>
        </div>
      </div>
    </div>
  );
}

export default Packages;