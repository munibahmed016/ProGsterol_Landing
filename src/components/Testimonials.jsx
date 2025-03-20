"use client"

import { Box, Container, Typography } from "@mui/material"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import VideoTestimonialCard from "./VideoTestimonialCard"

const testimonials = [
  {
    number: "44",
    subtitle: "new articles published in record time [5/week]",
    bgColor: "#FFF5F1",
    hasArrow: true,
  },
  {
    number: "10,000+",
    subtitle: "hours saved",
    bgColor: "#F1F7FF",
    hasArrow: true,
  },
  {
    image: "/kamran.png",
    video: "/kamran.mp4",
    name: "Kamran Hussain",
    quote:"lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    title: "Diabetic Patient",
    bgColor: "#FFFFFF",
  },
  {
    image: "/farooq.png",
    video: "/farooq.mp4",
    name: "Farooq Ahmed",
    quote:"lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    title: "Weight Loss",
    bgColor: "#FFFFFF",
  },
  {
    number: "3,000+",
    subtitle: "hours saved in content creation time",
    bgColor: "#F8F1FF",
    hasArrow: true,
  },
  {
    number: "800%",
    subtitle: "surge in web traffic",
    bgColor: "#FFF1F1",
    hasArrow: true,
  },
  {
    number: "40%",
    subtitle: "increase in traffic using Jasper to produce better blog content",
    bgColor: "#F1F7FF",
    hasArrow: true,
  },
  {
    number: "93%",
    subtitle: "faster creation of campaigns",
    bgColor: "#F1FFE9",
    hasArrow: true,
  },
  {
    image: "/amin.png",
    video: "/Review.mp4",
    name: "Muhammad Amin",
    quote:"lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    title: "Diabetic Patient",
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
                      sm: testimonial.quote ? "span 2" : "span 1",
                      md: testimonial.quote ? "span 2" : "span 1",
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

