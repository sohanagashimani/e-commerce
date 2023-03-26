import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCT,
} from "./home.action.types";

const initialProductsState = {
  loading: false,
  error: null,
  products: [],
  filteredProducts: [],
};
export const homeReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.products,
        filteredProducts: action.products,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        products: [],
      };
    case SEARCH_PRODUCT:
      return {
        ...state,
        filteredProducts: state.products.filter((product) => {
          return (
            product.title
              .toLowerCase()
              .includes(action.searchText.toLowerCase()) ||
            product.category
              .toLowerCase()
              .includes(action.searchText.toLowerCase())
          );
        }),
      };
    default:
      return state;
  }
};
