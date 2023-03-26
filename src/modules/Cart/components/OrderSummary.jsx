import React from "react";

const OrderSummary = ({ total }) => {
  return (
    <div className="w-full md:w-4/12">
      <div className="bg-white rounded-md shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-4">
          <span className="font-bold">Subtotal:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="font-bold">Shipping:</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="font-bold">Estimated Tax:</span>
          <span>${(total * 0.1).toFixed(2)}</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <span className="font-bold">Total:</span>
          <span>${(total * 1.1).toFixed(2)}</span>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
