"use client"

import { Box, Container, Grid, Typography } from "@mui/material"
import Image from "next/image"
import { Ban } from "lucide-react"

export default function PeptidePowerSection() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
      <Box
        sx={{
          position: "relative",
          borderRadius: "24px",
          overflow: "hidden",
          background: "linear-gradient(180deg, #E8F5FE 0%, #F8FCFF 100%)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
          pb: 4,
        }}
      >
        {/* Top Section */}
        <Grid
          container
          spacing={0}
          alignItems="center"
          sx={{
            p: { xs: 4, md: 5 },
          }}
        >
          {/* Left side content */}
          <Grid item xs={12} md={6} sx={{ pr: { md: 4 } }}>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "#071A2B",
                  fontSize: { xs: "2rem", md: "2.75rem" },
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                }}
              >
                Peptide Power
                <Box component="span" sx={{ color: "#1BB3F7", display: "inline-flex" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L4.09 12.11L10.18 12.94L11 22L19.91 11.89L13.82 11.06L13 2Z" fill="#1BB3F7" />
                  </svg>
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#071A2B",
                  lineHeight: 1.7,
                  fontSize: "1rem",
                  maxWidth: "90%",
                }}
              >
                ProGsterol is a revolutionary supplement designed to target the root cause of modern lifestyle diseases
                - Insulin Resistance. The key ingredient in ProGsterol is Deglusterol™, a proprietary blend of two
                synthetic peptides that are designed to mimic or enhance natural biological functions related to glucose
                metabolism.
              </Typography>
            </Box>
          </Grid>

          {/* Right side image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                alignItems: "center",
                position: "relative",
                mt: { xs: 4, md: 0 },
                height: "100%",
              }}
            >
              <Box sx={{ position: "relative", width: "150%", height: "300px" }}>
                <Image
                  src="/light.png"
                  alt="Peptide Product"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "right center",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box
          sx={{
            width: "100%",
            height: "1px",
            bgcolor: "rgba(0,0,0,0.05)",
            my: 2,
            mx: "auto",
            maxWidth: "90%",
          }}
        />

        {/* Bottom Section */}
        <Grid
          container
          spacing={0}
          alignItems="center"
          sx={{
            px: { xs: 4, md: 5 },
            pt: 2,
          }}
        >
          {/* Left side image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
                position: "relative",
                mb: { xs: 4, md: 0 },
              }}
            >
              <Box sx={{ position: "relative", width: "150%", height: "300px" }}>
                <Image
                  src="/hand.png"
                  alt="Hand with product"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "left center",
                  }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Right side content */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "#071A2B",
                  fontSize: { xs: "1.75rem", md: "2.5rem" },
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "#1BB3F7",
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    color: "white",
                  }}
                >
                  <Ban size={24} />
                </Box>
                Zero Side Effects
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#071A2B",
                  lineHeight: 1.7,
                  fontSize: "1rem",
                  maxWidth: "90%",
                }}
              >
                Clinical trials and studies have shown efficacy and safety have been confirmed. Peptides are a
                combination of amino acids. Under the action of endogenous enzymes, they break down into simple amino
                acids, which are nutrients for the body and are safe for the body as a whole.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

