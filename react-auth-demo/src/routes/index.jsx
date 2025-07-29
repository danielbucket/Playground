import { RouterProvider, createBrowserRouter } from 'react-router';
import { useAuth } from '../provider/authProvider';
import { publicRoutes } from './publicRoutes.jsx';
import { protectedRoutes } from './ProtectedRoutes.jsx';
import { nonProtectedRoutes } from './nonProtectedRoutes.jsx';

const Routes = () => {
  const { token } = useAuth();

  const router = createBrowserRouter([
    ...publicRoutes,
    ...(!token ? nonProtectedRoutes : []),
    ...protectedRoutes
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;