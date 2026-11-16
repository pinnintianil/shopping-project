import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price, 0);

  if (items.length === 0) return <h2 style={{ padding: "20px" }}>Cart Empty 🛒</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3>Total: ₹ {total}</h3>
    </div>
  );
}
export default Cart;