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
        justifyContent: 'flex-start',
        height: '100vh',
        overflowY: 'auto',
        p: 4,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      {/* <Typography variant="h4" gutterBottom>
        Market
      </Typography>
      {scooters.length > 0 ? (
        scooters.map((scooter) => (
          <ScooterItem key={scooter._id} {...scooter} theme={theme} />
        ))
      ) : (
        <Typography variant="h6" sx={{ mt: 4 }}>
          No scooters available
        </Typography>
      )} */}
    </Box>
  );
};

export default Market;
