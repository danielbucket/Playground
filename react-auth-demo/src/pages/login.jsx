import { useAuth } from '../provider/authProvider.jsx';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function Login() {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setToken('test-token-12345');
    navigate('/home', { replace: true });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <p>Click the button to simulate a successful login.</p>
      <div>
        <h2>Don't have an account?</h2>
        <Link to="/new-user">Register here</Link>
      </div>
    </div>
  );
};