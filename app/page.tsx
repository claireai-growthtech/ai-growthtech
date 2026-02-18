import Link from "next/link";
import Button from "./components/Button";

export default function HomePage() {
  return (
    <main className="bg-[#fdfaf4] text-[#0f172a]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fdfaf4] to-[#f6f1e6]">
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">
          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#e8dfcc] bg-white/70 px-4 py-2 text-sm text-[#334155] shadow-sm">
              <span className="font-medium">AEO</span>
              <span className="text-[#caa85c]">•</span>
              <span>Visibility Score</span>
              <span className="text-[#caa85c]">•</span>
              <span>AI recommendation</span>
            </div>

            <h1 className="mt-8 text-[44px] md:text-[64px] font-semibold tracking-[-0.02em] leading-[1.02]">
              Get Found in AI Answers.
            </h1>

            <p className="mt-8 text-lg md:text-xl leading-relaxed text-[#334155]">
              AI Growth Tech improves your{" "}
              <span className="font-semibold text-[#0f172a]">
                AEO Visibility Score
              </span>{" "}
              — so your brand appears more often in ChatGPT, Gemini and Perplexity.
            </p>

            <p className="mt-4 text-base md:text-lg text-[#475569]">
              Built for growth-focused teams who care about pipeline, not vanity traffic.
            </p>

            <p className="mt-4 text-sm text-[#475569]">
              New to AEO?{" "}
              <Link href="/what-is-aeo" className="text-[#8a6a2f] underline">
                Learn what Answer Engine Optimisation means.
              </Link>
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Button href="/aeo-visibility-score">
                Check your AEO Visibility Score
              </Button>

              <Button href="/services" variant="secondary">
                How AEO works
              </Button>
            </div>

          </div>
        </div>

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(202,168,92,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(19,39,63,0.08),transparent_45%)]" />
      </section>


      {/* WHY IT MATTERS */}
      <section className="border-t border-[#efe7d6] bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-[#8a6a2f]">
                Why it matters
              </div>

              <h2 className="mt-4 text-3xl md:text-[38px] font-semibold tracking-tight leading-tight">
                AI answers recommend a shortlist — you want to be on it.
              </h2>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-[#334155]">
                Buyers increasingly start with AI systems before visiting websites.
                These systems tend to recommend a smaller set of trusted sources.
                If your site isn’t structured for AI understanding, you won’t be selected —
                even if you are the best option.
              </p>

              <div className="mt-8">
                <Button href="/contact">
                  Get a Quick Assessment
                </Button>
              </div>
            </div>

            <div className="lg:justify-self-end w-full">
              <div className="bg-white/80 backdrop-blur-sm border border-[#e8dfcc] rounded-2xl p-8 shadow-[0_10px_25px_rgba(15,23,42,0.06)] max-w-lg">
                <h3 className="text-xl font-semibold mb-6">
                  What your score reflects
                </h3>

                <ul className="space-y-4 text-base leading-relaxed text-[#334155]">
                  <li>• Answer-first content structure</li>
                  <li>• Clear schema and entity signals</li>
                  <li>• Strong topical authority coverage</li>
                  <li>• Internal linking clarity</li>
                  <li>• Trust and credibility signals</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* VISIBILITY SCORE SECTION */}
      <section className="border-t border-[#efe7d6]">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.2em] uppercase text-[#8a6a2f]">
              Visibility Score
            </div>

            <h2 className="mt-4 text-3xl md:text-[38px] font-semibold tracking-tight leading-tight">
              A structured 1–10 score that predicts AI visibility.
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-[#334155]">
              The AEO Visibility Score evaluates how "cite-ready" your website is across
              structure, clarity, schema implementation, topical authority and
              trust signals.
            </p>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-[#334155]">
              To consistently be recommended inside AI-generated answers,
              your score typically needs to sit in the{" "}
              <span className="font-semibold text-[#0f172a]">
                7–10 range.
              </span>
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/aeo-visibility-score">
                Request a Visibility Score
              </Button>

              <Button href="/services" variant="secondary">
                Learn What’s Included
              </Button>
            </div>
          </div>

        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="border-t border-[#efe7d6] bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="max-w-4xl">
            <div className="text-xs tracking-[0.2em] uppercase text-[#8a6a2f]">
              How it works
            </div>

            <h2 className="mt-4 text-3xl md:text-[38px] font-semibold tracking-tight leading-tight">
              90-day implementation — then ongoing optimisation.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="rounded-2xl border border-[#e8dfcc] bg-white/80 backdrop-blur-sm p-8 shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
              <div className="text-sm font-semibold">1 — Audit</div>
              <p className="mt-4 text-base text-[#334155] leading-relaxed">
                Establish your baseline Visibility Score and identify structural
                and authority gaps.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e8dfcc] bg-white/80 backdrop-blur-sm p-8 shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
              <div className="text-sm font-semibold">2 — Optimise</div>
              <p className="mt-4 text-base text-[#334155] leading-relaxed">
                Improve structure, schema, content clarity and internal linking
                to make your brand answer-ready.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e8dfcc] bg-white/80 backdrop-blur-sm p-8 shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
              <div className="text-sm font-semibold">3 — Maintain</div>
              <p className="mt-4 text-base text-[#334155] leading-relaxed">
                Ongoing content and authority expansion to sustain a
                7–10 Visibility Score as AI models evolve.
              </p>
            </div>

          </div>

          <div className="mt-12">
            <Button href="/services">
              Explore Services
            </Button>
          </div>

        </div>
      </section>

    </main>
  );
}
