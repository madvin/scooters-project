import { Link } from 'react-router';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import useAuth from '../../hooks/useAuth';

export default function Header() {
    const { email, isAuthenticated } = useAuth();

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
            textAlign: 'center',
            padding: 2,
          }}
        >
            <h1><Link className="home" to="/">Home</Link></h1>
            <nav>
                <Link to="/market">Market</Link>
                {isAuthenticated
                    ? (
                        <div id="user">
                            <Link to="/market/create">Create New Offer</Link>
                            <Link to="/logout">Logout</Link>
                            {email}
                        </div>
                    )
                    : (
                        <div id="guest">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    )
                }
            </nav>
        </Box>
    );
}