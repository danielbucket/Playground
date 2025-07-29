import { useAuth } from '../provider/authProvider.jsx';
import { useNavigate, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [authContent, setAuthContent] = useState(null);
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setAuthContent(location.state);
    }
  }, [location.state]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: authContent?.userName || 'admin',
        password: authContent?.password || 'password',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          localStorage.setItem('test-token', data.token);
          navigate('/home', { replace: true });
        } else {
          console.error('Login failed:', data.message);
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
    
    setToken('test-token-12345');
    navigate('/home', { replace: true });
  };

  return (
    <div style={styles.container}>
      <h1>Login Page</h1>
      <form>
        <input type="text" placeholder="Username" value={authContent?.userName || ''} />
        <input type="password" placeholder="Password" value={authContent?.password || ''} />
        <input type="submit" value="Login" onClick={(e) => handleSubmit(e)} />
      </form>
      <p>Click the button to simulate a successful login.</p>
      <div style={styles.noAccount}>
        <h2>Don't have an account?</h2>
        <Link style={styles.link} to="/new-user">Register here</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '250px',
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

  noAccount: {
    marginTop: '1rem',
    textAlign: 'center',
    color: '#333',
    fontSize: '1rem',
  }
};