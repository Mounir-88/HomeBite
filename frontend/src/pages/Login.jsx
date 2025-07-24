import AuthForm from '../components/AuthForm';
import '../components/AuthForm.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

  function Login() {
    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(AuthContext);


    const handleLogin = async (data) => {
      try {
        const response = await axios.post('http://localhost:4000/api/auth/login', data);
        console.log(response.data);


        if (data.email === 'admin@homebite.com') {
          navigate('/admin');  // Redirect admin
        } else {
          navigate('/');       // Redirect normal users
        }

        localStorage.setItem('token', response.data.token);
        setIsLoggedIn(true);

      } catch (error) {
        console.error('Login failed:', error.response?.data || error.message);
      }
    };

    return (
      <div className="auth-container">
        <h2>Login to HomeBite</h2>
        <AuthForm type="login" onSubmit={handleLogin} />

        <p className="switch-text">
          Don’t have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    );
}

export default Login;
