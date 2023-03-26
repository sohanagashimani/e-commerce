import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./components/CartItem";
import OrderSummary from "./components/OrderSummary";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cartReducer.items);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 py-12 md:h-[calc(100vh-4rem)] h-full">
      <div className="container px-6 mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-8/12 mb-8 md:mb-0 md:mr-3 md:h-[calc(100vh-16rem)] overflow-y-auto">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <OrderSummary total={total} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
