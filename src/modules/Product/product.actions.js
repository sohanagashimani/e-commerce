import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from "./product.action.types";

export const fetchProduct = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_PRODUCT_REQUEST,
      });
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await response.json();
      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        product,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCT_FAILURE,
        error: error,
      });
    }
  };
};
