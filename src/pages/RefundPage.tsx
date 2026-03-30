import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

const RefundPage = () => (
  <LegalPageLayout title="Refund Policy" lastUpdated="March 2026">
    <LegalSection title="Eligibility">
      <p>You may request a refund within 7 to 15 days of receiving assistance from CONNECTCORE SOLUTIONS. Refund requests must be submitted in writing via email to support@connectcoresolutions.com.</p>
    </LegalSection>
    <LegalSection title="Conditions">
      <ul className="list-disc pl-5 space-y-2">
        <li>Refunds are available for our assistance fees only — not for any third-party service provider charges.</li>
        <li>If assistance was fully delivered and utilized, partial refunds may apply at our discretion.</li>
        <li>Refund requests submitted after the 15-day window will not be processed.</li>
      </ul>
    </LegalSection>
    <LegalSection title="Processing">
      <p>Approved refunds are processed within 5–10 business days. Refunds are issued to the original payment method used.</p>
    </LegalSection>
    <LegalSection title="Contact">
      <p>For refund inquiries, email support@connectcoresolutions.com or call (866) 867-8680.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default RefundPage;
