import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';

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
                I help people move the way they were meant to. Not through endless reps or rigid protocols, but by addressing the fascial restrictions and movement patterns that hold you back.
              </p>
              <p className="text-lg text-neutralDark/80 leading-relaxed">
                Most personal training treats symptoms. I work with the whole system—releasing what's tight, strengthening what's weak, and teaching your body to move with ease again.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <h2 className="text-3xl font-heading text-neutralDark mb-8">
                What Makes This Different
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutralDark mb-3">
                    Structural Integration
                  </h3>
                  <p className="text-lg text-neutralDark/80 leading-relaxed">
                    Hands-on fascial release to address the restrictions that limit your movement. This isn't massage—it's systematic bodywork that reorganizes your structure.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-neutralDark mb-3">
                    Movement Education
                  </h3>
                  <p className="text-lg text-neutralDark/80 leading-relaxed">
                    Teaching you how to move efficiently. We work on patterns, not just muscles. You'll learn skills that transfer to everything you do.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-neutralDark mb-3">
                    Whole-System Approach
                  </h3>
                  <p className="text-lg text-neutralDark/80 leading-relaxed">
                    Pain in your knee? The problem might be in your hip. Or your ankle. Or how you breathe. I look at the whole picture, not just where it hurts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default About;