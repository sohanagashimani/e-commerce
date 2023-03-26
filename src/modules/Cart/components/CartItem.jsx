import React from "react";
import { useDispatch } from "react-redux";
import { changeQuantity, removeFromCart } from "../cart.actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleChangeQuantity = ({ item, quantity }) => {
    dispatch(changeQuantity({ ...item, quantity }));
  };
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="flex flex-col md:flex-row border rounded-md p-4 mb-4">
      <div className="flex-none mr-4">
        <img
          className="object-contain w-48 h-48 md:w-32 md:h-32 rounded-md"
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="flex-auto md:ml-4">
        <h2 className="font-medium text-lg mb-2">{item.title}</h2>
        <p className="text-gray-500 text-base mb-2">{item.category}</p>
        <div className="flex items-center mb-2">
          <button
            className="border rounded-md text-lg font-medium px-2 py-1 mr-2 hover:bg-gray-200"
            onClick={() => {
              if (item.quantity > 1)
                handleChangeQuantity({ item, quantity: item.quantity - 1 });
              else handleRemoveItem(item.id);
            }}
          >
            -
          </button>
          <p className="text-lg font-medium mr-2">{item.quantity}</p>
          <button
            className="border rounded-md text-lg font-medium px-2 py-1 mr-2 hover:bg-gray-200"
            onClick={() =>
              handleChangeQuantity({ item, quantity: item.quantity + 1 })
            }
          >
            +
          </button>
          <button
            className="text-red-500 font-medium hover:underline ml-auto"
            onClick={() => handleRemoveItem(item.id)}
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
