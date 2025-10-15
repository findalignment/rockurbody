// Critical CSS for above-the-fold content
// This ensures the most important styles load immediately

const CriticalCSS = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Critical styles for immediate rendering */
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Header critical styles */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: rgba(30, 41, 59, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        /* Hero section critical styles */
        .hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1e3a8a 0%, #312e81 50%, #1e293b 100%);
        }
        
        /* Loading spinner */
        .loading-spinner {
          display: inline-block;
          width: 3rem;
          height: 3rem;
          border: 0.25rem solid rgba(6, 182, 212, 0.2);
          border-top: 0.25rem solid #06b6d4;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* Prevent layout shift */
        .hero-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
        }
        
        /* Chat interface critical styles */
        .chat-container {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 20rem;
          max-height: 24rem;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          z-index: 40;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .chat-container {
            width: calc(100vw - 2rem);
            right: 1rem;
            left: 1rem;
          }
        }
      `
    }} />
  );
};

export default CriticalCSS;
