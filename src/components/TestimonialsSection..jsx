"use client"

import { Box, Container, Typography, Grid } from "@mui/material"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import VideoTestimonial from "./VideoTestimonials"
import TestimonialsGrid from "./Testimonials"

const videoTestimonials = [
  {
    thumbnail: "/placeholder.svg?height=300&width=500",
    videoSrc: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Sample video URL
    name: "Kamran Hussain",
    title: "Diabetic Patient",
    company: "",
    logo: "/placeholder.svg?height=30&width=100",
  },
  {
    thumbnail: "/placeholder.svg?height=300&width=500",
    videoSrc: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Sample video URL
    name: "Farooq Ahmed",
    title: "Weight Loss Patient",
    company: "",
    logo: "/placeholder.svg?height=30&width=100",
  },
  {
    thumbnail: "/placeholder.svg?height=300&width=500",
    videoSrc: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Sample video URL
    name: "Mohammad Amin",
    title: "Diabetic Patient",
    company: "",
    logo: "/placeholder.svg?height=30&width=100",
  },
]

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#FFFFFF",
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Success Story of our{" "}
            <Box component="span" sx={{ color: "#6366f1" }}>
              customers
            </Box>
          </Typography>

          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 700, mx: "auto" }}>
            Hear directly from our customers about how our app has transformed their business and improved their
            workflow.
          </Typography>

          <Box sx={{ mb: 8 }}>
            <Grid container spacing={3}>
              {videoTestimonials.map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <VideoTestimonial {...testimonial} />
                </Grid>
              ))}
            </Grid>
          </Box>

          <TestimonialsGrid />
        </motion.div>
      </Container>
    </Box>
  )
}

