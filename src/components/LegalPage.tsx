import { PageHero } from "./PageHero";
import { site } from "@/lib/site";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} subtitle={`Last updated: ${site.legalLastUpdated}`} />
      <article className="prose-legal mx-auto max-w-3xl px-4 py-14 sm:px-6">{children}</article>
    </>
  );
}
