"use client"

import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from "react"

const faqs = [
    { question: "What is ProGsterol?", answer: "ProGsterol is a dietary supplement to maintain healthy blood glucose levels.• ProGsterol enhances cell insulin sensitivity and glucose absorption to regulate blood sugar levels." },
    { question: "How to setup account?", answer: "Setting up your account is simple. Follow the on-screen instructions after you sign up." },
    { question: "What is the process to get a refund?", answer: "You can request a refund by contacting our support team within 30 days of your purchase." },
    { question: "Can I get code bug support for customization?", answer: "Yes, we provide customization support depending on your plan." },
]

export default function FAQSection() {
    const [expanded, setExpanded] = useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <Box sx={{ bgcolor: "#F8F8FF", py: 8 }}>
            <Container maxWidth="md">
                <Typography variant="h4" align="center" fontWeight="bold" color="#3B3B98" mb={1}>
                    FAQ - Frequently Asked Questions
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary" mb={4}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Typography>

                {faqs.map((faq, index) => (
                    <Accordion
                        key={index}
                        expanded={expanded === `panel${index}`}
                        onChange={handleChange(`panel${index}`)}
                        sx={{
                            bgcolor: "white",
                            boxShadow: "none",
                            borderRadius: "8px",
                            mb: 2,
                            "&:before": { display: "none" },
                            overflow: "hidden",
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                fontWeight: expanded === `panel${index}` ? "bold" : "normal",
                                bgcolor: expanded === `panel${index}` ? "#F0F0FF" : "#fff",
                            }}
                        >
                            <Typography fontWeight="bold" color="#3B3B98">
                                {faq.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ bgcolor: "#F0F0FF" }}>
                            <Typography color="text.secondary" component="div">
                                <ul>
                                    <li>{faq.answer}</li>
                                    <li>{faq.answer}</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
        </Box>
    )
}
