import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function Header() {
    const { isAuthenticated } = useAuth();

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{
                        flexGrow: 1,
                        textDecoration: 'none',
                        color: 'inherit'
                    }}
                >
                    Scooters
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/market">Market</Button>
                    <Button color="inherit" component={Link} to="/contacts">Contacts</Button>
                    
                    {isAuthenticated ? (
                        <>
                            <Button color="inherit" component={Link} to="/market/create">Create</Button>
                            <Button color="inherit" component={Link} to="/logout">Logout</Button>
                        </>
                    ) : (
                        <>
                            <Button color="inherit" component={Link} to="/login">Login</Button>
                            <Button color="inherit" component={Link} to="/register">Register</Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}