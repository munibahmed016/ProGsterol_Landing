"use client"

import { Box, Button, Card, Container, Typography, useMediaQuery, useTheme } from "@mui/material"
import { Check, X } from "lucide-react"
import { motion } from "framer-motion"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRef } from "react"

const plans = [
  {
    title: "BOX 10 SACHETS",
    price: "PKR 3500",
    period: "",
    gradient: "linear-gradient(135deg, #FF8042 0%, #FF5C7D 100%)",
    buttonGradient: "linear-gradient(to right, #FF8042, #FF5C7D)",
    features: [
      { text: "Lorem ipsum", included: true },
      { text: "Lorem ipsum", included: false },
      { text: "Lorem ipsum", included: false },
    ],
    // tagColor: "#FF8042",
  },
  {
    title: "BUNDLE OFFER",
    price: "PKR 31500",
    period: "",
    gradient: "linear-gradient(135deg, #FF4B8B 0%, #FF1371 100%)",
    buttonGradient: "linear-gradient(to right, #FF4B8B, #FF1371)",
    features: [
      { text: "Lorem ipsum", included: true },
      { text: "Lorem ipsum", included: false },
      { text: "Lorem ipsum", included: false },
    ],
    isPopular: true,
    tag: "HOT DEAL",
    tagColor: "#FF4B8B",
  },
  {
    title: "BOX 30 SACHETS",
    price: "PKR 10500",
    period: "",
    gradient: "linear-gradient(135deg, #B44BFF 0%, #8E13FF 100%)",
    buttonGradient: "linear-gradient(to right, #B44BFF, #8E13FF)",
    features: [
      { text: "Lorem ipsum", included: true },
      { text: "Lorem ipsum", included: false },
      { text: "Lorem ipsum", included: false },
    ],
    // tagColor: "#B44BFF",
  },
]

export default function PricingSection() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  }

  const PricingCard = ({ plan, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        height: "100%",
        zIndex: plan.isPopular ? 2 : 1,
        transform: plan.isPopular && !isMobile ? "translateY(-10px)" : "none",
      }}
    >
      {/* Tag Header */}
      <Box
        sx={{
          position: "relative",
          height: "40px",
          mb: -1,
          zIndex: 3,
          transform: plan.isPopular ? "translateY(-8px) scale(1.1)" : "none",
          transformOrigin: "bottom center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "5%",
            right: "5%",
            height: "100%",
            bgcolor: plan.tagColor,
            clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          {plan.tag}
        </Box>
      </Box>

      <Card
        sx={{
          height: "100%",
          borderRadius: "16px",
          overflow: "hidden",
          position: "relative",
          transform: plan.isPopular ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          boxShadow: plan.isPopular ? "0 12px 40px rgba(0,0,0,0.2)" : "0 4px 12px rgba(0,0,0,0.1)",
          bgcolor: "white",
          zIndex: plan.isPopular ? 2 : 1,
          "&:hover": {
            transform: plan.isPopular ? "scale(1.12)" : "scale(1.02)",
            boxShadow: plan.isPopular ? "0 16px 45px rgba(0,0,0,0.25)" : "0 8px 20px rgba(0,0,0,0.15)",
          },
        }}
      >
        {/* Wavy Top Section */}
        <Box
          sx={{
            position: "relative",
            height: plan.isPopular ? "140px" : "120px",
            background: plan.gradient,
            transition: "height 0.3s ease",
          }}
        >
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "60px",
            }}
          >
            <path d="M0,120 C150,180 350,60 500,120 L500,150 L0,150 Z" fill="white" />
          </svg>
          <Box
            sx={{
              position: "absolute",
              top: "30px",
              left: 0,
              right: 0,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: plan.isPopular ? "2rem" : "1.75rem",
                textTransform: "uppercase",
              }}
            >
              {plan.title}
            </Typography>
          </Box>
        </Box>

        {/* Price */}
        <Box sx={{ textAlign: "center", mt: 3, mb: 4 }}>
          <Typography
            sx={{
              fontSize: plan.isPopular ? "3.5rem" : "3rem",
              fontWeight: "bold",
              color: plan.tagColor,
              lineHeight: 1,
            }}
          >
            {plan.price}
            <Typography
              component="span"
              sx={{
                fontSize: "1rem",
                color: "#666",
                ml: 1,
                fontWeight: "normal",
              }}
            >
              {plan.period}
            </Typography>
          </Typography>
        </Box>

        {/* Features */}
        <Box sx={{ px: 4, pb: 4 }}>
          {plan.features.map((feature, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2.5,
                color: feature.included ? "text.primary" : "text.secondary",
              }}
            >
              {feature.included ? (
                <Check size={22} color="#4CAF50" style={{ marginRight: 10 }} />
              ) : (
                <X size={22} color="#F44336" style={{ marginRight: 10 }} />
              )}
              <Typography
                variant="body1"
                sx={{
                  color: "#666",
                  fontSize: plan.isPopular ? "1.1rem" : "1rem",
                }}
              >
                {feature.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Button */}
        <Box sx={{ px: 4, pb: 4 }}>
          <Button
            fullWidth
            sx={{
              background: plan.buttonGradient,
              color: "white",
              py: 1.5,
              borderRadius: "8px",
              textTransform: "uppercase",
              fontSize: plan.isPopular ? "1rem" : "0.9rem",
              fontWeight: "bold",
              border: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                background: plan.buttonGradient,
                transform: "translateY(-2px)",
                boxShadow: `0 8px 20px ${plan.tagColor}40`,
              },
            }}
          >
            BUY NOW
          </Button>
        </Box>
      </Card>
    </motion.div>
  )

  return (
    <Box
      sx={{
        py: 8,
        position: "relative",
        overflow: "hidden",
        bgcolor: "#f8f9fa",
      }}
    >
      {/* Background Blobs */}
      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #FF4B8B 0%, #FF1371 100%)",
          filter: "blur(80px)",
          opacity: 0.1,
          top: "-100px",
          left: "-100px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #B44BFF 0%, #8E13FF 100%)",
          filter: "blur(80px)",
          opacity: 0.1,
          bottom: "-100px",
          right: "-100px",
        }}
      />

      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "bold",
            mb: 1,
          }}
        >
          Choose Your Package
        </Typography>

        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{
            mb: 6,
            maxWidth: 600,
            mx: "auto",
            fontSize: "0.9rem",
          }}
        >
          Select the perfect plan for your needs. Upgrade or downgrade at any time.
        </Typography>

        {isMobile ? (
          <Box sx={{ mx: -2 }}>
            <Slider {...settings} ref={sliderRef}>
              {plans.map((plan, index) => (
                <Box key={index} sx={{ px: 2 }}>
                  <PricingCard plan={plan} index={index} />
                </Box>
              ))}
            </Slider>
          </Box>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 6, // Increased gap for better spacing
              alignItems: "center", // Changed to center for better alignment
              mx: "auto",
              maxWidth: "1200px", // Increased max width
              px: 4, // Added horizontal padding
            }}
          >
            {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </Box>
        )}
      </Container>
    </Box>
  )
}

