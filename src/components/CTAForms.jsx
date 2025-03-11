"use client"

import { useState } from "react"
import { Box, Container, Typography, TextField, Button, Grid } from "@mui/material"
import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"

export default function CTAForms() {
  const [messageForm, setMessageForm] = useState({ email: "", message: "" })
  const [formStatus, setFormStatus] = useState("")

  const handleMessageSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    setFormStatus("Message sent successfully!")
    setMessageForm({ email: "", message: "" })
  }

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f9f9ff" }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  bgcolor: "black",
                  borderRadius: 4,
                  p: 4,
                  height: "100%",
                }}
              >
                <Typography variant="h4" sx={{ color: "white", mb: 4, fontWeight: 600 }}>
                  Send Your Message
                </Typography>
                <Box component="form" onSubmit={handleMessageSubmit}>
                  <TextField
                    fullWidth
                    placeholder="Your E-mail"
                    value={messageForm.email}
                    onChange={(e) => setMessageForm({ ...messageForm, email: e.target.value })}
                    sx={{
                      mb: 2,
                      "& .MuiInputBase-root": {
                        bgcolor: "white",
                        borderRadius: 2,
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Your Message"
                    value={messageForm.message}
                    onChange={(e) => setMessageForm({ ...messageForm, message: e.target.value })}
                    sx={{
                      mb: 3,
                      "& .MuiInputBase-root": {
                        bgcolor: "white",
                        borderRadius: 2,
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      bgcolor: "#10b981",
                      borderRadius: 2,
                      py: 1.5,
                      "&:hover": {
                        bgcolor: "#059669",
                      },
                    }}
                  >
                    SUBMIT
                  </Button>
                  {formStatus && (
                    <Typography variant="body2" sx={{ color: "white", mt: 2, textAlign: "center" }}>
                      {formStatus}
                    </Typography>
                  )}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Product Interest CTA */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 4,
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                  Interested in our product?
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  Get started with our premium features and take your business to the next level.
                </Typography>
                <Button
                  variant="contained"
                  endIcon={<ArrowRight />}
                  sx={{
                    bgcolor: "#6366f1",
                    borderRadius: "50px",
                    py: 1.5,
                    "&:hover": {
                      bgcolor: "#4f46e5",
                    },
                  }}
                >
                  GET STARTED NOW
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Health Expert CTA */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box
                sx={{
                  bgcolor: "#6366f1",
                  borderRadius: 4,
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                  Connect with our health expert
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
                  Get personalized advice from our certified health professionals.
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<Phone />}
                  sx={{
                    bgcolor: "white",
                    color: "#6366f1",
                    borderRadius: "50px",
                    py: 1.5,
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.9)",
                    },
                  }}
                >
                  SCHEDULE A CALL
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

