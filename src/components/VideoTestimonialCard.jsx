"use client"

import { useState } from "react"
import { Box, Typography, Modal, IconButton } from "@mui/material"
import { ArrowRight, Play, X } from "lucide-react"
import Image from "next/image"

export default function VideoTestimonialCard({
  number,
  subtitle,
  image,
  video,
  name,
  title,
  quote,
  logo,
  bgColor = "#FFFFFF",
  hasArrow,
}) {
  const [videoOpen, setVideoOpen] = useState(false)

  const handleVideoOpen = () => {
    if (video) {
      setVideoOpen(true)
    }
  }

  return (
    <>
      <Box
        sx={{
          bgcolor: bgColor,
          borderRadius: "24px",
          p: { xs: 3, md: 4 },
          height: "100%",
          display: "flex",
          flexDirection: image && quote ? "row" : "column",
          alignItems: image && quote ? "center" : "flex-start",
          gap: image && quote ? 4 : 0,
          position: "relative",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          },
        }}
      >
        {number && (
          <Box sx={{ mb: 2, flex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 700,
                lineHeight: 1,
                color: "text.primary",
                mb: 2,
              }}
            >
              {number}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: "1rem",
                lineHeight: 1.5,
              }}
            >
              {subtitle}
            </Typography>
            {logo && (
              <Box
                sx={{
                  mt: 3,
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
        )}

        {image && (
          <Box sx={{ cursor: video ? "pointer" : "default" }} onClick={handleVideoOpen}>
            <Box
              sx={{
                width: 120,
                height: 120,
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image src={image || "/placeholder.svg"} alt={name || ""} fill style={{ objectFit: "cover" }} />
              {video && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "rgba(0,0,0,0.3)",
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(0,0,0,0.5)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      bgcolor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Play size={20} color="#6366f1" fill="#6366f1" />
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        )}

        {(quote || name) && (
          <Box sx={{ flex: 1 }}>
            {quote && (
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.125rem",
                  lineHeight: 1.6,
                  mb: 2,
                }}
              >
                {quote}
              </Typography>
            )}

            {name && (
              <Box sx={{ mb: logo ? 3 : 0 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {title}
                </Typography>
              </Box>
            )}

            {logo && !number && (
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
              </Box>
            )}
          </Box>
        )}
      </Box>

      <Modal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 1,
          }}
        >
          <IconButton
            onClick={() => setVideoOpen(false)}
            sx={{
              position: "absolute",
              top: -20,
              right: -20,
              bgcolor: "white",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.9)",
              },
              zIndex: 1,
            }}
          >
            <X />
          </IconButton>
          <Box
            component="video"
            controls
            autoPlay
            sx={{
              width: "100%",
              borderRadius: 1,
            }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </Box>
        </Box>
      </Modal>
    </>
  )
}

