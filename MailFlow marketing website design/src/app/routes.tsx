import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { Solutions } from './pages/Solutions';
import { Pricing } from './pages/Pricing';
import { Contacts } from './pages/Contacts';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'features', Component: Features },
      { path: 'solutions', Component: Solutions },
      { path: 'pricing', Component: Pricing },
      { path: 'contacts', Component: Contacts },
      { path: '*', Component: NotFound },
    ],
  },
]);
