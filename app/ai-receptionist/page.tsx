import Link from "next/link";

export default function AiReceptionistPage() {
  return (
    <main className="bg-[#fdfaf4] text-[#0f172a]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-14 pb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e8dfcc] bg-white/70 px-4 py-2 text-sm text-[#334155] shadow-sm">
              <span className="font-medium">AI Receptionist</span>
              <span className="text-[#caa85c]">•</span>
              <span>24/7 enquiry handling</span>
              <span className="text-[#caa85c]">•</span>
              <span>Booking infrastructure</span>
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
              AI Receptionist
            </h1>

            <p className="mt-5 text-lg text-[#334155] leading-relaxed">
              Every missed enquiry is lost revenue. AI Receptionist answers instantly, handles bookings and changes,
              checks live availability, applies your policies, and confirms appointments automatically — 24/7.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#13273f] px-6 py-3 text-white font-semibold hover:opacity-95"
              >
                Request a Demo
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-[#1e3a5c] px-6 py-3 font-semibold text-[#13273f] bg-white/70 hover:bg-white"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section className="border-t border-[#efe6d3]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            What it does (without the chaos)
          </h2>
          <p className="mt-3 text-[#334155] max-w-3xl">
            This is not a generic chatbot. It’s structured operational logic — designed to behave like a trained front desk.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Answers instantly — voice + chat",
                body:
                  "Handles phone calls and web chat with a natural, professional tone — no voicemail, no delays.",
              },
              {
                title: "Live calendar integration",
                body:
                  "Checks availability and creates or updates bookings directly in Google Calendar with clean event details.",
              },
              {
                title: "Booking changes handled properly",
                body:
                  "Reschedules and cancellations follow your rules, including grace periods and notice windows.",
              },
              {
                title: "Policy-aware by design",
                body:
                  "Works within your business policies (hours, buffers, booking intervals). No inventing, no guesswork.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#e8dfcc] bg-white shadow-sm p-7"
              >
                <div className="text-lg font-semibold text-[#0f172a]">
                  {item.title}
                </div>
                <p className="mt-2 text-[#334155] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY / LIMITS */}
      <section className="border-t border-[#efe6d3]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="rounded-2xl border border-[#e8dfcc] bg-white shadow-sm p-7">
            <h2 className="text-2xl font-semibold tracking-tight">
              Controlled, compliant, and brand-safe
            </h2>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 text-[#334155]">
              <div className="rounded-xl border border-[#efe6d3] bg-[#fdfaf4] p-5">
                <div className="font-semibold text-[#0f172a]">What it will do</div>
                <ul className="mt-2 space-y-2">
                  <li>• Collect only essential details (GDPR conscious)</li>
                  <li>• Confirm critical booking information clearly</li>
                  <li>• Follow your operating rules and policies</li>
                  <li>• Escalate when information is missing</li>
                </ul>
              </div>

              <div className="rounded-xl border border-[#efe6d3] bg-[#fdfaf4] p-5">
                <div className="font-semibold text-[#0f172a]">What it won’t do</div>
                <ul className="mt-2 space-y-2">
                  <li>• No card data collection</li>
                  <li>• No payment processing</li>
                  <li>• No inventing policies or availability</li>
                  <li>• No exposure of internal logic</li>
                </ul>
              </div>
            </div>

            <p className="mt-6 text-[#334155]">
              In short: it behaves like a premium front desk — structured, calm, and accurate.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#efe6d3]">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="rounded-2xl bg-[#13273f] px-7 py-10 text-white shadow-sm">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Stop losing bookings you never knew you missed.
            </h3>
            <p className="mt-3 text-white/85 max-w-2xl leading-relaxed">
              If your business relies on enquiries, the ability to respond instantly is now a competitive advantage.
              We’ll show you exactly how it works in a demo.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-[#13273f] hover:opacity-95"
              >
                Request a Demo
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-white/35 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
