import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Register = () => {
    const theme = useTheme();
    
    return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
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
        />
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
            Register
        </Button>
        </Box>
    );
    }
export default Register;