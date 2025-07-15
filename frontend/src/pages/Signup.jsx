import AuthForm from '../components/AuthForm';
import axios from 'axios';

function Signup() {
  const handleSignup = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', data);
      console.log(response.data);
    } catch (error) {
      console.error('Signup failed:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <AuthForm type="signup" onSubmit={handleSignup} />
    </div>
  );
}

export default Signup;
