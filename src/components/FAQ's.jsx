"use client";

import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

const faqs = [
    {
        question: "What is ProGsterol?",
        answer: [
            "ProGsterol is a dietary supplement to maintain healthy blood glucose levels.",
            "ProGsterol enhances cell insulin sensitivity and glucose absorption to regulate blood sugar levels."
        ]
    },
    {
        question: "What is ProGsterol made of?",
        answer: [
            "Main ingredient of ProGsterol is Deglusterol.",
            "Deglusterol is a synthetic peptide mixture made up of two peptides (Adiporin and Deobetide).",
            "Deglusterol breaks down into amino acids.",
            "These peptides consist of 5 and 9 amino acids respectively: alanine, arginine, asparagine, glycine, leucine, lysine, methionine, serine, and threonine.",
            "Each sachet contains 30 mg of Deglusterol."
        ]
    },
    {
        question: "What are peptides?",
        answer: [
            "Peptides are short chains of amino acids (the building blocks of proteins), typically made up of 2 to 50 amino acids linked together.",
            "They play crucial roles in the body, acting as signaling molecules, hormones, and building blocks for various biological functions.",
            "For example:",
            "• Hormone Regulation",
            "• Signaling and Communication",
            "• Immune Support",
            "• Muscle Growth and Repair",
            "• Metabolic Regulation",
            "• Anti-Inflammatory and Antioxidant Effects",
            "In supplements like ProGsterol, peptides are designed to target specific pathways or functions.",
            "The peptides in ProGsterol help improve insulin sensitivity and reduce inflammation, supporting blood sugar management and metabolic health."
        ]
    },
    {
        question: "What is Deglusterol used for?",
        answer: [
            "Deglusterol is used for treating insulin resistance-related diseases, including:",
            "• Type II diabetes",
            "• Pre-diabetes",
            "• Obesity",
            "• Metabolic dysfunction-associated steatotic liver disease (MASLD)",
            "• Non-alcoholic fatty liver disease (NAFLD)",
            "• Polycystic ovary syndrome (PCOS)",
            "It helps improve insulin sensitivity, reduce inflammation, enhance glucose uptake, and promote lipid metabolism."
        ]
    }
];

export default function FAQSection() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ bgcolor: "#F8F8FF", py: 8 }}>
            <Container maxWidth="md">
                <Typography variant="h4" align="center" fontWeight="bold" color="#3B3B98" mb={1}>
                    FAQ - Frequently Asked Questions
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
                                <ul style={{ paddingLeft: "20px" }}>
                                    {faq.answer.map((point, i) => (
                                        <li key={i} style={{ marginBottom: "5px" }}>{point}</li>
                                    ))}
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
        </Box>
    );
}
