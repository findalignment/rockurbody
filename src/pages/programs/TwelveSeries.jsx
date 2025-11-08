import ProgramPageTemplate from '../../components/ProgramPageTemplate';

function TwelveSeries() {
  const whatYouGet = [
    '12 comprehensive Structural Integration sessions',
    'Complete Anatomy Trains protocol',
    'Systematic progression through your entire body',
    'Sessions 1-4: Superficial layers (front, back, lateral, spiral lines)',
    'Sessions 5-8: Deep core work (lower, upper, back, head & neck)',
    'Sessions 9-12: Full integration (lower, upper, arms, wrapping it together)',
    'Life-changing structural transformation'
  ];

  const accordionSections = [
    {
      title: 'What is the 12-Series?',
      content: (
        <>
          <p className="mb-4">
            The 12-Series is the complete Anatomy Trains Structural Integration protocol. It's not random bodywork. It's a systematic, proven approach to reorganizing your entire structure over 12 sessions.
          </p>
          <p className="mb-4">
            Think of it as a full-body tune-up. We work through your fascia (connective tissue) layer by layer, line by line, to improve alignment, reduce compensation patterns, and restore natural movement.
          </p>
          <p>
            This isn't about treating symptoms. It's about changing how your body is organized so it works better. Most people feel more aligned, move more easily, and experience less pain after completing the series.
          </p>
        </>
      )
    },
    {
      title: 'How Does It Work?',
      content: (
        <>
          <p className="mb-4">
            <strong>Sessions 1-4: Superficial Layers</strong><br />
            We start with the outer layers of fascia. Session 1 addresses the front line (chest, abdomen, thighs). Session 2 works the back line (back, hamstrings, calves). Session 3 targets the lateral line (sides of body). Session 4 integrates the spiral line (rotation and twist patterns).
          </p>
          <p className="mb-4">
            <strong>Sessions 5-8: Deep Core</strong><br />
            Now we go deeper. Session 5 and 6 work the deep front line from feet to head. Session 7 addresses the deep back (spine, sacrum). Session 8 focuses on the head, neck, and jaw.
          </p>
          <p>
            <strong>Sessions 9-12: Integration</strong><br />
            The final four sessions integrate everything. We work the lower body, upper body, arms, and finish by wrapping it all together. Your body learns its new organization and movement patterns become easier.
          </p>
        </>
      )
    },
    {
      title: 'Who Is This For?',
      content: (
        <>
          <p className="mb-4">
            The 12-Series is for anyone dealing with:
          </p>
          <ul className="mb-4 space-y-2 ml-6 list-disc">
            <li>Chronic pain or stiffness</li>
            <li>Poor posture from desk work</li>
            <li>Movement restrictions or limited range of motion</li>
            <li>Old injuries that still affect how you move</li>
            <li>Athletic performance plateaus</li>
            <li>Wanting to move better as you age</li>
          </ul>
          <p>
            You don't need to be "broken" to benefit. Many clients come because they want to move better, prevent future issues, or optimize their body's function. If you have a body, this work can help.
          </p>
        </>
      )
    },
    {
      title: 'What to Expect',
      content: (
        <>
          <p className="mb-4">
            <strong>Session Length:</strong> Each session is 60-90 minutes (90 minutes recommended for deeper work and better integration).
          </p>
          <p className="mb-4">
            <strong>Frequency:</strong> Sessions are typically scheduled 1-2 weeks apart. This gives your body time to integrate the work between sessions.
          </p>
          <p className="mb-4">
            <strong>What Happens:</strong> You'll lie on a massage table while I work with your fascia using hands-on techniques. The pressure is specific and intentional. It shouldn't hurt, but you'll feel sensation as we release restricted tissue.
          </p>
          <p>
            <strong>Results:</strong> Most people notice changes immediately. Some feel looser, taller, or more balanced after just one session. The real transformation happens as the series progresses and your body learns its new organization.
          </p>
        </>
      )
    },
    {
      title: 'How Long Do Results Last?',
      content: (
        <>
          <p className="mb-4">
            Structural Integration creates lasting change. Unlike massage (which addresses muscle tension temporarily), SI reorganizes your fascia and alignment. Most people maintain results for years.
          </p>
          <p className="mb-4">
            Your body learns a new organization. That said, if you go back to old movement patterns or don't maintain your structure, some patterns can creep back.
          </p>
          <p>
            Many clients do tune-up sessions every 6-12 months to maintain the work. Others combine the 12-Series with ongoing Movement Education to reinforce new patterns.
          </p>
        </>
      )
    },
    {
      title: 'Why Choose the 12-Series?',
      content: (
        <>
          <p className="mb-4">
            The 12-Series is the gold standard of Structural Integration. It's comprehensive, systematic, and proven. While shorter programs (like the Hip Series) can address specific issues, the 12-Series addresses your entire structure.
          </p>
          <p className="mb-4">
            This is the program most practitioners recommend for lasting, whole-body transformation. It's an investment in how you move for the rest of your life.
          </p>
          <p>
            If you're ready to change how your body works—not just treat symptoms—this is the program.
          </p>
        </>
      )
    }
  ];

  return (
    <ProgramPageTemplate
      programName="12-Series"
      tagline="Complete Structural Integration Protocol"
      price={3000}
      whatYouGet={whatYouGet}
      accordionSections={accordionSections}
      stripeLink="https://buy.stripe.com/00w7sLbWv4h9ffX4J4efC06"
      recommended={true}
    />
  );
}

export default TwelveSeries;

