import ProgramPageTemplate from '../../components/ProgramPageTemplate';

function HipFreedomExtended() {
  const whatYouGet = [
    '6 Structural Integration sessions (60 minutes each)',
    '6 Movement Education sessions (60 minutes each)',
    '12 total sessions over 6-12 weeks',
    'Comprehensive hip transformation',
    'More movement work for better reinforcement and long-lasting results'
  ];

  const accordionSections = [
    {
      title: 'Why Extended vs. Basic?',
      content: (
        <>
          <p className="mb-4">
            Hip Freedom Extended gives you more of everything. 6 SI sessions (vs. 4 in Basic) allows us to work deeper and address more areas. 6 movement sessions (vs. 4 in Basic) gives you more time to learn and reinforce new patterns.
          </p>
          <p className="mb-4">
            The extra sessions make a big difference. We can progress further, address more complex patterns, and ensure changes stick. Most people see better long-term results with Extended because of the additional reinforcement.
          </p>
          <p>
            If your hip issues are significant or you want comprehensive transformation (not just relief), Extended is the better choice.
          </p>
        </>
      )
    },
    {
      title: 'What Will We Work On?',
      content: (
        <>
          <p className="mb-4">
            <strong>6 SI Sessions:</strong> We have time to work everything related to hip function-not just the hip itself. Hip flexors, glutes, deep rotators, IT band, hamstrings, adductors, plus related areas like the lower back, pelvis, and even feet (which affect hip mechanics).
          </p>
          <p className="mb-4">
            <strong>6 Movement Sessions:</strong> With double the movement work, we can progress from basics to advanced patterns. Foundational hip mobility. Squat and hinge patterns. Single-leg stability. Rotational control. Functional strength. Real-world application.
          </p>
          <p>
            By the end, your hips will move dramatically better and you'll have the skills to maintain the work.
          </p>
        </>
      )
    },
    {
      title: 'Who Is This For?',
      content: (
        <>
          <p className="mb-4">
            Hip Freedom Extended is for people who:
          </p>
          <ul className="mb-4 space-y-2 ml-6 list-disc">
            <li>Have significant hip restrictions or chronic pain</li>
            <li>Want comprehensive transformation, not just relief</li>
            <li>Value the extra movement sessions for better results</li>
            <li>Are serious about long-term change</li>
            <li>Want more time to learn and practice new patterns</li>
          </ul>
          <p>
            This is the most popular Hip Freedom option because it offers the right balance-enough SI to create real change, enough movement work to make it last.
          </p>
        </>
      )
    }
  ];

  const similarPrograms = [
    {
      name: 'Hip Freedom - Basic',
      price: 1320,
      description: '4 SI + 4 Movement. More affordable option.',
      link: '/programs/hip-freedom-basic'
    },
    {
      name: 'Full Repatterning - Basic',
      price: 3720,
      description: '12 SI + 12 Movement. Full body transformation.',
      link: '/programs/full-repatterning-basic'
    },
    {
      name: '12-Series',
      price: 3000,
      description: '12 SI sessions. Complete structural protocol.',
      link: '/programs/12-series'
    }
  ];

  return (
    <ProgramPageTemplate
      programName="Hip Freedom Extended"
      tagline="Comprehensive Hip Transformation"
      price={1920}
      whatYouGet={whatYouGet}
      accordionSections={accordionSections}
      stripeLink="https://buy.stripe.com/dRmaEXbWv8xpgk11wSefC08"
      recommended={true}
      similarPrograms={similarPrograms}
    />
  );
}

export default HipFreedomExtended;

