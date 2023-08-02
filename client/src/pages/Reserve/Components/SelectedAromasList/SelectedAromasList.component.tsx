import Button from "../../../../Components/Button";
import {SelectedAromasContext} from "../../../../Context/SelectedAromas.context";
import Aroma from "../Aroma";
import "./SelectedAromasList.modules.scss";
import {ChangeEvent, useContext} from "react";
import {drawItemsFromArray} from "../../../../utils/drawItemsFromArray";
import {IAromaAndRatio} from "../../../../Models/AromaAndRatio.models";
import {CartContext} from "../../../../Context/Cart.context";
import {calculateMaxRatio, POST_liquid} from "../../Services/Reserve.service";
import RangeInput from "../../../../Components/RangeInput";

interface ISelectedAromasListProps {
    aromas: IAromaAndRatio[];
}

const SelectedAromasList: React.FC<ISelectedAromasListProps> = ({aromas}) => {
    const {
        selectedAromas,
        setSelectedAromas,
        MAX_SELECTED_AROMAS,
        updateAroma,
    } = useContext(SelectedAromasContext);
    const {addToCart, cart} = useContext(CartContext);

    const handleDrawClick = () =>
        setSelectedAromas(
            drawItemsFromArray(MAX_SELECTED_AROMAS - selectedAromas.length, aromas)
        );

    const handleOrderClick = async () => {
        const newLiquid = await POST_liquid(
            //TODO - pozbyć się harcode'ów
            selectedAromas.map((aroma) => ({id: aroma.id, ratio: 0.3})),
            60,
            3,
            {weightInMg: 600, vgPgRatio: "70/30", id: 1}
        );
        addToCart(newLiquid.data);
    };

    const onSliderChange = ({
                                target: {name, value, id},
                            }: ChangeEvent<HTMLInputElement>) => updateAroma(+id, name, +value);

    console.log(calculateMaxRatio(selectedAromas))

    return (
        <div className="selected-aromas">
            <div className="selected-aromas__list">
                {selectedAromas.map((aroma) => (
                    <Aroma
                        id={aroma.id}
                        flavour={aroma.attributes.flavour}
                        producent={aroma.attributes.producent}
                    />
                ))}
            </div>
            <Button text="Wylosuj aromaty" onClick={handleDrawClick}/>
            <div className="selected-aromas__ratio-picker">
                {selectedAromas.map((aroma, i) => (
                    <RangeInput
                        onChange={onSliderChange}
                        name="ratio"
                        label={aroma.attributes.flavour}
                        value={aroma.ratio}
                        id={aroma.id}
                        ordinalNumber={i + 1}
                        max={calculateMaxRatio(selectedAromas)}
                    />
                ))}
            </div>
            <Button
                text="Zamów liquid"
                onClick={handleOrderClick}
                disabled={!selectedAromas.length}
            />
        </div>
    );
};

export default SelectedAromasList;
