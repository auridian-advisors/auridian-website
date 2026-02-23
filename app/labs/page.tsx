export const metadata = {
  title: "Labs | Auridian",
  description: "Small experiments and prototypes.",
};

export default function LabsPage() {
  return (
    <main>
      <h1>Labs</h1>
      <p>Prototypes and small web apps.</p>

      <h2>Apps</h2>
      <ul>
        <li><a href="/labs/apps/calories">Food Calorie App</a></li>
        <li><a href="/labs/apps/chess">Chess</a></li>
      </ul>

      <h2>Private</h2>
      <ul>
        <li><a href="/labs/private">Private Labs</a></li>
      </ul>
    </main>
  );
}
