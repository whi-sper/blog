export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div
        style={{
          lineHeight: "56px",
          textAlign: "center",
          background: "#fff",
          borderBottom: "1px solid #ccc",
        }}
      >
        <h1>header</h1>
      </div>
      <div style={{ flex: 1, display: "flex" }}>
        <div
          style={{
            width: 256,
            background: "#fff",
            borderRight: "1px solid #ccc",
            textAlign: "center",
            lineHeight: "256px",
          }}
        >
          <h1>side</h1>
        </div>
        <div style={{ flex: 1, background: "#fafafa", padding: 50 }}>
          {children}
        </div>
      </div>
    </div>
  );
}
