import type { Metadata } from "next";
import Button from "../components/Button";

export const metadata: Metadata = {
  title: "AEO Services",
  description:
    "AEO services to improve your AEO Visibility Score and increase how often your business is recommended in ChatGPT, Gemini and Perplexity.",
  openGraph: {
    title: "AEO Services | AI Growth Tech",
    description:
      "Structured AEO optimisation, schema implementation and visibility strategy to move your AI recommendation score into the 7–10 range.",
    url: "https://www.ai-growthtech.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-[#fdfaf4] text-[#0f172a]">
      {/* HERO */}
      <section className="px-6 pt-20 pb-16 text-center max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-[#8a6a2f] mb-4">
          Services
        </p>

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          AEO services that increase how often you're recommended in AI answers.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[#334155] leading-relaxed">
          Most websites are built for clicks. AI answers work differently.
          We improve your AEO Visibility Score so your brand appears more often
          inside ChatGPT, Gemini and Perplexity.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact">
            Book a Strategic Call
          </Button>

          <Button href="/aeo-visibility-score" variant="secondary">
            Check Your Visibility Score
          </Button>
        </div>
      </section>

      {/* 3 STEP PROCESS */}
      <section className="border-t border-[#efe7d6] bg-white/60 backdrop-blur-sm px-6 py-24">
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-wider text-[#8a6a2f] mb-4">
              Process
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Score. Fix. Maintain.
            </h2>

            <p className="mt-6 text-lg text-[#334155] leading-relaxed">
              A practical, structured approach to move your Visibility Score
              into the 7–10 range and keep it there.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            <div className="bg-white/80 border border-[#e8dfcc] rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                1. Audit & Benchmark
              </h3>
              <p className="text-[#334155] leading-relaxed">
                We assess your current AEO Visibility Score, competitor positioning
                and structural gaps across commercial and informational queries.
              </p>
            </div>

            <div className="bg-white/80 border border-[#e8dfcc] rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                2. Structural Optimisation
              </h3>
              <p className="text-[#334155] leading-relaxed">
                Implement answer-first structuring, schema clarity, internal authority
                building and entity alignment.
              </p>
            </div>

            <div className="bg-white/80 border border-[#e8dfcc] rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                3. Ongoing Optimisation
              </h3>
              <p className="text-[#334155] leading-relaxed">
                Continuous refinement and expansion to maintain recommendation
                positioning as AI models evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-[#0b1b2b] text-white px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Visibility inside AI answers isn’t accidental.
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            It’s structured, strategic, and measurable.
          </p>

          <div className="mt-8 flex justify-center">
            <Button href="/contact">
              Start Your 90-Day Onboarding
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
