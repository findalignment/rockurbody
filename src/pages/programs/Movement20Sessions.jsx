import ProgramPageTemplate from '../../components/ProgramPageTemplate';

function Movement20Sessions() {
  const whatYouGet = [
    '20 Movement Education sessions (60 minutes each)',
    'Save 20% off single-session pricing (maximum savings)',
    'Personalized movement training',
    'Flexible scheduling over 20+ weeks',
    'Best value for long-term progress and transformation'
  ];

  const accordionSections = [
    {
      title: 'Why 20 Sessions?',
      content: (
        <>
          <p className="mb-4">
            20 sessions gives you serious time to transform how you move. This isn't just learning the basics—it's building a completely new movement foundation and making real, lasting progress.
          </p>
          <p className="mb-4">
            With 20 sessions, we can work systematically through your body's patterns, address multiple areas, and progress from foundations to advanced work. You'll see changes not just in how you train, but in how you move through daily life.
          </p>
          <p>
            Plus, you get the maximum savings (20% off). If you're committed to the work and ready to invest in long-term change, this package offers the best value.
          </p>
        </>
      )
    },
    {
      title: 'What Will We Work On?',
      content: (
        <>
          <p className="mb-4">
            Over 20 sessions, we have time to address everything. Core stability. Hip mobility. Shoulder function. Squat patterns. Single-leg stability. Rotational movement. Coordination. Balance. Strength. Flexibility.
          </p>
          <p className="mb-4">
            We start with foundations—how does your body move right now? What needs attention first? Then we build systematically. As your movement quality improves, we progress to more challenging patterns.
          </p>
          <p>
            By session 20, you'll move dramatically better than session 1. Your body will feel different—stronger, more capable, less restricted.
          </p>
        </>
      )
    },
    {
      title: 'Who Is This For?',
      content: (
        <>
          <p className="mb-4">
            The 20-session package is for people who:
          </p>
          <ul className="mb-4 space-y-2 ml-6 list-disc">
            <li>Want long-term transformation, not quick fixes</li>
            <li>Are serious about improving movement quality</li>
            <li>Value maximum savings (20% off)</li>
            <li>Want ongoing support and progression over months</li>
            <li>Are training for performance or recovering from significant limitations</li>
          </ul>
          <p>
            If you're committed to the process and ready to invest in yourself, this is the best value and most effective option.
          </p>
        </>
      )
    }
  ];

  const similarPrograms = [
    {
      name: '10 Movement Sessions',
      price: 1530,
      description: 'Best value package. Save 15%.',
      link: '/programs/movement-10-sessions',
      badge: 'POPULAR'
    },
    {
      name: 'Full Repatterning - Basic',
      price: 3720,
      description: '12 SI + 12 Movement. Complete transformation.',
      link: '/programs/full-repatterning-basic'
    },
    {
      name: 'Full Repatterning - Premium',
      price: 5400,
      description: '12 SI (90min) + 24 Movement. Ultimate program.',
      link: '/programs/full-repatterning-premium'
    }
  ];

  return (
    <ProgramPageTemplate
      programName="20 Movement Sessions"
      tagline="Maximum Savings, Maximum Progress"
      price={2880}
      whatYouGet={whatYouGet}
      accordionSections={accordionSections}
      stripeLink="https://buy.stripe.com/9B69AT1hR4h9d7P2AWefC03"
      similarPrograms={similarPrograms}
    />
  );
}

export default Movement20Sessions;

