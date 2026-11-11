import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.appName} – ${site.tagline}`,
    template: `%s | ${site.appName}`,
  },
  description: site.description,
  applicationName: site.appName,
  keywords: [
    "Rockscart",
    "fresh vegetables delivery",
    "pulses online",
    "dal delivery",
    "grocery app",
    "Brothers Farmlands",
  ],
  openGraph: {
    type: "website",
    siteName: site.appName,
    title: `${site.appName} – ${site.tagline}`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#15432f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
