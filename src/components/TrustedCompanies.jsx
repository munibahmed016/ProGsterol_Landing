"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CertificatesSection from "./CertificatesCarousel";
import BenefitsGrid from "./BenefitsGrid";

// const benefits = [
//   { title: "No Side Effects", description: "Peptides are a compound of amino acids; they are absolutely safe for the body.", icon: "/effects.svg" },
//   { title: "Fatty Liver", description: "Reduces the risk of fatty liver and heart disease by lowering cholesterol, triglycerides, and inflammation.", icon: "/Fatty_liver.svg" },
//   { title: "Body Weight Control", description: "Promotes weight loss by reducing body weight, BMI, and WHR.", icon: "/weight_loss.svg" },
//   { title: "Diabetes Care", description: "Manufactured especially for Prediabetes & Type 2 Diabetes.", icon: "/diabetes.svg" },
//   { title: "Dietary Supplement", description: "World's 1st NDI (New Dietary Ingredient) as synthetic peptide.", icon: "/fda.png" },
//   { title: "Supports Heart Health", description: "Helps regulate blood pressure and improves cardiovascular function for a healthy heart.", icon: "/icons/heart.svg" },
//   { title: "Reduces Stress", description: "Lowers cortisol levels, reducing stress and promoting better sleep quality.", icon: "/icons/stress.svg" },
//   { title: "Improves Digestion", description: "Enhances gut health and digestion by promoting beneficial gut bacteria.", icon: "/icons/digestion.svg" },
// ];

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
        <BenefitsGrid/>


        {/* Grid layout for large screens, Carousel for mobile */}
        {/*  */}
      </Container>
    </Box>
  );
}
