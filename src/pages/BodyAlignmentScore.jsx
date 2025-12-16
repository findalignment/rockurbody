import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import BodyAlignmentScore from '../components/BodyAlignmentScore';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';

function BodyAlignmentScorePage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Body Alignment Score', url: '/body-alignment-score' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Body Alignment Score Quiz | Assess Your Posture & Movement Quality"
        description="Take our interactive Body Alignment Score quiz to assess your posture, movement quality, and alignment. Get personalized tips and recommendations for improving your body alignment."
        keywords="body alignment score, posture assessment, alignment quiz, movement quality assessment, body alignment test, posture evaluation"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
        canonicalUrl="https://rockurbody.com/body-alignment-score"
      />
      <PageHero 
        imageSrc="/approach-hero.jpg"
        title="Body Alignment Score"
        subtitle="Assess your posture and movement quality"
        alt="Body Alignment Score interactive quiz to assess posture and movement quality"
      />

      <div className="bg-offWhite py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-4">
              Discover Your Body Alignment Score
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed max-w-2xl mx-auto">
              Answer a few questions about your posture, movement, and daily habits to get a personalized alignment score and actionable recommendations.
            </p>
          </div>

          <BodyAlignmentScore />
        </div>
      </div>
    </PageLayout>
  );
}

export default BodyAlignmentScorePage;

