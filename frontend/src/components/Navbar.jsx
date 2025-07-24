import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="site-title">HomeBite</Link>
      </div>

      <div className="navbar-center">
        <Link to="/">Home</Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="/products">Products</Link>
        <Link to="/shops">Shops</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="navbar-right">
        {isLoggedIn ? (
          <Link to="/profile" className="profile-icon">👤</Link>
        ) : (
          <Link to="/login" className="login-icon">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
