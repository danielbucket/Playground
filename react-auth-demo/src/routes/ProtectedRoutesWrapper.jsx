import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../provider/authProvider';

export default function ProtectedRoutesWrapper() {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  };

  return <Outlet />;
};