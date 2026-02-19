import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AEO Visibility Score",
  description:
    "Find out your AEO Visibility Score and see how ready your website is for AI-generated answers across ChatGPT, Gemini and Perplexity.",
};

const buttonPrimary =
  "inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#caa85c] via-[#e6c97a] to-[#b88a3b] px-8 py-3 text-sm md:text-base font-medium text-[#0b1b2b] shadow-sm hover:opacity-90 transition";

const buttonSecondary =
  "inline-flex items-center justify-center rounded-lg border border-[#13273f] bg-white px-8 py-3 text-sm md:text-base font-medium text-[#13273f] shadow-sm hover:bg-[#f8f8f8] transition";

export default function AeoVisibilityScorePage() {
  return (
    <main className="bg-[#fdfaf4] text-[#0f172a]">

      {/* HERO */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-[#caa85c] mb-4 font-semibold">
          Visibility Score
        </p>

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          AEO Visibility Score
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[#334155] max-w-2xl mx-auto leading-relaxed">
          A simple 1–10 score that shows how “cite-ready” your website is for
          AI-generated answers — across structure, clarity, schema,
          authority, and segmentation.
        </p>

        <p className="mt-4 text-lg md:text-xl text-[#334155] max-w-2xl mx-auto leading-relaxed">
          To consistently be recommended inside AI-generated answers,
          your score typically needs to sit in the <strong>7–10 range</strong>.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className={buttonPrimary}>
            Request Your Visibility Score
          </Link>

          <Link href="/services" className={buttonSecondary}>
            How AEO Works
          </Link>
        </div>
      </section>

      {/* WHAT THE SCORE MEASURES */}
      <section className="bg-[#f5f1e8] px-6 py-24 border-y border-[#efe7d6]">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            What does the score measure?
          </h2>

          <p className="mt-6 text-lg md:text-xl text-[#334155] leading-relaxed max-w-3xl mx-auto">
            Your Visibility Score evaluates how effectively your website is structured to be understood,
            cited and recommended by AI systems.
          </p>

          <div className="mt-16 grid md:grid-cols-4 gap-8 text-left">

            <div className="bg-white border border-[#e8dfcc] p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Content</h3>
              <p className="text-[#334155] leading-relaxed">
                Depth, clarity and answer-first structuring across commercial
                and informational queries.
              </p>
            </div>

            <div className="bg-white border border-[#e8dfcc] p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Authority</h3>
              <p className="text-[#334155] leading-relaxed">
                Signals that validate expertise and improve trust positioning
                within your niche.
              </p>
            </div>

            <div className="bg-white border border-[#e8dfcc] p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Technical</h3>
              <p className="text-[#334155] leading-relaxed">
                Schema structure, internal linking and entity clarity
                that AI systems can interpret confidently.
              </p>
            </div>

            <div className="bg-white border border-[#e8dfcc] p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">UX Segments</h3>
              <p className="text-[#334155] leading-relaxed">
                Page structure and segmentation that improves extractability
                inside AI answers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 90 DAY PROCESS */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-sm uppercase tracking-wider text-[#caa85c] mb-4">
            Strategic Implementation
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            90-day onboarding — then ongoing optimisation.
          </h2>

          <p className="mt-6 text-lg md:text-xl text-[#334155] leading-relaxed">
            We implement structured improvements during a focused 90-day
            onboarding phase built across the four pillars.
          </p>

          <p className="mt-4 text-lg md:text-xl text-[#334155] leading-relaxed">
            After onboarding, we continue refining and expanding priority
            queries to maintain and increase your AEO Visibility Score
            as AI systems evolve.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className={buttonPrimary}>
              Start 90-Day Onboarding
            </Link>

            <Link href="/services" className={buttonSecondary}>
              View Full AEO Services
            </Link>
          </div>

        </div>
      </section>

      {/* GUARANTEE */}
      <section className="bg-[#0b1b2b] text-white px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            90-Day Results Guarantee
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            Everything we implement is tracked against the AI queries that matter to your pipeline.
          </p>

          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            If we don’t improve your AEO Visibility Score and position you
            as a recommended brand in your market within 90 days,
            we’ll continue working at no additional cost until we do.
          </p>

          <div className="mt-10">
            <Link href="/contact" className={buttonPrimary}>
              Request Your Score & Strategy Call
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
