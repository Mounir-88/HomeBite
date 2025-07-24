import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import "../components/AuthForm.css";
import axios from 'axios';



function Signup() {
  const handleSignup = async (data) => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/signup', data);
      console.log(response.data);
    } catch (error) {
      console.error('Signup failed:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <AuthForm type="signup" onSubmit={handleSignup} />

      <p className="switch-text">
        Already have an account? <Link to="/login">Log in here</Link>
      </p>
    </div>
  );
}

export default Signup;
