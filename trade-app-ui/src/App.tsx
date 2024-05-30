import React, { useEffect } from "react";
import VerticalContainer from "./components/VerticalContainer";
import TradeSubmissionForm from "./components/TradeSubmissionForm";
import TradeHistoryTable from "./components/TradeHistoryTable";
import { Trade } from "./entities/Trade.ts";
import { MarketData } from "./entities/MarketData.ts";
import MarketDataLineGraph from "./components/MarketDataLineGraph.tsx";
import useInterval from "./utils";

function App() {
  const [tradeHistory, setTradeHistory] = React.useState<Trade[]>([]);
  const [marketData, setMarketData] = React.useState<MarketData[]>([]);

  const [tradeSubmitServiceStatus, setTradeSubmitServiceStatus] =
    React.useState<boolean>(true);
  const [tradeHistoryServiceStatus, setTradeHistoryServiceStatus] =
    React.useState<boolean>(true);
  const [marketDataServiceStatus, setMarketDataServiceStatus] =
    React.useState<boolean>(true);

  useInterval(() => {
    getTradeSubmitServiceStatus();
    getTradeHistoryServiceStatus();
    getMarketDataServiceStatus();
    getTradeView();
  }, 1000 * 2);

  useEffect(() => {
    getTradeView();
    getMarketData();
  }, []);

  const getTradeSubmitServiceStatus = async () => {
    fetch("http://localhost:8440/trade-submit/status")
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
        setTradeSubmitServiceStatus(false);
        return null;
      })
      .then((data) => {
        if (data !== null && data.status === "OK") {
          setTradeSubmitServiceStatus(true);
        } else {
          setTradeSubmitServiceStatus(false);
        }
      })
      .catch(() => {
        setTradeSubmitServiceStatus(false);
      });
  };

  const getTradeHistoryServiceStatus = async () => {
    fetch("http://localhost:8442/trade-view/status")
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
        setTradeHistoryServiceStatus(false);
        return null;
      })
      .then((data) => {
        if (data !== null && data.status === "OK") {
          setTradeHistoryServiceStatus(true);
        } else {
          setTradeHistoryServiceStatus(false);
        }
      })
      .catch(() => {
        setTradeHistoryServiceStatus(false);
      });
  };

  const getMarketDataServiceStatus = async () => {
    fetch("http://localhost:8444/market-data/status")
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
        setMarketDataServiceStatus(false);
        return null;
      })
      .then((data) => {
        if (data !== null && data.status === "OK") {
          setMarketDataServiceStatus(true);
        } else {
          setMarketDataServiceStatus(false);
        }
      })
      .catch(() => {
        setMarketDataServiceStatus(false);
      });
  };

  const submitTrade = (currencyPair: string, amount: number, side: string) => {
    fetch("http://localhost:8440/trade-submit", {
      method: "POST",
      body: JSON.stringify({
        currencyPair: currencyPair,
        amount: amount,
        side: side,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status == 201) {
        return response.json();
      }
      return null;
    });
  };

  const getTradeView = async () => {
    fetch("http://localhost:8442/trade-view", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data !== null) {
          setTradeHistory(data);
        }
      });
  };

  const getMarketData = async () => {
    fetch("http://localhost:8444/market-data")
      .then((response) => response.json())
      .then((data) => {
        if (data !== null) {
          setMarketData(data.reverse());
        }
      });
  };

  return (
    <>
      <div className="text-4xl text-center mt-5">FX Trading App</div>
      <div className="mt-8 h-screen flex flex-row">
        <div className="w-1/3 border-r-4">
          <VerticalContainer>
            <div className="text-2xl self-center">Trade Submission Service</div>
            <div className="m-5 h-full border-4 flex flex-col">
              <div className="mt-10 text-xl font-bold self-center">
                Trade Submission
              </div>
              {tradeSubmitServiceStatus ? (
                <TradeSubmissionForm onSubmit={submitTrade} />
              ) : (
                <div className="mt-10 mx-5 text-center font-bold text-red-500">
                  Trade Submission Service is down!
                </div>
              )}
            </div>
          </VerticalContainer>
        </div>
        <div className="w-1/3 border-r-4">
          <VerticalContainer>
            <div className="text-2xl self-center">Trade View Service</div>
            <div className="m-5 h-full border-4 flex flex-col">
              <div className="mt-10 text-xl font-bold self-center">
                Trade History
              </div>
              {tradeHistoryServiceStatus ? (
                <TradeHistoryTable tradeHistory={tradeHistory} />
              ) : (
                <div className="mt-10 mx-5 text-center font-bold text-red-500">
                  Trade History Service is down!
                </div>
              )}
            </div>
          </VerticalContainer>
        </div>
        <div className="w-1/3">
          <VerticalContainer>
            <div className="text-2xl self-center">Market Data Service</div>
            <div className="m-5 pl-2 pr-1 h-full border-4 flex flex-col">
              <div className="mt-10 mb-5 text-xl font-bold self-center">
                Market Data
              </div>
              {marketDataServiceStatus ? (
                <MarketDataLineGraph marketData={marketData} />
              ) : (
                <div className="mt-5 mx-5 text-center font-bold text-red-500">
                  Market Data Service is down!
                </div>
              )}
            </div>
          </VerticalContainer>
        </div>
      </div>
    </>
  );
}

export default App;
