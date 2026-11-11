import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: `Cancellation, return and refund policy for orders placed on ${site.appName}.`,
};

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund & Cancellation Policy">
      <p>
        At {site.appName}, we want you to be completely happy with every order. Because we deal in fresh, perishable
        produce, our policy is designed to resolve issues quickly at the time of delivery. This policy forms part of our{" "}
        <Link href="/terms">Terms &amp; Conditions</Link>.
      </p>

      <h2>1. Cancelling an order</h2>
      <ul>
        <li>
          You can cancel an order free of charge from the app <strong>until it is packed for dispatch</strong>.
        </li>
        <li>Once an order is out for delivery, it can no longer be cancelled.</li>
        <li>
          We may cancel an order due to non-availability of items, unserviceable address, payment failure or suspected
          misuse. In such cases, any amount paid is refunded in full.
        </li>
      </ul>

      <h2>2. Returns at the doorstep</h2>
      <p>
        Please check your items when you receive them. You can return any item to the delivery partner on the spot if it
        is:
      </p>
      <ul>
        <li>damaged, spoiled, rotten or not fresh;</li>
        <li>different from what you ordered;</li>
        <li>past its expiry date (for packaged pulses).</li>
      </ul>

      <h2>3. Reporting an issue after delivery</h2>
      <p>
        If you notice a problem after the delivery partner has left, report it through the app’s “Help” section or by
        writing to <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> within:
      </p>
      <ul>
        <li>
          <strong>24 hours of delivery</strong> for fresh vegetables;
        </li>
        <li>
          <strong>48 hours of delivery</strong> for pulses and packaged items (unopened, in original packaging).
        </li>
      </ul>
      <p>
        Please share your order number and a photo of the item. Missing items and short quantities can also be reported
        in the same window.
      </p>

      <h2>4. Non-returnable cases</h2>
      <ul>
        <li>minor natural variation in size, shape or colour of fresh produce;</li>
        <li>opened or partially used packaged products, unless defective;</li>
        <li>issues reported after the timelines above.</li>
      </ul>

      <h2>5. Refunds</h2>
      <ul>
        <li>Approved refunds are processed within <strong>2 business days</strong> of approval.</li>
        <li>
          Prepaid orders (UPI, card, net banking, wallet) are refunded to the original payment method. Depending on your
          bank, the amount may take <strong>5–7 business days</strong> to reflect.
        </li>
        <li>
          For Cash on Delivery orders, refunds are made to your {site.appName} wallet or to a bank account / UPI ID you
          provide.
        </li>
        <li>Where a replacement is available and you prefer it, we may deliver a replacement instead of a refund.</li>
      </ul>

      <h2>6. Need help?</h2>
      <p>
        Contact our support team at <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> or{" "}
        {site.contact.phone} ({site.contact.hours}), or visit our <Link href="/contact">Contact Us</Link> page.
      </p>
    </LegalPage>
  );
}
