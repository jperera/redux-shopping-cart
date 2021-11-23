import { CHECKOUT_SUCCESS } from "../constants";

export const checkout = (card) => {
  return {
    type: CHECKOUT_SUCCESS,
    card
  };
}