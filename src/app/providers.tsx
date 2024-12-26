import { RouterProvider } from 'react-router-dom';
import type { Router } from '@remix-run/router/dist/router';

interface ProvidersProps {
  router: Router;
}

export function Providers({ router }: ProvidersProps) {
  return <RouterProvider router={router} />;
}
