"use client"

import { Box, Typography } from "@mui/material"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    number: "0",
    subtitle: "",
    logo: "/placeholder.svg?height=30&width=100",
    bgColor: "#FFF5F1",
    hasArrow: true,
  },
  {
    number: "0",
    subtitle: "",
    logo: "/placeholder.svg?height=30&width=120",
    bgColor: "#F1F7FF",
    hasArrow: true,
  },
  {
    image: "/placeholder.svg?height=120&width=120",
    name: "Ali Nawaz",
    title: "",
    quote:
      "",
    logo: "/placeholder.svg?height=30&width=80",
    bgColor: "#FFFFFF",
  },
  {
    image: "/placeholder.svg?height=120&width=120",
    name: "Farooq Ahmed",
    title: "",
    quote: "",
    logo: "/placeholder.svg?height=30&width=100",
    bgColor: "#FFFFFF",
  },
  {
    number: "0",
    subtitle: "",
    logo: "/placeholder.svg?height=30&width=80",
    bgColor: "#F8F1FF",
    hasArrow: true,
  },
  {
    number: "0",
    subtitle: "",
    logo: "/placeholder.svg?height=30&width=100",
    bgColor: "#FFF1F1",
    hasArrow: true,
  },
  {
    number: "0",
    subtitle: "",
    logo: "/placeholder.svg?height=30&width=100",
    bgColor: "#F1F7FF",
    hasArrow: true,
  },
  {
    number: "0",
    subtitle: "",
    logo: "/placeholder.svg?height=30&width=100",
    bgColor: "#F1FFE9",
    hasArrow: true,
  },
  {
    image: "/placeholder.svg?height=120&width=120",
    name: "Kamran Hussain",
    title: "",
    quote: "",
    logo: "/placeholder.svg?height=30&width=80",
    bgColor: "#FFFFFF",
  },
]

const TestimonialCard = ({ number, subtitle, image, name, title, quote, logo, bgColor = "#FFFFFF", hasArrow }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="h-full"
    >
      <Box
        sx={{
          bgcolor: bgColor,
          borderRadius: "24px",
          p: 4,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-8px)",
          },
        }}
      >
        {number && (
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "3rem" },
                fontWeight: 600,
                lineHeight: 1.2,
                color: "text.primary",
              }}
            >
              {number}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mt: 1,
                fontSize: "1rem",
                lineHeight: 1.5,
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        )}

        {image && (
          <Box sx={{ mb: 3 }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image src={image || "/placeholder.svg"} alt={name || ""} fill style={{ objectFit: "cover" }} />
            </Box>
          </Box>
        )}

        {quote && (
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              lineHeight: 1.6,
              mb: 3,
              flex: 1,
            }}
          >
            {quote}
          </Typography>
        )}

        {name && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </Box>
        )}

        {logo && (
          <Box
            sx={{
              mt: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: 30,
                width: 100,
              }}
            >
              <Image src={logo || "/placeholder.svg"} alt="Company logo" fill style={{ objectFit: "contain" }} />
            </Box>
            {hasArrow && <ArrowRight size={24} className="text-gray-400" />}
          </Box>
        )}
      </Box>
    </motion.div>
  )
}

export default function TestimonialsGrid() {
  return (
    <Box>
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
          <Box
            key={index}
            sx={{
              gridColumn: {
                xs: "span 1",
                sm: index === 2 ? "span 2" : "span 1",
                md: index === 2 ? "span 1" : "span 1",
              },
            }}
          >
            <TestimonialCard {...testimonial} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

