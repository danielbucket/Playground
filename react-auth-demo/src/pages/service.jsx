import { Link } from 'react-router';

export default function Service() {
  return (
    <div style={styles.container}>
      <h1>Service Page</h1>
      <Link to='/'>Return Home</Link>
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