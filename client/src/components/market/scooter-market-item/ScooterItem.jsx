import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

export default function ScooterItem({ _id, brand, model, imageUrl, price, theme }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: 3,
        borderRadius: 2,
        p: 3,
        mb: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        {brand} {model}
      </Typography>
      <Box
        component="img"
        sx={{ width: '100%', maxHeight: 200, objectFit: 'cover', mb: 2, borderRadius: 1 }}
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
        color="primary"
      >
        Details
      </Button>
    </Box>
  );
}