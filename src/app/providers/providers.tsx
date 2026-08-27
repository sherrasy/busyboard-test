import { OnboardingProvider } from '@/features/onboarding';
import { AppRouter } from '@/shared/routes/appRoutes';
import { RouterProvider } from 'react-router-dom';
import { QueryProvider } from './queryProvider';
import { ThemeProvider } from './themeProvider';

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
