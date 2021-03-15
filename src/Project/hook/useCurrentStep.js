import { useState } from 'react';

import data from '../data';

function computeStepValues(step) {
  return data[step];
}

const useCurrentStep = (step) => {
  const [criteria, setCriteria] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const updateGiftCriteria = (val) => {
    switch (step) {
      case 1:
        setCriteria((prevState) => {
          return { ...prevState, demographic: val };
        });
        break;
      case 2:
        setCriteria((prevState) => {
          return { ...prevState, giftType: val };
        });
        break;
      case 3:
        setCriteria((prevState) => {
          return { ...prevState, relation: val };
        });
        break;
      case 4:
        setCriteria((prevState) => {
          return { ...prevState, occasion: val };
        });
        break;
      case 5:
        setCriteria((prevState) => {
          return { ...prevState, priceRange: { min: val.min, max: val.max } };
        });
        setIsLoading(true);
        break;
      default:
    }
  };

  const removeGiftCriteria = () => {
    switch (step) {
      case 1:
        setCriteria((prevState) => {
          const { demographic, ...rest } = prevState;
          return rest;
        });
        break;
      case 2:
        setCriteria((prevState) => {
          const { giftType, ...rest } = prevState;
          return rest;
        });
        break;
      case 3:
        setCriteria((prevState) => {
          const { relation, ...rest } = prevState;
          return rest;
        });
        break;
      case 4:
        setCriteria((prevState) => {
          const { occasion, ...rest } = prevState;
          return rest;
        });
        break;
      case 5:
        setCriteria((prevState) => {
          const { price, ...rest } = prevState;
          return rest;
        });
        break;
      default:
    }
  };

  const stepData = computeStepValues(step);

  return {
    data: stepData,
    updateGiftCriteria,
    removeGiftCriteria,
    criteria,
    isLoading,
    setIsLoading
  };
};

export default useCurrentStep;
