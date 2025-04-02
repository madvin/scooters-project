import { useNavigate } from 'react-router';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useCreateScooter } from '../../api/scooterApi';

export default function ScooterCreate() {
    const theme = useTheme();

    const navigate = useNavigate();
    const { create: createScooter } = useCreateScooter();

    const submitAction = async (e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const scooterData = Object.fromEntries(data.entries());
      createScooter(scooterData).then(() => navigate('/market'));
      
    };

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
            '& label': { mt: 2, fontWeight: 'bold' },
            '& input, & textarea': { width: '100%', padding: 1, mb: 2 },
            '& .btn.submit': { padding: 1, cursor: 'pointer' },
          }}
        >
          <Typography variant="h4" gutterBottom>
            Create New Offer
          </Typography>
          <form onSubmit={submitAction}>
            <label htmlFor="title">Scooter title:</label>
            <input type="text" id="title" name="title" placeholder="Title" required />
      
            <label htmlFor="brand">Brand:</label>
            <input type="text" id="brand" name="brand" placeholder="Brand" required />
      
            <label htmlFor="model">Model:</label>
            <input type="text" id="model" name="model" placeholder="Model" required />
      
            <label htmlFor="imageUrl">Image URL:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Image URL" required />
      
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" placeholder="Price" min="0" required />
      
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" placeholder="Description" required></textarea>
      
            <button className="btn submit" type="submit">Create Scooter</button>
          </form>
        </Box>
      );
}