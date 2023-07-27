import React, { useState } from "react";

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <select
        value={selectedOption}
        onChange={(e) => handleOptionSelect(e.target.value)}
      >
        <option value="">All</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
