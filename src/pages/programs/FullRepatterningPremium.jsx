import ProgramPageTemplate from '../../components/ProgramPageTemplate';

function FullRepatterningPremium() {
  const whatYouGet = [
    '12 Structural Integration sessions (90 minutes each)',
    '24 Movement Education sessions (60 minutes each)',
    '36 total sessions over 12+ weeks',
    'Complete body scan and movement reset',
    'Weekly hands-on SI sessions',
    'Mid-week check-ins if desired (yes, I answer messages 👍)',
    'Surprise mobility hacks sent to program members only',
    'Deep integration work for optimal results'
  ];

  const accordionSections = [
    {
      title: 'What is Full Repatterning Premium?',
      content: (
        <>
          <p className="mb-4">
            Full Repatterning Premium is the comprehensive program for people who want lasting transformation. It combines the complete 12-Series Structural Integration protocol with 24 sessions of Movement Education.
          </p>
          <p className="mb-4">
            This isn't a quick fix. It's 12+ weeks of systematic work to reorganize your structure and teach your body how to move well. You're not just buying sessions-you're buying freedom from stiff-body days and movement that works.
          </p>
          <p>
            The Premium tier includes 90-minute SI sessions (vs. 60-minute in Basic), which allows for deeper work and better integration. Most practitioners recommend 90-minute sessions for optimal results.
          </p>
        </>
      )
    },
    {
      title: 'How Does It Work?',
      content: (
        <>
          <p className="mb-4">
            <strong>12 SI Sessions (90 minutes each):</strong> We work through the complete Anatomy Trains Structural Integration protocol. Sessions 1-4 address superficial layers (front, back, lateral, spiral lines). Sessions 5-8 go deep (core work, spine, head, neck). Sessions 9-12 integrate everything (lower body, upper body, arms, full wrap-up).
          </p>
          <p className="mb-4">
            <strong>24 Movement Sessions (60 minutes each):</strong> Between SI sessions, we work on movement quality. Not random exercises-specific patterns based on how your body moves and what needs attention. You'll learn strength, core stability, mobility, coordination, and functional movement.
          </p>
          <p className="mb-4">
            <strong>The Schedule:</strong> Typically one SI session per week, with 1-2 movement sessions between. This gives your body time to integrate structural changes while reinforcing them with better movement patterns.
          </p>
          <p>
            <strong>Support:</strong> You get mid-week check-ins if desired (I actually answer messages). Plus surprise mobility hacks I only send to program members. This isn't transactional-it's a partnership.
          </p>
        </>
      )
    },
    {
      title: 'Who Is This For?',
      content: (
        <>
          <p className="mb-4">
            Full Repatterning Premium is for people who:
          </p>
          <ul className="mb-4 space-y-2 ml-6 list-disc">
            <li>Want comprehensive, lasting transformation</li>
            <li>Are dealing with chronic pain or movement restrictions</li>
            <li>Have old injuries that still affect how they move</li>
            <li>Want to optimize athletic performance</li>
            <li>Are tired of "band-aid" solutions and want real change</li>
            <li>Understand that quality work takes time and commitment</li>
            <li>Value deeper SI sessions (90 min) for better results</li>
          </ul>
          <p className="mb-4">
            This isn't for people looking for quick fixes or unwilling to commit to the process. It's for people ready to invest in their body and do the work.
          </p>
          <p>
            If you're serious about changing how your body works-not just treating symptoms-this is the program.
          </p>
        </>
      )
    },
    {
      title: 'What to Expect',
      content: (
        <>
          <p className="mb-4">
            <strong>Week 1-4: Foundation</strong><br />
            We start with the superficial layers and basic movement patterns. You'll feel changes immediately-better alignment, easier movement, less compensation. The movement work teaches you foundational patterns that support the structural changes.
          </p>
          <p className="mb-4">
            <strong>Week 5-8: Depth</strong><br />
            Now we go deeper. Core work, spine, deep fascial lines. The movement sessions become more challenging as we build on the foundation. Your body is learning a new organization.
          </p>
          <p className="mb-4">
            <strong>Week 9-12: Integration</strong><br />
            The final phase integrates everything. Your body has changed. Now we reinforce it with advanced movement patterns, functional strength, and real-world application. By the end, movement feels different-easier, more natural, more efficient.
          </p>
          <p>
            <strong>Results:</strong> Most people feel dramatic changes. Better posture. Less pain. Easier movement. More confidence in their body. The changes hold because we've addressed both structure (SI) and function (movement).
          </p>
        </>
      )
    },
    {
      title: 'Why Premium vs. Basic or Ultimate?',
      content: (
        <>
          <p className="mb-4">
            <strong>Premium vs. Basic:</strong> Basic includes 12 SI sessions at 60 minutes and 12 movement sessions. Premium includes 90-minute SI sessions (allowing deeper work) and 24 movement sessions (double the reinforcement). Most practitioners recommend 90-minute SI sessions for better integration. Premium also includes more movement sessions to reinforce the structural work.
          </p>
          <p className="mb-4">
            <strong>Premium vs. Ultimate:</strong> Ultimate includes 36 movement sessions (vs. 24 in Premium). If you want maximum support and practice time, Ultimate is best. But Premium offers the sweet spot-enough movement work to reinforce the SI without overwhelming your schedule.
          </p>
          <p>
            Premium is the most popular option because it balances depth (90-min SI), support (24 movement sessions), and practicality (doesn't require 3-4 sessions per week).
          </p>
        </>
      )
    },
    {
      title: 'How Long Do Results Last?',
      content: (
        <>
          <p className="mb-4">
            Full Repatterning creates lasting change. Unlike temporary fixes, we're reorganizing your structure and teaching your body new movement patterns. Most people maintain results for years.
          </p>
          <p className="mb-4">
            The combination of SI + Movement is key. SI changes your structure. Movement teaches you how to use that new structure. Together, they create change that holds.
          </p>
          <p>
            Many clients do tune-up sessions (SI or movement) every 6-12 months to maintain the work. Others continue with occasional movement sessions to keep progressing. But the foundation we build in these 12 weeks lasts.
          </p>
        </>
      )
    }
  ];

  const similarPrograms = [
    {
      name: 'Full Repatterning - Basic',
      price: 3720,
      description: '12 SI (60min) + 12 Movement. More affordable.',
      link: '/programs/full-repatterning-basic'
    },
    {
      name: 'Full Repatterning - Ultimate',
      price: 7200,
      description: '12 SI (90min) + 36 Movement. Maximum support.',
      link: '/programs/full-repatterning-ultimate'
    },
    {
      name: '12-Series',
      price: 3000,
      description: '12 SI sessions only. Structural focus.',
      link: '/programs/12-series'
    }
  ];

  return (
    <ProgramPageTemplate
      programName="Full Repatterning Premium"
      tagline="12 Weeks of Complete Transformation"
      price={5400}
      whatYouGet={whatYouGet}
      accordionSections={accordionSections}
      stripeLink="https://buy.stripe.com/6oU4gzgcLcNF4Bja3oefC0a"
      recommended={true}
      similarPrograms={similarPrograms}
    />
  );
}

export default FullRepatterningPremium;

