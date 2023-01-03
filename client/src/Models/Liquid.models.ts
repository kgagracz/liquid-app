import { IAromaAndRatio } from "./AromaAndRatio.models";
import { IBase } from "./Base.models";
import { IStrapiAttributes } from "./Strapi.models";

export interface IAromaAndRatioItem {
  aroma: {
    data: IAromaAndRatio;
  };
  id: number;
  weightInMg: number;
}

export interface ILiquidAttributes extends IStrapiAttributes {
  active: boolean;
  aromasAndRatios: IAromaAndRatioItem[];
  base: IBase;
  description: string;
  price: number;
  sizeInMl: number;
  themeColor: string | null;
  nicotineStrength: number;
}

export interface ILiquid extends IStrapiAttributes {
  attributes: ILiquidAttributes;
  id: number;
}
