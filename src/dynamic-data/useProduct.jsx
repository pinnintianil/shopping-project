import { useState, useEffect } from "react";
import { products as allProducts } from "./productServer";

function useProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts(allProducts);
    setLoading(false);
  }, []);

  return { products, loading };
}

export default useProduct;