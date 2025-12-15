import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function BodyOperatingSystemChecklist() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checklist: {
      alignment: false,
      breathing: false,
      mobility: false,
      strength: false,
      balance: false,
      pain: false,
      movement: false,
      recovery: false,
      posture: false,
      coordination: false
    }
  });

  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const checklistItems = [
    { id: 'alignment', label: 'I can stand with good alignment (ears over shoulders, shoulders over hips, hips over ankles) without effort' },
    { id: 'breathing', label: 'I can take a full, deep breath without restriction or tension' },
    { id: 'mobility', label: 'I can move through full range of motion in all major joints without pain or restriction' },
    { id: 'strength', label: 'I have adequate strength for daily activities and my chosen activities' },
    { id: 'balance', label: 'I can balance on one leg for 30 seconds without wobbling' },
    { id: 'pain', label: 'I am free from chronic pain, tension, or discomfort' },
    { id: 'movement', label: 'I move smoothly and efficiently without compensation patterns' },
    { id: 'recovery', label: 'I recover well from activity and don\'t feel stiff or sore for days' },
    { id: 'posture', label: 'I can maintain good posture throughout the day without fatigue' },
    { id: 'coordination', label: 'My movements feel coordinated and integrated, not disconnected or awkward' }
  ];

  const handleCheckboxChange = (id) => {
    setFormData(prev => ({
      ...prev,
      checklist: {
        ...prev.checklist,
        [id]: !prev.checklist[id]
      }
    }));
  };

  const calculateScore = () => {
    const yesCount = Object.values(formData.checklist).filter(Boolean).length;
    setScore(yesCount);
    return yesCount;
  };

  const getScoreInterpretation = (score) => {
    if (score >= 0 && score <= 3) {
      return {
        title: 'Your Body\'s Operating System Needs Attention',
        description: 'You\'re experiencing significant limitations in how your body functions. Multiple systems are not operating optimally, which likely affects your daily life, performance, and long-term health.',
        recommendation: 'A Body Systems Check would be highly valuable. We\'ll identify the root causes of these limitations and create a clear roadmap for upgrading your body\'s software.',
        color: 'text-red-600'
      };
    } else if (score >= 4 && score <= 6) {
      return {
        title: 'Your Body\'s Operating System Has Room for Improvement',
        description: 'Some systems are working well, but others need attention. You may be compensating for limitations without realizing it, which can lead to problems over time.',
        recommendation: 'A Body Systems Check would help identify which systems need the most attention and prioritize your upgrade path.',
        color: 'text-yellow-600'
      };
    } else {
      return {
        title: 'Your Body\'s Operating System Is Functioning Well',
        description: 'Most of your systems are operating well. However, even high-functioning bodies benefit from regular maintenance and optimization.',
        recommendation: 'Consider a Body Systems Check to identify any subtle improvements or preventive maintenance that could optimize your performance further.',
        color: 'text-green-600'
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalScore = calculateScore();
    setSubmitted(true);
    // Here you would typically send the data to your email service or backend
    console.log('Form submitted:', { ...formData, score: finalScore });
  };

  return (
    <>
      <SEO
        title="The Body Operating System Checklist - Free Self-Assessment | RockUrBody"
        description="Take our free 10-item Body Operating System Checklist to assess your alignment, movement, strength, and overall body function. Get personalized recommendations."
        keywords="body assessment checklist, movement assessment, body systems check, self-assessment, body operating system"
        url="/body-operating-system-checklist"
      />
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              The Body Operating System Checklist
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              A 10-item self-assessment to evaluate how well your body's systems are functioning. Get clarity on what's working, what's not, and what needs upgrading.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-3xl mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 md:p-12 shadow-lg border-2 border-neutralLight">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4">
                    Your Information
                  </h2>
                  <p className="text-neutralDark/70 mb-6">
                    We'll send your results and recommendations to your email. Your information is private and secure.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 border-2 border-neutralLight rounded-lg focus:outline-none focus:border-accent text-neutralDark"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 border-2 border-neutralLight rounded-lg focus:outline-none focus:border-accent text-neutralDark"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4">
                    Self-Assessment Checklist
                  </h2>
                  <p className="text-neutralDark/70 mb-6">
                    Answer honestly: Can you do each of these things consistently? Check "Yes" if it's true for you most of the time.
                  </p>
                  <div className="space-y-4">
                    {checklistItems.map((item, index) => (
                      <div key={item.id} className="flex items-start gap-4 p-4 bg-neutralLight/50 rounded-lg">
                        <input
                          type="checkbox"
                          id={item.id}
                          checked={formData.checklist[item.id]}
                          onChange={() => handleCheckboxChange(item.id)}
                          className="mt-1 w-5 h-5 text-accent border-2 border-neutralDark/30 rounded focus:ring-accent"
                        />
                        <label htmlFor={item.id} className="flex-1 text-neutralDark/80 cursor-pointer">
                          <span className="font-semibold text-primary mr-2">{index + 1}.</span>
                          {item.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm text-neutralDark/70">
                    <strong className="text-primary">Privacy:</strong> Your information is secure and will only be used to send you your results and relevant information about our services. We never share your data with third parties.
                  </p>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Get My Results
                </Button>
              </form>
            ) : (
              <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border-2 border-neutralLight">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading text-primary mb-4">
                    Your Score: {score} / 10
                  </h2>
                </div>

                <div className={`mb-8 p-6 rounded-lg border-2 ${score <= 3 ? 'bg-red-50 border-red-200' : score <= 6 ? 'bg-yellow-50 border-yellow-200' : 'bg-green-50 border-green-200'}`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${getScoreInterpretation(score).color}`}>
                    {getScoreInterpretation(score).title}
                  </h3>
                  <p className="text-lg text-neutralDark/80 mb-4 leading-relaxed">
                    {getScoreInterpretation(score).description}
                  </p>
                  <p className="text-lg text-neutralDark/80 leading-relaxed">
                    {getScoreInterpretation(score).recommendation}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-4">What's Next?</h3>
                  <p className="text-neutralDark/80 mb-6">
                    We've sent your detailed results and recommendations to <strong>{formData.email}</strong>. Check your inbox (and spam folder) for your personalized report.
                  </p>
                  <p className="text-neutralDark/80">
                    Ready to take action? Book a Body Systems Check for a comprehensive, hands-on assessment that goes deeper than this checklist.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    to="/body-systems-check"
                    variant="primary"
                    size="lg"
                    className="flex-1"
                  >
                    Book a Body Systems Check
                  </Button>
                  <Button
                    to="/how-it-works"
                    variant="outline"
                    size="lg"
                    className="flex-1"
                  >
                    Learn How It Works
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Additional Info */}
        {!submitted && (
          <section className="bg-neutralLight py-16 md:py-24 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">
                Why This Checklist Matters
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-primary mb-3">Self-Awareness</h3>
                  <p className="text-neutralDark/80">
                    Many people don't realize how their body's limitations affect daily life until they assess systematically.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-primary mb-3">Early Detection</h3>
                  <p className="text-neutralDark/80">
                    Catch imbalances and restrictions before they become bigger problems or injuries.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-primary mb-3">Clear Direction</h3>
                  <p className="text-neutralDark/80">
                    Understand what needs attention and prioritize your body's upgrade path.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-primary mb-3">Baseline Tracking</h3>
                  <p className="text-neutralDark/80">
                    Use this as a baseline to track improvements as you upgrade your body's software.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default BodyOperatingSystemChecklist;

