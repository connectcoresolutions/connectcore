import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

const PrivacyPage = () => (
  <LegalPageLayout title="Privacy Policy" lastUpdated="April 2026">
    <LegalSection title="Our Commitment to Your Privacy">
      <p>ConnectCore Solutions ("we", "our", or "us") values the trust you place in us. This Privacy Policy describes how we collect, use, and protect your personal information when you engage with our independent advisory services.</p>
    </LegalSection>
    <LegalSection title="What We Collect">
      <ul className="list-disc pl-5 space-y-2">
        <li>Your name and contact details (email address and phone number)</li>
        <li>The subject matter and details of your connectivity query</li>
        <li>Records of advisory communications we have with you</li>
      </ul>
    </LegalSection>
    <LegalSection title="What We Never Collect">
      <ul className="list-disc pl-5 space-y-2">
        <li>Passwords or login credentials for any platform or service</li>
        <li>Credit card numbers, bank account details, or other financial data</li>
        <li>Social Security numbers or government-issued identification</li>
      </ul>
    </LegalSection>
    <LegalSection title="How We Use Your Information">
      <p>Information you provide is used exclusively to deliver advisory services, respond to your questions, and improve the quality of our guidance. We do not sell, rent, or share your personal information with third parties for marketing or commercial purposes.</p>
    </LegalSection>
    <LegalSection title="Security Measures">
      <p>We apply industry-standard security measures, including HTTPS encryption for all data in transit, to safeguard your information. While we take all reasonable precautions, no digital transmission can be guaranteed to be entirely secure.</p>
    </LegalSection>
    <LegalSection title="Contact Us About Privacy">
      <p>If you have any privacy-related questions or requests, please contact us at support@connectcoresolutions.com or by calling (866) 867-8680.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default PrivacyPage;
