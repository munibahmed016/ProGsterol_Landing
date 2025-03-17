"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Reduces Liver Fat",
    description:
      "Helps break down and prevent excessive fat storage in the liver by optimizing lipid metabolism for better liver function.",
  },
  {
    title: "Boosts Detoxification",
    description:
      "Enhances the liver’s natural ability to eliminate toxins, promoting a cleaner and healthier internal system.",
  },
  {
    title: "Balances Blood Sugar & Reduces Inflammation",
    description:
      "Helps regulate glucose levels and minimize liver inflammation, key factors in preventing further liver damage.",
  },
];

const floatAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function FattyLiver() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "white", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Side - Circular Background with Floating Images */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Floating Main Image (Weight.png) */}
              <motion.div animate={floatAnimation} style={{ position: "relative" }}>
                <Box
                  sx={{
                    width: { xs: "90%", md: "450px" },
                    backgroundColor: "white",
                    borderRadius: "12px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/Fatty.png"
                    alt="Weight Graph"
                    width={450}
                    height={350}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Box>
              </motion.div>
            </Box>
          </Grid>

          {/* Right Side - Text and Features */}
          <Grid item xs={12} md={6}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {/* Title */}
              <motion.div variants={textVariants}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    lineHeight: 1.2,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    color: "#071A2B",
                  }}
                >
                  The Natural Way to Restore Liver Health with{" "}
                  <Box component="span" sx={{ color: "#1BB3F7" }}>ProGsterol</Box>
                </Typography>
              </motion.div>

              {/* Description */}
              <motion.div variants={textVariants}>
                <Typography
                  variant="body1"
                  color="#071A2B"
                  sx={{
                    mb: 4,
                    maxWidth: "90%",
                    lineHeight: 1.7,
                  }}
                >
                Struggling with fatty liver? ProGsterol is designed to reduce excess fat buildup in the liver, enhance detoxification, and improve overall liver function. Clinically proven to support liver health, it works by addressing the root causes of liver fat accumulation and promoting long-term wellness.
                </Typography>
              </motion.div>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {features.map((feature, index) => (
                  <motion.div key={index} variants={textVariants}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
                      <CheckCircle size={34} color="#6366f1" />
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600, color: "#071A2B" }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body1" color="#071A2B">
                          {feature.description}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
