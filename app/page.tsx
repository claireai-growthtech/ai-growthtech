import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#fdfaf4] text-[#0f172a]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-10">
          <div className="max-w-3xl">

            {/* TOP PILL WITH NAVY OUTLINE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#13273f] bg-white px-4 py-2 text-sm shadow-sm">
              <span className="font-semibold text-[#caa85c]">AI Growth Tech</span>
              <span className="text-[#caa85c]">•</span>
              <span className="font-semibold text-[#caa85c]">
                Two standalone products
              </span>
              <span className="text-[#caa85c]">•</span>
              <span className="font-semibold text-[#caa85c]">
                Premium AI infrastructure
              </span>
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-[#0f172a]">
              Build for the AI Shift.
            </h1>

            <p className="mt-5 text-lg md:text-xl text-[#334155] leading-relaxed">
              AI is changing how customers discover businesses and how enquiries convert.
              We build structured AI systems that deliver measurable advantage —
              without gimmicks.
            </p>

            {/* PRODUCT PILL TAGS */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-[#13273f] bg-white px-3 py-1 text-sm font-semibold text-[#caa85c]">
                AEO Visibility
              </span>

              <span className="text-[#caa85c]">•</span>

              <span className="inline-flex items-center rounded-full border border-[#13273f] bg-white px-3 py-1 text-sm font-semibold text-[#caa85c]">
                AI Receptionist
              </span>

              <span className="text-[#caa85c]">•</span>

              <span className="text-sm text-[#334155]">
                Implement one or both — they do not depend on each other.
              </span>
            </div>

            {/* HERO BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {/* GOLD PRIMARY */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#caa85c] px-6 py-3 font-semibold text-[#13273f] hover:opacity-95 transition shadow-sm"
              >
                Request a Strategy Call
              </Link>

              {/* NAVY SECONDARY */}
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-xl bg-[#13273f] px-6 py-3 font-semibold text-white hover:opacity-95 transition shadow-sm"
              >
                Explore Our AI Products
              </a>
            </div>

            <p className="mt-4 text-sm text-[#475569]">
              Prefer to start with visibility?{" "}
              <Link
                href="/aeo-visibility-score"
                className="text-[#8a6a2f] underline"
              >
                Explore the Visibility Score.
              </Link>
            </p>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(202,168,92,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(19,39,63,0.08),transparent_45%)]" />
      </section>

      {/* PRODUCTS */}
      <section id="products" className="border-t border-[#efe6d3]">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0f172a]">
              AI infrastructure. Designed properly.
            </h2>
            <p className="mt-3 text-[#334155]">
              We offer two standalone AI systems. Each solves a different business problem.
              Choose the one that matches your priority.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* AEO VISIBILITY */}
            <div className="rounded-2xl border border-[#e8dfcc] bg-white shadow-sm p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-[#caa85c]">
                    AEO Visibility
                  </div>
                  <div className="mt-1 text-2xl font-semibold text-[#0f172a]">
                    Answer Engine Optimisation (AEO)
                  </div>
                </div>
                <div className="shrink-0 rounded-xl bg-[#13273f] text-white px-3 py-1 text-sm font-semibold">
                  Discovery
                </div>
              </div>

              <p className="mt-4 text-[#334155] leading-relaxed">
                Be recommended when customers ask AI tools who to trust in your market.
                AI search doesn’t rank like traditional search — it recommends
                based on authority signals and structured clarity.
              </p>

              <div className="mt-5 rounded-xl border border-[#efe6d3] bg-[#fbf7ef] p-5">
                <div className="text-sm font-semibold text-[#0f172a]">
                  What this product improves
                </div>
                <ul className="mt-3 space-y-2 text-[#334155]">
                  <li>• Improve your AEO Visibility Score</li>
                  <li>• Strengthen authority architecture</li>
                  <li>• Optimise your site for AI-generated recommendations</li>
                  <li>• Increase qualified inbound enquiries</li>
                </ul>
              </div>

              {/* BUTTONS */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/aeo-visibility-score"
                  className="inline-flex items-center justify-center rounded-xl bg-[#13273f] px-5 py-3 text-white font-semibold hover:opacity-95 transition"
                >
                  Explore AEO Visibility
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-[#13273f] bg-white px-5 py-3 font-semibold text-[#13273f] hover:bg-white/80 transition"
                >
                  View AEO Services
                </Link>
              </div>
            </div>

            {/* AI RECEPTIONIST */}
            <div className="rounded-2xl border border-[#e8dfcc] bg-white shadow-sm p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-[#caa85c]">
                    AI Receptionist
                  </div>
                  <div className="mt-1 text-2xl font-semibold text-[#0f172a]">
                    24/7 Enquiry & Booking Infrastructure
                  </div>
                </div>
                <div className="shrink-0 rounded-xl bg-[#caa85c] text-[#13273f] px-3 py-1 text-sm font-semibold">
                  Conversion
                </div>
              </div>

              <p className="mt-4 text-[#334155] leading-relaxed">
                Every missed enquiry is lost revenue. AI Receptionist answers instantly,
                handles bookings, reschedules and cancellations, checks live availability,
                and applies your policies — automatically.
              </p>

              <div className="mt-5 rounded-xl border border-[#efe6d3] bg-[#fbf7ef] p-5">
                <div className="text-sm font-semibold text-[#0f172a]">
                  What this product handles
                </div>
                <ul className="mt-3 space-y-2 text-[#334155]">
                  <li>• Voice + website chat</li>
                  <li>• Live calendar integration</li>
                  <li>• Policy-aware automation</li>
                  <li>• Confirmation workflows</li>
                </ul>
              </div>

              <div className="mt-7 flex items-center gap-3">
                <Link
                  href="/ai-receptionist"
                  className="inline-flex items-center justify-center rounded-xl bg-[#13273f] px-5 py-3 text-white font-semibold hover:opacity-95 transition"
                >
                  Explore AI Receptionist
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#caa85c] px-5 py-3 font-semibold text-[#13273f] hover:opacity-95 transition"
                >
                  Request a Demo
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
