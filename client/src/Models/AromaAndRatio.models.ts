import { IStrapiAttributes } from "./Strapi.models";

interface IAromaAndRatioAttributes extends IStrapiAttributes {
	flavour: string;
	producent: string;
}

export interface IAromaAndRatio {
	attributes: IAromaAndRatioAttributes;
	id: number;
}
