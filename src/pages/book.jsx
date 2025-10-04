function Book() {
  return (
    <div style={{ padding: '50px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px', textAlign: 'center' }}>
        Book Your Session
      </h1>
      <p style={{ fontSize: '18px', textAlign: 'center', marginBottom: '40px' }}>
        60-minute movement coaching session
      </p>
      
      <iframe
        src="https://cal.com/rockyourbody"
        style={{
          width: '100%',
          height: '800px',
          border: 'none',
          borderRadius: '8px'
        }}
        title="Book a session"
      />
    </div>
  );
}

export default Book;