import { Link } from 'react-router';

export default function UserHome() {
  return (
    <div>
      <h1>User Home</h1>
      <Link to="/home/profile">Go to Profile</Link>
      <br />
      <Link to="/home/logout">Log Out</Link>
    </div>
  );
};