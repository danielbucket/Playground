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
    <div style={styles.container}>
      <h1>Logout Page</h1>
      <p>Click the button to return to the home page.</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '200px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc',
  },
  link: {
    marginTop: '1rem',
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '1.2rem',
  },
};