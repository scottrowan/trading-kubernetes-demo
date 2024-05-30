import React from "react";

interface TradeSubmissionFormProps {
  onSubmit: (currencyPair: string, amount: number, side: string) => void;
}

const TradeSubmissionForm: React.FC<TradeSubmissionFormProps> = ({
  onSubmit,
}) => {
  const [currencyPair, setCurrencyPair] = React.useState<string>("USD/GBP");
  const [amount, setAmount] = React.useState<number>(100000);
  const [side, setSide] = React.useState<string>("BUY");

  const handleSubmit = () => {
    onSubmit(currencyPair, amount, side);
    setCurrencyPair("USD/GBP");
    setAmount(100000);
    setSide("BUY");
  };

  return (
    <form className="mt-5 flex flex-col w-1/2 self-center">
      <div className="">
        <label
          htmlFor="Currency Pair"
          className="text-center block mb-1 text-lg font-medium text-gray-900"
        >
          Currency Pair
        </label>
        <select
          id="currency-pair"
          className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5"
          value={currencyPair}
          onChange={(e) => setCurrencyPair(e.target.value)}
          required
        >
          <option value="USD/GBP">USD/GBP</option>
          <option value="USD/EUR">USD/EUR</option>
          <option value="USD/JPY">USD/JPY</option>
          <option value="USD/AUD">USD/AUD</option>
          <option value="USD/CAD">USD/CAD</option>
        </select>
      </div>
      <div className="mt-3">
        <label
          htmlFor="amount"
          className="text-center block mb-1 text-lg font-medium text-gray-900"
        >
          Amount
        </label>
        <input
          type="number"
          id="amount"
          className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5"
          placeholder="100000"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          required
        />
      </div>
      <div className="my-3">
        <label
          htmlFor="Buy / Sell"
          className="text-center block mb-1 text-lg font-medium text-gray-900"
        >
          Buy / Sell
        </label>
        <select
          id="side"
          className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5"
          value={side}
          onChange={(e) => setSide(e.target.value)}
          required
        >
          <option value="BUY">BUY</option>
          <option value="SELL">SELL</option>
        </select>
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="self-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default TradeSubmissionForm;
