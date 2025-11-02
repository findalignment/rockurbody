import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
const ComboPrograms = lazy(() => import('./pages/ComboPrograms'));
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
const PhoneReshapingSkeleton = lazy(() => import('./pages/blog/PhoneReshapingSkeleton'));

// SEO Pages
const SantaCruzStructuralIntegration = lazy(() => import('./pages/SantaCruzStructuralIntegration'));
const ChronicPainRelief = lazy(() => import('./pages/ChronicPainRelief'));
const RolfingVsMassage = lazy(() => import('./pages/RolfingVsMassage'));
const Surfers = lazy(() => import('./pages/Surfers'));
const BackPainSantaCruz = lazy(() => import('./pages/BackPainSantaCruz'));
const PostureCorrection = lazy(() => import('./pages/PostureCorrection'));
const InjuryRecovery = lazy(() => import('./pages/InjuryRecovery'));
const CyclistsRunners = lazy(() => import('./pages/CyclistsRunners'));
const DeskWorkerWellness = lazy(() => import('./pages/DeskWorkerWellness'));
const ActiveAging = lazy(() => import('./pages/ActiveAging'));
const Climbers = lazy(() => import('./pages/Climbers'));
const HipPainTreatment = lazy(() => import('./pages/HipPainTreatment'));
const StructuralIntegrationVsChiropractic = lazy(() => import('./pages/StructuralIntegrationVsChiropractic'));
const PersonalTrainerSantaCruz = lazy(() => import('./pages/PersonalTrainerSantaCruz'));
const ShoulderPainRelief = lazy(() => import('./pages/ShoulderPainRelief'));
const NeckPainRelief = lazy(() => import('./pages/NeckPainRelief'));
const AthleticPerformance = lazy(() => import('./pages/AthleticPerformance'));
const FascialRelease = lazy(() => import('./pages/FascialRelease'));
const TMJRelief = lazy(() => import('./pages/TMJRelief'));
const SciaticaRelief = lazy(() => import('./pages/SciaticaRelief'));
const KneePainTreatment = lazy(() => import('./pages/KneePainTreatment'));
const MovementScreening = lazy(() => import('./pages/MovementScreening'));
const PregnancyPostpartum = lazy(() => import('./pages/PregnancyPostpartum'));
const SportsInjuryPrevention = lazy(() => import('./pages/SportsInjuryPrevention'));
const PlantarFasciitis = lazy(() => import('./pages/PlantarFasciitis'));
const MobilityTraining = lazy(() => import('./pages/MobilityTraining'));
const WhiplashRecovery = lazy(() => import('./pages/WhiplashRecovery'));
const BreathingCore = lazy(() => import('./pages/BreathingCore'));
const ScoliosisTreatment = lazy(() => import('./pages/ScoliosisTreatment'));
const BalanceTraining = lazy(() => import('./pages/BalanceTraining'));
const GolfPerformance = lazy(() => import('./pages/GolfPerformance'));
const FrozenShoulder = lazy(() => import('./pages/FrozenShoulder'));
const HeadacheMigraineRelief = lazy(() => import('./pages/HeadacheMigraineRelief'));
const ITBandSyndrome = lazy(() => import('./pages/ITBandSyndrome'));
const StressAnxietyRelief = lazy(() => import('./pages/StressAnxietyRelief'));
const RotatorCuffInjury = lazy(() => import('./pages/RotatorCuffInjury'));
const AchillesTendonitis = lazy(() => import('./pages/AchillesTendonitis'));
const BunionFootPain = lazy(() => import('./pages/BunionFootPain'));
const CoreStrengthening = lazy(() => import('./pages/CoreStrengthening'));
const ThoracicOutletSyndrome = lazy(() => import('./pages/ThoracicOutletSyndrome'));
const PersonalTrainingPosture = lazy(() => import('./pages/PersonalTrainingPosture'));

