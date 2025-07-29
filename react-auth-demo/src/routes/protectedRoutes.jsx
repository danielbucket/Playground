import Profile from '../pages/profile.jsx';
import Logout from '../pages/logout.jsx';
import UserHome from '../pages/userHome.jsx';
import ProtectedRoutesWrapper from './ProtectedRoutesWrapper.jsx'

export const protectedRoutes = [
  {
    path: '/home',
    element: <ProtectedRoutesWrapper />,
    children: [
      { index: true, element: <UserHome /> },
      { path: '/home/profile', element: <Profile /> },
      { path: '/home/logout', element: <Logout /> }
    ]
  }
];