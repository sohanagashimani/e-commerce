import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./home.action.types";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_PRODUCTS_REQUEST,
      });
      const response = await fetch("https://fakestoreapi.com/products");
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        data: response.json(),
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        error: error,
      });
    }
  };
};
