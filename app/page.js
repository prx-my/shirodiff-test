export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        background: "#ffffff",
        color: "#111111",
      }}
    >
      <h1 style={{ fontSize: "48px", margin: 0 }}>shiroDiff Test</h1>
      <p style={{ fontSize: "20px", margin: 0, color: "#444444" }}>
        Baseline version — nothing changed yet.
      </p>
      <button
        style={{
          padding: "12px 28px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          background: "#2563eb",
          color: "#ffffff",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </main>
  );
}
