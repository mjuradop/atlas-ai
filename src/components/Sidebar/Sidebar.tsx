function Sidebar() {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1000,
        top: 20,
        left: 20,
        background: "white",
        padding: 16,
        borderRadius: 12,
      }}
    >
      <h2>🌍 Atlas AI</h2>
      <p>Ask the world.</p>
    </div>
  );
}

export default Sidebar;