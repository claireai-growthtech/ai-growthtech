import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="bg-[#0f1f33]/95 backdrop-blur-md border-b border-[#1e3a5c] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="AI Growth Tech Logo"
            width={56}
            height={56}
            priority
          />

          <div>
            <div className="text-[#d4b46a] text-xl font-semibold tracking-tight">
              AI Growth Tech
            </div>
            <div className="text-sm text-[#d4b46a]/80">
              Innovate faster. Grow smarter.
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          <Link
            href="/aeo-visibility-score"
            className="text-[#d4b46a] hover:text-white transition"
          >
            Visibility Score
          </Link>

          <Link
            href="/services"
            className="text-[#d4b46a] hover:text-white transition"
          >
            How AEO Works
          </Link>

          <Link
            href="/contact"
            className="border border-[#d4b46a]/40 px-5 py-2 rounded-full text-[#d4b46a] hover:bg-[#d4b46a] hover:text-[#0f1f33] transition"
          >
            Get Assessment
          </Link>

        </nav>

      </div>
    </header>
  );
}
