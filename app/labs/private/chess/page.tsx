export default function ChessPage() {
  return (
    <main style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/chess_10.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
        title="Chess"
      />
    </main>
  );
}
