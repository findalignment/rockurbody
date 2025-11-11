import ProgramPageTemplate from '../../components/ProgramPageTemplate';

function HipFreedomBasic() {
  const whatYouGet = [
    '4 Structural Integration sessions (60 minutes each)',
    '4 Movement Education sessions (60 minutes each)',
    '8 total sessions over 4-8 weeks',
    'Targeted hip work combining structure and movement',
    'Restore natural hip function and mobility'
  ];

  const accordionSections = [
    {
      title: 'What is Hip Freedom?',
      content: (
        <>
          <p className="mb-4">
            Hip Freedom is a comprehensive hip program combining Structural Integration (hands-on fascia work) with Movement Education (personalized training). We address both WHY your hips don't move well (structure) and HOW to move them better (function).
          </p>
          <p className="mb-4">
            The Basic program includes 4 SI sessions to release hip restrictions and 4 movement sessions to teach your body new patterns. This combination creates lasting change—not just temporary relief.
          </p>
          <p>
            Think of it as the Hip Series plus movement education. Structure + Function = results that hold.
          </p>
        </>
      )
    },
    {
      title: 'How Does It Work?',
      content: (
        <>
          <p className="mb-4">
            <strong>4 SI Sessions:</strong> We work with the fascia around your hips—hip flexors, glutes, lateral hip, deep rotators, IT band. This releases restrictions and improves tissue organization. You'll feel immediate changes in hip mobility.
          </p>
          <p className="mb-4">
            <strong>4 Movement Sessions:</strong> We teach you how to use your newly mobile hips. Squat patterns. Hip hinging. Single-leg stability. Core control. Functional strength. These sessions reinforce the structural work so changes last.
          </p>
          <p>
            Sessions alternate between SI and movement. This gives your body time to integrate structural changes while learning new movement patterns.
          </p>
        </>
      )
    },
    {
      title: 'Who Is This For?',
      content: (
        <>
          <p className="mb-4">
            Hip Freedom Basic is perfect if you:
          </p>
          <ul className="mb-4 space-y-2 ml-6 list-disc">
            <li>Have chronic hip pain, stiffness, or restrictions</li>
            <li>Sit at a desk all day and feel tight hips</li>
            <li>Want both hands-on work and movement training</li>
            <li>Need hip work but also want to learn how to move better</li>
            <li>Prefer a comprehensive approach over just bodywork</li>
          </ul>
          <p>
            If you want more extensive movement work, check out Hip Freedom Extended (12 sessions total).
          </p>
        </>
      )
    }
  ];

  const similarPrograms = [
    {
      name: 'Hip Freedom - Extended',
      price: 1920,
      description: '6 SI + 6 Movement. More comprehensive.',
      link: '/programs/hip-freedom-extended',
      badge: 'POPULAR'
    },
    {
      name: 'The Reset',
      price: 990,
      description: '3 SI + 3 Movement. Shorter option.',
      link: '/programs/the-reset'
    },
    {
      name: 'Hip Series',
      price: 720,
      description: '4 SI sessions only. Structural focus.',
      link: '/programs/hip-series'
    }
  ];

  return (
    <ProgramPageTemplate
      programName="Hip Freedom Basic"
      tagline="Reclaim How Your Hips Are Meant to Move"
      price={1320}
      whatYouGet={whatYouGet}
      accordionSections={accordionSections}
      stripeLink="https://buy.stripe.com/dRm6oH1hR6ph3xf1wSefC07"
      similarPrograms={similarPrograms}
    />
  );
}

export default HipFreedomBasic;

