import { Box, Typography, Button } from '@mui/material';
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
        minHeight: 'calc(100vh - 200px)',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        textAlign: 'center',
        padding: 3,
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
            width: '100%',
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
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 3,
            mt: 2,
            width: '100%',
          }}
        >
          {latestScooters.map((scooter) => (
            <Box
              key={scooter._id}
              sx={{
                width: '100%',
                maxWidth: 280,
                backgroundColor: theme.palette.background.paper,
                boxShadow: 3,
                borderRadius: 2,
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src={scooter.imageUrl}
                alt={scooter.model}
                sx={{
                  width: '100%',
                  height: 180,
                  objectFit: 'contain',
                  borderRadius: 1,
                  backgroundColor: '#f5f5f5',
                  mb: 2,
                }}
              />
              <Typography variant="h6" gutterBottom>
                {scooter.model}
              </Typography>
              <Button
                component={Link}
                to={`/market/${scooter._id}/details`}
                variant="contained"
                fullWidth
              >
                Details
              </Button>
            </Box>
          ))}
        </Box>
      )}

      <Typography variant="h5" sx={{ marginTop: 6 }}>
        Your one-stop solution for all your needs.
      </Typography>
    </Box>
  );
}
