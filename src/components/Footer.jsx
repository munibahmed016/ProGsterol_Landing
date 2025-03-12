"use client"

import { useState } from "react"
import { Box, Container, Typography, TextField, Button, Grid, IconButton, Link } from "@mui/material"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Send, Mail, Phone } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  "Useful Links": [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact us", href: "/contact" },
  ],
  "Help & Support": [
    { name: "FAQs", href: "/faqs" },
    { name: "Support", href: "/support" },
    { name: "How it works", href: "/how-it-works" },
    { name: "Terms & conditions", href: "/terms" },
    { name: "Privacy policy", href: "/privacy" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
]

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribeStatus, setSubscribeStatus] = useState("")

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Add your newsletter subscription logic here
    setSubscribeStatus("Thanks for subscribing!")
    setEmail("")
  }

  return (
    <Box
      sx={{
        bgcolor: "#0B2A45",
        color: "white",
        pt: { xs: 8, md: 12 },
        pb: 4,
        background: "#0B2A45",
      }}
    >
      <Container maxWidth="xl">
        {/* Newsletter Section */}
        {/* <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            mb: { xs: 6, md: 10 },
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            bgcolor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.5rem" }, fontWeight: 700, mb: 2 }}>
                Subscribe newsletter
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9, mb: { xs: 3, md: 0 } }}>
                Be the first to receive all latest posts in your inbox
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box component="form" onSubmit={handleSubscribe} sx={{ display: "flex", gap: 2 }}>
                <TextField
                  fullWidth
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    "& .MuiInputBase-root": {
                      bgcolor: "white",
                      borderRadius: "50px",
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "white",
                    color: "#6366f1",
                    borderRadius: "50px",
                    px: 4,
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.9)",
                    },
                  }}
                >
                  <Send size={20} />
                </Button>
              </Box>
              {subscribeStatus && (
                <Typography variant="body2" sx={{ mt: 1, textAlign: "center" }}>
                  {subscribeStatus}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Box> */}

        {/* Main Footer Content */}
        <Grid container spacing={6}>
          {/* Logo and Contact */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.5rem",
                }}
              >
                <Box component="span" sx={{ mr: 1, fontSize: "1.8rem" }}>
                  Z
                </Box>
                3ZBIO
              </Typography>
            </Box>
            <Box sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1 }}>
              <Mail size={20} />
              <Typography>support@example.com</Typography>
            </Box>
            <Box sx={{ mb: 4, display: "flex", alignItems: "center", gap: 1 }}>
              <Phone size={20} />
              <Typography>+1-900-123 4567</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component={Link}
                  href={social.href}
                  sx={{
                    color: "white",
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.2)",
                    },
                  }}
                >
                  <social.icon size={20} />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <Grid item xs={6} md={3} key={title}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                {title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    sx={{
                      color: "white",
                      opacity: 0.8,
                      textDecoration: "none",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}

          {/* App Store Buttons */}
          {/* <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Let&apos;s Try Out
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Link href="#" sx={{ display: "block" }}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hFZPb2az50TMWUH4DujIGx1GprNhxf.png"
                  alt="App Store"
                  width={150}
                  height={50}
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
              <Link href="#" sx={{ display: "block" }}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hFZPb2az50TMWUH4DujIGx1GprNhxf.png"
                  alt="Google Play"
                  width={150}
                  height={50}
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
            </Box>
          </Grid> */}
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            mt: 8,
            pt: 4,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} 3zbio. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 4 }}>
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                sx={{
                  color: "white",
                  opacity: 0.8,
                  textDecoration: "none",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

