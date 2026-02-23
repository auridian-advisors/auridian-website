import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Frameworks, perspectives, and hard-won patterns from 25+ years of product and engineering leadership — on the decisions that shape customer, product, and engineering trajectories.",
  openGraph: {
    title: "Insights · Auridian",
    description:
      "Frameworks and perspectives on the decisions that shape customer, product, and engineering trajectories.",
  },
};

export default function Insights() {
  return (
    <>
      <Nav />
      <RevealObserver />
      <main className="page-wrap">

        {/* ══════════════════════════════
            PAGE HERO — navy
        ══════════════════════════════ */}
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow eyebrow-gold page-hero-eyebrow reveal">
              Insights
            </span>
            <h1 className="display page-hero-headline reveal">
              Frameworks for the decisions<br />
              <em>that compound.</em>
            </h1>
          </div>
        </section>

        {/* ══════════════════════════════
            BODY — white background
        ══════════════════════════════ */}
        <section className="page-body">
          <div className="container">

            <div className="insights-intro reveal">
              <p>
                A space for frameworks, perspectives, and hard-won patterns
                from 25+ years of product and engineering leadership.
                Substantive thinking from a practitioner's perspective —
                on the decisions that actually shape customer, product,
                and engineering trajectories.
              </p>
              <p>
                Essays and frameworks are in development. This space will
                be updated as substantive material is ready to publish.
              </p>
            </div>

            <div className="insights-placeholder reveal">
              <p>Essays and frameworks publishing soon.</p>
            </div>

            <div className="insights-topics reveal">
              <div className="insights-topics-label">Areas of Focus</div>
              <ul className="insights-topic-list">
                {[
                  "Finding product-market fit with architectural discipline",
                  "Translating business vision into engineering strategy",
                  "AI-native systems design and intelligent platform architecture",
                  "Executive decision frameworks under uncertainty",
                  "Scaling engineering organizations through hypergrowth and acquisition",
                  "Product intelligence vs. feature accumulation",
                  "Technical roadmapping for platform-stage companies",
                  "Developer platform strategy and ecosystem design",
                  "Org design and team structure at enterprise scale",
                  "The structural roots of technical debt",
                  "Offshore and distributed team leadership at scale",
                ].map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>

            <div className="reveal" style={{
              marginTop: "4rem",
              paddingTop: "3.5rem",
              borderTop: "1px solid var(--ink-rule)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "2rem",
            }}>
              <div>
                <span className="eyebrow eyebrow-gold" style={{ marginBottom: "0.8rem", display: "block" }}>
                  In the Meantime
                </span>
                <p style={{ fontSize: "0.95rem", color: "var(--ink-mid)", lineHeight: 1.8, maxWidth: "420px" }}>
                  If a topic here is relevant to a challenge you are navigating,
                  start a conversation. The thinking happens in context.
                </p>
              </div>
              <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", alignItems: "center" }}>
                <a href="mailto:vernonh@auridian.io" className="btn-primary-dark">
                  Start a Conversation
                </a>
                <a
                  href="https://calendly.com/vernonh/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-light"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 14, height: 14, display: "inline-block", marginRight: "0.4rem", verticalAlign: "middle" }} aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/>
                  </svg>
                  Schedule a Call
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
