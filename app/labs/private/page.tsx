export const metadata = {
  title: "Private Labs | Auridian",
  robots: { index: false, follow: false },
};

export default function PrivateLabsPage() {
  return (
    <main>
      <h1>Private Labs</h1>
      <p>Restricted area.</p>
      <ul>
        <li><a href="/labs/private/edison">Edison</a></li>
      </ul>
      <p><a href="/labs">Back to Labs</a></p>
    </main>
  );
}
