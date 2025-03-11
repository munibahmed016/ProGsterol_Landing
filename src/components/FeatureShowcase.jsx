"use client"

import { Box, Container, Typography, Button, Grid, useMediaQuery, useTheme } from "@mui/material"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check } from "lucide-react"

export default function FeatureShowcase() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

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

  const phoneVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  }

  const checklistVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#f9f9ff",
      }}
      id="how-it-works"
    >
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div variants={phoneVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 400, md: 500 },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "80%",
                    height: "80%",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    filter: "blur(60px)",
                    opacity: 0.2,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 0,
                  }}
                />
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1,
                  }}
                >
                  <Box
                    component="img"
                    src="/Small_box.png"
                    alt="App Screenshot"
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  Some awesome words
                  <br />
                  <Box component="span" sx={{ color: "#6366f1" }}>
                    about app.
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the
                  industrys standard dummy text ever since the when an unknown printer took a galley of type and. Lorem
                  ipsum dolor sit amet.
                </Typography>
              </motion.div>

              <Box sx={{ mb: 4 }}>
                {[
                  "Simply dummy text of the printing and",
                  "Typesetting industry lorem Ipsum has been the",
                  "Industrys standard dummy text",
                  "Simply dummy text of the printing and",
                  "Typesetting industry lorem Ipsum has been the",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={checklistVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          bgcolor: "#6366f1",
                          mr: 2,
                          flexShrink: 0,
                        }}
                      >
                        <Check size={12} color="white" />
                      </Box>
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>

              <motion.div variants={itemVariants}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#6366f1",
                    color: "white",
                    borderRadius: "50px",
                    px: 4,
                    py: 1.5,
                    "&:hover": {
                      bgcolor: "#4f46e5",
                    },
                    boxShadow: "0 4px 14px 0 rgba(99, 102, 241, 0.4)",
                  }}
                >
                  START FREE TRIAL
                </Button>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

