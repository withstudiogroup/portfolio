import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
              <span className="text-black font-semibold text-xs">W</span>
            </div>
            <span className="text-sm font-medium">Studio With</span>
          </Link>

          {/* Copyright */}
          <p className="text-[var(--text-muted)] text-sm">
            © {currentYear} Studio With. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="tel:010-4708-0150"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors text-sm"
            >
              010-4708-0150
            </a>
            <a
              href="mailto:withstudiogroup@gmail.com"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
