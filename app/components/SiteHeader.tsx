import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="bg-[#13273f] border-b border-[#1e3a5c]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left side – Logo + Brand */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="AI Growth Tech Logo"
            width={60}
            height={60}
            priority
          />

          <div>
            <div className="text-[#caa85c] text-xl font-semibold tracking-tight">
              AI Growth Tech
            </div>
            <div className="text-sm text-[#caa85c]/80">
              Innovate faster. Grow smarter.
            </div>
          </div>
        </Link>

        {/* Right side – Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-[#caa85c] font-medium hover:text-[#caa85c]/80 transition"
          >
            Home
          </Link>

          <Link
            href="/aeo-visibility-score"
            className="text-[#caa85c] font-medium hover:text-[#caa85c]/80 transition"
          >
            Visibility Score
          </Link>

          <Link
            href="/ai-receptionist"
            className="text-[#caa85c] font-medium hover:text-[#caa85c]/80 transition"
          >
            AI Receptionist
          </Link>

          <Link
            href="/contact"
            className="text-[#caa85c] font-medium hover:text-[#caa85c]/80 transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
