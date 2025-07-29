import { Link } from 'react-router';

export default function Profile() {

  return (
    <div style={styles.container}>
      <h1>Profile Page</h1>
      <Link style={styles.link} to='/home'>Return to User Home Page</Link>
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