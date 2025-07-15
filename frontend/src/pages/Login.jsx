import AuthForm from '../components/AuthForm';
import axios from 'axios';

function Login() {
  const handleLogin = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', data);
      console.log(response.data);
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
}

export default Login;
