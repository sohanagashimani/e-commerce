import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart, Home } from "./modules";

function App() {
  return (
    <Router>
      <div>
        <h1>My E-Commerce Store</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
