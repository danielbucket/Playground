import { useNavigate } from 'react-router';
import { useAuth } from '../provider/authProvider';

export default function Logout() {
  const { setToken } = useAuth();
  const { navigate } = useNavigate();

  const handleLogout = async () => {
    await setToken();
    await localStorage.removeItem('test-token');
    navigate('/', { replace: true });
  };

  return (
    <div>
      <h1>Logout Page</h1>
      <p>Click the button to return to the home page.</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};