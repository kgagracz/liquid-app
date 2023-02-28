import { API_ADDRESS } from "../../../../utils/urls";
import qs from "qs";
import { IStrapiResponse } from "../../../../Models/Strapi.models";
import { ILiquid } from "../../../../Models/Liquid.models";

export const fetchLiquids = async (archived: boolean = false) => {
  const liquidsQuery = qs.stringify({
    filters: {
      active: !archived,
    },
    populate: {
      aromasAndRatios: {
        populate: {
          aroma: { populate: "*" },
        },
      },
      base: { populate: "*" },
    },
  });
  const res = await fetch(`${API_ADDRESS}/liquids?${liquidsQuery}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
  const data: IStrapiResponse<ILiquid> = await res.json();

  return data.data;
};
