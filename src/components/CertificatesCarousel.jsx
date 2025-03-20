"use client";

import { Box, Typography } from "@mui/material";

// Example badges - replace with your actual images & names
const badges = [
  { logo: "/1-1.png", name: "" },
  { logo: "/2-1.webp", name: "" },
  { logo: "/4-1.webp", name: "" },
  { logo: "/5-1.webp", name: "" },
  { logo: "/6.png", name: "" },
];

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
      {/* Title */}
      <Typography
        variant="body1"
        fontWeight="500"
        sx={{
          width: "100%",
          textAlign: "center",
          mb: 3,
          fontSize: { xs: "1.2rem", md: "1.5rem" }, // Adjusted for mobile
          color: "#071A2B",
        }}
      >
        WE ARE BACKED BY SCIENCE
      </Typography>

      {/* Badges Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: { xs: "nowrap", md: "wrap" }, // Allow scrolling on mobile, wrap on desktop
          overflowX: { xs: "auto", md: "unset" },
          gap: 3,
          width: "100%",
          maxWidth: "900px",
          justifyContent: { xs: "flex-start", md: "center" }, // Start on mobile, center on desktop
          px: { xs: 2, md: 0 },
          scrollbarWidth: "none", // Hide scrollbar for better aesthetics
          "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar on WebKit browsers
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
              minWidth: { xs: "70px", sm: "90px", md: "110px" }, // Adjust badge size based on screen
            }}
          >
            {/* Circular Badge Container */}
            <Box
              sx={{
                width: { xs: 65, sm: 85, md: 100 },
                height: { xs: 65, sm: 85, md: 100 },
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
                  width: "85%",
                  height: "85%",
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
  );
}
