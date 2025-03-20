"use client"

import { Box, Container, Typography, Grid } from "@mui/material"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

const features = [
    {
        title: "Regulates Cholesterol for Arterial Health",
        description: "Helps lower harmful LDL cholesterol while boosting heart-protective HDL cholesterol.  ",
    },
    {
        title: "Promotes Healthy Blood Pressure",
        description: "Aids in maintaining balanced blood pressure, reducing strain on the heart and vessels.",
    },
    {
        title: "Enhances Circulation & Blood Flow",
        description: "Improves vascular flexibility and oxygen delivery for optimal heart performance.",
    },
    {
        title: "Fights Inflammation & Free Radical Damage",
        description: "Protects against oxidative stress, a key factor in heart disease and aging.",
    },
]

const floatAnimation = {
    y: [0, -15, 0],
    transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
    },
}

export default function CardiovascularSection() {
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
                                    Cardiovascular Support for Every Heartbeat with{" "}
                                    <Box component="span" sx={{ color: "#1BB3F7" }}>
                                        ProGsterol
                                    </Box>
                                </Typography>
                            </motion.div>
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
                                    A healthy heart means a healthier life. ProGsterol is specially formulated to support cardiovascular function by improving cholesterol levels, enhancing circulation, and reducing inflammation. With science-backed ingredients, it helps strengthen your heart and protect it from long-term damage.
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
                            <Box
                                sx={{
                                    width: { xs: 300, md: 500 },
                                    height: { xs: 300, md: 500 },
                                    backgroundColor: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
                                    borderRadius: "50%",
                                    position: "relative",
                                }}
                            >
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
                                            src="/Heart.jpg"
                                            alt="Weight Graph"
                                            width={350}
                                            height={300}
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                    </Box>
                                </motion.div>
                                {/* <motion.div animate={floatAnimation} style={{ position: "absolute", top: "5%", right: "-25%" }}>
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
                                </motion.div> */}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
