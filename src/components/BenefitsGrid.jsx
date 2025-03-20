"use client"

import { Box, Container, Typography, Grid } from "@mui/material"
import { motion } from "framer-motion"
import Image from "next/image"

const benefits = [
  {
    icon: "/loss.png", 
    title: "Lose Weight",
    subtitle: "Efficiently, Naturally.",
  },
  {
    icon: "/ir.png", 
    title: "Reverse Insulin",
    subtitle: "Resistance",
  },
  {
    icon: "/type2.png", 
    title: "Manage",
    subtitle: "Type 2 Diabetes",
  },
  {
    icon: "/pcos.png", 
    title: "Improve",
    subtitle: "PCOS",
  },
  {
    icon: "/ldl.png", 
    title: "Lower High LDL",
    subtitle: "Cholesterol Levels",
  },
  {
    icon: "/lht.png", 
    title: "Lower High",
    subtitle: "Triglycerides",
  },
  {
    icon: "/heart.png", 
    title: "Support",
    subtitle: "Heart Health",
  },
  {
    icon: "/improve.png", 
    title: "Improve",
    subtitle: "Liver Health",
  },
  {
    icon: "/100.png", 
    title: "100% Safe",
    subtitle: "No Side Effects",
  },
  {
    icon: "/pep.png", 
    title: "Powered by",
    subtitle: "Peptides",
  },
  {
    icon: "/wfda.png", 
    title: "World's 1st FDA-",
    subtitle: "Approved NDI*",
  },
  {
    icon: "/clinical.png", 
    title: "Clinically Tested",
    subtitle: "and Proven",
  },
]


const placeholderIcons = {
  "weight-loss": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="30" fill="#FFD580" stroke="#FF9F43" strokeWidth="5"/><path d="M50 30 L50 70 M40 40 L60 60 M40 60 L60 40" stroke="#FF6B6B" strokeWidth="5" strokeLinecap="round"/></svg>`,
  insulin: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="30" fill="#A5F1E9" stroke="#7DDBD3" strokeWidth="5"/><rect x="40" y="40" width="20" height="20" fill="#FFBB64" rx="2"/></svg>`,
  diabetes: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="40" height="50" rx="5" fill="#B1E1FF" stroke="#5DADE2" strokeWidth="3"/><circle cx="50" cy="45" r="8" fill="#5DADE2"/><rect x="45" y="55" width="10" height="15" fill="#5DADE2"/></svg>`,
  pcos: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 30 C30 30 30 70 50 70 C70 70 70 30 50 30" fill="#FFD3D8" stroke="#FF6B6B" strokeWidth="3"/><circle cx="35" cy="45" r="8" fill="#FF6B6B"/><circle cx="65" cy="45" r="8" fill="#FF6B6B"/></svg>`,
  cholesterol: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="30" fill="#FFD3B5" stroke="#FFAA80" strokeWidth="5"/><text x="50" y="58" fontFamily="Arial" fontSize="20" textAnchor="middle" fill="#FF8C66">LDL</text></svg>`,
  triglycerides: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 20 C60 40 70 50 50 80 C30 50 40 40 50 20" fill="#FF9AA2" stroke="#FF6B6B" strokeWidth="3"/><circle cx="70" cy="50" r="15" fill="#B5EAD7" stroke="#7DDBD3" strokeWidth="2"/></svg>`,
  heart: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 80 C20 60 20 30 40 30 C45 30 50 35 50 40 C50 35 55 30 60 30 C80 30 80 60 50 80" fill="#FF9AA2" stroke="#FF6B6B" strokeWidth="3"/><path d="M70 40 L80 50 M75 35 L85 45" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/></svg>`,
  liver: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M30 40 C30 30 70 30 70 40 C80 50 80 70 50 80 C20 70 20 50 30 40" fill="#FF9AA2" stroke="#FF6B6B" strokeWidth="3"/><path d="M40 50 C60 50 60 70 40 70 C20 70 20 50 40 50" fill="#7DDBD3" stroke="#5DADE2" strokeWidth="2"/></svg>`,
  safety: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z" fill="#A5F1E9" stroke="#7DDBD3" strokeWidth="3"/><text x="50" y="60" fontFamily="Arial" fontSize="30" textAnchor="middle" fill="#5DADE2">+</text></svg>`,
  peptides: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="10" fill="#B5EAD7"/><circle cx="50" cy="50" r="10" fill="#FFDAC1"/><circle cx="70" cy="30" r="10" fill="#FF9AA2"/><circle cx="30" cy="70" r="10" fill="#FFB7B2"/><circle cx="70" cy="70" r="10" fill="#B5EAD7"/><line x1="30" y1="30" x2="50" y2="50" stroke="#7DDBD3" strokeWidth="2"/><line x1="50" y1="50" x2="70" y2="30" stroke="#7DDBD3" strokeWidth="2"/><line x1="50" y1="50" x2="30" y2="70" stroke="#7DDBD3" strokeWidth="2"/><line x1="50" y1="50" x2="70" y2="70" stroke="#7DDBD3" strokeWidth="2"/></svg>`,
  fda: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="30" fill="#F1F1F1" stroke="#DDDDDD" strokeWidth="3"/><text x="50" y="45" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#888888">FDA</text><path d="M40 60 L60 60" stroke="#FFD700" strokeWidth="3"/><circle cx="50" cy="70" r="5" fill="#FFD700"/></svg>`,
  clinical: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="30" width="10" height="40" rx="2" fill="#F1F1F1" stroke="#DDDDDD" strokeWidth="2"/><rect x="50" y="30" width="10" height="40" rx="2" fill="#F1F1F1" stroke="#DDDDDD" strokeWidth="2"/><rect x="65" y="30" width="10" height="40" rx="2" fill="#F1F1F1" stroke="#DDDDDD" strokeWidth="2"/><rect x="35" y="50" width="10" height="20" rx="0" fill="#FF9AA2"/><rect x="50" y="40" width="10" height="30" rx="0" fill="#FF9AA2"/><rect x="65" y="45" width="10" height="25" rx="0" fill="#FF9AA2"/></svg>`,
}


const BenefitCard = ({ icon, title, subtitle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <Box
        sx={{
          border: "1px solid #E5E7EB",
          borderRadius: "16px",
          p: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          bgcolor: "white",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
          },
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            mb: 2,
            position: "relative",
          }}
        >
          {icon.startsWith("/") ? (
            <Image src={icon || "/placeholder.svg"} alt={title} fill style={{ objectFit: "contain" }} />
          ) : (
            <Box
              dangerouslySetInnerHTML={{
                __html:
                  placeholderIcons[icon.replace("/icons/", "").replace(".svg", "")] || placeholderIcons["weight-loss"],
              }}
              sx={{ width: "100%", height: "100%" }}
            />
          )}
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: "1rem",
            color: "#0F172A",
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#0F172A",
            mt: 0.5,
            lineHeight: 1.2,
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </motion.div>
  )
}

export default function BenefitsGrid() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        

        <Grid container spacing={3}>
          {benefits.map((benefit, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <BenefitCard icon={benefit.icon} title={benefit.title} subtitle={benefit.subtitle} index={index} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  )
}

