import React, { useState } from "react";
import RomanHelper from "./romanHelper";
import "./App.css";

function App() {
  const [arabicValue, setArabicValue] = useState(0);
  const [romanValue, setRomanValue] = useState("");

  const numeralIsValid = num => num >= 1 && num <= 3999;

  const handleArabicChange = event => {
    const value = event.target.value;
    setArabicValue(value);

    if (numeralIsValid(value)) {
      const romanValue = RomanHelper.toRoman(value);
      setRomanValue(romanValue);
    } else {
      setRomanValue("");
    }
  };

  const handleRomanChange = event => {
    const value = event.target.value;

    setRomanValue(value);
  };
  return (
    <div className="App">
      <h1 className="App-title">Modern Roman Numeral Converter</h1>
      <div className="App-container">
        <h2>Arabic style</h2>
        <input
          type="number"
          value={arabicValue}
          onChange={handleArabicChange}
        />
        {!numeralIsValid(arabicValue) && (
          <p className="text-error">The number must be between 1 and 3999</p>
        )}
      </div>
      <div className="App-container">
        <h2>Roman Style</h2>
        <input value={romanValue.toUpperCase()} onChange={handleRomanChange} />
      </div>
    </div>
  );
}

export default App;
