import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProduct } from "../../Product/product.actions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleViewClick = () => {
    dispatch(fetchProduct(product.id));
    navigate(`/product/${product.id}`);
  };
  return (
    <div className="border rounded-lg overflow-hidden shadow-md flex flex-col w-full md:w-72">
      <img
        src={product.image}
        alt={product.title}
        className="h-44 object-cover w-full"
      />
      <div className="p-4">
        <h3 className="font-medium mb-2 text-lg">{product.title}</h3>
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-900 text-lg">
            ${product.price}
          </span>
          <button
            className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md text-white"
            onClick={handleViewClick}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
