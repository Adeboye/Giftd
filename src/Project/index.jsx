import React, { useState, useEffect } from 'react';

import { ProjectPage, ProjectContent, ResultsContent } from './Styles';
import ContentContainer from './ContentContainer';
import ImageContainer from './ImageContainer';
import ResultsContainer from './ResultsContainer';

import useCurrentStep from './hook/useCurrentStep';

const Project = () => {
  const [step, setStep] = useState(0);
  const {
    data,
    updateGiftCriteria,
    removeGiftCriteria,
    criteria,
    isLoading,
    setIsLoading
  } = useCurrentStep(step);

  const moveBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const moveForward = () => {
    setStep((prevStep) => prevStep + 1);
  };

  useEffect(() => {
    function warnUserNavigateAway(e) {
      const confirmationMessage = `If you leave this page all changes will be lost.`;

      (e || window.event).returnValue = confirmationMessage;

      return confirmationMessage;
    }

    window.addEventListener('beforeunload', warnUserNavigateAway);

    return () => window.removeEventListener('beforeunload', warnUserNavigateAway);
  });

  return (
    <ProjectPage>
      <ProjectContent>
        <ContentContainer
          content={data}
          moveBack={moveBack}
          moveForward={moveForward}
          updateGiftCriteria={updateGiftCriteria}
          removeGiftCriteria={removeGiftCriteria}
          criteria={criteria}
        />
        <ImageContainer content={data} />
      </ProjectContent>

      <ResultsContent>
        <ResultsContainer
          isLoading={isLoading}
          loadingFn={setIsLoading}
          moveForward={moveForward}
          criteria={criteria}
        />
      </ResultsContent>
    </ProjectPage>
  );
};

export default Project;
