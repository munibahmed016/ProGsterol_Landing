"use client"

import { Box, Container, Typography, Button, Grid, useMediaQuery, useTheme } from "@mui/material"
import { motion } from "framer-motion"
import Link from "next/link"
import { Play } from "lucide-react"
import LanguageIcon from '@mui/icons-material/Language'
import Image from "next/image"
import productImage from "../../public/prog.webp"

const floatingAnimation = {
  upDown: {
    y: [0, -20, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function HeroSection() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: "white", position: "relative", overflow: "hidden" }}>
      {/* Background Elements */}
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

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontWeight: 800,
                  lineHeight: 1.2,
                  mb: 2,
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

              <Typography variant="body1" sx={{ mb: 4, fontFamily: "Poppins, sans-serif", color: '#071A2B', fontSize: '1.2rem' }}>
                Regulate Glucose Levels, Reverse Insulin Resistance & Take Control of Your Well-Being
              </Typography>

              {/* CTA Buttons */}
              <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, mb: 3 }}>
                <Button component={Link} href="#download" variant="outlined" startIcon={<LanguageIcon />} sx={{ width: "100%" }}>
                  Website
                </Button>
                <Button component={Link} href="#download" variant="outlined" startIcon={<Play />} sx={{ width: "100%" }}>
                  Watch Video
                </Button>
              </Box>

              {/* Placeholder for additional info */}
              <Typography variant="body2" color="#071A2B">
                Over 50000 million users trust ProGsterol for their daily health support.
              </Typography>
            </motion.div>
          </Grid>

          {/* Product Image Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                <Image src={productImage} alt="Product" width={isMobile ? 300 : 450} height={isMobile ? 300 : 450} style={{ maxWidth: "100%", height: "auto" }} />
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
