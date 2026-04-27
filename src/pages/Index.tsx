import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import AboutSection from "@/components/AboutSection";
import TrustBlock from "@/components/TrustBlock";
import LargeImageSection from "@/components/LargeImageSection";
import ServicesGrid from "@/components/ServicesGrid";
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
    <AboutSection />
    <ServicesGrid />
    <ImageCarousel />
    <FeatureSection />
    <TrustBlock />
    <LargeImageSection />
    <WhatWeDoSection />
    <FAQSection />
    <Footer />
    <SupportPopup />
  </>
);

export default Index;
