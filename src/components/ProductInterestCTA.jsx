"use client"

import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProductInterestCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{ height: "100%" }}
    >
      <Box
        sx={{
          bgcolor: "#1E293B", // Darker blue shade for contrast
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
          Interested in our product?
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.8, mt: 1 }}>
            Unlock premium features and take the next step towards success.
          </Typography>
        </Box>
        <Button
          variant="contained"
          endIcon={<ArrowRight />}
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
          Get Started Now
        </Button>
      </Box>
    </motion.div>
  );
}
