import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.appName} home`}
      className={`flex items-center gap-2.5 ${className}`}
    >
      <Image
        src="/logo-mark.png"
        alt=""
        width={392}
        height={360}
        priority
        className="h-10 w-auto"
      />
      <Image
        src="/logo-wordmark.png"
        alt={site.appName}
        width={1127}
        height={177}
        priority
        className="h-6 w-auto"
      />
    </Link>
  );
}
