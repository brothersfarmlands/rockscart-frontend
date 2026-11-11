import Image from "next/image";
import Link from "next/link";
import { AppButtons } from "./AppButtons";
import { legalLinks, nav, site } from "@/lib/site";

// Cached at build/revalidation time (required with Cache Components enabled)
async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="bg-forest text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="inline-flex rounded-2xl bg-cream p-4">
            <Image
              src="/logo-full.png"
              alt={`${site.appName} – ${site.tagline}`}
              width={1127}
              height={688}
              className="h-20 w-auto"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Fresh vegetables and quality pulses, delivered to your doorstep.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wider text-sun uppercase">Company</h3>
          <ul className="space-y-2.5 text-sm">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wider text-sun uppercase">Legal</h3>
          <ul className="space-y-2.5 text-sm">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wider text-sun uppercase">Get the app</h3>
          <AppButtons dark={false} />
          <div className="mt-5 space-y-1 text-sm">
            <a href={`mailto:${site.contact.email}`} className="block hover:text-white">
              {site.contact.email}
            </a>
            <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="block hover:text-white">
              {site.contact.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © <CopyrightYear /> {site.company}. All rights reserved.
          </p>
          <p>
            {site.appName} is a brand of {site.company}
            {site.cin && <> · CIN: {site.cin}</>}
            {site.gstin && <> · GSTIN: {site.gstin}</>}
          </p>
        </div>
      </div>
    </footer>
  );
}
