import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

const RefundPage = () => (
  <LegalPageLayout title="Refund Policy" lastUpdated="April 2026">
    <LegalSection title="Refund Eligibility">
      <p>Clients who have purchased an advisory consultation from ConnectCore Solutions may request a refund within 7 to 15 days of the date the service was delivered. All refund requests must be submitted in writing to support@connectcoresolutions.com.</p>
    </LegalSection>
    <LegalSection title="Refund Conditions">
      <ul className="list-disc pl-5 space-y-2">
        <li>Refunds apply exclusively to ConnectCore Solutions advisory fees — we have no ability to refund any charges billed by a third-party service provider.</li>
        <li>Where an advisory session has been fully completed and its content delivered, refunds may be considered on a partial basis at our sole discretion.</li>
        <li>Refund requests received outside the 15-day eligibility window cannot be processed.</li>
      </ul>
    </LegalSection>
    <LegalSection title="Processing Timeline">
      <p>Once a refund is approved, it will be processed within 5 to 10 business days. The refund will be returned to the original payment method used at the time of purchase.</p>
    </LegalSection>
    <LegalSection title="Refund Enquiries">
      <p>For all refund-related questions, please email support@connectcoresolutions.com or call us on (866) 867-8680.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default RefundPage;
