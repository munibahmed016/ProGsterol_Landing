"use client"

import { Box, Container, Typography, Grid } from "@mui/material"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

// Features List (same as you provided)
const features = [
    {
        title: "Targets Insulin Resistance",
        description: "Enhances glucose metabolism, allowing your body to burn fat more efficiently while preventing excess weight gain.",
    },
    {
        title: "Accelerates Fat Burning",
        description: "Activates your body's natural fat-burning processes, helping you shed stored fat and achieve a leaner, healthier physique.",
    },
    {
        title: "Maintains Energy Balance",
        description: "Stabilizes blood sugar levels to prevent energy crashes and cravings while sustaining fat metabolism throughout the day.",
    },
]

// Floating animation (up and down)
const floatAnimation = {
    y: [0, -15, 0], // Moves up 15px and back down
    transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
    },
}

export default function FeatureSection() {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [controls, inView])

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    }

    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                bgcolor: "white",
                overflow: "hidden",
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    {/* Left Side - Text and Features */}
                    <Grid item xs={12} md={6}>
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { transition: { staggerChildren: 0.2 } },
                            }}
                        >
                            {/* Title */}
                            <motion.div variants={textVariants}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 3,
                                        lineHeight: 1.2,
                                        fontSize: { xs: "2rem", md: "2.5rem" },
                                        color: "#071A2B",
                                    }}
                                >
                                    Changes in Body weight with{" "}
                                    <Box component="span" sx={{ color: "#1BB3F7" }}>
                                        ProGsterol
                                    </Box>
                                </Typography>
                            </motion.div>

                            {/* Description */}
                            <motion.div variants={textVariants}>
                                <Typography
                                    variant="body1"
                                    color="#071A2B"
                                    sx={{
                                        mb: 4,
                                        maxWidth: "90%",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    Struggling with stubborn weight? proGsterol boosts metabolism, balances energy, and promotes fat loss. Clinically proven to reduce weight, lower BMI, and enhance fat burning. See the results for yourself! Here’s how it works:
                                </Typography>
                            </motion.div>

                            {/* Features List */}
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                                {features.map((feature, index) => (
                                    <motion.div key={index} variants={textVariants}>
                                        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 4 }}>
                                            <CheckCircle size={34} color="#6366f1" />
                                            <Box>
                                                <Typography variant="h5" sx={{ fontWeight: 600, color: "#071A2B" }}>
                                                    {feature.title}
                                                </Typography>
                                                <Typography variant="body1" color="#071A2B">
                                                    {feature.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </motion.div>
                                ))}
                            </Box>
                        </motion.div>
                    </Grid>

                    {/* Right Side - Circular Background with Floating Images */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {/* Circular Background */}
                            <Box
                                sx={{
                                    width: { xs: 300, md: 500 },
                                    height: { xs: 300, md: 500 },
                                    backgroundColor: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
                                    borderRadius: "50%",
                                    position: "relative",
                                }}
                            >
                                {/* Floating Main Image (Weight.png) */}
                                <motion.div animate={floatAnimation} style={{ position: "absolute", top: "30%", left: "5%" }}>
                                    <Box
                                        sx={{
                                            width: 350,
                                            backgroundColor: "white",
                                            borderRadius: "12px",
                                            boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <Image
                                            src="/Weight.png"
                                            alt="Weight Graph"
                                            width={350}
                                            height={300}
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                    </Box>
                                </motion.div>

                                {/* Floating Secondary Image (graph.png) */}
                                <motion.div animate={floatAnimation} style={{ position: "absolute", top: "5%", right: "-25%" }}>
                                    <Box
                                        sx={{
                                            width: 300,
                                            backgroundColor: "white",
                                            borderRadius: "12px",
                                            boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <Image
                                            src="/graph.png"
                                            alt="Progress Graph"
                                            width={300}
                                            height={280}
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                    </Box>
                                </motion.div>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
