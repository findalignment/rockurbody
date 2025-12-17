import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';

function WhatAreCompensationPatterns() {
  return (
    <PageLayout>
      <SEO
        title="What Are Compensation Patterns - Understanding Body Compensation | RockUrBody"
        description="Learn what compensation patterns are, how they create pain and movement problems, and how to address them through structural integration and movement education."
        keywords="compensation patterns, body compensation, movement compensation, structural compensation, pain patterns, Santa Cruz"
        url="/what-are-compensation-patterns"
      />
      <PageHero
        title="What Are Compensation Patterns?"
        subtitle="Your body compensates when something isn't working. Understanding compensation patterns is key to fixing pain and movement problems."
        imageSrc="/approach-hero.jpg"
      />

      <section className="py-16 md:py-24 px-4 bg-offWhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What Is Compensation?</h2>
          <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
            Compensation is your body's way of working around a problem. If something isn't working right, a restriction, an alignment issue, a weakness, your body finds another way to do the job.
          </p>
          <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
            That's not necessarily bad. Compensation is adaptive. It's what allows you to keep moving after an injury or when something isn't working properly. But when compensation becomes a pattern, when your body keeps doing it for months or years, it creates problems.
          </p>
          <p className="text-lg text-neutralDark/80 leading-relaxed mb-8">
            The original problem might be small, but the compensation creates a cascade of issues. Your body compensates, and that compensation creates stress somewhere else, which creates another compensation, and so on.
          </p>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-accent/20">
            <h3 className="text-2xl font-semibold text-primary mb-4">Here's the Key Insight:</h3>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              <strong className="text-primary">The place that hurts is rarely the place that's causing the problem.</strong>
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Your knee hurts because your ankle is stiff. Your back hurts because your hips don't move. Your shoulder hurts because your ribs don't rotate. The pain is the symptom. The compensation is the pattern. And the original restriction is the cause.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutralLight py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Common Compensation Patterns (You'll Recognize These)</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Hip Restriction → Low Back Pain</h3>
              <p className="text-neutralDark/80 mb-3">If your hip doesn't move well, your back compensates. Your back takes load it shouldn't during every step, every squat, every bend. After months or years, your back hurts.</p>
              <p className="text-sm text-neutralDark/60 italic">The problem is the hip, but the pain is in the back. Treating the back won't fix it.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Stiff Ankle → Knee Pain</h3>
              <p className="text-neutralDark/80 mb-3">If your ankle doesn't flex properly, your knee has to twist to make up for it. That twist creates stress on the knee joint, meniscus, and ligaments. Eventually, your knee hurts.</p>
              <p className="text-sm text-neutralDark/60 italic">The problem is the ankle, but the pain is in the knee. Strengthening the knee won't fix it.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Poor Core Control → Back Pain</h3>
              <p className="text-neutralDark/80 mb-3">If your core doesn't stabilize properly, your back does work it shouldn't. Your back muscles grip, overwork, and fatigue. Eventually, your back hurts.</p>
              <p className="text-sm text-neutralDark/60 italic">The problem is core coordination, but the pain is in the back. Learn why <Link to="/why-core-work-doesnt-fix-back-pain" className="text-accent hover:underline">core work doesn't fix back pain</Link>.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Rounded Shoulders → Neck/Shoulder Pain</h3>
              <p className="text-neutralDark/80 mb-3">If your shoulders round forward (from desk work, driving, phone use), your neck compensates to keep your head upright. Your neck muscles overwork constantly, and your shoulders lose mobility.</p>
              <p className="text-sm text-neutralDark/60 italic">The problem is shoulder position, but the pain is in the neck. Massage helps temporarily, but it comes back.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Rib Restriction → Shoulder Problems</h3>
              <p className="text-neutralDark/80 mb-3">If your ribs don't rotate and expand properly, your shoulder blade can't move correctly. Your shoulder compensates for every reach, every press, every pull. Eventually, you get impingement, rotator cuff issues, or frozen shoulder.</p>
              <p className="text-sm text-neutralDark/60 italic">The problem is rib mobility, but the pain is in the shoulder. PT for the shoulder won't fix it.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Tight Calves → Plantar Fasciitis</h3>
              <p className="text-neutralDark/80 mb-3">If your calves are chronically tight, your foot has to compensate during every step. Your arch collapses, your plantar fascia overstretches, and eventually it gets inflamed and painful.</p>
              <p className="text-sm text-neutralDark/60 italic">The problem is calf tension (often from hip/back issues), but the pain is in the foot. Stretching helps temporarily.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-offWhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Why Traditional Treatment Fails</h2>
          <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
            Most treatment focuses on the symptom, the place that hurts. You get massage for your tight back, stretching for your tight hamstrings, strengthening exercises for your weak knee. And it helps... temporarily.
          </p>
          <p className="text-lg text-neutralDark/80 leading-relaxed mb-8">
            But the relief doesn't last because you're not addressing the compensation pattern. You're treating the symptom, not the cause.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-red-200">
              <h3 className="text-xl font-semibold text-red-600 mb-4">❌ Treating Symptoms</h3>
              <ul className="space-y-3 text-neutralDark/80">
                <li className="flex items-start gap-2">
                  <span>→</span>
                  <span>Massage for tight muscles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>→</span>
                  <span>Pain medication for inflammation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>→</span>
                  <span>Stretching for tightness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>→</span>
                  <span>Strengthening for weakness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>→</span>
                  <span>Ice/heat for pain</span>
                </li>
              </ul>
              <p className="mt-4 text-sm italic text-neutralDark/60">These provide temporary relief but don't change the pattern.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-200">
              <h3 className="text-xl font-semibold text-green-600 mb-4">✓ Addressing Causes</h3>
              <ul className="space-y-3 text-neutralDark/80">
                <li className="flex items-start gap-2">
                  <span>→</span>
                  <span>Release restrictions creating compensation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>→</span>
                  <span>Restore proper alignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>→</span>
                  <span>Change movement patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>→</span>
                  <span>Teach self-maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>→</span>
                  <span>Build quality movement</span>
                </li>
              </ul>
              <p className="mt-4 text-sm italic text-neutralDark/60">These create lasting change by fixing the source.</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">The Cascade Effect</h3>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              Compensation patterns cascade. One restriction creates a compensation, which creates stress elsewhere, which creates another compensation. Before long, you have multiple problems.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              This is why fixing one thing often improves seemingly unrelated issues. When we release a hip restriction, your back pain might improve. When we improve your shoulder alignment, your neck pain might disappear. Everything is connected.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 px-4 bg-neutralLight">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How to Spot Compensation in Yourself</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <span className="text-accent text-2xl font-bold">•</span>
              <div>
                <p className="text-lg text-neutralDark/80"><strong className="text-primary">Pain that moves around.</strong> If your pain shows up in different places, your body is compensating in multiple ways.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-accent text-2xl font-bold">•</span>
              <div>
                <p className="text-lg text-neutralDark/80"><strong className="text-primary">Treatment helps temporarily.</strong> If massage, stretching, or chiropractic feels good but the problem returns, you're treating symptoms, not causes.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-accent text-2xl font-bold">•</span>
              <div>
                <p className="text-lg text-neutralDark/80"><strong className="text-primary">One side is tighter than the other.</strong> Asymmetry is a sign of compensation. Your body is favoring one side.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-accent text-2xl font-bold">•</span>
              <div>
                <p className="text-lg text-neutralDark/80"><strong className="text-primary">You feel "stuck" or "locked up."</strong> If certain movements feel impossible or restricted, something is limiting your movement.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-accent text-2xl font-bold">•</span>
              <div>
                <p className="text-lg text-neutralDark/80"><strong className="text-primary">You have to "warm up" to feel normal.</strong> If you're stiff in the morning or after sitting, your body is holding tension to stabilize around a compensation.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-accent text-2xl font-bold">•</span>
              <div>
                <p className="text-lg text-neutralDark/80"><strong className="text-primary">Strengthening doesn't help.</strong> If you've tried strengthening exercises but the problem persists, the issue isn't weakness, it's compensation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-offWhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">How We Address Compensation</h2>
          <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
            We don't just treat the symptom (the pain). We address the cause (the restriction, alignment issue, or movement pattern that's creating the compensation).
          </p>
          <p className="text-lg text-neutralDark/80 leading-relaxed mb-8">
            That means structural work to release restrictions, alignment work to improve organization, and movement education to change patterns. Learn about <Link to="/upgrade-your-body-software" className="text-accent hover:underline font-semibold">upgrading your body's software</Link>.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">1. Assessment</h3>
              <p className="text-neutralDark/80">We identify the compensation patterns, the restrictions causing them, and the cascade effects. A <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> reveals the full picture.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">2. Structural Work</h3>
              <p className="text-neutralDark/80">We use <Link to="/what-is-structural-integration" className="text-accent hover:underline font-semibold">Structural Integration</Link> to release restrictions in the fascia, restore alignment, and give your body options it didn't have before.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">3. Movement Education</h3>
              <p className="text-neutralDark/80">We teach your body new patterns through <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline font-semibold">Movement Education</Link>. You learn how to move without compensation, and those patterns become automatic.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">4. Integration</h3>
              <p className="text-neutralDark/80">We give you tools to maintain the changes, simple practices that keep your body organized and prevent compensation patterns from returning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready to Address Your Compensation Patterns?</h2>
          <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
            A <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> will identify your compensation patterns, find the root causes, and create a clear plan to address them.
          </p>
          <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
        </div>
      </section>
    </PageLayout>
  );
}

export default WhatAreCompensationPatterns;

