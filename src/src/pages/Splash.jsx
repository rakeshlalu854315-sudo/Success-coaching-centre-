import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }, []);

  return (
    <div style={{src/pages/Splash.jsx
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
