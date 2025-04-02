import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Register = () => {
    const theme = useTheme();
    const registerHandler = () => {
      
    }
    
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
        label="Username"
        variant="outlined"
        margin="normal"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
      <TextField
        label="Repeat Password"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Register
      </Button>
    </Box>
  );
    }
export default Register;