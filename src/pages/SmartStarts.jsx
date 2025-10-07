import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import PaymentButton from '../components/PaymentButton';
import Button from '../components/Button';

function SmartStarts() {
  const [selectedCard, setSelectedCard] = useState(null);

  const packages = [
    {
      id: 'reset',
      name: 'The Reset',
      tagline: 'Get back on track',
      price: 990,
      sessions: '6 sessions',
      breakdown: '3 SI + 3 Movement',
      duration: '60 minutes each',
      totalSessions: 6,
      description: 'Life knocked you off balance. Work, stress, or just time took you away from feeling good in your body. The Reset is your way back.',
      ideal: [
        'You used to feel better and want that back',
        'You need a clear starting point',
        'You want to understand what your body needs',
        'You\'re ready to invest in yourself, but want to start focused'
      ],
      outcomes: [
        'Relief from tension patterns',
        'Improved posture and awareness',
        'Foundation for ongoing work',
        'Clear next steps for your body'
      ],
      icon: '🔄',
      color: 'sage'
    },
    {
      id: 'hip',
      name: 'Hip Series',
      tagline: 'Freedom where you need it most',
      price: 720,
      sessions: '4 sessions',
      breakdown: 'Targeted hip work',
      duration: 'Focused sessions',
      totalSessions: 4,
      description: 'Your hips carry everything.your posture, your gait, your story. When they\'re stuck, everything else compensates. This series gets them moving again.',
      ideal: [
        'Hip pain or tightness affecting your life',
        'Limited mobility in your lower body',
        'Interested in SI but want to start focused',
        'Looking for an intro to structural work'
      ],
      outcomes: [
        'Increased hip mobility and ease',
        'Reduced compensatory patterns',
        'Better understanding of your structure',
        'Foundation for deeper work if desired'
      ],
      icon: '🦵',
      color: 'accent'
    },
    {
      id: 'repatterning',
      name: 'Full Repatterning',
      tagline: 'Complete transformation',
      price: 3720,
      sessions: '24 sessions',
      breakdown: '12 SI + 12 Movement',
      duration: '60 minutes each',
      totalSessions: 24,
      description: 'This isn\'t a tune.up.it\'s a complete rebuild. For when you\'re ready to fundamentally change how your body works, feels, and moves through life.',
      ideal: [
        'Chronic issues that won\'t resolve with other approaches',
        'Ready for significant, lasting change',
        'Want both structural and movement transformation',
        'Committed to the full journey'
      ],
      outcomes: [
        'Complete structural realignment',
        'New movement patterns that last',
        'Deep understanding of your body',
        'Foundation for lifelong wellbeing'
      ],
      icon: '✨',
      color: 'highlight',
      popular: true
    }
  ];

  return (
    <PageLayout>
      <PageHero 
        imageSrc="/smart.starts.hero.jpg"
        title="Smart Starts"
        subtitle="The right beginning for your body"
      />

      {/* Intro */}
      <div className="bg-offWhite pt-8 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-neutralDark/80 leading-relaxed">
            Starting something new with your body shouldn't feel overwhelming. These programs offer clear entry points for <strong>structural integration in Santa Cruz</strong>, <strong>movement education</strong>, and <strong>personalized exercise instruction</strong>. Each one meets you where you are and takes you where you want to go.
          </p>
        </div>
      </div>

      {/* Empathetic intro */}
      <div className="bg.white py.16 px.4">
        <div className="max.w.3xl mx.auto">
          <p className="text.2xl md:text.3xl font.heading text.primary text.center leading.relaxed mb.8">
            Not sure where to start?<br />
            You're not alone.
          </p>
          <p className="text.lg text.neutralDark/80 leading.relaxed text.center">
            Most people come to this work because something isn't working anymore. Maybe it's pain that won't quit, movement that feels stuck, or just a sense that your body could feel better. Whatever brought you here, these three programs are designed as clear starting points.each one addressing different needs, timelines, and goals.
          </p>
        </div>
      </div>

      {/* Interactive Cards */}
      <div className="bg.gradient.to.b from.white to.offWhite py.20 px.4">
        <div className="max.w.6xl mx.auto">
          <div className="grid grid.cols.1 md:grid.cols.3 gap.8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => setSelectedCard(selectedCard === pkg.id ? null : pkg.id)}
                className={`
                  relative bg.white rounded.2xl p.8 shadow.sm cursor.pointer
                  transition.all duration.500 transform
                  ${selectedCard === pkg.id 
                    ? 'scale.105 shadow.2xl border.2 border.accent z.10' 
                    : 'border.2 border.neutralLight hover:border.accent/50 hover:shadow.lg'
                  }
                  ${pkg.popular ? 'md:.mt.4' : ''}
                `}
              >
                {pkg.popular && (
                  <div className="absolute .top.4 left.1/2 transform .translate.x.1/2 bg.accent text.white px.6 py.1 rounded.full text.sm font.bold">
                    MOST POPULAR
                  </div>
                )}

                {/* Header */}
                <div className="text.center mb.6">
                  <div className="text.6xl mb.4">{pkg.icon}</div>
                  <h3 className="text.2xl font.heading text.primary mb.2">
                    {pkg.name}
                  </h3>
                  <p className="text.lg text.accent italic mb.4">
                    {pkg.tagline}
                  </p>
                  <div className="text.4xl font.bold text.primary mb.2">
                    ${pkg.price.toLocaleString()}
                  </div>
                  <p className="text.sm text.neutralDark/60">{pkg.sessions}</p>
                  <p className="text.sm text.neutralDark/60">{pkg.breakdown}</p>
                </div>

                {/* Expandable Content */}
                <div className={`
                  transition.all duration.500 overflow.hidden
                  ${selectedCard === pkg.id ? 'max.h.[1000px] opacity.100' : 'max.h.0 opacity.0'}
                `}>
                  <div className="border.t border.neutralLight pt.6 mb.6">
                    <p className="text.base text.neutralDark/80 leading.relaxed mb.6">
                      {pkg.description}
                    </p>

                    <div className="mb.6">
                      <h4 className="text.sm font.semibold text.primary mb.3 uppercase tracking.wide">
                        This is for you if:
                      </h4>
                      <ul className="space.y.2">
                        {pkg.ideal.map((item, i) => (
                          <li key={i} className="flex items.start gap.2 text.sm text.neutralDark/70">
                            <span className="text.accent mt.1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb.6">
                      <h4 className="text.sm font.semibold text.primary mb.3 uppercase tracking.wide">
                        What to expect:
                      </h4>
                      <ul className="space.y.2">
                        {pkg.outcomes.map((item, i) => (
                          <li key={i} className="flex items.start gap.2 text.sm text.neutralDark/70">
                            <span className="text.sage mt.1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <PaymentButton
                    packageType={pkg.name}
                    totalSessions={pkg.totalSessions}
                    amount={pkg.price}
                    className="w.full bg.accent text.white px.6 py.3 rounded.xl font.semibold hover:bg.accent/90 transition.colors border border.black"
                  >
                    Start {pkg.name}
                  </PaymentButton>
                </div>

                {/* Click indicator when collapsed */}
                {selectedCard !== pkg.id && (
                  <div className="text.center pt.4 border.t border.neutralLight mt.6">
                    <span className="text.sm text.accent font.semibold">
                      Click to learn more →
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rhythmic storytelling transition */}
      <div className="bg.offWhite py.16 px.4">
        <div className="max.w.3xl mx.auto text.center space.y.8">
          <p className="text.xl md:text.2xl font.light text.neutralDark/80 leading.relaxed">
            Every body is different.
          </p>
          <p className="text.xl md:text.2xl font.light text.neutralDark/80 leading.relaxed">
            Every path is unique.
          </p>
          <p className="text.2xl md:text.3xl font.heading text.primary leading.relaxed">
            But everyone needs a place to <em className="text.accent">start</em>.
          </p>
        </div>
      </div>

      {/* Still not sure? */}
      <div className="bg.white py.20 px.4">
        <div className="max.w.2xl mx.auto text.center">
          <h3 className="text.3xl font.heading text.primary mb.6">
            Still not sure which path is right?
          </h3>
          <p className="text.lg text.neutralDark/80 mb.8 leading.relaxed">
            Let's talk. A free consultation helps us figure out together what makes sense for your body, your goals, and your life right now.
          </p>
          <Button
            href="https://cal.com/rockyourbody/consultation"
            variant="primary"
            size="lg"
          >
            Book Free Consultation
          </Button>
        </div>
      </div>

      {/* SEO footer content */}
      <div className="bg.offWhite py.12 px.4">
        <div className="max.w.4xl mx.auto">
          <h3 className="text.2xl font.heading text.primary mb.4 text.center">
            Why Choose Movement Education & Structural Integration in Santa Cruz?
          </h3>
          <p className="text.base text.neutralDark/70 leading.relaxed text.center">
            Whether you're seeking relief from chronic pain, improved athletic performance, or simply want to feel more at home in your body, these programs combine the best of hands.on <strong>structural integration</strong> and intelligent <strong>movement education</strong>. Located in Santa Cruz, I work with clients throughout the Bay Area who are ready to invest in lasting change.not quick fixes.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

export default SmartStarts;

