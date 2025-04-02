import { useNavigate } from 'react-router';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useCreateScooter } from '../../api/scooterApi';

export default function ScooterCreate() {
    const theme = useTheme();

    const navigate = useNavigate();
    const { create: createScooter } = useCreateScooter();

    const submitAction = async (formData) => {

        const scooterData = Object.fromEntries(formData);
        await createScooter(scooterData);

        navigate('/market');
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
            }}
        >
            <Typography variant="h4" gutterBottom>
                Create New Offer
            </Typography>
            <form onSubmit={submitAction}>
                <input type="text" name="title" placeholder="Title" required />
                <input type="text" name="brand" placeholder="Brand" required />
                <input type="text" name="model" placeholder="Model" required />
                <input type="text" name="imageUrl" placeholder="Image URL" required />
                <input type="number" name="price" placeholder="Price" required />
                <input type="text" name="description" placeholder="Description" required />
                <button type="submit">Create</button>
            </form>
        </Box>
    )
}