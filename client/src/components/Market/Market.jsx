import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Market = () => {
    const theme = useTheme();

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
                We are here to help you find the scooter of your dreams!
            </Typography>
        </Box>
    );
}
export default Market;