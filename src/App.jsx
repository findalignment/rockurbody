import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PageTransition from './components/PageTransition';
import RoutePrefetcher from './components/RoutePrefetcher';

// Lazy load all pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const Packages = lazy(() => import('./pages/Packages'));
const TwelveSeries = lazy(() => import('./pages/12-Series'));
const HipSeries = lazy(() => import('./pages/Hip-Series'));
const Approach = lazy(() => import('./pages/Approach'));
const Process = lazy(() => import('./pages/Process'));
const SmartStarts = lazy(() => import('./pages/SmartStarts'));
const WhatIsStructuralIntegration = lazy(() => import('./pages/WhatIsStructuralIntegration'));
const WhatIsMovementEducation = lazy(() => import('./pages/WhatIsMovementEducation'));
const Credentials = lazy(() => import('./pages/Credentials'));
const TrainingLineage = lazy(() => import('./pages/TrainingLineage'));
const FAQ = lazy(() => import('./pages/FAQ'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'));
const Book = lazy(() => import('./pages/Book'));
const BookConsult = lazy(() => import('./pages/BookConsult'));
const BookMove30 = lazy(() => import('./pages/BookMove30'));
const BookMove60 = lazy(() => import('./pages/BookMove60'));
const BookMove90 = lazy(() => import('./pages/BookMove90'));
const BookMove120 = lazy(() => import('./pages/BookMove120'));
const BookSI60 = lazy(() => import('./pages/BookSI60'));
const BookSI90 = lazy(() => import('./pages/BookSI90'));
const BookSI120 = lazy(() => import('./pages/BookSI120'));
const BookStructuralIntegration = lazy(() => import('./pages/BookStructuralIntegration'));
const BookMovementEducation = lazy(() => import('./pages/BookMovementEducation'));
const BookComboPrograms = lazy(() => import('./pages/BookComboPrograms'));
const Schedule12Series = lazy(() => import('./pages/Schedule12Series'));
const ScheduleHipSeries = lazy(() => import('./pages/ScheduleHipSeries'));
const ScheduleMovement60 = lazy(() => import('./pages/ScheduleMovement60'));
const ScheduleMovement5Pack = lazy(() => import('./pages/ScheduleMovement5Pack'));
const ScheduleMovement10Pack = lazy(() => import('./pages/ScheduleMovement10Pack'));
const ScheduleMovement20Pack = lazy(() => import('./pages/ScheduleMovement20Pack'));
const ScheduleSingleMove30 = lazy(() => import('./pages/ScheduleSingleMove30'));
const ScheduleSingleMove60 = lazy(() => import('./pages/ScheduleSingleMove60'));
const ScheduleSingleMove90 = lazy(() => import('./pages/ScheduleSingleMove90'));
const ScheduleSingleMove120 = lazy(() => import('./pages/ScheduleSingleMove120'));
const ScheduleSingleSI60 = lazy(() => import('./pages/ScheduleSingleSI60'));
const ScheduleSingleSI90 = lazy(() => import('./pages/ScheduleSingleSI90'));
const ScheduleSingleSI120 = lazy(() => import('./pages/ScheduleSingleSI120'));
const ScheduleTheReset = lazy(() => import('./pages/ScheduleTheReset'));
const ScheduleHipFreedom = lazy(() => import('./pages/ScheduleHipFreedom'));
const ScheduleFullRepatterning = lazy(() => import('./pages/ScheduleFullRepatterning'));
const ScheduleCombo = lazy(() => import('./pages/ScheduleCombo'));
const BlogIndex = lazy(() => import('./pages/blog/BlogIndex'));
const IntegratingStructureAndMovement = lazy(() => import('./pages/blog/IntegratingStructureAndMovement'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-neutralDark">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
  </div>
);

function AppRoutes() {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <PageTransition key={location.pathname}>
      <RoutePrefetcher />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/12-series" element={<TwelveSeries />} />
        <Route path="/hip-series" element={<HipSeries />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/process" element={<Process />} />
        <Route path="/smart-starts" element={<SmartStarts />} />
        <Route path="/what-is-structural-integration" element={<WhatIsStructuralIntegration />} />
        <Route path="/what-is-movement-education" element={<WhatIsMovementEducation />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/training-lineage" element={<TrainingLineage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        
        {/* Booking Routes */}
        <Route path="/book" element={<Book />} />
        <Route path="/consult" element={<BookConsult />} />
        <Route path="/book/move30" element={<BookMove30 />} />
        <Route path="/book/move60" element={<BookMove60 />} />
        <Route path="/book/move90" element={<BookMove90 />} />
        <Route path="/book/move120" element={<BookMove120 />} />
        <Route path="/book/si60" element={<BookSI60 />} />
        <Route path="/book/si90" element={<BookSI90 />} />
        <Route path="/book/si120" element={<BookSI120 />} />
        <Route path="/book/structural-integration" element={<BookStructuralIntegration />} />
        <Route path="/book/movement-education" element={<BookMovementEducation />} />
        <Route path="/book/combo-programs" element={<BookComboPrograms />} />
        
        {/* Scheduling Routes */}
        <Route path="/schedule/12-series" element={<Schedule12Series />} />
        <Route path="/schedule/hip-series" element={<ScheduleHipSeries />} />
        <Route path="/schedule/movement-60" element={<ScheduleMovement60 />} />
        <Route path="/schedule/movement-5" element={<ScheduleMovement5Pack />} />
        <Route path="/schedule/movement-10" element={<ScheduleMovement10Pack />} />
        <Route path="/schedule/movement-20" element={<ScheduleMovement20Pack />} />
        <Route path="/schedule/single-move-30" element={<ScheduleSingleMove30 />} />
        <Route path="/schedule/single-move-60" element={<ScheduleSingleMove60 />} />
        <Route path="/schedule/single-move-90" element={<ScheduleSingleMove90 />} />
        <Route path="/schedule/single-move-120" element={<ScheduleSingleMove120 />} />
        <Route path="/schedule/single-si-60" element={<ScheduleSingleSI60 />} />
        <Route path="/schedule/single-si-90" element={<ScheduleSingleSI90 />} />
        <Route path="/schedule/single-si-120" element={<ScheduleSingleSI120 />} />
        <Route path="/schedule/the-reset" element={<ScheduleTheReset />} />
        <Route path="/schedule/hip-freedom" element={<ScheduleHipFreedom />} />
        <Route path="/schedule/full-repatterning" element={<ScheduleFullRepatterning />} />
        <Route path="/schedule/combo" element={<ScheduleCombo />} />
        
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Auth Routes */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        
        {/* Blog Routes - Not in navigation menu */}
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/integrating-structure-and-movement" element={<IntegratingStructureAndMovement />} />
        </Routes>
      </Suspense>
    </PageTransition>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;