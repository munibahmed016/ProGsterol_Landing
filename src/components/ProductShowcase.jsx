"use client";

import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const features = [
  {
    title: "No Side Effects",
    description: "Peptides are a compound of amino acids; they are absolutely safe for the body.",
    icon: "/effects.svg",
  },
  {
    title: "Fatty Liver",
    description: "Reduces the risk of fatty liver and heart disease by lowering cholesterol, triglycerides, and inflammation.",
    icon: "/Fatty_liver.svg",
  },
  {
    title: "Body Weight Control",
    description: "Promotes weight loss by reducing body weight, BMI, and WHR.",
    icon: "/weight_loss.svg",
  },
  {
    title: "Diabetes Care",
    description: "Manufactured especially for Prediabetes & Type 2 Diabetes.",
    icon: "/diabetes.svg",
  },
  {
    title: "Dietary Supplement",
    description: "World's 1st NDI (New Dietary Ingredient) as synthetic peptide.",
    icon: "/immunity.svg",
  },
  {
    title: "Supports Heart Health",
    description: "Helps regulate blood pressure and improves cardiovascular function for a healthy heart.",
    icon: "/heart.svg",
  },
  {
    title: "Improves Digestion",
    description: "Enhances gut health and digestion by promoting beneficial gut bacteria.",
    icon: "/digestion.svg",
  },
  {
    title: "Reduces Stress",
    description: "Lowers cortisol levels, reducing stress and promoting better sleep quality.",
    icon: "/stress.svg",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const floatingAnimation = {
  upDown: {
    y: [0, -20, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function FeatureShowcase() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
      
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div initial="hidden" animate={controls} variants={fadeInUp}>
                <Box
                  sx={{
                    textAlign: "center",
                    background: "#fff",
                    borderRadius: "16px",
                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.08)",
                    padding: "24px",
                    height: "100%",
                    transition: "all 0.3s ease-in-out",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Image src={feature.icon} alt={feature.title} width={60} height={60} style={{ marginBottom: "12px" }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#071A2B" }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {feature.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
