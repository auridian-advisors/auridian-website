import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "25+ years of product and engineering leadership across Microsoft, Qualtrics, Oracle, OpenGov, and more. Scaling organizations from founding teams to 1,100+ engineers across 6 industry verticals.",
  openGraph: {
    title: "Experience · Auridian",
    description:
      "25+ years of product and engineering leadership across Microsoft, Qualtrics, Oracle, OpenGov, and more.",
  },
};

const roles = [
  {
    company: "Vanta",
    title: "Head of Engineering, Automations & Integrations",
    period: "2025 · Current",
    body: "Leading the Automations and Integrations engineering organization at Vanta, a trust management platform operating at enterprise scale. Responsible for platform architecture, team structure, and technical direction for the automation systems that enable continuous compliance monitoring for thousands of enterprise customers.",
    highlights: [
      "Engineering leadership across a high-growth compliance and trust management platform",
      "Platform automation and integrations systems serving enterprise customers at scale",
      "Cross-functional technical direction and organizational design",
    ],
    patents: [],
  },
  {
    company: "BairesDev",
    title: "Technical Fellow",
    period: "2025 · Current",
    body: "Serving as Technical Fellow at BairesDev, a global technology services organization. Providing senior architectural guidance, AI strategy, and executive-level engineering advisory across client engagements.",
    highlights: [
      "AI strategy and advisory — helping organizations identify, prioritize, and integrate AI capabilities with architectural discipline",
      "Executive-level platform and engineering strategy advisory",
      "Senior architectural guidance across distributed global teams",
      "Strategic technical direction for client platform initiatives",
    ],
    patents: [],
  },
  {
    company: "OpenGov · Cox Enterprises",
    title: "Chief Technology Officer",
    period: "2024 – 2025",
    body: "Served as CTO of OpenGov, a GovTech platform spanning Financials, Budgeting, Asset Management, Procurement, and Permitting, Licensing & Contracting software. Led an engineering organization of 300+ across six business units, with a focus on hiring, team growth, product strategy, and engineering delivery — and played a central role in the technical integration of OpenGov into Cox Enterprises following the acquisition.",
    highlights: [
      "Engineering organization of 300+ engineers across six business units",
      "Hiring and growing the engineering team across multiple product lines",
      "Platform architecture, product strategy, and engineering delivery across GovTech domains",
      "Led technical integration into Cox Enterprises post-acquisition",
    ],
    patents: [],
  },
  {
    company: "Qualtrics · SAP",
    title: "Head of Engineering Services, Ecosystems & Platform",
    period: "2018 – 2024",
    body: "Held dual responsibilities as Head of Platform and Engineering Services at Qualtrics — a customer experience enterprise SaaS platform acquired by SAP in 2019 and taken public via IPO in 2021. Led engineering through one of the most significant growth periods in the company's history, scaling the organization from 300 to 1,100 engineers and helping grow revenue from $250M to $1.7B.",
    highlights: [
      "Scaled engineering organization from 300 to 1,100 engineers globally",
      "Supported company revenue growth from $250M to $1.7B through SAP acquisition and IPO",
      "Innovated and led xFlow — the Qualtrics workflow engine — enabling new platform capabilities and industry vertical expansion",
      "Led COVID-response product initiatives that drove significant new revenue and renewals in 2021",
      "Led industry vertical expansion into Healthcare, Automotive, Financial Services, and SLED",
      "Established and grew the Qualtrics Mexico City engineering site",
      "Managed engineering teams across Americas and Europe",
    ],
    patents: [
      "Domain Events for a Multi-Platform Data Stream — US11934844B2 · 2024",
      "Providing a Sequence-Builder UI for Generating a Digital Action Sequence — US11853537B2 · 2023",
      "Intelligently Combining Relevant Data Items During Ingestion — US20230385859A1 · 2023",
    ],
  },
  {
    company: "BlueKai · Oracle",
    title: "Senior Director, Engineering & Product Strategy",
    period: "2013 – 2018",
    body: "Joined BlueKai as Senior Director of Real-Time Systems Engineering, leading the Audience Data Marketplace and Data Management Platform. BlueKai was acquired by Oracle in 2014 to form the basis of Oracle Advertising. Continued post-acquisition in senior leadership roles across engineering and product strategy for the Oracle Data Cloud platform.",
    highlights: [
      "Designed the Real-Time ID Graph — enabling cross-device targeting and advanced audience analytics for digital advertising",
      "Led engineering for the Audience Data Marketplace and Data Management Platform (DMP)",
      "Post-acquisition: led core re-architecture of the Oracle Data Cloud platform",
      "Built and scaled 3rd party data marketplace infrastructure at enterprise scale",
    ],
    patents: [
      "Extending Audience Reach Using Probabilistic ID Linking — US11645676B2 · 2023",
      "Extending Audience Reach Using Super Profiles — US10521818B2 · 2019",
      "Real-Time Cross-Device User Category Synchronization — US10460353B2 · 2019",
      "Object Count Estimation by Live Object Simulation — US11120176B2 · 2021",
      "Object Count Prediction Using Distributed Processing — US11017303B2 · 2021",
      "Systems and Methods for End-to-End Testing Using Dynamically Simulated Data — US10733079B2 · 2020",
    ],
  },
  {
    company: "Microsoft",
    title: "Product Unit Manager · Director of Development · Test Manager",
    period: "1998 – 2013 · 15 Years",
    body: "A 15-year career at Microsoft spanning two major domains: Developer Platforms and Xbox/Gaming. Grew from individual contributor to Test Manager to Product Unit Manager — building a foundation across the full product and engineering lifecycle that would shape the next decade of platform leadership.",
    highlights: [
      "Developer Platforms: founding contributor to Visual Studio Tools for Office, Visual Basic SDK, and Script Technologies (JScript, VBScript, Windows Script Host)",
      "Xbox & Gaming: founding member of XNA Game Studio and App Hub — enabling indie developers to build and sell games for Xbox, Windows, and Windows Phone",
      "Led engineering for Xbox LIVE sports applications, pioneering a cloud-powered architecture enabling ad revenue, personalization, and analytics",
      "Led overhaul of the digital supply chain for the Xbox Marketplace",
    ],
    patents: [
      "Dynamic Personalized Program Content — US9967621B2 · 2018",
      "Interactive Sports Applications — US20130324247A1 · 2013",
    ],
  },
];

