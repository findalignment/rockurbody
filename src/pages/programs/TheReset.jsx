import ProgramPageTemplate from '../../components/ProgramPageTemplate';

function TheReset() {
  const whatYouGet = [
    '3 Structural Integration sessions (60 minutes each)',
    '3 Movement Education sessions (60 minutes each)',
    'Quick structural reset and movement foundation',
    'Perfect for getting back on track',
    'Great introduction to the work'
  ];

  const accordionSections = [
    {
      title: 'What is The Reset?',
      content: (
        <>
          <p className="mb-4">
            The Reset is a 6-session program combining hands-on Structural Integration with intelligent Movement Education. It's designed for people who need to reset their foundation without committing to a long program.
          </p>
          <p className="mb-4">
            Think of it as a tune-up. We address structural restrictions through SI, then teach you how to move better so those restrictions don't come back. Structure + Movement = lasting change.
          </p>
          <p>
            This isn't a full transformation (that's what the 12-Series or Full Repatterning are for). But it's enough to feel significantly better and get back to moving well.
          </p>
        </>
      )
    },
    {
      title: 'How Does It Work?',
      content: (
        <>
          <p className="mb-4">
            <strong>3 SI Sessions:</strong> We work with your fascia to release restrictions, improve alignment, and restore natural movement patterns. These sessions target the areas causing the most trouble-whether that's tight hips, restricted shoulders, or compensations from old injuries.
          </p>
          <p className="mb-4">
            <strong>3 Movement Sessions:</strong> We teach you how to move better. Not generic exercises-specific movement patterns based on how your body actually moves. You'll learn core stability, mobility, and quality movement that supports the structural work.
          </p>
          <p>
            Sessions alternate between SI and Movement. This gives your body time to integrate the structural changes while reinforcing them with better movement.
          </p>
        </>
      )
    },
    {
      title: 'Who Is This For?',
      content: (
        <>
          <p className="mb-4">
            The Reset is perfect if you:
          </p>
          <ul className="mb-4 space-y-2 ml-6 list-disc">
            <li>Feel stiff, tight, or out of alignment</li>
            <li>Want a quick reset without a long commitment</li>
            <li>Need to address specific issues (hip tightness, shoulder restrictions, etc.)</li>
            <li>Want to try the work before committing to a longer program</li>
            <li>Are coming back after a break and need to get back on track</li>
          </ul>
          <p>
            It's also a great starting point if you're unsure whether you need a full 12-Series or Full Repatterning program. Many clients do The Reset first, then continue with a longer program once they experience the benefits.
          </p>
        </>
      )
    },
    {
      title: 'What to Expect',
      content: (
        <>
          <p className="mb-4">
            <strong>Timeline:</strong> 6 sessions over 3-6 weeks, depending on your schedule. Sessions alternate between SI and Movement to maximize integration.
          </p>
          <p className="mb-4">
            <strong>SI Sessions:</strong> 60 minutes of hands-on bodywork. We work with your fascia to release restrictions and improve alignment. You'll feel immediate changes-looser, more mobile, better aligned.
          </p>
          <p className="mb-4">
            <strong>Movement Sessions:</strong> 60 minutes of personalized training. We assess how you move, identify compensation patterns, and teach you better movement quality. This isn't about crushing yourself-it's about learning to move well.
          </p>
          <p>
            <strong>Results:</strong> Most people feel significantly better after The Reset. You'll move more easily, feel less stiff, and have tools to maintain the work. If you need more, we can transition into a longer program.
          </p>
        </>
      )
    },
    {
      title: 'How is This Different from Other Programs?',
      content: (
        <>
          <p className="mb-4">
            <strong>vs. 12-Series:</strong> The 12-Series is a complete structural transformation. The Reset is a quick tune-up. If you need comprehensive whole-body work, the 12-Series is better. If you need to reset and get back on track, The Reset is perfect.
          </p>
          <p className="mb-4">
            <strong>vs. Hip Series:</strong> The Hip Series focuses exclusively on hip-related issues with SI only. The Reset combines SI + Movement and can address multiple areas (not just hips).
          </p>
          <p className="mb-4">
            <strong>vs. Full Repatterning:</strong> Full Repatterning is 12 weeks of intensive work (12 SI + 12-36 Movement sessions). The Reset is 3-6 weeks. Full Repatterning is for lasting transformation. The Reset is for getting back on track.
          </p>
          <p>
            Think of The Reset as the "try it and see" program. It's enough to experience real change without a massive commitment.
          </p>
        </>
      )
    }
  ];

  const similarPrograms = [
    {
      name: '5 Movement Sessions',
      price: 810,
      description: 'Movement only. Great starter package.',
      link: '/programs/movement-5-sessions'
    },
    {
      name: 'Hip Freedom - Basic',
      price: 1320,
      description: '4 SI + 4 Movement. More comprehensive.',
      link: '/programs/hip-freedom-basic',
      badge: 'MORE SESSIONS'
    },
    {
      name: 'Hip Series',
      price: 720,
      description: '4 SI sessions. Focused structural work.',
      link: '/programs/hip-series'
    }
  ];

  return (
    <ProgramPageTemplate
      programName="The Reset"
      tagline="Quick Reset for Your Foundation"
      price={990}
      whatYouGet={whatYouGet}
      accordionSections={accordionSections}
      stripeLink="https://buy.stripe.com/dRmfZhgcLcNF0l31wSefC04"
      similarPrograms={similarPrograms}
    />
  );
}

export default TheReset;

