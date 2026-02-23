import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a strategic conversation with Auridian. Direct, personal engagement for founders and technical leaders navigating consequential platform and product decisions.",
  openGraph: {
    title: "Contact · Auridian",
    description:
      "Start a strategic conversation. Direct, personal engagement for founders and technical leaders.",
  },
};

export default function Contact() {
  return (
    <>
      <Nav />
      <RevealObserver />
      <main className="page-wrap">

        <section className="page-hero">
          <div className="container">
            <span className="eyebrow eyebrow-gold page-hero-eyebrow reveal">
              Contact
            </span>
            <h1 className="display page-hero-headline reveal">
              Start a Strategic<br />
              <em>Conversation.</em>
            </h1>
          </div>
        </section>

        <section className="page-body">
          <div className="container">
            <div className="contact-grid">

              {/* Left — intro + contact methods */}
              <div>
                <div className="contact-intro reveal">
                  <p>
                    Every Auridian engagement begins with a direct
                    conversation — personal, substantive, and focused
                    on your specific challenge. Reach out by email or
                    schedule a call and we'll take it from there.
                  </p>
                  <p>
                    Auridian works with founders, technical executives,
                    and enterprise teams navigating consequential product
                    and platform decisions. Engagements are selective and
                    kept intentionally limited — to ensure the work
                    always gets the attention it deserves.
                  </p>
                </div>

                <div className="contact-methods reveal">
                  <div>
                    <div className="contact-method-label">Primary — Email</div>
                    <a
                      href="mailto:vernonh@auridian.io"
                      className="contact-method-value"
                    >
                      vernonh@auridian.io
                    </a>
                    <div className="contact-method-note">
                      Preferred. Every response is personal.
                    </div>
                  </div>
                  <div>
                    <div className="contact-method-label">Schedule a Call</div>
                    <a
                      href="https://calendly.com/vernonh/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-method-value"
                    >
                      calendly.com/vernonh/30min
                    </a>
                    <div className="contact-method-note">
                      30-minute introductory calls. Book directly.
                    </div>
                  </div>
                  <div>
                    <div className="contact-method-label">LinkedIn</div>
                    <a
                      href="https://www.linkedin.com/in/vernonh/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-method-value"
                    >
                      linkedin.com/in/vernonh
                    </a>
                    <div className="contact-method-note">
                      Connect directly on LinkedIn.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — guidance panel */}
              <div className="contact-panel reveal">
                <div className="contact-panel-label">
                  What to include in your message
                </div>
                <div className="contact-panel-items">
                  {[
                    "A brief description of your organization and where you are in the journey",
                    "The core challenge or platform decision you are navigating",
                    "The outcome you are working toward and your timeline",
                    "Why this decision matters to your business right now",
                  ].map((item, i) => (
                    <div className="contact-panel-item" key={i}>
                      <span className="contact-item-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="contact-item-text">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="contact-panel-note">
                  Every serious inquiry receives a thoughtful, personal
                  response. The conversation is always the starting point —
                  and often the most valuable part.
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
