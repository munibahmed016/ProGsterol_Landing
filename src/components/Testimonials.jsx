"use client"

import { Box, Container, Typography } from "@mui/material"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import VideoTestimonialCard from "./VideoTestimonialCard"

const testimonials = [
  {
    number: "85%",
    subtitle: "increase in customer satisfaction",
    logo: "/placeholder.svg?height=30&width=100",
    bgColor: "#FFF5F1",
    hasArrow: true,
  },
  {
    number: "15,000+",
    subtitle: "active daily users",
    logo: "/placeholder.svg?height=30&width=120",
    bgColor: "#F1F7FF",
    hasArrow: true,
  },
  {
    image: "/kamran.png",
    video: "/kamran.mp4",
    name: "Kamran Hussain",
    title: "Diabetic Patient",
    bgColor: "#FFFFFF",
  },
  {
    image: "/farooq.png",
    video: "/farooq.mp4",
    name: "Farooq Ahmed",
    title: "Weight Loss",
    bgColor: "#FFFFFF",
  },
  {
    number: "5,000+",
    subtitle: "hours saved in workflow optimization",
    bgColor: "#F8F1FF",
    hasArrow: true,
  },
  {
    number: "300%",
    subtitle: "increase in team productivity",
    bgColor: "#FFF1F1",
    hasArrow: true,
  },
  {
    number: "60%",
    subtitle: "reduction in response time",
    bgColor: "#F1F7FF",
    hasArrow: true,
  },
  {
    number: "95%",
    subtitle: "customer retention rate",
    bgColor: "#F1FFE9",
    hasArrow: true,
  },
  {
    image: "/amin.png",
    video: "/Review.mp4",
    name: "Muhammad Amin",
    title: "Diabetic Patient",
    quote: "This platform has been a game-changer for our business. The ROI has exceeded all expectations.",
    bgColor: "#FFFFFF",
  },
]

export default function TestimonialsGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#f9f9ff",
      }}
    >
      <Container maxWidth="xl">
        <motion.div
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
            Success Stories from Our{" "}
            <Box component="span" sx={{ color: "#6366f1" }}>
              Customers
            </Box>
          </Typography>

          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 600, mx: "auto" }}>
            Discover how our platform has helped businesses transform their operations and achieve remarkable results.
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    gridColumn: {
                      xs: "span 1",
                      sm: index === 2 ? "span 2" : "span 1",
                      md: index === 2 ? "span 1" : "span 1",
                    },
                  }}
                >
                  <VideoTestimonialCard {...testimonial} />
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

