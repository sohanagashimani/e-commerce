import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCT,
} from "./home.action.types";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_PRODUCTS_REQUEST,
      });
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        products,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        error: error,
      });
    }
  };
};
export const searchProduct = (searchText) => {
  return (dispatch) => {
    if (searchText.length < 3) {
      dispatch({
        type: SEARCH_PRODUCT,
        searchText: "",
      });
    } else {
      dispatch({
        type: SEARCH_PRODUCT,
        searchText,
      });
    }
  };
};
