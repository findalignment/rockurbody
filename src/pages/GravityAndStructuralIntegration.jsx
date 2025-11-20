import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import { getBreadcrumbSchema } from '../utils/structuredData';

function GravityAndStructuralIntegration() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Structural Integration', url: '/structural-integration' },
    { name: 'Gravity & SI', url: '/gravity-and-structural-integration' }
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>Improving Your Relationship With Gravity | Santa Cruz Structural Integration</title>
        <meta name="description" content="Discover how structural integration helps you improve your relationship with gravity by unwinding tension on the table and retraining movement patterns for efficiency, strength, and ease in Santa Cruz." />
        <meta name="keywords" content="gravity and posture, structural integration Santa Cruz, bodywork gravity, movement retraining, postural alignment, body unwinding, fascial release, movement efficiency" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Improving Your Relationship With Gravity | Rock Your Body" />
        <meta property="og:description" content="Learn how structural integration helps you work with gravity instead of against it." />
        <meta property="og:type" content="article" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Improving Your Relationship With Gravity Through Structural Integration",
            "author": {
              "@type": "Person",
              "name": "Rock Hudson"
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "Rock Your Body",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Santa Cruz",
                "addressRegion": "CA"
              }
            },
            "description": "How structural integration and movement education help you work with gravity instead of fighting against it."
          })}
        </script>
      </Helmet>

      <PageHero 
        imageSrc="/gravity-structural-integration-hero.jpg"
        title="Improving Your Relationship With Gravity"
        subtitle="What if instead of fighting gravity, you could work with it?"
      />


      <div className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-neutralDark/90 leading-relaxed mb-6">
              Here's a thought: gravity isn't the enemy. It's actually one of the most reliable forces in your life. It's always there, always consistent. The problem isn't gravity. The problem is how your body has learned to relate to it.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Most of us are fighting gravity all day long. We're holding ourselves up, bracing against collapse, tensing muscles that don't need to be tense. It's exhausting. And it's completely unnecessary.
            </p>
          </div>

          {/* The Problem */}
          <div className="bg-sage/10 rounded-2xl p-8 mb-16 border-2 border-sage/20">
            <h2 className="text-3xl font-heading text-primary mb-6">The Problem With Fighting Gravity</h2>
            <div className="space-y-4 text-neutralDark/80">
              <p>
                When you're constantly bracing against gravity, a few things happen:
              </p>
              <ul className="space-y-3 ml-6">
                <li><strong>Chronic tension:</strong> Muscles that should be relaxed are working overtime</li>
                <li><strong>Poor movement patterns:</strong> You compensate in ways that create pain and dysfunction</li>
                <li><strong>Energy drain:</strong> Fighting gravity all day is exhausting</li>
                <li><strong>Accelerated aging:</strong> Your body compresses, shortens, and stiffens</li>
              </ul>
              <p className="mt-6 text-lg font-medium text-primary">
                The good news? You can change your relationship with gravity. That's exactly what <Link to="/what-is-structural-integration" className="text-accent hover:underline">structural integration</Link> is designed to do.
              </p>
            </div>
          </div>

          {/* The Solution: Two-Part Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-8 text-center">
              A Two-Part Process
            </h2>

            {/* Part 1: On the Table */}
            <div className="bg-offWhite rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-heading text-primary mb-4">
                Part 1: Getting Out of Gravity (On the Table)
              </h3>
              <p className="text-neutralDark/80 mb-4">
                This is where the magic starts. When you're lying on the table, you're temporarily freed from the constant pull of gravity. Your nervous system gets a break from its habitual holding patterns.
              </p>
              <p className="text-neutralDark/80 mb-4">
                Through <Link to="/what-is-structural-integration" className="text-accent hover:underline">hands-on structural integration work</Link>, I help your fascia (the connective tissue that wraps everything in your body) release its accumulated tension and restrictions. Your system starts to unwind. Old patterns begin to let go.
              </p>
              <p className="text-neutralDark/80 font-medium">
                It's not aggressive. It's not painful. It's a conversation between my hands and your tissue, allowing your body to reorganize itself.
              </p>
            </div>

            {/* Part 2: Movement Retraining */}
            <div className="bg-offWhite rounded-2xl p-8">
              <h3 className="text-2xl font-heading text-primary mb-4">
                Part 2: Retraining Movement (Off the Table)
              </h3>
              <p className="text-neutralDark/80 mb-4">
                Here's the thing: you can have the most beautifully organized structure, but if you go right back to your old movement patterns, you'll recreate the same problems.
              </p>
              <p className="text-neutralDark/80 mb-4">
                That's why we combine structural work with <Link to="/what-is-movement-education" className="text-accent hover:underline">movement education</Link>. You learn how to:
              </p>
              <ul className="space-y-3 ml-6 text-neutralDark/80 mb-4">
                <li>Move with improved efficiency (less wasted energy)</li>
                <li>Access a deeper sense of strength (not just surface muscles)</li>
                <li>Experience an overall sense of ease in your body</li>
              </ul>
              <p className="text-neutralDark/80 font-medium">
                We're not just changing your structure. We're changing how you inhabit that structure.
              </p>
            </div>
          </div>

          {/* What This Looks Like */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">What This Actually Looks Like</h2>
            <div className="space-y-4 text-neutralDark/80">
              <p>
                Imagine standing up and feeling like your skeleton is actually supporting you, instead of your muscles having to hold everything together. Imagine walking and feeling like gravity is pulling you forward, not dragging you down.
              </p>
              <p>
                That's what a good relationship with gravity feels like. You're not fighting. You're flowing.
              </p>
              <p className="text-lg font-medium text-primary mt-6">
                Your body becomes lighter. Your movements become easier. You have more energy at the end of the day because you're not spending it all on unnecessary tension.
              </p>
            </div>
          </div>

          {/* Who This Is For */}
          <div className="bg-sage/10 rounded-2xl p-8 mb-16 border-2 border-sage/20">
            <h2 className="text-3xl font-heading text-primary mb-6">This Is For You If:</h2>
            <ul className="space-y-3 text-neutralDark/80">
              <li>✓ You feel like you're constantly "holding yourself up"</li>
              <li>✓ Your shoulders, neck, or back are chronically tight</li>
              <li>✓ You feel compressed or like you've lost height</li>
              <li>✓ Movement feels harder than it used to</li>
              <li>✓ You're tired of feeling exhausted from just existing</li>
              <li>✓ You want to age with ease instead of stiffness</li>
            </ul>
          </div>

          {/* The Programs */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6 text-center">How We Work Together</h2>
            <p className="text-center text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              This two-part approach is baked into everything I do. Whether you choose the comprehensive <Link to="/12-series" className="text-accent hover:underline">12-Series</Link>, focused single sessions, or one of my <Link to="/packages" className="text-accent hover:underline">combination programs</Link>, you're getting both structural work on the table and movement education off it.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/12-series" className="bg-offWhite rounded-xl p-6 hover:shadow-lg transition group">
                <h3 className="text-xl font-heading text-primary mb-3 group-hover:text-accent transition">The 12-Series</h3>
                <p className="text-sm text-neutralDark/80">
                  The complete structural integration journey. Systematic, transformative, and designed to give you a fundamentally better relationship with gravity.
                </p>
              </Link>
              
              <Link to="/packages" className="bg-offWhite rounded-xl p-6 hover:shadow-lg transition group">
                <h3 className="text-xl font-heading text-primary mb-3 group-hover:text-accent transition">Combination Programs</h3>
                <p className="text-sm text-neutralDark/80">
                  Blend structural integration with movement coaching for ongoing support and maintenance.
                </p>
              </Link>
              
              <Link to="/pricing" className="bg-offWhite rounded-xl p-6 hover:shadow-lg transition group">
                <h3 className="text-xl font-heading text-primary mb-3 group-hover:text-accent transition">Single Sessions</h3>
                <p className="text-sm text-neutralDark/80">
                  Not ready to commit to a series? Start with a single session and see how your body responds.
                </p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-heading mb-4">Ready to Stop Fighting Gravity?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's talk about what's going on with your body and how we can help you move with more ease.
            </p>
            <Link
              to="/consult"
              className="inline-block px-8 py-4 bg-accent text-white rounded-xl font-semibold text-lg hover:bg-accent/90 transition transform hover:scale-105"
            >
              Schedule a Free Consultation
            </Link>
          </div>
          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Structural Integration Hub
              </Link>
              <Link to="/what-is-structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                What Is SI?
              </Link>
              <Link to="/santa-cruz-structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Santa Cruz SI
              </Link>
              <Link to="/posture-correction" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Posture Correction
              </Link>
              <Link to="/fascial-release" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Fascial Release
              </Link>
              <Link to="/chronic-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Chronic Pain Relief
              </Link>
              <Link to="/movement-training" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Movement Training
              </Link>
              <Link to="/back-pain-santa-cruz" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Back Pain Relief
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default GravityAndStructuralIntegration;
