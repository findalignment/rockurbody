import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import TwelveSeries from './pages/12-Series';
import HipSeries from './pages/Hip-Series';
import Approach from './pages/Approach';
import Process from './pages/Process';
import SmartStarts from './pages/SmartStarts';
import WhatIsStructuralIntegration from './pages/WhatIsStructuralIntegration';
import WhatIsMovementEducation from './pages/WhatIsMovementEducation';
import Credentials from './pages/Credentials';
import TrainingLineage from './pages/TrainingLineage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import Book from './pages/Book';
import BookConsult from './pages/BookConsult';
import BookMove30 from './pages/BookMove30';
import BookMove60 from './pages/BookMove60';
import BookMove90 from './pages/BookMove90';
import BookMove120 from './pages/BookMove120';
import BookSI60 from './pages/BookSI60';
import BookSI90 from './pages/BookSI90';
import BookSI120 from './pages/BookSI120';
import BookStructuralIntegration from './pages/BookStructuralIntegration';
import BookMovementEducation from './pages/BookMovementEducation';
import BookComboPrograms from './pages/BookComboPrograms';
import Schedule12Series from './pages/Schedule12Series';
import ScheduleHipSeries from './pages/ScheduleHipSeries';
import ScheduleMovement60 from './pages/ScheduleMovement60';
import ScheduleMovement5Pack from './pages/ScheduleMovement5Pack';
import ScheduleMovement10Pack from './pages/ScheduleMovement10Pack';
import ScheduleMovement20Pack from './pages/ScheduleMovement20Pack';
import ScheduleSingleMove30 from './pages/ScheduleSingleMove30';
import ScheduleSingleMove60 from './pages/ScheduleSingleMove60';
import ScheduleSingleMove90 from './pages/ScheduleSingleMove90';
import ScheduleSingleMove120 from './pages/ScheduleSingleMove120';
import ScheduleSingleSI60 from './pages/ScheduleSingleSI60';
import ScheduleSingleSI90 from './pages/ScheduleSingleSI90';
import ScheduleSingleSI120 from './pages/ScheduleSingleSI120';
import ScheduleTheReset from './pages/ScheduleTheReset';
import ScheduleHipFreedom from './pages/ScheduleHipFreedom';
import ScheduleFullRepatterning from './pages/ScheduleFullRepatterning';
import ScheduleCombo from './pages/ScheduleCombo';
import BlogIndex from './pages/blog/BlogIndex';
import IntegratingStructureAndMovement from './pages/blog/IntegratingStructureAndMovement';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';

function AppRoutes() {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <PageTransition key={location.pathname}>
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
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        
        {/* Booking Routes */}
        <Route path="/book" element={<Book />} />
        <Route path="/book/consult" element={<BookConsult />} />
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