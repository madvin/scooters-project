import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { toast } from 'react-toastify';

import { useLogin } from '../../api/authApi';
import { UserContext } from '../../contexts/UserContext';

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { userLoginHandler } = useContext(UserContext);
  const { login } = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  console.log(email, password, loading);
  

  const loginHandler = async () => {
    
    setLoading(true);
    
    try {
      const response = await login({ email, password });
      userLoginHandler(response.data);
      toast.success('Login successful!');
      navigate('/dashboard');
      console.log(response.data);
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Login failed!');
     
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        ml: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '50%',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>

      <TextField
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={loginHandler}
        disabled={loading}
        sx={{ mt: 2 }}
      >
        {loading ? 'Logging in...' : 'Login'}
      </Button>
    </Box>
  );
};

export default Login;