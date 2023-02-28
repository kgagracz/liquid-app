import { createContext, ReactNode, useState } from "react";
import { IAromaAndRatio } from "../Models/AromaAndRatio.models";

export interface ISelectedAromasContext {
  selectedAromas: IAromaAndRatio[];
  addAroma: (product: IAromaAndRatio) => void;
  removeAroma: (productId: IAromaAndRatio["id"]) => void;
}

export const SelectedAromasContext = createContext<ISelectedAromasContext>({
  selectedAromas: [],
  addAroma: () => null,
  removeAroma: () => null,
});

const SelectedAromasProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedAromas, setSelectedAromas] = useState<IAromaAndRatio[]>([]);

  const isInSelectedAromas = (aromaId: IAromaAndRatio["id"]) =>
    !!selectedAromas.find((p) => p.id === aromaId);

  const addAroma = (aroma: IAromaAndRatio) => {
    !isInSelectedAromas(aroma.id) &&
      setSelectedAromas((prev) => [...prev, aroma]);
  };

  const removeAroma = (aromaId: IAromaAndRatio["id"]) => {
    setSelectedAromas((prev) => prev.filter((aroma) => aroma.id !== aromaId));
  };

  return (
    <SelectedAromasContext.Provider
      value={{ selectedAromas, addAroma, removeAroma }}
    >
      {children}
    </SelectedAromasContext.Provider>
  );
};

export default SelectedAromasProvider;
