import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
function Cart() {
  const items = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((a, b) => a + b.price, 0);
  if (items.length === 0) return (
    <div className="text-center mt-20">
      <h2 className="text-2xl font-bold">Cart is Empty 🛒</h2>
      <Link to="/" className="bg-blue-500 text-white px-5 py-2 rounded inline-block mt-3">Shop Now</Link>
    </div>
  );
  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold">My Cart ({items.length})</h2>
      <button onClick={() => dispatch(clearCart())} className="bg-red-500 text-white px-3 py-1 rounded my-3">Clear Cart</button>
      {items.map((item) => (
        <div key={item.id} className="flex justify-between items-center border p-3 rounded mb-2">
          <div className="flex gap-3 items-center">
            <img src={item.image} className="w-16 h-16 object-cover rounded" />
            <div><p className="font-bold">{item.name}</p><p>Rs. {item.price}</p></div>
          </div>
          <button onClick={() => dispatch(removeFromCart(item.id))} className="bg-gray-200 px-3 py-1 rounded">Remove</button>
        </div>
      ))}
      <div className="flex justify-between items-center mt-4">
        <h3 className="text-xl font-bold">Total: Rs. {total}</h3>
        <button className="bg-green-500 text-white px-6 py-2 rounded">Checkout</button>
      </div>
    </div>
  );
}
export default Cart;