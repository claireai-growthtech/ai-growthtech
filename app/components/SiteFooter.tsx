import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#13273f] text-[#caa85c] border-t border-[#1e3a5c]">
      <div className="max-w-6xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-[#caa85c]">
              AI Growth Tech
            </h3>
            <p className="mt-4 text-sm text-[#caa85c]/80 leading-relaxed">
              AEO visibility scoring and strategic optimisation to help businesses
              get recommended inside AI-generated answers.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-[#caa85c]/70">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
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
                  Visibility Score
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Authority */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-[#caa85c]/70">
              Focus
            </h4>
            <p className="mt-4 text-sm text-[#caa85c]/80 leading-relaxed">
              Answer Engine Optimisation (AEO)
              <br />
              AI Search Visibility
              <br />
              Structured Content Strategy
              <br />
              Entity & Schema Optimisation
            </p>
          </div>

        </div>

        <div className="mt-12 border-t border-[#1e3a5c] pt-6 text-xs text-[#caa85c]/70 text-center">
          © {new Date().getFullYear()} AI Growth Tech. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
