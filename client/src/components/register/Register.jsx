import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useRegister } from '../../api/authApi';
import { useUserContext } from '../../contexts/UserContext';

export default function Register() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { register } = useRegister();
  const { userLoginHandler } = useUserContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      console.log('Password mismatch');
      return;
    }

    try {
      const authData = await register(email, password);
      userLoginHandler(authData);
      navigate('/');
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={registerHandler}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        ml: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <TextField
        label="Repeat Password"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Register
      </Button>
      <Typography variant="body2" sx={{ mt: 2 }}>
        If you have a profile, click <Link to="/login">here</Link>
      </Typography>
    </Box>
  );
};