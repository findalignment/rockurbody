import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function QuickStartQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    whoYouAre: null,
    whatYouNeed: null,
    painLevel: null,
  });
  const navigate = useNavigate();

  const questions = [
    {
      id: 'whoYouAre',
      question: 'Who are you?',
      options: [
        { value: 'desk-worker', label: 'Desk Worker', icon: '💻' },
        { value: 'athlete', label: 'Active Athlete', icon: '🏃' },
        { value: 'active-adult', label: 'Active Adult', icon: '🚶' },
        { value: 'senior', label: 'Active Senior', icon: '🌱' },
      ],
    },
    {
      id: 'whatYouNeed',
      question: 'What do you need?',
      options: [
        { value: 'pain-relief', label: 'Pain Relief', icon: '🩹' },
        { value: 'performance', label: 'Better Performance', icon: '⚡' },
        { value: 'posture', label: 'Posture Help', icon: '📐' },
        { value: 'movement', label: 'Movement Training', icon: '🤸' },
      ],
    },
    {
      id: 'painLevel',
      question: 'Pain level?',
      options: [
        { value: 'none', label: 'No pain', icon: '✅' },
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
      setTimeout(() => handleSubmit({ ...answers, [questionId]: value }), 300);
    }
  };

  const handleSubmit = (finalAnswers) => {
    const { whoYouAre, whatYouNeed, painLevel } = finalAnswers;
    let route = '/services'; // default

    // If severe pain, prioritize assessment
    if (painLevel === 'severe') {
      route = '/body-systems-check';
    }
    // Otherwise, route based on who they are and what they need
    else if (whatYouNeed === 'pain-relief') {
      if (painLevel === 'none') {
        route = '/injury-recovery-hub'; // prevention
      } else {
        route = '/pain-relief-hub';
      }
    } else if (whatYouNeed === 'performance') {
      if (whoYouAre === 'athlete') {
        route = '/sports-performance-hub';
      } else if (whoYouAre === 'senior') {
        route = '/train-for-longevity';
      } else {
        route = '/movement-coaching-santa-cruz';
      }
    } else if (whatYouNeed === 'posture') {
      if (whoYouAre === 'desk-worker') {
        route = '/desk-worker-wellness';
      } else {
        route = '/posture-correction';
      }
    } else if (whatYouNeed === 'movement') {
      route = '/movement-coaching-santa-cruz';
    }

    // Special cases based on who you are
    if (whoYouAre === 'desk-worker' && whatYouNeed === 'posture') {
      route = '/desk-worker-wellness';
    } else if (whoYouAre === 'senior' && whatYouNeed === 'performance') {
      route = '/train-for-longevity';
    }

    navigate(route);
  };

  const currentQuestion = questions[step - 1];
  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-xl border-2 border-neutralLight p-8 md:p-10 max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl md:text-3xl font-heading text-primary">
            Quick Start Quiz
          </h2>
          <span className="text-sm font-semibold text-neutralDark/60">
            {step} / {totalSteps}
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

