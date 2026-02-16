import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is AEO? (Answer Engine Optimisation Explained)",
  description:
    "What is AEO? Learn how Answer Engine Optimisation improves your visibility in ChatGPT, Gemini and AI-powered search systems.",
};

export default function WhatIsAEO() {
  return (
    <main className="bg-[#fdfaf4] text-[#0f172a]">

      {/* HERO */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-[#8a6a2f] mb-4">
          AI Search Strategy
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
          What Is AEO?
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[#334155] leading-relaxed">
          AEO (Answer Engine Optimisation) is the process of structuring your
          website so that AI systems like ChatGPT, Gemini and Perplexity can
          understand, cite and recommend your business inside generated answers.
        </p>
      </section>


      {/* CONTENT */}
      <section className="px-6 pb-20 max-w-4xl mx-auto space-y-8 text-[#334155] leading-relaxed">

        <h2 className="text-2xl font-semibold text-[#0f172a]">
          How AEO differs from traditional SEO
        </h2>

        <p>
          Traditional SEO focuses on ranking web pages in search engine results.
          AEO focuses on being selected inside AI-generated answers.
        </p>

        <p>
          AI systems do not return ten blue links. They generate a response and
          recommend a smaller set of trusted sources. That means your site must
          be structurally clear, citation-ready and contextually authoritative.
        </p>

        <h2 className="text-2xl font-semibold text-[#0f172a]">
          Why AEO matters now
        </h2>

        <p>
          Buying journeys are shifting. Many users now ask AI systems before
          visiting websites. If your brand does not appear during that stage,
          you are invisible during decision formation.
        </p>

        <h2 className="text-2xl font-semibold text-[#0f172a]">
          What makes a site AEO-optimised
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>Answer-first structured content</li>
          <li>Clear entity signals and schema markup</li>
          <li>Strong internal linking</li>
          <li>Topical authority across commercial and informational queries</li>
          <li>Consistent trust signals</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#0f172a]">
          How to measure AEO performance
        </h2>

        <p>
          At AI Growth Tech, we use a structured 1–10 AEO Visibility Score to
          evaluate how likely a site is to be cited and recommended by AI systems.
        </p>

        <p>
          Scores in the 7–10 range indicate strong optimisation for AI answer
          environments.
        </p>


        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-[#e8dfcc]">
          <Link
            href="/aeo-visibility-score"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#caa85c] via-[#e6c97a] to-[#b88a3b] px-8 py-3 text-sm md:text-base font-medium text-[#0b1b2b] shadow-sm hover:opacity-90 transition"
          >
            Check Your AEO Visibility Score
          </Link>
        </div>

      </section>
    </main>
  );
}
