import {API_ADDRESS} from "../../../utils/urls";
import {IBase} from "../../../Models/Base.models";

const calculateWeightOfAroma = (baseWeightInMg: number, aromaRatio: number) => {
    // aromatu powinno być między 5% a 10%
    const AROMAS_TO_BASE_RATIO = 0.07;
    return baseWeightInMg * AROMAS_TO_BASE_RATIO * aromaRatio;
};

export const POST_liquid = async (
    aromasIdsAndRatio,
    sizeInMl: number,
    nicotineStrength: number,
    base: IBase
) => {
    fetch(`${API_ADDRESS}/liquid`, {
        method: "POST",
        body: JSON.stringify({
            data: {
                active: false,
                sizeInMl,
                price: 17,
                nicotineStrength,
                aromasAndRatios: aromasIdsAndRatio.map((aroma) => ({
                    aroma: {
                        disconnect: [],
                        connect: [{id: aroma.id}],
                        weightInMg: calculateWeightOfAroma(base.weightInMg, aroma.ratio),
                    },
                })),
                base: {
                    weightInMg: base.weightInMg,
                    vgPgRatio: base.vgPgRatio
                },
            },
        }),
    });
};
