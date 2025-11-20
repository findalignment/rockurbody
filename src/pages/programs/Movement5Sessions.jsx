import ProgramPageTemplate from '../../components/ProgramPageTemplate';

function Movement5Sessions() {
  const whatYouGet = [
    '5 Movement Education sessions (60 minutes each)',
    'Save 10% off single-session pricing',
    'Personalized movement training',
    'Flexible scheduling',
    'Great introduction to the work'
  ];

  const accordionSections = [
    {
      title: "What You'll Learn",
      content: (
        <>
          <p className="mb-4">
            In 5 sessions, we can make real progress on your movement quality. This isn't enough time for a complete transformation, but it's enough to learn the fundamentals and feel significantly better.
          </p>
          <p className="mb-4">
            We'll assess how you move, identify key restrictions or compensation patterns, and teach you better movement strategies. You'll walk away with tools you can use immediately.
          </p>
          <p>
            Think of this as the "try it and see" package. It's enough sessions to experience the work without a big commitment. Many clients start here and continue with longer packages once they feel the benefits.
          </p>
        </>
      )
    },
    {
      title: 'Who Is This For?',
      content: (
        <>
          <p className="mb-4">
            The 5-session package is perfect if you:
          </p>
          <ul className="mb-4 space-y-2 ml-6 list-disc">
            <li>Want to try Movement Education before committing to more sessions</li>
            <li>Need to address a specific issue or goal</li>
            <li>Are coming back after a break</li>
            <li>Want a short-term focus (prep for a race, recover from travel, etc.)</li>
          </ul>
          <p>
            It's also great as an add-on to other programs or as a tune-up if you've worked together before.
          </p>
        </>
      )
    },
    {
      title: 'What Happens Next?',
      content: (
        <>
          <p className="mb-4">
            After 5 sessions, you have options. Some people continue with another 5 or 10-session package. Others transition into a comprehensive program like The Reset or Full Repatterning.
          </p>
          <p className="mb-4">
            Or maybe 5 sessions is all you need right now. There's no pressure to continue-we'll reassess at the end and figure out what makes sense for your body and goals.
          </p>
          <p>
            The work meets you where you are and goes as far as you want to take it.
          </p>
        </>
      )
    }
  ];

  const similarPrograms = [
    {
      name: '10 Movement Sessions',
      price: 1530,
      description: 'Best value for real transformation. Save 15%.',
      link: '/programs/movement-10-sessions',
      badge: 'POPULAR'
    },
    {
      name: 'The Reset',
      price: 990,
      description: '3 SI + 3 Movement sessions. Quick reset.',
      link: '/programs/the-reset'
    },
    {
      name: '20 Movement Sessions',
      price: 2880,
      description: 'Maximum support. Save 20%.',
      link: '/programs/movement-20-sessions'
    }
  ];

  return (
    <ProgramPageTemplate
      programName="5 Movement Sessions"
      tagline="Start Moving Better"
      price={810}
      whatYouGet={whatYouGet}
      accordionSections={accordionSections}
      stripeLink="https://buy.stripe.com/fZu9AT1hR9Bt0l3fnIefC01"
      similarPrograms={similarPrograms}
    />
  );
}

export default Movement5Sessions;

