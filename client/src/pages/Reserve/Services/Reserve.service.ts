import { API_ADDRESS } from "../../../utils/urls";
import { IBase } from "../../../Models/Base.models";
import { ILiquid } from "../../../Models/Liquid.models";
import { AromaIdAndRatio } from "../Models/AromaIdAndRatio";
import qs from "qs";
import { IAromaAndRatio } from "../../../Models/AromaAndRatio.models";

const calculateWeightOfAroma = (baseWeightInMg: number, aromaRatio: number) => {
  // aromatu powinno być między 5% a 10%
  const AROMAS_TO_BASE_RATIO = 0.07;
  return baseWeightInMg * AROMAS_TO_BASE_RATIO * aromaRatio;
};

export const POST_liquid = async (
  aromasIdsAndRatio: AromaIdAndRatio[],
  sizeInMl: number,
  nicotineStrength: number,
  base: IBase
) => {
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
  const res = await fetch(`${API_ADDRESS}/liquids?${liquidsQuery}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        active: false,
        sizeInMl,
        price: 17,
        nicotineStrength,
        description: `Liquid zrobiony na zamówienie`,
        aromasAndRatios: aromasIdsAndRatio.map((aroma) => ({
          aroma: {
            disconnect: [],
            connect: [{ id: aroma.id }],
          },
          weightInMg: calculateWeightOfAroma(base.weightInMg, aroma.ratio),
        })),
        base: {
          weightInMg: base.weightInMg,
          vgPgRatio: base.vgPgRatio,
        },
      },
    }),
  });
  return res.json();
};

export const POST_order = async (
  liquidsIds: ILiquid["id"][],
  userEmail: string
) =>
  fetch(`${API_ADDRESS}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        liquids: liquidsIds.map((id) => ({ id })),
        userEmail,
      },
    }),
  });

export const calculateMaxRatio = (
  selectedAromasAndRatios: IAromaAndRatio[]
) => {
  let currentRatio = 0;
  selectedAromasAndRatios.forEach(
    (aroma) => (currentRatio += aroma.ratio ?? 0)
  );
  return 100 - currentRatio;
};
