import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Spinner, When } from "../../@components";
import { toastConfig } from "../../constants/toast.config";
import { addToCart } from "../Cart/cart.actions";
import ProductDetailsHeader from "./components/ProductDetailsHeader";
import ProductDetailsMain from "./components/ProductDetailsMain";
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
    toast.success("Item added to cart", toastConfig);
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
      <When isTrue={!loading}>
        {product && (
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <ProductDetailsHeader {...{ product, handleAddToCart }} />
            <ProductDetailsMain {...{ product }} />
          </div>
        )}
      </When>
    </>
  );
};

export default ProductDetails;
