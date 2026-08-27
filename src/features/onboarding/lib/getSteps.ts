import { Step } from 'react-joyride';
import { suppliesTourSteps } from './steps';

export const getStepsByTourId = (tourId: string): Step[] => {
  switch (tourId) {
    case 'supplies-page':
      return suppliesTourSteps;
    default:
      return [];
  }
};
