import * as actionTypes from "./actionTypes";

import axios from "axios";

export const setCoffeeShopsLoading = () => {
  return {
    type: actionTypes.COFFEESHOPS_LOADING
  };
};

export const getCoffeeShops = () => {
  return async dispatch => {
    try {
      dispatch(setCoffeeShopsLoading());
      const res = await axios.get("http://coffee.q8fawazo.me/api/?format=json");
      const coffeeShops = res.data;
      dispatch({
        type: actionTypes.GET_COFFEESHOPS,
        payload: coffeeShops
      });
    } catch (error) {
      console.error(error);
    }
  };
};
