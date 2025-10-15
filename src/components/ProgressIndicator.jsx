import { useState, useEffect } from 'react';

function ProgressIndicator({ 
  currentStep = 1, 
  totalSteps = 12, 
  programName = "12-Series",
  showPercentage = true 
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const percentage = (currentStep / totalSteps) * 100;
    setProgress(percentage);
  }, [currentStep, totalSteps]);

  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-neutralDark">
          {programName} Progress
        </h3>
        <span className="text-sm text-neutralDark/70">
          Session {currentStep} of {totalSteps}
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div 
          className="bg-gradient-to-r from-accent to-primary h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Progress Details */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutralDark/70">
          {showPercentage && `${Math.round(progress)}% Complete`}
        </span>
        <span className="text-accent font-semibold">
          {totalSteps - currentStep} sessions remaining
        </span>
      </div>
      
      {/* Next Session Info */}
      {currentStep < totalSteps && (
        <div className="mt-4 p-3 bg-accent/10 rounded-lg">
          <p className="text-sm text-neutralDark/80">
            <strong>Next:</strong> Session {currentStep + 1} - 
            {currentStep + 1 <= 4 && " Superficial Layers"}
            {currentStep + 1 > 4 && currentStep + 1 <= 8 && " Deep Core"}
            {currentStep + 1 > 8 && " Integration"}
          </p>
        </div>
      )}
      
      {/* Completion Message */}
      {currentStep >= totalSteps && (
        <div className="mt-4 p-3 bg-success/10 rounded-lg">
          <p className="text-sm text-success font-semibold">
            🎉 Congratulations! You've completed the {programName}!
          </p>
        </div>
      )}
    </div>
  );
}

export default ProgressIndicator;
