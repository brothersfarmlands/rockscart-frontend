import { site } from "@/lib/site";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <path fill="#34A853" d="M3.6 1.8 13.8 12 3.6 22.2c-.4-.2-.6-.7-.6-1.2V3c0-.5.2-1 .6-1.2Z" />
      <path fill="#FBBC04" d="m17.1 8.7-3.3 3.3 3.3 3.3 3.7-2.1c.9-.5.9-1.9 0-2.4l-3.7-2.1Z" />
      <path fill="#4285F4" d="M3.6 22.2 13.8 12l3.3 3.3L5.2 22c-.6.4-1.2.4-1.6.2Z" />
      <path fill="#EA4335" d="M3.6 1.8c.4-.2 1-.2 1.6.2l11.9 6.7-3.3 3.3L3.6 1.8Z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
      <path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.15.77 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.38-3.68ZM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.66 1.37-.58.67-1.1 1.76-.96 2.8 1.01.08 2.05-.52 2.68-1.28Z" />
    </svg>
  );
}

function StoreButton({
  href,
  icon,
  small,
  big,
  dark,
}: {
  href: string;
  icon: React.ReactNode;
  small: string;
  big: string;
  dark: boolean;
}) {
  const base = `flex min-w-[180px] items-center gap-3 rounded-xl px-5 py-2.5 transition ${
    dark
      ? "bg-ink text-white hover:bg-black"
      : "bg-white text-ink ring-1 ring-forest/15 hover:ring-forest/40"
  }`;
  const content = (
    <>
      {icon}
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] opacity-80">{href ? small : "Coming soon on"}</span>
        <span className="text-lg font-semibold">{big}</span>
      </span>
    </>
  );

  if (!href) {
    return (
      <div className={`${base} cursor-default opacity-90`} aria-label={`${big} – coming soon`}>
        {content}
      </div>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
      {content}
    </a>
  );
}

export function AppButtons({ dark = true }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <StoreButton
        href={site.playStoreUrl}
        icon={<PlayIcon />}
        small="GET IT ON"
        big="Google Play"
        dark={dark}
      />
      <StoreButton
        href={site.appStoreUrl}
        icon={<AppleIcon />}
        small="Download on the"
        big="App Store"
        dark={dark}
      />
    </div>
  );
}
