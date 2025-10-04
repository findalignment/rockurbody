function BookMove60() {
  return (
    <div style={{ padding: '50px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '10px', textAlign: 'center' }}>
        60-Minute Movement Session
      </h1>
      <p style={{ fontSize: '18px', textAlign: 'center', marginBottom: '40px', color: '#666' }}>
        Full session to work on movement patterns and build better habits
      </p>
      
      <iframe
        src="https://cal.com/rockyourbody/move60"
        style={{
          width: '100%',
          height: '800px',
          border: 'none',
          borderRadius: '8px'
        }}
        title="Book 60-minute movement session"
      />
    </div>
  );
}

export default BookMove60;