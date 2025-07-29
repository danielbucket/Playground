import { Link } from 'react-router';

export default function PublicHome() {

  return (
    <div style={styles.container}>
      <h1>Public Home Page</h1>
      <Link style={styles.link} to='/login'>Login</Link>
      <Link style={styles.link} to='/service'>Service</Link>
      <Link style={styles.link} to='/about'>About</Link>
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
};