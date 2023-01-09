import { ILiquid } from "../../Models/Liquid.models";

export const getCartValue = (cart: ILiquid[]) => {
  let price = 0;
  cart.forEach((item) => (price += item.attributes.price));
  return price;
};
