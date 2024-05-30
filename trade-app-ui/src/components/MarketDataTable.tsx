import React from "react";
import { MarketData } from "../entities/MarketData.ts";

const MarketDataTable: React.FC<MarketData[]> = ({ marketData }) => {
  return (
    <div className="mt-5 flex flex-col self-center w-full border-b-2 overflow-auto">
      <div className="text-lg flex flex-row w-full border-t-2">
        <div className="ml-5 w-1/3 flex justify-center">Id</div>
        <div className="w-1/3 flex justify-center">Date</div>
        <div className="w-1/3 flex justify-center">Ratio</div>
      </div>
      {marketData.map((data: MarketData) => (
        <div className="text-lg flex flex-row w-full border-t-2">
          <div className="ml-5 w-1/3 flex justify-center">{data.id}</div>
          <div className="w-1/3 flex justify-center">
            {data.date.toString().split("T")[0]}
          </div>
          <div className="w-1/3 flex justify-center">{data.ratio}</div>
        </div>
      ))}
    </div>
  );
};

export default MarketDataTable;
