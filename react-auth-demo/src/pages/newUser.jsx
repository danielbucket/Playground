import { Link, useNavigate } from 'react-router';

export default function NewUser() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };
  
  return (
    <div>
      <h1>Create New User</h1>
      <button onClick={handleClick}>Create Account</button>
      <br />
      <Link to='/login'>Already have an account?</Link>
    </div>
  );
};