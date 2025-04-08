import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ScooterItem from './scooter-market-item/ScooterItem';
import { useScooters } from '../../api/scooterApi';

const Market = () => {
  const theme = useTheme();
  const { scooters } = useScooters();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'calc(100vh - 100px)',
        p: 4,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Market
      </Typography>

      {scooters.length > 0 ? (
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
          {scooters.map((scooter) => (
            <ScooterItem key={scooter._id} {...scooter} theme={theme} />
          ))}
        </Box>
      ) : (
        <Typography variant="h6" sx={{ mt: 4 }}>
          No scooters available
        </Typography>
      )}
    </Box>
  );
};

export default Market;
