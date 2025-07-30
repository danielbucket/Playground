import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import AuthService from '../services/auth.service.js';

export default function NewUser() {
  const [password, setPassword] = useState('password');
  const [username, setUsername] = useState('admin');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password) {
      console.error('All fields are required');
      return;
    }

    AuthService.new_user(username, password)
      .then((result) => {
        if (result) {
          console.log('New user created successfully');
          navigate('/auth/login', { replace: true, state: { username } });
        } else {
          console.error('Failed to create new user');
      }
    })
    .catch((error) => {
      console.error('Error creating new user:', error);
    })
  };

  return (
    <div style={styles.container}>
      <h1>Create New User</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Password:</label>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Create Account</button>
      </form>
      <Link style={styles.link} to='/auth/login'>Already have an account?</Link>
    </div>
  );
};

async function postNewUser(password, username) {
  const response = await fetch('http://localhost:3000/react-auth-demo/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.status === 201) {
    console.error('Failed to create user');
    return null;
  };
  
  const data = await response.json();

  if (!data) {
    console.error('Error creating user');
    return null;
  };

  return data;
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
  }
};