import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.company}, the company behind ${site.appName} — delivering farm-fresh vegetables and pulses to your doorstep.`,
};

const values = [
  {
    title: "Freshness first",
    text: "Short supply chains mean produce reaches you faster, tastes better and lasts longer in your kitchen.",
  },
  {
    title: "Fair to farmers",
    text: "We work directly with growers so more of every rupee you spend goes back to the people who grow your food.",
  },
  {
    title: "Honest quality",
    text: "Every order is sorted, weighed and checked. If something isn’t right, we make it right.",
  },
  {
    title: "Built for families",
    text: "Simple ordering, convenient delivery slots and everyday essentials at prices that make sense.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Rooted in farms. Built for your kitchen."
        subtitle={`${site.appName} is a brand of ${site.company}, on a mission to make fresh, honest food easy to get.`}
      />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-leaf-dark uppercase">Our story</p>
          <h2 className="mt-3 text-3xl font-bold text-forest">From the farmland to your doorstep</h2>
          <div className="mt-5 space-y-4 leading-relaxed text-muted">
            <p>
              {site.company} was founded with a simple belief: the vegetables and pulses on your plate should be as
              fresh as the day they were harvested. Too often, produce passes through many hands and spends days in
              transit before it reaches a household — losing freshness, flavour and value on the way.
            </p>
            <p>
              With {site.appName}, we’re shortening that journey. We source directly from farmers, handle produce
              with care and deliver it straight to your door through our easy-to-use Android and iOS apps.
            </p>
            <p>
              We’re starting with the essentials every kitchen needs — fresh vegetables and quality pulses — and will
              keep growing our range based on what our customers ask for.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="rounded-3xl bg-white p-10 shadow-xl ring-1 ring-forest/5">
            <Image
              src="/logo-full.png"
              alt={`${site.appName} – ${site.tagline}`}
              width={1127}
              height={688}
              className="h-auto w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-forest p-8 text-cream">
              <h3 className="text-sm font-semibold tracking-[0.2em] text-sun uppercase">Our mission</h3>
              <p className="mt-4 text-xl leading-relaxed font-semibold">
                To deliver farm-fresh, high-quality produce to every household at fair prices, while creating better
                livelihoods for the farmers who grow it.
              </p>
            </div>
            <div className="rounded-2xl bg-cream p-8 ring-1 ring-forest/10">
              <h3 className="text-sm font-semibold tracking-[0.2em] text-leaf-dark uppercase">Our vision</h3>
              <p className="mt-4 text-xl leading-relaxed font-semibold text-forest">
                To become the most trusted name for fresh food delivery — where every order brings the freshness of the
                farm to your doorstep.
              </p>
            </div>
          </div>

          <h2 className="mt-20 text-center text-3xl font-bold text-forest">What we stand for</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-forest/10 p-6">
                <div className="h-1.5 w-10 rounded-full bg-gradient-to-r from-sun to-sun-light" />
                <h3 className="mt-4 text-lg font-bold text-forest">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="rounded-2xl bg-cream-dark p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-forest">Company information</h2>
          <dl className="mt-6 grid gap-6 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-ink">Legal name</dt>
              <dd className="mt-1 text-muted">{site.company}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Brand</dt>
              <dd className="mt-1 text-muted">{site.appName}</dd>
            </div>
            {site.cin && (
              <div>
                <dt className="font-semibold text-ink">CIN</dt>
                <dd className="mt-1 text-muted">{site.cin}</dd>
              </div>
            )}
            {site.gstin && (
              <div>
                <dt className="font-semibold text-ink">GSTIN</dt>
                <dd className="mt-1 text-muted">{site.gstin}</dd>
              </div>
            )}
            <div>
              <dt className="font-semibold text-ink">Registered office</dt>
              <dd className="mt-1 text-muted">{site.contact.address}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Email</dt>
              <dd className="mt-1 text-muted">{site.contact.email}</dd>
            </div>
          </dl>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-light"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
