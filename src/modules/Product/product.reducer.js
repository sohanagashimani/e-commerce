import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from "./product.action.types";

const initialProductState = {
  loading: false,
  error: null,
  data: null,
};

export const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
};
