import PageLayout from '../components/PageLayout';

function About() {
  return (
    <PageLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-heading text-primary mb-8">
            About Rock Your Body
          </h1>
          
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-heading text-neutralDark mb-6">
                Movement Education That Goes Deeper
              </h2>
              <p className="text-lg text-neutralDark/80 mb-4">
                I'm Rock Hudson, and I help people move the way they were meant to. Not through endless reps or rigid protocols, but by addressing the fascial restrictions and movement patterns that hold you back.
              </p>
              <p className="text-lg text-neutralDark/80 mb-4">
                Most personal training treats symptoms. I work with the whole system—releasing what's tight, strengthening what's weak, and teaching your body to move with ease again.
              </p>
            </div>
            
            {/* What Makes This Different */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-heading text-neutralDark mb-6">
                What Makes This Different
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-neutralDark mb-2">
                    Structural Integration
                  </h3>
                  <p className="text-neutralDark/80">
                    I use hands-on fascial release to address the restrictions that limit your movement. This isn't massage—it's systematic bodywork that reorganizes your structure.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-neutralDark mb-2">
                    Movement Education
                  </h3>
                  <p className="text-neutralDark/80">
                    I teach you how to move efficiently. We work on patterns, not just muscles. You'll learn skills that transfer to everything you do.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-neutralDark mb-2">
                    Whole-System Approach
                  </h3>
                  <p className="text-neutralDark/80">
                    Pain in your knee? The problem might be in your hip. Or your ankle. Or how you breathe. I look at the whole picture, not just where it hurts.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Who This Is For */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-heading text-neutralDark mb-6">
                Who This Is For
              </h2>
              <ul className="space-y-3 text-neutralDark/80">
                <li>• People dealing with chronic pain or movement limitations</li>
                <li>• Athletes who want to move better and prevent injury</li>
                <li>• Anyone who's tried everything else and still doesn't feel right</li>
                <li>• People who want to understand their body, not just follow a program</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default About;