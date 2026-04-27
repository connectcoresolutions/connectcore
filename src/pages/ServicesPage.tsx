import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, XCircle } from "lucide-react";
import serviceImg from "@/assets/service-support.jpg";
import wifiImg from "@/assets/wifi-router.jpg";
import deviceImg from "@/assets/device-connection.jpg";
import streamingImg from "@/assets/streaming-setup.jpg";
import connectivityImg from "@/assets/connectivity.jpg";
import billingImg from "@/assets/billing-guidance.jpg";

const services = [
  { img: serviceImg, title: "Broadband Advisory", what: "We help you decode broadband terminology, compare plan structures, and understand the factors that affect internet performance in your home — without pushing any particular provider.", dont: "We do not install, configure, or supply any internet service or equipment." },
  { img: wifiImg, title: "Wi-Fi Performance Consulting", what: "Our advisors walk you through proven strategies to strengthen Wi-Fi coverage, reduce dead zones, and address common interference issues affecting your home network.", dont: "We do not remotely access your devices, routers, or network hardware." },
  { img: deviceImg, title: "Multi-Device Connectivity Guidance", what: "We explain how to get smart TVs, laptops, phones, tablets, and other household devices working seamlessly together on your home network.", dont: "We do not provide device-specific manufacturer technical support." },
  { img: streamingImg, title: "Streaming Platform Education", what: "We give you a clear, unbiased overview of major streaming services, device compatibility, subscription tiers, and common setup steps to help you make sense of your options.", dont: "We do not sell, activate, or manage any streaming service on your behalf." },
  { img: connectivityImg, title: "Home Network Consulting", what: "From router placement to mesh systems and Ethernet runs, we advise on the best ways to structure your home network for speed and reliability.", dont: "We do not carry out physical installations or on-site visits." },
  { img: billingImg, title: "Plan & Billing Clarification", what: "We break down the structure of provider invoices, explain common charges and fees, and help you understand what you are actually paying for each month.", dont: "We do not access provider portals, process payments, or alter your billing in any way." },
];

const ServicesPage = () => (
  <>
    <TopBar />
    <Navbar />
    <section className="py-16 lg:py-24">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            What We <span className="text-primary">Advise On</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every service below is purely advisory and educational in nature. ConnectCore Solutions does not sell, install, or directly supply any internet, cable, or streaming service.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={s.img}
                  alt={s.title}
                  className="rounded-2xl shadow-lg w-full h-64 object-cover border border-border"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className={`space-y-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h2 className="font-heading font-extrabold text-2xl">{s.title}</h2>
                <div className="space-y-4">
                  <div className="bg-accent/50 rounded-xl p-5 border border-border">
                    <h3 className="flex items-center gap-2 font-semibold text-sm mb-2">
                      <CheckCircle className="h-4 w-4 text-primary" /> What We Assist With
                    </h3>
                    <p className="text-sm text-muted-foreground">{s.what}</p>
                  </div>
                  <div className="bg-destructive/5 rounded-xl p-5 border border-destructive/20">
                    <h3 className="flex items-center gap-2 font-semibold text-sm mb-2">
                      <XCircle className="h-4 w-4 text-destructive" /> What We Do NOT Do
                    </h3>
                    <p className="text-sm text-muted-foreground">{s.dont}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default ServicesPage;
