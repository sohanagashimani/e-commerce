import {
  ADD_TO_CART,
  CHANGE_QUANTITY,
  REMOVE_FROM_CART,
} from "./cart.action.types";

export const addToCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };
};
export const removeFromCart = (id) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    });
  };
};
export const changeQuantity = (item) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_QUANTITY,
      payload: {
        item,
      },
    });
  };
};
