"use client"

import { Box, Typography } from "@mui/material"

// Example badges - replace with your actual images & names
const badges = [
  { logo: "/1-1.png", name: "" },
  { logo: "/2-1.webp", name: "" },
  { logo: "/4-1.webp", name: "" },
  { logo: "/5-1.webp", name: "" },
  { logo: "/6.png", name: "" },
]

export default function CertificatesSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        py: 4,
        px: 2,
      }}
    >
      <Typography
        variant="body1"
        fontWeight="500"
        sx={{
          width: "100%",
          textAlign: "center",
          mb: 3,
          fontSize: { xs: "1.5rem", md: "1.5rem" },
          color: "#071A2B",
        }}
      >
        WE ARE BACKED BY SCIENCE
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "row" },
          flexWrap: { xs: "nowrap", md: "wrap" },
          overflowX: { xs: "auto", md: "unset" },
          gap: 3,
          width: "100%",
          maxWidth: "800px",
          justifyContent: "center",
          px: { xs: 2, md: 0 },
        }}
      >
        {badges.map((badge, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minWidth: { xs: "80px", md: "auto" },
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
          </Box>
        ))}
      </Box>
    </Box>
  )
}