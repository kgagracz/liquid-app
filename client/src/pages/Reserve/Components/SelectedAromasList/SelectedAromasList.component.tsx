import Button from "../../../../Components/Button";
import { SelectedAromasContext } from "../../../../Context/SelectedAromas.context";
import Aroma from "../Aroma";
import "./SelectedAromasList.modules.scss";
import { useContext } from "react";

interface ISelectedAromasListProps {}

const SelectedAromasList = () => {
  const { selectedAromas } = useContext(SelectedAromasContext);

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
      <Button text="Wylosuj aromat" onClick={() => console.log("losuj")} />
    </div>
  );
};

export default SelectedAromasList;
