import { ILiquid } from "../../Models/Liquid.models";

const PROMOTION = 2;

export const getCartValue = (cart: ILiquid[]) => {
  let price = {
    base: 0,
    sale: 0,
  };
  cart.forEach((item) => {
    price.base += item.attributes.price;
    if (cart.length > 1) price.sale += item.attributes.price - PROMOTION;
  });
  return price;
};
