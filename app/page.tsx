import Link from "next/link";
import Script from "next/script";

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.ai-growthtech.com/#organization",
        name: "AI Growth Tech",
        url: "https://www.ai-growthtech.com/",
        logo: "https://www.ai-growthtech.com/logo.png",
        description:
          "AI Growth Tech helps businesses improve visibility in AI search, automate enquiry handling, and deploy AI-powered workflows.",
        sameAs: [],
      },
      {
        "@type": "Service",
        "@id": "https://www.ai-growthtech.com/#aeo-service",
        name: "Answer Engine Optimisation (AEO)",
        provider: {
          "@id": "https://www.ai-growthtech.com/#organization",
        },
        serviceType: "Answer Engine Optimisation",
        areaServed: "United Kingdom",
        url: "https://www.ai-growthtech.com/aeo-visibility-score",
        description:
          "Answer Engine Optimisation helps businesses improve their visibility in AI platforms like ChatGPT, Gemini, and Perplexity so they are more likely to be recommended.",
      },
      {
        "@type": "Service",
        "@id": "https://www.ai-growthtech.com/#ai-receptionist-service",
        name: "AI Receptionist",
        provider: {
          "@id": "https://www.ai-growthtech.com/#organization",
        },
        serviceType: "AI Receptionist and enquiry automation",
        areaServed: "United Kingdom",
        url: "https://www.ai-growthtech.com/ai-receptionist",
        description:
          "AI Receptionist answers calls and website enquiries, captures leads, qualifies prospects, and books appointments automatically.",
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.ai-growthtech.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is an AEO visibility score?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An AEO visibility score measures how likely your business is to be recommended by AI platforms. A score of 7 to 10 means your business is highly visible and more likely to be suggested to customers.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between AEO and SEO?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SEO focuses on ranking in search engines like Google. AEO focuses on being recommended by AI platforms like ChatGPT, Gemini, and Perplexity.",
            },
          },
          {
            "@type": "Question",
            name: "How long does AEO take to work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most businesses begin to see measurable improvements in visibility within 60 to 90 days, depending on their starting point.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need both AEO and an AI Receptionist?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. They solve different problems. AEO improves visibility. AI Receptionist helps convert enquiries into booked opportunities.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-[#fdfaf4] text-[#0f172a]">
      <Script
  id="schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-12 md:pt-14 md:pb-16">
          <div className="max-w-4xl">
            {/* TOP PILL WITH NAVY OUTLINE */}
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[#13273f] bg-white px-4 py-2 text-sm shadow-sm">
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

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-[#0f172a]">
              Build for the AI Shift. Get Recommended, Not Just Found.
            </h1>

            <p className="mt-5 max-w-3xl text-lg md:text-xl text-[#334155] leading-relaxed">
              AI is changing how customers discover, engage, and convert. Businesses
              that adapt will win. Those that do not will become invisible.
            </p>

            <p className="mt-4 max-w-3xl text-lg md:text-xl text-[#334155] leading-relaxed">
              We design and implement AI infrastructure that drives visibility,
              captures demand, and automates growth, from being recommended in AI
              search, to handling enquiries and deploying intelligent workflows across
              your business.
            </p>

            {/* PRODUCT PILL TAGS */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-[#13273f] bg-white px-3 py-1 text-sm font-semibold text-[#caa85c]">
                AEO Visibility
              </span>
              <span className="text-[#caa85c]">•</span>
              <span className="inline-flex items-center rounded-full border border-[#13273f] bg-white px-3 py-1 text-sm font-semibold text-[#caa85c]">
                AI Receptionist
              </span>
              <span className="text-[#caa85c]">•</span>
              <span className="text-sm text-[#334155]">
                Built for measurable growth
              </span>
            </div>

            {/* HERO BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#caa85c] px-6 py-3 font-semibold text-[#13273f] hover:opacity-95 transition shadow-sm"
              >
                Request a Strategy Call
              </Link>
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-xl bg-[#13273f] px-6 py-3 font-semibold text-white hover:opacity-95 transition shadow-sm"
              >
                Explore AI Products
              </a>
            </div>

            <p className="mt-4 text-sm text-[#475569]">
              Prefer to start with visibility?{" "}
              <Link
                href="/aeo-visibility-score"
                className="text-[#8a6a2f] underline"
              >
                Check your AEO Visibility Score
              </Link>
            </p>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(202,168,92,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(19,39,63,0.08),transparent_45%)]" />
      </section>

      {/* AI READABLE AEO SECTION */}
      <section className="border-t border-[#efe6d3]">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0f172a]">
              What is Answer Engine Optimisation (AEO)?
            </h2>

            <p className="mt-4 text-[#334155] leading-relaxed text-lg">
              Answer Engine Optimisation (AEO) is the process of structuring your
              business so AI platforms like ChatGPT, Gemini, and Perplexity can
              understand, trust, and recommend your business when users ask for
              solutions in your market.
            </p>

            <p className="mt-4 text-[#334155] leading-relaxed">
              Unlike traditional SEO, AI platforms do not return a list of links.
              They provide direct answers and recommend businesses based on clarity,
              structured content, authority, and consistency across the web.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-[#0f172a]">
              How do AI platforms decide which businesses to recommend?
            </h3>

            <ul className="mt-4 space-y-2 text-[#334155] leading-relaxed">
              <li>• Clear explanation of what you do and who you serve</li>
              <li>• Structured content that AI can extract and interpret</li>
              <li>• Authority signals such as mentions, links, and credibility</li>
              <li>• Consistent information across your website and external platforms</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-[#0f172a]">
              How can businesses improve their AEO visibility?
            </h3>

            <p className="mt-4 text-[#334155] leading-relaxed">
              Businesses can improve their AEO visibility by structuring their website
              content clearly, publishing authoritative information, maintaining
              consistency across platforms, and ensuring their services are easy for
              AI systems to understand and recommend.
            </p>
          </div>
        </div>
      </section>

      {/* HOW AI DECIDES */}
      <section className="border-t border-[#efe6d3]">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0f172a]">
              How AI decides who to recommend
            </h2>
            <p className="mt-4 text-[#334155] leading-relaxed">
              AI platforms evaluate businesses using a combination of clarity,
              structure, authority, and consistency.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-[#e8dfcc] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0f172a]">
                  1. Clarity of offering
                </h3>
                <p className="mt-2 text-[#334155] leading-relaxed">
                  Can AI clearly understand what you do and who you serve?
                </p>
              </div>
              <div className="rounded-2xl border border-[#e8dfcc] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0f172a]">
                  2. Structured content
                </h3>
                <p className="mt-2 text-[#334155] leading-relaxed">
                  Is your website easy for AI to extract and interpret?
                </p>
              </div>
              <div className="rounded-2xl border border-[#e8dfcc] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0f172a]">
                  3. Authority signals
                </h3>
                <p className="mt-2 text-[#334155] leading-relaxed">
                  Are you referenced, trusted, and mentioned externally?
                </p>
              </div>
              <div className="rounded-2xl border border-[#e8dfcc] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0f172a]">
                  4. Consistency across platforms
                </h3>
                <p className="mt-2 text-[#334155] leading-relaxed">
                  Does your brand appear credible across the web?
                </p>
              </div>
            </div>

            <p className="mt-6 text-[#334155] leading-relaxed">
              We build your presence across all four — so you become the obvious
              recommendation.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="border-t border-[#efe6d3]">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0f172a]">
              AI infrastructure. Designed properly.
            </h2>
            <p className="mt-3 text-[#334155] leading-relaxed">
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
                AI search does not rank like traditional search — it recommends
                based on authority, structure, and clarity.
              </p>
              <div className="mt-5 rounded-xl border border-[#efe6d3] bg-[#fbf7ef] p-5">
                <div className="text-sm font-semibold text-[#0f172a]">
                  What this product improves
                </div>
                <ul className="mt-3 space-y-2 text-[#334155]">
                  <li>• Improve your AEO Visibility Score</li>
                  <li>• Increase your likelihood of being recommended by AI</li>
                  <li>• Strengthen authority in your market</li>
                  <li>• Increase qualified inbound enquiries</li>
                </ul>
              </div>
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
                Every missed enquiry is lost revenue. Our AI Receptionist answers instantly, captures leads, and books appointments — 24/7.
              </p>
              <div className="mt-5 rounded-xl border border-[#efe6d3] bg-[#fbf7ef] p-5">
                <div className="text-sm font-semibold text-[#0f172a]">
                  What this product handles
                </div>
                <ul className="mt-3 space-y-2 text-[#334155]">
                  <li>• Voice and website enquiries</li>
                  <li>• Live calendar booking and rescheduling</li>
                  <li>• Policy-aware automation</li>
                  <li>• Lead qualification and confirmation</li>
                </ul>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-3">
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

      {/* FAQ */}
      <section className="border-t border-[#efe6d3]">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0f172a]">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-[#334155] leading-relaxed">
              Clear answers for businesses adapting to AI search and automated enquiry handling.
            </p>
            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-[#e8dfcc] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0f172a]">
                  What is an AEO visibility score?
                </h3>
                <p className="mt-2 text-[#334155] leading-relaxed">
                  An AEO visibility score measures how likely your business is to be recommended by AI platforms. A score of 7–10 means your business is highly visible and more likely to be suggested to customers.
                </p>
              </div>
              <div className="rounded-2xl border border-[#e8dfcc] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0f172a]">
                  What is the difference between AEO and SEO?
                </h3>
                <p className="mt-2 text-[#334155] leading-relaxed">
                  SEO focuses on ranking in search engines like Google. AEO focuses on being recommended by AI platforms like ChatGPT, Gemini, and Perplexity.
                </p>
              </div>
              <div className="rounded-2xl border border-[#e8dfcc] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0f172a]">
                  How long does AEO take to work?
                </h3>
                <p className="mt-2 text-[#334155] leading-relaxed">
                  Most businesses begin to see measurable improvements in visibility within 60–90 days, depending on their starting point.
                </p>
              </div>
              <div className="rounded-2xl border border-[#e8dfcc] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0f172a]">
                  Do I need both AEO and an AI Receptionist?
                </h3>
                <p className="mt-2 text-[#334155] leading-relaxed">
                  No. They solve different problems. AEO improves visibility. AI Receptionist helps convert enquiries into booked opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="border-t border-[#efe6d3]">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0f172a]">
              Who this is for
            </h2>
            <p className="mt-3 text-[#334155] leading-relaxed">
              We work with businesses that rely on inbound enquiries and want to stay visible as search shifts to AI.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#e8dfcc] bg-white p-5 shadow-sm font-medium text-[#0f172a]">
                SaaS companies
              </div>
              <div className="rounded-2xl border border-[#e8dfcc] bg-white p-5 shadow-sm font-medium text-[#0f172a]">
                Financial services firms
              </div>
              <div className="rounded-2xl border border-[#e8dfcc] bg-white p-5 shadow-sm font-medium text-[#0f172a]">
                Local service businesses
              </div>
              <div className="rounded-2xl border border-[#e8dfcc] bg-white p-5 shadow-sm font-medium text-[#0f172a]">
                Growth-focused B2B companies
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}