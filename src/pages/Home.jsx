import useProduct from "../dynamic-data/useProduct";
import ProductCard from "../components/ProductCard";

function Home() {
  const { products, loading } = useProduct();

  if (loading) {
    return <h2>Loading Products...</h2>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;