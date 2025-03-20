"use client"

import { useState, useRef, useEffect } from "react"
import { Box, Container, Typography, IconButton } from "@mui/material"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

// Testimonial data
const testimonials = [
    {
      id: 1,
      name: "Dr. Nida Shakil",
      title: "Consultant Endocrinologist, Diabetologist",
      image: "/dr_nida.jpg", 
      quote: `ProGsterol's main ingredient Deglusterol™ is a substance that can reverse the negative effects of tnt-α. It helps the proteins involved in glucose uptake work better, increasing the amount of glucose that cells can absorb by 150%!
  
  I recommend ProGsterol to all my patients who want to decrease their medication intake, and fight to overcome the complications and struggles that come with Diabetes.`,
      rating: 5,
    },
    {
      id: 2,
      name: "Dr. Sitwat.jpg",
      title: "Cardiologist, Heart Health Specialist",
      image: "/dr_sitwat.jpg", 
      quote: `I've seen remarkable improvements in my patients' cholesterol levels and overall heart health after using ProGsterol. The unique peptide formula helps reduce inflammation and supports cardiovascular function.
  
  For patients struggling with metabolic syndrome and its effects on heart health, ProGsterol offers a science-backed approach that complements traditional treatments.`,
      rating: 5,
    },
    {
      id: 3,
      name: "Dr. Shujra",
      title: "Metabolic Health Researcher, MD",
      image: "/dr_shujra.jpg",
      quote: `As someone who has researched metabolic disorders for over 15 years, I'm impressed by the clinical data behind ProGsterol. The peptide technology addresses insulin resistance at the cellular level.
  
  My patients report increased energy levels and improved glucose control within weeks of starting ProGsterol, making it an excellent addition to lifestyle modifications.`,
      rating: 5,
    },
  ]

export default function ExpertTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef(null)

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance slides
  useEffect(() => {
    const startTimer = () => {
      timeoutRef.current = setTimeout(() => {
        nextSlide()
      }, 8000) // Change slide every 8 seconds
    }

    startTimer()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentIndex])

  // Reset timer when manually changing slides
  const handleManualChange = (callback) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    callback()
  }

  const testimonial = testimonials[currentIndex]

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FFFFFF" }}>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: 800,
            color: "#0F172A",
            fontSize: { xs: "2rem", md: "2.5rem" },
            mb: { xs: 6, md: 8 },
          }}
        >
          Recommended by Experts
        </Typography>

        <Box
          sx={{
            position: "relative",
            maxWidth: 1000,
            mx: "auto",
            px: { xs: 5, md: 8 },
          }}
        >
          {/* Navigation arrows */}
          <IconButton
            onClick={() => handleManualChange(prevSlide)}
            sx={{
              position: "absolute",
              left: { xs: -10, md: -20 },
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(255, 255, 255, 0.8)",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              zIndex: 2,
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.9)",
              },
            }}
          >
            <ChevronLeft size={24} />
          </IconButton>

          <IconButton
            onClick={() => handleManualChange(nextSlide)}
            sx={{
              position: "absolute",
              right: { xs: -10, md: -20 },
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(255, 255, 255, 0.8)",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              zIndex: 2,
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.9)",
              },
            }}
          >
            <ChevronRight size={24} />
          </IconButton>

          {/* Testimonial content */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  gap: { xs: 4, md: 6 },
                }}
              >
                {/* Expert image and info */}
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: 200, md: 240 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 180, md: 220 },
                      height: { xs: 180, md: 220 },
                      borderRadius: "50%",
                      overflow: "hidden",
                      position: "relative",
                      mb: 2,
                      bgcolor: "#E0F7FA",
                    }}
                  >
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>

                  {/* Arrow pointing to quote (only visible on desktop) */}
                  <Box
                    sx={{
                      position: "absolute",
                      right: -30,
                      top: "40%",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 15C20 5 30 25 40 15" stroke="#0F172A" strokeWidth="2" fill="none" />
                      <path d="M35 10L40 15L35 20" stroke="#0F172A" strokeWidth="2" fill="none" />
                    </svg>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#0F172A",
                      textAlign: "center",
                      mt: 1,
                    }}
                  >
                    {testimonial.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#0F172A",
                      textAlign: "center",
                      mb: 2,
                    }}
                  >
                    {testimonial.title}
                  </Typography>

                  {/* Star rating */}
                  <Box sx={{ display: "flex", gap: 0.5 }}>
                    {[...Array(5)].map((_, i) => (
                      <Box
                        key={i}
                        component="span"
                        sx={{
                          color: i < testimonial.rating ? "#FFD700" : "#E0E0E0",
                          fontSize: 20,
                        }}
                      >
                        ★
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Quote */}
                <Box
                  sx={{
                    bgcolor: "#E0F7FA",
                    borderRadius: 4,
                    p: 4,
                    position: "relative",
                    flex: 1,
                  }}
                >
                  {/* Opening quote mark */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: -15,
                      left: 20,
                      color: "#4DD0E1",
                    }}
                  >
                    <Quote size={40} fill="#4DD0E1" />
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#0F172A",
                      whiteSpace: "pre-line",
                      lineHeight: 1.6,
                      mt: 2,
                    }}
                  >
                    {testimonial.quote}
                  </Typography>

                  {/* Closing quote mark */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -15,
                      right: 20,
                      color: "#4DD0E1",
                      transform: "rotate(180deg)",
                    }}
                  >
                    <Quote size={40} fill="#4DD0E1" />
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </AnimatePresence>

          {/* Dots indicator */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              mt: 4,
            }}
          >
            {testimonials.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: index === currentIndex ? "#0F172A" : "#E0E0E0",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

