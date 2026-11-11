export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-leaf/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-sun/15 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-leaf uppercase">{eyebrow}</p>
        )}
        <h1 className="text-3xl font-bold text-cream sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-cream/75">{subtitle}</p>}
      </div>
    </section>
  );
}
