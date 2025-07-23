import React, { useState } from "react";
// P(r(1+r)^n/((1+r)^n)-1))
//principal = p
//r = rate of interest /12/100
//n = tenure in months
const MortageCalculator = () => {
  const [amount, setAmount] = useState(null);
  const [rate, setRate] = useState(null);
  const [tenure, setTenure] = useState(null);

  const handleChange = (e) => {
    console.log(`${e.target.id}: ${e.target.value}`);
  };
  return (
    <div className="container">
      <h2 className="text-2xl text-gray-800 font-semibold mt-4">
        Mortage Emi Calculator
      </h2>
      <div className="inputs-container">
        <div className="input-label-container">
          <label htmlFor="principal" className="input-label">
            Enter Loan Amount
          </label>
          <input
            type="text"
            id="principal"
            placeholder="Enter the amount..."
            className="inputs"
            onChange={(e) => handleChange(e)}
            value={amount}
          />
        </div>
        <div className="input-label-container">
          <label htmlFor="interest" className="input-label">
            Interest Rate(%)
          </label>
          <input
            type="text"
            id="interest"
            placeholder="Rate..."
            className="inputs"
            value={rate}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-label-container">
          <label htmlFor="tenure" className="input-label">
            Length of Loan
          </label>
          <input
            type="text"
            id="tenure"
            placeholder="Enter in months..."
            className="inputs"
            value={tenure}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <button className="border-2 border-gray-600 p-3 rounded-md bg-gray-300 hover:cursor-pointer text-sm font-semibold mt-3 ">
        Calculate
      </button>
      <p className="text-2xl text-gray-800 text-semibold">
        Your Loan Amount is $2000
      </p>
    </div>
  );
};

export default MortageCalculator;
