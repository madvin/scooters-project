import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { toast } from "react-toastify";

import { useDeleteScooter, useScooter } from "../../api/scooterApi";
import useAuth from "../../hooks/useAuth";

export default function ScooterDetails() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { userId } = useAuth();
  const { scooterId } = useParams();
  const { scooter } = useScooter(scooterId);
  const { deleteScooter } = useDeleteScooter();

  const isOwner = userId === scooter?._ownerId;

  const scooterDeleteClickHandler = async () => {
    const hasConfirm = confirm(
      `Are you sure you want to delete ${scooter.title}?`
    );
    if (!hasConfirm) return;

    try {
      await deleteScooter(scooterId);
      toast.success("Scooter deleted successfully!");
      navigate("/market");
    } catch (err) {
      toast.error(err.message || "Failed to delete scooter.");
    }
  };

  if (!scooter) return null; // Or a loading spinner

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 4,
      }}
    >
      <Card sx={{ maxWidth: 600, width: "100%", p: 2 }}>
        <CardMedia
          component="img"
          image={scooter.imageUrl}
          alt={scooter.title}
          sx={{
            height: 300,
            width: "100%",
            objectFit: "contain",
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
          }}
        />

        <CardContent>
          <Typography variant="h5" gutterBottom>
            {scooter.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Brand:</strong> {scooter.brand}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Model:</strong> {scooter.model}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Price:</strong> {scooter.price} BGN
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            {scooter.description}
          </Typography>

          {isOwner && (
            <Stack
              direction="row"
              spacing={2}
              sx={{ mt: 4, justifyContent: "center" }}
            >
              <Button
                variant="outlined"
                component={Link}
                to={`/market/${scooter._id}/edit`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={scooterDeleteClickHandler}
              >
                Delete
              </Button>
            </Stack>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
