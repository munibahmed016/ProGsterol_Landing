import { Box, Typography, Avatar, Rating, Container } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from "swiper/modules"

const testimonials = [
    {
        name: "Willium Den",
        role: "Creative Inc",
        image: "/user1.png",
        rating: 5,
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
    },
    {
        name: "Jane Doe",
        role: "Marketing Manager",
        image: "/user2.png",
        rating: 4.8,
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
    },
    {
        name: "John Smith",
        role: "Product Manager",
        image: "/user3.png",
        rating: 4.9,
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
    },
]

export default function CustomerTestimonials() {
    return (
        <Box sx={{ py: 8, backgroundColor: "#F8F8FF" }}>
            <Container maxWidth="lg">
                <Typography variant="h4" align="center" fontWeight="bold" mb={1}>
                    What our <span style={{ color: "#5A31F4" }}>customer say</span>
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary" mb={4}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Typography>

                <Swiper
                    pagination={{ clickable: true }}
                    loop={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    style={{ paddingBottom: 30 }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <Box textAlign="center">
                                <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                                <Typography variant="body1" fontStyle="italic" maxWidth={600} mx="auto" mb={3}>
                                    {testimonial.review}
                                </Typography>
                                <Avatar
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    sx={{ width: 100, height: 100, mx: "auto", mb: 1 }}
                                />
                                <Typography fontWeight="bold">{testimonial.name}</Typography>
                                <Typography variant="body2" color="text.secondary">{testimonial.role}</Typography>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Box textAlign="center" mt={4}>
                    <Typography variant="h4" fontWeight="bold">
                        2578
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        TOTAL USER REVIEWS →
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}
