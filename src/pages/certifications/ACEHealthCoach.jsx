import PageLayout from '../../components/PageLayout';
import PageHero from '../../components/PageHero';
import Button from '../../components/Button';
import SEO from '../../components/SEO';

function ACEHealthCoach() {
  return (
    <PageLayout>
      <SEO 
        title="ACE Health Coach Santa Cruz | Lifestyle & Behavior Change"
        description="ACE Certified Health Coach trained in behavior change, motivation, and sustainable lifestyle transformation. Learn how health coaching creates lasting results in Santa Cruz."
        keywords="ACE health coach, health coaching, behavior change, lifestyle coaching, wellness coach santa cruz, sustainable health"
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="ACE Health Coach"
        subtitle="Behavior change and lifestyle transformation, not just workouts"
        alt="ACE Health Coach certification for behavior change and sustainable lifestyle transformation in Santa Cruz"
      />

      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Why Health Coaching Matters
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You know what you're supposed to do. Eat better. Move more. Sleep enough. Manage stress. But knowing and doing are completely different. That gap between knowledge and action? That's where health coaching lives.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              ACE (American Council on Exercise) Health Coach certification trains me in behavior change psychology, motivational interviewing, and helping people create sustainable lifestyle changes. Not temporary motivation. Real, lasting change.
            </p>
            <p className="text-xl text-accent font-semibold">
              Health coaching addresses why you're not doing what you know you should do.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Health Coaching Includes
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Behavior Change Psychology
                </h3>
                <p className="text-neutralDark/80">
                  Understanding why people do what they do, what drives behavior change, and how to help people move from thinking about change to actually making change. This includes the Transtheoretical Model (Stages of Change), Self-Determination Theory, and other evidence-based frameworks.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Motivational Interviewing
                </h3>
                <p className="text-neutralDark/80">
                  A client-centered communication approach that helps you find your own motivation for change. I don't tell you what to do. I help you discover why change matters to you and support you in making it happen.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Goal Setting and Action Planning
                </h3>
                <p className="text-neutralDark/80">
                  Not vague goals like "get healthier." Specific, measurable, achievable goals with concrete action steps. Breaking big changes into manageable pieces. Creating accountability without judgment.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Addressing Barriers
                </h3>
                <p className="text-neutralDark/80">
                  Identifying what's actually preventing change (time, energy, stress, environment, relationships) and problem-solving solutions. Not just "try harder" but actual strategic approaches.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              How Health Coaching Helps You
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-neutralDark/80 leading-relaxed">
                <strong className="text-neutralDark">Sustainable change, not temporary motivation:</strong> I don't just hype you up. We build habits and systems that work for your actual life. Changes that last because they're built on your values and what actually matters to you.
              </p>
              
              <p className="text-lg text-neutralDark/80 leading-relaxed">
                <strong className="text-neutralDark">Accountability without judgment:</strong> I hold you accountable, but there's no shame or guilt. We look at what worked, what didn't, and adjust. This is about progress, not perfection.
              </p>
              
              <p className="text-lg text-neutralDark/80 leading-relaxed">
                <strong className="text-neutralDark">Addressing the whole picture:</strong> Your movement, nutrition, sleep, stress, and relationships all affect each other. Health coaching looks at the whole system, not just workouts.
              </p>

              <p className="text-lg text-neutralDark/80 leading-relaxed">
                <strong className="text-neutralDark">Meeting you where you are:</strong> Not where you "should" be. Where you actually are. With your real schedule, energy levels, and challenges. We work with your reality, not some ideal version of your life.
              </p>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Areas Health Coaching Addresses
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Movement & Exercise
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Not just what to do, but how to make it happen consistently. Finding movement you actually enjoy. Building the habit, not just the workout plan.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Nutrition & Eating
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Understanding your relationship with food. Making changes that work for your life. No restrictive diets. Sustainable eating habits.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Sleep & Recovery
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Identifying what's preventing good sleep. Building sleep hygiene. Making recovery a priority, not an afterthought.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Stress Management
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Practical stress reduction strategies. Identifying stressors you can change vs. those you need better coping for. Building resilience.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Time & Energy
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Making health fit your schedule. Energy management. Prioritization. Saying no to things that don't serve you.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Mindset & Motivation
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Addressing self-sabotage. Building intrinsic motivation. Shifting from "should" to "want to." Sustainable motivation.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Combined with Training and Bodywork
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              Health coaching isn't separate from training. It's integrated into everything I do:
            </p>

            <div className="space-y-4 text-neutralDark/80">
              <p>
                <strong className="text-neutralDark">In Structural Integration sessions:</strong> We talk about what's going on in your life, what patterns you're noticing, what's working and what isn't. This isn't just bodywork. It's helping you understand your whole system.
              </p>
              <p>
                <strong className="text-neutralDark">In training sessions:</strong> I'm not just counting reps. We're building sustainable habits, addressing barriers, and making sure changes actually stick.
              </p>
              <p>
                <strong className="text-neutralDark">Between sessions:</strong> I provide support, accountability, and problem-solving. You're not on your own between our sessions.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz Clients
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              ACE Health Coach certification means I'm trained to help you make lasting lifestyle changes, not just give you workouts. If you've struggled with consistency, motivation, or making changes stick, this is the piece that's been missing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/packages" variant="outline" size="lg" fullWidth>
              View Programs
            </Button>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default ACEHealthCoach;

