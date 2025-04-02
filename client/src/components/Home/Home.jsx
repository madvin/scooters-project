import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router';
import { useLatestScooters } from '../../api/scooterApi';

export default function Home() {
  
  const theme = useTheme();
  const { latestScooters } = useLatestScooters();

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
      <Typography variant="h2" gutterBottom>
        Latest Scooters
      </Typography>

      {latestScooters.length === 0 ? (
        <Typography variant="h6" color="text.secondary">
          No scooters have been added yet. Check back soon!
        </Typography>
      ) : (
        latestScooters.map((scooter) => (
          <Box key={scooter._id} className="scooter" sx={{ marginBottom: 4 }}>
            <div className="image-wrap">
              <img src={scooter.imageUrl} alt={scooter.model} />
            </div>
            <Typography variant="h5" gutterBottom>
              {scooter.model}
            </Typography>
            <Box className="data-buttons">
              <Link
                to={`/scooters/${scooter._id}/details`}
                className="btn details-btn"
              >
                Details
              </Link>
            </Box>
          </Box>
        ))
      )}

      <Typography variant="h5" sx={{ marginTop: 6 }}>
        Your one-stop solution for all your needs.
      </Typography>
    </Box>
  );
}
