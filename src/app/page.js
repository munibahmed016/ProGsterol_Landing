"use client"

import { Box } from "@mui/material"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import TrustedCompanies from "@/components/TrustedCompanies"
import FeaturesSection from "@/components/FeaturesSection"
import FeatureShowcase from "@/components/FeatureShowcase"
import Footer from "@/components/Footer"
import ProductShowcase from "@/components/ProductShowcase"
// import HowItWorks from "@/components/HowItWorks"
import PricingSection from "@/components/Pricing"
import FAQSection from "@/components/FAQ's"
import RecommendedByDoctors from "@/components/Dcotor"
import CustomerTestimonials from "@/components/Customers"
import TestimonialsSection from "@/components/TestimonialsSection."
import CTAForms from "@/components/CTAForms"
import ProductInterestCTA from "@/components/ProductInterestCTA"
import ContactForm from "@/components/ContactForm"
import HealthExpertCTA from "@/components/HealthExpertCTA"

export default function Home() {
  return (
    <Box
      sx={{
        bgcolor: "#f9f9ff",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Header />
      <HeroSection />
      <TrustedCompanies />
      <ProductInterestCTA/>
      {/* <ProductShowcase /> */}
      <FeaturesSection/>
      {/* <HowItWorks /> */}
      {/* <RecommendedByDoctors /> */}
      {/* <CustomerTestimonials /> */}
      <HealthExpertCTA/>
      <TestimonialsSection />
      <ContactForm/>
      {/* <FeatureShowcase />  */}
      <PricingSection />
      <FAQSection />
      <Footer />
    </Box>
  )
}

