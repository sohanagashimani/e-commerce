import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart, Home, ProductDetails } from "./modules";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
