/**
 * Central site configuration.
 * Update the values marked TODO before going live — every page reads from here.
 */
export const site = {
  appName: "Rockscart",
  company: "Brothers Farmlands Private Limited",
  tagline: "Freshness at your doorstep",
  description:
    "Rockscart delivers farm-fresh vegetables and quality pulses straight to your doorstep. Download the Rockscart app on Android and iOS.",

  // TODO: replace with your real domain
  url: "https://www.rockscart.com",

  contact: {
    // TODO: replace with real contact details
    email: "support@rockscart.com",
    phone: "+91 00000 00000",
    hours: "Mon – Sun, 7:00 AM – 9:00 PM",
    address: "Registered office address, City, State – PIN, India",
  },

  // TODO: fill in from your incorporation / GST certificates (leave "" to hide)
  cin: "",
  gstin: "",

  // Courts of this city have jurisdiction under the Terms
  // TODO: set to the city of your registered office
  jurisdictionCity: "New Delhi",

  // Required under the Consumer Protection (E-Commerce) Rules, 2020
  // TODO: name a real grievance officer
  grievanceOfficer: {
    name: "Grievance Officer",
    email: "grievance@rockscart.com",
  },

  // TODO: paste store links once the apps are published (leave "" to show "Coming soon")
  playStoreUrl: "",
  appStoreUrl: "",

  legalLastUpdated: "11 November 2026",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const legalLinks = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund & Cancellation" },
  { href: "/shipping-policy", label: "Delivery Policy" },
] as const;
