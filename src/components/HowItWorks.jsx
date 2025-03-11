"use client"

import { Box, Container, Typography, Grid } from "@mui/material"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const steps = [
  {
    number: "01",
    title: "",
    description: "",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    number: "02",
    title: "",
    description: "",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    number: "03",
    title: "",
    description: "  ",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function HowItWorks() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "white",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
              },
            },
          }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 1,
            }}
          >
            How it works -{" "}
            <Box component="span" sx={{ color: "#6366f1" }}>
              3 easy steps
            </Box>
          </Typography>

          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 600, mx: "auto" }}>
            Lorem ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard
            dummy.
          </Typography>

          <Box sx={{ position: "relative" }}>
            {/* Timeline line */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: "20px", md: "50%" },
                transform: { xs: "none", md: "translateX(-50%)" },
                top: "0",
                bottom: "0",
                width: "2px",
                bgcolor: "#e0e0e0",
                zIndex: 0,
              }}
            />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.2,
                      duration: 0.5,
                    },
                  },
                }}
              >
                <Grid
                  container
                  spacing={4}
                  sx={{
                    mb: 8,
                    flexDirection: index % 2 ? "row-reverse" : "row",
                  }}
                >
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        position: "relative",
                        pl: { xs: 5, md: 0 },
                      }}
                    >
                      {/* Step number */}
                      <Box
                        sx={{
                          position: "absolute",
                          left: { xs: "0", md: index % 2 ? "auto" : "-20px" },
                          right: { xs: "auto", md: index % 2 ? "-20px" : "auto" },
                          top: "0",
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          bgcolor: "#6366f1",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                          zIndex: 1,
                        }}
                      >
                        {step.number}
                      </Box>

                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {step.description}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src={step.image}
                        alt={step.title}
                        sx={{
                          maxWidth: "100%",
                          height: "auto",
                          borderRadius: "20px",
                          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

