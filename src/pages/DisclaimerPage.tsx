import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

const DisclaimerPage = () => (
  <LegalPageLayout title="Disclaimer" lastUpdated="March 2026">
    <LegalSection title="Independent Third-Party Service">
      <p>CONNECTCORE SOLUTIONS is an independent third-party service assistance provider launched in 2026. We are NOT an internet service provider (ISP), cable TV company, or streaming platform.</p>
    </LegalSection>
    <LegalSection title="No Affiliation">
      <p>We are not affiliated with, authorized by, endorsed by, or sponsored by any internet, broadband, cable TV, or streaming service provider. Any brand names, trademarks, or service marks mentioned on this website belong to their respective owners and are used for informational purposes only.</p>
    </LegalSection>
    <LegalSection title="Nature of Services">
      <p>Our services are strictly informational and advisory. We provide general guidance, troubleshooting tips, and educational information. We do not sell, install, configure, or directly provide any internet, cable, or streaming services.</p>
    </LegalSection>
    <LegalSection title="No Guarantees">
      <p>We do not guarantee any specific outcomes, service availability, pricing, or resolution of issues. Information provided is based on general knowledge and may not apply to every individual situation.</p>
    </LegalSection>
    <LegalSection title="Separate Fees">
      <p>Our assistance services are provided for a separate fee, which is independent of and unrelated to any charges from service providers. Our fees cover the time and expertise of our independent support team.</p>
    </LegalSection>
    <LegalSection title="User Responsibility">
      <p>Users are solely responsible for any actions taken based on the guidance and information provided by CONNECTCORE SOLUTIONS. We strongly recommend verifying information independently before making decisions.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default DisclaimerPage;
