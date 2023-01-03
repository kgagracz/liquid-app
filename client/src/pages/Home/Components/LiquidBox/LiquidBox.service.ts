import { IAromaAndRatioItem } from "../../../../Models/Liquid.models";

export const createLiquidName = (aromas: IAromaAndRatioItem[]): string => {
  let title = "";
  aromas.map((aroma) => (title += `${aroma.aroma.data.attributes.flavour} - `));
  return title;
};
