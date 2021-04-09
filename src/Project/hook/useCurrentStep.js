import { useState } from 'react';

import MixpanelService from '../../shared/services/MixpanelService';
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
        MixpanelService.track('Track gift step1', {
          stepNumber: 1,
          demographic: val.name
        });
        setCriteria((prevState) => {
          return { ...prevState, demographic: val };
        });
        break;
      case 2:
        MixpanelService.track('Track gift step2', {
          stepNumber: 2,
          giftType: val.name
        });
        setCriteria((prevState) => {
          return { ...prevState, giftType: val };
        });
        break;
      case 3:
        MixpanelService.track('Track gift step3', {
          stepNumber: 3,
          giftType: val.name
        });
        setCriteria((prevState) => {
          return { ...prevState, relation: val };
        });
        break;
      case 4:
        MixpanelService.track('Track gift step4', {
          stepNumber: 4,
          occasion: val.name
        });
        setCriteria((prevState) => {
          return { ...prevState, occasion: val };
        });
        break;
      case 5:
        MixpanelService.track('Track gift step5', {
          stepNumber: 5,
          minPrice: val.min,
          maxPrice: val.max
        });
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
