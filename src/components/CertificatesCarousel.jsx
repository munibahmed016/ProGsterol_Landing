"use client"

import { Box, Typography } from "@mui/material"
import { motion } from "framer-motion"

// Example badges - replace with your actual images & names
const badges = [
  { logo: "/1-1.png", name: "Estonia" },
  { logo: "/2-1.webp", name: "Vietnam" },
  { logo: "/3-1.webp", name: "Philippines" },
  { logo: "/4-1.webp", name: "Malaysia" },
  { logo: "/5-1.webp", name: "Togo" },
  { logo: "/6.png", name: "Tajikistan" },
  { logo: "/7.png", name: "South Africa" },
  { logo: "/8.png", name: "Eswatini" },
  { logo: "/9.png", name: "Kenya" },
  { logo: "/10.png", name: "Morocco" },
]

const scrollVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 40,
      ease: "linear",
    },
  },
}

export default function CertificatesSection() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        width: "100%",
        backgroundColor: "#f9f9ff",
        py: 4,
        position: "relative",
      }}
    >
      {/* Left-side static purple heading bar */}
      <Box
        sx={{
          minWidth: 300,
          backgroundColor: "#1BB3F7 ",
          color: "white",
          textAlign: "left",
          borderRadius: "8px",
          py: 2,
          px: 3,
          height: "fit-content",
          ml: { xs: 2, md: 4 },
          zIndex: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ fontSize: "1.5rem", lineHeight: 1.3, color: "white" }}>
          Certificates
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "1rem" }}>
          From Global Regulatory Authorities
        </Typography>
      </Box>

      {/* Infinite scroll container for certificates */}
      <Box
        sx={{
          flex: 1,
          overflow: "hidden",
          ml: 2,
          position: "relative",
        }}
      >
        <Box
          component={motion.div}
          variants={scrollVariants}
          animate="animate"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            whiteSpace: "nowrap",
            minWidth: "fit-content",
          }}
        >
          {/* Duplicate badges for smooth infinite scrolling */}
          {[...badges, ...badges].map((badge, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                width: 100,
              }}
            >
              {/* Circular border container */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  border: "2px solid #D0D5DD",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  mb: 1,
                  backgroundColor: "#fff",
                }}
              >
                <Box
                  component="img"
                  src={badge.logo}
                  alt={badge.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    filter: "grayscale(30%)",
                    transition: "filter 0.3s",
                    "&:hover": {
                      filter: "grayscale(0%)",
                    },
                  }}
                />
              </Box>
              {/* Country/Authority name */}
              <Typography
                variant="caption"
                sx={{
                  color: "#071A2B",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                  whiteSpace: "nowrap",
                }}
              >
                {badge.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
