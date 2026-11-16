import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", width: "220px" }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: "220px", objectFit: "cover" }}
      />
      <h3>{product.name}</h3>
      <p>Rs. {product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>
        Add To Cart
      </button>
    </div>
  );
}
export default ProductCard;