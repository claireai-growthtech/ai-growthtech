import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

export default function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#caa85c]/40 focus:ring-offset-2 focus:ring-offset-[#fdfaf4]";

  const styles =
    variant === "primary"
      ? "bg-[#caa85c] text-[#0f172a] shadow-[0_10px_22px_rgba(15,23,42,0.12)] hover:shadow-[0_14px_28px_rgba(15,23,42,0.16)] hover:-translate-y-[1px]"
      : variant === "secondary"
      ? "border border-[#e8dfcc] bg-white/70 text-[#0f172a] shadow-sm hover:bg-white hover:-translate-y-[1px]"
      : "text-[#0f172a] hover:text-[#8a6a2f]";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      {variant !== "ghost" && <span aria-hidden>→</span>}
    </Link>
  );
}