export default function Experience() {
  return (
    <>
      <Nav />
      <RevealObserver />
      <main className="page-wrap">

        <section className="page-hero">
          <div className="container">
            <span className="eyebrow eyebrow-gold page-hero-eyebrow reveal">
              Experience
            </span>
            <h1 className="display page-hero-headline reveal">
              Product and engineering leadership<br />
              <em>across every stage of scale.</em>
            </h1>
          </div>
        </section>

        <section className="page-body">
          <div className="container">

            <p className="experience-intro reveal">
              A career defined by architectural decisions at scale — from
              founding-stage teams to organizations of 1,100+, across
              enterprise SaaS, developer tooling, gaming, advertising
              technology, GovTech, and AI-enabled environments. At every
              stage, the same work: translate vision into systems that hold,
              and build the organizations that can carry them.
            </p>

            <div>
              {roles.map((role) => (
                <div className="role-row reveal" key={role.company}>
                  <div>
                    <div className="role-company">{role.company}</div>
                    <div className="role-title">{role.title}</div>
                    <div className="role-period">{role.period}</div>
                  </div>
                  <div>
                    <p className="role-body">{role.body}</p>
                    <ul className="role-highlights">
                      {role.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                    {role.patents.length > 0 && (
                      <div style={{
                        marginTop: "1.5rem",
                        paddingTop: "1.2rem",
                        borderTop: "1px solid var(--ink-rule)",
                      }}>
                        <div style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.6rem",
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                          marginBottom: "0.8rem",
                        }}>
                          Patents
                        </div>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                          {role.patents.map((p) => (
                            <li key={p} style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.65rem",
                              letterSpacing: "0.04em",
                              color: "var(--ink-mid)",
                              paddingLeft: "1rem",
                              borderLeft: "1px solid var(--gold-dim)",
                              lineHeight: 1.6,
                            }}>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="distinctions">
              <div className="reveal">
                <div className="distinction-label">Scale of Leadership</div>
                <div className="distinction-num">Founding to 1,100+</div>
                <div className="distinction-note">
                  Engineering organizations led across every stage of growth
                </div>
              </div>
              <div className="reveal">
                <div className="distinction-label">Patents Granted</div>
                <div className="distinction-num">11 Patents</div>
                <div className="distinction-note">
                  AdTech · Platform Systems · Data Infrastructure · Personalization
                </div>
              </div>
              <div className="reveal">
                <div className="distinction-label">Industry Depth</div>
                <div className="distinction-num">6 Verticals</div>
                <div className="distinction-note">
                  SaaS · Gaming · AdTech · Developer Platform · GovTech · AI Systems
                </div>
              </div>
              <div className="reveal">
                <div className="distinction-label">Global Footprint</div>
                <div className="distinction-num">Global</div>
                <div className="distinction-note">
                  India · Poland · China · Ireland · UK · LATAM
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
