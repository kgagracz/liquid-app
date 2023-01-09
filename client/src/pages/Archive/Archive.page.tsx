import React from "react";
import ProductsList from "../Home/Components/ProductsList";

const ArchivePage: React.FC = () => (
  <div>
    <h1>Kiedyś dostępne</h1>
    <ProductsList archived />
  </div>
);
export default ArchivePage;
