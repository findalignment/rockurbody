import ProgramPageTemplate from '../../components/ProgramPageTemplate';

function Movement10Sessions() {
  const whatYouGet = [
    '10 Movement Education sessions (60 minutes each)',
    'Save 15% off single-session pricing',
    'Personalized movement training based on your body',
    'Flexible scheduling over 10+ weeks',
    'Best value for consistent progress'
  ];

  const accordionSections = [
    {
      title: 'What is Movement Education?',
      content: (
        <>
          <p className="mb-4">
            Movement Education is intelligent, personalized training that teaches you how to move better. Not generic workouts—specific patterns based on how your body actually moves.
          </p>
          <p className="mb-4">
            We focus on quality over quantity. Foundation over flashy exercises. You'll learn strength, core stability, mobility, coordination, awareness, balance, and flexibility. But we start with the basics and build systematically.
          </p>
          <p>
            This isn't about crushing yourself. It's about moving well. The workouts are challenging but sustainable—you won't feel deterred from training.
          </p>
        </>
      )
    },
    {
      title: 'What Happens in a Session?',
      content: (
        <>
          <p className="mb-4">
            Each 60-minute session is one-on-one. We start with movement assessment—how does your body move right now? Where are the restrictions, compensations, or weak links?
          </p>
          <p className="mb-4">
            Then we work on specific patterns. Maybe we're building core stability. Maybe we're improving hip mobility. Maybe we're teaching you how to squat without your knees caving in. Every session is tailored to what your body needs.
          </p>
          <p>
            We often train barefoot (your feet are your foundation). Exercises progress based on your ability—not someone else's program. Sessions are structured but adaptive.
          </p>
        </>
      )
    },
    {
      title: 'Who Is This For?',
      content: (
        <>
          <p className="mb-4">
            The 10-session package is perfect if you:
          </p>
          <ul className="mb-4 space-y-2 ml-6 list-disc">
            <li>Want consistent training without a huge commitment</li>
            <li>Need to improve movement quality and patterns</li>
            <li>Are recovering from injury or dealing with limitations</li>
            <li>Want to complement your current training</li>
            <li>Are tired of generic workout programs</li>
            <li>Want to learn how your body actually works</li>
          </ul>
          <p>
            This package offers the best balance of savings (15% off) and commitment. It's enough sessions to see real progress without overwhelming your schedule.
          </p>
        </>
      )
    },
    {
      title: 'How Often Should I Train?',
      content: (
        <>
          <p className="mb-4">
            Most clients train 1-2 times per week. Some do 3 times if they're working on specific goals or recovering from injury.
          </p>
          <p className="mb-4">
            The 10-session package gives you flexibility. Want to train twice a week for 5 weeks? Great. Once a week for 10 weeks? Also great. We schedule based on what works for you and your goals.
          </p>
          <p>
            Consistency matters more than frequency. Regular sessions (even once a week) create better results than sporadic intense periods.
          </p>
        </>
      )
    },
    {
      title: 'Can I Combine This with Other Programs?',
      content: (
        <>
          <p className="mb-4">
            Absolutely. Many clients combine Movement Education with Structural Integration work. The SI addresses structural restrictions. The movement work teaches you how to move better.
          </p>
          <p className="mb-4">
            You can also use this alongside your regular gym routine, sports training, or other activities. Movement Education makes everything else work better because you're moving from a better foundation.
          </p>
          <p>
            If you want SI + Movement combined, check out The Reset, Hip Freedom, or Full Repatterning programs.
          </p>
        </>
      )
    }
  ];

  return (
    <ProgramPageTemplate
      programName="10 Movement Sessions"
      tagline="Personalized Training for Better Movement"
      price={1530}
      whatYouGet={whatYouGet}
      accordionSections={accordionSections}
      stripeLink="https://buy.stripe.com/14A6oHbWv00T3xf8ZkefC02"
      recommended={true}
    />
  );
}

export default Movement10Sessions;

