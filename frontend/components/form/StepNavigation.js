import React from 'react';

const StepNavigation = ({ currentStep }) => {
  const steps = ['Booking', 'Payment', 'Confirmation'];

  return (
    <div className="flex justify-center mb-6">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className={`w-8 h-8 flex items-center justify-center rounded-full ${currentStep === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
            {index + 1}
          </div>
          {index < steps.length - 1 && <div className="w-8 h-1 bg-gray-300 mx-2"></div>}
        </div>
      ))}
    </div>
  );
};

export default StepNavigation;