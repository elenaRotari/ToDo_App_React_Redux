import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./dropDown.scss";

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const task = useSelector((state) => state.task);

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
