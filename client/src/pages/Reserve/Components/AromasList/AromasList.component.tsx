import { ChangeEvent, useContext, useState } from "react";
import { SelectedAromasContext } from "../../../../Context/SelectedAromas.context";
import { IAromaAndRatio } from "../../../../Models/AromaAndRatio.models";
import "./AromasList.modules.scss";
import AromaListItem from "./Component/AromaListItem";
import { ReactComponent as CloseIcon } from "../../../../Icons/close.svg";

interface IAromasListProps {
  aromas: IAromaAndRatio[];
}

const AromasList: React.FC<IAromasListProps> = ({ aromas }) => {
  const [filteredAromas, setFilteredAromas] =
    useState<IAromaAndRatio[]>(aromas);
  const { selectedAromas, addAroma, removeAroma, isInSelectedAromas } =
    useContext(SelectedAromasContext);

  const filter = (e: ChangeEvent<HTMLInputElement>) =>
    setFilteredAromas(
      aromas.filter(
        (aroma) =>
          aroma.attributes.flavour.includes(e.target.value) ||
          aroma.attributes.producent.includes(e.target.value)
      )
    );

  const handleAromaClick = (aroma: IAromaAndRatio) => {
    !isInSelectedAromas(aroma.id) ? addAroma(aroma) : removeAroma(aroma.id);
  };

  return (
    <div className="aromas-list">
      <div className="aromas-list__head">
        <input
          className="aromas-list__head__search-input"
          type="text"
          placeholder="Szukaj..."
          onChange={filter}
        />
        <p className="aromas-list__head__selected">
          Wybrane:
          {selectedAromas.map((aroma, i) => (
            <span onClick={() => removeAroma(aroma.id)}>
              {i + 1}. {aroma.attributes.flavour} <CloseIcon />
            </span>
          ))}
        </p>
      </div>
      <div className="aromas-list__aromas">
        {filteredAromas.length ? (
          filteredAromas.map((aroma) => (
            <AromaListItem
              aroma={aroma}
              handleAromaClick={handleAromaClick}
              isSelected={isInSelectedAromas(aroma.id)}
            />
          ))
        ) : (
          <p>Brak wyników</p>
        )}
      </div>
    </div>
  );
};

export default AromasList;
