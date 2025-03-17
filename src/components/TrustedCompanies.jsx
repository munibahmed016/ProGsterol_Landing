"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CertificatesSection from "./CertificatesCarousel";

const benefits = [
  { title: "No Side Effects", description: "Peptides are a compound of amino acids; they are absolutely safe for the body.", icon: "/effects.svg" },
  { title: "Fatty Liver", description: "Reduces the risk of fatty liver and heart disease by lowering cholesterol, triglycerides, and inflammation.", icon: "/Fatty_liver.svg" },
  { title: "Body Weight Control", description: "Promotes weight loss by reducing body weight, BMI, and WHR.", icon: "/weight_loss.svg" },
  { title: "Diabetes Care", description: "Manufactured especially for Prediabetes & Type 2 Diabetes.", icon: "/diabetes.svg" },
  { title: "Dietary Supplement", description: "World's 1st NDI (New Dietary Ingredient) as synthetic peptide.", icon: "/fda.png" },
  { title: "Supports Heart Health", description: "Helps regulate blood pressure and improves cardiovascular function for a healthy heart.", icon: "/icons/heart.svg" },
  { title: "Reduces Stress", description: "Lowers cortisol levels, reducing stress and promoting better sleep quality.", icon: "/icons/stress.svg" },
  { title: "Improves Digestion", description: "Enhances gut health and digestion by promoting beneficial gut bacteria.", icon: "/icons/digestion.svg" },
];

const textSequence = [
  { text: "Reverse Diabetes", color: "#51DC68" },
  { text: "Support Weight Loss", color: "#1BB3F7" },
  { text: "Improve Fatty Liver", color: "#FF9800" },
  {text: "Improve Heart Health", color: "#51DC68"},
  {text: "Stabilize Glucose level", color: "#1BB3F7"},
];

export default function TrustedCompanies() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textSequence.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f9f9ff" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, fontWeight: 700, mb: 3, color: "#071A2B" }}
        >
          ProGsterol® Trusted Worldwide <br />
          <AnimatePresence mode="wait">
            <motion.div
              key={textSequence[index].text}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.6 }}
              style={{ display: "inline-block" }}
            >
              <Box component="span" sx={{ color: textSequence[index].color, fontWeight: "bold" }}>
                {textSequence[index].text}
              </Box>
            </motion.div>
          </AnimatePresence>
        </Typography>

        {/* Grid layout for large screens, Carousel for mobile */}
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    bgcolor: "white",
                    p: 3,
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <Box component="img" src={benefit.icon} alt={benefit.title} sx={{ height: 40, mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#071A2B" }}>{benefit.title}</Typography>
                  <Typography variant="body2" sx={{ color: "#6B7280" }}>{benefit.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          
          {/* Mobile Carousel */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Slider
              dots
              infinite
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay
              autoplaySpeed={3000}
              responsive={[{ breakpoint: 768, settings: { slidesToShow: 1 } }]}
            >
              {benefits.map((benefit, index) => (
                <Box key={index} sx={{ px: 2 }}>
                  <Box
                    sx={{
                      bgcolor: "white",
                      p: 3,
                      borderRadius: "12px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                      textAlign: "center",
                      height: "250px",
                    }}
                  >
                    <Box component="img" src={benefit.icon} alt={benefit.title} sx={{ height: 40, mb: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#071A2B" }}>{benefit.title}</Typography>
                    <Typography variant="body2" sx={{ color: "#6B7280" }}>{benefit.description}</Typography>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
