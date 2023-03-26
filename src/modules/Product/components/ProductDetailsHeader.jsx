import React from "react";

const ProductDetailsHeader = ({ product, handleAddToCart }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
      <div className="mb-4 md:mb-0">
        <h1 className="text-3xl font-medium text-gray-900">{product.title}</h1>
        <p className="text-gray-700 mt-2">{product.category}</p>
      </div>
      <div className="flex items-center">
        <span className="font-medium text-gray-900 text-lg mr-4">
          ${product.price}
        </span>
        <button
          className="bg-blue-500 w-32 hover:bg-blue-700 px-4 py-2 rounded-md text-white"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsHeader;
