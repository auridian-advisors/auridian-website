// app/labs/private/page.tsx
import Link from "next/link";

type LabApp = {
  title: string;
  description: string;
  href: string;
  status?: "planned" | "in-progress" | "live";
};

const APPS: LabApp[] = [
  {
    title: "Food Calorie App",
    description: "Track calories quickly with a minimal UI. (placeholder)",
    href: "/labs/private/calorie",
    status: "planned",
  },
  {
    title: "Chess",
    description: "Sandbox for chess-related tools and experiments. (placeholder)",
    href: "/labs/private/chess",
    status: "planned",
  },
];

export default function LabsPrivateHome() {
  return (
    <main className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div style={{ maxWidth: 880 }}>
        <div style={{ marginBottom: "2rem" }}>
          <div className="mono" style={{ color: "var(--muted)" }}>
            Labs • Private
          </div>
          <h1 style={{ marginTop: "0.5rem" }}>Private Lab Apps</h1>
          <p style={{ marginTop: "0.75rem", color: "var(--muted)", lineHeight: 1.6 }}>
            Internal sandbox for experiments and small apps. This area is protected.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
          }}
        >
          {APPS.map((app) => (
            <Link
              key={app.href}
              href={app.href}
              style={{
                display: "block",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "1.25rem",
                textDecoration: "none",
                background: "var(--panel)",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <div style={{ fontWeight: 600 }}>{app.title}</div>
                {app.status && (
                  <span
                    className="mono"
                    style={{
                      fontSize: 12,
                      color: "var(--muted)",
                      border: "1px solid var(--border)",
                      borderRadius: 999,
                      padding: "2px 10px",
                    }}
                  >
                    {app.status}
                  </span>
                )}
              </div>
              <div style={{ marginTop: 8, color: "var(--muted)", lineHeight: 1.55 }}>
                {app.description}
              </div>
              <div className="mono" style={{ marginTop: 14, fontSize: 12, color: "var(--gold)" }}>
                Open →
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: "2.5rem", borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
          <p className="mono" style={{ color: "var(--muted)", fontSize: 12, lineHeight: 1.6 }}>
            Tip: add new apps under <code>/app/labs/private/&lt;app&gt;/page.tsx</code> and link them here.
          </p>
        </div>
      </div>
    </main>
  );
}