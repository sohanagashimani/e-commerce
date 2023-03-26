import { Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { When } from "../../@components";
import { searchProduct } from "../Home/home.actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const handleOnChange = (e) => {
    dispatch(searchProduct(e.target.value));
  };
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className={`text-sm md:text-lg rounded-md px-3 md:px-4 py-1 md:py-2 w-16 md:w-20 text-center ${
            location.pathname === "/e-commerce"
              ? "font-bold bg-white"
              : "bg-gray-200"
          }`}
        >
          Home
        </Link>
        <When isTrue={location.pathname === "/e-commerce"}>
          <div className="w-2/4">
            <Input
              placeholder="Search products"
              allowClear
              onChange={handleOnChange}
              className=" md:py-2"
            />
          </div>
        </When>
        <Link
          to="/cart"
          className={`text-sm md:text-lg rounded-md px-3 md:px-4 py-1 md:py-2  w-16 md:w-20 text-center ${
            location.pathname === "/e-commerce/cart"
              ? "font-bold bg-white"
              : "bg-gray-200"
          }`}
        >
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
