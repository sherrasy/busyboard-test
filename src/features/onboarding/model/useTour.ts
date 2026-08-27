import { useCallback, useState } from 'react';
import { type EventHandler } from 'react-joyride';
import { getStepsByTourId } from '../lib/getSteps';
import { TourConfig } from './types';

export interface UseOnboardingTourReturn {
  tourConfig: TourConfig | null;
  run: boolean;
  stepIndex: number;
  startTour: (tourId: string) => void;
  stopTour: () => void;
  handleEvent: EventHandler;
}

export const useTour = (): UseOnboardingTourReturn => {
  const [tourConfig, setTourConfig] = useState<TourConfig | null>(null);
  const [run, setRun] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const handleEvent: EventHandler = (data) => {
    if (!tourConfig) return;
    const { index, action, type, status } = data;

    if (type === 'step:after') {
      if (action === 'next') {
        setStepIndex(index === tourConfig.steps.length - 1 ? 0 : index + 1);
      } else if (action === 'prev') {
        setStepIndex(index === 0 ? tourConfig.steps.length - 1 : index - 1);
      }
    }

    if (status === 'skipped' || action === 'close') {
      setRun(false);
      setStepIndex(0);
    }
  };

  const startTour = useCallback((tourId: string) => {
    const steps = getStepsByTourId(tourId);
    setTourConfig({ id: tourId, steps, continuous: true });
    setRun(true);
    setStepIndex(0);
  }, []);

  const stopTour = useCallback(() => {
    setRun(false);
    setTourConfig(null);
    setStepIndex(0);
  }, []);

  return {
    tourConfig,
    run,
    stepIndex,
    startTour,
    stopTour,
    handleEvent,
  };
};
