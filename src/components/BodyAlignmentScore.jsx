import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function BodyAlignmentScore() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [tips, setTips] = useState([]);
  const navigate = useNavigate();

  const questions = [
    {
      id: 'posture',
      question: 'How would you describe your posture awareness?',
      options: [
        { value: 'excellent', label: 'I maintain good posture naturally', score: 20 },
        { value: 'good', label: 'I try to maintain good posture but slip into old habits', score: 15 },
        { value: 'fair', label: 'I notice poor posture but struggle to fix it', score: 10 },
        { value: 'poor', label: 'I rarely think about posture', score: 5 },
      ],
    },
    {
      id: 'pain',
      question: 'Do you experience pain or discomfort regularly?',
      options: [
        { value: 'none', label: 'No pain or discomfort', score: 20 },
        { value: 'mild', label: 'Mild, occasional discomfort', score: 15 },
        { value: 'moderate', label: 'Moderate pain that affects daily activities', score: 8 },
        { value: 'severe', label: 'Severe or chronic pain', score: 3 },
      ],
    },
    {
      id: 'movement',
      question: 'How would you rate your movement quality?',
      options: [
        { value: 'excellent', label: 'I move freely without restrictions', score: 20 },
        { value: 'good', label: 'Some areas feel tight but I can move well', score: 15 },
        { value: 'fair', label: 'I notice limitations in range of motion', score: 10 },
        { value: 'poor', label: 'I feel stiff and restricted in many areas', score: 5 },
      ],
    },
    {
      id: 'desk',
      question: 'How many hours per day do you spend sitting (desk work, driving, etc.)?',
      options: [
        { value: 'none', label: 'Less than 2 hours', score: 20 },
        { value: 'low', label: '2-4 hours', score: 15 },
        { value: 'moderate', label: '4-8 hours', score: 10 },
        { value: 'high', label: 'More than 8 hours', score: 5 },
      ],
    },
    {
      id: 'activity',
      question: 'How often do you engage in physical activity or exercise?',
      options: [
        { value: 'daily', label: 'Daily or almost daily', score: 20 },
        { value: 'regular', label: '3-4 times per week', score: 15 },
        { value: 'occasional', label: '1-2 times per week', score: 10 },
        { value: 'rare', label: 'Rarely or never', score: 5 },
      ],
    },
    {
      id: 'injuries',
      question: 'Have you had any injuries in the past 2 years?',
      options: [
        { value: 'none', label: 'No injuries', score: 20 },
        { value: 'minor', label: 'Minor injuries, fully recovered', score: 15 },
        { value: 'moderate', label: 'Moderate injuries, some lingering issues', score: 8 },
        { value: 'major', label: 'Major injuries or ongoing issues', score: 3 },
      ],
    },
    {
      id: 'balance',
      question: 'How would you rate your balance and stability?',
      options: [
        { value: 'excellent', label: 'Very stable, rarely lose balance', score: 20 },
        { value: 'good', label: 'Generally stable, occasional wobbles', score: 15 },
        { value: 'fair', label: 'Noticeable balance issues', score: 10 },
        { value: 'poor', label: 'Frequent balance problems', score: 5 },
      ],
    },
    {
      id: 'awareness',
      question: 'How aware are you of your body alignment during daily activities?',
      options: [
        { value: 'very', label: 'Very aware, I check my alignment regularly', score: 20 },
        { value: 'somewhat', label: 'Somewhat aware, I notice it sometimes', score: 15 },
        { value: 'little', label: 'A little aware, but don\'t think about it much', score: 10 },
        { value: 'not', label: 'Not aware at all', score: 5 },
      ],
    },
  ];

  const handleAnswer = (questionId, value, optionScore) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: { value, score: optionScore },
    }));

    if (step < questions.length) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    let totalScore = 0;
    const maxScore = questions.length * 20; // 8 questions * 20 max points each = 160
    
    Object.values(answers).forEach((answer) => {
      totalScore += answer.score;
    });

    const percentage = Math.round((totalScore / maxScore) * 100);
    setScore(percentage);
    generateTips(percentage);
  };

  const generateTips = (scorePercentage) => {
    const tipsList = [];

    if (scorePercentage >= 85) {
      tipsList.push({
        title: 'Maintain Your Excellent Alignment',
        tip: 'You have great body awareness and alignment! Continue your current practices and consider periodic tune-ups to maintain optimal function.',
        priority: 'low',
      });
      tipsList.push({
        title: 'Preventive Care',
        tip: 'Even with good alignment, regular movement assessments can help catch small issues before they become problems.',
        priority: 'low',
      });
    } else if (scorePercentage >= 70) {
      tipsList.push({
        title: 'Focus on Postural Awareness',
        tip: 'You have a good foundation. Increase your awareness of posture throughout the day, especially during desk work or driving.',
        priority: 'medium',
      });
      tipsList.push({
        title: 'Address Movement Restrictions',
        tip: 'Consider targeted mobility work to address any areas that feel tight or restricted. This will improve your overall alignment.',
        priority: 'medium',
      });
      tipsList.push({
        title: 'Regular Movement Breaks',
        tip: 'If you sit for long periods, set reminders to stand, stretch, and move every 30-45 minutes.',
        priority: 'medium',
      });
    } else if (scorePercentage >= 50) {
      tipsList.push({
        title: 'Address Structural Imbalances',
        tip: 'Your body may have developed compensation patterns. Structural Integration can help identify and address these imbalances systematically.',
        priority: 'high',
      });
      tipsList.push({
        title: 'Improve Movement Patterns',
        tip: 'Consider Movement Education to retrain how you move, reducing strain and improving efficiency.',
        priority: 'high',
      });
      tipsList.push({
        title: 'Body Systems Check Recommended',
        tip: 'A comprehensive assessment can identify specific areas that need attention and create a personalized roadmap for improvement.',
        priority: 'high',
      });
    } else {
      tipsList.push({
        title: 'Comprehensive Assessment Needed',
        tip: 'A Body Systems Check would be highly beneficial to understand your current alignment and identify the root causes of your challenges.',
        priority: 'critical',
      });
      tipsList.push({
        title: 'Address Pain and Restrictions',
        tip: 'Pain and movement restrictions are likely affecting your daily life. Structural Integration can help release restrictions and improve alignment.',
        priority: 'critical',
      });
      tipsList.push({
        title: 'Retrain Movement Patterns',
        tip: 'Movement Education can help you learn new patterns that support better alignment and reduce compensation.',
        priority: 'critical',
      });
      tipsList.push({
        title: 'Start with Foundation',
        tip: 'Focus on building awareness of your body alignment throughout the day. Small changes in how you sit, stand, and move can make a big difference.',
        priority: 'high',
      });
    }

    // Add general tips based on specific answers
    if (answers.desk?.value === 'high' || answers.desk?.value === 'moderate') {
      tipsList.push({
        title: 'Desk Ergonomics',
        tip: 'Optimize your workstation setup: monitor at eye level, feet flat on floor, knees at 90 degrees, and take regular movement breaks.',
        priority: 'medium',
      });
    }

    if (answers.pain?.value === 'severe' || answers.pain?.value === 'moderate') {
      tipsList.push({
        title: 'Pain Management',
        tip: 'Chronic pain often indicates structural imbalances. Addressing alignment can reduce or eliminate pain by removing the root cause.',
        priority: 'critical',
      });
    }

    if (answers.injuries?.value === 'major' || answers.injuries?.value === 'moderate') {
      tipsList.push({
        title: 'Injury Recovery',
        tip: 'Previous injuries can create compensation patterns. Structural Integration helps release restrictions and restore proper movement patterns.',
        priority: 'high',
      });
    }

    setTips(tipsList);
  };

  const getScoreColor = (scorePercentage) => {
    if (scorePercentage >= 85) return 'text-green-600';
    if (scorePercentage >= 70) return 'text-blue-600';
    if (scorePercentage >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLabel = (scorePercentage) => {
    if (scorePercentage >= 85) return 'Excellent';
    if (scorePercentage >= 70) return 'Good';
    if (scorePercentage >= 50) return 'Needs Improvement';
    return 'Needs Attention';
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical':
        return 'border-red-400 bg-red-50';
      case 'high':
        return 'border-orange-400 bg-orange-50';
      case 'medium':
        return 'border-yellow-400 bg-yellow-50';
      default:
        return 'border-blue-400 bg-blue-50';
    }
  };

  const currentQuestion = questions[step - 1];
  const progress = (step / questions.length) * 100;

  // Results view
  if (score !== null) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border-2 border-neutralLight p-8 md:p-10 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-4">
            Your Body Alignment Score
          </h2>
          <div className="mb-6">
            <div className={`text-6xl md:text-7xl font-bold ${getScoreColor(score)} mb-2`}>
              {score}
            </div>
            <div className={`text-2xl font-semibold ${getScoreColor(score)}`}>
              {getScoreLabel(score)}
            </div>
          </div>
          <p className="text-lg text-neutralDark/80 max-w-2xl mx-auto">
            Based on your responses, here are personalized recommendations to improve your body alignment and movement quality.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className={`border-l-4 rounded-r-lg p-5 ${getPriorityColor(tip.priority)}`}
            >
              <h3 className="text-lg font-semibold text-neutralDark mb-2">
                {tip.title}
              </h3>
              <p className="text-neutralDark/80 leading-relaxed">
                {tip.tip}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-accent/10 to-sage/10 rounded-xl p-6 mb-6 border-2 border-accent/20">
          <h3 className="text-xl font-semibold text-neutralDark mb-3 text-center">
            Ready to Improve Your Alignment?
          </h3>
          <p className="text-neutralDark/80 mb-6 text-center">
            Book a Body Systems Check to get a comprehensive assessment of your alignment and a personalized roadmap for improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to="/body-systems-check"
              variant="accent"
              size="lg"
              className="font-bold"
            >
              Learn About Body Systems Check
            </Button>
            <Button
              to="/book"
              variant="primary"
              size="lg"
              className="font-bold"
            >
              Book a Session
            </Button>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              setStep(1);
              setAnswers({});
              setScore(null);
              setTips([]);
            }}
            className="text-sm text-neutralDark/60 hover:text-accent transition-colors"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  // Quiz view
  return (
    <div className="bg-white rounded-2xl shadow-xl border-2 border-neutralLight p-8 md:p-10 max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl md:text-3xl font-heading text-primary">
            Body Alignment Score
          </h2>
          <span className="text-sm font-semibold text-neutralDark/60">
            {step} / {questions.length}
          </span>
        </div>
        <div className="w-full bg-neutralLight rounded-full h-2">
          <div
            className="bg-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-semibold text-neutralDark mb-6 text-center">
          {currentQuestion.question}
        </h3>
        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(currentQuestion.id, option.value, option.score)}
              className="w-full text-left p-4 border-2 border-neutralLight rounded-xl hover:border-accent hover:bg-accent/5 transition-all duration-200 group"
            >
              <span className="font-semibold text-neutralDark group-hover:text-accent transition-colors">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {step > 1 && (
        <button
          onClick={() => setStep(step - 1)}
          className="text-sm text-neutralDark/60 hover:text-accent transition-colors"
        >
          ← Back
        </button>
      )}
    </div>
  );
}

export default BodyAlignmentScore;

