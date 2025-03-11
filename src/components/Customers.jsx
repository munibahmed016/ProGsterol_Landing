"use client"

import { Box, Typography, Avatar, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Zara Mehmood",
    specialty: "Pharmacist",
    image: "/dr-zara.jpg",
    quote:
      "I have been thoroughly impressed by the innovative products I've come across, particularly Progsterol and the remarkable 6-in-1 device. While I haven’t personally used Progsterol, I have seen numerous cases where it effectively manages blood glucose levels within just 30 minutes to an hour—a truly outstanding result for anyone seeking quick and reliable glucose control. Additionally, the 6-in-1 device is unlike anything I’ve ever seen. Its multifunctionality and unique design set it apart from other devices in the market, making it an exceptional tool for modern healthcare needs. It’s rare to find such innovation packed into a single device, and it truly stands out as a game-changer."
  },
  {
    name: "Dr. Noor Muhammad Shujrah",
    specialty: "Clinical Therapeutic Nutritionist, Mendocino College, California U.S.A",
    image: "/dr_shujra.jpg",
    quote:
      "As someone who has struggled with managing my blood sugar levels for years, trying ProGsterol has been a game-changer. Within just a few days, I noticed a significant improvement in my glucose levels. I've tried numerous supplements before, but none of them made me feel as balanced and steady throughout the day as ProGsterol. My energy is up, and I feel more in control of my cravings, which has helped me stick to a healthier lifestyle overall. It's amazing to know I'm taking something backed by FDA approval – it gives me confidence that I'm doing something truly beneficial for my health. Highly recommend for anyone looking to improve their blood sugar naturally!"
  },
  {
    name: "Dr. Sitwat Azeem",
    specialty: "Chief Infertility Consultant",
    image: "/dr_sitwat.jpg",
    quote:
      "As a Chief Infertility Consultant, I highly recommend ProGsterol. This supplement is an excellent aid in managing blood glucose levels and reversing insulin resistance—a key factor not only in addressing PCOS but also in preventing numerous other health complications. ProGsterol has proven to be an effective solution for improving metabolic health, making it a valuable addition to any wellness regimen."
  }
];

export default function CustomerTestimonials() {
  return (
    <Box sx={{ py: 8, backgroundColor: "#F8F8FF" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" fontWeight="bold" mb={1}>
          Recommended By <span style={{ color: "#5A31F4" }}>Doctors</span>
        </Typography>
        <Typography variant="body1" align="center" color="Black" mb={4}>
          Trusted by healthcare professionals worldwide for its effectiveness.
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
              <Box textAlign="center" sx={{ maxWidth: 700, mx: "auto" }}>
                <Typography variant="body1" fontStyle="italic" mb={3}>
                  "{testimonial.quote}"
                </Typography>
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{ width: 100, height: 100, mx: "auto", mb: 1 }}
                />
                <Typography fontWeight="bold">{testimonial.name}</Typography>
                <Typography variant="body2" color="text.secondary">{testimonial.specialty}</Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
    