import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function QuickStartQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    mainGoal: null,
    specific: null,
  });
  const navigate = useNavigate();

  const getSecondQuestion = () => {
    switch (answers.mainGoal) {
      case 'performance':
        return {
          id: 'specific',
          question: 'What type of performance?',
          options: [
            { value: 'sports', label: 'Sports Performance', icon: '⚡' },
            { value: 'injury-prevention', label: 'Injury Prevention', icon: '🛡️' },
            { value: 'longevity', label: 'Train for Longevity', icon: '🌱' },
            { value: 'specific-sport', label: 'Specific Sport', icon: '🎯' },
          ],
        };
      case 'pain':
        return {
          id: 'specific',
          question: 'What describes your situation?',
          options: [
            { value: 'chronic', label: 'Chronic Pain', icon: '🩹' },
            { value: 'recent', label: 'Recent Injury', icon: '⚠️' },
            { value: 'assessment', label: 'Full Assessment', icon: '🔍' },
            { value: 'prevention', label: 'Prevent Issues', icon: '✅' },
          ],
        };
      case 'posture':
        return {
          id: 'specific',
          question: 'What best describes you?',
          options: [
            { value: 'desk-worker', label: 'Desk Worker', icon: '💻' },
            { value: 'alignment', label: 'General Alignment', icon: '📐' },
            { value: 'structural', label: 'Structural Work', icon: '🏗️' },
            { value: 'movement', label: 'Movement Patterns', icon: '🤸' },
          ],
        };
      case 'bodywork':
        return {
          id: 'specific',
          question: 'What interests you most?',
          options: [
            { value: 'structural-integration', label: 'Structural Integration', icon: '🏗️' },
            { value: 'fascia', label: 'Fascial Release', icon: '🌊' },
            { value: 'assessment', label: 'Body Systems Check', icon: '🔍' },
            { value: 'education', label: 'Movement Education', icon: '📚' },
          ],
        };
      default:
        return null;
    }
  };

  const questions = [
    {
      id: 'mainGoal',
      question: 'What brings you here?',
      options: [
        { value: 'performance', label: 'Athletic Performance', icon: '🏃' },
        { value: 'pain', label: 'Pain Relief', icon: '🩹' },
        { value: 'posture', label: 'Posture Improvement', icon: '📐' },
        { value: 'bodywork', label: 'Bodywork/Fascia', icon: '🌊' },
      ],
    },
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));

    if (step === 1) {
      setTimeout(() => setStep(2), 300);
    } else {
      setTimeout(() => handleSubmit(value), 300);
    }
  };

  const handleSubmit = (specificValue) => {
    const { mainGoal } = answers;
    const specific = specificValue || answers.specific;
    let route = '/services'; // default

    // Route based on main goal and specific answer
    if (mainGoal === 'performance') {
      if (specific === 'sports') {
        route = '/sports-performance-hub';
      } else if (specific === 'injury-prevention') {
        route = '/injury-recovery-hub';
      } else if (specific === 'longevity') {
        route = '/train-for-longevity';
      } else if (specific === 'specific-sport') {
        route = '/sports-performance-hub';
      }
    } else if (mainGoal === 'pain') {
      if (specific === 'chronic') {
        route = '/pain-relief-hub';
      } else if (specific === 'recent') {
        route = '/injury-recovery-hub';
      } else if (specific === 'assessment') {
        route = '/body-systems-check';
      } else if (specific === 'prevention') {
        route = '/injury-recovery-hub';
      }
    } else if (mainGoal === 'posture') {
      if (specific === 'desk-worker') {
        route = '/desk-worker-wellness';
      } else if (specific === 'alignment') {
        route = '/posture-correction';
      } else if (specific === 'structural') {
        route = '/structural-integration-hub';
      } else if (specific === 'movement') {
        route = '/movement-coaching-santa-cruz';
      }
    } else if (mainGoal === 'bodywork') {
      if (specific === 'structural-integration') {
        route = '/structural-integration-hub';
      } else if (specific === 'fascia') {
        route = '/fascial-release';
      } else if (specific === 'assessment') {
        route = '/body-systems-check';
      } else if (specific === 'education') {
        route = '/what-is-movement-education';
      }
    }

    navigate(route);
  };

  const currentQuestion = step === 1 ? questions[0] : getSecondQuestion();
  const totalSteps = 2;
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
          {currentQuestion?.question}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentQuestion?.options.map((option) => (
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

