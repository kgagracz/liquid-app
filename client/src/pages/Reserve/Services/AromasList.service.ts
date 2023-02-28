import qs from "qs";
import { IAromaAndRatio } from "../../../Models/AromaAndRatio.models";
import { IStrapiResponse } from "../../../Models/Strapi.models";
import { API_ADDRESS } from "../../../utils/urls";

export const fetchAromas = async (archived: boolean = false) => {
  const aromasQuery = qs.stringify({});

  const res = await fetch(`${API_ADDRESS}/aromas?${aromasQuery}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
  const data: IStrapiResponse<IAromaAndRatio> = await res.json();

  return data.data;
};
