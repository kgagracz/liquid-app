import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { IAromaAndRatio } from "../Models/AromaAndRatio.models";

export interface ISelectedAromasContext {
  selectedAromas: IAromaAndRatio[];
  setSelectedAromas: Dispatch<SetStateAction<IAromaAndRatio[]>>;
  addAroma: (product: IAromaAndRatio) => void;
  removeAroma: (productId: IAromaAndRatio["id"]) => void;
  isInSelectedAromas: (aromaId: IAromaAndRatio["id"]) => boolean;
  MAX_SELECTED_AROMAS: number;
  updateAroma: (
    aromaId: IAromaAndRatio["id"],
    property: string,
    value: IAromaAndRatio[keyof IAromaAndRatio]
  ) => void;
}

export const SelectedAromasContext = createContext<ISelectedAromasContext>({
  selectedAromas: [],
  setSelectedAromas: () => null,
  addAroma: () => null,
  removeAroma: () => null,
  isInSelectedAromas: () => false,
  MAX_SELECTED_AROMAS: 3,
  updateAroma: () => null,
});

class IAromaAndRatioAttributes {}

const SelectedAromasProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedAromas, setSelectedAromas] = useState<IAromaAndRatio[]>([]);
  const MAX_SELECTED_AROMAS = 3;
  const isInSelectedAromas = (aromaId: IAromaAndRatio["id"]) =>
    !!selectedAromas.find((p) => p.id === aromaId);

  const addAroma = (aroma: IAromaAndRatio) => {
    !isInSelectedAromas(aroma.id) &&
      selectedAromas.length < 3 &&
      setSelectedAromas((prev) => [...prev, aroma]);
  };

  const removeAroma = (aromaId: IAromaAndRatio["id"]) =>
    setSelectedAromas((prev) => prev.filter((aroma) => aroma.id !== aromaId));

  const updateAroma = (
    aromaId: IAromaAndRatio["id"],
    property: string,
    value: IAromaAndRatio[keyof IAromaAndRatio]
  ) => {
    //todo unknown
    const aromaToUpdate = selectedAromas.find((a) => a.id === aromaId);
    if (!aromaToUpdate) {
      return;
    }
    // @ts-ignore TODO - ts-ignore
    aromaToUpdate[property as keyof IAromaAndRatio] = value;
    setSelectedAromas((prev) =>
      prev.map((aroma) =>
        aroma.id === aromaToUpdate.id ? aromaToUpdate : aroma
      )
    );
  };

  return (
    <SelectedAromasContext.Provider
      value={{
        selectedAromas,
        setSelectedAromas,
        addAroma,
        removeAroma,
        isInSelectedAromas,
        MAX_SELECTED_AROMAS,
        updateAroma,
      }}
    >
      {children}
    </SelectedAromasContext.Provider>
  );
};

export default SelectedAromasProvider;
