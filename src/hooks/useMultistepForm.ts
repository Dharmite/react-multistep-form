import { ReactElement, useState } from "react";

export const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex(currentStepIndex + 1);
  };

  const prev = () => {
    setCurrentStepIndex(currentStepIndex - 1);
  };

  const isLastStep = currentStepIndex === steps.length - 1; 



  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    next,
    prev,
    isLastStep
  };
};
