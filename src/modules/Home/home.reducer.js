import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./home.action.types";

const initialProductsState = {
  loading: false,
  error: null,
  data: [],
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
        data: action.payload,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};
