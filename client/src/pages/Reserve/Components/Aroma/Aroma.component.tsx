import "./Aroma.modules.scss";
import { ReactComponent as CloseIcon } from "../../../../Icons/close.svg";
import { useContext } from "react";
import { SelectedAromasContext } from "../../../../Context/SelectedAromas.context";
import { IAromaAndRatio } from "../../../../Models/AromaAndRatio.models";

interface IAromaProps {
  flavour?: string;
  producent?: string;
  id?: IAromaAndRatio["id"];
}

const Aroma: React.FC<IAromaProps> = ({ flavour, producent, id }) => {
  const { removeAroma } = useContext(SelectedAromasContext);
  const handleRemove = () => id && removeAroma(id);
  return (
    <div className="aroma">
      {id && (
        <span onClick={handleRemove} className="aroma__close-icon">
          <CloseIcon />
        </span>
      )}
      {flavour && <p>{flavour}</p>}
      {producent && <p>{producent}</p>}
    </div>
  );
};

export default Aroma;
