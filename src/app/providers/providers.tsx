import { RouterProvider } from 'react-router-dom';
import { QueryProvider } from './queryProvider';
import { AppRouter } from '@/shared/routes/appRoutes';

export const Providers = () => {
  return (
    <QueryProvider>
      <RouterProvider router={AppRouter} />
    </QueryProvider>
  );
};
