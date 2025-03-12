"use client"

import { useState } from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [messageForm, setMessageForm] = useState({ email: "", number: "", name: "" });
  const [formStatus, setFormStatus] = useState("");

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Message sent successfully!");
    setMessageForm({ email: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ height: "100%" }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#1E293B",
            borderRadius: 4,
            p: { xs: 3, md: 5 },
            textAlign: "center",
            color: "white",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <Typography variant="h6" sx={{ mb: 4, fontWeight: 600 }}>
            Get an expert opinion about your health, please fill the form below
            Our health expert will contact you shortly.
          </Typography>
          <Box component="form" onSubmit={handleMessageSubmit}>
            <TextField
              fullWidth
              placeholder="Your Name"
              value={messageForm.name}
              onChange={(e) => setMessageForm({ ...messageForm, email: e.target.value })}
              sx={{
                mb: 2,
                "& .MuiInputBase-root": {
                  bgcolor: "white",
                  borderRadius: 2,
                },
              }}
            />
            {/* <TextField
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
            /> */}
            <TextField
              fullWidth
              multiline
              rows={1}
              placeholder="Enter your phone Number"
              value={messageForm.number}
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
                fontWeight: "bold",
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
      </Container>
    </motion.div>
  );
}
