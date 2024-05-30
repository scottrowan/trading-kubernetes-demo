import React from "react";
import { Trade } from "../entities/Trade.ts";

const TradeHistoryTable: React.FC<Trade> = ({ tradeHistory }) => {
  return (
    <div className="mt-5 flex flex-col self-center w-full border-b-2 overflow-auto">
      <div className="text-lg flex flex-row w-full border-t-2">
        <div className="ml-5 w-1/6 flex justify-left">Id</div>
        <div className="w-1/4 flex justify-center">Pair</div>
        <div className="w-1/2 flex justify-center overflow-auto">Amount</div>
        <div className="mr-5 w-1/4 flex justify-center">Buy/Sell</div>
      </div>
      {tradeHistory.map((trade: Trade) => (
        <div key={trade.id} className="text-lg flex flex-row w-full border-t-2">
          <div className="ml-5 w-1/6 flex justify-left">{trade.id}</div>
          <div className="w-1/4 flex justify-center">{trade.currencyPair}</div>
          <div className="w-1/2 mr-5 flex justify-end overflow-auto">
            {trade.amount}
          </div>
          <div className="mr-5 w-1/4 flex justify-center">{trade.side}</div>
        </div>
      ))}
    </div>
  );
};

export default TradeHistoryTable;
