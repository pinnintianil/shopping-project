import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", gap: "15px", alignItems: "center", borderBottom: "1px solid #ddd", padding: "10px 0" }}>
      <img src={item.image} alt={item.title} style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "8px" }} />
      <div style={{ flex: 1 }}>
        <p style={{ margin: 0 }}>{item.title}</p>
        <p style={{ margin: 0 }}>₹ {item.price}</p>
      </div>
      <button onClick={() => dispatch(removeFromCart(item.id))} style={{ background: "red", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}>
        Remove
      </button>
    </div>
  );
}
export default CartItem;