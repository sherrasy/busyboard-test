import { RouterProvider } from 'react-router-dom';
import { QueryProvider } from './queryProvider';
import { AppRouter } from '@/shared/routes/appRoutes';
import { ThemeProvider } from './themeProvider';
import { OnboardingProvider } from '@/features/onboarding/ui/onboardingProvider';

export const Providers = () => {
  return (
    <QueryProvider>
      <ThemeProvider>
        <OnboardingProvider>
          <RouterProvider router={AppRouter} />
        </OnboardingProvider>
      </ThemeProvider>
    </QueryProvider>
  );
};
