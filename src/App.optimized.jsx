import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// ============================================
// CRITICAL ROUTES - Load immediately
// ============================================
import Home from './pages/Home';

// ============================================
// LAZY LOADED ROUTES - Code splitting
// ============================================

// Main pages
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const Packages = lazy(() => import('./pages/Packages'));

// Info pages
const TwelveSeries = lazy(() => import('./pages/12-Series'));
const HipSeries = lazy(() => import('./pages/Hip-Series'));
const Approach = lazy(() => import('./pages/Approach'));
const Credentials = lazy(() => import('./pages/Credentials'));
const TrainingLineage = lazy(() => import('./pages/TrainingLineage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'));

// Booking pages - grouped for better chunking
const Book = lazy(() => import('./pages/Book'));
const BookConsult = lazy(() => import('./pages/BookConsult'));
const BookMove30 = lazy(() => import('./pages/BookMove30'));
const BookMove60 = lazy(() => import('./pages/BookMove60'));
const BookMove90 = lazy(() => import('./pages/BookMove90'));
const BookMove120 = lazy(() => import('./pages/BookMove120'));
const BookSI60 = lazy(() => import('./pages/BookSI60'));
const BookSI90 = lazy(() => import('./pages/BookSI90'));
const BookSI120 = lazy(() => import('./pages/BookSI120'));

// Blog pages
const BlogIndex = lazy(() => import('./pages/blog/BlogIndex'));
const IntegratingStructureAndMovement = lazy(() => import('./pages/blog/IntegratingStructureAndMovement'));

// Auth pages - grouped for better chunking
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));

// ============================================
// LOADING FALLBACK COMPONENT
// ============================================
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-neutralLight">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent mb-4"></div>
      <p className="text-neutralDark/60">Loading...</p>
    </div>
  </div>
);

// ============================================
// ERROR BOUNDARY FALLBACK
// ============================================
const ErrorFallback = ({ error }) => (
  <div className="min-h-screen flex items-center justify-center bg-neutralLight px-4">
    <div className="max-w-md w-full bg-white rounded-xl p-8 shadow-lg text-center">
      <svg className="w-16 h-16 text-error mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <h2 className="text-2xl font-bold text-neutralDark mb-2">Something went wrong</h2>
      <p className="text-neutralDark/70 mb-4">{error?.message || 'An unexpected error occurred'}</p>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
      >
        Reload Page
      </button>
    </div>
  </div>
);

// ============================================
// MAIN APP COMPONENT
// ============================================
function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Critical route - no lazy loading */}
            <Route path="/" element={<Home />} />
            
            {/* Main pages - lazy loaded */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/12-series" element={<TwelveSeries />} />
            <Route path="/hip-series" element={<HipSeries />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/training-lineage" element={<TrainingLineage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            
            {/* Booking Routes - lazy loaded */}
            <Route path="/book" element={<Book />} />
            <Route path="/book/consult" element={<BookConsult />} />
            <Route path="/book/move30" element={<BookMove30 />} />
            <Route path="/book/move60" element={<BookMove60 />} />
            <Route path="/book/move90" element={<BookMove90 />} />
            <Route path="/book/move120" element={<BookMove120 />} />
            <Route path="/book/si60" element={<BookSI60 />} />
            <Route path="/book/si90" element={<BookSI90 />} />
            <Route path="/book/si120" element={<BookSI120 />} />
            
            {/* Dashboard - lazy loaded */}
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Auth Routes - lazy loaded */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            
            {/* Blog Routes - lazy loaded */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/integrating-structure-and-movement" element={<IntegratingStructureAndMovement />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
