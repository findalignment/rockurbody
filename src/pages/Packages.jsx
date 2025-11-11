import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import PaymentButton from '../components/PaymentButton';

function Packages() {
  // Movement session packages - matches Pricing page
  const movementPackages = {
    '5 Sessions': {
      sessions: 5,
      price: 810, // $180 * 5 * 0.90 (10% off)
      discount: '10%',
      pricePerSession: 162,
      savings: 90
    },
    '10 Sessions': {
      sessions: 10,
      price: 1530, // $180 * 10 * 0.85 (15% off)
      discount: '15%',
      pricePerSession: 153,
      savings: 270
    },
    '20 Sessions': {
      sessions: 20,
      price: 2880, // $180 * 20 * 0.80 (20% off)
      discount: '20%',
      pricePerSession: 144,
      savings: 720
    }
  };

  // Package configurations - moved from SessionService to avoid Airtable browser import
  const packageConfigs = {
    'The Reset': {
      name: 'The Reset',
      description: '6 sessions: 3 SI + 3 Movement',
      price: 990,
      sessions: [
        { type: 'SI', duration: 60, count: 3 },
        { type: 'Movement', duration: 60, count: 3 }
      ]
    },
    'Hip Freedom - Basic': {
      name: 'Hip Freedom - Basic',
      description: '8 sessions: 4 SI + 4 Movement',
      price: 1320,
      sessions: [
        { type: 'SI', duration: 60, count: 4 },
        { type: 'Movement', duration: 60, count: 4 }
      ]
    },
    'Hip Freedom - Extended': {
      name: 'Hip Freedom - Extended',
      description: '12 sessions: 4 SI + 8 Movement',
      price: 1920,
      sessions: [
        { type: 'SI', duration: 60, count: 4 },
        { type: 'Movement', duration: 60, count: 8 }
      ]
    },
    'Full Repatterning - Basic': {
      name: 'Full Repatterning - Basic',
      description: '24 sessions: 12 SI + 12 Movement',
      price: 3720,
      sessions: [
        { type: 'SI', duration: 60, count: 12 },
        { type: 'Movement', duration: 60, count: 12 }
      ]
    },
    'Full Repatterning - Extended': {
      name: 'Full Repatterning - Extended',
      description: '36 sessions: 12 SI + 24 Movement',
      price: 5400,
      sessions: [
        { type: 'SI', duration: 60, count: 12 },
        { type: 'Movement', duration: 60, count: 24 }
      ]
    },
    'Full Repatterning - Premium': {
      name: 'Full Repatterning - Premium',
      description: '36 sessions: 12 SI + 24 Movement',
      price: 5400,
      sessions: [
        { type: 'SI', duration: 90, count: 12 },
        { type: 'Movement', duration: 60, count: 24 }
      ]
    },
    'Full Repatterning - Ultimate': {
      name: 'Full Repatterning - Ultimate',
      description: '48 sessions: 12 SI (90min) + 36 Movement',
      price: 7200,
      sessions: [
        { type: 'SI', duration: 90, count: 12 },
        { type: 'Movement', duration: 60, count: 36 }
      ]
    }
  };

  return (
    <PageLayout>
      <PageHero 
        imageSrc="/packages-hero.jpg"
        title="Programs Designed Around You"
        subtitle="Move Better. Feel Stronger. Stay Adventurous."
      />
      <div className="pt-16 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xl text-neutralDark/80 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
            These aren't cookie-cutter workout plans. Each program is designed to actually address what's holding you back, whether that's a chronically tight hip, a stiff shoulder, or just feeling like your body's betraying you. You're not just buying sessions, you're buying freedom from stiff-body days. Not sure where to start? Let's chat. No fluff, no pushy sales, just us figuring out what your body wants to do.
          </p>

          <div className="bg-sage/10 rounded-2xl p-6 mb-20 max-w-4xl mx-auto border-2 border-sage/20">
            <p className="text-lg text-neutralDark/80 text-center leading-relaxed">
              <strong className="text-primary">Want something different?</strong> The packages below are what most people choose, but we can create custom combinations to fit your needs. Want longer SI sessions and shorter training sessions? Need a different mix altogether? The sky is the limit. Let's talk about what works for you.
            </p>
          </div>

          {/* Movement Session Packages */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading text-primary mb-8 text-center">Movement Education Packages</h2>
            <p className="text-lg text-neutralDark/80 mb-12 text-center max-w-3xl mx-auto">
              Save on multiple 60-minute sessions of one-on-one movement training. Focus on how you move, not just what exercises you do.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 5 Sessions */}
              <Link 
                to="/programs/movement-5-sessions"
                className="bg-white rounded-2xl p-8 shadow-sm border-2 border-neutralLight hover:border-accent hover:shadow-lg transition-all flex flex-col cursor-pointer group"
              >
                <div className="text-center mb-6">
                  <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Quick Start
                  </div>
                  <h3 className="text-2xl font-heading text-primary mb-4">5 Sessions</h3>
                  <p className="text-neutralDark/80 mb-4">Perfect for testing the waters and addressing specific movement issues.</p>
                </div>
                
                <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                  <li>✓ Five 60-minute sessions</li>
                  <li>✓ Learn foundational movement patterns</li>
                  <li>✓ Address specific issues</li>
                  <li>✓ Flexible scheduling</li>
                  <li>✓ Save 10% vs single sessions</li>
                </ul>
                
                <div className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold text-center group-hover:bg-accent transition">
                  Learn More & Pricing →
                </div>
              </Link>

              {/* 10 Sessions */}
              <Link 
                to="/programs/movement-10-sessions"
                className="bg-white rounded-2xl p-8 shadow-sm border-2 border-accent relative hover:shadow-xl transition-all flex flex-col cursor-pointer group"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-6 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
                
                <div className="text-center mb-6 mt-2">
                  <div className="inline-block bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Best Value
                  </div>
                  <h3 className="text-2xl font-heading text-primary mb-4">10 Sessions</h3>
                  <p className="text-neutralDark/80 mb-4">The sweet spot for building lasting change and seeing real progress in how you move.</p>
                </div>
                
                <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                  <li>✓ Ten 60-minute sessions</li>
                  <li>✓ Enough time for real transformation</li>
                  <li>✓ Develop sustainable movement habits</li>
                  <li>✓ Flexible scheduling</li>
                  <li>✓ Save 15% vs single sessions</li>
                </ul>
                
                <div className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold text-center group-hover:bg-accent transition">
                  Learn More & Pricing →
                </div>
              </Link>

              {/* 20 Sessions */}
              <Link 
                to="/programs/movement-20-sessions"
                className="bg-white rounded-2xl p-8 shadow-sm border-2 border-neutralLight hover:border-accent hover:shadow-lg transition-all flex flex-col cursor-pointer group"
              >
                <div className="text-center mb-6">
                  <div className="inline-block bg-highlight/10 text-highlight px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Maximum Results
                  </div>
                  <h3 className="text-2xl font-heading text-primary mb-4">20 Sessions</h3>
                  <p className="text-neutralDark/80 mb-4">Deep dive into movement mastery with maximum support and biggest savings.</p>
                </div>
                
                <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                  <li>✓ Twenty 60-minute sessions</li>
                  <li>✓ Complete movement transformation</li>
                  <li>✓ Master complex patterns</li>
                  <li>✓ Flexible scheduling</li>
                  <li>✓ Save 20% vs single sessions</li>
                </ul>
                
                <div className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold text-center group-hover:bg-accent transition">
                  Learn More & Pricing →
                </div>
              </Link>
            </div>
          </div>

          {/* Structural Integration Packages */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading text-primary mb-8 text-center">Structural Integration Series</h2>
            <p className="text-lg text-neutralDark/80 mb-12 text-center max-w-3xl mx-auto">
              Transform your body's structure through comprehensive Structural Integration protocols. Each series offers a complete approach to realigning your body and restoring natural movement patterns.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Hip Series */}
              <Link 
                to="/programs/hip-series"
                className="bg-white rounded-2xl p-8 shadow-sm border-2 border-neutralLight hover:border-accent hover:shadow-lg transition-all flex flex-col cursor-pointer group"
              >
                <div className="text-center mb-6">
                  <div className="inline-block bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Great Introduction
                  </div>
                  <h3 className="text-2xl font-heading text-primary mb-4">Hip Series</h3>
                  <p className="text-neutralDark/80 mb-4">Four sessions focused on freeing your hips and lower body. Experience what SI can do.</p>
                </div>
                
                <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                  <li>✓ 4 targeted SI sessions</li>
                  <li>✓ Focus on hip mobility & alignment</li>
                  <li>✓ Great introduction to the work</li>
                  <li>✓ Perfect precursor to 12-Series</li>
                  <li>✓ See real results fast</li>
                </ul>
                
                <div className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold text-center group-hover:bg-accent transition">
                  Learn More & Pricing →
                </div>
              </Link>

              {/* 12-Series */}
              <Link 
                to="/programs/12-series"
                className="bg-white rounded-2xl p-8 shadow-sm border-2 border-accent relative hover:shadow-xl transition-all flex flex-col cursor-pointer group"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-6 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
                
                <div className="text-center mb-6 mt-2">
                  <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Complete Protocol
                  </div>
                  <h3 className="text-2xl font-heading text-primary mb-4">12-Series</h3>
                  <p className="text-neutralDark/80 mb-4">The complete Anatomy Trains Structural Integration protocol. Full-body transformation.</p>
                </div>
                
                <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                  <li>✓ 12 comprehensive SI sessions</li>
                  <li>✓ Complete Anatomy Trains protocol</li>
                  <li>✓ Full structural transformation</li>
                  <li>✓ Proven systematic approach</li>
                  <li>✓ Life-changing results</li>
                </ul>
                
                <div className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold text-center group-hover:bg-accent transition">
                  Learn More & Pricing →
                </div>
              </Link>
            </div>
          </div>

          {/* Specialized Programs */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading text-primary mb-8 text-center">Specialized Programs</h2>
            <p className="text-lg text-neutralDark/80 mb-12 text-center max-w-3xl mx-auto">
              Comprehensive programs combining Structural Integration and Movement Education for lasting change.
            </p>

            {/* The Reset - Single Card */}
            <div className="max-w-md mx-auto mb-16">
              <Link 
                to="/programs/the-reset"
                className="bg-white rounded-2xl p-8 shadow-sm border-2 border-neutralLight hover:border-accent hover:shadow-lg transition-all flex flex-col cursor-pointer group"
              >
                <div className="text-center mb-6">
                  <div className="inline-block bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Quick Reset
                  </div>
                  <h3 className="text-2xl font-heading text-primary mb-4">The Reset</h3>
                  <p className="text-neutralDark/80 mb-4">Six sessions combining SI and movement work. Perfect for getting back on track.</p>
                </div>
                
                <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                  <li>✓ 3 SI sessions (60 min)</li>
                  <li>✓ 3 Movement sessions (60 min)</li>
                  <li>✓ Reset your foundation quickly</li>
                  <li>✓ Address specific issues</li>
                  <li>✓ Return to feeling good</li>
                </ul>
                
                <div className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold text-center group-hover:bg-accent transition">
                  Learn More & Pricing →
                </div>
              </Link>
            </div>

            {/* Hip Freedom Options */}
            <div className="mb-16">
              <h3 className="text-2xl font-heading text-primary mb-8 text-center">Hip Freedom</h3>
              <p className="text-base text-neutralDark/80 mb-8 text-center max-w-2xl mx-auto">
                Reclaim how your hips are meant to move
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Basic Option */}
                <Link 
                  to="/programs/hip-freedom-basic"
                  className="bg-white rounded-2xl p-8 shadow-sm border-2 border-neutralLight hover:border-accent hover:shadow-lg transition-all flex flex-col cursor-pointer group"
                >
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-heading text-primary mb-4">Hip Freedom - Basic</h4>
                    <p className="text-neutralDark/80 mb-4">Eight sessions targeting hip mobility and structural alignment.</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                    <li>✓ 4 SI sessions (60 min)</li>
                    <li>✓ 4 Movement sessions (60 min)</li>
                    <li>✓ Focused hip transformation</li>
                    <li>✓ Restore natural movement</li>
                    <li>✓ Reduce pain, increase range</li>
                  </ul>
                  
                  <div className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold text-center group-hover:bg-accent transition">
                    Learn More & Pricing →
                  </div>
                </Link>

                {/* Extended Option */}
                <Link 
                  to="/programs/hip-freedom-extended"
                  className="bg-white rounded-2xl p-8 shadow-sm border-2 border-accent relative hover:shadow-xl transition-all flex flex-col cursor-pointer group"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-6 py-1 rounded-full text-sm font-bold">
                    POPULAR
                  </div>
                  
                  <div className="text-center mb-6 mt-2">
                    <h4 className="text-2xl font-heading text-primary mb-4">Hip Freedom - Extended</h4>
                    <p className="text-neutralDark/80 mb-4">Twelve sessions for comprehensive hip work with more movement integration.</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                    <li>✓ 6 SI sessions (60 min)</li>
                    <li>✓ 6 Movement sessions (60 min)</li>
                    <li>✓ Deeper hip transformation</li>
                    <li>✓ Long-lasting results</li>
                    <li>✓ More time to integrate</li>
                  </ul>
                  
                  <div className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold text-center group-hover:bg-accent transition">
                    Learn More & Pricing →
                  </div>
                </Link>
              </div>
            </div>

            {/* Full Repatterning Options */}
            <div>
              <h3 className="text-2xl font-heading text-primary mb-8 text-center">Full Repatterning</h3>
              <p className="text-base text-neutralDark/80 mb-8 text-center max-w-2xl mx-auto">
                12 weeks of hands-on work, movement training, plus surprise mobility hacks I only send my VIPs. This is the full reset. <span className="italic">You're not just buying sessions. You're buying freedom from stiff-body days.</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic */}
                <Link 
                  to="/programs/full-repatterning-basic"
                  className="bg-white rounded-2xl p-8 shadow-sm border-2 border-neutralLight hover:border-accent hover:shadow-lg transition-all flex flex-col cursor-pointer group"
                >
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-heading text-primary mb-4">Full Repatterning - Basic</h4>
                    <p className="text-neutralDark/80 mb-4">Complete structural transformation with equal SI and movement sessions.</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                    <li>✓ 12 SI sessions (60 min)</li>
                    <li>✓ 12 Movement sessions (60 min)</li>
                    <li>✓ Full body scan & movement reset</li>
                    <li>✓ Weekly hands-on sessions</li>
                    <li>✓ Ongoing support via messaging</li>
                  </ul>
                  
                  <div className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold text-center group-hover:bg-accent transition">
                    Learn More & Pricing →
                  </div>
                </Link>

                {/* Premium */}
                <Link 
                  to="/programs/full-repatterning-premium"
                  className="bg-white rounded-2xl p-8 shadow-sm border-2 border-accent relative hover:shadow-xl transition-all flex flex-col cursor-pointer group"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-6 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                  
                  <div className="text-center mb-6 mt-2">
                    <h4 className="text-2xl font-heading text-primary mb-4">Full Repatterning - Premium</h4>
                    <p className="text-neutralDark/80 mb-4">Longer SI sessions with double the movement work for deeper integration.</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                    <li>✓ 12 SI sessions (90 min)</li>
                    <li>✓ 24 Movement sessions (60 min)</li>
                    <li>✓ Deep integration work</li>
                    <li>✓ Optimal results & retention</li>
                    <li>✓ Most comprehensive program</li>
                  </ul>
                  
                  <div className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold text-center group-hover:bg-accent transition">
                    Learn More & Pricing →
                  </div>
                </Link>

                {/* Ultimate */}
                <Link 
                  to="/programs/full-repatterning-ultimate"
                  className="bg-white rounded-2xl p-8 shadow-sm border-2 border-neutralLight hover:border-accent hover:shadow-lg transition-all flex flex-col cursor-pointer group"
                >
                  <div className="text-center mb-6">
                    <div className="inline-block bg-highlight/10 text-highlight px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      Maximum Support
                    </div>
                    <h4 className="text-2xl font-heading text-primary mb-4">Full Repatterning - Ultimate</h4>
                    <p className="text-neutralDark/80 mb-4">Maximum transformation with extensive movement work for lasting results.</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-sm text-neutralDark/80 flex-grow">
                    <li>✓ 12 SI sessions (90 min)</li>
                    <li>✓ 36 Movement sessions (60 min)</li>
                    <li>✓ Maximum transformation</li>
                    <li>✓ Life-changing results</li>
                    <li>✓ Ultimate support & coaching</li>
                  </ul>
                  
                  <div className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold text-center group-hover:bg-accent transition">
                    Learn More & Pricing →
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Free Consultation */}
          <div className="mt-20 text-center">
            <div className="bg-white rounded-2xl p-12 shadow-sm border border-neutralLight max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading text-primary mb-6">Not Sure Which Package?</h3>
              <p className="text-lg text-neutralDark/80 mb-8 leading-relaxed">
                Book a free consultation to discuss your goals and find the perfect program for you.
              </p>
              <a
                href="/consult"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Packages;