import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="border p-4 rounded text-center">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h3 className="font-bold">{product.name}</h3>
      <p>Rs. {product.price}</p>
      <button 
        onClick={() => dispatch(addToCart(product))}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Add To Cart
      </button>
    </div>
  );
}
export default ProductCard;
