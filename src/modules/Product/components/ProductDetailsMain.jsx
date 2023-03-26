import React from "react";

const ProductDetailsMain = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="mb-8 md:mb-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto max-h-96 object-fill"
        />
      </div>

      <div className="md:w-1/2 md:pl-8">
        <p className="text-gray-700 mb-8">{product.description}</p>
        <h3 className="text-gray-900 font-medium text-xl mb-4">Details</h3>
        <ul className="text-gray-700 mb-8">
          <li className="mb-2">
            <span className="font-medium">Category:</span> {product.category}
          </li>
          <li className="mb-2">
            <span className="font-medium">Rating:</span> {product.rating.rate} (
            {product.rating.count} reviews)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailsMain;
