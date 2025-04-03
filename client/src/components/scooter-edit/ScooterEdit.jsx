import { Navigate, useNavigate, useParams } from 'react-router';
import { useEditScooter, useScooter } from '../../api/scooterApi';
import useAuth from '../../hooks/useAuth';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';

export default function ScooterEdit() {
    const theme = useTheme();
    const navigate = useNavigate();
    const { userId } = useAuth();
    const { scooterId } = useParams();
    const { scooter } = useScooter(scooterId);
    const { edit } = useEditScooter();

    const formAction = async (formData) => {
        
        const scooterData = Object.fromEntries(formData);

        await edit(scooterId, scooterData);

        navigate(`/market/${scooterId}/details`);
    }
    const isOwner = userId === scooter.ownerId;

    if(!isOwner) {
        return <Navigate to="/market" />
    }

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
            '& label': { mt: 2, fontWeight: 'bold' },
            '& input, & textarea': { width: '100%', padding: 1, mb: 2 },
            '& .btn.submit': { padding: 1, cursor: 'pointer' },
          }}
        >
          <Typography variant="h4" gutterBottom>
            Edit Offer
          </Typography>
          <form onSubmit={formAction}>
            <label htmlFor="title">Scooter title:</label>
            <input type="text" id="title" name="title" defaultValue={scooter.title} required />
      
            <label htmlFor="brand">Brand:</label>
            <input type="text" id="brand" name="brand" defaultValue={scooter.brand} required />
      
            <label htmlFor="model">Model:</label>
            <input type="text" id="model" name="model" defaultValue={scooter.model} required />
      
            <label htmlFor="imageUrl">Image URL:</label>
            <input type="text" id="imageUrl" name="imageUrl" defaultValue={scooter.imageUrl} required />
      
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" min="0" defaultValue={scooter.price} required />
      
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" defaultValue={scooter.description} required></textarea>
      
            <input className="btn submit" type="submit" value="Edit Scooter" />
          </form>
        </Box>
      );
}