import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ai-growthtech.com"),
  title: {
    default: "AI Growth Tech",
    template: "%s | AI Growth Tech",
  },
  description:
    "AEO visibility scoring and AI search optimisation for business owners and SaaS founders.",
  openGraph: {
    title: "AI Growth Tech",
    description:
      "AEO visibility scoring and AI search optimisation for business owners and SaaS founders.",
    url: "https://www.ai-growthtech.com",
    siteName: "AI Growth Tech",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "AI Growth Tech logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI Growth Tech",
    url: "https://www.ai-growthtech.com",
    logo: "https://www.ai-growthtech.com/logo.png",
    description:
      "AEO visibility scoring and AI search optimisation for business owners and SaaS founders.",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>

      <body className="bg-[#fdfaf4] text-[#0f172a] antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
