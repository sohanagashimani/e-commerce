import { homeReducer } from "./Home/home.reducer";
import { cartReducer } from "./Cart/cart.reducer";
import { productReducer } from "./Product/product.reducer";
import { combineReducers } from "redux";
export default combineReducers({
  homeReducer,
  cartReducer,
  productReducer,
});
