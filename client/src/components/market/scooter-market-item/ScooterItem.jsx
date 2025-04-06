import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

export default function ScooterItem({ _id, brand, model, imageUrl, price, theme }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: 3,
        borderRadius: 2,
        p: 2,
        width: 250,
        height: 400,
        justifyContent: 'space-between',
        m: 1,
      }}
    >
      <Typography variant="h6" textAlign="center">
        {brand} {model}
      </Typography>
      <Box
        component="img"
        sx={{
          width: '100%',
          height: 180,
          objectFit: 'contain',
          mb: 2,
          borderRadius: 1,
          backgroundColor: '#f5f5f5',
        }}
        src={imageUrl}
        alt={`${brand} ${model}`}
      />
      <Typography variant="body1" gutterBottom>
        Price: {price} BGN
      </Typography>
      <Button
        component={Link}
        to={`/market/${_id}/details`}
        variant="contained"
        fullWidth
      >
        Details
      </Button>
    </Box>
  );
}
