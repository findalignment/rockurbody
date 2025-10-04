import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Book from './pages/Book';
import BookConsult from './pages/BookConsult';
import BookMove30 from './pages/BookMove30';
import BookMove60 from './pages/BookMove60';
import BookMove90 from './pages/BookMove90';
import BookMove120 from './pages/BookMove120';
import BookSI60 from './pages/BookSI60';
import BookSI90 from './pages/BookSI90';
import BookSI120 from './pages/BookSI120';
import Packages from './pages/Packages';
import TwelveSeries from './pages/12-Series';
import HipSeries from './pages/Hip-Series';
import Approach from './pages/Approach';
import Credentials from './pages/Credentials';
import TrainingLineage from './pages/TrainingLineage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="/book" element={<Book />} />
        <Route path="/book/consult" element={<BookConsult />} />
        <Route path="/book/move30" element={<BookMove30 />} />
        <Route path="/book/move60" element={<BookMove60 />} />
        <Route path="/book/move90" element={<BookMove90 />} />
        <Route path="/book/move120" element={<BookMove120 />} />
        <Route path="/book/si60" element={<BookSI60 />} />
        <Route path="/book/si90" element={<BookSI90 />} />
        <Route path="/book/si120" element={<BookSI120 />} />
      </Routes>
    </Router>
  );
}

export default App;