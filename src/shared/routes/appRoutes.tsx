import { PageLayout } from '@/app/layout/pageLayout';
import { SuppliesPage } from '@/pages/suppliesPage';
import { createBrowserRouter } from 'react-router-dom';

export enum AppRoutes {
  MAIN = '/',
  ERROR = '*',
}

export const AppRouter = createBrowserRouter([
  {
    path: AppRoutes.MAIN,
    children: [
      {
        index: true,
        element: (
          <PageLayout>
            <SuppliesPage />
          </PageLayout>
        ),
      },
      {
        path: AppRoutes.ERROR,
        element: (
          <div style={{ padding: 40, textAlign: 'center' }}>
            <h1>404</h1>
            <p>Страница не найдена</p>
          </div>
        ),
      },
    ],
  },
]);
