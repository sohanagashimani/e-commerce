import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { toastConfig } from "../../../constants/toast.config";
import { changeQuantity, removeFromCart } from "../cart.actions";
import Button from "./Button";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleChangeQuantity = ({ item, quantity }) => {
    dispatch(changeQuantity({ ...item, quantity }));
  };
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="flex bg-white flex-col md:flex-row border rounded-md p-4 mb-4 mr-3">
      <div className="mr-4">
        <img
          className="object-contain w-32 h-32 rounded-md"
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="flex-auto md:ml-4">
        <h2 className="font-medium text-lg mb-2">{item.title}</h2>
        <p className="text-gray-500 text-base mb-2">{item.category}</p>
        <div className="flex items-center mb-2">
          <Button
            onClick={() => {
              if (item.quantity > 1)
                handleChangeQuantity({ item, quantity: item.quantity - 1 });
              else handleRemoveItem(item.id);
            }}
            buttonText="-"
          />
          <p className="text-lg font-medium mr-2">{item.quantity}</p>
          <Button
            onClick={() =>
              handleChangeQuantity({ item, quantity: item.quantity + 1 })
            }
            buttonText="+"
          />
          <button
            className="text-red-500 font-medium hover:underline ml-auto"
            onClick={() => {
              handleRemoveItem(item.id);
              toast.success("Item removed", toastConfig);
            }}
          >
            Remove
          </button>
        </div>
        <p className="text-lg font-medium">${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
