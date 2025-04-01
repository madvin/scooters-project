import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Login = () => {
  const theme = useTheme();

  const loginHandler = () => {
    
  }

  return (
    <Box
      component="form"
      onSubmit={loginHandler}
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
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </Box>
  );
}
export default Login;