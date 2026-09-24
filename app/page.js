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
      <h1 style={{ fontSize: "48px", margin: 0, color: "#16a34a" }}>
        shiroDiff Test
      </h1>
      <p style={{ fontSize: "20px", margin: 0, color: "#444444" }}>
        Updated version — this is the visual change shiroDiff should catch.
      </p>
      <button
        style={{
          padding: "16px 36px",
          fontSize: "16px",
          borderRadius: "9999px",
          border: "none",
          background: "#16a34a",
          color: "#ffffff",
          cursor: "pointer",
        }}
      >
        Get Started Free
      </button>
    </main>
  );
}
