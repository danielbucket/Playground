import Service from '../pages/service.jsx';
import About from '../pages/about.jsx';
import PublicHome from '../pages/publicHome.jsx';
import ErrorPage from '../pages/errorPage.jsx';

export const publicRoutes = [
  { path: '/',
    index: true,
    element: <PublicHome />,
    errorElement: <ErrorPage />
  },
  { path: '/service', element: <Service /> },
  { path: '/about', element: <About /> }
];