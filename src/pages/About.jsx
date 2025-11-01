import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';

function About() {
  return (
    <PageLayout>
      <PageHero 
        imageSrc="/about-hero.jpg"
        title="About"
        subtitle="Helping you move better, feel better, and live better"
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
                I'm a certified Structural Integration specialist — i.e., I spent years getting really into fascia. But yes, I still make jokes about it.
              </p>
              <div className="bg-accent/5 rounded-xl p-6 mb-6">
                <p className="text-base text-neutralDark/80 leading-relaxed">
                  <strong className="text-neutralDark">10+ years experience</strong> | Certified Structural Integrator (Anatomy Trains) | NASM Certified Personal Trainer | Functional Movement Specialist | MovNat Level 2 | Plus way too many other certifications to list without boring you
                </p>
              </div>
              <p className="text-lg text-neutralDark/80 leading-relaxed">
                I believe fitness isn't just about logging reps — it's about feeling like YOU can move without hesitation, jump without fear, and maybe even surprise yourself. Bonus: I'll crack a dad-joke if it helps loosen a hip.
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
                  <Button
                    to="/what-is-structural-integration"
                    variant="outline"
                    size="sm"
                  >
                    Learn More →
                  </Button>
                </div>
                
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-neutralDark mb-3">
                    Movement Education
                  </h3>
                  <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
                    Teaching you how to move efficiently. We work on patterns, not just muscles. You'll learn skills that transfer to everything you do — from picking up groceries to crushing your next hike.
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

            <div className="bg-sage/5 rounded-2xl p-10 shadow-sm border-l-4 border-accent">
              <p className="text-base text-neutralDark/70 italic">
                <strong className="text-neutralDark not-italic">Fun fact:</strong> I once tested someone's hip mobility by having them climb a ladder sideways. Yes, really. Sometimes the weirdest movements reveal the most useful information about how your body compensates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default About;