import React from "react";

function Input({
  amount,
  onAmountChange,
  onFromChange,
  onToChange,
  currencyOptions = [],
  fromCurrency = "usd",
  toCurrency = "inr",
  convert,
  convertedamount
}) {
  return (
    <div className="min-h-screen flex items-center justify-center from-blue-500 to-purple-600 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          💱 Currency Converter
        </h1>

        {/* Amount Input */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">
            AMOUNT
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* From Currency */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">FROM</label>
          <select
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={fromCurrency}
            onChange={(e) => onFromChange && onFromChange(e.target.value)}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* To Currency */}
        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">T0</label>
          <select
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={toCurrency}
            onChange={(e) => onToChange && onToChange(e.target.value)}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
         {/* Convert Button */}
    <button
      className="w-full bg-amber-300 from-blue-600 to-purple-600 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
      onClick={convert}
    >
      Convert
    </button>


    {/* Result Section */}
    <div className="mt-6 text-center">
      <p className="text-gray-700 font-medium">Converted Amount:</p>
      <h2 className="text-2xl font-bold text-blue-600 mt-1">₹{convertedamount}</h2>
    </div>
      </div>
    </div>
  );
}

export default Input;
