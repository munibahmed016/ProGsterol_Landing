"use client"

import { useState, useRef } from "react"
import { Box, Modal, IconButton, Fade } from "@mui/material"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Play, X } from "lucide-react"
import Image from "next/image"

export default function VideoTestimonial({ thumbnail, videoSrc, name }) {
    const [open, setOpen] = useState(false)
    const videoRef = useRef(null)
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const handleOpen = () => {
        setOpen(true)
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play()
            }
        }, 300)
    }

    const handleClose = () => {
        if (videoRef.current) {
            videoRef.current.pause()
        }
        setOpen(false)
    }

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="h-full"
            >
                <Box
                    sx={{
                        bgcolor: "#FFFFFF",
                        borderRadius: "24px",
                        overflow: "hidden",
                        height: "100%",
                        // pt:10,
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                        "&:hover": {
                            transform: "translateY(-8px)",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                            "& .play-button": {
                                transform: "scale(1.1)",
                            },
                        },
                        cursor: "pointer",
                    }}
                    onClick={handleOpen}
                >
                    <Box sx={{ position: "relative", width: "100%", pt: "56.25%" }}>
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <Image
                                src={thumbnail || "/placeholder.svg"}
                                alt={`${name} video thumbnail`}
                                fill
                                // style={{ objectFit: "cover" }}
                                unoptimized={false}
                            />
                            <Box
                                className="play-button"
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: 60,
                                    height: 60,
                                    borderRadius: "50%",
                                    bgcolor: "rgba(255,255,255,0.9)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "transform 0.3s ease-in-out",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                                }}
                            >
                                <Play size={24} color="#6366f1" fill="#6366f1" />
                            </Box>
                        </Box>
                    </Box>

                    {/*  */}
                </Box>
            </motion.div>

            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: { xs: 2, md: 4 },
                }}
            >
                <Fade in={open} timeout={300}>
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            maxWidth: 900,
                            bgcolor: "background.paper",
                            borderRadius: 2,
                            boxShadow: 24,
                            p: 1,
                            outline: "none",
                        }}
                    >
                        <IconButton
                            onClick={handleClose}
                            sx={{
                                position: "absolute",
                                top: -20,
                                right: -20,
                                bgcolor: "white",
                                zIndex: 10,
                                "&:hover": {
                                    bgcolor: "rgba(255,255,255,0.9)",
                                },
                                boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                            }}
                        >
                            <X size={20} />
                        </IconButton>
                        <Box
                            component="video"
                            ref={videoRef}
                            controls
                            width="50%"
                            height="50%"
                            justifyContent="center"
                            sx={{
                                borderRadius: 1,
                                outline: "none",
                            }}
                        >
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}