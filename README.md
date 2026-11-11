# Rockscart Website

Marketing website for **Rockscart** by Brothers Farmlands Private Limited — information about the company and links to download the Android & iOS apps.

Built with Next.js 16 (App Router), React 19, Tailwind CSS 4.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start
```

## Before going live

Edit **`src/lib/site.ts`** — every page reads from it:

- `url` – your real domain (used for SEO, sitemap, OG image)
- `contact` – email, phone, support hours, registered office address
- `cin`, `gstin` – shown in the footer / About page when filled
- `grievanceOfficer` – required by the Consumer Protection (E-Commerce) Rules, 2020
- `jurisdictionCity` – courts named in the Terms
- `playStoreUrl`, `appStoreUrl` – store buttons show "Coming soon" until set

Have the legal pages (`/terms`, `/privacy`, `/refund-policy`, `/shipping-policy`) reviewed by a lawyer before launch.

## Pages

| Route | Page |
|---|---|
| `/` | Home + app download section (`/#download`) |
| `/about` | About Us |
| `/contact` | Contact Us (form opens the visitor's email app) |
| `/terms` | Terms & Conditions |
| `/privacy` | Privacy Policy |
| `/refund-policy` | Refund & Cancellation Policy |
| `/shipping-policy` | Delivery Policy |

## Brand assets

- `public/logo-mark.png`, `public/logo-wordmark.png`, `public/logo-full.png` – transparent logo cut-outs
- `src/app/favicon.ico`, `icon.png`, `apple-icon.png` – favicons
- `src/app/opengraph-image.png` – social share preview
