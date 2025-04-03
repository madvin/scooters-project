import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Contact = () => {
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
            Contact Us
        </Typography>
        <Typography variant="body1">
            If you have any questions, feel free to reach out!
        </Typography>
        </Box>
    );
    }
export default Contact;