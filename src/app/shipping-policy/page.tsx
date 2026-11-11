import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delivery Policy",
  description: `Delivery areas, timelines and charges for ${site.appName} orders.`,
};

export default function ShippingPolicyPage() {
  return (
    <LegalPage title="Delivery Policy">
      <p>
        This Delivery Policy explains how {site.appName}, operated by {site.company}, delivers your orders. It forms
        part of our <Link href="/terms">Terms &amp; Conditions</Link>.
      </p>

      <h2>1. Serviceable areas</h2>
      <p>
        We currently deliver in selected areas and are expanding steadily. Enter your pincode or allow location access
        in the app to check whether we deliver to your address.
      </p>

      <h2>2. Delivery slots</h2>
      <ul>
        <li>You can choose an available delivery slot at checkout.</li>
        <li>
          We aim to deliver within your chosen slot. Delays may occasionally occur due to weather, traffic, festivals or
          other circumstances beyond our control; we will keep you informed through the app.
        </li>
      </ul>

      <h2>3. Delivery charges</h2>
      <p>
        Delivery fees and minimum order values, if any, are shown in the app before you place your order. We may offer
        free delivery above a certain order value from time to time.
      </p>

      <h2>4. Receiving your order</h2>
      <ul>
        <li>Please make sure someone is available at the address to receive the order and share the delivery OTP, if asked.</li>
        <li>Check your items at the time of delivery and return any damaged or incorrect items to the delivery partner.</li>
        <li>
          If we cannot reach you after reasonable attempts, the order may be cancelled. For prepaid orders, a refund
          will be issued as per our <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>, less any
          delivery charge where applicable.
        </li>
      </ul>

      <h2>5. Packaging</h2>
      <p>
        Fresh produce is packed to stay fresh in transit. We try to minimise single-use plastic wherever we can.
      </p>

      <h2>6. Contact</h2>
      <p>
        For delivery-related questions, email <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> or call{" "}
        {site.contact.phone}.
      </p>
    </LegalPage>
  );
}
