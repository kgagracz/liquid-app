import React, { useEffect, useState } from "react";
import { ILiquid } from "../../../../Models/Liquid.models";
import LiquidBox from "../LiquidBox";
import { fetchLiquids } from "./ProductsList.service";
import "./ProductsList.modules.scss";
import { IProductsListProps } from "./ProductsList.models";

const ProductsList: React.FC<IProductsListProps> = ({ archived = false }) => {
  const [liquids, setLiquids] = useState<ILiquid[]>([]);

  useEffect(() => {
    (async () => setLiquids(await fetchLiquids(archived)))();
  }, []);

  return (
    <div className="liquids-list">
      {liquids.length &&
        liquids.map((liquid) => (
          <LiquidBox liquid={liquid} key={liquid.attributes.description} />
        ))}
    </div>
  );
};

export default ProductsList;
