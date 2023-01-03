import { API_ADDRESS } from "../../../../utils/urls";
import qs from "qs";
import { IStrapiResponse } from "../../../../Models/Strapi.models";
import { ILiquid } from "../../../../Models/Liquid.models";

const liquidsQuery = qs.stringify({
  populate: {
    aromasAndRatios: {
      populate: {
        aroma: { populate: "*" },
      },
    },
    base: { populate: "*" },
  },
});

export const fetchLiquids = async () => {
  const res = await fetch(`${API_ADDRESS}/liquids?${liquidsQuery}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
  const data: IStrapiResponse<ILiquid> = await res.json();
  return data.data;
};
