import { HashRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Cart, Home, ProductDetails } from "./modules";
import Navbar from "./modules/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const baseUrl = process.env.REACT_APP_BASE_URL || "/";
  return (
    <HashRouter basename={baseUrl}>
      <div>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
