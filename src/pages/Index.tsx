import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryCards from "@/components/CategoryCards";
import FeatureSection from "@/components/FeatureSection";
import AboutSection from "@/components/AboutSection";
import TrustBlock from "@/components/TrustBlock";
import LargeImageSection from "@/components/LargeImageSection";
import ServicesGrid from "@/components/ServicesGrid";
import HowItWorksSection from "@/components/HowItWorksSection";
import ImageCarousel from "@/components/ImageCarousel";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import SupportPopup from "@/components/SupportPopup";

const Index = () => (
  <>
    <TopBar />
    <Navbar />
    <HeroSection />
    <CategoryCards />
    <ImageCarousel />
    <FeatureSection />
    <AboutSection />
    <TrustBlock />
    <LargeImageSection />
    <ServicesGrid />
    <HowItWorksSection />
    <WhatWeDoSection />
    <FAQSection />
    <Footer />
    <SupportPopup />
  </>
);

export default Index;
