import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/cartPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;