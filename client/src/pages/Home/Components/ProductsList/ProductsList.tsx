import React, { useEffect, useState } from "react";
import { ILiquid } from "../../../../Models/Liquid.models";
import LiquidBox from "../LiquidBox";
import { fetchLiquids } from "./ProductsList.service";
import "./ProductsList.modules.scss";

const ProductsList = () => {
  const [liquids, setLiquids] = useState<ILiquid[]>([]);

  useEffect(() => {
    (async () => setLiquids(await fetchLiquids()))();
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
