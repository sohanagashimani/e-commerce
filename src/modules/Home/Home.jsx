import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, When } from "../../@components";
import ProductCard from "./components/ProductCard";
import { fetchProducts } from "./home.actions";

const Home = () => {
  const dispatch = useDispatch();
  const { filteredProducts, loading } = useSelector(
    (state) => state.homeReducer
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="container mx-auto py-4">
      <When isTrue={loading}>
        <div className="h-screen w-screen flex flex-row items-center justify-center">
          <div className="flex flex-col">
            <Spinner spinning={loading} />
          </div>
        </div>
      </When>
      <When isTrue={!loading}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
          {filteredProducts?.map((product) => (
            <div key={product.id} className="flex justify-center mb-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </When>
    </div>
  );
};

export default Home;
