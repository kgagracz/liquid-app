import Button from "../../../../Components/Button";
import { SelectedAromasContext } from "../../../../Context/SelectedAromas.context";
import Aroma from "../Aroma";
import "./SelectedAromasList.modules.scss";
import { useContext } from "react";

interface ISelectedAromasListProps {}

const SelectedAromasList = () => {
  const { selectedAromas } = useContext(SelectedAromasContext);
  console.log(selectedAromas);
  return (
    <div className="selected-aromas-list">
      {selectedAromas.map((aroma) => (
        <Aroma
          flavour={aroma.attributes.flavour}
          producent={aroma.attributes.producent}
        />
      ))}
      <Button text="Wylosuj aromat" onClick={() => console.log("losuj")} />
    </div>
  );
};

export default SelectedAromasList;
