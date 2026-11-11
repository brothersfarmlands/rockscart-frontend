import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <Image src="/logo-mark.png" alt="" width={392} height={360} className="h-24 w-auto" />
      <h1 className="mt-6 text-3xl font-bold text-forest">Page not found</h1>
      <p className="mt-3 text-muted">Looks like this page has gone off the cart. Let’s get you back home.</p>
      <Link href="/" className="mt-8 rounded-full bg-forest px-6 py-3 font-semibold text-cream hover:bg-forest-light">
        Back to home
      </Link>
    </section>
  );
}
