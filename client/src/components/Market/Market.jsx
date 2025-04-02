import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useScooters } from "../../hooks/useScooters";

const Market = () => {
    const theme = useTheme();
    const  { scooters } = useScooters();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
            }}
        >
            <Typography variant="h4" gutterBottom>
                Market
            </Typography>
            <Typography variant="body1">
                { scooters .length > 0
                    ? scooters.map(scooter => <ScooterItem key={scooter.id} {...scooter} />)
                    : <h4 className="no-scooters">No scooters available</h4>}
            </Typography>
        </Box>
    );
}
export default Market;