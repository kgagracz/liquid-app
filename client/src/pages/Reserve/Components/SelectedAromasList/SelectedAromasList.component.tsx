import Button from "../../../../Components/Button";
import { SelectedAromasContext } from "../../../../Context/SelectedAromas.context";
import Aroma from "../Aroma";
import "./SelectedAromasList.modules.scss";
import { useContext } from "react";
import { drawItemsFromArray } from "../../../../utils/drawItemsFromArray";
import { IAromaAndRatio } from "../../../../Models/AromaAndRatio.models";

interface ISelectedAromasListProps {
  aromas: IAromaAndRatio[];
}

const SelectedAromasList: React.FC<ISelectedAromasListProps> = ({ aromas }) => {
  const { selectedAromas, setSelectedAromas, MAX_SELECTED_AROMAS } = useContext(
    SelectedAromasContext
  );

  const handleDrawClick = () =>
    setSelectedAromas(
      drawItemsFromArray(MAX_SELECTED_AROMAS - selectedAromas.length, aromas)
    );

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
      <Button text="Wylosuj aromaty" onClick={handleDrawClick} />
    </div>
  );
};

export default SelectedAromasList;
