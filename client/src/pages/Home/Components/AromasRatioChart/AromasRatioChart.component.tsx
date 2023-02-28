import "./AromasRatioChart.modules.scss";
import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { ILiquid } from "../../../../Models/Liquid.models";
import { IAromaAndRatioItem } from "../../../../Models/Liquid.models";
ChartJS.register(ArcElement, Tooltip);

interface IProps {
  aromasAndRatios: IAromaAndRatioItem[];
}

const getAromaRatioInPercents = (aromasAndRatios: IAromaAndRatioItem[]) => {
  let aromasWeightSum = 0;
  aromasAndRatios.forEach((aroma) => (aromasWeightSum += aroma.weightInMg));
  return aromasAndRatios.map(
    (aroma) => (aroma.weightInMg / aromasWeightSum) * 100
  );
};

const AromasRatioChart: React.FC<IProps> = ({ aromasAndRatios }) => {
  const data = {
    labels: aromasAndRatios.map((aroma) => aroma.aroma.data.attributes.flavour),
    datasets: [
      {
        data: getAromaRatioInPercents(aromasAndRatios),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
};
export default AromasRatioChart;
