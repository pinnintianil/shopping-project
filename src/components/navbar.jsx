import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector((state) => state.cart.items);
  return (
    <div style={{ display: "flex", justifyContent: "space-between", background: "black", color: "white", padding: "12px 20px" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Anil Fashion</Link>
      <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>Cart ({items.length})</Link>
    </div>
  );
}
export default Navbar;