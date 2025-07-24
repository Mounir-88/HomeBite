import { useNavigate } from 'react-router-dom';
import './Profile.css';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Profile() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);


  const handleLogout = () => {
    localStorage.removeItem('token');   // Clear the token
    setIsLoggedIn(false);
    navigate('/login');                 // Redirect to login page
  };

  return (
    <div className="profile-page">
      <h2>Your Profile</h2>
      <p>Welcome! You are logged in.</p>

      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
