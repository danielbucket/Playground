import { useNavigate, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../provider/authProvider.jsx';
import AuthService from '../services/auth.service.js';

export default function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      console.log('Location state:', location.state);
      const { username, password } = location.state;

      setUsername(username);
      setPassword(password);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      console.error('Username and password are required');
      return;
    };

    AuthService.login(username, password)
      .then((token) => {
        setToken(token);
        localStorage.setItem('test-token', token);
        navigate('/home', {
          replace: true,
          state: { username }
        });
      })
      .catch((error) => {
        console.error('Error during login: ', error);
        // Optionally, you can reset the form fields
        // setUsername('');
        // setPassword('');
      });
  };

  return (
    <div style={styles.container}>
      <h1>Login Page</h1>
      <form style={styles.form}>
        <label>Username:</label>
          <input type="text" placeholder="Username" value={username ? username : ''} onChange={(e) => setUsername(e.target.value)} />
        <label>Password:</label>
          <input type="password" placeholder="Password" value={password ? password : ''} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Login" onClick={(e) => handleSubmit(e)} />
      </form>
      <Link style={styles.link} to='/'>Back to Home</Link>
      <div style={styles.noAccount}>
        <h2>Don't have an account?</h2>
        <Link style={styles.link} to="/auth/new-user">Create New User</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '350px',
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

  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
  },

  noAccount: {
    marginTop: '1rem',
    textAlign: 'center',
    color: '#333',
    fontSize: '1rem',
  }
};