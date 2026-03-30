import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

const PrivacyPage = () => (
  <LegalPageLayout title="Privacy Policy" lastUpdated="March 2026">
    <LegalSection title="Introduction">
      <p>CONNECTCORE SOLUTIONS ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our independent third-party assistance services.</p>
    </LegalSection>
    <LegalSection title="Information We Collect">
      <ul className="list-disc pl-5 space-y-2">
        <li>Name and contact information (email, phone number)</li>
        <li>Details of your inquiry or question</li>
        <li>Communication records related to assistance provided</li>
      </ul>
    </LegalSection>
    <LegalSection title="Information We Do NOT Collect">
      <ul className="list-disc pl-5 space-y-2">
        <li>Passwords or login credentials for any service</li>
        <li>Sensitive financial data (credit card numbers, bank details)</li>
        <li>Social Security numbers or government IDs</li>
      </ul>
    </LegalSection>
    <LegalSection title="How We Use Your Information">
      <p>We use collected information solely to provide assistance, respond to inquiries, and improve our services. We do not sell or share your information with third parties for marketing purposes.</p>
    </LegalSection>
    <LegalSection title="Data Security">
      <p>We implement appropriate security measures including HTTPS encryption to protect your data during transmission. However, no method of electronic storage is 100% secure.</p>
    </LegalSection>
    <LegalSection title="Contact Us">
      <p>For privacy-related questions, contact us at support@connectcoresolutions.com or (866) 867-8680.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default PrivacyPage;
