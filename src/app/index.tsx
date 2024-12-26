import { createRoot } from 'react-dom/client';

import { Providers } from './providers';
import { router } from './router';

import './globals.css';

createRoot(document.getElementById('root')!).render(
  <Providers router={router} />
);
