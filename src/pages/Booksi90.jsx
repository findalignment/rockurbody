function BookSI90() {
  return (
    <div style={{ padding: '50px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '10px', textAlign: 'center' }}>
        90-Minute Structural Integration
      </h1>
      <p style={{ fontSize: '18px', textAlign: 'center', marginBottom: '40px', color: '#666' }}>
        Standard structural integration session with full assessment and treatment
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>⏱️</div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>90 Minutes</h3>
          <p style={{ color: '#666', fontSize: '14px' }}>Standard SI session length</p>
        </div>
        
        <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>🤲</div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>What We Cover</h3>
          <p style={{ color: '#666', fontSize: '14px' }}>Deep fascial work, structural reorganization, movement integration</p>
        </div>
        
        <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>🎯</div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Best For</h3>
          <p style={{ color: '#666', fontSize: '14px' }}>Most clients, chronic issues, full-body work</p>
        </div>
      </div>
      
      <iframe
        src="https://cal.com/rockyourbody/si90"
        style={{
          width: '100%',
          height: '800px',
          border: 'none',
          borderRadius: '8px'
        }}
        title="Book 90-minute structural integration"
      />
    </div>
  );
}

export default BookSI90;