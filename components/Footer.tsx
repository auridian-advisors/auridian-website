import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">

        {/* Horizontal lockup — monogram + wordmark */}
        <Link href="/" className="footer-logo" aria-label="Auridian — Home">
          <img
            src="/images/auridian-lockup-horizontal-primary.svg"
            alt="Auridian Advisors"
            height={28}
          />
        </Link>

        {/* Footer navigation */}
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/advisory">Advisory</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Copyright */}
        <div className="footer-copy">
          © {new Date().getFullYear()} Auridian Advisors LLC
        </div>

      </div>
    </footer>
  );
}
