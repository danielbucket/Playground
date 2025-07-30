import Login from '../pages/login.jsx';
import NewUser from '../pages/newUser.jsx';

export const nonProtectedRoutes = [
  { path: '/auth/login', element: <Login /> },
  { path: '/auth/new-user', element: <NewUser /> }
];