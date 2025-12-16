import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function QuickStartQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    job: null,
    activity: null,
    pain: null,
  });
  const navigate = useNavigate();

  const questions = [
    {
      id: 'job',
      question: 'What describes you best?',
      options: [
        { value: 'desk', label: 'Desk job', icon: '💻' },
        { value: 'active', label: 'Active/athletic', icon: '🏃' },
        { value: 'mixed', label: 'Mix of both', icon: '⚖️' },
      ],
    },
    {
      id: 'activity',
      question: 'What activity interests you?',
      options: [
        { value: 'climber', label: 'Climber', icon: '🧗' },
        { value: 'posture', label: 'Posture correction', icon: '📐' },
        { value: 'movement', label: 'Movement training', icon: '🤸' },
      ],
    },
    {
      id: 'pain',
      question: 'Pain level?',
      options: [
        { value: 'none', label: 'No pain, just want to improve', icon: '✅' },
        { value: 'mild', label: 'Mild discomfort', icon: '😐' },
        { value: 'moderate', label: 'Moderate pain', icon: '😣' },
        { value: 'severe', label: 'Severe pain', icon: '😰' },
      ],
    },
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));

    if (step < questions.length) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // Determine route based on answers
    let route = '/services'; // default

    // Priority: Activity > Job > Pain
    if (answers.activity === 'climber') {
      route = '/climbers';
    } else if (answers.activity === 'posture') {
      route = '/posture-correction';
    } else if (answers.activity === 'movement') {
      route = '/movement-coaching-santa-cruz';
    } else if (answers.job === 'desk') {
      route = '/posture-correction';
    } else if (answers.job === 'active') {
      route = '/movement-coaching-santa-cruz';
    }

    // If severe pain, suggest Body Systems Check first
    if (answers.pain === 'severe') {
      route = '/body-systems-check';
    }

    navigate(route);
  };

  const currentQuestion = questions[step - 1];
  const progress = (step / questions.length) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-xl border-2 border-neutralLight p-8 md:p-10 max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl md:text-3xl font-heading text-primary">
            Quick Start Quiz
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(currentQuestion.id, option.value)}
              className="flex flex-col items-center justify-center p-6 border-2 border-neutralLight rounded-xl hover:border-accent hover:bg-accent/5 transition-all duration-200 group"
            >
              <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {option.icon}
              </span>
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

export default QuickStartQuiz;

