"use client";

import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const pillars = [
  {
    num: "01",
    title: "Product & Engineering Strategy",
    body: "Translating business vision into product and engineering decisions with executive precision. Clarifying what to build, in what order, and why the structure matters — before commitments are made.",
  },
  {
    num: "02",
    title: "Intelligent Systems Architecture",
    body: "Designing scalable, AI-native platform systems built to compound over time. Architectural decisions that define a platform's ceiling — made with the foresight they deserve.",
  },
  {
    num: "03",
    title: "Technical Roadmap & Org Alignment",
    body: "Aligning engineering organization structure, hiring priorities, and technical roadmap to business objectives. Clarity on sequencing, tradeoffs, and what to build next.",
  },
  {
    num: "04",
    title: "Executive Operator",
    body: "Leading and scaling engineering organizations through periods of rapid growth, acquisition, and transformation. Operational depth that bridges strategic intent and execution reality.",
  },
  {
    num: "05",
    title: "Strategic Prototyping & AI Advisory",
    body: "Validating structural decisions through high-fidelity prototypes and applied AI integration — before full investment is committed.",
  },
  {
    num: "06",
    title: "Fractional CTO Advisory",
    body: "Senior technical leadership for organizations that need executive-level perspective without a full-time hire. Board preparation, investor translation, and sustained architectural oversight.",
  },
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main>

        {/* ══════════════════════════════
            HERO — navy background
        ══════════════════════════════ */}
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-inner">

            <img
              src="/images/auridian-wordmark-white.svg"
              alt="Auridian"
              className="hero-wordmark reveal reveal-delay-1"
            />

            <h1 className="display hero-headline reveal reveal-delay-2">
              Where Business Vision Meets<br />
              <em>Intelligent Systems Design.</em>
            </h1>

            <p className="hero-sub reveal reveal-delay-3">
              Executive-level product and platform strategy for founders
              and enterprise teams building intelligent, scalable systems.
            </p>

            <div className="hero-actions reveal reveal-delay-4">
              <a href="mailto:vernonh@auridian.io" className="btn-primary">
                Start a Conversation
              </a>
              <a
                href="https://calendly.com/vernonh/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-dark"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 14, height: 14, display: "inline-block", marginRight: "0.4rem", verticalAlign: "middle" }} aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/>
                </svg>
                Schedule a Call
              </a>
            </div>

            {/* Credential bar */}
            <div className="hero-rule reveal">
              <div className="hero-stat">
                <div className="hero-stat-label">Product & Engineering Leadership</div>
                <div className="hero-stat-num">25+ Years</div>
              </div>
              <div className="hero-stat-divider" aria-hidden="true" />
              <div className="hero-stat">
                <div className="hero-stat-label">Org Scale</div>
                <div className="hero-stat-num">Founding to 1,100+</div>
              </div>
              <div className="hero-stat-divider" aria-hidden="true" />
              <div className="hero-stat">
                <div className="hero-stat-label">Exits & M&A</div>
                <div className="hero-stat-num">4 (including IPO) · Multiple Acquisitions</div>
              </div>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════
            POSITIONING — white background
        ══════════════════════════════ */}
        <section className="section-positioning">
          <div className="container">
            <div className="positioning-inner">
              <div className="positioning-label">
                <span className="eyebrow eyebrow-gold reveal">What Auridian Does</span>
              </div>
              <div>
                <h2 className="display positioning-heading reveal">
                  Great outcomes require<br />
                  <em>clear decisions, made early.</em>
                </h2>
                <p className="positioning-body reveal">
                  Most technology organizations don't fail because their
                  engineers aren't good. They stall because the decisions
                  that shape customer outcomes, product direction, and
                  engineering investment weren't aligned early enough —
                  or weren't revisited as the business evolved. The wrong
                  things get built. The right things get delayed. Momentum
                  accumulates in the wrong direction.
                </p>
                <p className="positioning-body reveal">
                  Auridian works at that intersection — where product strategy,
                  engineering architecture, and organizational design must be
                  resolved together. The goal is not to optimize what exists.
                  It is to ensure the right structure exists to build on,
                  scale from, and deliver customer value through — durably.
                </p>
                <p className="positioning-body reveal">
                  Engagements are selective. The work is substantive.
                  The orientation is always toward outcomes that hold.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            SERVICE PILLARS — off-white
        ══════════════════════════════ */}
        <section className="section-pillars">
          <div className="container">
            <div className="pillars-heading-row">
              <span className="eyebrow eyebrow-gold reveal">Advisory Pillars</span>
              <h2 className="display pillars-heading reveal">
                Six capabilities.<br />One integrated operating model.
              </h2>
            </div>

            <div className="pillars-list">
              {pillars.map((p) => (
                <div className="pillar-item reveal" key={p.num}>
                  <span className="pillar-num">{p.num}</span>
                  <h3 className="pillar-title">{p.title}</h3>
                  <p className="pillar-body">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            PHILOSOPHY — navy background
        ══════════════════════════════ */}
        <section className="section-philosophy">
          <div className="container">
            <div className="philosophy-inner">
              <div>
                <span className="eyebrow eyebrow-gold reveal">How I Think</span>
              </div>
              <div className="philosophy-body">
                <h2 className="display reveal">
                  Vision, execution, and customer value —<br />
                  <em>in alignment.</em>
                </h2>
                <p className="reveal">
                  The best technology organizations don't choose between
                  shipping and building well. They do both — because they
                  understand that customer value and structural integrity
                  are not competing priorities. They are the same priority,
                  viewed at different time horizons.
                </p>
                <p className="reveal">
                  What erodes in high-growth environments is the connective
                  tissue between them. Product strategy drifts from what
                  customers actually need. Engineering roadmaps drift from
                  product strategy. Teams deliver — but toward an
                  increasingly fragmented target. The symptoms show up as
                  missed market moments and organizations that are busy
                  but not compounding.
                </p>
                <p className="reveal">
                  The work Auridian does is about restoring that coherence —
                  helping founders and technical leaders maintain clear line
                  of sight from customer need, through product decision,
                  through engineering execution. Drawing on 25+ years across
                  every stage of scale, the pattern is consistent: alignment
                  between vision, product, and execution is not a constraint
                  on speed. It is what makes durable speed possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            ENGAGE CTA — white background
        ══════════════════════════════ */}
        <section className="section-engage">
          <div className="container">
            <div className="engage-inner">
              <div>
                <span className="eyebrow eyebrow-ink reveal">Selective Engagements</span>
                <h2 className="display engage-heading reveal">
                  The right decisions early<br />
                  change the trajectory.
                </h2>
                <p className="engage-body reveal">
                  Auridian takes a limited number of active engagements at
                  any given time. If you are a founder or technical leader
                  navigating a consequential product or platform decision,
                  start with a conversation.
                </p>
              </div>
              <div className="engage-actions reveal">
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
                <a
                  href="https://www.linkedin.com/in/vernonh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="engage-linkedin"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
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
