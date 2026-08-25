import { RouterProvider } from 'react-router-dom';
import { QueryProvider } from './queryProvider';
import { AppRouter } from '@/shared/routes/appRoutes';
import { ThemeProvider } from './themeProvider';

export const Providers = () => {
  return (
    <QueryProvider>
      <ThemeProvider>
        <RouterProvider router={AppRouter} />
      </ThemeProvider>
    </QueryProvider>
  );
};
