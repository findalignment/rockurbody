import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import { getPersonSchema } from '../utils/structuredData';

function About() {
  return (
    <PageLayout>
      <Helmet>
        <title>About Rock Hudson | Certified Structural Integrator & Movement Specialist Santa Cruz</title>
        <meta name="description" content="Meet Rock Hudson, certified Anatomy Trains Structural Integrator and NASM personal trainer serving Santa Cruz and the Bay Area. 10+ years helping people move better through fascia work and functional movement coaching." />
        <meta name="keywords" content="Rock Hudson, structural integrator Santa Cruz, certified Rolfing practitioner, NASM personal trainer, movement specialist, Anatomy Trains, fascia specialist, bodywork expert Santa Cruz, functional movement coach" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Rock Hudson | Structural Integration Expert" />
        <meta property="og:description" content="10+ years helping people move better through structural integration and movement education in Santa Cruz." />
        <meta property="og:type" content="profile" />
        <link rel="canonical" href="https://rockyourbody.com/about" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(getPersonSchema())}
        </script>
      </Helmet>

      <PageHero 
        imageSrc="/about-hero.jpg"
        title="About Rock Your Body"
        subtitle="Rock Hudson, Structural Integrator & Movement Specialist"
        alt="Rock Hudson providing structural integration bodywork to a client in Santa Cruz, California"
      />
      <div className="pt-16 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <h2 className="text-3xl font-heading text-neutralDark mb-6">
              Tired of chasing pain around your body?
              </h2>
              <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
                After noticing I spent more time explaining weird joint-clicks and movement quirks than watching Netflix, I decided to build a program where nothing is off-limits and every weird hip hitch gets fixed.
              </p>
              <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
                I'm a certified Structural Integration specialist. Translation: I spent years getting really into fascia. But yes, I still make jokes about it.
              </p>
              <div className="bg-accent/5 rounded-xl p-6 mb-6">
                <p className="text-base text-neutralDark/80 leading-relaxed">
                  <strong className="text-neutralDark">10+ years experience</strong> | Certified Structural Integrator (Anatomy Trains) | NASM Certified Personal Trainer | Functional Movement Specialist | MovNat Level 2 | Plus way too many other certifications to list without boring you
                </p>
              </div>
              <p className="text-lg text-neutralDark/80 leading-relaxed">
                I believe fitness isn't just about logging reps. It's about feeling like YOU can move without hesitation, jump without fear, and maybe even surprise yourself. Bonus: I'll crack a dad-joke if it helps loosen a hip.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <h2 className="text-3xl font-heading text-neutralDark mb-8">
                What Makes This Different
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-sage pl-6">
                  <h3 className="text-xl font-semibold text-neutralDark mb-3">
                    Structural Integration
                  </h3>
                  <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                    Hands-on fascial release to address the restrictions that limit your movement. This isn't massage. It's systematic bodywork that reorganizes your structure. You'll feel things shift. You'll move differently. It's kind of wild, honestly.
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-neutralDark mb-3">
                    Movement Education
                  </h3>
                  <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                    Teaching you how to move efficiently. We work on patterns, not just muscles. You'll learn skills that transfer to everything you do, from picking up groceries to crushing your next hike.
                  </p>
                  <Button
                    to="/what-is-movement-education"
                    variant="outline"
                    size="sm"
                  >
                    Learn More →
                  </Button>
                </div>
                
                <div className="border-l-4 border-highlight pl-6">
                  <h3 className="text-xl font-semibold text-neutralDark mb-3">
                    Whole-System Approach
                  </h3>
                  <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                    Pain in your knee? The problem might be in your hip. Or your ankle. Or how you breathe. I look at the whole picture, not just where it hurts.
                  </p>
                  <Button
                    to="/approach"
                    variant="outline"
                    size="sm"
                  >
                    Learn More →
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Topics */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/what-is-structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                What Is Structural Integration?
              </Link>
              <Link to="/what-is-movement-education" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                What Is Movement Education?
              </Link>
              <Link to="/approach" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                My Approach
              </Link>
              <Link to="/process" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                The Process
              </Link>
              <Link to="/credentials" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Credentials
              </Link>
              <Link to="/training-lineage" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Training Lineage
              </Link>
              <Link to="/services" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Services
              </Link>
              <Link to="/packages" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Programs & Packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default About;