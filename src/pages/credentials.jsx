function Credentials() {
  return (
    <div style={{ padding: '100px 20px 50px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
        Experience & Education
      </h1>
      <p style={{ fontSize: '20px', color: '#666', marginBottom: '40px' }}>
        My background and training
      </p>

      {/* Add your actual credentials here - template below */}

      <div style={{ background: 'white', padding: '40px', borderRadius: '16px', marginBottom: '40px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '30px' }}>Certifications & Training</h2>
        
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px' }}>
            Anatomy Trains Structural Integration
          </h3>
          <p style={{ color: '#999', marginBottom: '10px' }}>Year • Location</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Completed comprehensive training in Tom Myers' Anatomy Trains approach to structural integration.
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '24px', color: '#06b6d4', marginBottom: '5px' }}>
            [Add Your Certifications]
          </h3>
          <p style={{ color: '#999', marginBottom: '10px' }}>Year • Institution</p>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            Description of training and what you learned.
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
    </div>
  );
}

export default Credentials;