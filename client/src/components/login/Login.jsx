import { useState, useActionState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { toast } from 'react-toastify';

import { useLogin } from '../../api/authApi';
import { UserContext } from '../../contexts/UserContext';

export default function Login() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { userLoginHandler } = useContext(UserContext);
  const { login } = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async (event) => {
    event.preventDefault();
	
    try {
      const authData = await login(email, password);
      userLoginHandler(authData);

      toast.success('Successful Login');

      navigate(-1);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const [_, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' });

  return (
    <Box
      component="form"
      onSubmit={loginHandler}
      action={loginAction}
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
      <Button type="submit" variant="contained" color="primary" disabled={isPending} fullWidth>
        Login
      </Button>
      <Typography variant="body2" sx={{ mt: 2 }}>
        If you don't have a profile, click <Link to="/register">here</Link>
      </Typography>
    </Box>
  );
};
