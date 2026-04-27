import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

const DisclaimerPage = () => (
  <LegalPageLayout title="Disclaimer" lastUpdated="April 2026">
    <LegalSection title="Who We Are">
      <p>ConnectCore Solutions is an independent, consumer-focused advisory service established in 2026. We are not an internet service provider, cable television operator, or streaming platform, and we do not function as one in any capacity.</p>
    </LegalSection>
    <LegalSection title="No Provider Affiliation">
      <p>ConnectCore Solutions holds no affiliation with, authorisation from, endorsement by, or sponsorship from any internet, broadband, cable TV, or streaming service provider. Any third-party brand names, service marks, or trademarks appearing on this website are the exclusive property of their respective owners and are referenced solely to provide educational context.</p>
    </LegalSection>
    <LegalSection title="Scope of Our Services">
      <p>All services offered by ConnectCore Solutions are strictly educational and advisory in character. We provide independent guidance, general best-practice information, and consumer-oriented clarity. We do not sell, install, configure, or directly supply any internet, cable TV, or streaming service.</p>
    </LegalSection>
    <LegalSection title="No Warranties or Guarantees">
      <p>ConnectCore Solutions makes no warranties, express or implied, regarding specific outcomes, service availability, technical resolutions, or pricing accuracy. Advisory information is based on general knowledge and may not apply to every individual situation or provider.</p>
    </LegalSection>
    <LegalSection title="Advisory Fees">
      <p>Fees for ConnectCore Solutions advisory services are entirely separate from, and unrelated to, any charges levied by service providers. Our fees compensate our advisors for their time and expertise, nothing more.</p>
    </LegalSection>
    <LegalSection title="Client Responsibility">
      <p>Clients are solely responsible for the decisions they make based on the guidance we provide. ConnectCore Solutions strongly encourages clients to verify all relevant information independently before taking any action.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default DisclaimerPage;
