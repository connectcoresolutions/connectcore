import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

const FAQPage = () => (
  <>
    <TopBar />
    <Navbar />
    <div className="py-8">
      <FAQSection />
    </div>
    <Footer />
  </>
);

export default FAQPage;
