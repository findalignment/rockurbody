import { useEffect, Suspense, lazy, Component } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PageTransition from './components/PageTransition';
import RoutePrefetcher from './components/RoutePrefetcher';
import { trackPageView } from './utils/analytics';

// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Route Error:', error, errorInfo);
    // Log to error tracking service if available
  }

  componentDidUpdate(prevProps) {
    // Reset error state when location changes
    if (prevProps.location?.pathname !== this.props.location?.pathname) {
      this.setState({ hasError: false, error: null });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white p-6">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold text-neutralDark mb-4">Something went wrong</h1>
            <p className="text-neutralDark/80 mb-6">
              There was an error loading this page. Please try refreshing.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Lazy load all pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const Packages = lazy(() => import('./pages/Packages'));
const TwelveSeries = lazy(() => import('./pages/12-Series'));
const HipSeries = lazy(() => import('./pages/Hip-Series'));

// Program Detail Pages
const ProgramTwelveSeries = lazy(() => import('./pages/programs/TwelveSeries'));
const ProgramTheReset = lazy(() => import('./pages/programs/TheReset'));
const ProgramHipSeries = lazy(() => import('./pages/programs/HipSeries'));
const ProgramMovement5 = lazy(() => import('./pages/programs/Movement5Sessions'));
const ProgramMovement10 = lazy(() => import('./pages/programs/Movement10Sessions'));
const ProgramMovement20 = lazy(() => import('./pages/programs/Movement20Sessions'));
const ProgramHipFreedomBasic = lazy(() => import('./pages/programs/HipFreedomBasic'));
const ProgramHipFreedomExtended = lazy(() => import('./pages/programs/HipFreedomExtended'));
const ProgramFullRepatterningBasic = lazy(() => import('./pages/programs/FullRepatterningBasic'));
const ProgramFullRepatterningPremium = lazy(() => import('./pages/programs/FullRepatterningPremium'));
const ProgramFullRepatterningUltimate = lazy(() => import('./pages/programs/FullRepatterningUltimate'));
const Approach = lazy(() => import('./pages/Approach'));
const Process = lazy(() => import('./pages/Process'));
const SmartStarts = lazy(() => import('./pages/SmartStarts'));
const WhatIsStructuralIntegration = lazy(() => import('./pages/WhatIsStructuralIntegration'));
const WhatIsMovementEducation = lazy(() => import('./pages/WhatIsMovementEducation'));
const ComboPrograms = lazy(() => import('./pages/ComboPrograms'));
const Credentials = lazy(() => import('./pages/Credentials'));
const TrainingLineage = lazy(() => import('./pages/TrainingLineage'));
const FAQ = lazy(() => import('./pages/FAQ'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const BodySystemsCheck = lazy(() => import('./pages/BodySystemsCheck'));
const SoftwareUpgradePlan = lazy(() => import('./pages/SoftwareUpgradePlan'));
const PerformanceLongevityCoaching = lazy(() => import('./pages/PerformanceLongevityCoaching'));
const BodyAlignmentScorePage = lazy(() => import('./pages/BodyAlignmentScore'));
const OffersComparison = lazy(() => import('./pages/OffersComparison'));
const BodyOperatingSystemChecklist = lazy(() => import('./pages/BodyOperatingSystemChecklist'));
const UpgradeYourBodySoftware = lazy(() => import('./pages/UpgradeYourBodySoftware'));
const MovementCoachingSantaCruz = lazy(() => import('./pages/MovementCoachingSantaCruz'));
const AlignmentBasedStrengthTraining = lazy(() => import('./pages/AlignmentBasedStrengthTraining'));
const TrainForLongevity = lazy(() => import('./pages/TrainForLongevity'));
const WhyIFeelTightAllTheTime = lazy(() => import('./pages/WhyIFeelTightAllTheTime'));
const StrongButStillInPain = lazy(() => import('./pages/StrongButStillInPain'));
const WhyStretchingDoesntFixIt = lazy(() => import('./pages/WhyStretchingDoesntFixIt'));
const WhyMyBackKeepsGoingOut = lazy(() => import('./pages/WhyMyBackKeepsGoingOut'));
const HipPainFromSitting = lazy(() => import('./pages/HipPainFromSitting'));
const NeckShoulderTensionFromDeskWork = lazy(() => import('./pages/NeckShoulderTensionFromDeskWork'));
const KneePainWhenSquatting = lazy(() => import('./pages/KneePainWhenSquatting'));
const PlantarFasciitisAndLoadingPatterns = lazy(() => import('./pages/PlantarFasciitisAndLoadingPatterns'));
const RunnerTightHipsAndCompensation = lazy(() => import('./pages/RunnerTightHipsAndCompensation'));
const GymInjuriesFromBadMechanics = lazy(() => import('./pages/GymInjuriesFromBadMechanics'));
const WhatAreCompensationPatterns = lazy(() => import('./pages/WhatAreCompensationPatterns'));
const MobilityVsStabilityVsControl = lazy(() => import('./pages/MobilityVsStabilityVsControl'));
const BreathingAndPostureConnection = lazy(() => import('./pages/BreathingAndPostureConnection'));
const WhatIsAlignmentInTheBody = lazy(() => import('./pages/WhatIsAlignmentInTheBody'));
const WhyCoreWorkDoesntFixBackPain = lazy(() => import('./pages/WhyCoreWorkDoesntFixBackPain'));
const StrengthWithoutWearAndTear = lazy(() => import('./pages/StrengthWithoutWearAndTear'));
const LoadManagementForLongevity = lazy(() => import('./pages/LoadManagementForLongevity'));
const PersonalTrainerSantaCruzForLongevity = lazy(() => import('./pages/PersonalTrainerSantaCruzForLongevity'));
const PrivatePersonalTrainingSantaCruz = lazy(() => import('./pages/PrivatePersonalTrainingSantaCruz'));
const MovementAssessmentSantaCruz = lazy(() => import('./pages/MovementAssessmentSantaCruz'));
const PostureCoachingSantaCruz = lazy(() => import('./pages/PostureCoachingSantaCruz'));
const PainAwareTrainingSantaCruz = lazy(() => import('./pages/PainAwareTrainingSantaCruz'));
const TrainingForBusyProfessionals = lazy(() => import('./pages/TrainingForBusyProfessionals'));
const TrainingFor40sAnd50s = lazy(() => import('./pages/TrainingFor40sAnd50s'));
const TrainingAfterInjuryReturnToStrength = lazy(() => import('./pages/TrainingAfterInjuryReturnToStrength'));
const TrainingForSurfersSantaCruz = lazy(() => import('./pages/TrainingForSurfersSantaCruz'));
const TrainingForHikersAndTrailRunners = lazy(() => import('./pages/TrainingForHikersAndTrailRunners'));
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
const ScheduleHipFreedomBasic = lazy(() => import('./pages/ScheduleHipFreedomBasic'));
const ScheduleHipFreedomExtended = lazy(() => import('./pages/ScheduleHipFreedomExtended'));
const ScheduleFullRepatterning = lazy(() => import('./pages/ScheduleFullRepatterning'));
const ScheduleFullRepatterningBasic = lazy(() => import('./pages/ScheduleFullRepatterningBasic'));
const ScheduleFullRepatterningPremium = lazy(() => import('./pages/ScheduleFullRepatterningPremium'));
const ScheduleFullRepatterningUltimate = lazy(() => import('./pages/ScheduleFullRepatterningUltimate'));
const ScheduleCombo = lazy(() => import('./pages/ScheduleCombo'));
const BlogIndex = lazy(() => import('./pages/blog/BlogIndex'));
const IntegratingStructureAndMovement = lazy(() => import('./pages/blog/IntegratingStructureAndMovement'));
const PhoneReshapingSkeleton = lazy(() => import('./pages/blog/PhoneReshapingSkeleton'));
const TechChangesPosture = lazy(() => import('./pages/blog/TechChangesPosture'));
const DiscomfortBecomesNormal = lazy(() => import('./pages/blog/DiscomfortBecomesNormal'));
const Top5PersonalTrainersSantaCruz = lazy(() => import('./pages/blog/Top5PersonalTrainersSantaCruz'));
const PersonalTrainingVsGroupClassesSantaCruz = lazy(() => import('./pages/blog/PersonalTrainingVsGroupClassesSantaCruz'));
const HowToChoosePersonalTrainerSantaCruz = lazy(() => import('./pages/blog/HowToChoosePersonalTrainerSantaCruz'));
const BestOutdoorTrainingSpotsSantaCruz = lazy(() => import('./pages/blog/BestOutdoorTrainingSpotsSantaCruz'));
const SantaCruzPersonalTrainingPrices2025 = lazy(() => import('./pages/blog/SantaCruzPersonalTrainingPrices2025'));

// Hub Pages (Pillar Pages)
const PainReliefHub = lazy(() => import('./pages/PainReliefHub'));
const MovementTrainingHub = lazy(() => import('./pages/MovementTrainingHub'));
const StructuralIntegrationHub = lazy(() => import('./pages/StructuralIntegrationHub'));
const SportsPerformanceHub = lazy(() => import('./pages/SportsPerformanceHub'));
const InjuryRecoveryHub = lazy(() => import('./pages/InjuryRecoveryHub'));
const WellnessHub = lazy(() => import('./pages/WellnessHub'));

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
const BodyAlignment = lazy(() => import('./pages/BodyAlignment'));
const CoreStrengthening = lazy(() => import('./pages/CoreStrengthening'));
const ThoracicOutletSyndrome = lazy(() => import('./pages/ThoracicOutletSyndrome'));
const PersonalTrainingPosture = lazy(() => import('./pages/PersonalTrainingPosture'));
const GravityAndStructuralIntegration = lazy(() => import('./pages/GravityAndStructuralIntegration'));
const ExerciseForLife = lazy(() => import('./pages/ExerciseForLife'));
const SafeGymTraining = lazy(() => import('./pages/SafeGymTraining'));
const DailyMobility = lazy(() => import('./pages/DailyMobility'));

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

// Location pages - Mobile training service areas
const Capitola = lazy(() => import('./pages/locations/Capitola'));
const Aptos = lazy(() => import('./pages/locations/Aptos'));
const Watsonville = lazy(() => import('./pages/locations/Watsonville'));
const ScottsValley = lazy(() => import('./pages/locations/ScottsValley'));
const Soquel = lazy(() => import('./pages/locations/Soquel'));
const LiveOak = lazy(() => import('./pages/locations/LiveOak'));
const Felton = lazy(() => import('./pages/locations/Felton'));
const BoulderCreek = lazy(() => import('./pages/locations/BoulderCreek'));
const Monterey = lazy(() => import('./pages/locations/Monterey'));
const Carmel = lazy(() => import('./pages/locations/Carmel'));
const PacificGrove = lazy(() => import('./pages/locations/PacificGrove'));
const Seaside = lazy(() => import('./pages/locations/Seaside'));
const Marina = lazy(() => import('./pages/locations/Marina'));
const Salinas = lazy(() => import('./pages/locations/Salinas'));
const CarmelValley = lazy(() => import('./pages/locations/CarmelValley'));
const SanJose = lazy(() => import('./pages/locations/SanJose'));
const LosGatos = lazy(() => import('./pages/locations/LosGatos'));
const Saratoga = lazy(() => import('./pages/locations/Saratoga'));
const Campbell = lazy(() => import('./pages/locations/Campbell'));
const LosAltos = lazy(() => import('./pages/locations/LosAltos'));
const MountainView = lazy(() => import('./pages/locations/MountainView'));
const PaloAlto = lazy(() => import('./pages/locations/PaloAlto'));
const Sunnyvale = lazy(() => import('./pages/locations/Sunnyvale'));
const SantaClara = lazy(() => import('./pages/locations/SantaClara'));
const Cupertino = lazy(() => import('./pages/locations/Cupertino'));
const Milpitas = lazy(() => import('./pages/locations/Milpitas'));
const MorganHill = lazy(() => import('./pages/locations/MorganHill'));
const RedwoodCity = lazy(() => import('./pages/locations/RedwoodCity'));
const SanMateo = lazy(() => import('./pages/locations/SanMateo'));
const Burlingame = lazy(() => import('./pages/locations/Burlingame'));
const SanCarlos = lazy(() => import('./pages/locations/SanCarlos'));
const Belmont = lazy(() => import('./pages/locations/Belmont'));
const FosterCity = lazy(() => import('./pages/locations/FosterCity'));
const HalfMoonBay = lazy(() => import('./pages/locations/HalfMoonBay'));
const Pacifica = lazy(() => import('./pages/locations/Pacifica'));
const SanFrancisco = lazy(() => import('./pages/locations/SanFrancisco'));

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

  // Track page views with Google Analytics
  useEffect(() => {
    trackPageView(location.pathname + location.search, document.title);
  }, [location.pathname, location.search]);

  // Catch unhandled promise rejections (like lazy loading errors)
  useEffect(() => {
    const handleUnhandledRejection = (event) => {
      console.error('Unhandled Promise Rejection:', event.reason);
      // Prevent default browser error handling
      event.preventDefault();
      // You could show a user-friendly error message here
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);
  
  return (
    <PageTransition key={location.pathname}>
      <RoutePrefetcher />
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary location={location}>
          <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/12-series" element={<TwelveSeries />} />
        <Route path="/hip-series" element={<HipSeries />} />
        
        {/* Hub Pages (Pillar Pages) */}
        <Route path="/pain-relief" element={<PainReliefHub />} />
        <Route path="/movement-training" element={<MovementTrainingHub />} />
        <Route path="/structural-integration" element={<StructuralIntegrationHub />} />
        <Route path="/sports-performance" element={<SportsPerformanceHub />} />
        <Route path="/injury-recovery" element={<InjuryRecoveryHub />} />
        <Route path="/wellness" element={<WellnessHub />} />
        
        {/* Program Detail Pages */}
        <Route path="/programs/12-series" element={<ProgramTwelveSeries />} />
        <Route path="/programs/the-reset" element={<ProgramTheReset />} />
        <Route path="/programs/hip-series" element={<ProgramHipSeries />} />
        <Route path="/programs/movement-5-sessions" element={<ProgramMovement5 />} />
        <Route path="/programs/movement-10-sessions" element={<ProgramMovement10 />} />
        <Route path="/programs/movement-20-sessions" element={<ProgramMovement20 />} />
        <Route path="/programs/hip-freedom-basic" element={<ProgramHipFreedomBasic />} />
        <Route path="/programs/hip-freedom-extended" element={<ProgramHipFreedomExtended />} />
        <Route path="/programs/full-repatterning-basic" element={<ProgramFullRepatterningBasic />} />
        <Route path="/programs/full-repatterning-premium" element={<ProgramFullRepatterningPremium />} />
        <Route path="/programs/full-repatterning-ultimate" element={<ProgramFullRepatterningUltimate />} />
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
        
        {/* New Service Pages */}
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/body-systems-check" element={<BodySystemsCheck />} />
        <Route path="/software-upgrade-plan" element={<SoftwareUpgradePlan />} />
        <Route path="/performance-longevity-coaching" element={<PerformanceLongevityCoaching />} />
        <Route path="/offers-comparison" element={<OffersComparison />} />
        <Route path="/body-operating-system-checklist" element={<BodyOperatingSystemChecklist />} />
        <Route path="/body-alignment-score" element={<BodyAlignmentScorePage />} />
        
        {/* Core Pillar Pages */}
        <Route path="/upgrade-your-body-software" element={<UpgradeYourBodySoftware />} />
        <Route path="/movement-coaching-santa-cruz" element={<MovementCoachingSantaCruz />} />
        <Route path="/alignment-based-strength-training" element={<AlignmentBasedStrengthTraining />} />
        <Route path="/train-for-longevity" element={<TrainForLongevity />} />
        
        {/* Problem Pages */}
        <Route path="/why-i-feel-tight-all-the-time" element={<WhyIFeelTightAllTheTime />} />
        <Route path="/strong-but-still-in-pain" element={<StrongButStillInPain />} />
        <Route path="/why-stretching-doesnt-fix-it" element={<WhyStretchingDoesntFixIt />} />
        <Route path="/why-my-back-keeps-going-out" element={<WhyMyBackKeepsGoingOut />} />
        <Route path="/hip-pain-from-sitting" element={<HipPainFromSitting />} />
        <Route path="/neck-shoulder-tension-from-desk-work" element={<NeckShoulderTensionFromDeskWork />} />
        <Route path="/knee-pain-when-squatting" element={<KneePainWhenSquatting />} />
        <Route path="/plantar-fasciitis-and-loading-patterns" element={<PlantarFasciitisAndLoadingPatterns />} />
        <Route path="/runner-tight-hips-and-compensation" element={<RunnerTightHipsAndCompensation />} />
        <Route path="/gym-injuries-from-bad-mechanics" element={<GymInjuriesFromBadMechanics />} />
        
        {/* Mechanism Pages */}
        <Route path="/what-are-compensation-patterns" element={<WhatAreCompensationPatterns />} />
        <Route path="/mobility-vs-stability-vs-control" element={<MobilityVsStabilityVsControl />} />
        <Route path="/breathing-and-posture-connection" element={<BreathingAndPostureConnection />} />
        <Route path="/what-is-alignment-in-the-body" element={<WhatIsAlignmentInTheBody />} />
        <Route path="/why-core-work-doesnt-fix-back-pain" element={<WhyCoreWorkDoesntFixBackPain />} />
        <Route path="/strength-without-wear-and-tear" element={<StrengthWithoutWearAndTear />} />
        <Route path="/load-management-for-longevity" element={<LoadManagementForLongevity />} />
        
        {/* Local Pages */}
        <Route path="/personal-trainer-santa-cruz-for-longevity" element={<PersonalTrainerSantaCruzForLongevity />} />
        <Route path="/private-personal-training-santa-cruz" element={<PrivatePersonalTrainingSantaCruz />} />
        <Route path="/movement-assessment-santa-cruz" element={<MovementAssessmentSantaCruz />} />
        <Route path="/posture-coaching-santa-cruz" element={<PostureCoachingSantaCruz />} />
        <Route path="/pain-aware-training-santa-cruz" element={<PainAwareTrainingSantaCruz />} />
        
        {/* Audience Pages */}
        <Route path="/training-for-busy-professionals" element={<TrainingForBusyProfessionals />} />
        <Route path="/training-for-40s-and-50s" element={<TrainingFor40sAnd50s />} />
        <Route path="/training-after-injury-return-to-strength" element={<TrainingAfterInjuryReturnToStrength />} />
        <Route path="/training-for-surfers-santa-cruz" element={<TrainingForSurfersSantaCruz />} />
        <Route path="/training-for-hikers-and-trail-runners" element={<TrainingForHikersAndTrailRunners />} />
        
        {/* SEO Pages */}
        <Route path="/santa-cruz-structural-integration" element={<SantaCruzStructuralIntegration />} />
        <Route path="/chronic-pain-relief" element={<ChronicPainRelief />} />
        <Route path="/rolfing-vs-massage" element={<RolfingVsMassage />} />
        <Route path="/surfers" element={<Surfers />} />
        <Route path="/back-pain-santa-cruz" element={<BackPainSantaCruz />} />
        <Route path="/posture-correction" element={<PostureCorrection />} />
        <Route path="/body-alignment" element={<BodyAlignment />} />
        <Route path="/services/injury-recovery" element={<InjuryRecovery />} />
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
        <Route path="/gravity-and-structural-integration" element={<GravityAndStructuralIntegration />} />
        <Route path="/exercise-for-life" element={<ExerciseForLife />} />
        <Route path="/safe-gym-training" element={<SafeGymTraining />} />
        <Route path="/5-minute-mobility" element={<DailyMobility />} />
        
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
        <Route path="/schedule/hip-freedom-basic" element={<ScheduleHipFreedomBasic />} />
        <Route path="/schedule/hip-freedom-extended" element={<ScheduleHipFreedomExtended />} />
        <Route path="/schedule/full-repatterning" element={<ScheduleFullRepatterning />} />
        <Route path="/schedule/full-repatterning-basic" element={<ScheduleFullRepatterningBasic />} />
        <Route path="/schedule/full-repatterning-premium" element={<ScheduleFullRepatterningPremium />} />
        <Route path="/schedule/full-repatterning-ultimate" element={<ScheduleFullRepatterningUltimate />} />
        <Route path="/schedule/combo" element={<ScheduleCombo />} />
        
        {/* Blog Routes - Not in navigation menu */}
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/integrating-structure-and-movement" element={<IntegratingStructureAndMovement />} />
        <Route path="/blog/phone-reshaping-skeleton" element={<PhoneReshapingSkeleton />} />
        <Route path="/blog/tech-changes-posture" element={<TechChangesPosture />} />
        <Route path="/blog/discomfort-becomes-normal" element={<DiscomfortBecomesNormal />} />
        <Route path="/blog/top-5-personal-trainers-santa-cruz" element={<Top5PersonalTrainersSantaCruz />} />
        <Route path="/blog/personal-training-vs-group-classes-santa-cruz" element={<PersonalTrainingVsGroupClassesSantaCruz />} />
        <Route path="/blog/how-to-choose-personal-trainer-santa-cruz" element={<HowToChoosePersonalTrainerSantaCruz />} />
        <Route path="/blog/best-outdoor-training-spots-santa-cruz" element={<BestOutdoorTrainingSpotsSantaCruz />} />
        <Route path="/blog/santa-cruz-personal-training-prices-2025" element={<SantaCruzPersonalTrainingPrices2025 />} />
        
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
        
        {/* Location Pages - Mobile Training Service Areas */}
        {/* Santa Cruz County */}
        <Route path="/capitola-personal-training" element={<Capitola />} />
        <Route path="/aptos-personal-training" element={<Aptos />} />
        <Route path="/watsonville-personal-training" element={<Watsonville />} />
        <Route path="/scotts-valley-personal-training" element={<ScottsValley />} />
        <Route path="/soquel-personal-training" element={<Soquel />} />
        <Route path="/live-oak-personal-training" element={<LiveOak />} />
        <Route path="/felton-personal-training" element={<Felton />} />
        <Route path="/boulder-creek-personal-training" element={<BoulderCreek />} />
        
        {/* Monterey County */}
        <Route path="/monterey-personal-training" element={<Monterey />} />
        <Route path="/carmel-personal-training" element={<Carmel />} />
        <Route path="/pacific-grove-personal-training" element={<PacificGrove />} />
        <Route path="/seaside-personal-training" element={<Seaside />} />
        <Route path="/marina-personal-training" element={<Marina />} />
        <Route path="/salinas-personal-training" element={<Salinas />} />
        <Route path="/carmel-valley-personal-training" element={<CarmelValley />} />
        
        {/* Santa Clara County */}
        <Route path="/san-jose-personal-training" element={<SanJose />} />
        <Route path="/los-gatos-personal-training" element={<LosGatos />} />
        <Route path="/saratoga-personal-training" element={<Saratoga />} />
        <Route path="/campbell-personal-training" element={<Campbell />} />
        <Route path="/los-altos-personal-training" element={<LosAltos />} />
        <Route path="/mountain-view-personal-training" element={<MountainView />} />
        <Route path="/palo-alto-personal-training" element={<PaloAlto />} />
        <Route path="/sunnyvale-personal-training" element={<Sunnyvale />} />
        <Route path="/santa-clara-personal-training" element={<SantaClara />} />
        <Route path="/cupertino-personal-training" element={<Cupertino />} />
        <Route path="/milpitas-personal-training" element={<Milpitas />} />
        <Route path="/morgan-hill-personal-training" element={<MorganHill />} />
        
        {/* San Mateo County */}
        <Route path="/redwood-city-personal-training" element={<RedwoodCity />} />
        <Route path="/san-mateo-personal-training" element={<SanMateo />} />
        <Route path="/burlingame-personal-training" element={<Burlingame />} />
        <Route path="/san-carlos-personal-training" element={<SanCarlos />} />
        <Route path="/belmont-personal-training" element={<Belmont />} />
        <Route path="/foster-city-personal-training" element={<FosterCity />} />
        <Route path="/half-moon-bay-personal-training" element={<HalfMoonBay />} />
        <Route path="/pacifica-personal-training" element={<Pacifica />} />
        
        {/* San Francisco */}
        <Route path="/san-francisco-personal-training" element={<SanFrancisco />} />
        </Routes>
        </ErrorBoundary>
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