import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Navbar />

      {/* App.jsx lo Banner Image */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
          alt="Shopping Banner"
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
        <h1 style={{ textAlign: "center" }}>Welcome to My Shopping Website 🔥</h1>
        <p style={{ textAlign: "center" }}>Best Clothes - Best Price - Best Quality</p>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;