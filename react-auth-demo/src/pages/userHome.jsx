import { Link } from 'react-router';

export default function UserHome() {
  return (
    <div style={styles.container}>
      <h1>User Home Page</h1>
      <div style={styles.linkList}>
        <Link style={styles.link} to="/home/profile">Go to Profile</Link>
        <Link style={styles.link} to="/home/logout">Log Out</Link>
      </div>
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

  linkList: {
    display: 'flex',
    flexDirection: 'row',
  },

  link: {
    margin: '1rem',
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '1.2rem',
  },
};