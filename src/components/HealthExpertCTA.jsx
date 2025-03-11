"use client"

import { Box, Typography, Button } from "@mui/material"
import { motion } from "framer-motion"
import { Phone } from "lucide-react"

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
          bgcolor: "#6366f1",
          borderRadius: 4,
          p: 4,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
          Connect with our health expert
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
          Get personalized advice from our certified health professionals.
        </Typography>
        <Button
          variant="contained"
          startIcon={<Phone />}
          sx={{
            bgcolor: "white",
            color: "#6366f1",
            borderRadius: "50px",
            py: 1.5,
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 0.9)",
            },
          }}
        >
          SCHEDULE A CALL
        </Button>
      </Box>
    </motion.div>
  )
}


