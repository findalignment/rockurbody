import ProgramPageTemplate from '../../components/ProgramPageTemplate';

function FullRepatterningUltimate() {
  const whatYouGet = [
    '12 Structural Integration sessions (90 minutes each)',
    '36 Movement Education sessions (60 minutes each)',
    '48 total sessions over 12+ weeks',
    'Maximum support and transformation',
    'Deep SI work with extensive movement reinforcement',
    'Weekly hands-on sessions plus frequent movement practice',
    'Mid-week check-ins and ongoing support',
    'Surprise mobility hacks sent to program members only'
  ];

  const accordionSections = [
    {
      title: 'What is Full Repatterning Ultimate?',
      content: (
        <>
          <p className="mb-4">
            Full Repatterning Ultimate is the most comprehensive transformation program available. It combines the complete 12-Series Structural Integration protocol (90-minute sessions for deeper work) with 36 Movement Education sessions.
          </p>
          <p className="mb-4">
            This is 12+ weeks of intensive, systematic work with maximum support. You get deep structural work (90-min SI sessions) plus triple the movement practice of the Basic program. This is for people who want the absolute best results and are willing to invest the time.
          </p>
          <p>
            Ultimate is the most transformative option because of the sheer volume of practice time and support. More sessions = more progress = better retention.
          </p>
        </>
      )
    },
    {
      title: 'How Does It Work?',
      content: (
        <>
          <p className="mb-4">
            <strong>12 SI Sessions (90 min each):</strong> Extended sessions allow us to go deeper, work more areas, and ensure better integration. We work through the complete Anatomy Trains protocol systematically over 12 weeks.
          </p>
          <p className="mb-4">
            <strong>36 Movement Sessions (60 min each):</strong> Three times the movement work of the Basic program. This means more practice time, more progression, more skill development. We can address every aspect of movement-strength, mobility, stability, coordination, functional patterns.
          </p>
          <p className="mb-4">
            <strong>The Schedule:</strong> Typically one 90-minute SI session per week, plus 2-3 movement sessions per week. This creates consistent, frequent practice that accelerates progress and ensures changes stick.
          </p>
          <p>
            <strong>Support:</strong> Mid-week check-ins, message support, surprise mobility hacks sent to program members. You're fully supported throughout the process.
          </p>
        </>
      )
    },
    {
      title: 'Who Is This For?',
      content: (
        <>
          <p className="mb-4">
            Full Repatterning Ultimate is for people who:
          </p>
          <ul className="mb-4 space-y-2 ml-6 list-disc">
            <li>Want maximum transformation and are willing to invest the time</li>
            <li>Value extensive movement practice for skill development</li>
            <li>Are recovering from significant limitations or injuries</li>
            <li>Want to optimize athletic performance at the highest level</li>
            <li>Prefer frequent sessions (3-4x per week) over spread-out programs</li>
            <li>Are serious about creating lasting, dramatic change</li>
          </ul>
          <p>
            This program requires real commitment-not just financially, but in terms of time and effort. If you're ready for that level of investment, Ultimate delivers unmatched results.
          </p>
        </>
      )
    },
    {
      title: 'Why Choose Ultimate?',
      content: (
        <>
          <p className="mb-4">
            More practice time = better results. It's that simple. The Ultimate program gives you 48 total sessions-more than double the Basic program. This means more opportunities to learn, practice, refine, and progress.
          </p>
          <p className="mb-4">
            With 36 movement sessions, we can work on everything. Not just the basics-advanced patterns, sport-specific skills, complex coordination, high-level strength work. By the end, you're moving at a completely different level.
          </p>
          <p className="mb-4">
            The 90-minute SI sessions (vs. 60-minute in Basic) allow deeper work and better integration. Combined with extensive movement practice, this creates transformation that most people don't think is possible.
          </p>
          <p>
            If you want the absolute best results and are willing to commit fully to the process, Ultimate is the way.
          </p>
        </>
      )
    }
  ];

  const similarPrograms = [
    {
      name: 'Full Repatterning - Premium',
      price: 5400,
      description: '12 SI (90min) + 24 Movement. Most popular.',
      link: '/programs/full-repatterning-premium',
      badge: 'POPULAR'
    },
    {
      name: 'Full Repatterning - Basic',
      price: 3720,
      description: '12 SI (60min) + 12 Movement. More affordable.',
      link: '/programs/full-repatterning-basic'
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
      programName="Full Repatterning Ultimate"
      tagline="Maximum Transformation & Support"
      price={7200}
      whatYouGet={whatYouGet}
      accordionSections={accordionSections}
      stripeLink="https://buy.stripe.com/14A4gz7Gf7tlgk1a3oefC0b"
      similarPrograms={similarPrograms}
    />
  );
}

export default FullRepatterningUltimate;

