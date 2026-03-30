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
  { img: serviceImg, title: "Internet Setup Guidance", what: "We help you understand the general process of setting up internet connections, including terminology, equipment basics, and common configurations.", dont: "We do not install, configure, or provide internet service." },
  { img: wifiImg, title: "Wi-Fi Troubleshooting", what: "We guide you through common Wi-Fi issues such as slow speeds, dropped connections, and range limitations with general tips.", dont: "We do not remotely access your devices or guarantee fixes." },
  { img: deviceImg, title: "Device Connection Help", what: "We provide general guidance on connecting devices like smart TVs, phones, tablets, and laptops to your network.", dont: "We do not provide manufacturer-specific technical support." },
  { img: streamingImg, title: "Streaming Setup Assistance", what: "We offer informational support on setting up streaming devices and understanding streaming options.", dont: "We do not sell, manage, or provide streaming subscriptions." },
  { img: connectivityImg, title: "General Connectivity Help", what: "Broad guidance on networking concepts, wiring questions, and connectivity-related concerns.", dont: "We do not perform on-site visits or physical installations." },
  { img: billingImg, title: "Billing Guidance", what: "Informational help understanding billing concepts, common charges, and general provider billing practices.", dont: "We do not process payments, access your provider accounts, or modify your bills." },
];

const ServicesPage = () => (
  <>
    <TopBar />
    <Navbar />
    <section className="py-16 lg:py-24">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            All services listed below are informational and assistance-based only. CONNECTCORE SOLUTIONS does not sell, provide, or install any internet, cable, or streaming services.
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
