import React, { useEffect, useState } from "react";
import AromasList from "./Components/AromasList";
import SelectedAromasList from "./Components/SelectedAromasList/SelectedAromasList.component";
import Modal from "../../Components/Modal";
import Button from "../../Components/Button";
import { fetchAromas } from "./Services/AromasList.service";
import { IAromaAndRatio } from "../../Models/AromaAndRatio.models";

const ReservePage: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [availableAromas, setAvailableAromas] = useState<IAromaAndRatio[]>([]);

  useEffect(() => {
    (async () => {
      const aromas = await fetchAromas();
      setAvailableAromas(aromas);
    })();
  }, []);

  const handleOpenModal = (open: boolean) => setOpenModal(open);
  return (
    <div>
      <h1>Zamów liquid</h1>
      <p>
        Stwórz własny niepowtarzalny liquid. Możesz wybrać maksymalnie 3 aromaty
        oraz określić zawartość każdego z nich w procentach.
      </p>
      <hr className="dotted-divider" />
      <h2>Aromaty</h2>

      <SelectedAromasList aromas={availableAromas} />
      <Button text="Aromaty" onClick={() => handleOpenModal(true)} />
      <Modal open={openModal} handleOpen={handleOpenModal}>
        <AromasList aromas={availableAromas} />
      </Modal>
    </div>
  );
};
export default ReservePage;
