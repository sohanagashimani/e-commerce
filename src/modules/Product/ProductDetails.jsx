import { isNil } from "ramda";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner, When } from "../../@components";
import { addToCart } from "../Cart/cart.actions";
import { fetchProduct } from "./product.actions";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { product, loading } = useSelector((state) => state.productReducer);
  useEffect(() => {
    if (!product) {
      dispatch(fetchProduct(id));
    }
  }, [dispatch, id, product, loading]);
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <>
      <When isTrue={loading}>
        <div className="h-screen w-screen flex flex-row items-center justify-center">
          <div className="flex flex-col">
            <Spinner spinning={loading} />
          </div>
        </div>
      </When>
      <When isTrue={!loading && !isNil(product)}>
        {product && (
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div className="mb-4 md:mb-0">
                <h1 className="text-3xl font-medium text-gray-900">
                  {product.title}
                </h1>
                <p className="text-gray-700 mt-2">{product.category}</p>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-900 text-lg mr-4">
                  ${product.price}
                </span>
                <button
                  className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md text-white"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-gray-700 mb-8">{product.description}</p>
                <h3 className="text-gray-900 font-medium text-xl mb-4">
                  Details
                </h3>
                <ul className="text-gray-700 mb-8">
                  <li className="mb-2">
                    <span className="font-medium">Category:</span>{" "}
                    {product.category}
                  </li>
                  <li className="mb-2">
                    <span className="font-medium">Rating:</span>{" "}
                    {product.rating.rate} ({product.rating.count} reviews)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </When>
    </>
  );
};

export default ProductDetails;
