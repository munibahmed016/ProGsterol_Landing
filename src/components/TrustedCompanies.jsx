"use client"

import { Box, Container, Typography } from "@mui/material"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CertificatesCarousel from "./CertificatesCarousel"

export default function TrustedCompanies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#f9f9ff",
      }}
    >
      <Container maxWidth="lg">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 700,
                mb: 1,
                color: "#071A2B",
              }}
            >
              ProGsterol® Trusted Worldwide to{" "}
              <Box component="span" sx={{ color: "#51DC68" }}>
                Reverse Diabetes{" "}
              </Box>
              <Box component="span" sx={{ color: "#071A2B" }}>
                &{" "}
              </Box>
              <Box component="span" sx={{ color: "#1BB3F7" }}>
                Support Weight Loss!
              </Box>
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
          <Typography
  variant="body1"
  component="div"
  align="center"
  color="#071A2B"
  sx={{ mb: 6, maxWidth: 600, mx: "auto", textAlign: "left" }}
>
  <Box component="div" sx={{ textDecoration: "underline", fontWeight: "bold", mb: 1 }}>
    For Pre-Diabetes and Type 2 Diabetes:
  </Box>
  <ul style={{ marginTop: 0, paddingLeft: "1rem" }}>
    <li>Take 1 stick of ProGsterol in the morning during or after meals.</li>
    <li>After 30-60 minutes, the blood sugar level reduces and will approach the level of the norm every day.</li>
    <li>Recommended course – 3 months.</li>
  </ul>

  <Box component="div" sx={{ textDecoration: "underline", fontWeight: "bold", mt: 2, mb: 1 }}>
    For weight loss:
  </Box>
  <ul style={{ marginTop: 0, paddingLeft: "1rem" }}>
    <li>You can take 2 sticks per day.</li>
    <li>We recommend taking 1 stick before breakfast and 1 before dinner.</li>
    <li>Recommended course – until desirable results are achieved.</li>
  </ul>
</Typography>

          </motion.div>
          <CertificatesCarousel />
        </motion.div>
      </Container>
    </Box>
  )
}
