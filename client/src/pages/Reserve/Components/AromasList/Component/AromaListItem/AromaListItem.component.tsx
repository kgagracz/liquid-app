import Button from "../../../../../../Components/Button";
import { IAromaAndRatio } from "../../../../../../Models/AromaAndRatio.models";
import Aroma from "../../../Aroma/Aroma.component";
import "./AromaListItem.modules.scss";

interface IAromaListItemProps {
  aroma: IAromaAndRatio;
  handleAromaClick: (aroma: IAromaAndRatio) => void;
  isSelected: boolean;
}

const AromaListItem: React.FC<IAromaListItemProps> = ({
  aroma,
  handleAromaClick,
  isSelected,
}) => {
  return (
    <div className="aroma-list-item">
      <Aroma id={aroma.id} />
      <p>{aroma.attributes.flavour}</p>
      <p>{aroma.attributes.producent}</p>
      <Button
        active={isSelected}
        text={!isSelected ? "Wybierz" : "Usuń"}
        onClick={() => handleAromaClick(aroma)}
      />
    </div>
  );
};

export default AromaListItem;
