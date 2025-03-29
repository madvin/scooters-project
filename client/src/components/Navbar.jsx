import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';
import React from 'react';

const Navbar = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        My App
      </Typography>
      <Link component={RouterLink} to="/" color="inherit" underline="none" sx={{ mx: 1 }}>
        Home
      </Link>
      <Link component={RouterLink} to="/about" color="inherit" underline="none" sx={{ mx: 1 }}>
        About
      </Link>
      <Link component={RouterLink} to="/contact" color="inherit" underline="none" sx={{ mx: 1 }}>
        Contact
      </Link>
      <Link component={RouterLink} to="/login" color="inherit" underline="none" sx={{ mx: 1 }}>
        Login
      </Link>
      <Link component={RouterLink} to="/register" color="inherit" underline="none" sx={{ mx: 1 }}>
        Register
      </Link>
    </Toolbar>
  </AppBar>
);

export default Navbar;
