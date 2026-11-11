import Image from "next/image";
import Link from "next/link";
import { AppButtons } from "@/components/AppButtons";
import { site } from "@/lib/site";

const features = [
  {
    icon: "🌱",
    title: "Farm fresh, every day",
    text: "Vegetables sourced directly from farms and delivered within hours of harvest — not days in a cold store.",
  },
  {
    icon: "🫘",
    title: "Quality pulses",
    text: "Clean, carefully graded dals and pulses, packed hygienically so you get exactly what you pay for.",
  },
  {
    icon: "🛵",
    title: "Doorstep delivery",
    text: "Pick a delivery slot that suits you and we’ll bring your order right to your door.",
  },
  {
    icon: "₹",
    title: "Fair, honest prices",
    text: "Working directly with farmers cuts out middlemen — better prices for you, better earnings for them.",
  },
];

const categories = [
  { emoji: "🥬", name: "Leafy Greens", items: "Spinach, methi, coriander, mint" },
  { emoji: "🥔", name: "Daily Veggies", items: "Potato, onion, tomato, ginger" },
  { emoji: "🥕", name: "Seasonal Picks", items: "Carrot, peas, cauliflower, beans" },
  { emoji: "🫘", name: "Pulses & Dals", items: "Toor, moong, chana, masoor, rajma" },
];

const steps = [
  { n: "1", title: "Download the app", text: "Get Rockscart free on Android or iOS and sign up with your phone number." },
  { n: "2", title: "Fill your cart", text: "Browse fresh vegetables and pulses, add what you need and choose a delivery slot." },
  { n: "3", title: "Get it delivered", text: "Pay online or on delivery and receive fresh produce right at your doorstep." },
];

function PhoneMockup() {
  const rows = [
    { e: "🍅", n: "Tomato", q: "1 kg", p: "₹40" },
    { e: "🥔", n: "Potato", q: "1 kg", p: "₹30" },
    { e: "🥬", n: "Spinach", q: "250 g", p: "₹20" },
    { e: "🫘", n: "Toor Dal", q: "1 kg", p: "₹150" },
  ];
  return (
    <div className="relative mx-auto w-[260px] sm:w-[280px]">
      <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-[2.75rem] bg-sun/40 blur-2xl" />
      <div className="rounded-[2.75rem] bg-ink p-3 shadow-2xl">
        <div className="overflow-hidden rounded-[2.2rem] bg-cream">
          <div className="flex items-center justify-between bg-forest px-5 pt-6 pb-4">
            <Image src="/logo-mark.png" alt="" width={392} height={360} className="h-8 w-auto rounded bg-cream p-0.5" />
            <span className="text-xs font-semibold text-cream/80">Deliver to Home ▾</span>
          </div>
          <div className="px-4 py-4">
            <div className="mb-3 rounded-xl bg-white px-3 py-2 text-xs text-muted shadow-sm">🔍 Search vegetables, dals…</div>
            <div className="mb-3 rounded-xl bg-gradient-to-r from-leaf to-leaf-dark p-3 text-cream">
              <p className="text-[10px] font-semibold tracking-wider uppercase opacity-80">Today’s harvest</p>
              <p className="text-sm font-bold">Fresh from the farm 🌿</p>
            </div>
            <ul className="space-y-2">
              {rows.map((r) => (
                <li key={r.n} className="flex items-center gap-3 rounded-xl bg-white p-2 shadow-sm">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-cream-dark text-lg">{r.e}</span>
                  <span className="flex-1">
                    <span className="block text-xs font-semibold text-ink">{r.n}</span>
                    <span className="block text-[10px] text-muted">{r.q}</span>
                  </span>
                  <span className="text-xs font-bold text-forest">{r.p}</span>
                  <span className="rounded-md bg-sun px-2 py-1 text-[10px] font-bold text-ink">ADD</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-leaf/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-40 h-[380px] w-[380px] rounded-full bg-sun/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full bg-leaf/15 px-4 py-1.5 text-xs font-semibold tracking-wider text-leaf-dark uppercase">
              {site.tagline}
            </span>
            <h1 className="mt-5 text-4xl leading-tight font-bold text-forest sm:text-5xl lg:text-6xl">
              Fresh vegetables &amp; pulses, <span className="text-brand-gradient">delivered.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted">
              Rockscart brings farm-fresh vegetables and quality pulses from trusted growers straight to your
              doorstep. Order in a few taps on our app.
            </p>
            <div className="mt-8">
              <AppButtons />
            </div>
            <p className="mt-4 text-sm text-muted">Available on Android &amp; iOS</p>
          </div>
          <PhoneMockup />
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-[0.2em] text-leaf-dark uppercase">Why Rockscart</p>
            <h2 className="mt-3 text-3xl font-bold text-forest sm:text-4xl">Freshness you can taste</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-forest/10 bg-cream p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-forest text-xl font-bold text-sun">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-forest">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-leaf-dark uppercase">What we deliver</p>
              <h2 className="mt-3 text-3xl font-bold text-forest sm:text-4xl">Starting with the essentials</h2>
            </div>
            <p className="max-w-md text-muted">
              We’re launching with vegetables and pulses — the heart of every Indian kitchen. More categories are on
              the way.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div key={c.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest/5">
                <div className="text-5xl">{c.emoji}</div>
                <h3 className="mt-4 text-lg font-bold text-forest">{c.name}</h3>
                <p className="mt-1 text-sm text-muted">{c.items}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm font-medium text-leaf-dark">
            Coming soon: fruits, grains, flour &amp; more 🍎🌾
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-[0.2em] text-leaf uppercase">How it works</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Farm to doorstep in 3 steps</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl bg-forest-light/60 p-7 ring-1 ring-cream/10">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-sun to-sun-light text-xl font-bold text-forest">
                  {s.n}
                </div>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-cream/70">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="scroll-mt-16 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-leaf to-leaf-dark px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-sun/30 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Download Rockscart today</h2>
              <p className="mx-auto mt-4 max-w-xl text-white/85">
                Fresh vegetables and pulses are just a tap away. Get the app on your phone and place your first order
                in minutes.
              </p>
              <div className="mt-8 flex justify-center">
                <AppButtons />
              </div>
              <p className="mt-6 text-sm text-white/80">
                Questions?{" "}
                <Link href="/contact" className="font-semibold underline underline-offset-2">
                  Get in touch
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
