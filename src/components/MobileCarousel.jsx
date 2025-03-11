"use client"

import Slider from "react-slick"
import { Box } from "@mui/material"
import { motion } from "framer-motion"
import { Shield, Plus } from "lucide-react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const slides = [
  { image: "/small_2.png" },
  { image: "/small_1.png" },
  { image: "/small1.png" },
]

const MobileCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 1,
        }}
      >
        <ul style={{ margin: "0", padding: "0", display: "flex", gap: "5px" }}>{dots}</ul>
      </Box>
    ),
    customPaging: () => (
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: "#6366f1",
          opacity: 0.5,
          "&:hover": { opacity: 1 },
        }}
      />
    ),
  }

  const floatingElements = [
    { Icon: Shield, top: "10%", right: "-20%", size: 40, color: "#6366f1", bg: "white" },
    { Icon: Plus, bottom: "20%", left: "-15%", size: 30, color: "#6366f1", bg: "white" },
  ]

  return (
    <Box sx={{ position: "relative", width: "fit-content", margin: "0 auto" }}>
      <Box
        sx={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
          filter: "blur(40px)",
          opacity: 0.3,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />

      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
          style={{
            position: "absolute",
            zIndex: 2,
            top: el.top,
            right: el.right,
            bottom: el.bottom,
            left: el.left,
          }}
        >
          <Box
            sx={{
              width: el.size,
              height: el.size,
              borderRadius: "50%",
              backgroundColor: el.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.1)",
            }}
          >
            <el.Icon size={el.size * 0.5} color={el.color} />
          </Box>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Box
          sx={{
            position: "relative",
            width: "280px",
            height: "580px",
            margin: "0 auto",
            borderRadius: "45px",
            backgroundColor: "#000",
            padding: "12px",
            boxShadow: "0 50px 100px -20px rgba(50, 50, 93, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3)",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "0",
              left: "50%",
              transform: "translateX(-50%)",
              width: "150px",
              height: "25px",
              backgroundColor: "#000",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              zIndex: 3,
            }}
          />

          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              borderRadius: "35px",
              overflow: "hidden",
            }}
          >
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "90%",
                    height: "90%", 
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={slide.image}
                    alt={`Slide ${index}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </motion.div>
    </Box>
  )
}

export default MobileCarousel
