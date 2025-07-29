import { Link, useNavigate } from 'react-router';
import { useState } from 'react';

export default function NewUser() {
  const [formState, setFormState] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setFormState(() => event.target)
    navigate('/login', {
      replace: true,
      state: {
        username: event.target[0].value,
        password: event.target[1].value
      }
    });
  };

  return (
    <div style={styles.container}>
      <h1>Create New User</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value="admin"/>
        <input type="password" placeholder="Password" value="password"/>
        <button type="submit">Create Account</button>
      </form>
      <Link style={styles.link} to='/login'>Already have an account?</Link>
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