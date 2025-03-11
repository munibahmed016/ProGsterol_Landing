"use client"

import { Box, Container, Grid, Typography, Avatar } from "@mui/material"
import Image from "next/image"

const doctors = [
    {
        name: "Zara Mehmood",
        specialty: "Pharmacist",
        image: "/dr-zara.jpg", // Replace with actual image paths
        quote: "I have been thoroughly impressed by the innovative products I've come across, particularly Progsterol and the remarkable 6-in-1 device. While I haven’t personally used Progsterol, I have seen numerous cases where it effectively manages blood glucose levels within just 30 minutes to an hour—a truly outstanding result for anyone seeking quick and reliable glucose control. Additionally, the 6-in-1 device is unlike anything I’ve ever seen. Its multifunctionality and unique design set it apart from other devices in the market, making it an exceptional tool for modern healthcare needs. It’s rare to find such innovation packed into a single device, and it truly stands out as a game-changer."
    },
    {
        name: "Dr. Noor Muhammad Shujrah",
        specialty: "Clinical Therapeutic Nutritionist, Mendocino College, California U.S.A",
        image: "/dr_shujra.jpg",
        quote: "As someone who has struggled with managing my blood sugar levels for years, trying ProGsterol has been a game-changer. Within just a few days, I noticed a significant improvement in my glucose levels. I've tried numerous supplements before, but none of them made me feel as balanced and steady throughout the day as ProGsterol. My energy is up, and I feel more in control of my cravings, which has helped me stick to a healthier lifestyle overall. It's amazing to know I'm taking something backed by FDA approval – it gives me confidence that I'm doing something truly beneficial for my health. Highly recommend for anyone looking to improve their blood sugar naturally!"
    },
    {
        name: "Dr. Sitwat Azeem",
        specialty: "Chief Infertility Consultant",
        image: "/dr_sitwat.jpg",
        quote: "As a Chief Infertility Consultant, I highly recommend ProGsterol. This supplement is an excellent aid in managing blood glucose levels and reversing insulin resistance—a key factor not only in addressing PCOS but also in preventing numerous other health complications. ProGsterol has proven to be an effective solution for improving metabolic health, making it a valuable addition to any wellness regimen."
    }
]

export default function RecommendedByDoctors() {
    return (
        <Box sx={{ bgcolor: "#0B2A45", color: "#fff", py: 8 }}>
            <Container maxWidth="lg">
                <Typography variant="h4" align="center" fontWeight="bold" mb={1}>
                    Recommended By Doctors
                </Typography>
                <Typography variant="body1" align="center" mb={6} sx={{ opacity: 0.7 }}>
                    Trusted by healthcare professionals worldwide for its effectiveness.
                </Typography>

                <Grid container spacing={4}>
                    {doctors.map((doctor, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                                <Avatar
                                    src={doctor.image}
                                    alt={doctor.name}
                                    sx={{ width: 60, height: 60, border: "2px solid #00FF99" }}
                                />
                                <Box>
                                    <Typography variant="body2" sx={{ mb: 1, display: "flex", alignItems: "center", gap: 1 }}>
                                        <Image src="/leaf.png" alt="leaf" width={16} height={16} /> {/* Add your leaf icon */}
                                        {doctor.quote}
                                    </Typography>
                                    <Typography variant="body2" fontWeight="bold" color="#00FF99">
                                        {doctor.name} <span style={{ color: "#fff", opacity: 0.7 }}> - {doctor.specialty}</span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}
