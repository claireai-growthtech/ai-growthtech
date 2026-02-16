import type { Metadata } from "next";
import Button from "../components/Button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a strategic call with AI Growth Tech. Get your AEO Visibility Score and a clear plan to improve AI search visibility across ChatGPT, Gemini and Perplexity.",
  openGraph: {
    title: "Contact | AI Growth Tech",
    description:
      "Book a strategic call to benchmark your AEO Visibility Score and improve AI recommendation visibility.",
    url: "https://www.ai-growthtech.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[#fdfaf4] text-[#0f172a]">
      {/* HERO */}
      <section className="px-6 pt-20 pb-16 text-center max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-[#8a6a2f] mb-4">
          Get in touch
        </p>

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          Let’s increase your AI visibility.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[#334155] leading-relaxed">
          If your AEO Visibility Score is below 7, you’re likely missing
          structural clarity, schema alignment, and entity authority signals.
        </p>

        <p className="mt-4 text-lg md:text-xl text-[#334155] leading-relaxed">
          Book a strategic call and we’ll show you exactly what’s holding you
          back — and how to fix it.
        </p>
      </section>

      {/* CONTACT CARD */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border border-[#e8dfcc] bg-white/80 backdrop-blur-sm shadow-[0_15px_40px_rgba(15,23,42,0.08)] p-10 md:p-14">
            {/* OPTION 1 */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                Book a Strategic Call
              </h2>

              <p className="mt-6 text-lg text-[#334155] leading-relaxed">
                30 minutes. Focused. No fluff.
              </p>

              <p className="mt-3 text-lg text-[#334155] leading-relaxed">
                We’ll review your visibility positioning and outline the
                highest-impact moves first.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="mailto:claire@ai-growthtech.com">
                  Email Us Directly
                </Button>

                <Button href="/aeo-visibility-score" variant="secondary">
                  View Visibility Score Details
                </Button>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="mt-14 border-t border-[#efe7d6] pt-14 text-center">
              <h3 className="text-2xl font-semibold">
                Prefer to outline your goals first?
              </h3>

              <p className="mt-4 text-lg text-[#334155] leading-relaxed">
                Send a short message describing your business and current challenges.
              </p>

              <div className="mt-8 space-y-4">
                <div className="text-[#0f172a] font-medium">
                  Email: claire@ai-growthtech.com
                </div>

                <p className="text-sm text-[#64748b]">
                  We typically respond within 1 business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA STRIP */}
      <section className="bg-[#0b1b2b] text-white px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            AI search is already influencing buying decisions.
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            The question isn’t whether AI will recommend businesses —
            it’s whether it will recommend you.
          </p>

          <div className="mt-8 flex justify-center">
            <Button href="/aeo-visibility-score">
              Check Your Visibility Score
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