// Certification pages
const AnatomyTrainsSI = lazy(() => import('./pages/certifications/AnatomyTrainsSI'));
const AnatomyTrainsTeacher = lazy(() => import('./pages/certifications/AnatomyTrainsTeacher'));
const NASMPersonalTrainer = lazy(() => import('./pages/certifications/NASMPersonalTrainer'));
const NASMCorrectiveExercise = lazy(() => import('./pages/certifications/NASMCorrectiveExercise'));
const ACEHealthCoach = lazy(() => import('./pages/certifications/ACEHealthCoach'));
const ACECorrectiveExercise = lazy(() => import('./pages/certifications/ACECorrectiveExercise'));
const MedFitParkinsons = lazy(() => import('./pages/certifications/MedFitParkinsons'));
const MedFitRecovery = lazy(() => import('./pages/certifications/MedFitRecovery'));
const PrecisionNutrition = lazy(() => import('./pages/certifications/PrecisionNutrition'));
const MovNat = lazy(() => import('./pages/certifications/MovNat'));

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
        <Route path="/combo-programs" element={<ComboPrograms />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/training-lineage" element={<TrainingLineage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        
        {/* SEO Pages */}
        <Route path="/santa-cruz-structural-integration" element={<SantaCruzStructuralIntegration />} />
        <Route path="/chronic-pain-relief" element={<ChronicPainRelief />} />
        <Route path="/rolfing-vs-massage" element={<RolfingVsMassage />} />
        <Route path="/surfers" element={<Surfers />} />
        <Route path="/back-pain-santa-cruz" element={<BackPainSantaCruz />} />
        <Route path="/posture-correction" element={<PostureCorrection />} />
        <Route path="/injury-recovery" element={<InjuryRecovery />} />
        <Route path="/cyclists-and-runners" element={<CyclistsRunners />} />
        <Route path="/desk-worker-wellness" element={<DeskWorkerWellness />} />
        <Route path="/active-aging" element={<ActiveAging />} />
        <Route path="/climbers" element={<Climbers />} />
        <Route path="/hip-pain-treatment" element={<HipPainTreatment />} />
        <Route path="/structural-integration-vs-chiropractic" element={<StructuralIntegrationVsChiropractic />} />
        <Route path="/personal-trainer-santa-cruz" element={<PersonalTrainerSantaCruz />} />
        <Route path="/shoulder-pain-relief" element={<ShoulderPainRelief />} />
        <Route path="/neck-pain-relief" element={<NeckPainRelief />} />
        <Route path="/athletic-performance" element={<AthleticPerformance />} />
        <Route path="/fascial-release" element={<FascialRelease />} />
        <Route path="/tmj-relief" element={<TMJRelief />} />
        <Route path="/sciatica-relief" element={<SciaticaRelief />} />
        <Route path="/knee-pain-treatment" element={<KneePainTreatment />} />
        <Route path="/movement-screening" element={<MovementScreening />} />
        <Route path="/pregnancy-postpartum" element={<PregnancyPostpartum />} />
        <Route path="/sports-injury-prevention" element={<SportsInjuryPrevention />} />
        <Route path="/plantar-fasciitis" element={<PlantarFasciitis />} />
        <Route path="/mobility-training" element={<MobilityTraining />} />
        <Route path="/whiplash-recovery" element={<WhiplashRecovery />} />
        <Route path="/breathing-and-core" element={<BreathingCore />} />
        <Route path="/scoliosis-treatment" element={<ScoliosisTreatment />} />
        <Route path="/balance-training" element={<BalanceTraining />} />
        <Route path="/golf-performance" element={<GolfPerformance />} />
        <Route path="/frozen-shoulder" element={<FrozenShoulder />} />
        <Route path="/headache-migraine-relief" element={<HeadacheMigraineRelief />} />
        <Route path="/it-band-syndrome" element={<ITBandSyndrome />} />
        <Route path="/stress-anxiety-relief" element={<StressAnxietyRelief />} />
        <Route path="/rotator-cuff-injury" element={<RotatorCuffInjury />} />
        <Route path="/achilles-tendonitis" element={<AchillesTendonitis />} />
        <Route path="/bunion-foot-pain" element={<BunionFootPain />} />
        <Route path="/core-strengthening" element={<CoreStrengthening />} />
        <Route path="/thoracic-outlet-syndrome" element={<ThoracicOutletSyndrome />} />
        <Route path="/personal-training-posture" element={<PersonalTrainingPosture />} />
        
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
        
        {/* Blog Routes - Not in navigation menu */}
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/integrating-structure-and-movement" element={<IntegratingStructureAndMovement />} />
        <Route path="/blog/phone-reshaping-skeleton" element={<PhoneReshapingSkeleton />} />
        
        {/* Certification Pages - Not in navigation menu */}
        <Route path="/certifications/anatomy-trains-structural-integration" element={<AnatomyTrainsSI />} />
        <Route path="/certifications/anatomy-trains-teacher" element={<AnatomyTrainsTeacher />} />
        <Route path="/certifications/nasm-personal-trainer" element={<NASMPersonalTrainer />} />
        <Route path="/certifications/nasm-corrective-exercise" element={<NASMCorrectiveExercise />} />
        <Route path="/certifications/ace-health-coach" element={<ACEHealthCoach />} />
        <Route path="/certifications/ace-corrective-exercise" element={<ACECorrectiveExercise />} />
        <Route path="/certifications/medfit-parkinsons" element={<MedFitParkinsons />} />
        <Route path="/certifications/medfit-recovery" element={<MedFitRecovery />} />
        <Route path="/certifications/precision-nutrition" element={<PrecisionNutrition />} />
        <Route path="/certifications/movnat" element={<MovNat />} />
        </Routes>
      </Suspense>
    </PageTransition>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;