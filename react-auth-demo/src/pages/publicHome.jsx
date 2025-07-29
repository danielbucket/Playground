import { Link } from 'react-router';

export default function PublicHome() {

  return (
    <div>
      <h1>Public Home Page</h1>
      <Link to='/login'>Login</Link>
    </div>
  );
};