"use client";

import { Box, Container, Typography, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";
import LanguageIcon from "@mui/icons-material/Language";
import Image from "next/image";
import productImage from "../../public/prog.webp";
import CertificatesSection from "./CertificatesCarousel";

const floatingAnimation = {
  upDown: {
    y: [0, -20, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 }, // Increased padding to prevent navbar overlap
        bgcolor: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating Background Effects */}
      <motion.div
        animate={floatingAnimation.upDown}
        style={{
          position: "absolute",
          top: "10%",
          right: "-80px",
          width: "250px",
          height: "250px",
          background: "linear-gradient(135deg, #FF7EB3, #51DC68, #1BB3F7)",
          borderRadius: "50%",
          filter: "blur(30px)",
          opacity: 0.6,
          zIndex: 0,
        }}
      />
      <motion.div
        animate={floatingAnimation.upDown}
        style={{
          position: "absolute",
          top: "5%",
          left: "10%",
          width: "80px",
          height: "80px",
          background: "linear-gradient(135deg, #00FFA3, #51DC68, #1BB3F7)",
          borderRadius: "50%",
          filter: "blur(15px)",
          opacity: 0.8,
          zIndex: 0,
        }}
      />
      <motion.div
        animate={floatingAnimation.upDown}
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "60px",
          height: "60px",
          background: "linear-gradient(135deg, #FF7EB3, #FF9900)",
          borderRadius: "50%",
          filter: "blur(15px)",
          opacity: 0.8,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Typography
                variant={isMobile ? "h2" : "h1"}
                sx={{
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" }, // Adjusted font sizes
                  fontWeight: 800,
                  lineHeight: 1.4,
                  mb: 2,
                  textAlign: { xs: "center", md: "left" }, // Center text on mobile
                }}
              >
                Transform Your{" "}
                <Box component="span" sx={{ color: "#51DC68" }}>
                  Health
                </Box>{" "}
                With{" "}
                <Box component="span" sx={{ color: "#1BB3F7" }}>
                  ProGsterol
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontFamily: "Poppins, sans-serif",
                  color: "#071A2B",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Regulate Glucose Levels, Reverse Insulin Resistance & Take Control of Your Well-Being
              </Typography>

              {/* CTA Buttons */}
              {/* <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  mb: 3,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  component={Link}
                  href="https://3zbio.pk/product/progsterol-new-dietary-supplement-to-support-healthy-glucose-level/"
                  variant="contained"
                  startIcon={<LanguageIcon />}
                  sx={{
                    width: { xs: "100%", sm: "auto" },
                    bgcolor: "#51DC68",
                    color: "white",
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    borderRadius: "8px",
                    "&:hover": { bgcolor: "#42B45C" },
                  }}
                >
                  Buy Now
                </Button>
                <Button
                  component={Link}
                  href="#download"
                  variant="outlined"
                  startIcon={<Play />}
                  sx={{
                    width: { xs: "100%", sm: "auto" },
                    borderColor: "#1BB3F7",
                    color: "#1BB3F7",
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    borderRadius: "8px",
                    "&:hover": { bgcolor: "#1BB3F7", color: "white" },
                  }}
                >
                  Watch Video
                </Button>
              </Box> */}

              <Typography
                variant="body1"
                color="#071A2B"
                sx={{ textAlign: { xs: "center", md: "left" }, fontSize: "1rem" }}
              >
                Over 50k users trust ProGsterol for their daily health support.
              </Typography>
              <CertificatesSection />
            </motion.div>
          </Grid>

          {/* Product Image */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                <Image
                  src={productImage}
                  alt="Product"
                  width={isMobile ? 280 : 450}
                  height={isMobile ? 280 : 450}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
