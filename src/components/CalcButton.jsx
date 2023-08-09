import React from "react";

const CalculatorButton = ({ value, onClick }) => {
  return (
    <button className="calculator-button" onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default CalculatorButton;
