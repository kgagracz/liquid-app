import Button from "../../../../../../Components/Button";
import { IAromaAndRatio } from "../../../../../../Models/AromaAndRatio.models";
import Aroma from "../../../Aroma/Aroma.component";

interface IAromaListItemProps {
  aroma: IAromaAndRatio;
  addAroma: (aroma: IAromaAndRatio) => void;
}

const AromaListItem: React.FC<IAromaListItemProps> = ({ aroma, addAroma }) => {
  return (
    <div>
      <Aroma />
      <p>{aroma.attributes.flavour}</p>
      <p>{aroma.attributes.producent}</p>
      <Button text="Wybierz" onClick={() => addAroma(aroma)} />
    </div>
  );
};

export default AromaListItem;
