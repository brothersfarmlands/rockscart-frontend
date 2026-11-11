import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "./ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with the ${site.appName} team for orders, support, partnerships or feedback.`,
};

const cards = [
  {
    icon: "✉️",
    title: "Email us",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    icon: "📞",
    title: "Call us",
    value: site.contact.phone,
    href: `tel:${site.contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: "🕘",
    title: "Support hours",
    value: site.contact.hours,
  },
  {
    icon: "📍",
    title: "Registered office",
    value: site.contact.address,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We’d love to hear from you"
        subtitle="Questions about an order, feedback, or interested in partnering with us as a farmer or supplier? Reach out."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {cards.map((c) => (
            <div key={c.title} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-forest/5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cream-dark text-xl">{c.icon}</span>
              <div>
                <p className="text-sm font-semibold text-forest">{c.title}</p>
                {c.href ? (
                  <a href={c.href} className="mt-0.5 block break-all text-muted hover:text-leaf-dark">
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-0.5 text-muted">{c.value}</p>
                )}
              </div>
            </div>
          ))}
          <div className="rounded-2xl bg-forest p-5 text-sm text-cream/80">
            <p className="font-semibold text-sun">Grievance Officer</p>
            <p className="mt-1">
              {site.grievanceOfficer.name} —{" "}
              <a href={`mailto:${site.grievanceOfficer.email}`} className="underline underline-offset-2">
                {site.grievanceOfficer.email}
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest/5 sm:p-8 lg:col-span-3">
          <h2 className="text-2xl font-bold text-forest">Send us a message</h2>
          <p className="mt-1 text-sm text-muted">We usually respond within one business day.</p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
