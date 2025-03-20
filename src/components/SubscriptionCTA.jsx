"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight, DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SubscriptionCTA() {
  return (
    <Box
      sx={{
        py: { xs: 3, md: 4 },
        bgcolor: "#FFF8ED",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Box sx={{ maxWidth: { xs: "100%", md: "50%" }, mb: { xs: 4, md: 0 } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    color: "#0F172A",
                    fontSize: { xs: "1.75rem", md: "2.25rem" },
                    mr: 2,
                  }}
                >
                  Subscribe & Save!
                </Typography>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    bgcolor: "#10B981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <DollarSign size={20} color="white" />
                </Box>
              </Box>

              <Box sx={{ mb: 2.5 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#0F172A",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    mb: 1,
                    lineHeight: 1.4,
                  }}
                >
                  Buy 3 packs of ProGsterol for the 3-month course and save!
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#0F172A",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    mb: 1,
                    lineHeight: 1.4,
                  }}
                >
                  Get a 10% flat off on subscribing for 3 months package.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#0F172A",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    lineHeight: 1.4,
                  }}
                >
                  You can cancel the subscription at any time.
                </Typography>
              </Box>

              <Button
                variant="contained"
                endIcon={<ArrowRight size={16} />}
                sx={{
                  bgcolor: "#0F172A",
                  color: "white",
                  borderRadius: "50px",
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  "&:hover": {
                    bgcolor: "#1E293B",
                  },
                  boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.1)",
                }}
                component={Link} 
                  href="https://3zbio.pk/product/progsterol-new-dietary-supplement-to-support-healthy-glucose-level/" 
              >
                Buy Now
              </Button>
            </motion.div>
          </Box>

          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: "50%" },
              height: { xs: 220, md: 280 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ position: "relative", zIndex: 2 }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "200px", md: "380px" },
                  height: { xs: "200px", md: "250px" },
                }}
              >
                <Image
                  src="/cta.png"
                  alt="ProGsterol Package"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
