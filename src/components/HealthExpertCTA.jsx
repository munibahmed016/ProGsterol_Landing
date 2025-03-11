"use client"

import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function HealthExpertCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      style={{ height: "100%" }}
    >
      <Box
        sx={{
          bgcolor: "#1E293B", // Darker background for contrast
          borderRadius: 4,
          py: 5,
          px: { xs: 3, md: 5 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          color: "white",
        }}
      >
        <Box sx={{ textAlign: { xs: "center", md: "left" }, mb: { xs: 3, md: 0 } }}>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Connect with our health expert
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9, mt: 1 }}>
            Get personalized advice from our certified health professionals.
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Phone />}
          sx={{
            bgcolor: "#6366f1",
            borderRadius: "50px",
            py: 1.5,
            px: 4,
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            "&:hover": {
              bgcolor: "#4f46e5",
            },
          }}
        >
          Schedule a Call
        </Button>
      </Box>
    </motion.div>
  );
}
