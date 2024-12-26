import { createBrowserRouter } from 'react-router-dom';

import { MainPage } from '@/pages/main-page';
import { PostPage } from '@/pages/post-page';

import { Layout } from '@/shared/ui/layout';
import { ROUTES } from '@/shared/constants/routes';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.MAIN,
        element: <MainPage />
      },
      {
        path: ROUTES.POST,
        element: <PostPage />
      }
    ]
  }
]);
