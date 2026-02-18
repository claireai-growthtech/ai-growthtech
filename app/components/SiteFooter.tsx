import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0f1f33] text-[#d4b46a] border-t border-[#1e3a5c]">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-16">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold tracking-wide text-[#d4b46a]">
              AI Growth Tech
            </h3>
            <p className="mt-6 text-sm text-[#d4b46a]/80 leading-relaxed">
              We increase your AEO Visibility Score and position your brand 
              inside AI-generated answers across ChatGPT, Gemini and Perplexity.
            </p>

            <p className="mt-6 text-xs tracking-wide text-[#d4b46a]/60 uppercase">
              Pipeline over vanity traffic
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#d4b46a]/60">
              Company
            </h4>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/aeo-visibility-score" className="hover:text-white transition">
                  AEO Visibility Score
                </Link>
              </li>
              <li>
                <Link href="/what-is-aeo" className="hover:text-white transition">
                  What is AEO?
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#d4b46a]/60">
              Expertise
            </h4>
            <ul className="mt-6 space-y-4 text-sm text-[#d4b46a]/80">
              <li>AEO Strategy & Implementation</li>
              <li>AI Recommendation Optimisation</li>
              <li>Entity & Schema Architecture</li>
              <li>Structured Content Engineering</li>
              <li>AI Search Competitive Intelligence</li>
            </ul>
          </div>

          {/* Authority + CTA */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#d4b46a]/60">
              Visibility is the New Ranking
            </h4>
            <p className="mt-6 text-sm text-[#d4b46a]/80 leading-relaxed">
              Buyers now consult AI before visiting websites.  
              If your brand is not recommended in AI answers, you are absent 
              at the most critical decision point.
            </p>

            <div className="mt-6">
              <Link
                href="/aeo-visibility-score"
                className="inline-block text-sm font-medium border border-[#d4b46a]/40 px-4 py-2 rounded-full hover:bg-[#d4b46a] hover:text-[#0f1f33] transition"
              >
                Check Your Visibility Score →
              </Link>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-[#1e3a5c] pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/ai-growth-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
                2.761 2.239 5 5 5h14c2.761 0 5-2.239 
                5-5v-14c0-2.761-2.239-5-5-5zm-11 
                19h-3v-10h3v10zm-1.5-11.268c-.966 
                0-1.75-.784-1.75-1.75s.784-1.75 
                1.75-1.75 1.75.784 1.75 
                1.75-.784 1.75-1.75 
                1.75zm13.5 11.268h-3v-5.604c0-3.368-4-3.113-4 
                0v5.604h-3v-10h3v1.604c1.396-2.586 
                7-2.777 7 2.476v5.92z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@Ai-GrowthTech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M19.615 3.184c-3.604-.246-11.627-.245-15.23 
                0-3.897.266-4.356 2.62-4.385 
                8.816.029 6.194.484 8.549 4.385 
                8.816 3.6.245 11.626.246 15.23 
                0 3.897-.266 4.356-2.62 
                4.385-8.816-.029-6.194-.484-8.549-4.385-8.816zm-10.615 
                12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
          </div>

          {/* Bottom Line */}
          <div className="text-xs text-[#d4b46a]/60 text-center md:text-right">
            © {new Date().getFullYear()} AI Growth Tech · United Kingdom  
            <span className="mx-2">·</span>
            Answer Engine Optimisation Specialists
          </div>

        </div>
      </div>
    </footer>
  );
}

