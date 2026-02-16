import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AEO Visibility Score",
  description:
    "Find out your AEO Visibility Score and see how ready your website is for AI-generated answers across ChatGPT, Gemini and Perplexity. Move into the 7–10 range for consistent recommendation.",
  openGraph: {
    title: "AEO Visibility Score | AI Growth Tech",
    description:
      "A simple 1–10 score that measures how cite-ready your website is for AI answers. Structured AEO strategy to increase AI visibility.",
    url: "https://www.ai-growthtech.com/aeo-visibility-score",
  },
};

const buttonPrimary =
  "inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#caa85c] via-[#e6c97a] to-[#b88a3b] px-8 py-3 text-sm md:text-base font-medium text-[#0b1b2b] shadow-sm hover:opacity-90 transition";

const buttonSecondary =
  "inline-flex items-center justify-center rounded-lg border border-[#caa85c] bg-white/60 px-8 py-3 text-sm md:text-base font-medium text-[#0b1b2b] shadow-sm hover:bg-white transition";

export default function AeoVisibilityScorePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an AEO Visibility Score?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The AEO Visibility Score is a simple 1–10 score that indicates how “cite-ready” your website is for AI-generated answers. It reflects how well AI systems can interpret, trust, and recommend your business across key queries.",
        },
      },
      {
        "@type": "Question",
        name: "What score do I need to be recommended in AI answers?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Most businesses sit around 3–5. Consistent recommendation typically starts around 7+, where your site has strong structure, clear answers, schema/entity signals, topical coverage, and trust indicators.",
        },
      },
      {
        "@type": "Question",
        name: "What does the score measure?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The score measures content clarity and answer structure, technical signals like schema and internal linking, topical depth and coverage, authority and trust signals, and page segmentation that helps AI extract information accurately.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to improve my AEO Visibility Score?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Improvement depends on your starting point, but most gains come from prioritised structural and schema updates, followed by content expansion for priority queries. Many businesses see meaningful movement during a focused 90-day onboarding phase.",
        },
      },
      {
        "@type": "Question",
        name: "Is this the same as SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "It’s related but not the same. SEO targets rankings and clicks. AEO focuses on being selected and cited inside AI-generated answers by improving clarity, structure, entity understanding, and trust signals.",
        },
      },
      {
        "@type": "Question",
        name: "What do I get when I request a Visibility Score?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You get a baseline score and a gap analysis across key signals, plus a clear set of recommended actions to move into the 7–10 range and improve the likelihood of AI recommendation.",
        },
      },
    ],
  };

  return (
    <main className="bg-[#fdfaf4] text-[#0f172a]">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
          Visibility Score
        </p>

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          AEO Visibility Score
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A simple 1–10 score that shows how “cite-ready” your website is for AI
          answers — across structure, clarity, schema, topical depth and
          authority signals.
        </p>

        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          To consistently be recommended inside AI-generated answers, your score
          typically needs to sit in the <strong>7–10 range</strong>.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className={buttonPrimary}>
            Request a Visibility Score
          </Link>

          <Link href="/services" className={buttonSecondary}>
            How AEO Works
          </Link>
        </div>
      </section>

      {/* WHAT THE SCORE MEANS */}
      <section className="bg-[#f5f1e8] px-6 py-24 border-y border-[#efe7d6]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            What does the score measure?
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            Your AEO Visibility Score evaluates how effectively your website is
            structured to be understood, cited and recommended by AI systems.
          </p>

          <div className="mt-16 grid md:grid-cols-4 gap-8 text-left">
            <div className="bg-white/80 backdrop-blur-sm border border-[#e8dfcc] shadow-sm p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Content</h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Depth, clarity and answer-first structuring across commercial and
                informational queries.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-[#e8dfcc] shadow-sm p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Authority</h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Signals that build trust and validate your expertise within your
                niche.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-[#e8dfcc] shadow-sm p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Technical</h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Schema, internal linking structure and technical clarity that AI
                systems can interpret confidently.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-[#e8dfcc] shadow-sm p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">UX Segments</h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Page clarity, structure and segmentation that improves AI
                extractability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 90 DAY ONBOARDING */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
            Strategic Implementation
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            90-day onboarding setup — then ongoing optimisation.
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            We implement structural, technical and authority improvements during
            a focused 90-day onboarding phase.
          </p>

          <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed">
            After onboarding, we continue creating and refining content to
            maintain and increase your Visibility Score over time.
          </p>

          <div className="mt-10 flex justify-center">
            <Link href="/contact" className={buttonPrimary}>
              Book a Strategic Call
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ BLOCK */}
      <section className="bg-[#f5f1e8] px-6 py-24 border-y border-[#efe7d6]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              FAQs
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[#0f172a]">
              AEO Visibility Score FAQs
            </h2>

            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
              Clear answers to the most common questions business owners ask.
            </p>
          </div>

          <div className="mt-14 grid gap-6">
            {[
              {
                q: "What is an AEO Visibility Score?",
                a: "The AEO Visibility Score is a simple 1–10 score that indicates how “cite-ready” your website is for AI-generated answers. It reflects how well AI systems can interpret, trust, and recommend your business across key queries.",
              },
              {
                q: "What score do I need to be recommended in AI answers?",
                a: "Most businesses sit around 3–5. Consistent recommendation typically starts around 7+, where your site has strong structure, clear answers, schema/entity signals, topical coverage, and trust indicators.",
              },
              {
                q: "What does the score measure?",
                a: "It measures answer clarity and structure, technical signals like schema and internal linking, topical depth and coverage, authority and trust signals, and segmentation that improves AI extractability.",
              },
              {
                q: "How long does it take to improve my score?",
                a: "It depends on your starting point, but most gains come from prioritised structural and schema updates, followed by content expansion for priority queries. Many businesses see meaningful movement within a focused 90-day onboarding phase.",
              },
              {
                q: "Is this the same as SEO?",
                a: "It’s related but not the same. SEO targets rankings and clicks. AEO focuses on being selected and cited inside AI-generated answers by improving clarity, structure, entity understanding, and trust signals.",
              },
              {
                q: "What do I get when I request a Visibility Score?",
                a: "You get a baseline score and gap analysis, plus a clear set of recommended actions to move into the 7–10 range and improve the likelihood of AI recommendation.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="bg-white/80 backdrop-blur-sm border border-[#e8dfcc] shadow-sm p-8 rounded-2xl"
              >
                <h3 className="text-xl font-semibold text-[#0f172a]">{item.q}</h3>
                <p className="mt-4 text-gray-600 leading-relaxed text-base md:text-lg">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className={buttonPrimary}>
              Request a Visibility Score
            </Link>
            <Link href="/services" className={buttonSecondary}>
              View Services
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
            Everything we do is tracked against the AI queries that matter for your pipeline.
          </p>

          <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed">
            If your visibility doesn’t move, we’ll know why — and what to do next.
          </p>

          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            We guarantee measurable improvement to your AEO Visibility Score and recommended brand positioning within 90 days — or we continue working at no additional cost until we deliver it.
          </p>

          <div className="mt-10">
            <Link href="/contact" className={buttonPrimary}>
              Start Your 90-Day Onboarding
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
