import Login from '../pages/login.jsx';
import NewUser from '../pages/newUser.jsx';

export const nonProtectedRoutes = [
  { path: '/login', element: <Login /> },
  { path: '/new-user', element: <NewUser /> }
];