import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
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
        minHeight: 'calc(100vh - 200px)', // Adjusted to account for header/footer
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <Typography 
            variant="h5" 
            color="text.secondary"
            sx={{
              maxWidth: '600px',
              padding: 3,
              borderRadius: 2,
              backgroundColor: 'rgba(0,0,0,0.03)',
            }}
          >
            No scooters have been added yet. Check back soon!
          </Typography>
        </Box>
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
                to={`/market/${scooter._id}/details`}
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
