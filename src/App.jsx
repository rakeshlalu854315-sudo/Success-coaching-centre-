import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Splash
function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }, []);

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right, #1e90ff, #007bff)",
      color: "white",
      flexDirection: "column"
    }}>
      <h1>🎓</h1>
      <h2>SUCCESS Coaching Center</h2>
    </div>
  );
}

// Home
function Home() {
  return (
    <div>
      <div style={{
        background: "#007bff",
        color: "white",
        padding: "15px",
        textAlign: "center"
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

// Main App
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
