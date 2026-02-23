import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Advisory",
  description:
    "Executive advisory for founders and technical leaders navigating consequential product, platform, and architecture decisions. Selective engagements. Substantive work.",
  openGraph: {
    title: "Advisory · Auridian",
    description:
      "Executive advisory for founders and technical leaders navigating consequential product, platform, and architecture decisions.",
  },
};

const pillars = [
  {
    num: "01",
    name: "Product & Engineering Strategy",
    desc: "Good strategy starts with the customer and works backward. That means finding product-market fit with discipline — identifying which use cases resonate, which to defer, and how to sequence the work so early decisions compound rather than constrain. At every stage, Auridian helps translate business vision into product and engineering strategy with the clarity that makes execution possible.",
    items: [
      "Product-market fit strategy and validation",
      "Customer use case analysis and prioritization",
      "Business vision to engineering strategy translation",
      "Roadmap clarity and decision sequencing",
      "Executive decision frameworks",
    ],
  },
  {
    num: "02",
    name: "Intelligent Systems Architecture",
    desc: "Scalable systems are designed, not discovered. Auridian brings 25+ years of architectural pattern recognition to the decisions that define a platform's structural ceiling — and ensures those decisions are made with the foresight they deserve.",
    items: [
      "Scalable system and platform architecture",
      "AI-native systems design and integration",
      "Developer platform strategy",
      "Enterprise SaaS infrastructure design",
      "Long-term structural integrity review",
    ],
  },
  {
    num: "03",
    name: "Technical Roadmap & Org Alignment",
    desc: "Strategy without organizational coherence fails at execution. Auridian works across the business and engineering boundary — ensuring roadmap, team structure, and hiring priorities are aligned to the same destination.",
    items: [
      "Technical roadmap development and sequencing",
      "Engineering organization design",
      "Hiring strategy and capability planning",
      "Cross-functional alignment facilitation",
      "Tradeoff analysis and prioritization frameworks",
    ],
  },
  {
    num: "04",
    name: "Executive Operator",
    desc: "Strategy only matters if it gets executed. With direct experience leading engineering organizations from founding teams through 1,100+ at scale — through hypergrowth, acquisitions, and exits — Auridian brings the operational depth to bridge strategic intent and execution reality.",
    items: [
      "Engineering organization leadership and scaling",
      "Acquisition integration and technical due diligence",
      "Hypergrowth operational design",
      "Executive team development",
      "Cross-org transformation and change leadership",
      "Distributed team leadership across offshore and nearshore geographies",
    ],
  },
  {
    num: "05",
    name: "Strategic Prototyping & AI Advisory",
    desc: "The fastest way to validate a structural decision is to make it tangible before full investment is committed. Auridian builds high-fidelity prototypes and applied AI integrations that test concepts and architecture, not just aesthetics.",
    items: [
      "High-fidelity prototype development",
      "AI integration strategy and validation",
      "Experience architecture design",
      "Rapid structural validation frameworks",
      "Developer-first tooling strategy",
    ],
  },
  {
    num: "06",
    name: "Fractional CTO Advisory",
    desc: "For organizations that need sustained senior technical leadership without a full-time executive hire. Auridian provides ongoing architectural oversight, board and investor preparation, and the strategic continuity that occasional engagements cannot deliver.",
    items: [
      "Ongoing executive technical leadership",
      "Board and investor preparation",
      "Architecture and platform oversight",
      "Technical hiring and team development",
      "Strategic vendor and partnership evaluation",
    ],
  },
];

export default function Advisory() {
  return (
    <>
      <Nav />
      <RevealObserver />
      <main className="page-wrap">

        <section className="page-hero">
          <div className="container">
            <span className="eyebrow eyebrow-gold page-hero-eyebrow reveal">
              Advisory
            </span>
            <h1 className="display page-hero-headline reveal">
              Selective. Strategic.<br />
              <em>Substantive.</em>
            </h1>
          </div>
        </section>

        <section className="page-body">
          <div className="container">

            <div className="advisory-intro">
              <div className="advisory-intro-text reveal">
                <p>
                  Auridian is an executive advisory platform built around
                  a single principle: the most consequential technology
                  decisions deserve senior, undivided attention.
                </p>
                <p>
                  That looks different at every stage. For early-stage
                  teams, it means finding product-market fit with
                  architectural discipline — tuning product use cases to
                  real customer needs, thinking creatively about what to
                  build and what to defer, and establishing the structural
                  foundations that won't become constraints later. For
                  growth-stage and enterprise teams, it means translating
                  strategic ambition into systems that can actually carry
                  the weight of scale.
                </p>
                <p>
                  Wherever you are in that journey, the orientation is
                  the same: substantive work toward outcomes that hold.
                  Auridian takes a limited number of active engagements
                  at any given time — because the quality of the work
                  depends on the depth of the attention.
                </p>
              </div>

              <div className="reveal">
                <div className="advisory-panel">
                  <div className="advisory-panel-label">Engagement Model</div>
                  <p className="advisory-panel-text">
                    Engagements are defined, purposeful, and structured
                    around measurable strategic outcomes — not open-ended
                    retainers or time-and-materials scope. Every engagement
                    begins with a direct conversation about the problem,
                    not a standardized intake process.
                  </p>
                </div>
                <div className="advisory-panel">
                  <div className="advisory-panel-label">Who This Is For</div>
                  <p className="advisory-panel-text">
                    Founders navigating platform inflection points. CTOs
                    building at enterprise scale. Growth-stage companies
                    moving from product-market fit to platform maturity.
                    Enterprise teams that need architectural clarity before
                    committing to a technical direction.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <span className="eyebrow eyebrow-gold reveal" style={{ marginBottom: "2.5rem", display: "block" }}>
                Six Capabilities
              </span>

              {pillars.map((p) => (
                <div className="advisory-pillar-row reveal" key={p.num}>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.2em",
                      color: "var(--gold)",
                      marginBottom: "0.6rem"
                    }}>
                      {p.num}
                    </div>
                    <div className="advisory-pillar-name">{p.name}</div>
                  </div>
                  <div>
                    <p className="advisory-pillar-desc">{p.desc}</p>
                    <ul className="advisory-pillar-items">
                      {p.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{
              marginTop: "5rem",
              paddingTop: "4rem",
              borderTop: "1px solid var(--ink-rule)"
            }}>
              <span className="eyebrow eyebrow-gold" style={{ marginBottom: "1.2rem", display: "block" }}>
                Start Here
              </span>
              <h2 className="display" style={{
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                color: "var(--ink)",
                marginBottom: "1rem",
                marginTop: "0.5rem"
              }}>
                Strategic conversations only.
              </h2>
              <p style={{
                fontSize: "0.95rem",
                color: "var(--ink-mid)",
                lineHeight: 1.85,
                marginBottom: "2.5rem",
                maxWidth: "500px"
              }}>
                If you are navigating a consequential platform or product
                decision, reach out directly. No intake form. No automated
                sequence. A direct conversation with someone who has been
                in the room before.
              </p>
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
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
