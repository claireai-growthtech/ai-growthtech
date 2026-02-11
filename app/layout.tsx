import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Growth Tech | Get Found in AI Answers",
  description:
    "AI Growth Tech helps B2B brands improve their AEO Visibility Score so they appear more often in ChatGPT, Google AI and Perplexity.",
  openGraph: {
    title: "AI Growth Tech | Get Found in AI Answers",
    description:
      "Improve your AEO Visibility Score and increase how often your brand appears in ChatGPT, Google AI and Perplexity.",
    url: "https://ai-growthtech-site.vercel.app",
    siteName: "AI Growth Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Growth Tech | Get Found in AI Answers",
    description:
      "Answer Engine Optimisation (AEO) for businesses that want to be visible in AI-generated answers.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

