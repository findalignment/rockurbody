import ProgramPageTemplate from '../../components/ProgramPageTemplate';

function HipSeries() {
  const whatYouGet = [
    '4 targeted Structural Integration sessions',
    'Focused hip mobility and alignment work',
    'Great introduction to Structural Integration',
    'Perfect precursor to the 12-Series',
    'Addresses hip-related pain, stiffness, and restrictions'
  ];

  const accordionSections = [
    {
      title: 'What is the Hip Series?',
      content: (
        <>
          <p className="mb-4">
            The Hip Series is a 4-session focused Structural Integration program specifically designed to address hip-related issues. It's hands-on fascia work that targets the hip joint, surrounding muscles, and connected fascial lines.
          </p>
          <p className="mb-4">
            This isn't massage. It's systematic work to reorganize the tissue around your hips so they move better. We address restrictions in the hip flexors, glutes, lateral hip, and deep rotators. The result is better hip mobility, less pain, and more freedom in movement.
          </p>
          <p>
            Many people use the Hip Series as an introduction to Structural Integration before committing to the full 12-Series. It's also great as a standalone program if hip issues are your main concern.
          </p>
        </>
      )
    },
    {
      title: 'What Causes Hip Problems?',
      content: (
        <>
          <p className="mb-4">
            Hip issues rarely start in the hip. They're usually compensation patterns from other areas—tight hamstrings, restricted thoracic spine, ankle limitations, or poor foot mechanics.
          </p>
          <p className="mb-4">
            Sitting all day shortens hip flexors and weakens glutes. Old ankle sprains create compensation patterns that affect hip alignment. Desk posture collapses the front body and restricts hip extension.
          </p>
          <p>
            The Hip Series addresses these patterns by working with the fascia. We release restrictions, improve tissue organization, and restore natural hip function. The work goes beyond the hip itself to address the whole system.
          </p>
        </>
      )
    },
    {
      title: 'Who Is This For?',
      content: (
        <>
          <p className="mb-4">
            The Hip Series is perfect if you:
          </p>
          <ul className="mb-4 space-y-2 ml-6 list-disc">
            <li>Have chronic hip pain or stiffness</li>
            <li>Feel restricted in hip flexion, extension, or rotation</li>
            <li>Sit at a desk all day and feel tight hips</li>
            <li>Have difficulty squatting, lunging, or moving through hip patterns</li>
            <li>Want to try Structural Integration before the 12-Series</li>
            <li>Dealing with hip impingement, bursitis, or similar issues</li>
          </ul>
          <p>
            It's also great for athletes who need better hip mobility for performance—runners, cyclists, weightlifters, yoga practitioners, martial artists, etc.
          </p>
        </>
      )
    },
    {
      title: 'What to Expect',
      content: (
        <>
          <p className="mb-4">
            <strong>Session 1:</strong> We assess your hip function and begin working the lateral hip and IT band. You'll feel immediate changes in how your hip moves.
          </p>
          <p className="mb-4">
            <strong>Session 2:</strong> We address the front of the hip—hip flexors, psoas, and deep front line. This often feels like a revelation for people who sit all day.
          </p>
          <p className="mb-4">
            <strong>Session 3:</strong> We work the back of the hip—glutes, deep rotators, and hamstrings. This session improves hip extension and reduces compensation patterns.
          </p>
          <p className="mb-4">
            <strong>Session 4:</strong> Integration. We tie everything together and ensure your hips are functioning as a coordinated system.
          </p>
          <p>
            Most people feel dramatic improvements in hip mobility, less pain, and easier movement. Some continue with the full 12-Series to address the rest of their body.
          </p>
        </>
      )
    },
    {
      title: 'Why Not Just Do the 12-Series?',
      content: (
        <>
          <p className="mb-4">
            The 12-Series is comprehensive and addresses your entire structure. The Hip Series is focused on one area. If hip issues are your main concern and you want targeted work, the Hip Series is perfect.
          </p>
          <p className="mb-4">
            It's also a great introduction. Many people do the Hip Series first to experience Structural Integration, then continue with the 12-Series for whole-body work.
          </p>
          <p>
            If you have hip issues plus other restrictions (shoulders, back, feet, etc.), the 12-Series is better. If hips are the main problem, start here.
          </p>
        </>
      )
    }
  ];

  return (
    <ProgramPageTemplate
      programName="Hip Series"
      tagline="Targeted Hip Work for Better Movement"
      price={720}
      whatYouGet={whatYouGet}
      accordionSections={accordionSections}
      stripeLink="https://buy.stripe.com/bJe8wPaSr7tl5FndfAefC05"
    />
  );
}

export default HipSeries;

