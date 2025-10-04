function BookMove30() {
  return (
    <div style={{ padding: '50px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '10px', textAlign: 'center' }}>
        30-Minute Movement Session
      </h1>
      <p style={{ fontSize: '18px', textAlign: 'center', marginBottom: '40px', color: '#666' }}>
        Quick, focused work on specific movement challenges
      </p>
      
      <iframe
        src="https://cal.com/rockyourbody/move30"
        style={{
          width: '100%',
          height: '800px',
          border: 'none',
          borderRadius: '8px'
        }}
        title="Book 30-minute movement session"
      />
    </div>
  );
}

export default BookMove30;