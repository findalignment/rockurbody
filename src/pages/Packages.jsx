import PageLayout from '../components/PageLayout';

function Packages() {
  return (
    <PageLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-heading text-primary mb-8 text-center">
            Programs Designed Around You
          </h1>
          <p className="text-2xl font-semibold text-neutralDark mb-4 text-center">
            Move Better. Feel Stronger. Stay Adventurous.
          </p>
          <p className="text-xl text-neutralDark/80 mb-12 text-center max-w-4xl mx-auto">
            The movement and structural integration programs are thoughtfully crafted around real client needs: relieving tension, improving mobility, and supporting lifelong vitality. Each program offers a proven path to freedom in your body, yet every journey is personal. That's why each plan is adaptable to your unique goals and lifestyle. Not sure where to start? Explore your options with a free consultation and let's find the right fit together.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* The Reset */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutralLight">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-heading text-neutralDark mb-2">
                  The Reset
                </h2>
                <p className="text-lg font-semibold text-accent mb-2">
                  Feel Like Yourself Again
                </p>
                <p className="text-sm text-neutralDark/60 mb-4">
                  In Just 3 Weeks
                </p>
                <p className="text-neutralDark/80 text-sm">
                  Reconnect with your body, reduce pain, and move freely with The Reset Program.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-neutralLight/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-neutralDark mb-2">What's Included:</h3>
                  <ul className="text-sm text-neutralDark/80 space-y-1">
                    <li>• 3 Structural integration sessions</li>
                    <li>• 3 Movement education sessions</li>
                    <li>• Personalized home movement plan</li>
                    <li>• Email support for your questions</li>
                    <li>• Pre/post movement awareness check-in</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-neutralDark mb-2">This is perfect for you if...</h3>
                  <ul className="text-sm text-neutralDark/80 space-y-1">
                    <li>• You feel tight, achy, or out of sync</li>
                    <li>• You want to improve posture and energy</li>
                    <li>• You're short on time but ready for change</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-neutralDark mb-2">What Results Can I Expect?</h3>
                  <ul className="text-sm text-neutralDark/80 space-y-1">
                    <li>• Less tension in your neck, shoulders, or hips</li>
                    <li>• Better sleep and breathing</li>
                    <li>• More confidence in how you stand and move</li>
                    <li>• A deeper awareness of your body's patterns</li>
                    <li>• A sense of ease in everyday life</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-accent/10 p-4 rounded-lg mb-4">
                  <p className="text-3xl font-bold text-accent mb-2">$990</p>
                  <div className="text-sm text-neutralDark/80 space-y-1">
                    <p><strong>Duration:</strong> 3 weeks</p>
                    <p><strong>Frequency:</strong> 1x/week SI sessions, 1x/week Movement sessions</p>
                    <p><strong>Session Length:</strong> All sessions are 60 minutes</p>
                    <p className="text-xs text-neutralDark/60 mt-2">
                      Note: The timeline is flexible if you need more time between sessions.
                    </p>
                  </div>
                </div>
                <a
                  href="/book/consult"
                  className="inline-block w-full px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-center"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Hip Freedom */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-accent relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h2 className="text-2xl font-heading text-neutralDark mb-2">
                  The Hip Series
                </h2>
                <p className="text-lg font-semibold text-accent mb-2">
                  Reclaim Strength Where It Matters
                </p>
                <p className="text-neutralDark/80 text-sm">
                  Free your hips from tightness and stiffness so you can walk, sit, hike, and sleep with ease.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-neutralDark mb-2">What's Included:</h3>
                  <ul className="text-sm text-neutralDark/80 space-y-1">
                    <li>• 4 Structural integration sessions</li>
                    <li>• 4-8 Movement education sessions</li>
                    <li>• Mobility testing and progress tracking</li>
                    <li>• Targeted exercises for hips and core</li>
                    <li>• Email support for questions</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-neutralDark mb-2">This is perfect for you if...</h3>
                  <ul className="text-sm text-neutralDark/80 space-y-1">
                    <li>• You wake up with tight hips or low back</li>
                    <li>• You struggle to sit or hike comfortably</li>
                    <li>• You've tried stretching but it doesn't stick</li>
                    <li>• You want to stay mobile and strong as you age</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-neutralDark mb-2">What Results Can I Expect?</h3>
                  <ul className="text-sm text-neutralDark/80 space-y-1">
                    <li>• Greater ease when walking or standing up</li>
                    <li>• Relief from stiffness or pinching</li>
                    <li>• Stronger, more stable hips and pelvis</li>
                    <li>• Better sleep from improved comfort</li>
                    <li>• Increased confidence in your movement</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-accent/10 p-4 rounded-lg mb-4">
                  <p className="text-3xl font-bold text-accent mb-2">$1,320 - $1,920</p>
                  <div className="text-sm text-neutralDark/80 space-y-1">
                    <p><strong>Duration:</strong> 4 weeks</p>
                    <p><strong>Frequency:</strong> 1x/week SI sessions, 1x-2x/week Movement sessions</p>
                    <p><strong>Session Length:</strong> All sessions are 60 minutes</p>
                    <p className="text-xs text-neutralDark/60 mt-2">
                      Note: The timeline is flexible if you need more time between sessions.
                    </p>
                  </div>
                </div>
                <a
                  href="/book/consult"
                  className="inline-block w-full px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-center"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Full Repatterning */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutralLight">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-heading text-neutralDark mb-2">
                  The Full Repatterning
                </h2>
                <p className="text-lg font-semibold text-accent mb-2">
                  Move Like You Were Made To
                </p>
                <p className="text-neutralDark/80 text-sm">
                  A 12-week deep dive into Structural Integration, Movement Education, and habit change to help you move better for life.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-neutralLight/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-neutralDark mb-2">What's Included:</h3>
                  <ul className="text-sm text-neutralDark/80 space-y-1">
                    <li>• 12 Structural integration sessions</li>
                    <li>• 12-24 Movement education sessions</li>
                    <li>• Customized at-home practice plan</li>
                    <li>• Lifetime Movement Habits Toolkit</li>
                    <li>• Follow-up check-in calls after completion</li>
                    <li>• Progress tracking and posture assessments</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-neutralDark mb-2">This is ideal for you if...</h3>
                  <ul className="text-sm text-neutralDark/80 space-y-1">
                    <li>• You've dealt with pain or tightness for years</li>
                    <li>• You want to avoid surgery, shots, or constant PT</li>
                    <li>• You're ready to rebuild how you move—intentionally</li>
                    <li>• You want to feel strong and at ease in your everyday life</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-neutralDark mb-2">What Results Can I Expect?</h3>
                  <ul className="text-sm text-neutralDark/80 space-y-1">
                    <li>• Lasting improvement in posture and gait</li>
                    <li>• Reduced or eliminated chronic pain</li>
                    <li>• Greater strength and stability</li>
                    <li>• Ease in activities that used to feel hard</li>
                    <li>• Long-term tools to prevent regressions</li>
                    <li>• Confidence in how you move for years to come</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-neutralLight/50 p-4 rounded-lg mb-4">
                  <p className="text-3xl font-bold text-accent mb-2">$3,720 - $8,100</p>
                  <div className="text-sm text-neutralDark/80 space-y-1">
                    <p><strong>Duration:</strong> 12 weeks</p>
                    <p><strong>Frequency:</strong> 1x/week SI sessions, 1x-2x/week Movement sessions</p>
                    <p><strong>Session Length:</strong> Sessions are 60-90 minutes</p>
                    <p className="text-xs text-neutralDark/60 mt-2">
                      Note: The timeline is flexible if you need more time between sessions.
                    </p>
                  </div>
                </div>
                <a
                  href="/book/consult"
                  className="inline-block w-full px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>

          {/* Pricing Explanation */}
          <div className="mt-12 bg-neutralLight/30 rounded-2xl p-8">
            <h3 className="text-2xl font-heading text-neutralDark mb-4 text-center">
              Understanding Price Variations
            </h3>
            <div className="max-w-4xl mx-auto space-y-4 text-neutralDark/80">
              <p>
                <strong>Hip Freedom Example:</strong> The Hip Freedom program with 4 bodywork sessions (which don't get discounted) and 4 movement sessions is $1,320. The Hip Freedom with 4 bodywork sessions and 8 movement sessions is $1,920.
              </p>
              <p>
                <strong>Full Repatterning Example:</strong> The price range reflects different session lengths (60-180 minutes for structural integration) and varying numbers of movement education sessions (12-24 sessions) based on your specific needs and goals.
              </p>
              <p className="text-center mt-6">
                <strong>Not sure which program is right for you?</strong> Start with a free consultation to discuss your goals and find the perfect fit.
              </p>
            </div>
          </div>

          {/* Full Repatterning FAQ */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-heading text-neutralDark mb-6 text-center">
              Frequently Asked Questions - The Full Repatterning
            </h3>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="border-b border-neutralLight pb-6">
                <h4 className="text-lg font-semibold text-neutralDark mb-3">
                  Is this too intense if I'm older or deconditioned?
                </h4>
                <p className="text-neutralDark/80">
                  Not at all. It's fully customized to your starting point and evolves as you progress.
                </p>
              </div>
              
              <div className="border-b border-neutralLight pb-6">
                <h4 className="text-lg font-semibold text-neutralDark mb-3">
                  What's the difference between 60 and 90 min sessions?
                </h4>
                <p className="text-neutralDark/80">
                  90-minute sessions allow more time for integration, rest, and deeper focus, but both are highly effective.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-neutralDark mb-3">
                  What happens after the program ends?
                </h4>
                <p className="text-neutralDark/80">
                  You'll receive tools to maintain your progress and can opt for monthly tune-ups or lighter follow-up care.
                </p>
              </div>
            </div>
          </div>

          {/* The Reset FAQ */}
          <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-heading text-neutralDark mb-6 text-center">
              Frequently Asked Questions - The Reset
            </h3>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="border-b border-neutralLight pb-6">
                <h4 className="text-lg font-semibold text-neutralDark mb-3">
                  Can I do this if I've never done Structural Integration?
                </h4>
                <p className="text-neutralDark/80">
                  Absolutely. This is a gentle, guided introduction.
                </p>
              </div>
              
              <div className="border-b border-neutralLight pb-6">
                <h4 className="text-lg font-semibold text-neutralDark mb-3">
                  What if I can't come weekly?
                </h4>
                <p className="text-neutralDark/80">
                  We'll adjust the schedule to fit your needs.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-neutralDark mb-3">
                  What's the difference between this and just booking sessions?
                </h4>
                <p className="text-neutralDark/80">
                  This is a curated experience with progression and support—not just appointments.
                </p>
              </div>
            </div>
          </div>

          {/* The Hip Series FAQ */}
          <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-heading text-neutralDark mb-6 text-center">
              Frequently Asked Questions - The Hip Series
            </h3>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="border-b border-neutralLight pb-6">
                <h4 className="text-lg font-semibold text-neutralDark mb-3">
                  Is this only for people with hip pain?
                </h4>
                <p className="text-neutralDark/80">
                  Not at all. It's designed for anyone with hip tightness, instability, or movement restriction.
                </p>
              </div>
              
              <div className="border-b border-neutralLight pb-6">
                <h4 className="text-lg font-semibold text-neutralDark mb-3">
                  What if I want more sessions after?
                </h4>
                <p className="text-neutralDark/80">
                  You can continue with maintenance or progress to the Full Repatterning program.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-neutralDark mb-3">
                  Can I combine this with other training or activities?
                </h4>
                <p className="text-neutralDark/80">
                  Yes! Many clients integrate this with yoga, hiking, or strength work safely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Packages;