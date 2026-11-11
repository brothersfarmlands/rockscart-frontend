import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.company} collects, uses and protects your personal data on ${site.appName}.`,
};

export default function PrivacyPage() {
  const { company, appName } = site;
  return (
    <LegalPage title="Privacy Policy">
      <p>
        {company} (“<strong>we</strong>”, “<strong>us</strong>”, “<strong>our</strong>”) operates the {appName} mobile
        applications and website (the “<strong>Platform</strong>”). We respect your privacy. This Privacy Policy
        explains what personal data we collect, why we collect it, and the choices you have. It is published in
        accordance with the Information Technology Act, 2000, the rules made under it, and the Digital Personal Data
        Protection Act, 2023.
      </p>

      <h2>1. Information we collect</h2>
      <h3>Information you provide</h3>
      <ul>
        <li>
          <strong>Account details:</strong> name, mobile number, email address.
        </li>
        <li>
          <strong>Delivery details:</strong> delivery addresses, landmarks and delivery instructions.
        </li>
        <li>
          <strong>Order details:</strong> products purchased, order history, ratings and feedback.
        </li>
        <li>
          <strong>Communications:</strong> messages you send to our support team.
        </li>
      </ul>
      <h3>Information collected automatically</h3>
      <ul>
        <li>
          <strong>Location:</strong> with your permission, your device location to check serviceability and help
          with accurate delivery.
        </li>
        <li>
          <strong>Device and usage data:</strong> device model, operating system, app version, IP address, crash
          logs and how you interact with the Platform.
        </li>
      </ul>
      <h3>Payment information</h3>
      <p>
        Payments are processed by authorised third-party payment gateways. We do not store your full card number, CVV
        or UPI PIN. We receive only a transaction reference and payment status.
      </p>

      <h2>2. How we use your information</h2>
      <ul>
        <li>to create and manage your account and verify your identity via OTP;</li>
        <li>to process, deliver and support your orders, including sharing your name, phone and address with our delivery partners;</li>
        <li>to process payments, refunds and prevent fraud;</li>
        <li>to send order updates and service notifications by SMS, WhatsApp, email or push notification;</li>
        <li>to send offers and promotions, where you have not opted out;</li>
        <li>to improve our products, app experience and service areas;</li>
        <li>to comply with legal obligations and enforce our Terms.</li>
      </ul>

      <h2>3. Sharing of information</h2>
      <p>We do not sell your personal data. We share it only with:</p>
      <ul>
        <li>delivery partners, to fulfil your orders;</li>
        <li>payment gateways and banks, to process payments and refunds;</li>
        <li>service providers for hosting, analytics, SMS/OTP, notifications and customer support, bound by confidentiality obligations;</li>
        <li>government or law-enforcement authorities where required by law;</li>
        <li>a successor entity in case of a merger, acquisition or sale of assets.</li>
      </ul>

      <h2>4. Data retention</h2>
      <p>
        We keep your personal data only as long as needed for the purposes described above, or as required by law (for
        example, tax and accounting records). When you delete your account, we delete or anonymise your data unless we
        must keep it for legal reasons.
      </p>

      <h2>5. Data security</h2>
      <p>
        We use reasonable technical and organisational safeguards — including encryption in transit and restricted
        access controls — to protect your data. However, no method of transmission or storage is completely secure.
      </p>

      <h2>6. Your rights and choices</h2>
      <ul>
        <li>access and update your account information in the app;</li>
        <li>request correction or erasure of your personal data;</li>
        <li>withdraw consent, for example for location access or marketing messages;</li>
        <li>delete your account from the app settings or by writing to us;</li>
        <li>nominate another person to exercise your rights in the event of death or incapacity;</li>
        <li>raise a grievance with us, and thereafter with the Data Protection Board of India.</li>
      </ul>
      <p>
        To exercise any of these rights, email{" "}
        <a href={`mailto:${site.grievanceOfficer.email}`}>{site.grievanceOfficer.email}</a>.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Our website may use cookies and similar technologies to remember preferences and understand how visitors use
        the site. You can control cookies through your browser settings.
      </p>

      <h2>8. Children’s privacy</h2>
      <p>
        The Platform is not directed at children under 18. We do not knowingly collect personal data from children
        without verifiable parental consent.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised “Last
        updated” date, and significant changes will be notified in the app.
      </p>

      <h2>10. Grievance Officer</h2>
      <p>
        <strong>{site.grievanceOfficer.name}</strong>
        <br />
        {company}
        <br />
        {site.contact.address}
        <br />
        Email: <a href={`mailto:${site.grievanceOfficer.email}`}>{site.grievanceOfficer.email}</a>
      </p>
    </LegalPage>
  );
}
