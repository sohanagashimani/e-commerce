import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-white text-xl font-bold">
          Home
        </Link>
        <div className="flex items-center">
          <Link
            to="/cart"
            className="text-white text-lg mr-6 hover:text-gray-200"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
