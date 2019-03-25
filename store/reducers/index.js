import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import coffeeReducer from "./coffeeReducer";

export default combineReducers({
  cartReducer: cartReducer,
  coffeeReducer: coffeeReducer
});
