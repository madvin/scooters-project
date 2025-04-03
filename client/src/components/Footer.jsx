import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 3,
        textAlign: 'center',
        mt: 'auto',
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Scooters. All rights reserved.
      </Typography>
    </Box>
  );
}