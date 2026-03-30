import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

const TermsPage = () => (
  <LegalPageLayout title="Terms & Conditions" lastUpdated="March 2026">
    <LegalSection title="1. Nature of Services">
      <p>CONNECTCORE SOLUTIONS provides independent, third-party informational assistance and guidance related to internet, cable TV, Wi-Fi, and streaming topics. We are NOT an internet service provider, cable company, or streaming platform. We do not sell, install, or provide any connectivity services.</p>
    </LegalSection>
    <LegalSection title="2. No Affiliation">
      <p>We are not affiliated with, authorized by, endorsed by, or sponsored by any internet, broadband, cable TV, or streaming service provider. All trademarks and brand names mentioned belong to their respective owners.</p>
    </LegalSection>
    <LegalSection title="3. Service Fees">
      <p>Our assistance services are provided for a fee, which is charged separately from any service provider charges. Fee details are communicated prior to service delivery.</p>
    </LegalSection>
    <LegalSection title="4. No Guarantees">
      <p>We do not guarantee any specific outcomes, resolutions, service availability, or results. Our support is informational and advisory in nature.</p>
    </LegalSection>
    <LegalSection title="5. User Responsibility">
      <p>Users are responsible for any actions they take based on the guidance provided. CONNECTCORE SOLUTIONS is not liable for decisions made using our informational assistance.</p>
    </LegalSection>
    <LegalSection title="6. Limitation of Liability">
      <p>To the maximum extent permitted by law, CONNECTCORE SOLUTIONS shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
    </LegalSection>
    <LegalSection title="7. Contact">
      <p>For questions about these terms, contact us at support@connectcoresolutions.com.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default TermsPage;
