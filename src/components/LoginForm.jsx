import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div style={{ width: "250px", margin: "50px auto", display: "flex", flexDirection: "column", gap: "12px", textAlign: "center" }}>
      <input placeholder="Email" style={{ padding: "10px", border: "1px solid black" }} />
      <input type="password" placeholder="Password" style={{ padding: "10px", border: "1px solid black" }} />
      <button onClick={() => navigate("/")} style={{ padding: "10px" }}>Login</button>
    </div>
  );
}
export default Login;