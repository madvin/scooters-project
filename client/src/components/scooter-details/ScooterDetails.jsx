import { Link, useNavigate, useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useDeleteScooter, useScooter } from '../../api/scooterApi';
import useAuth from '../../hooks/useAuth';

export default function ScooterDetails() {
    const theme = useTheme();
    const navigate = useNavigate();
    const { userId } = useAuth();
    const { scooterId } = useParams();
    const { scooter } = useScooter(scooterId);
    const { deleteScooter } = useDeleteScooter();

    const scooterDeleteClickHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${scooter.title} scooter?`);

        if(!hasConfirm) {
            return;
        }

        await deleteScooter(scooterId);
        navigate('/market');
    };

    const isOwner = userId === scooter._ownerId;

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
           <Typography variant="h4" gutterBottom>
                Scooter Details
            </Typography>
            <div className="info-scooter">
                <div className="scooter-header">
                    <img className="scooter-img" src={scooter.imageUrl} />
                    <h3>{scooter.title}</h3>
                    <span className="brand">Brand: {scooter.brand}</span>
                    <p className="model">{scooter.model}</p>
                    <p className="price">Price: {scooter.price}BGN</p>
                </div>
                <p className="description">{scooter.description}</p>
                {isOwner && (
                    <div className="buttons">
                        <Link to={`/market/${scooter._id}/details`} className="button">Edit</Link>
                        <button
                            onClick={scooterDeleteClickHandler}
                            className="button"
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>
        </Box>
    )
    
}
