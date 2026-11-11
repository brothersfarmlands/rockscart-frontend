import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${site.appName} website and mobile applications.`,
};

export default function TermsPage() {
  const { company, appName } = site;
  return (
    <LegalPage title="Terms & Conditions">
      <p>
        These Terms &amp; Conditions (“<strong>Terms</strong>”) govern your access to and use of the {appName} mobile
        applications for Android and iOS, the website at {site.url} and related services (together, the “
        <strong>Platform</strong>”), owned and operated by <strong>{company}</strong>, a company incorporated under the
        Companies Act, 2013 (“<strong>{appName}</strong>”, “<strong>we</strong>”, “<strong>us</strong>” or “
        <strong>our</strong>”). By downloading, registering on or using the Platform, you agree to be bound by these
        Terms. If you do not agree, please do not use the Platform.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 18 years of age and competent to contract under the Indian Contract Act, 1872 to place
        orders on the Platform. If you are under 18, you may use the Platform only under the supervision of a parent or
        legal guardian.
      </p>

      <h2>2. Your account</h2>
      <ul>
        <li>You register using a valid mobile number verified by one-time password (OTP).</li>
        <li>You are responsible for keeping your account secure and for all activity under it.</li>
        <li>You agree to provide accurate, current and complete information, including your delivery address.</li>
        <li>We may suspend or terminate accounts that breach these Terms or are used fraudulently.</li>
      </ul>

      <h2>3. Products, pricing and availability</h2>
      <ul>
        <li>
          We currently offer fresh vegetables, pulses and related grocery items. Product images are for illustration;
          natural produce may vary in size, colour and appearance.
        </li>
        <li>
          Prices of fresh produce change daily based on market rates. The price payable is the price shown at the time
          you place your order, inclusive of applicable taxes unless stated otherwise.
        </li>
        <li>
          Fresh produce is sold by weight. Actual weight may vary slightly from the ordered quantity; where a variance
          applies, any difference will be adjusted as shown in your final invoice.
        </li>
        <li>
          All products are subject to availability. If an item becomes unavailable after you order, we will notify you
          and refund or adjust the amount for that item.
        </li>
        <li>
          In case of an obvious pricing or listing error, we reserve the right to cancel the affected order or item and
          issue a full refund.
        </li>
      </ul>

      <h2>4. Orders</h2>
      <p>
        An order placed on the Platform is an offer to purchase. The order is accepted when it is dispatched for
        delivery. We may refuse or cancel any order at our discretion, including due to unserviceable location, stock
        unavailability, suspected fraud or abuse of offers. Any amount paid for a cancelled order will be refunded as
        described in our <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.
      </p>

      <h2>5. Payments</h2>
      <ul>
        <li>
          We accept payment through UPI, debit/credit cards, net banking, wallets and Cash on Delivery (where
          available), processed through authorised third-party payment gateways.
        </li>
        <li>
          We do not store your full card details. Payment processing is subject to the terms of the payment gateway and
          your bank.
        </li>
        <li>
          Delivery charges, packaging charges or minimum order values, if any, will be shown clearly before you confirm
          your order.
        </li>
      </ul>

      <h2>6. Delivery</h2>
      <p>
        Delivery is made to the address you provide within our serviceable areas and in the slot you select, subject to
        our <Link href="/shipping-policy">Delivery Policy</Link>. Please ensure someone is available to receive the
        order. Risk in the products passes to you upon delivery.
      </p>

      <h2>7. Cancellations, returns and refunds</h2>
      <p>
        Cancellations, returns and refunds are governed by our{" "}
        <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>, which forms part of these Terms.
      </p>

      <h2>8. Offers and promotions</h2>
      <p>
        Coupons, discounts and promotional offers are subject to their specific terms, may be withdrawn at any time, and
        cannot be exchanged for cash. We may cancel orders or recover benefits obtained through misuse of offers.
      </p>

      <h2>9. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the Platform for any unlawful purpose or in violation of these Terms;</li>
        <li>place orders for resale or commercial purposes without our written consent;</li>
        <li>attempt to gain unauthorised access to, disrupt or reverse-engineer the Platform;</li>
        <li>impersonate any person or provide false information;</li>
        <li>misbehave with, abuse or threaten our delivery partners or staff.</li>
      </ul>

      <h2>10. Intellectual property</h2>
      <p>
        The {appName} name, logo, app design, content and software are the property of {company} or its licensors and
        are protected by applicable intellectual property laws. You may not use them without our prior written
        permission.
      </p>

      <h2>11. Privacy</h2>
      <p>
        Your use of the Platform is also governed by our <Link href="/privacy">Privacy Policy</Link>, which explains
        how we collect and use your personal data.
      </p>

      <h2>12. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {company} shall not be liable for any indirect, incidental, special or
        consequential damages arising out of your use of the Platform. Our total liability for any claim relating to an
        order shall not exceed the amount you paid for that order.
      </p>

      <h2>13. Indemnity</h2>
      <p>
        You agree to indemnify and hold harmless {company}, its directors, employees and partners from any claims,
        losses or damages arising from your breach of these Terms or misuse of the Platform.
      </p>

      <h2>14. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. The updated Terms will be posted on this page with a revised “Last
        updated” date. Continued use of the Platform after changes means you accept the revised Terms.
      </p>

      <h2>15. Governing law and jurisdiction</h2>
      <p>
        These Terms are governed by the laws of India. Subject to applicable consumer protection laws, the courts at{" "}
        {site.jurisdictionCity} shall have exclusive jurisdiction over any dispute arising out of these Terms.
      </p>

      <h2>16. Grievance redressal</h2>
      <p>
        In accordance with the Information Technology Act, 2000 and the Consumer Protection (E-Commerce) Rules, 2020,
        you may contact our Grievance Officer:
      </p>
      <p>
        <strong>{site.grievanceOfficer.name}</strong>
        <br />
        {company}
        <br />
        {site.contact.address}
        <br />
        Email: <a href={`mailto:${site.grievanceOfficer.email}`}>{site.grievanceOfficer.email}</a>
      </p>
      <p>
        We will acknowledge your complaint within 48 hours and endeavour to resolve it within one month of receipt.
      </p>

      <h2>17. Contact</h2>
      <p>
        For any questions about these Terms, write to us at{" "}
        <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> or visit our{" "}
        <Link href="/contact">Contact Us</Link> page.
      </p>
    </LegalPage>
  );
}
