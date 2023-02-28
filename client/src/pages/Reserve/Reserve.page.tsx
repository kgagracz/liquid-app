import React from "react";
import AromasList from "./Components/AromasList";
import SelectedAromasList from "./Components/SelectedAromasList/SelectedAromasList.component";

const ReservePage: React.FC = () => {
  return (
    <div>
      <h1>Zamów liquid</h1>
      <p>
        Stwórz własny niepowtarzalny liquid. Możesz wybrać maksymalnie 3 aromaty
        oraz określić zawartość każdego z nich w procentach.
      </p>
      <hr className="dotted-divider" />
      <h2>Aromaty</h2>
      <SelectedAromasList />
      <AromasList />
    </div>
  );
};
export default ReservePage;
