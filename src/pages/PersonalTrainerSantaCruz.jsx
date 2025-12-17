import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function PersonalTrainerSantaCruz() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Movement Training', url: '/movement-training' },
    { name: 'Personal Trainer Santa Cruz', url: '/personal-trainer-santa-cruz' }
  ];

  // LocalBusiness Schema for SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness", "SportsActivityLocation"],
    "name": "RockUrBody - Personal Training Santa Cruz",
    "image": "https://rockurbody.com/logo.png",
    "description": "One-on-one personal training and movement education in Santa Cruz. Functional training focused on how you move, not just exercises. Build strength that serves your life.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Santa Cruz",
      "addressLocality": "Santa Cruz",
      "addressRegion": "CA",
      "postalCode": "95060",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.9741,
      "longitude": -122.0308
    },
    "url": "https://rockurbody.com/personal-trainer-santa-cruz",
    "telephone": "+1-831-419-4422",
    "priceRange": "$$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/RockUrBody",
      "https://www.instagram.com/rockurbody"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Santa Cruz"
      },
      {
        "@type": "City",
        "name": "Capitola"
      },
      {
        "@type": "City",
        "name": "Aptos"
      },
      {
        "@type": "City",
        "name": "Soquel"
      },
      {
        "@type": "City",
        "name": "Scotts Valley"
      }
    ]
  };

  // Combine schemas
  const combinedSchema = [
    getBreadcrumbSchema(breadcrumbs),
    localBusinessSchema
  ];

  return (
    <PageLayout>
      <SEO 
        title="Personal Trainer Santa Cruz | Movement Education & Functional Training"
        description="One-on-one movement training in Santa Cruz focused on how you move, not just exercises. Build strength that serves your life."
        keywords="personal trainer santa cruz, movement coach, functional training santa cruz, movement education, private training santa cruz"
        structuredData={combinedSchema}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Personal Training in Santa Cruz"
        subtitle="Movement that serves your life, not just the gym"
        alt="Personal training and movement coaching focused on functional movement and real-world application in Santa Cruz"
      />


      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              This Isn't Your Average Personal Training
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Most trainers count reps and make you sweat. That's fine if your goal is just to "get a workout." But what if you want something more meaningful?
            </p>
            <ul className="space-y-3 text-lg text-neutralDark/80 mb-6">
              <li>• To move without pain</li>
              <li>• To build strength that translates to real life</li>
              <li>• To prevent injuries, not create them</li>
              <li>• To understand your body, not just follow instructions</li>
              <li>• To move well for decades, not just look good for summer</li>
            </ul>
            <p className="text-xl text-accent font-semibold">
              That's what Movement Education is about.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Movement Education vs. Traditional Personal Training
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-4">
                  Traditional Training
                </h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Focus on exercises and reps</li>
                  <li>• Goal: Build muscle, lose weight</li>
                  <li>• You follow instructions</li>
                  <li>• Work harder, push through pain</li>
                  <li>• Results: Temporary fitness</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-4">
                  Movement Education
                </h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Focus on movement patterns and quality</li>
                  <li>• Goal: Move better, feel better, prevent injury</li>
                  <li>• You understand principles</li>
                  <li>• Work smarter, respect your body</li>
                  <li>• Results: Lasting movement competence</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What We Work On
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Fundamental Movement Patterns
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Squat, hinge, push, pull, carry, rotate.the movements you do every day. We make sure you do them well.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Core Integration & Breathing
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Real core strength isn't about crunches. It's about integrating your breath, pelvic floor, and deep stabilizers for effortless power.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Mobility & Flexibility
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Not just stretching. Active mobility that improves how you move through full ranges of motion with control.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Strength for Life
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Building strength in movement patterns that actually matter.picking things up, reaching overhead, getting up from the floor, carrying groceries.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Balance & Proprioception
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Improving your body's ability to know where it is in space and respond appropriately. Crucial for injury prevention.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Problem-Solving Your Issues
                </h3>
                <p className="text-neutralDark/80 mb-2">
                  Have a specific goal or limitation? We work together to figure out what's getting in the way and address it systematically.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Who This is For
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-neutralDark/80">
              <div>
                <strong className="block mb-2">Active People Who Want to Stay Active</strong>
                Surfers, cyclists, hikers, runners who want to prevent injuries and improve performance
              </div>
              <div>
                <strong className="block mb-2">People Recovering from Injury</strong>
                Ready to return to activity but want to do it intelligently to prevent re-injury
              </div>
              <div>
                <strong className="block mb-2">Desk Workers</strong>
                Need to counteract hours of sitting and rebuild functional movement
              </div>
              <div>
                <strong className="block mb-2">Active Seniors</strong>
                Want to maintain independence, mobility, and quality of life
              </div>
              <div>
                <strong className="block mb-2">People with Chronic Pain</strong>
                Need movement therapy alongside (or instead of) other treatments
              </div>
              <div>
                <strong className="block mb-2">Athletes</strong>
                Want to optimize movement efficiency and performance
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              How It Works
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  First Session: Assessment & Education
                </h3>
                <p className="text-neutralDark/80">
                  We'll discuss your goals, history, and current limitations. I'll assess how you move and identify what's getting in the way. You'll leave with clarity about your body and a plan forward.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Ongoing Sessions: Progressive Training
                </h3>
                <p className="text-neutralDark/80">
                  Each session builds on the last. We work on your specific needs.not a cookie-cutter program. You'll learn principles you can apply yourself, making you less dependent on me over time.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Session Options
                </h3>
                <ul className="space-y-1 text-neutralDark/80 ml-6">
                  <li>• 30-minute sessions (focused work on one issue)</li>
                  <li>• 60-minute sessions (comprehensive training)</li>
                  <li>• 90-minute sessions (deep dive with bodywork integration)</li>
                  <li>• Package deals available (5, 10, or 20 sessions)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-accent/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Why Choose a Santa Cruz Personal Trainer?
            </h2>
            <div className="space-y-6 text-lg text-neutralDark/80">
              <div className="flex items-start gap-4">
                <div className="text-accent text-2xl mt-1">🌊</div>
                <div>
                  <strong className="text-primary block mb-2">Understanding the Active Santa Cruz Lifestyle</strong>
                  <p>Santa Cruz isn't just another beach town. It's a hub for surfers, mountain bikers, trail runners, rock climbers, and outdoor enthusiasts. A local personal trainer understands the unique demands of this lifestyle, how surfing at Steamer Lane requires different shoulder mobility than desk work, or how trail running in Nisene Marks tests your ankles and balance differently than road running.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-accent text-2xl mt-1">🏔️</div>
                <div>
                  <strong className="text-primary block mb-2">Local Knowledge of Training Locations</strong>
                  <p>Know where to train beyond four walls. From West Cliff Drive for mobility work with ocean views, to DeLaveaga Park for hill training, to the quiet beaches perfect for movement practice. A Santa Cruz-based trainer can take sessions outdoors to spaces that inspire movement, not just endure it.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-accent text-2xl mt-1">🤝</div>
                <div>
                  <strong className="text-primary block mb-2">Proximity Creates Accountability</strong>
                  <p>When your trainer is local, you're more likely to show up. No hour-long drives to a gym across town. Sessions can fit into your lunch break, before work, or after work without eating your whole day. Local means accessible, and accessible means sustainable.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-accent text-2xl mt-1">🌲</div>
                <div>
                  <strong className="text-primary block mb-2">Community & Connection</strong>
                  <p>Training locally means supporting your community and potentially training alongside others who share your values. You're not just a client number at a corporate gym chain, you're part of a local movement practice that values quality, sustainability, and the Santa Cruz way of life.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 border-l-4 border-accent pl-6">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Training Locations Throughout Santa Cruz County
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-8">
              Private one-on-one sessions at my studio, or for local clients, we can meet at outdoor locations throughout the area. I work with clients across Santa Cruz County, making training accessible wherever you are.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-primary mb-3">Santa Cruz Central</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Downtown Santa Cruz</li>
                  <li>• Westside</li>
                  <li>• Eastside/Seabright</li>
                  <li>• Midtown</li>
                  <li>• Harvey West</li>
                  <li>• Twin Lakes</li>
                  <li>• Live Oak</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-primary mb-3">Beach Communities</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Capitola Village</li>
                  <li>• Aptos</li>
                  <li>• Rio Del Mar</li>
                  <li>• Pleasure Point</li>
                  <li>• La Selva Beach</li>
                  <li>• Seacliff</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-primary mb-3">Greater County</h3>
                <ul className="space-y-2 text-neutralDark/80">
                  <li>• Soquel</li>
                  <li>• Scotts Valley</li>
                  <li>• Felton</li>
                  <li>• Ben Lomond</li>
                  <li>• Boulder Creek</li>
                  <li>• Bonny Doon</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-6">
              <h3 className="font-semibold text-primary mb-3">Favorite Outdoor Training Spots:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-neutralDark/80">
                <div>
                  <strong>West Cliff Drive:</strong> Perfect for walking assessments and mobility work with stunning ocean views
                </div>
                <div>
                  <strong>DeLaveaga Park:</strong> Hill training, trail work, and functional movement in nature
                </div>
                <div>
                  <strong>Natural Bridges:</strong> Beach training and sand work for stability and power
                </div>
                <div>
                  <strong>Nisene Marks:</strong> Trail running assessments and endurance work in the redwoods
                </div>
                <div>
                  <strong>Seabright Beach:</strong> Low-impact training location near the harbor
                </div>
                <div>
                  <strong>Capitola Wharf Area:</strong> Flat, accessible training for all fitness levels
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/packages" variant="outline" size="lg" fullWidth>
              View Training Packages
            </Button>
          </div>
          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/movement-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Movement Training Hub
              </Link>
              <Link to="/athletic-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Athletic Performance
              </Link>
              <Link to="/mobility-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Mobility Training
              </Link>
              <Link to="/core-strengthening" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Core Strengthening
              </Link>
              <Link to="/exercise-for-life" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Exercise for Life
              </Link>
              <Link to="/safe-gym-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Safe Gym Training
              </Link>
              <Link to="/what-is-movement-education" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                What Is Movement Education?
              </Link>
              <Link to="/sports-performance" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Sports Performance
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default PersonalTrainerSantaCruz;
