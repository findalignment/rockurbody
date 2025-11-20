import ProgramPageTemplate from '../../components/ProgramPageTemplate';

function FullRepatterningBasic() {
  const whatYouGet = [
    '12 Structural Integration sessions (60 minutes each)',
    '12 Movement Education sessions (60 minutes each)',
    '24 total sessions over 12+ weeks',
    'Complete body scan and movement reset',
    'Weekly hands-on SI sessions',
    'Mid-week check-ins if desired (yes, I answer messages 👍)',
    'Full structural and functional transformation'
  ];

  const accordionSections = [
    {
      title: 'What is Full Repatterning Basic?',
      content: (
        <>
          <p className="mb-4">
            Full Repatterning Basic is the foundational tier of the complete transformation program. It combines the full 12-Series Structural Integration protocol with 12 Movement Education sessions.
          </p>
          <p className="mb-4">
            This is 12 weeks of systematic work to reorganize your structure and teach your body how to move well. You get the complete SI protocol (all 12 sessions) plus equal movement work to reinforce it.
          </p>
          <p>
            Basic uses 60-minute SI sessions. If you want deeper work with 90-minute SI sessions, check out the Premium tier.
          </p>
        </>
      )
    },
    {
      title: 'How Does It Work?',
      content: (
        <>
          <p className="mb-4">
            <strong>12 SI Sessions (60 min each):</strong> We work through the complete Anatomy Trains protocol. Sessions 1-4 address superficial layers. Sessions 5-8 go deep (core, spine, head, neck). Sessions 9-12 integrate everything.
          </p>
          <p className="mb-4">
            <strong>12 Movement Sessions (60 min each):</strong> One-on-one training that teaches you how to move better. We work on strength, core stability, mobility, coordination, and functional movement based on what your body needs.
          </p>
          <p className="mb-4">
            <strong>The Schedule:</strong> Typically one SI session per week, with one movement session between. This gives your body time to integrate structural changes while reinforcing them with better movement.
          </p>
          <p>
            <strong>Support:</strong> You get mid-week check-ins if desired. I answer messages. This isn't transactional-it's a partnership.
          </p>
        </>
      )
    },
    {
      title: 'Who Is This For?',
      content: (
        <>
          <p className="mb-4">
            Full Repatterning Basic is for people who:
          </p>
          <ul className="mb-4 space-y-2 ml-6 list-disc">
            <li>Want comprehensive transformation but prefer 60-minute SI sessions</li>
            <li>Are ready to commit to 12+ weeks of systematic work</li>
            <li>Want equal emphasis on structure (SI) and function (movement)</li>
            <li>Value the complete 12-Series plus movement reinforcement</li>
            <li>Are looking for the most accessible Full Repatterning option</li>
          </ul>
          <p>
            If you want longer SI sessions (90 min) for deeper work, check out Premium. If you want more movement sessions for extra reinforcement, check out Ultimate.
          </p>
        </>
      )
    },
    {
      title: 'Basic vs. Premium vs. Ultimate',
      content: (
        <>
          <p className="mb-4">
            <strong>Basic:</strong> 12 SI (60 min) + 12 Movement (60 min) = 24 sessions total. Best for people who want the complete protocol with equal SI and movement work.
          </p>
          <p className="mb-4">
            <strong>Premium:</strong> 12 SI (90 min) + 24 Movement (60 min) = 36 sessions total. Longer SI sessions allow deeper work. Double the movement sessions for better reinforcement. Most popular option.
          </p>
          <p className="mb-4">
            <strong>Ultimate:</strong> 12 SI (90 min) + 36 Movement (60 min) = 48 sessions total. Maximum support and practice time. Best for people who want the most comprehensive transformation.
          </p>
          <p>
            Basic is the most accessible option and still delivers complete transformation. If budget allows, Premium offers deeper SI work and more movement reinforcement.
          </p>
        </>
      )
    }
  ];

  const similarPrograms = [
    {
      name: 'Full Repatterning - Premium',
      price: 5400,
      description: '12 SI (90min) + 24 Movement. Deeper work.',
      link: '/programs/full-repatterning-premium',
      badge: 'POPULAR'
    },
    {
      name: 'Hip Freedom - Extended',
      price: 1920,
      description: '6 SI + 6 Movement. More affordable.',
      link: '/programs/hip-freedom-extended'
    },
    {
      name: '12-Series',
      price: 3000,
      description: '12 SI only. Structural focus.',
      link: '/programs/12-series'
    }
  ];

  return (
    <ProgramPageTemplate
      programName="Full Repatterning Basic"
      tagline="Complete 12-Week Transformation"
      price={3720}
      whatYouGet={whatYouGet}
      accordionSections={accordionSections}
      stripeLink="https://buy.stripe.com/3cI9ATf8H3d50l32AWefC09"
      similarPrograms={similarPrograms}
    />
  );
}

export default FullRepatterningBasic;

