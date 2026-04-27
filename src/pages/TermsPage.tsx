import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

const TermsPage = () => (
  <LegalPageLayout title="Terms & Conditions" lastUpdated="April 2026">
    <LegalSection title="1. About Our Services">
      <p>ConnectCore Solutions provides independent, unaffiliated advisory and educational guidance on topics relating to home internet, cable TV, Wi-Fi, and streaming. We are not an internet service provider, cable operator, or streaming platform of any kind. We do not sell, install, or supply any connectivity services.</p>
    </LegalSection>
    <LegalSection title="2. Independence & No Affiliation">
      <p>ConnectCore Solutions operates entirely independently. We hold no affiliation with, authorisation from, endorsement by, or sponsorship from any internet provider, cable company, or streaming service. Any third-party brand names referenced on our website are the intellectual property of their respective owners.</p>
    </LegalSection>
    <LegalSection title="3. Advisory Fees">
      <p>Our advisory services are rendered for a fee that is agreed upon before any consultation begins. This fee is wholly separate from, and has no bearing on, any charges you may owe to a service provider.</p>
    </LegalSection>
    <LegalSection title="4. No Outcome Guarantees">
      <p>ConnectCore Solutions does not guarantee any particular resolution, outcome, service level, or technical fix. All guidance provided is educational and advisory; results will vary based on individual circumstances beyond our control.</p>
    </LegalSection>
    <LegalSection title="5. Client Responsibility">
      <p>Clients bear sole responsibility for decisions and actions taken on the basis of our advisory guidance. ConnectCore Solutions accepts no liability for outcomes arising from information or recommendations provided during consultations.</p>
    </LegalSection>
    <LegalSection title="6. Limitation of Liability">
      <p>To the fullest extent permitted under applicable law, ConnectCore Solutions shall not be held liable for any indirect, incidental, special, or consequential losses or damages arising from your use of our advisory services.</p>
    </LegalSection>
    <LegalSection title="7. Questions">
      <p>For any questions regarding these Terms & Conditions, please contact us at support@connectcoresolutions.com.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default TermsPage;
