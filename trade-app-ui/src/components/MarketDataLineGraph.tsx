import React from "react";
import { MarketData } from "../entities/MarketData.ts";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  scales,
  plugins,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const options = {
  plugins: {
    title: {
      display: true,
      text: "USD / GBP (1 Year)",
    },
  },
  scales: {
    x: {
      ticks: {
        stepSize: "01",
        color: "black",
        font: {
          size: 12,
          weight: "normal",
          family: "Arial",
        },
      },
    },
    y: {
      min: 0.76,
      max: 0.84,
      ticks: {
        stepSize: 0.02,
        color: "black",
        font: {
          size: 14,
          weight: "normal",
          family: "Arial",
        },
      },
    },
  },
};

const MarketDataLineGraph: React.FC<MarketData[]> = ({ marketData }) => {
  const labels = marketData.map((data: MarketData) =>
    data.date.split("-", 2).join("-")
  );
  const marketDataRatios = marketData.map((data: MarketData) => data.ratio);
  const data = {
    labels,
    datasets: [
      {
        data: marketDataRatios,
        borderColor: "rgb(0, 99, 132)",
        backgroundColor: "rgba(0, 99, 132, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default MarketDataLineGraph;
