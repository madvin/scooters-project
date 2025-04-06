import { useEffect, useState, useActionState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { toast } from 'react-toastify';

import { useEditScooter, useScooter } from '../../api/scooterApi';
import useAuth from '../../hooks/useAuth';

export default function ScooterEdit() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { userId } = useAuth();
  const { scooterId } = useParams();
  const { scooter } = useScooter(scooterId);
  const { edit } = useEditScooter();

  const [formData, setFormData] = useState({
    title: '',
    brand: '',
    model: '',
    imageUrl: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    if (scooter) {
      setFormData({
        title: scooter.title || '',
        brand: scooter.brand || '',
        model: scooter.model || '',
        imageUrl: scooter.imageUrl || '',
        price: scooter.price || '',
        description: scooter.description || '',
      });
    }
  }, [scooter]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const editHandler = async () => {
    try {
      await edit(scooterId, formData);
      toast.success('Scooter updated successfully!');
      navigate(`/market/${scooterId}/details`);
    } catch (err) {
      toast.error(err.message || 'Failed to update scooter');
    }
  };

  const [_, submitAction, isPending] = useActionState(editHandler, formData);

  const isOwner = userId === scooter?.ownerId;
  if (!isOwner) return <Navigate to="/market" />;

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
        Edit Offer
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
        {isPending ? 'Updating...' : 'Edit Scooter'}
      </Button>
    </Box>
  );
}
