import { ChangeEvent, useEffect, useState, useContext } from "react";
import { SelectedAromasContext } from "../../../../Context/SelectedAromas.context";
import { IAromaAndRatio } from "../../../../Models/AromaAndRatio.models";
import { fetchAromas } from "../../Services/AromasList.service";
import "./AromasList.modules.scss";
import AromaListItem from "./Component/AromaListItem";

const AromasList = () => {
  const [aromas, setAromas] = useState<IAromaAndRatio[]>([]);
  const [filteredAromas, setFilteredAromas] = useState<IAromaAndRatio[]>([]);
  const { selectedAromas, addAroma, removeAroma } = useContext(
    SelectedAromasContext
  );

  useEffect(() => {
    (async () => {
      const aromas = await fetchAromas();
      setAromas(aromas);
      setFilteredAromas(aromas);
    })();
  }, []);

  const filter = (e: ChangeEvent<HTMLInputElement>) =>
    setFilteredAromas(
      aromas.filter(
        (aroma) =>
          aroma.attributes.flavour.includes(e.target.value) ||
          aroma.attributes.producent.includes(e.target.value)
      )
    );

  return (
    <div className="aromas-list">
      <div className="aromas-list__head">
        <input type="text" placeholder="Szukaj..." onChange={filter} />
        <p>
          Wybrane:
          {selectedAromas.map((aroma, i) => (
            <span onClick={() => removeAroma(aroma.id)}>
              {i + 1} {aroma.attributes.flavour} X
            </span>
          ))}
        </p>
      </div>
      <div className="aromas-list__aromas">
        {filteredAromas.map((aroma) => (
          <AromaListItem aroma={aroma} addAroma={addAroma} />
        ))}
      </div>
    </div>
  );
};

export default AromasList;
