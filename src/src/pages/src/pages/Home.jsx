export default function Home() {
  return (
    <div>

      <div style={{
        background: "#007bff",
        color: "white",
        padding: "15px",
        textAlign: "center",
        fontSize: "20px"
      }}>
        Success Coaching Center
      </div>

      <div style={{ padding: "20px" }}>
        <h3>Start Learning Today</h3>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px"
        }}>
          <div style={card}>Notes</div>
          <div style={card}>Tests</div>
          <div style={card}>Video Classes</div>
          <div style={card}>Results</div>
        </div>
      </div>

    </div>
  );
}

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
};
