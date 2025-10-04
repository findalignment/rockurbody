function BookMove120() {
  return (
    <div style={{ padding: '50px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '10px', textAlign: 'center' }}>
        2-Hour Movement Session
      </h1>
      <p style={{ fontSize: '18px', textAlign: 'center', marginBottom: '40px', color: '#666' }}>
        Deep dive into movement patterns with extensive coaching time
      </p>
      
      <iframe
        src="https://cal.com/rockyourbody/move120"
        style={{
          width: '100%',
          height: '800px',
          border: 'none',
          borderRadius: '8px'
        }}
        title="Book 2-hour movement session"
      />
    </div>
  );
}

export default BookMove120;