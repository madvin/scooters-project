import { useState, useActionState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { toast } from 'react-toastify';

import { useCreateScooter } from '../../api/scooterApi';

export default function ScooterCreate() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { create: createScooter } = useCreateScooter();

  const [formData, setFormData] = useState({
    title: '',
    brand: '',
    model: '',
    imageUrl: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const createHandler = async () => {
    try {
      await createScooter(formData);
      toast.success('Scooter created successfully!');
      navigate('/market');
    } catch (err) {
      toast.error(err.message || 'Failed to create scooter');
      navigate('/market');
    }
  };

  const [_, submitAction, isPending] = useActionState(createHandler, formData);

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        submitAction();
      }}
      action={submitAction}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        ml: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '50%',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Create New Offer
      </Typography>

      <TextField
        label="Scooter Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        label="Brand"
        name="brand"
        value={formData.brand}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        label="Model"
        name="model"
        value={formData.model}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        label="Image URL"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        label="Price"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        fullWidth
        required
        inputProps={{ min: 0 }}
      />
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        fullWidth
        multiline
        rows={4}
        required
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isPending}
        fullWidth
        sx={{ mt: 2 }}
      >
        {isPending ? 'Creating...' : 'Create Scooter'}
      </Button>
    </Box>
  );
}
