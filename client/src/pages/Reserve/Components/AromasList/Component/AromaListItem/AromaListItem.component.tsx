import Button from "../../../../../../Components/Button";
import { IAromaAndRatio } from "../../../../../../Models/AromaAndRatio.models";
import Aroma from "../../../Aroma/Aroma.component";

interface IAromaListItemProps {
  aroma: IAromaAndRatio;
  addAroma: (aroma: IAromaAndRatio) => void;
  isSelected: boolean;
}

const AromaListItem: React.FC<IAromaListItemProps> = ({
  aroma,
  addAroma,
  isSelected,
}) => {
  return (
    <div>
      <Aroma id={aroma.id} />
      <p>{aroma.attributes.flavour}</p>
      <p>{aroma.attributes.producent}</p>
      <Button
        active={isSelected}
        text={!isSelected ? "Wybierz" : "Wybrano"}
        onClick={() => addAroma(aroma)}
      />
    </div>
  );
};

export default AromaListItem;
