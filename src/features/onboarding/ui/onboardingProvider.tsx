import React, { createContext, ReactNode, useContext } from 'react';
import { Joyride } from 'react-joyride';
import { useTour } from '../model/useTour';
import { OnboardingTooltip } from './tooltip';

interface OnboardingContextValue {
  startTour: (tourId: string) => void;
  stopTour: () => void;
  isRunning: boolean;
  currentTourId: string | null;
}

const OnboardingContext = createContext<OnboardingContextValue | null>(null);

export const useOnboardingContext = () => {
  const ctx = useContext(OnboardingContext);
  if (!ctx)
    throw new Error(
      'useOnboardingContext must be used within OnboardingProvider',
    );
  return ctx;
};

interface Props {
  children: ReactNode;
}

export const OnboardingProvider: React.FC<Props> = ({ children }) => {
  const { tourConfig, run, stepIndex, startTour, stopTour, handleEvent } =
    useTour();

  return (
    <OnboardingContext.Provider
      value={{
        startTour,
        stopTour,
        isRunning: run,
        currentTourId: tourConfig?.id ?? null,
      }}
    >
      {children}
      {tourConfig && (
        <Joyride
          run={run}
          stepIndex={stepIndex}
          steps={tourConfig.steps}
          continuous={tourConfig.continuous}
          onEvent={handleEvent}
          tooltipComponent={OnboardingTooltip}
          options={{
            hideOverlay: false,
            overlayColor: 'rgba(2, 11, 20, 0.75)',
            spotlightPadding: 0,
            spotlightRadius: 4,
            scrollOffset: 20,
            scrollDuration: 300,
            showProgress: false,
            overlayClickAction: false,
          }}
          locale={{
            back: 'Назад',
            close: 'Закрыть',
            last: 'К началу',
            next: 'Далее',
            skip: 'Пропустить',
            open: 'Открыть',
          }}
          scrollToFirstStep
        />
      )}
    </OnboardingContext.Provider>
  );
};
